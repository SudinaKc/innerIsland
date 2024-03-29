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
    payment_id: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment date can't be blank"],
    },
    appointmentTime: {
      type: String,
      required: [true, "Appointment time can't be blank"],
    },
    duration: {
      type: Number
    },
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
    prescription: {
      type: String
    }
  },
  { minimize: false, timestamps: true }
);

const Booked = mongoose.model("Booked", BookedSchema);



export default Booked;
