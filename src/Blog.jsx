import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { colorPalette } from "./colors";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const newsItems = [
    {
      id: 1,
      type: "Pengumuman",
      title: "Panen Raya Jagung 2025",
      content:
        "Kegiatan panen raya jagung akan dilaksanakan pada tanggal 15 Juni 2025 di seluruh lahan pertanian Padukuhan Pakel. Acara ini akan dihadiri oleh seluruh masyarakat desa dan pejabat setempat.",
      date: "10 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      type: "Berita",
      title: "Pembukaan UMKM Baru",
      content:
        "Tiga UMKM baru telah dibuka di desa untuk mendukung perekonomian lokal, termasuk toko keripik singkong dan madu hutan asli.",
      date: "8 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      type: "Kegiatan",
      title: "Pelatihan Pertanian Modern",
      content:
        "Pelatihan teknik pertanian modern untuk meningkatkan hasil panen diadakan dengan melibatkan para petani muda desa.",
      date: "5 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      type: "Pengumuman",
      title: "Rapat Desa Bulanan",
      content:
        "Rapat desa bulanan akan diadakan pada 20 Mei 2025 untuk membahas pembangunan infrastruktur dan program UMKM.",
      date: "15 Mei 2025",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      type: "Berita",
      title: "Festival Panen Berhasil Digelar",
      content:
        "Festival panen tahunan sukses digelar dengan berbagai lomba dan pertunjukan budaya yang meriah.",
      date: "25 April 2025",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      type: "Kegiatan",
      title: "Pembersihan Lingkungan Desa",
      content:
        "Kegiatan pembersihan lingkungan desa diadakan untuk menjaga keindahan dan kebersihan Padukuhan Pakel.",
      date: "10 Januari 2025",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      type: "Lainnya",
      title: "Pameran Produk Lokal",
      content:
        "Pameran produk lokal diadakan untuk mempromosikan hasil UMKM Padukuhan Pakel ke pasar yang lebih luas.",
      date: "12 Maret 2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    },
  ];

  const categories = ["Semua", "Pengumuman", "Kegiatan", "Berita", "Lainnya"];

  const filteredNews =
    selectedCategory === "Semua"
      ? newsItems
      : newsItems.filter((news) => news.type === selectedCategory);

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
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop"
              alt="Berita Padukuhan Pakel"
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
            Berita & Pengumuman
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ikuti perkembangan terbaru dari Padukuhan Pakel
          </motion.p>
        </div>
      </section>

      {/* Blog Catalog Section */}
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
                <Newspaper
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Katalog Berita
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Temukan informasi terkini tentang kegiatan, pengumuman, dan berita
              dari masyarakat Padukuhan Pakel
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className="px-4 py-2 rounded-full font-inter font-semibold text-sm sm:text-base border-2 transition-colors"
                style={{
                  backgroundColor:
                    selectedCategory === category
                      ? colorPalette.primary
                      : "transparent",
                  color:
                    selectedCategory === category
                      ? "#FFFFFF"
                      : colorPalette.text,
                  borderColor: colorPalette.primary,
                }}
                whileHover={{
                  backgroundColor:
                    selectedCategory === category
                      ? colorPalette.primary
                      : colorPalette.secondary,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* News Catalog */}
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredNews.length > 0 ? (
                filteredNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{
                      y: -10,
                      boxShadow: `0 10px 20px ${colorPalette.accent}40`,
                    }}
                  >
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                      />
                      <motion.div
                        className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-inter font-semibold text-white"
                        style={{
                          backgroundColor:
                            news.type === "Pengumuman"
                              ? colorPalette.primary
                              : news.type === "Berita"
                              ? colorPalette.secondary
                              : news.type === "Kegiatan"
                              ? colorPalette.accent
                              : "#4B5563",
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {news.type}
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3
                        className="text-lg sm:text-xl font-merriweather font-bold mb-2"
                        style={{ color: colorPalette.text }}
                      >
                        {news.title}
                      </h3>
                      <div className="flex items-center text-sm font-inter text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
                      </div>
                      <p className="text-sm font-inter text-gray-600 mb-4 line-clamp-2">
                        {news.content}
                      </p>
                      <Link to={`/blog/${news.id}`}>
                        <motion.a
                          className="font-inter font-semibold text-sm"
                          style={{ color: colorPalette.primary }}
                          whileHover={{ color: colorPalette.secondary }}
                          aria-label={`Read more about ${news.title}`}
                        >
                          Baca Selengkapnya
                        </motion.a>
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-600 font-inter col-span-full">
                  Tidak ada berita dalam kategori ini.
                </p>
              )}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
