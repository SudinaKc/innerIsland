import express from "express";
import User from "../model/UserModel.js";
const router = express.Router();
import authentication from "../middleware/authentication.js";
// Creating user
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, picture } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json("please,fill the empty field");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json("user already exists");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      picture,
    });
    user.status = "online";
    const token = await user.generateToken(); // there is user.save() in this function
    const options = {
      // new Date(new Date() + 24 * 60 * 1000)  //incorrect
      expires: new Date(Date.now() + 5 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options);
    res.status(200).json({ user });
  } catch (e) {
    return res.status(400).json(e.message);
  }
});

// login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = "online";
    const token = await user.generateToken(); // there is user.save() in this function
    const options = {
      // new Date(new Date() + 24 * 60 * 1000)  //incorrect
      expires: new Date(Date.now() + 5 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options);
    res.status(200).json({
      message: "login success",
      user,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// chat get request
router.get("/chat", authentication, (req, res) => {
  res.json("hello from chat section");
  console.log("hello from chat section");
});

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public
router.get("/", authentication, async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { firstName: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  try {
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default router;
