import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Newspaper,
  ArrowLeft,
  Share2,
  MessageCircle,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { colorPalette } from "./colors";
import { getNews } from "./firebaseUtils";

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const news = await getNews();
        const selectedArticle = news.find((item) => item.id === id);
        setArticle(selectedArticle);
        setRelatedArticles(news.filter((item) => item.id !== id).slice(0, 3));
      } catch (error) {
        console.error("Error fetching News:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

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

  if (!article) {
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
          Artikel tidak ditemukan.
        </p>
      </motion.div>
    );
  }

  // Share functionality
  const shareArticle = async () => {
    const shareData = {
      title: article.title,
      text: article.content.substring(0, 100) + "...",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing article:", err);
      }
    } else {
      // Fallback: Open a generic share dialog or alert
      alert(
        "Fitur berbagi tidak didukung di browser ini. Gunakan ikon media sosial di bawah ini."
      );
    }
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${article.title}: ${article.content.substring(0, 100)}... ${
        window.location.href
      }`
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${article.title}: ${article.content.substring(0, 100)}...`
    )}&url=${encodeURIComponent(window.location.href)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing via URL, prompt user
  };

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
                article.image ||
                "https://via.placeholder.com/1200x600?text=No+Image"
              }
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="relative z-20 text-center text-white px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            className="inline-block px-3 py-1 rounded-full text-sm font-inter font-semibold text-white mb-4"
            style={{
              backgroundColor:
                article.type === "Pengumuman"
                  ? colorPalette.primary
                  : article.type === "Berita"
                  ? colorPalette.secondary
                  : article.type === "Kegiatan"
                  ? colorPalette.accent
                  : "#4B5563",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {article.type}
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-merriweather font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {article.title}
          </motion.h1>
          <motion.div
            className="flex items-center justify-center text-sm font-inter text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Calendar className="w-4 h-4 mr-1" />
            {article.createdAt
              ? new Date(
                  article.createdAt.toDate
                    ? article.createdAt.toDate()
                    : article.createdAt
                ).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Tanggal tidak tersedia"}
          </motion.div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-sm sm:prose-base font-inter text-gray-700">
                <p className="leading-relaxed">{article.content}</p>
                {/* Placeholder for additional content */}
              </div>

              {/* Share Section */}
              <motion.div
                className="mt-8 border-t border-gray-200 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4
                  className="text-lg font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Bagikan Artikel
                </h4>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    className="p-2 rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colorPalette.accent,
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={shareArticle}
                    aria-label="Bagikan artikel melalui aplikasi yang tersedia"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.a
                    href={shareLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colorPalette.accent,
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="Bagikan artikel ke WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colorPalette.accent,
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="Bagikan artikel ke Twitter"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colorPalette.accent,
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="Bagikan artikel ke Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={shareLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: colorPalette.accent,
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="Bagikan artikel ke Instagram"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        "Untuk membagikan ke Instagram, silakan salin URL artikel dan posting melalui aplikasi Instagram."
                      );
                    }}
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Back Button */}
              <motion.div className="mt-8">
                <Link to="/blog">
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
                    Kembali ke Blog
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Sidebar: Related Articles */}
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
                Artikel Lainnya
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link key={related.id} to={`/blog/${related.id}`}>
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
                          related.image ||
                          "https://via.placeholder.com/400x300?text=No+Image"
                        }
                        alt={related.title}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                      <div>
                        <div
                          className="inline-block px-2 py-1 rounded-full text-xs font-inter font-semibold text-white mb-2"
                          style={{
                            backgroundColor:
                              related.type === "Pengumuman"
                                ? colorPalette.primary
                                : related.type === "Berita"
                                ? colorPalette.secondary
                                : related.type === "Kegiatan"
                                ? colorPalette.accent
                                : "#4B5563",
                          }}
                        >
                          {related.type}
                        </div>
                        <h4
                          className="text-sm font-merriweather font-bold"
                          style={{ color: colorPalette.text }}
                        >
                          {related.title}
                        </h4>
                        <p className="text-xs font-inter text-gray-600">
                          {related.createdAt
                            ? new Date(
                                related.createdAt.toDate
                                  ? related.createdAt.toDate()
                                  : related.createdAt
                              ).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })
                            : "Tanggal tidak tersedia"}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogDetail;
