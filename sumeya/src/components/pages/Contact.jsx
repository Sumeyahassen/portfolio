import { FastForward } from "lucide-react";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaTelegram,
  FaLinkedin,
  FaFacebook,
  FaStackOverflow,
} from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"; // Ant Design GitHub icon

function Contact() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-start justify-center px-6 md:px-20 py-12 bg-gray-100 gap-10">
      {/* Contact Form */}
      <div>
        <h1 className="text-4xl font-bold mb-6 ml-20">Contact Me</h1>
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border px-3 py-2 rounded"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Social / Personal Contact */}
      <div className="flex flex-col space-y-6 mt-6 pt-11 md:mt-0">
        
        {/* Social Links */}
        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="text-blue-600 text-5xl hover:text-gray-400 transition" />
            </a>
            <span>Telegram</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/yourprofile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 text-5xl hover:text-gray-400 transition" />
            </a>
            <span>LinkedIn</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/yourprofile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 text-5xl hover:text-gray-400 transition" />
            </a>
            <span>Facebook</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://stackoverflow.com/users/yourid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStackOverflow className="text-blue-600 text-5xl hover:text-gray-400 transition" />
            </a>
            <span>Stack Overflow</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/sumeyahassen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-blue-600 text-5xl hover:text-gray-400 transition" />
            </a>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
