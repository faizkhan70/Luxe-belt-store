import React from "react";
import { motion } from "framer-motion";

export default function Getthouch() {
  return (
    <div className="bg-black text-white font-heading min-h-screen overflow-hidden">

      {/* ===== HERO TITLE ===== */}
      <section className="h-[40vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-dotted border-yellow-500 px-12 py-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-[0.35em] text-yellow-500 text-center">
            GET IN TOUCH
          </h1>
        </motion.div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12">

        {/* ===== LEFT SIDE - INFO ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* 01 */}
          <div className="flex items-start gap-6">
            <span className="text-5xl font-bold text-yellow-500/30">01</span>
            <div>
              <h2 className="text-xl text-yellow-500 font-semibold">
                Email Us
              </h2>
              <p className="text-gray-400 mt-1">
                support@leatherbeltluxe.com
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="flex items-start gap-6">
            <span className="text-5xl font-bold text-yellow-500/30">02</span>
            <div>
              <h2 className="text-xl text-yellow-500 font-semibold">
                Call Us
              </h2>
              <p className="text-gray-400 mt-1">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="flex items-start gap-6">
            <span className="text-5xl font-bold text-yellow-500/30">03</span>
            <div>
              <h2 className="text-xl text-yellow-500 font-semibold">
                Visit Us
              </h2>
              <p className="text-gray-400 mt-1">
                Delhi, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT SIDE - FORM ===== */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-yellow-500/30 focus:border-yellow-500 outline-none px-4 py-3 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-yellow-500/30 focus:border-yellow-500 outline-none px-4 py-3 text-white"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent border border-yellow-500/30 focus:border-yellow-500 outline-none px-4 py-3 text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold hover:scale-105 hover:shadow-yellow-500/40 hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

      </section>

    </div>
  );
}
