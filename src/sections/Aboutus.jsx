import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black font-heading text-white overflow-hidden">

      {/* ===== HERO TITLE ===== */}
      <section className="h-[45vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-dotted border-yellow-500 px-12 py-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-[0.35em] text-yellow-500 text-center">
            LEATHER BELT LUXE
          </h1>
        </motion.div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        {/* 01 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">
            01
          </span>

          <div>
            <h2 className="text-2xl md:text-3xl text-yellow-500 font-semibold mb-2">
              Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Leather Belt Luxe represents timeless sophistication. We design
              premium leather belts that elevate everyday essentials into
              statements of refined elegance.
            </p>
          </div>
        </motion.div>

        {/* 02 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">
            02
          </span>

          <div>
            <h2 className="text-2xl md:text-3xl text-yellow-500 font-semibold mb-2">
              Craftsmanship & Quality
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We use premium full-grain leather with precision stitching and
              polished buckles, ensuring durability and character that improves
              with age.
            </p>
          </div>
        </motion.div>

        {/* 03 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-start gap-8"
        >
          <span className="text-6xl font-bold text-yellow-500/30">
            03
          </span>

          <div>
            <h2 className="text-2xl md:text-3xl text-yellow-500 font-semibold mb-2">
              Our Promise
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are committed to excellence, sustainability, and timeless
              design. Our belts symbolize confidence, class, and enduring style.
            </p>
          </div>
        </motion.div>

      </section>

    </div>
  );
};

export default About;
