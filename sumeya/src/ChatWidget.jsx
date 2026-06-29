import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }
      setMessages(prev => [...prev, { role: "assistant", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", text: "Error connecting to assistant." },
      ]);
    }
    setLoading(false);
  }

  // ---- CLOSED: just show the icon button ----
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat assistant"
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
      >
        💬
      </button>
    );
  }

  // ---- OPEN: show the full chat window ----
  return (
    <div className="fixed bottom-5 right-5 w-80 h-[420px] border border-gray-200 rounded-xl bg-white shadow-xl flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-medium">Ask me anything</span>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
          className="text-white text-lg hover:opacity-80"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm">
            Hi! Ask me about Sumeya's projects, skills, or availability.
          </p>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-sm text-gray-400">Thinking...</p>}
      </div>

      {/* Input row */}
      <div className="flex border-t border-gray-100 p-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Type a message..."
          className="flex-1 border-none outline-none px-2 py-2 text-sm text-black"
        />
        <button
          onClick={send}
          className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}