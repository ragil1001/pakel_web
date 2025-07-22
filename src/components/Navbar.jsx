import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isProfilDesaOpen, setIsProfilDesaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "/", id: "beranda" },
    { name: "Profil Dukuh", href: "/tentang", id: "tentang" },
    { name: "UMKM", href: "/umkm", id: "umkm" },
    { name: "Galeri", href: "/galeri", id: "galeri" },
    { name: "Blog", href: "/blog", id: "blog" },
  ];

  const colorPalette = {
    primary: "#2F855A",
    secondary: "#68D391",
    accent: "#9AE6B4",
    background: "#F0FFF4",
    text: "#1A4731",
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 100
          ? "bg-white/90 backdrop-blur-lg shadow-2xl"
          : "bg-gradient-to-b from-gray-900/20 to-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: colorPalette.primary }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo.png"
                  alt="Padukuhan Pakel Logo"
                  className="w-full h-full object-contain"
                />
                {/* <Mountain className="w-6 h-6 sm:w-7 sm:h-7 text-white" /> */}
              </motion.div>
              <div>
                <motion.h1
                  className="text-l sm:text-xl md:text-2xl font-merriweather font-bold"
                  style={{
                    color: scrollY > 100 ? colorPalette.text : "white",
                  }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Padukuhan Pakel
                </motion.h1>
                <p
                  className="text-xs sm:text-sm font-inter"
                  style={{
                    color: scrollY > 100 ? colorPalette.text : "white",
                  }}
                >
                  Desa Planjan, Saptosari
                </p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) =>
              item.subItems ? (
                <motion.div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsProfilDesaOpen(true)}
                  onMouseLeave={() => setIsProfilDesaOpen(false)}
                >
                  <div
                    className="text-base font-inter font-medium cursor-pointer flex items-center"
                    style={{
                      color: scrollY > 100 ? colorPalette.text : "white",
                    }}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                  <AnimatePresence>{isProfilDesaOpen}</AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.href}
                    className="text-base font-inter font-medium"
                    style={{
                      color: scrollY > 100 ? colorPalette.text : "white",
                    }}
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{ backgroundColor: colorPalette.secondary }}
                    initial={{
                      width: location.pathname === item.href ? "100%" : 0,
                    }}
                    animate={{
                      width: location.pathname === item.href ? "100%" : 0,
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )
            )}
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-2xl hover:bg-gray-100/50 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X
                className="w-6 h-6"
                style={{ color: scrollY > 100 ? colorPalette.text : "white" }}
              />
            ) : (
              <Menu
                className="w-6 h-6"
                style={{ color: scrollY > 100 ? colorPalette.text : "white" }}
              />
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-lg shadow-lg"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) =>
                item.subItems ? (
                  <div key={item.name}>
                    <div
                      className="px-4 py-2 text-base font-inter font-medium flex items-center"
                      style={{ color: colorPalette.text }}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-8 py-2 text-sm font-inter"
                        style={{ color: colorPalette.text }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    key={item.name}
                    whileHover={{ backgroundColor: colorPalette.accent, x: 10 }}
                  >
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-base font-inter font-medium rounded-xl"
                      style={{ color: colorPalette.text }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
