// App.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import TentangKami from "./TentangKami";
import Umkm from "./Umkm";
import Galeri from "./Galeri";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import UmkmDetail from "./UmkmDetail";

const AppContent = () => {
  const location = useLocation();

  // Reset scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-inter flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location}>
          <Route path="/" element={<Homepage />} />
          <Route path="/tentang" element={<TentangKami />} />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/umkm/:id" element={<UmkmDetail />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
