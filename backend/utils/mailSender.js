import nodemailer from "nodemailer";
const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false, // Set to true if your SMTP server requires TLS
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });


        let info = await transporter.sendMail({
            from: "Innerisland",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        })
        console.log(info)
        return info;
    } catch (error) {
        console.log(error.message)

    }
}
export default mailSender