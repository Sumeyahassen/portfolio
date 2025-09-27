import React from "react";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import bdu from "@/assets/bdu.png";
import par from "@/assets/par.png";
import derash from "@/assets/derash.png";
import admin from "@/assets/admin.png";

function Projects() {
  return (
    <div className=" mx-10 p-6">
      <h1 className="text-2xl font-bold mb-4">Problem Solver Projects</h1>

      {/* Mobile Apps */}
      <h1 className="text-4xl font-semibold mb-2 text-center text-orange-400">
        Mobile Apps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="font-medium text-center">
            Parmacityical prodact indicater App
          </h3>
          <img
            src={par}
            alt="Mobile Project 1"
            className="h-80 w-full object-cover rounded-lg mt-2"
          />
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://github.com/SumeyaHassen/Par-Project-Recognition"
              )
            }
          >
            View <AiFillGithub />
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="font-medium text-center">
            Derash Mobile Antithife app
          </h3>
          <img
            src={derash}
            alt="Mobile Project 2"
            className="h-80 w-full object-cover rounded-lg mt-2"
          />
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://github.com/SumeyaHassen/Derash-Project-Recognition"
              )
            }
          >
            View <AiFillGithub />
          </Button>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="font-medium text-center">
            Campase student supported App
          </h3>
          <img
            src={bdu}
            alt="Mobile Project 3"
            className="h-80 w-full object-cover rounded-lg mt-2"
          />
          <Button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
            onClick={() => window.open("https://github.com/SumeyaHassen/BDU")}
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
          <h3 className="font-medium">Web Project 1</h3>
          <img
            src={admin}
            alt="Web Project 1"
            className="h-40 w-full object-cover rounded-lg mt-2"
          />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2">
            View <AiFillGithub />
          </Button>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg shadow">
          <h3 className="font-medium">Web Project 2</h3>
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
          <h3 className="font-medium">Web Project 3</h3>
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
