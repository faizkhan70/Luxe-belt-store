import React from "react";
import { motion } from "framer-motion";

function Coustamize() {
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
            CUSTOMIZE YOUR BELT
          </h1>
        </motion.div>
      </section>

      {/* ===== CUSTOM OPTIONS ===== */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-12">

        {/* 01 Leather Type */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">01</span>

          <div className="flex-1">
            <h2 className="text-2xl text-yellow-500 font-semibold mb-4">
              Choose Leather Type
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Full-Grain
              </button>
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Top-Grain
              </button>
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Suede
              </button>
            </div>
          </div>
        </motion.div>

        {/* 02 Buckle Style */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">02</span>

          <div className="flex-1">
            <h2 className="text-2xl text-yellow-500 font-semibold mb-4">
              Select Buckle Style
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Classic Silver
              </button>
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Matte Black
              </button>
              <button className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition">
                Gold Finish
              </button>
            </div>
          </div>
        </motion.div>

        {/* 03 Size Selection */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">03</span>

          <div className="flex-1">
            <h2 className="text-2xl text-yellow-500 font-semibold mb-4">
              Select Your Size
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {["30", "32", "34", "36", "38", "40"].map((size) => (
                <button
                  key={size}
                  className="border border-yellow-500 py-3 hover:bg-yellow-500 hover:text-black transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== ORDER BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <button className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold rounded-full hover:scale-105 hover:shadow-yellow-500/40 hover:shadow-xl transition duration-300">
            Place Custom Order
          </button>
        </motion.div>

      </section>
    </div>
  );
}

export default Coustamize;
