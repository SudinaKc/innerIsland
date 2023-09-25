import nodemailer from "nodemailer";
// controllers/paymentController.js
export const sendPaymentConfirmationEmail = async (req, res) => {
  const { userEmail, patientName, psychologistEmail, PsychologistName, appointmentDate, appointmentTime, razorpay_payment_id, duration, problem,bookedId } = req.body;

  try {
    // Compose the email content
    const userEmailContent = `
    Thank you for booking the appointment!
    Psychologist_Name: ${PsychologistName}
    psychologist Email:${psychologistEmail}
    Appointment Date: ${appointmentDate}
    Appointment Time: ${appointmentTime}
    Payment ID: ${razorpay_payment_id}
    Duration:${duration}
    problem:${problem}
    sessionLink:${`http://localhost:5173/call/${bookedId}/${patientName.split(" ")[0]}`}

    We look forward to meeting you on the scheduled date. In case of any changes or cancellations, please inform us at least 12 hours before the appointment.

    If you have any questions or need further assistance, please don't hesitate to contact us.

    Best regards,
      innerIsland
  `;
    const psychologistEmailContent = `
    Appointment booked with you!
    Patient Name:${patientName}
    Patient Email: ${userEmail}
    Appointment Date: ${appointmentDate}
    Appointment Time: ${appointmentTime}
    Payment ID: ${razorpay_payment_id}
    Duration:${duration}
    problem:${problem}
    sessionLink:${`http://localhost:5173/call/${bookedId}/${PsychologistName.split(" ")[0]}`}

    You have an appointment with a user. Please be prepared for the session.

    If you have any questions or need further assistance, please don't hesitate to contact us.

    Best regards,
    innerIsland
  `;

    // Create a transporter for Nodemailer (using Gmail as an example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "innerisland4@gmail.com", // Replace with your Gmail account
        pass: "dtcrxroyjaxxomex", // Replace with your Gmail password or app password
      },

    });

    // Send the email to user(patient)
    await transporter.sendMail({
      from: "innerisland4@gmail.com", // Replace with your Gmail account
      to: `${userEmail}`, //put ${userEmail}
      subject: "Appointment Confirmation",
      text: userEmailContent,
    });
    // Send the email to psychologist
    await transporter.sendMail({
      from: "innerisland4@gmail.com", // Replace with your Gmail account
      to: "thelastking2058@gmail.com", //put ${psychologistEmail}
      subject: "Appointment Confirmation",
      text: userEmailContent,
    });

    // Respond to the frontend with a success message
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

