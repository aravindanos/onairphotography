import "./Contact.css";

import {
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaLocationDot,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

function Contact() {
  const phoneNumber = "+918248274973";
  const displayPhone = "+91 82482 74973";

  const whatsappMessage = encodeURIComponent(
    "Hi ONAIR Photography, I would like to enquire about your photography services."
  );

  return (
    <main className="contact-page">

      {/* =====================================================
          CONTACT HERO
      ===================================================== */}

      <section className="contact-main">
        <div className="contact-container">

          {/* Top Line */}
          <div className="contact-top-line">
            <span>ONAIR PHOTOGRAPHY</span>
            <span>CONTACT / 01</span>
            <span>MADURAI · INDIA</span>
          </div>

          {/* Main Content */}
          <div className="contact-layout">

            {/* LEFT */}
            <div className="contact-intro">

              <span className="contact-eyebrow">
                LET'S CREATE TOGETHER
              </span>

              <h1>
                Let's talk
                <br />
                <em>about your story.</em>
              </h1>

              <p>
                Planning a wedding, pre-wedding shoot, celebration or
                creative project? Tell us what you have in mind and
                let's create something timeless together.
              </p>

              <div className="contact-availability">
                <span className="contact-status-dot"></span>
                <span>AVAILABLE FOR BOOKINGS</span>
              </div>

            </div>


            {/* RIGHT */}
            <div className="contact-panel">

              <div className="contact-panel-header">
                <span>GET IN TOUCH</span>
                <span>01 — 04</span>
              </div>


              {/* PHONE */}
              <a
                href={`tel:${phoneNumber}`}
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaPhone />
                </div>

                <div className="contact-item-content">
                  <small>CALL US</small>
                  <strong>{displayPhone}</strong>
                  <span>Speak directly with our team</span>
                </div>

                <FaArrowUpRightFromSquare className="contact-arrow" />
              </a>


              {/* WHATSAPP */}
              <a
                href={`https://wa.me/${phoneNumber.replace(
                  "+",
                  ""
                )}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaWhatsapp />
                </div>

                <div className="contact-item-content">
                  <small>WHATSAPP</small>
                  <strong>Chat With Us</strong>
                  <span>Send your enquiry instantly</span>
                </div>

                <FaArrowUpRightFromSquare className="contact-arrow" />
              </a>


              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/onair_photography_/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaInstagram />
                </div>

                <div className="contact-item-content">
                  <small>FOLLOW US</small>
                  <strong>@onair_photography_</strong>
                  <span>See our latest stories</span>
                </div>

                <FaArrowUpRightFromSquare className="contact-arrow" />
              </a>


              {/* LOCATION */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=OnAirPhotography%2C+137-C%2C+Kamarajar+Salai%2C+Teppakulam%2C+Madurai%2C+Tamil+Nadu+625009%2C+India"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaLocationDot />
                </div>

                <div className="contact-item-content">
                  <small>VISIT US</small>
                  <strong>Our Studio</strong>
                  <span>Teppakulam, Madurai, Tamil Nadu</span>
                </div>

                <FaArrowUpRightFromSquare className="contact-arrow" />
              </a>

            </div>

          </div>


          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="contact-bottom">

            <div className="contact-bottom-left">
              <span>READY WHEN YOU ARE.</span>
              <small>
                Wedding · Candid · Pre Wedding · Events
              </small>
            </div>


            <div className="contact-navigation">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/gallery">
                Gallery
              </Link>

              <Link to="/weddings">
                Weddings
              </Link>

            </div>


            <div className="contact-copyright">
              © {new Date().getFullYear()} ONAIR
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;