import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Glow */}
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Personal & Experience */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            {/* Personal Intro */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Hi, I'm Mohit Jaryal</h3>
              <p className="text-gray-400 text-sm">
                Developer & Community Builder passionate about creating projects that inspire, educate, and leave an impact.
              </p>
            </div>

            {/* Founder Experience */}
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-6">
              <h4 className="text-indigo-400 font-semibold flex items-center gap-2 mb-1">
                <Globe size={20} /> SphereX Community
              </h4>
              <p className="text-gray-400 text-sm mb-2">Founder & CEO (Community Initiative)</p>
              <p className="text-gray-400 text-xs mb-3">
                Connecting innovators and students through workshops, webinars, and collaborative projects globally.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:spherexcommunity@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mohitjaryal" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://spherexcommunity.netlify.app" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">🌟 Skills & Achievements</h4>
              <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
                <li>React, TailwindCSS, Node.js, Git & GitHub</li>
                <li>Webinars & workshops organization</li>
                <li>Mentoring students & enthusiasts</li>
                <li>Building impactful community projects</li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Quick Facts */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-gray-800 shadow-xl hover:shadow-purple-900/30 transition"
          >
            <h4 className="text-2xl font-semibold mb-4 text-white">
              Quick <span className="text-purple-400">Facts</span>
            </h4>
            <div className="text-gray-300 space-y-2 text-sm">
              <p>📍 Location: India</p>
              <p>🌐 Languages: English, Hindi</p>
              <p>💡 Interests: Web Development, AI, Community Building</p>
            </div>
            <div className="mt-6 text-gray-400 text-xs">
              ✨ Driven to innovate, inspire, and create opportunities for the next generation of changemakers.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
