import React from "react";
import { motion } from "framer-motion";
import myImage from "../../assets/Sumeya.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const roles = [
    "🚀 Flutter Developer",
    "⚡ MERN Stack Developer",
    "🧩 Problem Analyzer & Solution Designer",
  ];

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gray-100">
      {/* Left Side (Text) */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hi, I'm <span className="text-blue-600">Sumeya Hassen</span>
        </h1>

        {/* Animated Roles */}
        <div className="flex flex-col space-y-3">
          {roles.map((role, index) => (
            <motion.p
              key={index}
              className="text-lg text-gray-700 font-medium"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.6 }}
            >
              {role}
            </motion.p>
          ))}
        </div>

        <p className="text-gray-600 max-w-md">
          I build creative, functional, and user-friendly apps that solve
          real-world problems.
        </p>

        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 size-lg" onClick={() => navigator("/about")}>
         More
        </button>
        <button className="mt-4 px-6 ml-2 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Download CV
        </button>
      </div>

      {/* Right Side (Image) */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-6 md:mb-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          alt="Sumeya Hassen"
          className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </motion.div>
    </section>
  );
}

export default Home;
