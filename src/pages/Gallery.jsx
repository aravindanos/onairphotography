import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Gallery.css";

import gallery01 from "../assets/1.jpg";
import gallery02 from "../assets/2.jpg";
import gallery03 from "../assets/3.jpg";
import gallery04 from "../assets/4.jpg";
import gallery05 from "../assets/5.jpg";
import gallery06 from "../assets/6.jpg";
import gallery07 from "../assets/7.jpg";
import gallery08 from "../assets/8.jpg";
import gallery09 from "../assets/9.jpg";
import gallery10 from "../assets/10.jpg";
import gallery11 from "../assets/11.jpg";
import gallery12 from "../assets/12.jpg";
import gallery13 from "../assets/13.jpg";
import gallery14 from "../assets/14.jpg";

const galleryItems = [
  {
    id: "01",
    image: gallery01,
    category: "Wedding",
    title: "The Beginning",
  },
  {
    id: "02",
    image: gallery02,
    category: "Candid",
    title: "Pure Emotion",
  },
  {
    id: "03",
    image: gallery03,
    category: "Wedding",
    title: "Forever Starts Here",
  },
  {
    id: "04",
    image: gallery04,
    category: "Portrait",
    title: "Beautifully You",
  },
  {
    id: "05",
    image: gallery05,
    category: "Wedding",
    title: "A Moment To Remember",
  },
  {
    id: "06",
    image: gallery06,
    category: "Candid",
    title: "Unscripted",
  },
  {
    id: "07",
    image: gallery07,
    category: "Pre Wedding",
    title: "Two Hearts",
  },
  {
    id: "08",
    image: gallery08,
    category: "Wedding",
    title: "Sacred Moments",
  },
  {
    id: "09",
    image: gallery09,
    category: "Candid",
    title: "Between The Moments",
  },
  {
    id: "10",
    image: gallery10,
    category: "Portrait",
    title: "In Your Light",
  },
  {
    id: "11",
    image: gallery11,
    category: "Wedding",
    title: "Together",
  },
  {
    id: "12",
    image: gallery12,
    category: "Celebration",
    title: "The Celebration",
  },
  {
    id: "13",
    image: gallery13,
    category: "Pre Wedding",
    title: "Just Us",
  },
  {
    id: "14",
    image: gallery14,
    category: "Wedding",
    title: "Forever & Always",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="gallery-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="gallery-hero">

        <div className="gallery-container">

          <div className="gallery-top-line">
            <span>ONAIR PHOTOGRAPHY</span>
            <span>EST. 2020</span>
            <span>MADURAI · INDIA</span>
          </div>

          <div className="gallery-hero-content">

            <span className="gallery-label">
              OUR PORTFOLIO
            </span>

            <h1>
              Stories
              <br />
              <em>Captured.</em>
            </h1>

            <p>
              A curated collection of weddings, emotions,
              celebrations and unforgettable moments captured
              through the ONAIR lens.
            </p>

            <a
              href="#gallery-collection"
              className="gallery-explore"
            >
              <span>EXPLORE COLLECTION</span>
              <FiArrowDown />
            </a>

          </div>

          <div className="gallery-hero-bottom">

            <span>14 STORIES</span>

            <div></div>

            <span>SCROLL TO EXPLORE</span>

          </div>

        </div>

      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="gallery-intro">

        <div className="gallery-container">

          <div className="gallery-intro-grid">

            <div className="gallery-index">
              <span>01</span>
              <small>THE COLLECTION</small>
            </div>

            <div className="gallery-intro-content">

              <h2>
                Every frame has
                <br />
                a <em>feeling.</em>
              </h2>

              <p>
                We photograph the moments that cannot be
                repeated. The quiet glances, genuine laughter,
                beautiful chaos and emotions that make every
                celebration uniquely yours.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          COLLECTION
      ================================= */}

      <section
        className="gallery-collection"
        id="gallery-collection"
      >

        <div className="gallery-container">

          <div className="gallery-heading">

            <div>

              <span className="gallery-label">
                02 / SELECTED WORK
              </span>

              <h2>
                Moments
                <br />
                <em>worth keeping.</em>
              </h2>

            </div>

            <div className="gallery-heading-side">
              <span>14</span>
              <small>PHOTOGRAPHS</small>
            </div>

          </div>


          {/* =================================
              PERFECT 3 COLUMN GRID
          ================================= */}

          <div className="gallery-grid">

            {galleryItems.map((item, index) => (

              <article
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedImage(item)}
              >

                <div className="gallery-card-inner">

                  <div className="gallery-image">

                    <img
                      src={item.image}
                      alt={`${item.title} - ONAIR Photography`}
                      loading={index < 3 ? "eager" : "lazy"}
                    />

                    <div className="gallery-overlay">

                      <span>VIEW</span>

                      <div className="gallery-overlay-icon">
                        <FiArrowUpRight />
                      </div>

                    </div>

                    <span className="gallery-number">
                      {item.id}
                    </span>

                  </div>

                  <div className="gallery-card-details">

                    <div>

                      <span className="gallery-category">
                        {item.category}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                    </div>

                    <FiArrowUpRight />

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================
          PHILOSOPHY
      ================================= */}

      <section className="gallery-philosophy">

        <div className="gallery-container">

          <div className="gallery-philosophy-grid">

            <div className="gallery-index">
              <span>03</span>
              <small>OUR APPROACH</small>
            </div>

            <div>

              <h2>
                We capture
                <br />
                what happens
                <br />
                <em>in between.</em>
              </h2>

              <p>
                Because sometimes the most important photograph
                isn't the one where everyone is looking at the
                camera. It is the moment that happens naturally,
                honestly and unexpectedly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="gallery-cta">

        <div className="gallery-container">

          <div className="gallery-cta-top">
            <span>04 / YOUR STORY</span>
            <span>ONAIR PHOTOGRAPHY</span>
          </div>

          <div className="gallery-cta-content">

            <span className="gallery-label">
              LET'S CREATE TOGETHER
            </span>

            <h2>
              Your moments.
              <br />
              Our <em>lens.</em>
            </h2>

            <Link
              to="/contact"
              className="gallery-cta-button"
            >
              <span>LET'S TALK</span>
              <FiArrowUpRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =================================
          LIGHTBOX
      ================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <FiX />
          </button>

          <div
            className="gallery-lightbox-box"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-info">

              <span>
                {selectedImage.id} / 14
              </span>

              <div>
                <small>
                  {selectedImage.category}
                </small>

                <h3>
                  {selectedImage.title}
                </h3>
              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Gallery;