import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email provider
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your email app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // your email
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
