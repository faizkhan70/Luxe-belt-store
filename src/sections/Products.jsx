import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      id: "01",
      name: "Classic Black Leather",
      price: "₹899",
      image:
        "https://cdn.pixabay.com/photo/2016/03/28/17/42/belt-1286399_1280.jpg",
    },
    {
      id: "02",
      name: "Brown Heritage Belt",
      price: "₹1,799",
      image:
        "https://cdn.pixabay.com/photo/2015/05/29/22/18/waist-belt-789903_1280.jpg",
    },
    {
      id: "03",
      name: "Matte Buckle Edition",
      price: "₹1,999",
      image:
        "https://cdn.pixabay.com/photo/2017/04/06/09/38/belt-2207784_1280.jpg",
    },
    {
      id: "04",
      name: "Luxury Gold Finish",
      price: "₹2,499",
      image:
        "https://cdn.pixabay.com/photo/2013/06/16/21/56/belt-139757_1280.jpg",
    },
  ];

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
            OUR COLLECTION
          </h1>
        </motion.div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">

        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative border border-yellow-500/20 hover:border-yellow-500 transition duration-300"
          >
            {/* Product Number */}
            <span className="absolute top-4 left-4 text-6xl font-bold text-yellow-500/20">
              {product.id}
            </span>

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-6 space-y-2">
              <h2 className="text-xl text-yellow-500 font-semibold">
                {product.name}
              </h2>
              <p className="text-gray-400">{product.price}</p>

              <button className="mt-4 px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">
                View Details
              </button>
            </div>
          </motion.div>
        ))}

      </section>

    </div>
  );
};

export default Products;
