import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="mb-5 text-lg">
              Hey there! I'm{" "}
              <span className="font-semibold text-purple-400">Your Name</span>, a passionate{" "}
              <span className="text-blue-400">Frontend / Fullstack Developer</span> who loves
              crafting sleek, fast, and immersive digital experiences. I turn complex ideas into elegant, user-friendly web solutions.
            </p>
            <p className="mb-5 text-gray-400">
              My focus lies in building interactive, accessible, and performant apps using technologies like{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-cyan-400">Vite</span>, and{" "}
              <span className="text-cyan-400">Tailwind CSS</span>. I enjoy collaborating with creative teams
              and bringing ideas to life through clean, reusable code.
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>⚡ 3+ years crafting responsive web apps</li>
              <li>💻 Strong grasp of React, Node.js, and API integrations</li>
              <li>🎨 Obsessed with great UI/UX and smooth animations</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-purple-900/30 transition"
          >
            <h3 className="font-semibold text-2xl mb-4 text-white">
              Quick <span className="text-purple-400">Facts</span>
            </h3>
            <div className="text-gray-300 space-y-3">
              <p>
                <strong className="text-gray-200">📍 Location:</strong>{" "}
                <span className="text-gray-400">Your City, Country</span>
              </p>
              <p>
                <strong className="text-gray-200">🎓 Education:</strong>{" "}
                <span className="text-gray-400">Your Degree — University</span>
              </p>
              <p>
                <strong className="text-gray-200">🌐 Languages:</strong>{" "}
                <span className="text-gray-400">English, Hindi</span>
              </p>
              <p>
                <strong className="text-gray-200">⚙️ Tools I Love:</strong>{" "}
                <span className="text-gray-400">VSCode, Git, Figma, Postman</span>
              </p>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Always exploring new tech and trends to stay ahead 🚀
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
