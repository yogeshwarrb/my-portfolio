import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./index.css"; // Ensure Tailwind + Inter font are loaded

export default function App() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_jp8zidp",
          "template_oxg85ll",
          form.current,
          "yYrt4Lh2CCW5PD6GQ"
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("Failed to send message.");
          }
        );
    }
  };

  return (
    <main className="bg-[#0f0f0f] text-white font-inter min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.img
          src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <span className="text-red-500">Yogeshwar RB</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Final Year Software Engineer skilled in Python, ML, SQL, and creating intelligent tech solutions.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1ewLsEf8p7jirKoiLC5wYKP-IVGkUuysz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-6 py-3 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-200 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          View Resume
        </motion.a>
      </section>

      {/* Quote Section */}
      <section className="bg-[#1a1a1a] py-10 px-6 text-center">
        <p className="text-xl italic text-gray-400 max-w-xl mx-auto">
          “I don’t just build software. I craft solutions with impact.”
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-[#121212] text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
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
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[#1e1e1e] text-white border border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-32 rounded bg-[#1e1e1e] text-white border border-gray-600"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 rounded-full font-bold text-white hover:bg-red-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-gray-500 text-sm">
        © 2025 Yogeshwar RB — Built with 💻 passion and precision.
      </footer>
    </main>
  );
}