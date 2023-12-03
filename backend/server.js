import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import connectDB from "./database/connectDB.js";
import psychologistRoutes from "./routes/PsychologistRoutes.js";
import bookedRoutes from './routes/bookedRoutes.js';
import eventRoutes from "./routes/eventRoute.js";
import paymentRoute from "./routes/paymentRoute.js";
import ratingAndReview from "./routes/ratingAndReview.js";
import sendEmailRoute from "./routes/sendEmailRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use cors() middleware with your specified origins
app.use(
  cors({
    origin: [
      process.env.FRONTEND,
      "https://innerisland-frontend.onrender.com",
      "https://innerisland.netlify.app",
    ],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/api", paymentRoute);
app.use("/psychologist", psychologistRoutes);
app.use("/api", bookedRoutes);
app.use("/api", ratingAndReview);
app.use("/api", sendEmailRoute);
app.use("/api", eventRoutes)

const httpServer = createServer(app);

// Remove the manual CORS headers here

const port = process.env.PORT || 3000;

const Connection = async () => {
  try {
    // CONNECT TO DB **********************
    await connectDB();
    //  CREATE SERVER*****************
    httpServer.listen(port, () => {
      console.log("Server is listening on port", port);
    });
  } catch (error) {
    console.log(error);
  }
};

app.use("/", (req, res) => {
  res.send("hello from server");
});

Connection();
