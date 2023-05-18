import express from "express";
import User from "../model/UserModel.js";
const router = express.Router();

// Creating user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    console.log(req.body);
    const user = await User.create({ name, email, password, picture });
    res.status(200).json(user);
  } catch (e) {
    let msg;
    e.code === 11000 ? (msg = "user already exist") : (msg = e.message);
    res.status(400).json(msg);
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password); // findByCredential is defined in model
    user.status = "online";
    await user.save();
    // Exclude password field and send response as JSON
    res.send(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

export default router;
