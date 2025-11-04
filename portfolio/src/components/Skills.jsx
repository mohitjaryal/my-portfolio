import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", level: "Advanced", color: "from-cyan-400 to-blue-500" },
  { name: "JavaScript (ES6+)", level: "Advanced", color: "from-yellow-400 to-orange-500" },
  { name: "Tailwind CSS", level: "Advanced", color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", level: "Intermediate", color: "from-green-400 to-emerald-500" },
  { name: "TypeScript", level: "Learning", color: "from-blue-400 to-indigo-500" },
  { name: "Git & GitHub", level: "Advanced", color: "from-gray-400 to-gray-500" },
  { name: "Next.js", level: "Intermediate", color: "from-purple-400 to-pink-500" },
  { name: "MongoDB", level: "Intermediate", color: "from-green-400 to-lime-500" },
  { name: "Figma", level: "Intermediate", color: "from-pink-400 to-rose-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* glowing background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400"
        >
          Skills & Technologies
        </motion.h2>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 cursor-default"
            >
              <div
                className={`absolute inset-0 opacity-10 rounded-2xl bg-gradient-to-br ${skill.color}`}
              ></div>

              <h3 className="relative text-xl font-semibold text-white z-10">
                {skill.name}
              </h3>
              <p
                className={`relative mt-2 text-sm font-medium ${
                  skill.level === "Advanced"
                    ? "text-green-400"
                    : skill.level === "Intermediate"
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
              >
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
