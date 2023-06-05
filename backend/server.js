import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import chatRoute from "./routes/chatRoutes.js";
import connectDB from "./database/connectDB.js";
import cookieParser from "cookie-parser";
import Message from "./model/MessageModel.js";
dotenv.config();
const app = express();
const rooms = ["general", "tech", "finance", "crypto"];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());    
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser())              
app.use("/users", userRoutes); // Mount the userRouter at the root path ("/")
app.use("/api/chat",chatRoute)
// Create HTTP server
const httpServer = createServer(app);

// Create socket.io server   
const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173", // frontend link
    methods: ["GET", "POST"],
  },
});
async function getLastMessageFromRoom(room){
  let roomMessages=await Message.aggregate([
    {$match:{to:room}},
    {$group:{_id:'$date',MessagesByDate:{$push:'$$ROOT'}}}
  ])
  return roomMessages
}
// function sortRoomMessagesByDate

// Socket.io event handling
io.on("connection", (socket) => {
  // Handle socket.io events
  console.log("A client has connected.");
  socket.on("join-room",async(room)=>{
    socket.join(room);
    let roomMessages=await getLastMessageFromRoom(room)
  })
});

// Express routes

const port = process.env.PORT || 3000;

// Start the server
const Connection = async () => {
  try {
    await connectDB();
    httpServer.listen(port, () => {
      console.log("Server is listening on port", port);
    });
  } catch (error) {
    console.log(error);
  }
};

Connection();
