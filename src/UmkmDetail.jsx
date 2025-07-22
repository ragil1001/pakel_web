import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowLeft, MessageCircle, MapPin, X } from "lucide-react";
import { colorPalette } from "./colors";

const UmkmDetail = () => {
  const { id } = useParams();
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Static product data (extended from Umkm.jsx)
  const products = [
    {
      id: 1,
      name: "Keripik Singkong Renyah",
      owner: "Ibu Siti",
      description:
        "Keripik singkong renyah dibuat dari singkong pilihan yang diolah secara tradisional. Tersedia dalam rasa original, pedas, dan manis, produk ini cocok sebagai camilan sehat untuk segala usia. Proses pengolahan yang higienis dan tanpa pengawet menjamin kualitas terbaik.",
      price: "Rp 25.000/pack",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567890",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Ibu Siti adalah pengusaha UMKM berpengalaman yang telah memproduksi keripik singkong selama lebih dari 10 tahun. Beliau dikenal karena dedikasinya dalam menjaga kualitas produk.",
      variants: [
        {
          id: "1a",
          name: "Keripik Singkong Original",
          description: "Rasa klasik dengan garam alami, renyah dan gurih.",
          price: "Rp 25.000/pack",
          image:
            "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
        },
        {
          id: "1b",
          name: "Keripik Singkong Pedas",
          description: "Rasa pedas menggigit dengan bumbu cabai asli.",
          price: "Rp 27.000/pack",
          image:
            "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
        },
        {
          id: "1c",
          name: "Keripik Singkong Manis",
          description: "Rasa manis karamel yang lezat untuk pecinta manis.",
          price: "Rp 27.000/pack",
          image:
            "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      id: 2,
      name: "Jagung Manis Segar",
      owner: "Pak Budi",
      description:
        "Jagung manis segar dipanen langsung dari kebun di Padukuhan Pakel. Dikenal karena rasa manis alami dan tekstur yang juicy, jagung ini ideal untuk direbus, dibakar, atau diolah menjadi berbagai hidangan.",
      price: "Rp 15.000/kg",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567891",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Pak Budi adalah petani jagung berpengalaman yang fokus pada pertanian organik untuk menghasilkan jagung berkualitas tinggi.",
      variants: [
        {
          id: "2a",
          name: "Jagung Manis Kuning",
          description: "Varietas kuning dengan rasa manis yang kaya.",
          price: "Rp 15.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
        {
          id: "2b",
          name: "Jagung Manis Putih",
          description: "Varietas putih dengan tekstur lembut dan manis.",
          price: "Rp 16.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      id: 3,
      name: "Tepung Jagung Organik",
      owner: "Ibu Rina",
      description:
        "Tepung jagung organik diolah dari jagung pilihan tanpa bahan kimia. Cocok untuk membuat bakwan, roti jagung, atau makanan bayi. Tekstur halus dan kaya nutrisi menjadikan produk ini pilihan sehat untuk keluarga.",
      price: "Rp 20.000/kg",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567892",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Ibu Rina adalah inovator UMKM yang mengembangkan produk olahan jagung dengan standar kesehatan tinggi.",
      variants: [
        {
          id: "3a",
          name: "Tepung Jagung Halus",
          description:
            "Tepung jagung dengan tekstur sangat halus untuk baking.",
          price: "Rp 20.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
        {
          id: "3b",
          name: "Tepung Jagung Kasar",
          description:
            "Tepung jagung kasar untuk tekstur renyah pada gorengan.",
          price: "Rp 18.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      id: 4,
      name: "Gula Aren Tradisional",
      owner: "Pak Slamet",
      description:
        "Gula aren murni dibuat secara tradisional dari nira pohon kelapa. Memiliki cita rasa autentik yang manis dan karamel, cocok untuk minuman, kue, atau masakan tradisional.",
      price: "Rp 30.000/kg",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567893",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Pak Slamet adalah pengrajin gula aren yang melestarikan metode tradisional untuk menghasilkan gula berkualitas.",
      variants: [
        {
          id: "4a",
          name: "Gula Aren Batangan",
          description: "Gula aren dalam bentuk batangan, mudah disimpan.",
          price: "Rp 30.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
        {
          id: "4b",
          name: "Gula Aren Bubuk",
          description: "Gula aren dalam bentuk bubuk, praktis untuk digunakan.",
          price: "Rp 32.000/kg",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      id: 5,
      name: "Kripik Tempe",
      owner: "Ibu Wulan",
      description:
        "Kripik tempe renyah dengan bumbu khas, dibuat dari tempe berkualitas. Tersedia dalam rasa original dan balado, camilan ini kaya protein dan cocok untuk semua kalangan.",
      price: "Rp 22.000/pack",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567894",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Ibu Wulan adalah pengusaha kuliner yang menghadirkan kripik tempe dengan cita rasa khas lokal.",
      variants: [
        {
          id: "5a",
          name: "Kripik Tempe Original",
          description: "Rasa asli tempe dengan bumbu tradisional.",
          price: "Rp 22.000/pack",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
        {
          id: "5b",
          name: "Kripik Tempe Balado",
          description: "Rasa pedas balado yang menggugah selera.",
          price: "Rp 24.000/pack",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
      ],
    },
    {
      id: 6,
      name: "Madu Hutan Asli",
      owner: "Pak Joko",
      description:
        "Madu murni dari hutan Gunung Kidul, dikumpulkan secara alami oleh peternak lebah lokal. Kaya akan manfaat kesehatan, madu ini memiliki rasa manis alami dan aroma khas hutan.",
      price: "Rp 100.000/liter",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=1200&h=600&fit=crop",
      whatsapp: "+6281234567895",
      location:
        "https://www.google.com/maps/place/Pakel,+Planjan,+Saptosari,+Gunungkidul+Regency,+Special+Region+of+Yogyakarta",
      bio: "Pak Joko adalah peternak lebah yang berdedikasi menjaga keaslian madu hutan dengan metode panen yang ramah lingkungan.",
      variants: [
        {
          id: "6a",
          name: "Madu Hutan Murni",
          description: "Madu murni tanpa tambahan, rasa klasik.",
          price: "Rp 100.000/liter",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
        {
          id: "6b",
          name: "Madu Hutan dengan Sarang",
          description: "Madu dengan potongan sarang lebah, kaya nutrisi.",
          price: "Rp 120.000/liter",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&h=400&fit=crop",
        },
      ],
    },
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colorPalette.background }}
      >
        <p className="text-xl font-inter text-gray-600">
          Produk tidak ditemukan.
        </p>
      </motion.div>
    );
  }

  // Other UMKM products (exclude current product)
  const otherProducts = products.filter((item) => item.id !== product.id);

  const openModal = (variant) => setSelectedVariant(variant);
  const closeModal = () => setSelectedVariant(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: colorPalette.background }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            className="w-full h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            className="inline-block px-3 py-1 rounded-full text-sm font-inter font-semibold text-white mb-4"
            style={{ backgroundColor: colorPalette.primary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            UMKM Lokal
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-merriweather font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {product.name}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl font-inter text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {product.price}
          </motion.p>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Description */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-8">
                <h2
                  className="text-2xl font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Deskripsi Produk
                </h2>
                <div className="prose prose-sm sm:prose-base font-inter text-gray-700">
                  <p className="leading-relaxed">{product.description}</p>
                </div>
                <p
                  className="text-lg font-inter font-semibold mt-4"
                  style={{ color: colorPalette.primary }}
                >
                  Harga: {product.price}
                </p>
                <p
                  className="text-sm font-inter text-gray-600"
                  style={{ color: colorPalette.text }}
                >
                  Oleh: {product.owner}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href={`https://wa.me/${
                    product.whatsapp
                  }?text=Saya%20tertarik%20dengan%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                  style={{ backgroundColor: colorPalette.secondary }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: colorPalette.primary,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi Pengelola
                </motion.a>
                <motion.a
                  href={product.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                  style={{ backgroundColor: colorPalette.primary }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: colorPalette.secondary,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi
                </motion.a>
              </div>

              {/* Product Variants */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-8">
                <h2
                  className="text-2xl font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Varian Produk
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.variants.map((variant) => (
                    <motion.div
                      key={variant.id}
                      className="bg-gray-50 rounded-2xl shadow-md overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{
                        y: -5,
                        boxShadow: `0 5px 10px ${colorPalette.accent}40`,
                      }}
                    >
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-32 sm:h-40 object-cover"
                      />
                      <div className="p-4">
                        <h4
                          className="text-sm font-merriweather font-bold mb-2"
                          style={{ color: colorPalette.text }}
                        >
                          {variant.name}
                        </h4>
                        <motion.button
                          className="px-4 py-2 rounded-full font-inter font-semibold text-xs text-white"
                          style={{ backgroundColor: colorPalette.secondary }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: colorPalette.primary,
                          }}
                          transition={{ duration: 0.3 }}
                          onClick={() => openModal(variant)}
                        >
                          Lihat Detail
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Seller Info */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
                <h2
                  className="text-2xl font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Tentang Penjual
                </h2>
                <p
                  className="text-lg font-inter font-semibold mb-2"
                  style={{ color: colorPalette.text }}
                >
                  {product.owner}
                </p>
                <p className="text-sm font-inter text-gray-600">
                  {product.bio}
                </p>
              </div>
            </motion.div>

            {/* Sidebar: Other UMKM Products */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3
                className="text-xl font-merriweather font-bold mb-4"
                style={{ color: colorPalette.text }}
              >
                UMKM Lainnya
              </h3>
              <div className="space-y-4">
                {otherProducts.map((other) => (
                  <Link key={other.id} to={`/umkm/${other.id}`}>
                    <motion.div
                      className="bg-white rounded-2xl shadow-md p-4 flex items-start space-x-4"
                      whileHover={{
                        y: -5,
                        boxShadow: `0 5px 10px ${colorPalette.accent}40`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={other.image}
                        alt={other.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div>
                        <div
                          className="inline-block px-2 py-1 rounded-full text-xs font-inter font-semibold text-white mb-2"
                          style={{ backgroundColor: colorPalette.primary }}
                        >
                          UMKM Lokal
                        </div>
                        <h4
                          className="text-sm font-merriweather font-bold"
                          style={{ color: colorPalette.text }}
                        >
                          {other.name}
                        </h4>
                        <p className="text-xs font-inter text-gray-600">
                          Oleh: {other.owner}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/umkm">
              <motion.button
                className="flex items-center px-6 py-3 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke UMKM
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal for Variant Details */}
      <AnimatePresence>
        {selectedVariant && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={closeModal}
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              <img
                src={selectedVariant.image}
                alt={selectedVariant.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-merriweather font-bold mb-2"
                  style={{ color: colorPalette.text }}
                >
                  {selectedVariant.name}
                </h3>
                <p className="text-sm font-inter text-gray-600 mb-4">
                  {selectedVariant.description}
                </p>
                <p
                  className="text-lg font-inter font-semibold"
                  style={{ color: colorPalette.primary }}
                >
                  Harga: {selectedVariant.price}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default UmkmDetail;
