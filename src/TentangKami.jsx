import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  Leaf,
  Mountain,
  Calendar,
  History,
  Globe,
  Compass,
  Film,
  Play,
  Pause,
  Maximize,
} from "lucide-react";
import { colorPalette } from "./colors";

const TentangKami = () => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const seekTime = (offsetX / rect.width) * duration;
      videoRef.current.currentTime = Math.max(0, Math.min(seekTime, duration));
      setCurrentTime(seekTime);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const formatTime = (time) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ backgroundColor: colorPalette.background }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
          .profile-image {
            width: 100%;
            height: auto;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .thumbnail-image {
            width: 100%;
            height: auto;
            aspect-ratio: 4 / 3;
            object-fit: cover;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

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
              alt="Pemandangan Padukuhan Pakel"
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
            Tentang Padukuhan Pakel
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-inter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mengenal lebih dekat kehidupan dan potensi padukuhan kami
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${colorPalette.primary}20` }}
                >
                  <Star
                    className="w-6 h-6"
                    style={{ color: colorPalette.primary }}
                  />
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-merriweather font-bold"
                  style={{ color: colorPalette.text }}
                >
                  Ucapan Terima Kasih
                </h2>
              </div>
              <motion.div
                className="space-y-4 text-gray-600 font-inter text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="leading-relaxed">
                  Terima kasih telah mengunjungi website resmi Padukuhan Pakel.
                  Website ini merupakan media pelayanan publik resmi yang kami
                  kembangkan untuk menjangkau masyarakat lebih luas melalui
                  internet.
                </p>
                <p className="leading-relaxed">
                  Seiring dengan perkembangan teknologi, kami berinovasi dalam
                  mengembangkan pelayanan publik bagi masyarakat padukuhan.
                  Website ini adalah salah satu bentuk inovasi dan pelayanan
                  kami kepada Anda.
                </p>
                <p className="leading-relaxed">
                  Dalam memberikan layanan, kami selalu berusaha memberikan yang
                  terbaik. Semoga website padukuhan ini dapat memberi banyak
                  manfaat bagi seluruh masyarakat.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: `${colorPalette.accent}15` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colorPalette.primary}20` }}
              >
                <History
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Profil Padukuhan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Mengenal lebih dalam tentang Padukuhan Pakel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl sm:text-2xl font-merriweather font-bold mb-4"
                style={{ color: colorPalette.text }}
              >
                Profil Umum
              </h3>
              <div className="text-gray-600 font-inter text-sm sm:text-base space-y-6">
                <p className="leading-relaxed">
                  <span
                    style={{ fontWeight: "bold", color: colorPalette.primary }}
                  >
                    Padukuhan Pakel
                  </span>{" "}
                  merupakan salah satu dusun di Desa Planjan, Kecamatan
                  Saptosari, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta,
                  yang dikenal sebagai wilayah pedesaan dengan potensi alam
                  karst khas Gunung Kidul. Dengan estimasi populasi sekitar{" "}
                  <span
                    style={{ fontWeight: "bold", color: colorPalette.primary }}
                  >
                    621 jiwa
                  </span>
                  , padukuhan ini bergantung pada sektor pertanian tadah hujan,
                  menghasilkan komoditas utama seperti{" "}
                  <span
                    style={{ fontWeight: "bold", color: colorPalette.primary }}
                  >
                    jagung dan singkong
                  </span>{" "}
                  yang menjadi andalan masyarakat setempat.
                </p>
                <p className="leading-relaxed">
                  Di samping pertanian, aktivitas{" "}
                  <span
                    style={{ fontWeight: "bold", color: colorPalette.primary }}
                  >
                    UMKM lokal
                  </span>{" "}
                  turut mendukung perekonomian, termasuk pengolahan hasil bumi
                  dan perdagangan kecil-kecilan, yang mencerminkan nilai gotong
                  royong serta adaptasi terhadap kondisi tanah kapur. Terletak
                  di tengah lanskap bukit dan gua yang memesona, Padukuhan Pakel
                  menjaga harmoni antara{" "}
                  <span
                    style={{ fontWeight: "bold", color: colorPalette.primary }}
                  >
                    tradisi Jawa
                  </span>
                  , kehidupan komunal, dan upaya pembangunan berkelanjutan,
                  mengajak pengunjung untuk menikmati keaslian budaya serta
                  keramahan warganya.
                </p>
                <p className="leading-relaxed">
                  Masyarakat Padukuhan Pakel juga aktif dalam menjaga
                  kelestarian lingkungan karst melalui program penanaman pohon
                  dan pengelolaan air tanah yang berkelanjutan, mengingat
                  wilayah ini rentan terhadap kekeringan. Selain itu, kegiatan
                  pendidikan non-formal seperti kelompok belajar anak-anak dan
                  pelatihan keterampilan pertanian organik menjadi bagian
                  penting dari kehidupan sehari-hari, membantu generasi muda
                  mempersiapkan diri menghadapi perubahan iklim. Potensi wisata
                  alam di Pakel, seperti jalur trekking bukit kapur dan
                  eksplorasi gua kecil di sekitar padukuhan, semakin
                  dikembangkan secara mandiri oleh warga untuk mendukung ekonomi
                  berbasis ekowisata, sambil mempertahankan nilai-nilai adat
                  seperti ruwatan dan wayang kulit yang rutin digelar pada
                  acara-acara khusus.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src="/profil/profil1.jpg"
                  alt="Pemandangan Padukuhan Pakel"
                  className="profile-image transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-md group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/profil/profil2.png"
                    alt="Hasil Pertanian"
                    className="thumbnail-image transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-md group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/profil/profil3.png"
                    alt="Kehidupan Desa"
                    className="thumbnail-image transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: `${colorPalette.accent}15` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${colorPalette.primary}20` }}
              >
                <Film
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Cerita dari Pakel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Rasakan kehangatan kehidupan desa, kekayaan tradisi, dan semangat
              masyarakat Padukuhan Pakel dalam cerita yang hidup dan penuh
              makna.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden group max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
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
              {!isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Play
                    className="w-16 h-16 text-white"
                    style={{ color: colorPalette.primary }}
                  />
                </button>
              )}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 rounded-full hover:bg-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                  <div className="flex items-center flex-1 mx-4">
                    <span className="text-sm font-inter">
                      {formatTime(currentTime)}
                    </span>
                    <div
                      ref={progressBarRef}
                      className="flex-1 mx-2 h-2 bg-gray-300 rounded-full cursor-pointer"
                      onClick={handleSeek}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(currentTime / duration) * 100}%`,
                          backgroundColor: colorPalette.primary,
                        }}
                      />
                    </div>
                    <span className="text-sm font-inter">
                      {formatTime(duration)}
                    </span>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full hover:bg-white/20"
                  >
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: `${colorPalette.primary}10` }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold mb-4"
              style={{ color: colorPalette.text }}
            >
              Kunjungi Padukuhan Pakel
            </h2>
            <p className="text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
              Kami mengundang Anda untuk mengunjungi padukuhan kami, menikmati
              keindahan alam, dan merasakan kehangatan masyarakat Padukuhan
              Pakel.
            </p>
            <motion.button
              className="px-8 py-3 rounded-full font-inter font-semibold text-white shadow-lg"
              style={{ backgroundColor: colorPalette.primary }}
              whileHover={{
                scale: 1.05,
                backgroundColor: colorPalette.secondary,
              }}
              transition={{ duration: 0.3 }}
            >
              Hubungi Kami
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
