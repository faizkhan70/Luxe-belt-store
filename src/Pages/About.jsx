import { motion } from "framer-motion";

const About = () => {
  return (
    <>
    <div className="min-h-screen font-heading bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-24 flex items-center">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            About <span className="text-yellow-500">LUXE BELTS</span>
          </motion.h2>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >
            At Luxe Belts, we believe that true style lies in the details.
            Our handcrafted leather belts are designed for individuals who
            appreciate premium quality, durability, and timeless elegance.
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-gray-400 text-lg leading-relaxed"
          >
            Every piece is made using carefully selected full-grain leather,
            premium buckles, and expert craftsmanship. We combine traditional
            techniques with modern design to create belts that elevate your
            everyday look.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 shadow-lg">
              Explore Collection
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE VISUAL BOX */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-zinc-800 rounded-2xl p-10 border border-zinc-700 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
            Why Choose Us?
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>✔ 100% Genuine Full-Grain Leather</li>
            <li>✔ Handcrafted by Skilled Artisans</li>
            <li>✔ Premium Metal Buckles</li>
            <li>✔ Long-Lasting Durability</li>
            <li>✔ Worldwide Shipping</li>
          </ul>
        </motion.div>

      </div>
    </div>
 
    </>
  );
};

export default About;
