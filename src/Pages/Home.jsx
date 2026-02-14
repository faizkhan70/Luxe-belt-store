import { motion } from "framer-motion";
import Aboutus from "../sections/Aboutus";
import Coustamize from "../sections/Coustamize";
import Products from "../sections/Products";
import Getthouch from "../sections/Getthouch";

const Home = () => {
  return (
    <>
      <div
        className="relative h-screen font-heading text-white flex items-center justify-center px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/03/28/17/42/belt-1286399_1280.jpg')",
        }}
      >
        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl">

          {/* Heading */}
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-wide"
          >
            Crafted for{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-xl">
              Confidence
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            Premium handcrafted leather belts made from genuine full-grain
            leather. Designed for elegance, durability, and timeless luxury.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
          >
            <button className="px-10 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold rounded-full hover:scale-105 hover:shadow-yellow-500/40 hover:shadow-xl transition duration-300">
              Shop Collection
            </button>

            <button className="px-10 py-3 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:scale-105 transition duration-300">
              Customize Belt
            </button>
          </motion.div>
        </div>
      </div>

      <Aboutus />
      <Coustamize />
      <Products/>
      <Getthouch/>
    </>
  );
};

export default Home;
