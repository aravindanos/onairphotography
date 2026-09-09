import "./BookingCTA.css";

function BookingCTA() {
   const phoneNumber = "918248274973";
  return (
    <section className="booking-section" id="contact">
      <div className="booking-orb booking-orb-one"></div>
      <div className="booking-orb booking-orb-two"></div>

      <div className="booking-inner">
        <div className="booking-copy">
          <span className="section-label">LET'S CREATE TOGETHER</span>

          <h2>
            Your story deserves
            <span> to be remembered.</span>
          </h2>

          <p>
            Whether it is your wedding day, a beautiful pre-wedding session,
            a family milestone, or a cinematic project — we would love to
            create something unforgettable with you.
          </p>

          <div className="booking-details">
            <div className="booking-detail">
              <span className="booking-icon">✦</span>
              <div>
                <strong>Personalised Experience</strong>
                <small>Every shoot is planned around your story.</small>
              </div>
            </div>

            <div className="booking-detail">
              <span className="booking-icon">✦</span>
              <div>
                <strong>Cinematic Storytelling</strong>
                <small>Frames designed to feel timeless.</small>
              </div>
            </div>

            <div className="booking-detail">
              <span className="booking-icon">✦</span>
              <div>
                <strong>Professional Delivery</strong>
                <small>Beautifully crafted memories, delivered with care.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-card-top">
            <span>BOOK YOUR DATE</span>
            <div className="booking-card-number">01</div>
          </div>

          <h3>
            Let's talk about
            <br />
            your story.
          </h3>

          <p>
            Tell us a little about your event and we will get back to you
            with the next steps.
          </p>

          <div className="booking-buttons">
             <a
               href={`tel:+${phoneNumber}`}
              className="booking-btn booking-btn-outline"
            >
              Call Us
              <span>↗</span>
            </a>
            <a
              href="https://wa.me/918248274973"
              target="_blank"
              rel="noreferrer"
              className="booking-btn booking-btn-primary"
            >
              WhatsApp Us
              <span>↗</span>
            </a>

           
          </div>

          <div className="booking-note">
            <span></span>
            Available for weddings, events & creative projects
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;