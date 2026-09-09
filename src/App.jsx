import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact";
import Hero from  "./components/Hero";
import Specialties from "./components/Specialties";
import GalleryPreview from "./components/GalleryPreview";
import AboutPreview from "./components/AboutPreview";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import Weddings from "./pages/Weddings/Weddings";
import Blog from "./components/Blog";

function App() {
  return (
    <>
    <Navbar />
      <ScrollToTop />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/specialties" element={<Specialties />} />
      <Route path="/gallery-preview" element={<GalleryPreview />} />
      <Route path="/about-preview" element={<AboutPreview />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/booking-cta" element={<BookingCTA />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/weddings" element={<Weddings />} />
    </Routes>
    <FloatingContact />
    </>
  );
}

export default App;