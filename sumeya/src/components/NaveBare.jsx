import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBare() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-16 flex justify-between items-center px-6 bg-blue-500 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 rounded-full" />
      </div>

      {/* Desktop Menu */}
      {/* hidden md:flex malet 768< lalut hidden argewu */}
      <ul className="hidden md:flex space-x-6 font-semibold text-lg">
        <li className="hover:text-gray-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-gray-200">
       <Link to="/skills">Skills</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/Certificates">Certificates</Link>
        </li>
        <li className="hover:text-gray-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger Icon (Mobile) */}
      {/* md:hidden z-20 md: headin kehone  */}
      <div className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center space-y-6 py-6 text-lg font-semibold md:hidden">
          <li onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
       <Link to="/skills">Skills</Link>
          </li> 
          <li onClick={() => setIsOpen(false)}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/Certificates">Certificates</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBare;
