import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { getUser } from "../controllers/userController.js";
import authentication from "./../middleware/authentication.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

/* READ */
router.get("/:id", authentication, getUser);

/* UPDATE */

export default router;
