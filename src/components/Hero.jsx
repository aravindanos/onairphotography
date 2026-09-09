import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";


import gallery01 from "../assets/1.jpg";
import gallery02 from "../assets/2.jpg";
import gallery03 from "../assets/3.jpg";
import gallery04 from "../assets/4.jpg";
import gallery05 from "../assets/14.jpg";
import gallery06 from "../assets/6.jpg";
import gallery07 from "../assets/7.jpg"; 

const heroImages = [
  {
     image: gallery01,
    category: "WEDDING",
    title: "Forever Begins",
    subtitle: "LOVE STORIES",
  },
  {
     image: gallery02,
    category: "CANDID",
    title: "Real Emotions",
    subtitle: "AUTHENTIC MOMENTS",
  },
  {
     image: gallery03,
    category: "COUPLES",
    title: "Made For Two",
    subtitle: "TIMELESS PORTRAITS",
  },
  {
     image: gallery04,
    category: "CELEBRATION",
    title: "Beautiful Moments",
    subtitle: "EVERY DETAIL MATTERS",
  },
  {
     image: gallery05,
    category: "STORIES",
    title: "The Beginning",
    subtitle: "YOUR STORY",
  },
    {
     image: gallery06,
    category: "CELEBRATION",
    title: "The Beginning",
    subtitle: "YOUR STORY",
  },
    {
     image: gallery07,
    category: "CANDID",
    title: "Beautiful Moments",
    subtitle: "YOUR STORY",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeImage = heroImages[activeIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) =>
        current === heroImages.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === heroImages.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  };

  return (
    <section className="hero" id="home">

      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

      

          <h1>
            We capture
            <br />
            <span>the feeling</span>
            <br />
            behind every frame.
          </h1>

          <p>
            Wedding stories, candid emotions and cinematic
            moments — beautifully captured, naturally yours.
          </p>

          <div className="hero-actions">

            <a href="#work" className="btn btn-primary">
              Explore Our Work
              <span>↗</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              Book a Session
            </a>

          </div>

          <div className="hero-meta">

            <div>
              <strong>08+</strong>
              <span>
                Years of
                <br />
                Experience
              </span>
            </div>

            <div>
              <strong>500+</strong>
              <span>
                Stories
                <br />
                Captured
              </span>
            </div>

            <div>
              <strong>100%</strong>
              <span>
                Heart &
                <br />
                Soul
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT 3D SLIDESHOW */}
        <div
          className="hero-visual"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div className="hero-photo-shadow"></div>

          <div className="hero-image-main">

            {heroImages.map((item, index) => (
              <img
                key={item.image}
                src={item.image}
                alt={`ONAIR Photography - ${item.category}`}
                className={`hero-slide-image ${
                  index === activeIndex ? "active" : ""
                }`}
              />
            ))}

            <div className="hero-image-overlay"></div>

            <div className="hero-image-content">

              <span>{activeImage.category}</span>

              <h3>{activeImage.title}</h3>

              <small>{activeImage.subtitle}</small>

            </div>

          </div>

          {/* TOP BADGE */}
          <div className="circle-badge">

            <span>EST.</span>

            <strong>ONAIR</strong>

            <span>PHOTOGRAPHY</span>

          </div>

          {/* LEFT GLASS CARD */}
          <div className="floating-card floating-card-one">

            <span>
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <strong>{activeImage.category}</strong>

            <small>{activeImage.subtitle}</small>

          </div>

          {/* RIGHT GLASS CARD */}
          <div className="floating-card floating-card-two">

            <span>ONAIR</span>

            <strong>
              STORY
            </strong>

            <small>
              FRAME BY FRAME
            </small>

          </div>

          {/* CONTROLS */}
          <div className="hero-slider-controls">

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="hero-slider-count">

              <strong>
                {String(activeIndex + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(heroImages.length).padStart(2, "0")}
              </span>

            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={17} />
            </button>

          </div>

          {/* PROGRESS */}
          <div className="hero-slider-progress">

            {heroImages.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveIndex(index)}
                className={
                  index === activeIndex ? "active" : ""
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

      <div className="hero-scroll">

        <span>SCROLL TO EXPLORE</span>

        <div></div>

      </div>

    </section>
  );
}

export default Hero;