import React from "react";
import { motion } from "framer-motion";
import mohitImg from "../images/mohit.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black py-28 text-white">
      {/* Background glow gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.25),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20">
        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,58,237,0.6)]">
              Mohit Jaryal
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed">
            A{" "}
            <span className="text-cyan-400 font-semibold">
            Developer
            </span>{" "}
            who believes in using technology to solve real-world challenges. Loves 
            to create impactful digital solutions that make life
            easier, smarter, and more connected — learning every day, exploring{" "}
            <span className="text-purple-400 font-semibold">innovation</span>,
            and pushing the boundaries of what’s possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 font-semibold text-white shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 transition-transform duration-300"
            >
              🚀 See My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-gray-700 text-gray-100 hover:bg-gray-800 transition-colors duration-300"
            >
              📬 Contact Me
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-gray-400 text-sm"
          >
            💼 Open to freelance & full-time opportunities.
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group">
            {/* Glow aura */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 opacity-40 group-hover:opacity-70 transition duration-700"></div>

            <div className="relative rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900/70 to-gray-950/80 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:shadow-[0_0_60px_rgba(124,58,237,0.4)] transition-all duration-500 transform group-hover:-translate-y-1">
              <img
               src={mohitImg}
                alt="Your Portrait"
                className="w-80 h-80 object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-40 w-32 h-32 bg-gradient-to-tr from-purple-700 to-blue-500 rounded-full opacity-25 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-16 left-28 w-40 h-40 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full opacity-25 blur-3xl"
      />
    </section>
  );
}
