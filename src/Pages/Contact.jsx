import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen font-heading bg-gradient-to-br from-black via-zinc-950 to-black text-white px-6 py-28">

      {/* Luxury Heading Section */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
          Let’s Create Something
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mt-2">
            Extraordinary
          </span>
        </h2>

        <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
          Every detail matters. Whether you're exploring bespoke designs or
          premium collections, our team is ready to assist you with elegance
          and precision.
        </p>

        {/* Decorative Line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-500 to-transparent mx-auto mt-10"></div>
      </motion.div>

      {/* Content Section */}
      <div className="mt-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Left Contact Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-xl uppercase tracking-widest text-yellow-500">
              Location
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              New Delhi, India
            </p>
          </div>

          <div>
            <h3 className="text-xl uppercase tracking-widest text-yellow-500">
              Email
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              support@luxebelts.com
            </p>
          </div>

          <div>
            <h3 className="text-xl uppercase tracking-widest text-yellow-500">
              Phone
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              +91 98765 43210
            </p>
          </div>

          <div>
            <h3 className="text-xl uppercase tracking-widest text-yellow-500">
              Hours
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              Monday – Saturday <br />
              10:00 AM – 7:00 PM
            </p>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-12 border border-yellow-500/20 shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">
            Private Consultation
          </h3>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-black/70 border border-zinc-700 rounded-xl focus:outline-none focus:border-yellow-500 transition duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-black/70 border border-zinc-700 rounded-xl focus:outline-none focus:border-yellow-500 transition duration-300"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-4 bg-black/70 border border-zinc-700 rounded-xl focus:outline-none focus:border-yellow-500 transition duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-semibold rounded-full hover:opacity-90 transition duration-300 tracking-wide"
            >
              Request Appointment
            </button>

          </form>
        </motion.div>

      </div>

    </div>
  );
};

export default Contact;
