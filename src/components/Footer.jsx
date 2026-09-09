import "./Footer.css";
import {
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp, 
} from "react-icons/fa";

import { FaArrowUp,FaLocationDot  } from "react-icons/fa6";

function Footer() {

  const phoneNumber = "+918248274973";
  const displayPhone = "+91 82482 74973";

  return (
    <footer className="footer">

      {/* Decorative Line */}
      <div className="footer-line" />

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <span className="footer-label">
            ONAIR PHOTOGRAPHY
          </span>

          <h2>
            Moments.
            <br />
            <em>Made timeless.</em>
          </h2>

          <p>
            Wedding photography, candid photography and cinematic
            storytelling crafted to preserve your most meaningful moments.
          </p>

        </div>

        {/* Contact */}
        <div className="footer-contact">

          <span className="footer-label">
            LET'S CONNECT
          </span>

          <div className="footer-actions">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/onair_photography_/"
              target="_blank"
              rel="noreferrer"
              className="footer-action"
              aria-label="Follow ONAIR Photography on Instagram"
            >
              <span className="footer-icon">
                <FaInstagram />
              </span>

              <span>
                <small>FOLLOW</small>
                Instagram
              </span>

              <b>↗</b>
            </a>

            {/* Call */}
            <a
              href={`tel:${phoneNumber}`}
              className="footer-action"
              aria-label={`Call ONAIR Photography ${displayPhone}`}
            >
              <span className="footer-icon">
               <FaPhoneAlt />
              </span>

              <span>
                <small>CALL US</small>
                {displayPhone}
              </span>

              <b>↗</b>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="footer-action"
              aria-label="Contact ONAIR Photography on WhatsApp"
            >
              <span className="footer-icon">
                <FaWhatsapp />
              </span>

              <span>
                <small>CHAT WITH US</small>
                WhatsApp
              </span>

              <b>↗</b>
            </a>
<a
  href="https://www.google.com/maps/dir/?api=1&destination=OnAirPhotography%2C+137-C%2C+Kamarajar+Salai%2C+Teppakulam%2C+Madurai%2C+Tamil+Nadu+625009%2C+India"
  target="_blank"
  rel="noreferrer"
  className="footer-action"
  aria-label="Get directions to ONAIR Photography"
>
  <span className="footer-icon">
    <FaLocationDot />
  </span>

  <span>
    <small>VISIT US</small>
    Location
  </span>

  <b>↗</b>
</a>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <div className="footer-copy">
          © {new Date().getFullYear()} ONAIR Photography
          <span>•</span>
          Wedding & Candid Photography
        </div>

        <div className="footer-location">
          South India , Available for bookings
        </div>

        <button
          className="back-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;