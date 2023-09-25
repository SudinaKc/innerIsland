import express from "express";
import { createRating, getAverageRating, getRatingsAndReviews } from "../controllers/ratingAndReview.js";
const router = express.Router();



// create rating
router.post("/createRating", createRating)
router.get("/getRating/:id",getRatingsAndReviews)
router.get("/getAverageRating/:id",getAverageRating)


export default router;
