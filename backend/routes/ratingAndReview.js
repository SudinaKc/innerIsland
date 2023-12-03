import express from "express";
import { createRating, getAverageRating, getRatingsAndReviews, updateRating } from "../controllers/ratingAndReview.js";
const router = express.Router();



// create rating
router.post("/createRating", createRating)
router.get("/getRating/:id",getRatingsAndReviews)
router.get("/getAverageRating/:id",getAverageRating)
router.patch("/updateRating",updateRating)


export default router;
