import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcryptjs";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,

      required: [true, "can't be blank"],
      index: true,
      validate: [isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
      trim: true,
    },
    picture: {
      type: String,
    },
    newMessage: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false }
);
// UserSchema.methods.toJSON = function () {
//   const user = this.toObject();
//   delete user.password;
//   return user;
// };

UserSchema.pre("save", async function (next) {
  // Hash the password only if it is modified or newly created
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }   
});

UserSchema.statics.findByCredentials =async function(email, password)  {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  console.log("welcome");

  return user;
};

const User = mongoose.model("User", UserSchema);
export default User;
