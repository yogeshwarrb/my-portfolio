import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Writer from "t-writer.js";

function App() {
  const typeTarget = useRef(null);

  useEffect(() => {
    const target = typeTarget.current;

    const writer = new Writer(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 50,
      waitBeforeDelete: 1200,
    });

    writer
      .type("Final Year CSE @ SRM 👨‍🎓")
      .rest(500)
      .remove()
      .type("Python Developer 🐍")
      .rest(500)
      .remove()
      .type("ML Enthusiast 🤖")
      .rest(500)
      .remove()
      .type("Real-Time Project Builder 💡")
      .rest(500)
      .remove()
      .start();
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-indigo-500 to-purple-600 text-white min-h-screen">
      {/* Navbar */}
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">RB YOGESHWAR</h1>
        <a
          href="mailto:rbyogeshwar73@gmail.com"
          className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          Contact Me
        </a>
      </header>

      {/* Hero Section */}
      <
      <motion.section
  className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-12 px-6 gap-10"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Glowing Profile Image */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative"
  >
    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-pink-500 animate-pulse">
      <img
        src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
        alt="RB Yogeshwar"
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>

  {/* Text and Animation */}
  <div className="max-w-xl">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Hi, I’m <span className="text-pink-400">RB Yogeshwar</span><br />
      <span id="typewriter" className="text-white" />
    </h2>
    <p className="text-lg mb-6 text-slate-100">
      Final year BTech CSE @ SRM Ramapuram. Real-time ML project builder, Python wizard, and data enthusiast.
    </p>
    <a
      href="#projects"
      className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
    >
      🔍 Explore Projects
    </a>
  </div>
</motion.section>

      {/* Continue the rest of your site as before */}
    </div>
  );
}

export default App;



