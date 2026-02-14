import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Executive Black Belt",
    price: "₹1,499",
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/19/35/brown-924734_1280.jpg",
  },
  {
    id: 2,
    name: "Vintage Brown Belt",
    price: "₹1,799",
    image:
      "https://cdn.pixabay.com/photo/2018/06/03/23/47/belt-3451963_1280.jpg",
  },
  {
    id: 3,
    name: "Premium Formal Belt",
    price: "₹2,199",
    image:
      "https://cdn.pixabay.com/photo/2013/06/16/21/56/belt-139757_1280.jpg",
  },
  {
    id: 4,
    name: "Casual Everyday Belt",
    price: "₹1,299",
    image:
      "https://cdn.pixabay.com/photo/2013/11/14/12/35/waistbelt-210349_1280.jpg",
  },
  {
    id: 5,
    name: "Classic Tan Leather Belt",
    price: "₹1,699",
    image:
      "https://cdn.pixabay.com/photo/2015/05/29/22/18/waist-belt-789903_1280.jpg",
  },
  {
    id: 6,
    name: "Luxury Signature Belt",
    price: "₹2,499",
    image:
      "https://cdn.pixabay.com/photo/2017/04/06/09/38/belt-2207784_1280.jpg",
  },
];

const Catalog = () => {
  return (
    <div className="min-h-screen font-heading bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-24">

      {/* Heading */}
      <motion.h2
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Our <span className="text-yellow-500 ">Collection</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-gray-400 mt-4 max-w-2xl mx-auto"
      >
        Discover our handcrafted premium leather belts designed for
        durability, elegance, and timeless sophistication.
      </motion.p>

      {/* Grid */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className=" rounded-2xl overflow-hidden border border-zinc-700 hover:border-yellow-500 transition duration-300 group"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-yellow-500 transition">
                {product.name}
              </h3>

              <p className="mt-3 text-yellow-500 font-medium">
                {product.price}
              </p>

              <button className="mt-6 w-full py-3 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
                Add to Cart
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Catalog;
