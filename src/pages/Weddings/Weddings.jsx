import "./Weddings.css";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
 
import wedding01 from "../../assets/wedding/wedding-1.jpg";
import wedding02 from "../../assets/wedding/wedding-2.jpg";
import wedding03 from "../../assets/wedding/wedding-3.jpg";
import wedding04 from "../../assets/wedding/wedding-4.jpg";
import wedding05 from "../../assets/wedding/wedding-5.jpg";
import wedding06 from "../../assets/wedding/wedding-6.jpg";
import wedding07 from "../../assets/wedding/wedding-7.jpg";
import wedding08 from "../../assets/wedding/wedding-8.jpg";
import wedding09 from "../../assets/wedding/wedding-9.jpg";
import wedding10 from "../../assets/wedding/wedding-10.jpg";
import wedding11 from "../../assets/wedding/wedding-11.jpg";
import wedding12 from "../../assets/wedding/wedding-12.jpg"; 
const weddingImages = [
  wedding01,
  wedding02,
  wedding03,
  wedding04,
  wedding05,
  wedding06,
  wedding07,
  wedding08,
  wedding09,
  wedding10,
  wedding11,
  wedding12, 
];

const weddingTypes = [
  {
    number: "01",
    title: "Hindu Weddings",
    description:
      "Sacred rituals, vibrant traditions and emotional moments documented with a cinematic approach.",
    path: "/weddings/hindu-weddings",
  },
  {
    number: "02",
    title: "Tamil Weddings",
    description:
      "Authentic Tamil wedding photography filled with culture, family and timeless emotions.",
    path: "/weddings/tamil-weddings",
  },
  {
    number: "03",
    title: "Brahmin Weddings",
    description:
      "Every ritual, expression and traditional detail captured with elegance.",
    path: "/weddings/brahmin-weddings",
  },
  {
    number: "04",
    title: "Telugu Weddings",
    description:
      "Colourful celebrations, traditional ceremonies and unforgettable family moments.",
    path: "/weddings/telugu-weddings",
  },
  {
    number: "05",
    title: "Malayali Weddings",
    description:
      "Elegant Kerala wedding stories with a natural and timeless visual style.",
    path: "/weddings/malayali-weddings",
  },
  {
    number: "06",
    title: "Christian Weddings",
    description:
      "From the ceremony to the celebration, every emotional chapter beautifully preserved.",
    path: "/weddings/christian-weddings",
  },
  {
    number: "07",
    title: "Muslim Weddings",
    description:
      "Graceful portraits, traditions and celebrations captured naturally.",
    path: "/weddings/muslim-weddings",
  },
  {
    number: "08",
    title: "North Indian Weddings",
    description:
      "Big celebrations, vibrant colours and expressive moments told through photographs.",
    path: "/weddings/north-indian-weddings",
  },
  {
    number: "09",
    title: "Destination Weddings",
    description:
      "Your love story photographed wherever your celebration takes you.",
    path: "/weddings/destination-weddings",
  },
  {
    number: "10",
    title: "Engagement",
    description:
      "Intimate celebrations and beautiful beginnings captured with emotion.",
    path: "/weddings/engagement",
  },
  {
    number: "11",
    title: "Mehendi",
    description:
      "Colour, laughter, details and candid moments from your Mehendi celebration.",
    path: "/weddings/mehendi",
  },
  {
    number: "12",
    title: "Haldi",
    description:
      "Joyful, colourful and spontaneous Haldi moments captured naturally.",
    path: "/weddings/haldi",
  },
  {
    number: "13",
    title: "Sangeet",
    description:
      "Dance, music and unforgettable celebrations turned into cinematic memories.",
    path: "/weddings/sangeet",
  }, 
];

const galleryItems = [
  {
    image: wedding01,
    title: "The Beginning",
    className: "gallery-large",
  },
  {
    image: wedding02,
    title: "Sacred Moments",
    className: "gallery-small",
  },
  {
    image: wedding03,
    title: "Pure Emotion",
    className: "gallery-tall",
  },
  {
    image: wedding04,
    title: "Together",
    className: "gallery-medium",
  },
  {
    image: wedding05,
    title: "The Details",
    className: "gallery-medium",
  },
  {
    image: wedding06,
    title: "Forever",
    className: "gallery-wide",
  },
  {
    image: wedding07,
    title: "Family",
    className: "gallery-small",
  },
  {
    image: wedding08,
    title: "Celebration",
    className: "gallery-tall",
  },
  {
    image: wedding09,
    title: "A New Chapter",
    className: "gallery-medium",
  },
  {
    image: wedding10,
    title: "The Smile",
    className: "gallery-medium",
  },
  {
    image: wedding11,
    title: "Together Forever",
    className: "gallery-wide",
  },
  {
    image: wedding12,
    title: "Little Moments",
    className: "gallery-small",
  }, 
]; 


function Weddings() {
    
  return (
    <main className="weddings-page"> 
      {/* HERO */}
      <section className="wedding-hero">

        <div className="wedding-hero-image">
          <img src={wedding01} alt="ONAIR wedding photography" />
        </div>

        <div className="wedding-hero-overlay" />

        <div className="wedding-hero-content">

          <span className="hero-eyebrow">
            ONAIR PHOTOGRAPHY · WEDDINGS
          </span>

          <h1>
            Every tradition.
            <br />
            Every emotion.
            <br />
            <em>Forever.</em>
          </h1>

          <p>
            Cinematic wedding photography crafted around
            your people, your traditions and the moments
            that matter most.
          </p>

          <a href="#wedding-stories" className="hero-button">
            Explore Stories
            <FiArrowDownRight />
          </a>

        </div>

        <div className="hero-side-text">
          WEDDING STORIES
        </div>

      </section>


      {/* INTRO */}
      <section className="wedding-intro section-padding">

        <div className="intro-number">
          01
        </div>

        <div className="intro-heading">
          <span>OUR APPROACH</span>

          <h2>
            Your wedding is not
            <br />
            just an event.
          </h2>
        </div>

        <div className="intro-content">

          <p className="intro-big">
            It is a collection of tiny moments
            that become the biggest memories
            of your life.
          </p>

          <p>
            At ONAIR Photography, we blend candid
            storytelling, editorial portraits and
            cinematic composition to create wedding
            photographs that feel as beautiful years
            later as they did on the day itself.
          </p>

          <a href="/about" className="text-link">
            Discover our approach
            <FiArrowUpRight />
          </a>

        </div>

      </section>


      {/* FEATURED IMAGES */}
      <section className="featured-weddings section-padding">

        <div className="section-heading">

          <div>
            <span>02 · FEATURED STORIES</span>

            <h2>
              Moments that
              <br />
              <em>stay with you.</em>
            </h2>
          </div>

          <p>
            From quiet glances to unforgettable celebrations,
            we preserve the complete story of your wedding.
          </p>

        </div>

        <div className="featured-grid">

          <div className="featured-main">
            <img
              src={wedding02}
              alt="Bride and groom wedding portrait"
            />

            <div className="image-caption">
              <span>01</span>
              <strong>The Beginning</strong>
            </div>
          </div>

          <div className="featured-side">

            <div className="featured-card">
              <img
                src={wedding03}
                alt="Wedding ceremony photography"
              />
              <span>02 · THE CEREMONY</span>
            </div>

            <div className="featured-card featured-offset">
              <img
                src={wedding04}
                alt="Candid wedding moment"
              />
              <span>03 · THE EMOTION</span>
            </div>

          </div>

        </div>

      </section>


      {/* WEDDING TYPES */}
      <section
        className="wedding-types section-padding"
        id="wedding-stories"
      >

        <div className="types-header">

          <div>
            <span>03 · WEDDING STORIES</span>

            <h2>
              Your tradition.
              <br />
              <em>Your story.</em>
            </h2>
          </div>

          <p>
            Explore our wedding photography stories,
            from intimate ceremonies to grand celebrations.
          </p>

        </div>

        <div className="wedding-types-list">

          {weddingTypes.map((item) => (
            <a
              href={item.path}
              className="wedding-type-row"
              key={item.number}
            >

              <span className="type-number">
                {item.number}
              </span>

              <div className="type-title">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="type-arrow">
                <FiArrowUpRight />
              </span>

            </a>
          ))}

        </div>

      </section>


      {/* EDITORIAL GALLERY */}
      <section className="wedding-gallery section-padding">

        <div className="gallery-header">

          <span>04 · THE GALLERY</span>

          <h2>
            Love,
            <br />
            <em>frame by frame.</em>
          </h2>

        </div>

        <div className="editorial-gallery">

          {galleryItems.map((item, index) => (
            <div
              className={`gallery-item ${item.className}`}
              key={index}
            >

              <img
                src={item.image}
                alt={`${item.title} - ONAIR Photography`}
              />

              <div className="gallery-label">
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* MOMENTS BETWEEN */}
      <section className="moments-section">

        <div className="moment-image">
          <img
            src={wedding09}
            alt="Candid wedding photography"
          />
        </div>

        <div className="moment-content">

          <span>05 · THE MOMENTS BETWEEN</span>

          <h2>
            The photographs
            <br />
            you never
            <br />
            <em>planned.</em>
          </h2>

          <p>
            The nervous smile before the ceremony.
            A parent's proud expression. Friends laughing
            between rituals. A quiet moment when everything
            finally feels real.
          </p>

          <p>
            These unscripted moments are where your
            real story lives.
          </p>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className="experience-section section-padding">

        <div className="experience-title">

          <span>06 · THE ONAIR EXPERIENCE</span>

          <h2>
            More than
            <br />
            <em>photographs.</em>
          </h2>

        </div>

        <div className="experience-grid">

          <div className="experience-item">
            <span>01</span>
            <h3>Before the day</h3>
            <p>
              Understanding your story, your people,
              your traditions and the way you want
              your wedding remembered.
            </p>
          </div>

          <div className="experience-item">
            <span>02</span>
            <h3>During the celebration</h3>
            <p>
              We stay observant, calm and present,
              capturing genuine moments without
              constantly interrupting them.
            </p>
          </div>

          <div className="experience-item">
            <span>03</span>
            <h3>After the wedding</h3>
            <p>
              Your photographs are carefully curated
              and edited into a visual story designed
              to last for generations.
            </p>
          </div>

        </div>

      </section>


      {/* LOCATION */}
      <section className="locations-section">

        <div className="location-circle">
          <span>ONAIR</span>
        </div>

        <div className="location-content">

          <span>07 · WHERE WE PHOTOGRAPH</span>

          <h2>
            From your hometown
            <br />
            to your dream
            <br />
            <em>destination.</em>
          </h2>

          <p>
            Based in Tamil Nadu and available across
            South India and destination wedding locations.
          </p>

          <div className="location-list">
            <span>Madurai</span>
            <span>Chennai</span>
            <span>Coimbatore</span>
            <span>Tamil Nadu</span>
            <span>South India</span>
            <span>Destination Weddings</span>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="wedding-cta">

        <div className="cta-orbit" />

        <span>08 · LET'S CREATE SOMETHING TIMELESS</span>

        <h2>
          Your story
          <br />
          deserves to be
          <br />
          <em>remembered.</em>
        </h2>

        <a href="/contact" className="cta-button">
          Let's Talk
          <FiArrowUpRight />
        </a>

      </section>

    </main>
  );
}

export default Weddings;