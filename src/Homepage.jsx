import React, { useState, useEffect } from "react";
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { colorPalette } from "./colors";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

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

  const umkmProducts = [
    {
      id: 1,
      name: "Jagung Manis Segar",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
      description: "Jagung manis berkualitas tinggi hasil panen lokal",
      price: "Rp 15.000/kg",
    },
    {
      id: 2,
      name: "Singkong Premium",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      description: "Singkong segar pilihan dengan kualitas terbaik",
      price: "Rp 8.000/kg",
    },
    {
      id: 3,
      name: "Keripik Singkong",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
      description: "Keripik singkong renyah dengan berbagai rasa",
      price: "Rp 25.000/pack",
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      title: "Panen Raya Jagung",
      description: "Kegiatan panen raya jagung bersama masyarakat",
    },
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
      title: "Gotong Royong",
      description: "Kegiatan gotong royong pembangunan infrastruktur desa",
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      title: "Pelatihan Pertanian",
      description: "Pelatihan teknik pertanian modern untuk petani",
    },
    {
      src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      title: "Festival Panen",
      description: "Festival panen tahunan dengan berbagai lomba",
    },
  ];

  const newsItems = [
    {
      type: "Pengumuman",
      title: "Panen Raya Jagung 2025",
      content:
        "Kegiatan panen raya jagung akan dilaksanakan pada tanggal 15 Juni 2025...",
      date: "10 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    },
    {
      type: "Berita",
      title: "Pembukaan UMKM Baru",
      content:
        "Tiga UMKM baru telah dibuka di desa untuk mendukung perekonomian...",
      date: "8 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
    },
    {
      type: "Kegiatan",
      title: "Pelatihan Pertanian Modern",
      content:
        "Pelatihan teknik pertanian modern untuk meningkatkan hasil panen...",
      date: "5 Juni 2025",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div style={{ backgroundColor: colorPalette.background }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
          .transform-gpu { transform: translate3d(0, 0, 0); }
        `}
      </style>

      {/* Hero Section */}
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
              alt="Fallback Pemandangan Desa Pakel"
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
            Desa yang kaya akan hasil bumi dan budaya, terletak di jantung
            Gunung Kidul, Yogyakarta.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/tentang">
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colorPalette.secondary,
                }}
                transition={{ duration: 0.3 }}
              >
                Jelajahi Desa
              </motion.button>
            </Link>

            <Link to="/umkm">
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-inter font-semibold text-sm sm:text-base border-2"
                style={{
                  borderColor: colorPalette.accent,
                  color: colorPalette.accent,
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
          </motion.div>
        </div>
      </section>

      {/* Tentang Section */}
      <section className="py-10 sm:py-14 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232F855A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm-20 4h4v-2h-4v-4h-2v4h-4v2h4v4h2v-4zm20 20h-4v2h4v4h2v-4h4v-2h-4v-4h-2v4zm-20-4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Tentang Padukuhan Pakel
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mengenal lebih dekat desa yang kaya akan tradisi dan kehidupan
              agraris
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-7 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-sm sm:text-base md:text-lg font-inter leading-relaxed mb-3 sm:mb-5"
                style={{ color: colorPalette.text }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="font-merriweather text-xl sm:text-2xl md:text-3xl">
                  Padukuhan Pakel
                </span>
                , sebuah permata tersembunyi di{" "}
                <span className="font-semibold">
                  Desa Planjan, Saptosari, Gunung Kidul, Yogyakarta
                </span>
                , adalah oase budaya dan kehidupan agraris. Dengan populasi
                sekitar{" "}
                <span className="font-merriweather text-lg sm:text-xl md:text-2xl">
                  500 jiwa
                </span>
                , desa ini hidup dari denyut nadi pertanian, menghasilkan{" "}
                <span className="font-semibold">
                  jagung manis dan singkong premium
                </span>{" "}
                yang menjadi kebanggaan lokal.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base font-inter leading-relaxed mb-3 sm:mb-5"
                style={{ color: colorPalette.text }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Selain pertanian,{" "}
                <span className="font-semibold">UMKM inovatif</span> dan{" "}
                <span className="font-semibold">perdagangan lokal</span> menjadi
                pilar ekonomi, mencerminkan semangat gotong royong dan
                kewirausahaan. Di tengah lanskap Gunung Kidul yang memesona,
                Padukuhan Pakel menawarkan harmoni antara tradisi dan
                modernitas, mengundang setiap pengunjung untuk merasakan
                kehangatan komunitas dan kekayaan alamnya.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/tentang">
                  <motion.button
                    className="px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-inter font-semibold text-sm sm:text-base text-white"
                    style={{ backgroundColor: colorPalette.primary }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: colorPalette.secondary,
                    }}
                  >
                    Tentang Kami
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
                alt="Kehidupan Desa Pakel"
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg"
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-14 sm:h-14 rounded-full"
                style={{ backgroundColor: colorPalette.secondary }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section
        className="py-10 sm:py-14 md:py-20"
        style={{
          background: `linear-gradient(to bottom, ${colorPalette.background}, ${colorPalette.accent}20)`,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Visi & Misi Kami
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Komitmen untuk masa depan desa yang berkelanjutan dan sejahtera
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-5 sm:gap-7">
            <motion.div
              className="flex-1 bg-white rounded-2xl shadow-lg p-5 sm:p-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3 sm:mb-5">
                <Star
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  style={{ color: colorPalette.primary }}
                />
                <h3
                  className="text-lg sm:text-xl font-merriweather font-bold ml-2 sm:ml-3"
                  style={{ color: colorPalette.text }}
                >
                  Visi
                </h3>
              </div>
              <p
                className="text-sm sm:text-base font-inter"
                style={{ color: colorPalette.text }}
              >
                Menjadikan Padukuhan Pakel sebagai desa mandiri, sejahtera, dan
                berkelanjutan melalui potensi pertanian dan kearifan lokal.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 bg-white rounded-2xl shadow-lg p-5 sm:p-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3 sm:mb-5">
                <Leaf
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  style={{ color: colorPalette.primary }}
                />
                <h3
                  className="text-lg sm:text-xl font-merriweather font-bold ml-2 sm:ml-3"
                  style={{ color: colorPalette.text }}
                >
                  Misi
                </h3>
              </div>
              <ul
                className="text-sm sm:text-base font-inter space-y-1.5"
                style={{ color: colorPalette.text }}
              >
                <li className="flex items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 mr-1.5 sm:mr-2.5"
                    style={{ backgroundColor: colorPalette.secondary }}
                  />
                  Mengembangkan pertanian berkelanjutan
                </li>
                <li className="flex items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 mr-1.5 sm:mr-2.5"
                    style={{ backgroundColor: colorPalette.secondary }}
                  />
                  Memberdayakan UMKM lokal
                </li>
                <li className="flex items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 mr-1.5 sm:mr-2.5"
                    style={{ backgroundColor: colorPalette.secondary }}
                  />
                  Meningkatkan kesejahteraan masyarakat
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: colorPalette.accent }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-7">
            {[
              { label: "Jumlah Penduduk", value: 500, icon: Users },
              { label: "Jumlah UMKM", value: 25, icon: Briefcase },
              { label: "Luas Lahan", value: "150 Ha", icon: Leaf },
              { label: "Jumlah RW", value: 3, icon: Home },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    whileInView={{ opacity: 1 }}
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

      {/* UMKM Section */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              UMKM Unggulan
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Produk lokal berkualitas dari tangan-tangan kreatif masyarakat
              desa
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
            {umkmProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                  <motion.div
                    className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-xs font-inter font-semibold text-white"
                    style={{ backgroundColor: colorPalette.secondary }}
                    whileHover={{ scale: 1.1 }}
                  >
                    Fresh
                  </motion.div>
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
                      {product.price}
                    </span>
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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

      {/* Peta Desa */}
      <section
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: `${colorPalette.accent}10` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Peta Desa
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Jelajahi lokasi dan fasilitas di Padukuhan Pakel secara interaktif
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
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

      {/* Galeri Section */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Galeri Kegiatan
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dokumentasi momen berharga dari berbagai aktivitas masyarakat
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
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
                      {image.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-xs">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="text-center mt-6 sm:mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
      </section>

      {/* Berita & Pengumuman */}
      <section
        className="py-10 sm:py-14 md:py-20"
        style={{ backgroundColor: `${colorPalette.accent}10` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="text-center mb-6 sm:mb-12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Berita & Pengumuman
            </h2>
            <p
              className="text-sm sm:text-base text-gray-600 mt-1.5 max-w-md mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Informasi terkini tentang kegiatan dan perkembangan di desa
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-36 sm:h-40 md:h-44 object-cover"
                />
                <div className="p-3 sm:p-5">
                  <div
                    className="px-1.5 py-0.5 rounded-full text-xs font-inter font-semibold text-white mb-2 sm:mb-3 inline-block"
                    style={{ backgroundColor: colorPalette.primary }}
                  >
                    {news.type}
                  </div>
                  <h3
                    className="text-sm sm:text-base md:text-lg font-merriweather font-bold mb-1.5 sm:mb-2"
                    style={{ color: colorPalette.text }}
                  >
                    {news.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-inter mb-2 sm:mb-3"
                    style={{ color: colorPalette.text }}
                  >
                    {news.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-inter text-xs sm:text-xs"
                      style={{ color: colorPalette.text }}
                    >
                      {news.date}
                    </span>
                    <motion.a
                      href="#"
                      className="font-inter font-semibold text-xs sm:text-sm"
                      style={{ color: colorPalette.primary }}
                      whileHover={{ color: colorPalette.secondary }}
                    >
                      Baca Selengkapnya
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-6 sm:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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

      {/* Scroll to Top Button */}
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
