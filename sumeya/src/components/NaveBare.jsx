import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function NavBare() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-16 flex justify-between items-center px-6 bg-blue-500 dark:bg-gray-800  text-white fixed w-full z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 rounded-full" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-semibold text-lg">
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#certificates">Certificates</a>
        </li>
        <li className="hover:text-gray-800 dark:hover:text-gray-400 ">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center space-y-6 py-6 text-lg font-semibold md:hidden">
          <li onClick={() => setIsOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#certificates">Certificates</a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      <ThemeToggle />
    </div>
  );
}

export default NavBare;
