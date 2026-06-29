module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: "GROQ_API_KEY is not configured" });
  }

  const systemPrompt = `You are an assistant on Sumeya Hassen's portfolio website.
Use the information below to answer questions about Sumeya.

Name: Sumeya Hassen
Title: Intermediate Software Developer specializing in mobile and web app development include ERP system developer using ODOO
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
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);
      return res.status(500).json({ error: "Groq API error", details: data });
    }

    const reply =
      data.choices?.[0]?.message?.content || "Sorry, I couldn't process that.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
