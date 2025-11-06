import React from "react";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import bdu from "@/assets/bdu.png";
import admin from "@/assets/admin.png";
import shoose from "@/assets/Shoose.png";
import bank from "@/assets/bank.png";
import farmatec from "@/assets/farmatec.png";

function Projects() {
  return (
    <div className=" mx-10 p-6">
      <h1 className="text-2xl font-bold mb-4">Problem Solver Projects</h1>

      {/* Mobile Apps */}
      <h1 className="text-4xl font-semibold mb-2 text-center text-orange-400">
        Mobile Apps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow dark:bg-gray-800">
          <h3 className="font-medium text-center">Shoose e-commers app</h3>
          <div className="flex justify-center">
            <img
              src={shoose}
              alt="Mobile Project 1"
              className="w-auto h-72 object-contain rounded-lg mt-2"
            />
          </div>
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 w-full"
            onClick={() =>
              window.open(
                "https://github.com/Sumeyahassen/https-github.com-Sumeyahassen-Agelgel1.git"
              )
            }
          >
            View <AiFillGithub />
          </Button>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow dark:bg-gray-800">
          <h3 className="font-medium text-center">
            Power learn african bank app
          </h3>
          <div className="flex justify-center">
            <img
              src={bank}
              alt="Mobile Project 2"
              className="w-auto h-72 object-contain rounded-lg mt-2"
            />
          </div>
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 w-full"
            onClick={() =>
              window.open(
                "https://github.com/Sumeyahassen/Derash-AntiTheft-App.git"
              )
            }
          >
            View <AiFillGithub />
          </Button>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow dark:bg-gray-800">
          <h3 className="font-medium text-center">
            Campus Student Support App
          </h3>
          <div className="flex justify-center">
            <img
              src={bdu}
              alt="Mobile Project 3"
              className="w-auto h-72 object-contain rounded-lg mt-2"
            />
          </div>
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 w-full"
            onClick={() =>
              window.open("https://github.com/Sumeyahassen/BDU-SUPPORT-APP.git")
            }
          >
            View <AiFillGithub />
          </Button>
        </div>
      </div>

      {/* Web Projects */}
      <h2 className="text-4xl font-semibold mt-8 mb-2 text-center text-green-400">
        Web Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-cyan-50 p-4 rounded-lg shadow">
          <h3 className="font-medium">Health emegensiy Supported web App</h3>
          <img
            src={farmatec}
            alt="Web Project 1"
            className="h-100 w-full object-cover rounded-lg mt-2"
          />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            View <AiFillGithub />
          </Button>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg shadow">
          <h3 className="font-medium">Randem Chat app Admin Dashbord</h3>
          <img
            src={admin}
            alt="Web Project 2"
            className="h-40 w-full object-cover rounded-lg mt-2"
          />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            View <AiFillGithub />
          </Button>
        </div>

        <div className="bg-red-50 p-4 rounded-lg shadow">
          <h3 className="font-medium">My portipoliyo website</h3>
          <img
            src={admin}
            alt="Web Project 3"
            className="h-40 w-full object-cover rounded-lg mt-2"
          />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            View <AiFillGithub />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
