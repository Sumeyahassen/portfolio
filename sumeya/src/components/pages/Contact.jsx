import React, { useState } from "react";
import {
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaStackOverflow,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-start justify-center px-6 md:px-20 py-12 gap-10">
      {/* Contact Form */}
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            rows="4"
            name="message"
            required
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full border px-3 py-2 dark:text-gray-800 rounded focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links (unchanged) */}
      <div className="flex flex-col space-y-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-semibold text-center md:text-left">
          Connect With Me
        </h2>
        <div className="flex flex-col space-y-4">
          {/* Telegram */}
          <a
            href="https://t.me/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-600 transition"
          >
            <FaTelegram className="text-blue-600 text-3xl" />
            <span className="text-lg">Telegram</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sumeya-hassen-9711092a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-600 transition"
          >
            <FaLinkedin className="text-blue-600 text-3xl" />
            <span className="text-lg">LinkedIn</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100090671768036"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-600 transition"
          >
            <FaFacebook className="text-blue-600 text-3xl" />
            <span className="text-lg">Facebook</span>
          </a>
          {/* Stack Overflow */}
          <a
            href="https://stackoverflow.com/users/28714047/sumeya-hassen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-600 transition"
          >
            <FaStackOverflow className="text-blue-600 text-3xl" />
            <span className="text-lg">Stack Overflow</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/sumeyahassen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-blue-600 transition"
          >
            <AiFillGithub className="text-blue-600 text-3xl" />
            <span className="text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
