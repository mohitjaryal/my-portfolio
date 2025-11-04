import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-b from-black via-gray-950 to-black py-10 text-gray-400 overflow-hidden">
      {/* background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Name + Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white tracking-wide">
              Mohit Jaryal
            </span>{" "}
            — Built with ❤️ using{" "}
            <span className="text-purple-400 font-medium">React</span> &
            <span className="text-cyan-400 font-medium"> Tailwind</span>.
          </p>
        </motion.div>

        {/* Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-5 text-lg"
        >
          <a
            href="https://github.com/mohitjaryal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/mohitjaryal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://x.com/mohitjaryal"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={22} />
          </a>
        </motion.div>
      </div>

      {/* small glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}
