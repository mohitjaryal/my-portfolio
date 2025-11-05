import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-gray-950/90 border-gray-800 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-white tracking-tight hover:drop-shadow-[0_0_10px_rgba(147,51,234,0.8)] transition"
        >
          <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mohit
          </span>
          <span className="text-white">Jaryal</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === "home" ? "hero" : item.toLowerCase()}`}
              className="relative hover:text-white transition group"
            >
              {item}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/mohitjaryal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-purple-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/mohitjaryal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://x.com/mohitjaryal04"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
          >
            <FaXTwitter size={22} />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:reach.mohitjaryal@gmail.com"
            className="text-gray-300 hover:text-pink-400 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
