import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const profileImage = "https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg";
const resumeLink =
  "https://drive.google.com/file/d/1ewLsEf8p7jirKoiLC5wYKP-IVGkUuysz/view?usp=sharing";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 text-white font-sans px-6"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        {/* Animated Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 rounded-full mb-6"
        >
          <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 p-[5px]">
            <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">RB Yogeshwar</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          Final Year Software Engineer | Python | Machine Learning | SQL |
          Building standout solutions with a passion for innovation.
        </p>

        {/* Resume Button */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 border border-white rounded-md text-white hover:bg-white hover:text-gray-900 transition duration-300"
        >
          View Resume
        </a>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-300">
          <div className="hover:text-white transition">Python</div>
          <div className="hover:text-white transition">Machine Learning</div>
          <div className="hover:text-white transition">SQL</div>
          <div className="hover:text-white transition">React</div>
          <div className="hover:text-white transition">Tailwind CSS</div>
          <div className="hover:text-white transition">Data Analysis</div>
          <div className="hover:text-white transition">Git & GitHub</div>
          <div className="hover:text-white transition">REST APIs</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-gray-700 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-300 mb-4">
          Open to opportunities — feel free to reach out!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            emailjs.sendForm(
              "service_q9ebzqi",
              "template_0zdpqzj",
              e.target,
              "yYrt4Lh2CCW5PD6GQ"
            );
            e.target.reset();
          }}
          className="max-w-md mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 bg-gray-800 text-white rounded"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-700">
        <p>© 2025 RB Yogeshwar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
