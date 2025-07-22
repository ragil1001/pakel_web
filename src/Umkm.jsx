import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { colorPalette } from "./colors";

const UMKM = () => {
  const products = [
    {
      id: 1,
      name: "Keripik Singkong Renyah",
      owner: "Ibu Siti",
      description:
        "Keripik singkong dengan rasa original dan pedas, dibuat dari singkong pilihan.",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Jagung Manis Segar",
      owner: "Pak Budi",
      description:
        "Jagung manis langsung dari kebun, manis dan berkualitas tinggi.",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Tepung Jagung Organik",
      owner: "Ibu Rina",
      description: "Tepung jagung alami untuk berbagai olahan makanan sehat.",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Gula Aren Tradisional",
      owner: "Pak Slamet",
      description:
        "Gula aren murni, dibuat secara tradisional dengan cita rasa autentik.",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Kripik Tempe",
      owner: "Ibu Wulan",
      description:
        "Kripik tempe renyah dengan bumbu khas, cocok untuk camilan.",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Madu Hutan Asli",
      owner: "Pak Joko",
      description:
        "Madu murni dari hutan Gunung Kidul, kaya akan manfaat kesehatan.",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div style={{ backgroundColor: colorPalette.background }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
        `}
      </style>

      {/* Header Section dengan Parallax Effect */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
              alt="Produk UMKM Padukuhan Pakel"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-merriweather font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            UMKM Padukuhan Pakel
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Temukan produk unggulan dari tangan kreatif masyarakat kami
          </motion.p>
        </div>
      </section>

      {/* Katalog Produk Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colorPalette.primary}20` }}
              >
                <Briefcase
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Katalog Produk UMKM
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Jelajahi berbagai produk berkualitas tinggi dari UMKM Padukuhan
              Pakel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 10px 20px ${colorPalette.accent}40`,
                }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <motion.div
                    className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-inter font-semibold text-white"
                    style={{ backgroundColor: colorPalette.primary }}
                    whileHover={{ scale: 1.1 }}
                  >
                    UMKM Lokal
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-merriweather font-bold mb-2"
                    style={{ color: colorPalette.text }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm font-inter text-gray-600 mb-2"
                    style={{ color: colorPalette.text }}
                  >
                    Oleh: {product.owner}
                  </p>
                  <p className="text-sm font-inter text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <Link to={`/umkm/${product.id}`}>
                    <motion.button
                      className="px-4 py-2 rounded-full font-inter font-semibold text-sm text-white"
                      style={{ backgroundColor: colorPalette.secondary }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: colorPalette.primary,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Lihat Detail
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UMKM;
