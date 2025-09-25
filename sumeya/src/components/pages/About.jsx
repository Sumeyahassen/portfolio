import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import {Button} from "../ui/button" // ✅ shadcn button
import { FaMobileAlt } from "react-icons/fa"; // mobile phone icon

function About() {
  const myInfo = `
BEGIN:VCARD
VERSION:3.0
FN:Sumeya Hassen
TITLE:Flutter Developer | MERN Stack Developer
ORG:Bahir Dar University
EMAIL:sumeyahassensumi@gmail.com
TEL:+251912380076
URL:https://github.com/sumeyahassen
URL:https://www.linkedin.com/in/sumeya-hassen-9711092a1/
END:VCARD
`;

  // ✅ Shadcn Button
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 gap-12">
      {/* Description */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4  size-35">👨‍💻</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          <span className="font-semibold text-blue-600 text-8xl"> Hi</span>, I’m{" "}
          <span className="font-semibold text-blue-800 dark:text-blue-400 text-xl">
            Sumeya Hassen
          </span>
          , a passionate software developer specializing in{" "}
          <b>Flutter mobile apps</b> and the <b>MERN stack</b> for web
          development. I love solving real-world problems through clean,
          creative, and scalable code. Currently, I’m a
          <span className="font-semibold">
            Software Engineering student at Bahir Dar University
          </span>
          .
        </p>

        {/* ✅ Shadcn Button */}
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          <a href="#contact"> Contact Me</a>
        </Button>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center rounded-sm">
        <QRCodeCanvas
          value={myInfo}
          size={300}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={true}
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 mt-2 inline-flex items-center gap-2">
          <FaMobileAlt size={30} color="blue" /> Scan for my contact info
        </p>
      </div>
    </section>
  );
}

export default About;
