import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  return (
    <div className="bg-[#0b0b0b] text-white font-custom scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-6 cursor-pointer transition-transform duration-300 hover:scale-105">
          <motion.img
            src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
            alt="RB Yogeshwar"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400">
          RB Yogeshwar
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg sm:text-xl mb-6">
          A results-driven Software Engineer specializing in Python, full-stack
          development, and machine learning — delivering elegant solutions with
          modern UI/UX.
        </p>
        <a
          href="https://your-resume-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          View Resume
        </a>
      </motion.section>

      {/* About Section */}
      <motion.section
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
          software. I enjoy crafting engaging user experiences and solving
          real-world problems using code. Outside of tech, I’m always exploring
          innovative ideas and ways to grow.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
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
            <motion.div
              key={index}
              className="bg-[#1a1a1a] py-4 px-2 rounded-md border border-gray-800 text-white font-semibold hover:shadow-yellow-500/10 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
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
          <div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800
              hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              Water Quality Prediction using ML
            </h3>
            <p className="text-gray-400">
              Predicts water potability using advanced machine learning
              techniques, offering clean UI and accurate analytics for
              environmental safety.
            </p>
          </div>

          <div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800
              hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              Real-time GPS Tracker App
            </h3>
            <p className="text-gray-400">
              Built using Python and modern frameworks, this app tracks user
              movement live on the map, ideal for logistics or personal safety
              use-cases.
            </p>
          </div>

          <div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800
              hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              Smart Attendance System using Face Recognition
            </h3>
            <p className="text-gray-400">
              An intelligent Python-based attendance tracker that uses facial
              recognition to automate attendance in real-time, enhancing
              institutional efficiency.
            </p>
          </div>

          <div
            className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800
              hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              AI Chatbot using Python and NLP
            </h3>
            <p className="text-gray-400">
              Designed a conversational chatbot using Python’s NLP libraries to
              simulate human-like interaction, trained on custom intents for
              accurate replies.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
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
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] text-center py-6 text-sm text-gray-500 border-t border-gray-800">
        &copy; {new Date().getFullYear()} RB Yogeshwar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
