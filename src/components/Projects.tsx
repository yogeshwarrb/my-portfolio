import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Water Quality Prediction",
    description:
      "A machine learning model that predicts water potability using chemical properties and classification techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "GPS Tracking System",
    description:
      "A real-time GPS tracking solution designed for logistics and safety using map APIs and cloud backend.",
    tech: ["React", "Node.js", "MongoDB", "Mapbox API"],
  },
  {
    title: "E-commerce Analytics Dashboard",
    description:
      "A dashboard application visualizing key sales and customer metrics from e-commerce datasets.",
    tech: ["Python", "Dash", "Plotly", "Excel"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#111] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] border border-gray-700 rounded-lg p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400 text-black px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
