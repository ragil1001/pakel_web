import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Newspaper, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { colorPalette } from "./colors";
import { getNews } from "./firebaseUtils";

const Blog = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);

  const categories = ["Semua", "Pengumuman", "Kegiatan", "Berita", "Lainnya"];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const news = await getNews();
        setNewsItems(news);
      } catch (error) {
        console.error("Error fetching News:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
            {loading ? (
              <div className="flex justify-center items-center h-40 col-span-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredNews.map((news, index) => (
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
                        src={
                          news.image ||
                          "https://via.placeholder.com/400x300?text=No+Image"
                        }
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
                        {news.createdAt
                          ? new Date(
                              news.createdAt.toDate
                                ? news.createdAt.toDate()
                                : news.createdAt
                            ).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          : "Tanggal tidak tersedia"}
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
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 font-inter col-span-full">
                Tidak ada berita dalam kategori ini.
              </p>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
