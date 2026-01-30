import React from "react";
import plp from "@/assets/plp.png";
import android from "@/assets/andro.png";
import hult from "@/assets/hultg.png";
import bit from "@/assets/bit.png";
import frontend from "@/assets/ethiodencer.jpg";
import agrigard from "@/assets/agrigard.jpg";

function Certificates() {
  const learningCerts = [
    {
      title: "Android Development",
      issuer: "Udacity",
      year: "2024",
      img: android,
    },
    {
      title: "HTML, CSS,JS,React",
      issuer: "EthioDen",
      year: "2025",
      img: frontend,
    },
    {
      title: "PLP Program - Software Development",
      issuer: "PLP Academy",
      year: "2024",
      img: plp,
    },
  ];

  const awards = [
    {
      title: "Derash Project Recognition",
      issuer: "Ethiopia Bahirdar University  Hult Prize",
      year: "2024",
      img: hult,
    },
    {
      title: "Best Innovative Idea",
      issuer: "Bahir Dar University BIT CDC",
      year: "2025",
      img: bit,
    },
    {
      title: "AgriGard Solution Award",
      issuer: "Ethiopia Inovation  ministry",
      year: "2025",
      img: agrigard, // fallback path
    },
  ];

  return (
    <section className="min-h-screen  px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Certificates</h1>

      <div className="grid grid-cols-1 md:grid-rows-2 gap-10">
        {/* Learning Certificates */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600 text-center md:text-left dark:text-white">
            Learning Certificates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 dark:bg-gray-800 ">
            {learningCerts.map((cert, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-700"
              >
                {/* Certificate Image */}
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-xl w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain mb-4 transform hover:scale-105 transition duration-300"
                />
                {/* Certificate Info */}
                <div>
                  <p className="font-semibold text-lg">{cert.title}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-100">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white text-center md:text-left">
            Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-700"
              >
                {/* Award Image */}
                <img
                  src={award.img}
                  alt={award.title}
                  className="rounded-xl w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain  mb-4 transform hover:scale-105 transition duration-300"
                />
                {/* Award Info */}
                <div>
                  <p className="font-semibold text-xl ">{award.title}</p>
                  <p className="text-lg text-gray-100 dark:text-gray-100">
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
