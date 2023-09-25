import crypto from "crypto";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import { Payment } from "../model/PaymentModel.js";
dotenv.config();
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
export const createOrder = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", "BeGu6yJGVtKeODIKooqL5YAE")
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      const newPayment = new Payment({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      });

      await newPayment.save();



      res.status(200).json({
        success: true,
        message: "Payment successful! Thank you for booking the session.",
        // reference: razorpay_payment_id,
        payment_id: newPayment._id
      });

      // res.redirect(
      //   `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      // );

    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};
