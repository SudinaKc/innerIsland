import express from "express";
import User from "../model/UserModel.js";
const router = express.Router();

// Creating user
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, picture } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json("please,fill the empty field");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      picture,
    });
    res.status(200).json({ user });
  } catch (e) {
    if (e.code === 11000) {
      res.status(409).json("user already exist");
    } else {
      res.status(400).json(e.message);
    }
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password); // findByCredential is defined in model
    user.status = "online";
    // generate jwt token
    const token = await user.generateToken();
    // cookie
    const options = {
      expires: new Date(new Date() + 3 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("jwttoken", token, options);
    res.status(200).json({
      message: "login success",
      user,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;
