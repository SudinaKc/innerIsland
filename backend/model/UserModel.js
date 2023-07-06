import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstname can't be blank"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName can't be blank"],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: [true, "Email can't be blank"],
      index: true,
      validate: [isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: [true, "Password can't be blank"],
      trim: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { minimize: false },
  { timestamps: true }
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
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});
// generate jwt token
UserSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign({ userId: this._id }, "innerIsland");
    this.tokens.push({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to generate token");
  }
};

// login logic
UserSchema.statics.findByCredentials = async function (email, password) {
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
