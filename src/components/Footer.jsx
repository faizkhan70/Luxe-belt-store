import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black font-heading text-white border-t border-zinc-800 px-6 pt-20 pb-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-yellow-500 tracking-widest">
            LUXE BELTS
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Premium handcrafted leather belts designed for elegance,
            durability, and timeless sophistication.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">About</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Catalog</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Custom Service</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Contact</li>
          </ul>
        </motion.div>

        {/* Shop Links */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Shop
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer transition">Formal Belts</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Casual Belts</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Luxury Collection</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Gift Boxes</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe for exclusive offers and new arrivals.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-l-lg focus:outline-none focus:border-yellow-500 text-sm"
            />
            <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-r-lg hover:bg-yellow-400 transition text-sm">
              Join
            </button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-zinc-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Luxe Belts. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
