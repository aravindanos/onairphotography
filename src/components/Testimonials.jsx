import "./Testimonials.css";
import {
  FiArrowUpRight,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const testimonials = [
  {
    quote:
      "ONAIR made our wedding memories feel even more special. Every photograph captured an emotion we didn't even notice on the day.",
    name: "Priya & Karthik",
    event: "Wedding Story",
    location: "Madurai",
  },
  {
    quote:
      "The candid photographs were exactly what we wanted. Natural, emotional and beautifully composed without feeling posed.",
    name: "Aishwarya & Arun",
    event: "Wedding & Reception",
    location: "Chennai",
  },
  {
    quote:
      "From planning the shoot to the final photographs, the entire experience felt comfortable and creative. We absolutely loved the result.",
    name: "Sanjay & Meena",
    event: "Pre Wedding",
    location: "Coimbatore",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">

        {/* Decorative Circle */}
        <div className="testimonial-orbit testimonial-orbit-one"></div>
        <div className="testimonial-orbit testimonial-orbit-two"></div>

        {/* HEADER */}
        <div className="testimonials-header">

          <div className="testimonials-eyebrow">
            <span className="eyebrow-line"></span>

            <span>
              CLIENT STORIES
            </span>

            <span className="eyebrow-line"></span>
          </div>

          <div className="testimonials-heading-row">

            <div>
              <p className="testimonial-mini-label">
                THE ONAIR EXPERIENCE
              </p>

              <h2 className="section-title testimonials-title">
                Words from the
                <br />
                <em>people we photograph.</em>
              </h2>
            </div>

            <div className="testimonial-intro">
              <p>
                Beyond photographs, we create an experience that feels
                effortless, personal and unforgettable.
              </p>

              <div className="testimonial-rating">
                <div className="stars">
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                  <FiStar />
                </div>

                <span>LOVED BY OUR COUPLES</span>
              </div>
            </div>

          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <article
              className={`testimonial-card testimonial-card-${index + 1}`}
              key={item.name}
            >

              {/* Card top */}
              <div className="testimonial-card-top">

                <span className="testimonial-index">
                  0{index + 1}
                </span>

                <FiHeart className="testimonial-heart" />

              </div>

              {/* Quote */}
              <div className="testimonial-content">

                <span className="quote-symbol">
                  “
                </span>

                <p className="testimonial-quote">
                  {item.quote}
                </p>

              </div>

              {/* Bottom */}
              <div className="testimonial-bottom">

                <div className="client-info">

                  <span className="client-location">
                    {item.location}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    {item.event}
                  </p>

                </div>

                <div className="testimonial-arrow">
                  <FiArrowUpRight />
                </div>

              </div>

              {/* Decorative number */}
              <span className="background-number">
                0{index + 1}
              </span>

            </article>
          ))}

        </div>

        {/* EXPERIENCE */}
        <div className="experience-wrapper">

          <div className="experience-heading">
            <span>
              OUR JOURNEY
            </span>

            <p>
              Creating photographs that become part of your family story.
            </p>
          </div>

          <div className="experience-strip">

            <div className="experience-item">
              <strong>500<span>+</span></strong>

              <div>
                <small>
                  STORIES
                </small>

                <p>
                  Beautifully captured
                </p>
              </div>
            </div>

            <div className="experience-item">
              <strong>1000<span>+</span></strong>

              <div>
                <small>
                  MOMENTS
                </small>

                <p>
                  Preserved forever
                </p>
              </div>
            </div>

            <div className="experience-item">
              <strong>08<span>+</span></strong>

              <div>
                <small>
                  YEARS
                </small>

                <p>
                  Of visual storytelling
                </p>
              </div>
            </div>

            <div className="experience-item">
              <strong>100<span>%</span></strong>

              <div>
                <small>
                  PASSION
                </small>

                <p>
                  For your story
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="testimonial-cta">

          <div>
            <span>
              YOUR STORY COULD BE NEXT
            </span>

            <h3>
              Let's create something
              <em> timeless.</em>
            </h3>
          </div>

          <a href="/contact" className="testimonial-cta-button">
            <span>Let's Talk</span>
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;