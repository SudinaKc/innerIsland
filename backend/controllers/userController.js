import { RegisterSuccessMail } from "../mail/template/RegisterSuccessMail.js";
import User from "../model/UserModel.js";
import mailSender from "../utils/mailSender.js";

// REGISTER
export const registerUser = async (req, res) => {
  try {

    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      age,
      gender,
      address,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !phone ||
      !age ||
      !address ||
      !gender
    ) {
      return res.status(400).json("please, fill the empty field");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json("user already exists");
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      age,
      address,
      gender,
      password,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    const token = await user.generateToken();

    await mailSender(
      email,
      "Welcome to InnerIsland - Registration Successful 🎉",
      RegisterSuccessMail(firstName, lastName)
    );

    res.status(200).json({ 
      success:true,
      message:"register successfull",
      user });
  } catch (e) {
    return res.status(400).json(e.message);
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found , please register",
      });
    }
    user.status = "online";
    const token = await user.generateToken();

    res.status(200).json({
      message: "login success",
      user,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// **************************************************
// get single user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// export const getUserFriends = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );
//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

/* UPDATE */
// export const addRemoveFriend = async (req, res) => {
//   try {
//     const { id, friendId } = req.params;
//     const user = await User.findById(id);
//     const friend = await User.findById(friendId);

//     if (user.friends.includes(friendId)) {
//       user.friends = user.friends.filter((id) => id !== friendId);
//       friend.friends = friend.friends.filter((id) => id !== id);
//     } else {
//       user.friends.push(friendId);
//       friend.friends.push(id);
//     }
//     await user.save();
//     await friend.save();

//     const friends = await Promise.all(
//       user.friends.map((id) => User.findById(id))
//     );
//     const formattedFriends = friends.map(
//       ({ _id, firstName, lastName, occupation, location, picturePath }) => {
//         return { _id, firstName, lastName, occupation, location, picturePath };
//       }
//     );

//     res.status(200).json(formattedFriends);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
