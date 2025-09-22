import React from 'react'
import {Button} from "../ui/button" // ✅ shadcn button
import { AiFillGithub } from "react-icons/ai"; // Ant Design GitHub icon

function Projects() {
  return (
    <div>
      <h1>problem solver projects</h1>
      <h2>Mobile apps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          Mobile App Project 1
          <img src="" alt="" className={"h-10"} />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />
          </Button>
        </div>
        <div className="bg-gray-200 p-4">
          Mobile App Project 2
          <img src="" alt=""  className={"h-10"} />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />
          </Button>
        </div>
        <div className="bg-gray-200 p-4">
          Mobile App Project 3
          <img src="" alt="" className={"h-10"}/>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />
          </Button>
        </div>
      </div>
      <h2>Web projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4">
          Web Project 1
          <img src="" alt=""className={"h-10"} />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />
          </Button>
        </div>
        <div className="bg-gray-200 p-4">
          Web Project 2
          <img src="" alt=""className={"h-10"} />
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />
          </Button>
        </div>
        <div className="bg-gray-200 p-4">
          Web Project 3
          <img src="" alt="" className={"h-10"}/>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            View <AiFillGithub />j
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Projects
