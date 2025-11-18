import React from "react";
import { motion } from "framer-motion";

// Import images from src/images folder
import portfolioImg from "../images/portfolio.png";
import qrappImg from "../images/qrapp.png";
import passgenImg from "../images/passgenImg.png";

const PROJECTS = [
  {
    id: "p1",
    title: "Portfolio Website",
    desc: "My personal portfolio built with React, TailwindCSS, and Vite — showcasing my skills, projects, and contact form via EmailJS.",
    img: portfolioImg,
    repo: "https://github.com/mohitjaryal",
    live: "https://mohitjaryal.netlify.app",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    id: "p2",
    title: "QR Based Attendance System",
    desc: "A smart web app that uses QR codes for real-time attendance tracking, built with React, Node.js, and Firebase.",
    img: qrappImg,
    repo: "https://github.com/mohitjaryal/hackathon-cgc",
    live: "https://trackin-app.netlify.app/",
    tech: ["React", "Node.js", "Firebase"],
  },
  {
    id: "p3",
    title: "Alarm Clock",
    desc: "A Python-based talking alarm clock that uses the OS module to deliver voice alerts — a fun and functional way to wake up with code!",
    img: passgenImg,
    repo: "https://github.com/mohitjaryal/alarmClock",
    tech: ["Python"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Gradient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          🚀 Some of My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((p, index) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 hover:bg-gray-900/70 transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] backdrop-blur-lg"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* Only show Live Demo if it exists */}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
