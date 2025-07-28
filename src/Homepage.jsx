import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Users,
  Briefcase,
  Star,
  Leaf,
  Mountain,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ArrowUp,
  Home,
  Play,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colorPalette } from "./colors";
import { getUmkms, getNews, getGallery } from "./firebaseUtils";

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [umkmProducts, setUmkmProducts] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const umkms = await getUmkms();
        setUmkmProducts(umkms.slice(0, 3));
        const gallery = await getGallery();
        setGalleryImages(gallery.slice(0, 4));
        const news = await getNews();
        setNewsItems(news.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);

      const sections = [
        "beranda",
        "tentang",
        "umkm",
        "peta",
        "galeri",
        "berita",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr || typeof dateStr !== "string") {
      return "Tanggal tidak tersedia";
    }
    let dateObj;
    if (dateStr.includes("/")) {
      const [day, month, year] = dateStr.split("/");
      dateObj = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      const [day, month, year] = dateStr.split(" ");
      const monthMap = {
        Januari: 0,
        Februari: 1,
        Maret: 2,
        April: 3,
        Mei: 4,
        Juni: 5,
        Juli: 6,
        Agustus: 7,
        September: 8,
        Oktober: 9,
        November: 10,
        Desember: 11,
      };
      dateObj = new Date(
        parseInt(year),
        monthMap[month] || parseInt(month) - 1,
        parseInt(day)
      );
    }
    if (isNaN(dateObj.getTime())) {
      return "Tanggal tidak valid";
    }
    return dateObj.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

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
    const unit = variants[0].unit || "pcs";
    return minPrice === maxPrice
      ? `Rp ${minPrice}/${unit}`
      : `Rp ${minPrice} - ${maxPrice}/${unit}`;
  };

  const handleVideoOpen = () => {
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-red-500 font-inter text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: colorPalette.background }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
          .transform-gpu { transform: translate3d(0, 0, 0); }
          .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border: 2px solid ${colorPalette.accent};
            border-radius: 50%;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
          }
          /* Enhanced styles for Tentang section */
          .tentang-section {
            background: linear-gradient(to bottom, ${colorPalette.background}, rgba(154, 230, 180, 0.1));
            padding: 2rem 1rem;
          }
          @media (min-width: 640px) {
            .tentang-section {
              padding: 3rem 1.5rem;
            }
          }
          @media (min-width: 1024px) {
            .tentang-section {
              padding: 4rem 2rem;
            }
          }
          .tentang-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .tentang-title {
            font-size: 1.5rem;
            line-height: 1.2;
            font-weight: 700;
            letter-spacing: -0.025em;
          }
          @media (min-width: 640px) {
            .tentang-title {
              font-size: 2rem;
            }
          }
          @media (min-width: 1024px) {
            .tentang-title {
              font-size: 2.5rem;
            }
          }
          .tentang-subtitle {
            font-size: 0.875rem;
            line-height: 1.5;
            color: #4B5563;
            max-width: 36rem;
            margin: 0 auto;
          }
          @media (min-width: 640px) {
            .tentang-subtitle {
              font-size: 1rem;
            }
          }
          .tentang-text {
            font-size: 0.875rem;
            line-height: 1.6;
            color: ${colorPalette.text};
            max-width: 32rem;
          }
          @media (min-width: 640px) {
            .tentang-text {
              font-size: 1rem;
            }
          }
          .highlight-text {
            font-family: 'Merriweather', serif;
            font-weight: 700;
            color: ${colorPalette.primary};
          }
          .tentang-button {
            padding: 0.5rem 1.5rem;
            font-size: 0.875rem;
            border-radius: 9999px;
            background-color: ${colorPalette.primary};
            color: white;
            font-weight: 600;
          }
          @media (min-width: 640px) {
            .tentang-button {
              padding: 0.75rem 2rem;
              font-size: 1rem;
            }
          }
          .tentang-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          @media (min-width: 640px) {
            .tentang-image {
              height: 16rem;
            }
          }
          @media (min-width: 1024px) {
            .tentang-image {
              height: 20rem;
            }
          }
        `}
      </style>

      <section
        id="beranda"
        className="relative h-[60vh] sm:h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video
            className="w-full h-full object-cover transform-gpu"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Background video of Padukuhan Pakel"
            onError={() =>
              console.error(
                "Video failed to load. Check path: /videos/hero.mp4"
              )
            }
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop"
              alt="Fallback Pemandangan Padukuhan Pakel"
            />
          </video>
        </div>
        <div className="relative z-20 text-center text-white px-4 sm:px-4 md:px-6 max-w-2xl mx-auto">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-merriweather font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Selamat Datang di{" "}
            <span
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: colorPalette.accent }}
            >
              Padukuhan Pakel
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-inter mb-4 sm:mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Padukuhan yang kaya akan hasil bumi, terletak di jantung Gunung
            Kidul, Yogyakarta.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link to="/tentang">
                <motion.button
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                  style={{
                    backgroundColor: "transparent",
                    border: `2px solid ${colorPalette.primary}`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: colorPalette.primary,
                    borderColor: colorPalette.primary,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Jelajahi Padukuhan
                </motion.button>
              </Link>
              <Link to="/umkm">
                <motion.button
                  className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-inter font-semibold text-sm sm:text-base border-2"
                  style={{
                    borderColor: colorPalette.accent,
                    color: colorPalette.accent,
                    backgroundColor: "transparent",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: colorPalette.accent,
                    color: colorPalette.text,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Lihat UMKM
                </motion.button>
              </Link>
            </div>

            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <motion.button
                  onClick={handleVideoOpen}
                  className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/60 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="pulse-ring"></span>
                  <Play
                    className="w-6 h-6 sm:w-8 sm:h-8 ml-1"
                    fill="currentColor"
                  />
                </motion.button>
              </div>

              <div className="text-center">
                <motion.p
                  className="text-sm sm:text-base font-inter text-white font-medium tracking-wide"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                    letterSpacing: "0.5px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Tonton Dokumenter
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm font-inter text-white/80 mt-0.5"
                  style={{
                    textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                    letterSpacing: "0.3px",
                  }}
                >
                  Padukuhan Pakel
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleVideoClose}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-4 sm:mx-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleVideoClose}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                style={{ color: "white" }}
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <video
                ref={videoRef}
                className="w-full h-auto rounded-2xl shadow-lg"
                controls
                onError={() =>
                  console.error(
                    "Video failed to load. Check path: /videos/pakel.mp4"
                  )
                }
              >
                <source src="/videos/pakel.mp4" type="video/mp4" />
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
                  alt="Fallback Pemandangan Padukuhan Pakel"
                  className="w-full h-full object-cover"
                />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="tentang"
        className="tentang-section relative overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F855A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm-20 4h4v-2h-4v-4h-2v4h-4v2h4v4h2v-4zm20 20h-4v2h4v4h2v-4h4v-2h-4v-4h-2v4zm-20-4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 tentang-container">
          <motion.div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2
              className="tentang-title font-merriweather"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Tentang Padukuhan Pakel
            </h2>
            <p
              className="tentang-subtitle font-inter mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mengenal lebih dekat padukuhan yang kaya akan hasil bumi dan
              kehidupan masyarakat agraris
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="tentang-text font-inter mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="highlight-text text-lg sm:text-xl">
                  Padukuhan Pakel
                </span>{" "}
                merupakan salah satu dusun di Desa Planjan, Kecamatan Saptosari,
                Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta, yang dikenal
                sebagai wilayah pedesaan dengan potensi alam karst khas Gunung
                Kidul. Dengan estimasi populasi sekitar{" "}
                <span className="highlight-text">621 jiwa</span>, padukuhan ini
                bergantung pada sektor pertanian tadah hujan, menghasilkan
                komoditas utama seperti{" "}
                <span className="highlight-text">jagung dan singkong</span> yang
                menjadi andalan masyarakat setempat.
              </motion.p>
              <motion.p
                className="tentang-text font-inter mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Di samping pertanian, aktivitas{" "}
                <span className="highlight-text">UMKM lokal</span> turut
                mendukung perekonomian, termasuk pengolahan hasil bumi dan
                perdagangan kecil-kecilan, yang mencerminkan nilai gotong royong
                serta adaptasi terhadap kondisi tanah kapur. Terletak di tengah
                lanskap bukit dan gua yang memesona, Padukuhan Pakel menjaga
                harmoni antara{" "}
                <span className="highlight-text">tradisi Jawa</span>, kehidupan
                komunal, dan upaya pembangunan berkelanjutan, mengajak
                pengunjung untuk menikmati keaslian budaya serta keramahan
                warganya.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/tentang">
                  <motion.button
                    className="tentang-button font-inter"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: colorPalette.secondary,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Tentang Kami
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/public/profil/profil1.jpg"
                alt="Kehidupan Padukuhan Pakel"
                className="tentang-image"
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                style={{ backgroundColor: colorPalette.secondary }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: colorPalette.accent }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-7">
            {[
              { label: "Jumlah Penduduk", value: 621, icon: Users },
              { label: "Luas Lahan", value: "125 Ha", icon: Leaf },
              { label: "Jumlah RW", value: 4, icon: Home },
              { label: "Jumlah RT", value: 6, icon: MapPin },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <stat.icon
                  className="w-7 h-7 sm:w-9 sm:h-9"
                  style={{ color: colorPalette.primary }}
                />
                <div>
                  <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl font-merriweather font-bold"
                    style={{ color: colorPalette.text }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p
                    className="text-sm sm:text-base font-inter"
                    style={{ color: colorPalette.text }}
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="umkm" className="py-10 sm:py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              UMKM Unggulan
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Produk lokal berkualitas dari tangan-tangan kreatif masyarakat
              padukuhan
            </p>
          </motion.div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
              {umkmProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative">
                    <img
                      src={
                        product.image ||
                        "https://via.placeholder.com/400x300?text=No+Image"
                      }
                      alt={product.name}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3
                      className="text-base sm:text-lg md:text-xl font-merriweather font-bold mb-1.5"
                      style={{ color: colorPalette.text }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-inter mb-2 sm:mb-3"
                      style={{ color: colorPalette.text }}
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-sm sm:text-base font-inter font-bold"
                        style={{ color: colorPalette.primary }}
                      >
                        {formatPrice(product.variants)}
                      </span>
                      <Link to={`/umkm/${product.id}`}>
                        <motion.button
                          className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full font-inter font-semibold text-xs sm:text-sm text-white"
                          style={{ backgroundColor: colorPalette.primary }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: colorPalette.secondary,
                          }}
                        >
                          Detail
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          <motion.div
            className="text-center mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/umkm">
              <motion.button
                className="px-7 py-2.5 sm:px-9 sm:py-3.5 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
              >
                Lihat Semua UMKM
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="peta"
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: `rgba(154, 230, 180, 0.1)` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Peta Padukuhan
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Jelajahi lokasi dan fasilitas di Padukuhan Pakel secara interaktif
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10687.280652504038!2d110.51977499442644!3d-8.071815238856141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb1d6a0b1c423%3A0x192f685f2cb154ac!2sPakel%2C%20Planjan%2C%20Saptosari%2C%20Gunungkidul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1749831526380!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                className="absolute bottom-3 right-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-inter font-semibold text-xs sm:text-sm text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
              >
                Buka Peta Lengkap
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="galeri" className="py-10 sm:py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Galeri Kegiatan
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dokumentasi momen berharga dari berbagai aktivitas masyarakat
            </p>
          </motion.div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={
                      image.image ||
                      "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    alt={image.name || image.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <h3 className="font-merriweather text-sm sm:text-base md:text-lg font-bold mb-0.5">
                        {image.name || image.title}
                      </h3>
                      <p className="font-inter text-xs sm:text-xs">
                        {image.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
          <motion.div
            className="text-center mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/galeri">
              <motion.button
                className="px-7 py-2.5 sm:px-9 sm:py-3.5 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
              >
                Lihat Semua Galeri
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        id="berita"
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: `rgba(154, 230, 180, 0.1)` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Berita & Pengumuman
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Informasi terkini tentang kegiatan dan perkembangan di padukuhan
            </p>
          </motion.div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
              {newsItems.map((news, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <img
                    src={
                      news.image ||
                      "https://via.placeholder.com/400x300?text=No+Image"
                    }
                    alt={news.title}
                    className="w-full h-36 sm:h-40 md:h-44 object-cover"
                  />
                  <div className="p-3 sm:p-5">
                    <div
                      className="px-1.5 py-0.5 rounded-full text-xs font-inter font-semibold text-white mb-2 sm:mb-3 inline-block"
                      style={{ backgroundColor: colorPalette.primary }}
                    >
                      {news.type || "Berita"}
                    </div>
                    <h3
                      className="text-sm sm:text-base md:text-lg font-merriweather font-bold mb-1.5 sm:mb-2"
                      style={{ color: colorPalette.text }}
                    >
                      {news.title || "Judul tidak tersedia"}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-inter mb-2 sm:mb-3"
                      style={{ color: colorPalette.text }}
                    >
                      {news.content
                        ? stripHtml(news.content).substring(0, 100) + "..."
                        : "Konten tidak tersedia"}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="font-inter text-xs sm:text-xs"
                        style={{ color: colorPalette.text }}
                      >
                        {formatDate(news.date)}
                      </span>
                      <Link to={`/blog/${news.id}`}>
                        <motion.a
                          className="font-inter font-semibold text-xs sm:text-sm"
                          style={{ color: colorPalette.primary }}
                          whileHover={{ color: colorPalette.secondary }}
                        >
                          Baca Selengkapnya
                        </motion.a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          <motion.div
            className="text-center mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/blog">
              <motion.button
                className="px-7 py-2.5 sm:px-9 sm:py-3.5 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
              >
                Lihat Semua Berita
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-5 right-5 p-2.5 sm:p-3.5 rounded-full shadow-lg"
            style={{ backgroundColor: colorPalette.primary }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Homepage;
