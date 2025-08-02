import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./index.css";

// ✅ Typed motion components
const MotionSection = motion.section as React.FC<
  React.HTMLAttributes<HTMLElement> & any
>;
const MotionImg = motion.img as React.FC<
  React.ImgHTMLAttributes<HTMLImageElement> & any
>;
const MotionDiv = motion.div as React.FC<
  React.HTMLAttributes<HTMLDivElement> & any
>; // ✅ Fix for motion.div typing

// Typewriter component
function Typewriter({
  words,
  loop = true,
  typingSpeed = 150,
  deletingSpeed = 80,
  delay = 2000,
}: {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleTyping = () => {
      const current = wordIndex % words.length;
      const fullText = words[current];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      } else {
        timer = setTimeout(
          handleTyping,
          isDeleting ? deletingSpeed : typingSpeed
        );
      }
    };
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return <span className="text-yellow-300 font-semibold">{text}</span>;
}

function App() {
  return (
    <div className="bg-[#0b0b0b] text-white font-custom scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <MotionSection
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6 cursor-pointer transition-transform duration-300 hover:scale-105">
          <MotionImg
            src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-yellow-400">
          RB Yogeshwar
        </h1>
        <p className="text-yellow-300 text-lg sm:text-xl mb-6 h-8">
          <Typewriter
            words={[
              "Software Engineer",
              "Machine Learning Enthusiast",
              "Full-Stack Developer",
            ]}
          />
        </p>
        <p className="max-w-2xl text-gray-300 text-lg sm:text-xl mb-6">
          A results-driven Software Engineer specializing in Python, full-stack
          development, and machine learning — delivering elegant solutions with
          modern UI/UX.
        </p>
        <a
          href="https://drive.google.com/file/d/1ewLsEf8p7jirKoiLC5wYKP-IVGkUuysz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          View Resume
        </a>
      </MotionSection>

      {/* About Section */}
      <MotionSection
        id="about"
        className="py-20 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
          About Me
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          I’m a passionate software engineer currently in my final year at SRM
          IST, RMP. With expertise in Python, machine learning, and full-stack
          development, I focus on building clean, efficient, and scalable
          software.
        </p>
      </MotionSection>

      {/* Skills Section */}
      <MotionSection
        id="skills"
        className="py-20 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 text-center mb-12">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {[
            "Python",
            "Machine Learning",
            "SQL",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Git & GitHub",
            "Firebase",
          ].map((skill, index) => (
            <MotionDiv
              key={index}
              className="bg-[#1a1a1a] py-4 px-2 rounded-md border border-gray-800 text-white font-semibold hover:shadow-yellow-500/10 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {skill}
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      {/* Projects Section */}
      <MotionSection
        id="projects"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {[
            "Water Quality Prediction using ML",
            "Real-time GPS Tracker App",
            "Smart Attendance System using Face Recognition",
            "AI Chatbot using Python and NLP",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800 hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">
                {/* Add unique description for each project here */}
              </p>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* Contact Section */}
      <MotionSection
        id="contact"
        className="py-20 px-6 max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mb-8 text-lg sm:text-xl">
          Whether you're a recruiter, collaborator, or just curious — feel free
          to reach out!
        </p>
        <a
          href="mailto:rbyogeshwar@email.com"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow-md hover:bg-yellow-300 transition duration-300"
        >
          📩 Drop a Mail
        </a>
      </MotionSection>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] text-center py-6 text-sm text-gray-500 border-t border-gray-800">
        <div className="flex justify-center space-x-6 mb-2 text-yellow-400">
          <a
            href="https://github.com/yogeshwarrb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/rb-yogeshwar-32b619307"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        &copy; {new Date().getFullYear()} RB Yogeshwar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
