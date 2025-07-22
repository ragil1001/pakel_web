import React from "react";
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

const BlogDetail = () => {
  const { id } = useParams();

  // Static news data (same as Blog.jsx)
  const newsItems = [
    {
      id: 1,
      type: "Pengumuman",
      title: "Panen Raya Jagung 2025",
      content:
        "Kegiatan panen raya jagung akan dilaksanakan pada tanggal 15 Juni 2025 di seluruh lahan pertanian Padukuhan Pakel. Acara ini akan dihadiri oleh seluruh masyarakat desa dan pejabat setempat. Panen raya ini merupakan puncak dari musim tanam yang sukses, dengan hasil jagung manis yang melimpah. Kegiatan ini juga akan dimeriahkan dengan berbagai acara budaya, seperti tarian tradisional dan pasar UMKM lokal. Kami mengundang seluruh masyarakat untuk turut serta dalam kegiatan ini untuk mempererat kebersamaan dan merayakan hasil bumi desa kita.",
      date: "10 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=600&fit=crop",
    },
    {
      id: 2,
      type: "Berita",
      title: "Pembukaan UMKM Baru",
      content:
        "Tiga UMKM baru telah dibuka di desa untuk mendukung perekonomian lokal, termasuk toko keripik singkong dan madu hutan asli. Peresmian dilakukan oleh kepala desa pada tanggal 8 Juni 2025, dihadiri oleh warga dan pengusaha lokal. UMKM ini diharapkan dapat meningkatkan pendapatan masyarakat dan mempromosikan produk lokal ke pasar yang lebih luas. Produk-produk unggulan seperti keripik singkong dengan berbagai rasa dan madu hutan asli telah mendapat sambutan positif dari konsumen. Pemerintah desa berkomitmen untuk terus mendukung pengembangan UMKM melalui pelatihan dan promosi.",
      date: "8 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200&h=600&fit=crop",
    },
    {
      id: 3,
      type: "Kegiatan",
      title: "Pelatihan Pertanian Modern",
      content:
        "Pelatihan teknik pertanian modern untuk meningkatkan hasil panen diadakan dengan melibatkan para petani muda desa. Kegiatan ini berlangsung pada 5 Juni 2025 di balai desa, bekerja sama dengan Dinas Pertanian Kabupaten Gunung Kidul. Para peserta diajarkan tentang penggunaan teknologi irigasi tetes, pemupukan organik, dan pengendalian hama terpadu. Pelatihan ini bertujuan untuk meningkatkan produktivitas pertanian dan mendukung keberlanjutan lingkungan. Antusiasme peserta sangat tinggi, dan mereka berharap dapat menerapkan ilmu yang diperoleh di lahan mereka.",
      date: "5 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    },
    {
      id: 4,
      type: "Pengumuman",
      title: "Rapat Desa Bulanan",
      content:
        "Rapat desa bulanan akan diadakan pada 20 Mei 2025 untuk membahas pembangunan infrastruktur dan program UMKM. Rapat ini akan berlangsung di balai desa mulai pukul 19.00 WIB dan terbuka untuk seluruh warga Padukuhan Pakel. Agenda utama meliputi rencana pembangunan jalan desa, peningkatan fasilitas umum, dan strategi promosi produk UMKM. Kami mengharapkan partisipasi aktif dari masyarakat untuk memberikan masukan dan ide-ide inovatif demi kemajuan desa. Informasi lebih lanjut dapat diperoleh di kantor desa.",
      date: "15 Mei 2025",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=600&fit=crop",
    },
    {
      id: 5,
      type: "Berita",
      title: "Festival Panen Berhasil Digelar",
      content:
        "Festival panen tahunan sukses digelar dengan berbagai lomba dan pertunjukan budaya yang meriah. Acara ini berlangsung pada 20 April 2025 di lapangan desa, dihadiri oleh ribuan warga dan pengunjung dari luar desa. Kegiatan meliputi lomba memasak berbahan jagung, tari tradisional, dan pameran produk UMKM. Festival ini tidak hanya menjadi ajang perayaan hasil panen, tetapi juga memperkuat identitas budaya dan kebersamaan masyarakat Padukuhan Pakel. Kami berterima kasih kepada semua pihak yang telah mendukung kesuksesan acara ini.",
      date: "25 April 2025",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&h=600&fit=crop",
    },
    {
      id: 6,
      type: "Kegiatan",
      title: "Pembersihan Lingkungan Desa",
      content:
        "Kegiatan pembersihan lingkungan desa diadakan untuk menjaga keindahan dan kebersihan Padukuhan Pakel. Kegiatan ini berlangsung pada 10 Januari 2025, melibatkan warga dari berbagai dusun. Fokus utama adalah membersihkan saluran air, jalan desa, dan area sekitar balai desa. Selain itu, warga juga menanam pohon di beberapa titik untuk mendukung penghijauan. Kegiatan ini mencerminkan semangat gotong royong dan kepedulian terhadap lingkungan. Kami mengapresiasi partisipasi semua warga dalam menjaga kebersihan desa.",
      date: "10 Januari 2025",
      image:
        "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=1200&h=600&fit=crop",
    },
    {
      id: 7,
      type: "Lainnya",
      title: "Pameran Produk Lokal",
      content:
        "Pameran produk lokal diadakan untuk mempromosikan hasil UMKM Padukuhan Pakel ke pasar yang lebih luas. Acara ini berlangsung pada 12 Maret 2025 di pusat desa, menampilkan berbagai produk seperti keripik singkong, madu hutan, dan kerajinan tangan. Pengunjung dapat menikmati demo pembuatan produk dan mencicipi makanan lokal. Pameran ini juga menjadi ajang untuk menjalin kerja sama dengan distributor dari luar daerah. Keberhasilan acara ini diharapkan dapat meningkatkan ekonomi lokal.",
      date: "12 Maret 2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    },
  ];

  const article = newsItems.find((item) => item.id === parseInt(id));

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

  // Related articles (exclude current article)
  const relatedArticles = newsItems
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

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
              src={article.image}
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
            {article.date}
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
                <p className="leading-relaxed mt-4">
                  Kegiatan ini merupakan bagian dari upaya berkelanjutan
                  masyarakat Padukuhan Pakel untuk memajukan desa melalui
                  kolaborasi dan inovasi. Kami mengundang semua pihak untuk
                  terus mendukung inisiatif ini demi kesejahteraan bersama.
                </p>
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
                Artikel Terkait
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
                        src={related.image}
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
                          {related.date}
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
