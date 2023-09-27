import express from "express";
import { getUser, loginUser, registerUser } from "../controllers/userController.js";
// import authentication from "./../middleware/authentication.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

/* READ */
router.get("/:id",getUser);

/* UPDATE */

export default router;


// create -- post
// read -- get
// update-- put , patch
// delete-- delete