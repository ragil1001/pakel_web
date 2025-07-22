import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, X, Calendar, Search } from "lucide-react";
import { colorPalette } from "./colors";

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      type: "Kegiatan",
      name: "Panen Raya Jagung 2025",
      date: "15 Juni 2025",
      description:
        "Kegiatan panen raya jagung bersama masyarakat desa, merayakan hasil panen yang melimpah.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      type: "Rapat",
      name: "Rapat Koordinasi UMKM",
      date: "10 Mei 2025",
      description:
        "Rapat untuk membahas strategi pengembangan UMKM lokal di Padukuhan Pakel.",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      type: "Festival",
      name: "Festival Panen Tahunan",
      date: "20 April 2025",
      description:
        "Festival tahunan dengan berbagai lomba dan pertunjukan budaya.",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      type: "Kegiatan",
      name: "Gotong Royong Desa",
      date: "5 Maret 2025",
      description:
        "Kegiatan gotong royong untuk pembangunan infrastruktur desa.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      type: "Pelatihan",
      name: "Pelatihan Pertanian Modern",
      date: "25 Februari 2025",
      description:
        "Pelatihan teknik pertanian modern untuk meningkatkan hasil panen.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      type: "Kegiatan",
      name: "Pembersihan Lingkungan",
      date: "12 Januari 2025",
      description:
        "Kegiatan pembersihan lingkungan untuk menjaga keindahan desa.",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&h=400&fit=crop",
    },
  ];

  const openModal = (item) => setSelectedImage(item);
  const closeModal = () => setSelectedImage(null);

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
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop"
              alt="Galeri Kegiatan Padukuhan Pakel"
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
            Galeri Kegiatan
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dokumentasi momen berharga dari berbagai aktivitas masyarakat
            Padukuhan Pakel
          </motion.p>
        </div>
      </section>

      {/* Galeri Section */}
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
                <Image
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Koleksi Kegiatan Desa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Jelajahi berbagai dokumentasi kegiatan yang mencerminkan semangat
              dan kebersamaan masyarakat kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 10px 20px ${colorPalette.accent}40`,
                }}
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover cursor-pointer"
                    onClick={() => openModal(item)}
                    aria-label={`View details of ${item.name}`}
                  />
                  <motion.div
                    className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-inter font-semibold text-white"
                    style={{
                      backgroundColor:
                        item.type === "Kegiatan"
                          ? colorPalette.primary
                          : item.type === "Rapat"
                          ? colorPalette.secondary
                          : item.type === "Festival"
                          ? colorPalette.accent
                          : "#4B5563",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.type}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => openModal(item)}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Search className="w-10 h-10 text-white" />
                  </motion.div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3
                    className="text-lg sm:text-xl font-merriweather font-bold mb-2"
                    style={{ color: colorPalette.text }}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center text-sm font-inter text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal untuk Gambar Detail */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden relative"
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
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-inter font-semibold text-white mb-2"
                  style={{
                    backgroundColor:
                      selectedImage.type === "Kegiatan"
                        ? colorPalette.primary
                        : selectedImage.type === "Rapat"
                        ? colorPalette.secondary
                        : selectedImage.type === "Festival"
                        ? colorPalette.accent
                        : "#4B5563",
                  }}
                >
                  {selectedImage.type}
                </div>
                <h3
                  className="text-xl font-merriweather font-bold mb-2"
                  style={{ color: colorPalette.text }}
                >
                  {selectedImage.name}
                </h3>
                <div className="flex items-center text-sm font-inter text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedImage.date}
                </div>
                <p className="text-sm font-inter text-gray-600">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Galeri;
