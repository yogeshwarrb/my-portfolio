import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
//import "./index.css";

function App() {
  return (
    <div className="bg-[#0b0b0b] text-white font-custom">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://i.ibb.co/TbFgJ0Q/myprofile.png"
          alt="RB Yogeshwar"
          className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400">
          Hi, I'm RB Yogeshwar
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg sm:text-xl mb-6">
          A passionate full-stack Python developer and machine learning
          enthusiast, blending creative engineering with robust backend logic.
        </p>
        <a
          href="https://drive.google.com/file/d/1W8GMOUQg_YLxXN3NO5yAln5dLepznNqZ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          View Resume
        </a>
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
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800 hover:shadow-yellow-500/10 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Water Quality Prediction using ML
            </h3>
            <p className="text-gray-400">
              Predicts water potability using advanced machine learning
              techniques, offering clean UI and accurate analytics for
              environmental safety.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800 hover:shadow-yellow-500/10 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Real-time GPS Tracker App
            </h3>
            <p className="text-gray-400">
              Built using Python and modern frameworks, this app tracks user
              movement live on the map, ideal for logistics or personal safety
              use-cases.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mb-8">
          Whether you're a recruiter or collaborator — feel free to reach out!
        </p>
        <a
          href="mailto:rbyogeshwar@email.com"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
        >
          Drop a Mail
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
