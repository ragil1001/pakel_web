import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ArrowLeft, MessageCircle, MapPin, X } from "lucide-react";
import { colorPalette } from "./colors";
import { getUmkms } from "./firebaseUtils";

const UmkmDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [otherProducts, setOtherProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUmkm = async () => {
      try {
        setLoading(true);
        const umkms = await getUmkms();
        const selectedProduct = umkms.find((item) => item.id === id);
        setProduct(selectedProduct);
        setOtherProducts(umkms.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error fetching UMKM:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUmkm();
  }, [id]);

  // Fungsi untuk format harga berdasarkan varian
  const formatPrice = (variants) => {
    if (!variants || variants.length === 0) {
      return "Harga tidak tersedia";
    }
    if (variants.length === 1) {
      return `Rp ${variants[0].price}/${variants[0].unit || "pcs"}`;
    }
    const prices = variants
      .map((v) => parseFloat(v.price))
      .filter((p) => !isNaN(p));
    if (prices.length === 0) {
      return "Harga tidak tersedia";
    }
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const unit = variants[0].unit || "pcs"; // Gunakan unit dari varian pertama
    return minPrice === maxPrice
      ? `Rp ${minPrice}/${unit}`
      : `Rp ${minPrice} - ${maxPrice}/${unit}`;
  };

  const openModal = (variant) => setSelectedVariant(variant);
  const closeModal = () => setSelectedVariant(null);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: colorPalette.background }}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </motion.div>
    );
  }

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
              src={
                product.image ||
                "https://via.placeholder.com/1200x600?text=No+Image"
              }
              alt={product.name}
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
            {product.name}
          </motion.h1>
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
                  Harga: {formatPrice(product.variants)}
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
                  {product.variants && product.variants.length > 0 ? (
                    product.variants.map((variant) => (
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
                          src={
                            variant.image ||
                            "https://via.placeholder.com/400x300?text=No+Image"
                          }
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
                          <p
                            className="text-sm font-inter font-semibold mb-2"
                            style={{ color: colorPalette.primary }}
                          >
                            Rp {variant.price}/{variant.unit || "pcs"}
                          </p>
                          <p className="text-sm font-inter text-gray-600 mb-2">
                            {variant.description}
                          </p>
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
                    ))
                  ) : (
                    <p className="text-sm font-inter text-gray-600">
                      Tidak ada varian tersedia.
                    </p>
                  )}
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
                        src={
                          other.image ||
                          "https://via.placeholder.com/400x300?text=No+Image"
                        }
                        alt={other.name}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div>
                        <div className="inline-block px-2 py-1 rounded-full text-xs font-inter font-semibold text-white mb-2"></div>
                        <h4
                          className="text-sm font-merriweather font-bold"
                          style={{ color: colorPalette.text }}
                        >
                          {other.name}
                        </h4>
                        <p className="text-xs font-inter text-gray-600">
                          Oleh: {other.owner}
                        </p>
                        <p
                          className="text-xs font-inter font-semibold"
                          style={{ color: colorPalette.primary }}
                        >
                          {formatPrice(other.variants)}
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
                src={
                  selectedVariant.image ||
                  "https://via.placeholder.com/400x300?text=No+Image"
                }
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
                  Harga: Rp {selectedVariant.price}/
                  {selectedVariant.unit || "pcs"}
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
