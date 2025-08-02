import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

// ✅ Typed motion.div
const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & any
>;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Projects", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0b] border-b border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-yellow-400 font-bold text-xl tracking-wide">
          RB Yogeshwar
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-yellow-400"
              className="text-gray-300 hover:text-yellow-400 cursor-pointer transition"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-yellow-400"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0b0b0b] px-6 pb-4 pt-2 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-yellow-400"
                  className="text-gray-300 hover:text-yellow-400 cursor-pointer transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
