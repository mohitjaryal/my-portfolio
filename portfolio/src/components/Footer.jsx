import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800 bg-gradient-to-b from-gray-950 via-black to-gray-950 py-12 text-gray-400 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        {/* Subtle inspirational line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-500 italic"
        >
          “Keep building. Keep learning. Keep growing 🌱”
        </motion.p>

        {/* Name + Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Mohit Jaryal</span> 
          </p>
        </motion.div>
          
      </div> 
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
    </footer>
  );
}
