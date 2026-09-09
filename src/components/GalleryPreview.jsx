import React from "react";
import "./GalleryPreview.css";

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
    image: gallery01,
    title: "Forever Begins",
    category: "Wedding",
  },
  {
    image: gallery02,
    title: "Beautiful Moments",
    category: "Candid",
  },
  {
    image: gallery03,
    title: "Love Story",
    category: "Pre Wedding",
  },
  {
    image: gallery04,
    title: "Pure Emotions",
    category: "Wedding",
  },
  {
    image: gallery05,
    title: "Golden Memories",
    category: "Candid",
  },
  {
    image: gallery06,
    title: "Together Forever",
    category: "Wedding",
  },
  {
    image: gallery07,
    title: "A Moment To Remember",
    category: "Pre Wedding",
  },
  {
    image: gallery08,
    title: "Timeless Love",
    category: "Candid",
  },
  {
    image: gallery09,
    title: "The Perfect Day",
    category: "Wedding",
  },
  {
    image: gallery10,
    title: "Natural Beauty",
    category: "Portrait",
  },
  {
    image: gallery11,
    title: "Endless Love",
    category: "Wedding",
  },
  {
    image: gallery12,
    title: "Little Moments",
    category: "New Born",
  },
  {
    image: gallery13,
    title: "Love & Laughter",
    category: "Candid",
  },
  {
    image: gallery14,
    title: "Captured Forever",
    category: "Photography",
  },
];

function GalleryPreview() {
  return (
    <section className="onair-preview" id="gallery">

      <div className="onair-preview__container">

        {/* Header */}
        <div className="onair-preview__header">

          <div className="onair-preview__heading">

            <span className="onair-preview__eyebrow">
              ONAIR PHOTOGRAPHY
            </span>

            <h2 className="onair-preview__title">
              Moments
              <span>That Stay Forever.</span>
            </h2>

          </div>

          <p className="onair-preview__description">
            Every photograph tells a story. We capture genuine
            emotions, beautiful celebrations and unforgettable
            moments that you can treasure for a lifetime.
          </p>

        </div>

        {/* Images */}
        <div className="onair-preview__grid">

          {galleryItems.map((item, index) => (
            <article
              className={`onair-preview__card onair-preview__card--${index + 1}`}
              key={index}
            >

              <div className="onair-preview__media">

                <img
                  src={item.image}
                  alt={`${item.title} - ONAIR Photography`}
                  loading={index > 3 ? "lazy" : "eager"}
                />

                <div className="onair-preview__overlay">

                  <div className="onair-preview__overlay-content">

                    <span className="onair-preview__category">
                      {item.category}
                    </span>

                    <h3 className="onair-preview__item-title">
                      {item.title}
                    </h3>

                    <div className="onair-preview__number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom */}
        <div className="onair-preview__bottom">

          <div className="onair-preview__line" />

          <p>
            Stories captured with passion.
          </p>

          <div className="onair-preview__line" />

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;