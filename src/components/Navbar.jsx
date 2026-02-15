import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catalog", path: "/catalog" },
    { name: "Custom", path: "/custom" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed w-full bg-black text-white px-6 py-5 flex justify-between items-center z-50">
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          LUXE BELTS
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1">
          <span className={`w-7 h-0.5 bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-7 h-0.5 bg-white ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-7 h-0.5 bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40"
          >
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path}>
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
