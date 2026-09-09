 
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import GalleryPreview from "../components/GalleryPreview";
import AboutPreview from "../components/AboutPreview";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <> 

      <main id="home">
        <Hero />

        <GalleryPreview />

        <Specialties />

        <AboutPreview />

        <Testimonials />

        <BookingCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;