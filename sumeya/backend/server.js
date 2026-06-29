import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 10000;
app.get("/send-email",(req,res)=>{
  res.send("Hello from the backend!");
})
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
    to: process.env.EMAIL_USER, // my email
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

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const systemPrompt = `You are an assistant on Sumeya Hassen's portfolio website.
Use the information below to answer questions about Sumeya.

Name: Sumeya Hassen
Title:  Software Engineer specializing in mobile and web app development include ERP system developer using ODOO
Education: Software Engineering student at Bahir Dar University
Email: sumeyahassensumi@gmail.com
Phone: +251912380076
GitHub: https://github.com/sumeyahassen
LinkedIn: https://www.linkedin.com/in/sumeya-hassen-9711092a1/
Telegram: https://t.me/SumeyaHassen
Portfolio: https://sumeya-hassen.vercel.app/

Skills:
- Programming Languages: JavaScript, Dart, Java, Python, C++
- Frontend: React, Flutter, Tailwind CSS, Bootstrap
- Backend: Node.js, Express.js
- Databases: MongoDB, PostgreSQL, MySQL
- Tools: Git, GitHub, GitLab, Firebase
- Soft Skills: Problem solving, teamwork, communication, creativity

Mobile App Projects:
- Shoose E-commerce App: Flutter e-commerce app with product listing, cart, login/signup
- Power Learn African Bank App: Mobile banking app built with Flutter
- Campus Student Support App (BDU Support): Student support app for Bahir Dar University
- Mohas Coaching App: Coaching mobile app built with Flutter

Web Projects:
- Health Emergency Support Web App: Web app for health emergency support
- Random Chat App Admin Dashboard: Admin dashboard for a chat application
- Portfolio Website: Personal portfolio built with React, deployed at https://sumeya-hassen.vercel.app/
- HM Computer Website: Business website deployed at https://hmcomputer.vercel.app/

Availability: Open to freelance projects and junior/intermediate roles, remote or in Addis Ababa.

Rules:
1. If the question is about Sumeya, answer using the information above.
2. If the question is NOT about Sumeya, politely say you can only help with questions about her and her work.
3. If asked something about Sumeya not covered above, say you don't have that info.
4. Keep answers short and friendly.`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't process that.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
