import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

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
      validate: [isEmail, "invalid email"],
    },
    phone: {
      type: String,
      trim: true,
      validate: {
        validator: function (value) {
          return /^\d{10}$/.test(value);
        },
        message: "Invalid phone number",
      },
    },
    age: {
      type: String,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password can't be blank"],
      trim: true,
    },
    userType: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
    }
  },

  { minimize: false, timestamps: true }
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
    // this.tokens.push({ token });
    this.token = token;
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
    throw new Error("user not found , please register");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("password not matched ");
  }
  console.log("welcome");

  return user;
};

const User = mongoose.model("User", UserSchema);
export default User;
