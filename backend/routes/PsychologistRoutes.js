import express from "express";
import { getAllPsychologist, getPsychologistDetail, loginPsychologist } from "../controllers/psychologistController.js";
const router = express.Router();
// router.post("/register", registerUser);

// login Psychologist routes.
router.post("/login", loginPsychologist);



// get all Psychologist

router.get("/all", getAllPsychologist);

router.get('/all/:id', getPsychologistDetail);

/* READ */
// router.get("/:id", authentication, getUser);

/* UPDATE */

export default router;
