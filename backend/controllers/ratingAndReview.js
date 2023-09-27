import mongoose from "mongoose";
import Rating from "../model/RatingAndReview.js";
// Create rating and review
export const createRating = async (req, res) => {
    try {
        const { userId, psychologistId, rating, review } = req.body;

        // Check if userId and psychologistId are provided
        if (!userId || !psychologistId) {
            return res.status(400).json({
                success: false,
                message: "Both userId and psychologistId are required."
            });
        }

        // Check if the user has booked an appointment
        const userDetail = await Booked.findOne({ userId });
        if (!userDetail) {
            return res.status(400).json({
                success: false,
                message: "User has not booked an appointment with the psychologist."
            });
        }

        // Create a new rating and review
        const ratingDetails = await Rating.create({
            userId,
            psychologistId,
            rating,
            review
        });

        res.status(200).json({
            success: true,
            message: "Rating/review created successfully",
            ratingDetails
        });
    } catch (error) {
        // Handle any errors that occur during the execution of the function
        console.error("Error creating rating/review:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while creating the rating/review."
        });
    }
};

// // Update rating and review
export const updateRating = async (req, res) => {
    try {
        const { id, rating, review } = req.body;
        console.log("hello from update rating")

        // Check if userId and psychologistId are provided
        // if (!userId || !psychologistId) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Both userId and psychologistId are required."
        //     });
        // }

        // Check if the user has booked an appointment
        // const userDetail = await Booked.findOne({ id });
        // if (!userDetail) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "User has not booked an appointment with the psychologist."
        //     });
        // }

        // // Update the existing rating and review if it exists, or create a new one if not found
        // const filter = { userId, psychologistId };
        // const update = { rating, review };
        // const options = { upsert: true, new: true };
        // const ratingDetails = await Rating.findOneAndUpdate(filter, update, options);

        const ratingDetails = await Rating.findByIdAndUpdate(id, {
            rating,
            review
        }, { new: true });



        res.status(200).json({
            success: true,
            message: "Rating/review updated successfully",
            ratingDetails
        });
    } catch (error) {
        console.error("Error updating rating/review:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the rating/review."
        });
    }
};

// Get ratings and reviews for a psychologist
export const getRatingsAndReviews = async (req, res) => {
    try {


        const psychologistId = new mongoose.Types.ObjectId(req.params.id);
        // Find all ratings and reviews for the given psychologist
        const ratingsAndReviews = await Rating.find({ psychologistId }).populate("userId").sort({ createdAt: -1 }).exec();
        console.log(ratingsAndReviews)
        res.status(200).json({
            success: true,
            message: "Ratings and reviews retrieved successfully",
            ratingsAndReviews
        });
    } catch (error) {
        console.error("Error retrieving ratings and reviews:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving ratings and reviews."
        });
    }
};


// Get average rating and count of users who rated for a psychologist
export const getAverageRating = async (req, res) => {
    try {
        const psychologistId = new mongoose.Types.ObjectId(req.params.id);

        // Calculate the average rating for the given psychologist
        const averageRating = await Rating.aggregate([
            { $match: { psychologistId } },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: "$rating" },
                    numRatings: { $sum: 1 } // Count the number of ratings
                }
            }
        ]);

        res.status(200).json({
            success: true,
            message: "Average rating and rating count retrieved successfully",
            averageRating: averageRating[0]?.averageRating || 0,
            numRatings: averageRating[0]?.numRatings || 0
        });
    } catch (error) {
        console.error("Error retrieving average rating:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving the average rating."
        });
    }
};
