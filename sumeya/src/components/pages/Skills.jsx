import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaComments,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDart,
  SiPython,
  SiCplusplus,
  SiFlutter,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiBootstrap,
  SiGithub,
  SiGitlab,
  SiGit,
} from "react-icons/si";
import { GiTeamIdea, GiProgression } from "react-icons/gi";
function Skills() {
  const skills = [
    {
      name: "Programming Languages",
      icon: (
        <div className="flex space-x-3">
          <SiJavascript className="text-yellow-500 text-4xl" />
          <SiDart className="text-blue-400 text-4xl" />
          <FaJava className="text-red-600 text-4xl" />
          <SiPython className="text-indigo-900 text-4xl" />
          <SiCplusplus className="text-blue-800 text-4xl" />
        </div>
      ),
    },
    {
      name: "Frontend",
      icon: (
        <div className="flex space-x-3">
          <FaReact className="text-blue-600 text-4xl" />
          <SiFlutter className="text-blue-400 text-4xl" />
          <SiTailwindcss className="text-blue-400 text-4xl" />
          <SiBootstrap className="text-purple-600 text-4xl" />
        </div>
      ),
    },
    {
      name: "Backend",
      icon: (
        <div className="flex space-x-3">
          <FaNodeJs className="text-green-600 text-4xl" />
          <SiExpress className="text-green-600 text-4xl" />
        </div>
      ),
    },
    {
      name: "Database",
      icon: (
        <div className="flex space-x-3">
          <SiMongodb className="text-green-600 text-4xl" />
          <SiMysql className="text-brown-700 text-4xl dark:text-gray-500" />
        </div>
      ),
    },
    {
      name: "Other Tools",
      icon: (
        <div className="flex space-x-3">
          <SiGithub className="text-gray-800 text-4xl" />
          <FaDatabase className="text-yellow-600 text-4xl" />
          <SiGitlab className="text-orange-600 text-4xl" />
          <SiGit className="text-gray-800 text-4xl" />
        </div>
      ),
    },
    {
      name: "Soft Skills",
      icon: (
        <div className="flex space-x-3">
          <FaLightbulb className="text-yellow-500 text-4xl" />,
          <FaHandshake className="text-green-500 text-4xl" />,
          <FaComments className="text-purple-500 text-4xl" />,
          <GiTeamIdea className="text-pink-500 text-4xl" />,
          <GiProgression className="text-red-500 text-4xl" />
        </div>
      ),
    },
  ];

  return (
    <section className="min-h-screen  flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-200 p-20 rounded-lg shadow hover:scale-110 transition-transform"
          >
            {skill.icon}
            <p className="mt-4 font-semibold text-xl dark:text-gray-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
