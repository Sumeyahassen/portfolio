import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
function ThemeToggle() {
  // for where getitem()methiode came what is the important
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full dark:bg-gray-800 transition"
      >
        {darkMode ? (
          <FaSun className="text-yellow-200" size={20} />
        ) : (
          <FaMoon className="text-gray-600" size={20} />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
