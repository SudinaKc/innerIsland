import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./database/connectDB.js";

dotenv.config();
const app = express();
const rooms = ["general", "tech", "finance", "crypto"];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", userRouter); // Mount the userRouter at the root path ("/")

// Create HTTP server
const httpServer = createServer(app);

// Create socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // frontend link
    methods: ["GET", "POST"],
  },
});

// Socket.io event handling
io.on("connection", (socket) => {
  // Handle socket.io events
  console.log("A client has connected.");
});

// Express routes
app.get("/", (req, res) => {
  res.json({
    name: "anand",
  });
});

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
