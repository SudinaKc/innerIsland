import mongoose, { Schema } from "mongoose";

const BookedSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID can't be blank"],
    },
    psychologistId: {
      type: Schema.Types.ObjectId,
      ref: "Psychologist",

      required: [true, "Psychologist ID can't be blank"],
    },
    appointmentDate: {
      type: Date,
      // type: String,
      required: [true, "Appointment date can't be blank"],
    },
    appointmentTime: {
      type: String,
      required: [true, "Appointment time can't be blank"],
    },
    // move this to userModel
    // address: {
    //     // user address
    //     type: String
    // },
    // age: {
    //     // user age
    //     type: String
    // },
    problem: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    joinKey: {
      type: String,
      default: null,
    },
  },
  { minimize: false, timestamps: true }
);

const Booked = mongoose.model("Booked", BookedSchema);

export default Booked;
