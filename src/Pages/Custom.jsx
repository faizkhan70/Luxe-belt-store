import { motion } from "framer-motion";

const Custom = () => {
  return (
    <div className="min-h-screen font-heading bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-24">

      {/* Heading */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Create Your <span className="text-yellow-500">Signature Belt</span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Design a belt that reflects your personality. Choose your leather,
          buckle, size, and add custom engraving for a truly unique accessory.
        </p>
      </motion.div>

      {/* Custom Options */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Info Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-yellow-500">
              Custom Size
            </h3>
            <p className="text-gray-400 mt-2">
              Get a perfect fit tailored specifically to your waist measurement.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-500">
              Premium Buckle Selection
            </h3>
            <p className="text-gray-400 mt-2">
              Choose from classic, modern, or luxury metal buckle designs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-500">
              Name Engraving
            </h3>
            <p className="text-gray-400 mt-2">
              Personalize your belt with initials or a custom engraved message.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-yellow-500">
              Gift Packaging
            </h3>
            <p className="text-gray-400 mt-2">
              Elegant premium packaging perfect for gifting.
            </p>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-800 rounded-2xl p-10 border border-zinc-700 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
            Start Custom Order
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-yellow-500"
            />

            <input
              type="text"
              placeholder="Waist Size (inches)"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-yellow-500"
            />

            <input
              type="text"
              placeholder="Engraving Text (Optional)"
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:outline-none focus:border-yellow-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Submit Request
            </button>

          </form>
        </motion.div>

      </div>

    </div>
  );
};

export default Custom;
