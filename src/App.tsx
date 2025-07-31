import React from "react";

function App() {
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
      <section className="text-center mt-12 px-4 animate-fade-in">
        <img
          src="https://i.postimg.cc/fRBpfJPJ/passport-photo.jpg"
          alt="RB Yogeshwar"
          className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
        />
        <h2 className="text-4xl font-bold mb-4">
          Final Year BTech CSE @ SRM Ramapuram
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Passionate about real-time ML projects. Skilled in Python, ML, and
          SQL.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105"
        >
          See My Projects
        </a>
      </section>
      <section className="text-center mt-12 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Final Year BTech CSE @ SRM Ramapuram
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Passionate about real-time ML projects. Skilled in Python, ML, and
          SQL.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          See My Projects
        </a>
      </section>

      {/* About Me */}
      <section className="mt-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="max-w-2xl mx-auto text-lg">
          I’m a final-year student at SRM Ramapuram, open to internships and
          freelance ML work. I'm currently exploring real-time use cases in
          machine learning and predictive models.
        </p>
      </section>
      <a
        href="/RB_Yogeshwar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
      >
        View My Resume
      </a>

      {/* Projects */}
      <section id="projects" className="mt-20 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">Water Quality Prediction</h4>
            <p>
              Uses pH levels and Random Forest + RNN + CNN to predict water
              quality from trained datasets.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-2">GPS Tracking System</h4>
            <p>
              Utilizes longitude and latitude data with Folium to track location
              in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-20 px-6 text-center pb-10">
        <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
        <p>Email: rbyogeshwar73@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rb-yogeshwar-32b619307"
            className="underline"
          >
            rb-yogeshwar
          </a>
        </p>
        <p>Phone: 7200960311</p>
      </section>
    </div>
  );
}

export default App;
