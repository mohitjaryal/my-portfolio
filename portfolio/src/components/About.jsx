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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_60%)]" />

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
          {/* Left: Personal Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 space-y-6"
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Hi, I'm Mohit Jaryal
            </h3>
            <p className="text-gray-400 text-m">
              Tech Leader & Innovator with a vision to build impactful projects that inspire, educate, and drive real-world change.  
Passionate about leveraging creativity and technology to empower others and shape the future.

            </p>

            <h4 className="text-xl font-semibold text-white mb-2">🌟 Core Competencie</h4>
            <ul className="list-disc pl-5 text-gray-400 space-y-1 text-m">
              <li>Visionary Leadership & Strategic Direction</li>
              <li>UI/UX Design & TailwindCSS</li>
              <li>Web Development</li>
              <li>Community Building & Mentorship</li>
              <li>Problem Solving & Innovation</li>
            </ul>
          </motion.div>

          {/* Right: SphereX Experience */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-purple-900/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-indigo-400 font-semibold flex items-center gap-2">
                <Globe size={20} /> SphereX Community
              </h4>
              <span className="text-xs text-green-400 font-semibold bg-green-900/30 px-2 py-0.5 rounded-full">
                December 2025 – Present
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Founder & CEO (Community Initiative)
            </p>
            <p className="text-gray-400 text-m mb-4">
              Building and leading a tech-driven community connecting innovators, students, and enthusiasts through workshops, webinars, and collaborative projects globally.
            </p>

            {/* <h4 className="text-xl font-semibold text-white mb-2">🌟 Achievements</h4>
            <ul className="list-disc pl-5 text-gray-400 space-y-1 text-sm">
              <li>Onboarded 50+ active community members</li>
              <li>Organized multiple webinars & tech workshops</li>
              <li>Mentored students & enthusiasts on tech innovation</li>
              <li>Created impactful projects blending creativity and technology</li>
            </ul> */}

            <div className="flex items-center gap-4 mt-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
