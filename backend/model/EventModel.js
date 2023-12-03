import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const Event = mongoose.model("Event", eventSchema)
export default Event