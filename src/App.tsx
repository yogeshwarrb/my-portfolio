import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
//import "./App.css";

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <div className="rounded-full p-1 bg-gradient-to-tr from-pink-500 via-indigo-500 to-blue-500 animate-spin-slow hover:animate-pulse transition-all">
          <img
            src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-[#0e0e0e]"
          />
        </div>
      </motion.div>
      <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-white">
        RB Yogeshwar
      </h1>
      <p className="text-gray-300 mt-4 text-center max-w-xl">
        Final-year Software Engineer | Python • Machine Learning • SQL • React
      </p>
      <a
        href="https://drive.google.com/file/d/1ewLsEf8p7jirKoiLC5wYKP-IVGkUuysz/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 border border-indigo-500 text-indigo-400 rounded hover:bg-indigo-500 hover:text-white transition"
      >
        View Resume
      </a>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "GPS Tracking System",
      description:
        "Real-time GPS tracking system integrating latitude and longitude coordinates. Uses Folium to dynamically plot points on an interactive map.",
      tech: ["Python", "Folium", "Geolocation"],
      link: "https://github.com/yourusername/gps-tracker",
    },
    {
      title: "Water Quality Prediction",
      description:
        "An ML model that uses RNN, CNN, and Random Forest algorithms to predict water quality based on pH and chemical metrics.",
      tech: ["RNN", "CNN", "Random Forest"],
      link: "https://github.com/yourusername/water-quality-predictor",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#2e2e2e] px-3 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-400 hover:text-indigo-300 font-medium"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_brbb3fd",
        "template_nuvybp7",
        e.target,
        "yYrt4Lh2CCW5PD6GQ"
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Something went wrong: " + error.text)
      );
    e.target.reset();
  };

  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-4 sm:px-10">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 text-white h-40"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-500 text-sm text-center py-6">
      <p>© 2025 RB Yogeshwar. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-[#0b0b0b] text-white">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
