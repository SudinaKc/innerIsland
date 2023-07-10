import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./database/connectDB.js";
import psychologistRoutes from "./routes/PsychologistRoutes.js";
import bookedRoutes from './routes/bookedRoutes.js';
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/users", userRoutes); // Mount the userRouter at the root path ("/")
app.use(postRoutes);    
app.use("/psychologist",psychologistRoutes)
app.use("/api",bookedRoutes);
// Create HTTP server
const httpServer = createServer(app);

// Create socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // frontend link
    methods: ["GET", "POST"],
  },
});

app.use("/rooms", (req, res) => {
  res.send(rooms);
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

app.use("/",(req,res)=>{
    res.send("hello from server");
})
Connection();
