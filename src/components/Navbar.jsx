import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../assets/logo.png";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const weddings = [
    "Hindu Weddings",
    "Tamil Weddings",
    "Brahmin Weddings",
    "Telugu Weddings",
    "Malayali Weddings",
    "Christian Weddings",
    "Muslim Weddings",
    "North Indian Weddings",
    "Destination Weddings",
    "Engagement",
    "Mehendi",
    "Haldi",
    "Sangeet",
    "Wedding Ceremony",
    "Reception",
  ];

  const photography = [
    "Wedding Photography",
    "Pre-Wedding Photography",
    "Maternity Photography",
    "Family Photography",
    "Birthday Photography",
    "Graduation Photography",
    "Anniversary Photography",
    "Fashion Photography",
    "Model Portfolio",
    "Personal Branding",
    "Corporate Photography",
    "Event Photography",
    "Product Photography",
  ];

  const portfolio = [
    "Weddings",
    "Pre-Weddings",
    "Couple Portraits",
    "Maternity",
    "Baby & Newborn",
    "Family",
    "Fashion & Models",
    "Events",
    "Corporate",
    "Commercial",
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="navbar-inner">

          {/* LOGO */}

         <Link
  to="/"
  className="brand"
  onClick={closeMenu}
>
  {/* <img
    src={logo}
    alt="ONAIR Photography Logo"
    className="brand-logo"
  /> */}

  <span className="brand-text">
    <span className="brand-main">ONAIR</span>
    <span className="brand-sub">PHOTOGRAPHY</span>
  </span>
</Link>


          {/* DESKTOP NAVIGATION */}

          <nav className="nav-links">

            <Link
              to="/"
              className="nav-link"
              onClick={closeMenu}
            >
              Home
            </Link>


            {/* ================= WEDDINGS ================= */}

            <div
              className={`nav-dropdown ${
                activeDropdown === "weddings"
                  ? "dropdown-active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActiveDropdown("weddings")
              }
            >
              <button
                type="button"
                className="nav-link nav-dropdown-button"
                onClick={() =>
                  toggleDropdown("weddings")
                }
                
              >
                  <Link
              to="/weddings" 
              onClick={closeMenu}
            >  Weddings </Link>

                <span className="dropdown-arrow">
                  ↓
                </span>
              </button>

              <div
                className="mega-menu"
                onMouseEnter={() =>
                  setActiveDropdown("weddings")
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
              >
                <div className="mega-menu-inner">

                  <div className="mega-intro">
                    <span>01 / WEDDINGS</span>

                    <h3>
                      Every tradition.
                      <br />
                      <em>Every emotion.</em>
                    </h3>

                    <p>
                      Wedding stories beautifully
                      documented across cultures,
                      traditions and celebrations.
                    </p>

                    <Link
                      to="/weddings"
                      onClick={closeMenu}
                    >
                      Explore Weddings ↗
                    </Link>
                  </div>

                  <div className="mega-grid">

                    {weddings.map((item, index) => (
                      <Link
                        key={item}
                        to={`/weddings/${slugify(item)}`}
                        onClick={closeMenu}
                      >
                        <small>
                          {String(index + 1).padStart(2, "0")}
                        </small>

                        <span>{item}</span>

                        <b>↗</b>
                      </Link>
                    ))}

                  </div>

                </div>
              </div>
            </div>


            {/* ================= PHOTOGRAPHY ================= */}

            <div
              className={`nav-dropdown ${
                activeDropdown === "photography"
                  ? "dropdown-active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActiveDropdown("photography")
              }
            >
              <button
                type="button"
                className="nav-link nav-dropdown-button"
                onClick={() =>
                  toggleDropdown("photography")
                }
              >
                Photography

                <span className="dropdown-arrow">
                  ↓
                </span>
              </button>

              <div
                className="mega-menu photography-menu"
                onMouseEnter={() =>
                  setActiveDropdown("photography")
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
              >
                <div className="mega-menu-inner">

                  <div className="mega-intro">
                    <span>02 / PHOTOGRAPHY</span>

                    <h3>
                      Frames that
                      <br />
                      <em>feel alive.</em>
                    </h3>

                    <p>
                      From intimate portraits to
                      unforgettable celebrations,
                      every frame has a story.
                    </p>

                    <Link
                      to="/photography"
                      onClick={closeMenu}
                    >
                      View Photography ↗
                    </Link>
                  </div>

                  <div className="mega-grid">

                    {photography.map((item, index) => (
                      <Link
                        key={item}
                        to={`/photography/${slugify(item)}`}
                        onClick={closeMenu}
                      >
                        <small>
                          {String(index + 1).padStart(2, "0")}
                        </small>

                        <span>{item}</span>

                        <b>↗</b>
                      </Link>
                    ))}

                  </div>

                </div>
              </div>
            </div>


            {/* ================= PORTFOLIO ================= */}

            <div
              className={`nav-dropdown ${
                activeDropdown === "portfolio"
                  ? "dropdown-active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActiveDropdown("portfolio")
              }
            >
              <button
                type="button"
                className="nav-link nav-dropdown-button"
                onClick={() =>
                  toggleDropdown("portfolio")
                }
              >
                Portfolio

                <span className="dropdown-arrow">
                  ↓
                </span>
              </button>

              <div
                className="mega-menu portfolio-menu"
                onMouseEnter={() =>
                  setActiveDropdown("portfolio")
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
              >
                <div className="mega-menu-inner">

                  <div className="mega-intro">
                    <span>03 / PORTFOLIO</span>

                    <h3>
                      Stories
                      <br />
                      <em>we've lived.</em>
                    </h3>

                    <p>
                      Explore selected work from
                      weddings, portraits, events
                      and creative projects.
                    </p>

                    <Link
                      to="/portfolio"
                      onClick={closeMenu}
                    >
                      View Portfolio ↗
                    </Link>
                  </div>

                  <div className="mega-grid">

                    {portfolio.map((item, index) => (
                      <Link
                        key={item}
                        to={`/portfolio/${slugify(item)}`}
                        onClick={closeMenu}
                      >
                        <small>
                          {String(index + 1).padStart(2, "0")}
                        </small>

                        <span>{item}</span>

                        <b>↗</b>
                      </Link>
                    ))}

                  </div>

                </div>
              </div>
            </div>


            {/* SIMPLE LINKS */}

            <Link
              to="/gallery"
              className="nav-link"
              onClick={closeMenu}
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="nav-link"
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link
              to="/testimonials"
              className="nav-link"
              onClick={closeMenu}
            >
              Testimonials
            </Link>

            <Link
              to="/blog"
              className="nav-link"
              onClick={closeMenu}
            >
              Blog
            </Link>

          </nav>


          {/* CTA */}

          <Link
            to="/contact"
            className="nav-button"
            onClick={closeMenu}
          >
            <span>Let's Talk</span>
            <b>↗</b>
          </Link>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>

        </div>
      </header>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="mobile-menu-inner">

          <div className="mobile-menu-header">
            <span>ONAIR PHOTOGRAPHY</span>
            <span>MENU</span>
          </div>

          <nav className="mobile-nav">

            <Link to="/" onClick={closeMenu}>
              <span>01</span>
              Home
              <b>↗</b>
            </Link>

            <Link to="/weddings" onClick={closeMenu}>
              <span>02</span>
              Weddings
              <b>↗</b>
            </Link>

            <Link to="/photography" onClick={closeMenu}>
              <span>03</span>
              Photography
              <b>↗</b>
            </Link>

            <Link to="/portfolio" onClick={closeMenu}>
              <span>04</span>
              Portfolio
              <b>↗</b>
            </Link>

            <Link
              to="/wedding-stories"
              onClick={closeMenu}
            >
              <span>05</span>
              Wedding Stories
              <b>↗</b>
            </Link>

            <Link to="/about" onClick={closeMenu}>
              <span>06</span>
              About Us
              <b>↗</b>
            </Link>

            <Link
              to="/testimonials"
              onClick={closeMenu}
            >
              <span>07</span>
              Testimonials
              <b>↗</b>
            </Link>

            <Link to="/blog" onClick={closeMenu}>
              <span>08</span>
              Blog
              <b>↗</b>
            </Link>

          </nav>

          <div className="mobile-footer">

            <span>
              WEDDINGS · PORTRAITS · FILMS
            </span>

            <a
              href="https://www.instagram.com/onair_photography_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;