import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => alert("Message sent successfully"),
        (error) => alert("Message failed: " + error.text)
      );
  };

  return (
    <div className="font-sans bg-gradient-to-br from-indigo-500 to-purple-700 text-white min-h-screen">
      {/* Navbar */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">RB YOGESHWAR</h1>
        <a
          href="mailto:rbyogeshwar73@gmail.com"
          className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100 font-medium"
        >
          Contact Me
        </a>
      </header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-12 px-6 gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <div className="absolute -inset-1 blur-xl bg-red-500 rounded-full opacity-60 z-0"></div>
          <div className="relative z-10 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-white ring-opacity-30">
            <img
              src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
              alt="RB Yogeshwar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Intro Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug tracking-tight">
            Crafting Code. Solving Real-World Problems.
          </h2>
          <p className="text-lg md:text-xl mb-6 text-slate-100 font-light">
            Final Year CSE @ SRM | Python Developer | ML Enthusiast | Real-Time
            Project Builder
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
            >
              🚀 Explore My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              📄 View My Resume
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="mt-24 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "Machine Learning",
            "SQL",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "React.js",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/90 text-indigo-700 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-white transition duration-300"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="mt-24 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Water Quality Prediction",
              desc: "Built ML model to predict water potability using Python, Pandas & Sklearn.",
            },
            {
              title: "Real-Time GPS Tracker",
              desc: "Developed live location tracker with React, Google Maps API, and Firebase.",
            },
            {
              title: "Spam Email Classifier",
              desc: "NLP-based spam detection model using Python, NLTK, and Logistic Regression.",
            },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 text-indigo-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-left"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-sm">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="mt-24 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Get In Touch
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white/90 text-indigo-800 placeholder-gray-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white/90 text-indigo-800 placeholder-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded bg-white/90 text-indigo-800 placeholder-gray-600"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
          >
            📩 Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="mt-24 p-6 text-center text-white/80 text-sm border-t border-white/20">
        © {new Date().getFullYear()} RB Yogeshwar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
