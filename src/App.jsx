import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import Custom from "./Pages/Custom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
