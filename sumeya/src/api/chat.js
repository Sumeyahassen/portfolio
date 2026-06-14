export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  const aboutMe = `
My name is John. I am a junior Flutter developer based in Addis Ababa.

My projects:
- BMI Calculator app: calculates body mass index, built with Flutter and Cubit.
- E-commerce app: Flutter + Firebase, login/signup, cart, product listing.
- Portfolio website: built with React, deployed on Vercel.

My skills: Flutter, Dart, Firebase, REST APIs, Git.
Availability: Open to freelance projects and junior roles, remote or in Addis Ababa.
`;

  const systemPrompt = `You are an assistant on John's portfolio website.
Use the information below to answer questions about John.

${aboutMe}

Rules:
1. If the question is about Sumeya, answer using the information above.
2. If the question is NOT about Sumeya, politely say you can only help with questions about him and his work.
3. If asked something about Sumeya not covered above, say you don't have that info.
4. Keep answers short and friendly.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          systemInstruction: { parts: [{ text: systemPrompt }] },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API error:", data);
      return res.status(500).json({ error: "Gemini API error", details: data });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}