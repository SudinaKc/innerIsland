import mongoose, { Schema } from "mongoose";
const RatingSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    psychologistId: {
        type: Schema.Types.ObjectId,
        ref: "Psychologist"
    },
    rating: {
        type: Number
    },
    review: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Rating = mongoose.model("Rating", RatingSchema);

export default Rating;