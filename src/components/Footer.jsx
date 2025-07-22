import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Mountain,
} from "lucide-react";
import { colorPalette } from "../colors";

const Footer = () => {
  return (
    <footer
      className="py-10 sm:py-14"
      style={{ backgroundColor: colorPalette.primary }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-7 md:gap-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-5">
              <motion.div
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: colorPalette.secondary }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo.png"
                  alt="Padukuhan Pakel Logo"
                  className="w-full h-full object-contain"
                />
                {/* <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-white" /> */}
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-merriweather font-bold text-white">
                  Padukuhan Pakel
                </h3>
                <p className="font-inter text-gray-200 text-xs sm:text-sm">
                  Desa Planjan, Saptosari
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-200 mb-3 sm:mb-5 leading-relaxed text-xs sm:text-sm">
              Desa yang kaya akan hasil bumi dan budaya, berkomitmen untuk
              kemajuan dan kesejahteraan masyarakat melalui inovasi dan gotong
              royong.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-1.5 sm:p-2.5 rounded-full relative"
                  style={{ backgroundColor: colorPalette.secondary }}
                  whileHover={{
                    y: -4,
                    backgroundColor: colorPalette.accent,
                    boxShadow: `0 4px 8px ${colorPalette.accent}80`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white relative z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-merriweather font-bold mb-3 sm:mb-5 text-white">
              Menu Utama
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang", href: "/tentang" },
                { name: "UMKM", href: "/umkm" },
                { name: "Peta", href: "/peta" },
                { name: "Galeri", href: "/galeri" },
                { name: "Berita", href: "/berita" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-inter text-gray-200 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-merriweather font-bold mb-3 sm:mb-5 text-white">
              Kontak Kami
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <MapPin
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: colorPalette.accent }}
                />
                <span className="font-inter text-gray-200 text-xs sm:text-sm">
                  Desa Planjan, Saptosari, Gunung Kidul
                </span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: colorPalette.accent }}
                />
                <span className="font-inter text-gray-200 text-xs sm:text-sm">
                  +62 274 123 4567
                </span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Mail
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: colorPalette.accent }}
                />
                <span className="font-inter text-gray-200 text-xs sm:text-sm">
                  info@pakel.desa.id
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mt-6 sm:mt-12 pt-5 sm:pt-7 border-t border-gray-600 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-inter text-gray-200 text-xs sm:text-sm">
          © 2025 Padukuhan Pakel. Seluruh Hak Cipta Dilindungi.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
