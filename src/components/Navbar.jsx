import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [

     { name: "Home", path: "*" },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catalog", path: "/catalog" },
    { name: "Custom", path: "/custom" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed font-heading w-full z-50 bg-black px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-yellow-500">
          LUXE BELTS
        </Link>

        {/* Hamburger */}
        <div
          className="flex flex-col gap-1 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white font-heading uppercase flex flex-col items-center justify-center gap-10 text-3xl font-semibold z-40"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-yellow-500 transition ${
                    isActive ? "text-yellow-500" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
