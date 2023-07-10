import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://anand:anand@cluster0.6guliqn.mongodb.net/innerIsland");
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
