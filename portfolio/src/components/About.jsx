import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.1),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400"
        >
          About Me & My Work
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Intro & Experience */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="mb-5 text-lg">
              Hi! I'm <span className="font-semibold text-purple-400">Mohit Jaryal</span>, a passionate <span className="text-blue-400">Developer & Community Builder</span>.  
              I love creating projects that inspire, educate, and make an impact.
            </p>

            <p className="mb-5 text-lg">
              I founded <span className="font-semibold text-indigo-400">SphereX Community</span> — a tech-driven initiative connecting students, innovators, and enthusiasts through webinars, workshops, and collaborations.
            </p>

            {/* SphereX Experience */}
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                <Globe size={22} /> SphereX Community
              </h3>
              <p className="text-gray-400 mb-2">Founder & CEO (Community Initiative)</p>
              <p className="text-gray-400 text-sm mb-3">
                Building a platform to foster collaboration, innovation, and learning among tech enthusiasts globally.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:spherexcommunity@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitjaryal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://spherexcommunity.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            <h3 className="font-semibold text-xl mb-3 text-white">🌟 Other Experiences & Skills</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>💻 Developed projects using React, Tailwind, Node.js, and more</li>
              <li>🚀 Organized webinars & tech workshops with experts</li>
              <li>📈 Mentored students on tech innovation & community growth</li>
              <li>🎯 Passionate about blending creativity, tech, and real-world impact</li>
            </ul>
          </motion.div>

          {/* Right Side: Quick Facts */}
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
                <span className="text-gray-400">India</span>
              </p>
              <p>
                <strong className="text-gray-200">🌐 Languages:</strong>{" "}
                <span className="text-gray-400">English, Hindi</span>
              </p>
              <p>
                <strong className="text-gray-200">⚙️ Tech Stack:</strong>{" "}
                <span className="text-gray-400">React, TailwindCSS, Node.js, Git, GitHub</span>
              </p>
              <p>
                <strong className="text-gray-200">💡 Interests:</strong>{" "}
                <span className="text-gray-400">Web Development, AI, Community Building</span>
              </p>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✨ Driven to innovate, inspire, and create opportunities for the next generation of changemakers.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
