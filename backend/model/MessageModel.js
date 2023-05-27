import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    from: {
      // type: mongoose.Schema.Types.ObjectId,
      type: Object,
    },
    socketid: {
      type: String,
    },
    time: {
      type: String,
    },
    date: {
      type: String,
    },
    to: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);
export default Message;
