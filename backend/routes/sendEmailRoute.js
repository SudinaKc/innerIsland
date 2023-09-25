import express from "express";
import { sendPaymentConfirmationEmail } from "../controllers/sendMailController.js";

const router = express.Router();


router.post("/paymentSuccess",sendPaymentConfirmationEmail)
export default router;
  