import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Star,
  Leaf,
  Mountain,
  Calendar,
  History,
  Globe,
  Compass,
  Home,
  BarChart2,
  Droplet,
  Map,
} from "lucide-react";
import { colorPalette } from "./colors";

const TentangKami = () => {
  return (
    <div style={{ backgroundColor: colorPalette.background }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
          .font-merriweather { font-family: 'Merriweather', serif; }
        `}
      </style>

      {/* Hero Section dengan Parallax Effect */}
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
              alt="Pemandangan Desa Pakel"
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
            Mengenal lebih dekat kehidupan, sejarah, dan potensi desa kami
          </motion.p>
        </div>
      </section>

      {/* Ucapan Terima Kasih Section */}
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
                  mengembangkan pelayanan publik bagi masyarakat desa. Website
                  ini adalah salah satu bentuk inovasi dan pelayanan kami kepada
                  Anda.
                </p>
                <p className="leading-relaxed">
                  Website desa ini didirikan atas dukungan Kementerian
                  Komunikasi dan Informatika Republik Indonesia. Keberadaannya
                  diharapkan dapat mempermudah masyarakat mendapatkan informasi
                  yang bermanfaat.
                </p>
                <p className="leading-relaxed">
                  Dalam memberikan layanan, kami selalu berusaha memberikan yang
                  terbaik. Semoga website desa ini dapat memberi banyak manfaat
                  bagi seluruh masyarakat.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profil Umum dan Sejarah Desa */}
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
              Profil & Sejarah Desa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Mengenal lebih dalam tentang asal usul dan perjalanan Padukuhan
              Pakel hingga saat ini
            </p>
          </motion.div>

          {/* Profil Umum */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
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
              <div className="prose prose-sm sm:prose text-gray-600 font-inter">
                <p>
                  Padukuhan Pakel merupakan salah satu dusun yang berada di Desa
                  Planjan, Kecamatan Saptosari, Kabupaten Gunung Kidul, Daerah
                  Istimewa Yogyakarta. Desa ini terletak sekitar 45 km dari
                  pusat Kota Yogyakarta.
                </p>
                <p>
                  Dengan populasi sekitar 500 jiwa, Padukuhan Pakel merupakan
                  komunitas agraris yang hidup berdampingan dengan alam.
                  Mayoritas penduduk bermata pencaharian sebagai petani dengan
                  komoditas utama jagung manis dan singkong premium.
                </p>
                <p>
                  Selain pertanian, desa ini juga mengembangkan sektor UMKM yang
                  menjadi tulang punggung ekonomi lokal. Produk-produk seperti
                  keripik singkong dan olahan jagung menjadi kebanggaan
                  masyarakat setempat.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop"
                alt="Pemandangan Desa Pakel"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop"
                  alt="Hasil Pertanian"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Sejarah Desa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl font-merriweather font-bold text-center mb-6"
              style={{ color: colorPalette.text }}
            >
              Sejarah Desa
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div
                className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 md:w-1"
                style={{ backgroundColor: `${colorPalette.primary}40` }}
              />

              {/* Timeline Items */}
              {[
                {
                  year: "Abad 18",
                  title: "Awal Mula Desa Planjan",
                  content:
                    "Desa Planjan, tempat Padukuhan Pakel berada, didirikan oleh Mbah Rono atau Kyai Rono, seorang tokoh yang membuka lahan di wilayah ini. Nama Planjan berasal dari kata 'pelan-pelan ojoan', yang berarti perjalanan perlahan menuju tujuan, mencerminkan perjuangan awal penduduk dalam membangun desa.",
                },
                {
                  year: "1920-an",
                  title: "Perkembangan Awal Padukuhan Pakel",
                  content:
                    "Padukuhan Pakel mulai dikenal sebagai bagian dari Desa Planjan. Penduduk mulai menetap dan mengembangkan pertanian tadah hujan, terutama menanam jagung dan singkong, di lahan kapur khas Gunung Kidul.",
                },
                {
                  year: "1940-an",
                  title: "Peran dalam Perjuangan Kemerdekaan",
                  content:
                    "Penduduk Desa Planjan, termasuk Padukuhan Pakel, turut berpartisipasi dalam perjuangan kemerdekaan Indonesia. Beberapa tokoh lokal menjadi bagian dari gerakan melawan penjajahan, mendirikan pos-pos perjuangan di wilayah ini.",
                },
                {
                  year: "1980-an",
                  title: "Pembangunan Infrastruktur",
                  content:
                    "Pembangunan jalan desa dan fasilitas umum mulai dilakukan di Planjan, termasuk di Padukuhan Pakel. Akses yang lebih baik memungkinkan hasil pertanian seperti jagung dan singkong dipasarkan ke wilayah lain.",
                },
                {
                  year: "2000-an",
                  title: "Kebangkitan UMKM",
                  content:
                    "Padukuhan Pakel mulai mengembangkan UMKM berbasis hasil pertanian, seperti keripik singkong dan olahan jagung, yang menjadi ciri khas desa. Inisiatif ini memperkuat ekonomi lokal dan memperkenalkan produk desa ke pasar yang lebih luas.",
                },
                {
                  year: "2020",
                  title: "Era Digitalisasi",
                  content:
                    "Padukuhan Pakel mengadopsi teknologi digital untuk administrasi desa dan promosi UMKM. Peluncuran website desa menjadi langkah penting dalam memperkenalkan potensi Padukuhan Pakel kepada dunia.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full z-10"
                    style={{ backgroundColor: colorPalette.primary }}
                  />

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    } pl-8 md:pl-8`}
                  >
                    <div
                      className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-2"
                      style={{
                        backgroundColor: `${colorPalette.primary}20`,
                        color: colorPalette.primary,
                      }}
                    >
                      <Calendar className="w-4 h-4 inline-block mr-1" />
                      {item.year}
                    </div>
                    <h4
                      className="text-lg font-merriweather font-bold mb-2"
                      style={{ color: colorPalette.text }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-inter text-sm">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geografis Desa Section */}
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
                <Globe
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Geografis Desa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Mengenal kondisi geografis dan batas wilayah Padukuhan Pakel
            </p>
          </motion.div>

          {/* Penjelasan Geografis */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg overflow-hidden mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <h3
                className="text-xl font-merriweather font-bold mb-6"
                style={{ color: colorPalette.text }}
              >
                Kondisi Geografis
              </h3>
              <div className="space-y-6">
                {/* Topografi */}
                <div
                  className="flex items-start border-l-4 pl-4"
                  style={{ borderColor: colorPalette.primary }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colorPalette.primary}20` }}
                  >
                    <Mountain
                      className="w-5 h-5"
                      style={{ color: colorPalette.primary }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-merriweather font-semibold mb-2"
                      style={{ color: colorPalette.text }}
                    >
                      Topografi
                    </h4>
                    <p className="text-gray-600 font-inter text-sm sm:text-base">
                      Padukuhan Pakel terletak di dataran tinggi Gunung Kidul
                      dengan ketinggian sekitar 200-300 meter di atas permukaan
                      laut. Desa ini memiliki topografi berbukit dengan tanah
                      kapur yang khas dari kawasan karst Gunung Kidul.
                    </p>
                  </div>
                </div>

                {/* Iklim */}
                <div
                  className="flex items-start border-l-4 pl-4"
                  style={{ borderColor: colorPalette.secondary }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colorPalette.secondary}20` }}
                  >
                    <Droplet
                      className="w-5 h-5"
                      style={{ color: colorPalette.secondary }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-merriweather font-semibold mb-2"
                      style={{ color: colorPalette.text }}
                    >
                      Iklim
                    </h4>
                    <p className="text-gray-600 font-inter text-sm sm:text-base">
                      Iklim di Padukuhan Pakel termasuk dalam kategori tropis
                      dengan dua musim utama: musim kemarau (April-Oktober) dan
                      musim hujan (November-Maret). Curah hujan rata-rata
                      mencapai 2000-2500 mm per tahun.
                    </p>
                  </div>
                </div>

                {/* Luas Wilayah */}
                <div
                  className="flex items-start border-l-4 pl-4"
                  style={{ borderColor: colorPalette.accent }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${colorPalette.accent}20` }}
                  >
                    <Map
                      className="w-5 h-5"
                      style={{ color: colorPalette.accent }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-merriweather font-semibold mb-2"
                      style={{ color: colorPalette.text }}
                    >
                      Luas Wilayah
                    </h4>
                    <p className="text-gray-600 font-inter text-sm sm:text-base">
                      Luas wilayah Padukuhan Pakel sekitar 150 hektar, dengan
                      pembagian lahan sebagai berikut:
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-gray-600 font-inter text-sm sm:text-base">
                      <li>Lahan pertanian: 100 hektar (67%)</li>
                      <li>Pemukiman: 30 hektar (20%)</li>
                      <li>Fasilitas umum: 10 hektar (7%)</li>
                      <li>Lahan kosong/hutan: 10 hektar (6%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Peta Desa */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg overflow-hidden mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <h3
                className="text-xl font-merriweather font-bold mb-4"
                style={{ color: colorPalette.text }}
              >
                Peta Desa
              </h3>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10687.280652504038!2d110.51977499442644!3d-8.071815238856141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb1d6a0b1c423%3A0x192f685f2cb154ac!2sPakel%2C%20Planjan%2C%20Saptosari%2C%20Gunungkidul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1749831526380!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Batas Wilayah */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8">
              <h3
                className="text-xl font-merriweather font-bold mb-4"
                style={{ color: colorPalette.text }}
              >
                Batas Wilayah
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    direction: "Utara",
                    border: "Desa Ngloro",
                    icon: Compass,
                  },
                  {
                    direction: "Timur",
                    border: "Desa Kanigoro",
                    icon: Compass,
                  },
                  {
                    direction: "Selatan",
                    border: "Desa Monggol",
                    icon: Compass,
                  },
                  {
                    direction: "Barat",
                    border: "Desa Planjan",
                    icon: Compass,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-4 rounded-xl"
                    style={{ backgroundColor: `${colorPalette.accent}10` }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                      style={{ backgroundColor: `${colorPalette.primary}20` }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: colorPalette.primary }}
                      />
                    </div>
                    <div>
                      <h4
                        className="text-lg font-merriweather font-bold"
                        style={{ color: colorPalette.text }}
                      >
                        {item.direction}
                      </h4>
                      <p className="text-gray-600 font-inter">
                        Berbatasan dengan {item.border}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demografi Desa Section */}
      <section className="py-16 sm:py-20">
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
                <Users
                  className="w-6 h-6"
                  style={{ color: colorPalette.primary }}
                />
              </div>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-merriweather font-bold"
              style={{ color: colorPalette.text }}
            >
              Demografi Desa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-inter mt-4">
              Data kependudukan dan statistik sosial Padukuhan Pakel
            </p>
          </motion.div>

          {/* Statistik Penduduk */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Jumlah Penduduk",
                value: "500 Jiwa",
                icon: Users,
                color: colorPalette.primary,
              },
              {
                title: "Jumlah KK",
                value: "125 KK",
                icon: Home,
                color: colorPalette.secondary,
              },
              {
                title: "Kepadatan",
                value: "3,3 Jiwa/Ha",
                icon: BarChart2,
                color: colorPalette.accent,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-500 font-inter text-sm">
                      {item.title}
                    </p>
                    <h4
                      className="text-2xl font-merriweather font-bold"
                      style={{ color: colorPalette.text }}
                    >
                      {item.value}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Grafik Demografi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Komposisi Penduduk
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Berdasarkan Jenis Kelamin",
                      data: [
                        { label: "Laki-laki", value: 240, percentage: 48 },
                        { label: "Perempuan", value: 260, percentage: 52 },
                      ],
                    },
                    {
                      title: "Berdasarkan Usia",
                      data: [
                        { label: "0-14 tahun", value: 100, percentage: 20 },
                        { label: "15-64 tahun", value: 350, percentage: 70 },
                        { label: "65+ tahun", value: 50, percentage: 10 },
                      ],
                    },
                  ].map((category, idx) => (
                    <div key={idx} className="mb-6">
                      <h4
                        className="text-base font-merriweather font-semibold mb-3"
                        style={{ color: colorPalette.text }}
                      >
                        {category.title}
                      </h4>
                      <div className="space-y-3">
                        {category.data.map((item, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-inter text-gray-600">
                                {item.label}
                              </span>
                              <span className="text-sm font-inter font-semibold text-gray-700">
                                {item.value} jiwa ({item.percentage}%)
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  backgroundColor: colorPalette.primary,
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.percentage}%` }}
                                transition={{ duration: 1, delay: 0.2 * index }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl font-merriweather font-bold mb-4"
                  style={{ color: colorPalette.text }}
                >
                  Mata Pencaharian
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Petani", value: 250, percentage: 70 },
                    { label: "Pedagang/UMKM", value: 50, percentage: 14 },
                    { label: "PNS/Guru", value: 15, percentage: 4 },
                    { label: "Buruh", value: 30, percentage: 8 },
                    { label: "Lainnya", value: 15, percentage: 4 },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-inter text-gray-600">
                          {item.label}
                        </span>
                        <span className="text-sm font-inter font-semibold text-gray-700">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor:
                              index === 0
                                ? colorPalette.primary
                                : index === 1
                                ? colorPalette.secondary
                                : `${colorPalette.accent}`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.2 * index }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4
                    className="text-base font-merriweather font-semibold mb-3"
                    style={{ color: colorPalette.text }}
                  >
                    Tingkat Pendidikan
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "SD/Sederajat", value: 150, percentage: 30 },
                      { label: "SMP/Sederajat", value: 175, percentage: 35 },
                      { label: "SMA/Sederajat", value: 125, percentage: 25 },
                      { label: "Perguruan Tinggi", value: 50, percentage: 10 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-inter text-gray-600">
                            {item.label}
                          </span>
                          <span className="text-sm font-inter font-semibold text-gray-700">
                            {item.percentage}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: colorPalette.secondary }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 * index }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Kami mengundang Anda untuk mengunjungi desa kami, menikmati
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
