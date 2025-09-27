import React from "react";
import cpp from "@/assets/c++.png";
import html from "@/assets/html.png";
import android from "@/assets/andro.png";
import hult from "@/assets/hultg.png";
import bit from "@/assets/bit.png";

function Certificates() {
  const learningCerts = [
    {
      title: "Android Development",
      issuer: "Udacity",
      year: "2024",
      img: android,
    },
    {
      title: "HTML, CSS, C++, SQL",
      issuer: "Sololearn",
      year: "2023",
      img: html,
    },
    {
      title: "PLP Program - Software Development",
      issuer: "PLP Academy",
      year: "2024",
      img: cpp,
    },
  ];

  const awards = [
    {
      title: "Derash Project Recognition",
      issuer: "Inshall Point",
      year: "2024",
      img: hult,
    },
    {
      title: "Best Innovative Idea",
      issuer: "Bahir Dar University",
      year: "2025",
      img: bit,
    },
    {
      title: "Best Innovative Idea",
      issuer: "Bahir Dar University",
      year: "2025",
      img: "/certificates/bdu.png", // fallback path
    },
  ];

  return (
    <section className="min-h-screen  px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Certificates</h1>

      <div className="grid grid-cols-1 md:grid-rows-2 gap-10">
        {/* Learning Certificates */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center md:text-left">
            Learning Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {learningCerts.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition bg-white"
              >
                {/* Certificate Image */}
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded mb-4 transform hover:scale-105 transition duration-300"
                />
                {/* Certificate Info */}
                <div>
                  <p className="font-semibold text-lg">{cert.title}</p>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-green-600 text-center md:text-left">
            Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-400"
              >
                {/* Award Image */}
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain rounded mb-4 transform hover:scale-105 transition duration-300"
                />
                {/* Award Info */}
                <div>
                  <p className="font-semibold text-lg">{award.title}</p>
                  <p className="text-sm text-gray-600">
                    {award.issuer} - {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
