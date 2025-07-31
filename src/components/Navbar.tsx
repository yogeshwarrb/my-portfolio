import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full p-4 bg-[#0e0e0e] text-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Yogeshwar</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#projects" className="hover:text-yellow-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
          <a href="#resume" className="hover:text-yellow-400">
            Resume
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e0e] px-6 pt-4 pb-6 space-y-4">
          <a
            href="#hero"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="#resume"
            className="block hover:text-yellow-400"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
