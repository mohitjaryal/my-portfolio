import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // ✅ Replace with your real EmailJS credentials
  const SERVICE_ID = "service_2w93t7q";
  const TEMPLATE_ID = "template_b9blgf9";
  const PUBLIC_KEY = "4gqTRLG_3SsiiavoB";

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      alert("✅ Message sent successfully! I'll get back to you soon.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Subtle glowing gradients in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.25),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          💬 Let’s Connect
        </motion.h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a project, idea, or collaboration in mind?  
          Fill out the form below and I’ll get back to you personally via email. 🚀
        </p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass border border-gray-800 p-8 rounded-3xl shadow-[0_0_40px_rgba(124,58,237,0.15)] backdrop-blur-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your full name"
                className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 mb-2 block">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-300 mb-2 block">Your Message</label>
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Write your message here..."
              className="w-full p-3 rounded-xl bg-gray-900/70 border border-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all resize-none"
            ></textarea>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                loading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5"
              }`}
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
