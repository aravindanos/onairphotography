import "./About.css";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiHeart,
  FiCamera,
  FiFilm,
  FiUsers,
} from "react-icons/fi";

const aboutHero =
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85";

const about01 =
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85";

const about02 =
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85";

const about03 =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=85";

const about04 =
  "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1400&q=85";

const about05 =
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85";

const about06 =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85";

function About() {
  return (
    <main className="about-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src={aboutHero}
            alt="ONAIR Photography wedding photographer capturing a wedding moment"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="about-hero-content">

          <span className="about-eyebrow">
            ONAIR PHOTOGRAPHY · OUR STORY
          </span>

          <h1>
            We don't just
            <br />
            capture moments.
            <br />
            <em>We preserve them.</em>
          </h1>

          <p>
            A wedding photography studio focused on honest emotions,
            beautiful storytelling and photographs that become part
            of your family's history.
          </p>

          <a href="#our-story" className="about-hero-button">
            Discover Our Story
            <FiArrowDownRight />
          </a>

        </div>

        <div className="about-hero-side">
          EST. WITH LOVE
        </div>

      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="about-intro section-padding" id="our-story">

        <div className="about-intro-number">
          01
        </div>

        <div className="about-intro-title">

          <span>WHO WE ARE</span>

          <h2>
            Photography
            <br />
            with a
            <br />
            <em>human touch.</em>
          </h2>

        </div>

        <div className="about-intro-content">

          <p className="about-large-text">
            ONAIR Photography is built around one simple belief:
            the best photographs are not forced.
          </p>

          <p>
            They happen naturally — in a glance between two people,
            a parent's smile, a friend's laughter, a quiet breath
            before the ceremony or a spontaneous moment on the
            dance floor.
          </p>

          <p>
            Our approach combines candid wedding photography,
            cinematic storytelling and timeless portraiture to
            create images that feel authentic today and meaningful
            years from now.
          </p>

        </div>

      </section>


      {/* =================================
          STORY IMAGE SECTION
      ================================= */}

      <section className="about-story">

        <div className="about-story-image">

          <img
            src={about01}
            alt="Bride and groom photographed by ONAIR Photography"
          />

          <span className="story-image-number">
            01 / 06
          </span>

        </div>

        <div className="about-story-content">

          <span>02 · THE ONAIR STORY</span>

          <h2>
            Every couple has
            <br />
            a different
            <br />
            <em>story to tell.</em>
          </h2>

          <p>
            We believe wedding photography should never feel
            like a checklist.
          </p>

          <p>
            Your wedding has its own rhythm, personality,
            traditions and people. Our job is to understand
            that world and photograph it honestly.
          </p>

          <p>
            From the first nervous smile to the final celebration,
            we look for the little moments that make your wedding
            uniquely yours.
          </p>

        </div>

      </section>


      {/* =================================
          PHILOSOPHY
      ================================= */}

      <section className="about-philosophy section-padding">

        <div className="philosophy-heading">

          <span>03 · OUR PHILOSOPHY</span>

          <h2>
            Real moments.
            <br />
            <em>Real emotions.</em>
          </h2>

        </div>

        <div className="philosophy-grid">

          <article className="philosophy-card">

            <div className="philosophy-icon">
              <FiHeart />
            </div>

            <span>01</span>

            <h3>Emotion First</h3>

            <p>
              We focus on genuine expressions and meaningful
              interactions instead of manufactured moments.
            </p>

          </article>


          <article className="philosophy-card">

            <div className="philosophy-icon">
              <FiCamera />
            </div>

            <span>02</span>

            <h3>Cinematic Vision</h3>

            <p>
              Thoughtful composition, beautiful light and
              cinematic perspectives bring depth to every story.
            </p>

          </article>


          <article className="philosophy-card">

            <div className="philosophy-icon">
              <FiUsers />
            </div>

            <span>03</span>

            <h3>People Matter</h3>

            <p>
              Your family and friends are part of the story.
              We make space for the people who make your
              celebration special.
            </p>

          </article>


          <article className="philosophy-card">

            <div className="philosophy-icon">
              <FiFilm />
            </div>

            <span>04</span>

            <h3>Storytelling</h3>

            <p>
              We don't photograph isolated pictures. We create
              a complete visual narrative of your celebration.
            </p>

          </article>

        </div>

      </section>


      {/* =================================
          VISUAL BREAK
      ================================= */}

      <section className="about-visual">

        <img
          src={about02}
          alt="Candid wedding photography by ONAIR Photography"
        />

        <div className="visual-text">
          <span>THE MOMENTS BETWEEN</span>

          <h2>
            Sometimes
            <br />
            the smallest
            <br />
            moments
            <br />
            mean the most.
          </h2>
        </div>

      </section>


      {/* =================================
          WHAT WE DO
      ================================= */}

      <section className="about-services section-padding">

        <div className="services-heading">

          <span>04 · WHAT WE DO</span>

          <h2>
            Stories we
            <br />
            <em>love telling.</em>
          </h2>

          <p>
            From intimate celebrations to grand weddings,
            we create photographs and films that reflect
            the people, culture and emotion behind every occasion.
          </p>

        </div>

        <div className="services-list">

          <a href="/photography/candid-wedding" className="service-row">

            <span>01</span>

            <div>
              <h3>Candid Wedding Photography</h3>
              <p>
                Natural, emotional and unobtrusive wedding
                photography focused on genuine moments.
              </p>
            </div>

            <FiArrowUpRight />

          </a>


          <a href="/photography/traditional-wedding" className="service-row">

            <span>02</span>

            <div>
              <h3>Traditional Wedding Photography</h3>
              <p>
                Complete coverage of rituals, ceremonies,
                family portraits and cultural traditions.
              </p>
            </div>

            <FiArrowUpRight />

          </a>


          <a href="/photography/pre-wedding" className="service-row">

            <span>03</span>

            <div>
              <h3>Pre Wedding Photography</h3>
              <p>
                Relaxed and creative couple sessions designed
                around your personalities and relationship.
              </p>
            </div>

            <FiArrowUpRight />

          </a>


          <a href="/photography/cinematic-films" className="service-row">

            <span>04</span>

            <div>
              <h3>Cinematic Wedding Films</h3>
              <p>
                Emotional wedding films crafted with cinematic
                visuals, storytelling and carefully selected music.
              </p>
            </div>

            <FiArrowUpRight />

          </a>


          <a href="/photography/portrait" className="service-row">

            <span>05</span>

            <div>
              <h3>Portrait Photography</h3>
              <p>
                Elegant portraits for couples, families,
                newborns, professionals and special occasions.
              </p>
            </div>

            <FiArrowUpRight />

          </a>


          <a href="/photography/events" className="service-row">

            <span>06</span>

            <div>
              <h3>Events & Celebrations</h3>
              <p>
                Professional photography for corporate events,
                celebrations, launches and special gatherings.
              </p>
            </div>

            <FiArrowUpRight />

          </a>

        </div>

      </section>


      {/* =================================
          IMAGE COLLAGE
      ================================= */}

      <section className="about-collage section-padding">

        <div className="collage-heading">

          <span>05 · BEHIND THE LENS</span>

          <h2>
            A collection of
            <br />
            <em>little memories.</em>
          </h2>

        </div>

        <div className="collage-grid">

          <div className="collage-image collage-one">
            <img
              src={about03}
              alt="ONAIR Photography wedding moment"
            />
          </div>

          <div className="collage-image collage-two">
            <img
              src={about04}
              alt="ONAIR Photography candid couple photograph"
            />
          </div>

          <div className="collage-image collage-three">
            <img
              src={about05}
              alt="ONAIR Photography wedding ceremony"
            />
          </div>

          <div className="collage-image collage-four">
            <img
              src={about06}
              alt="ONAIR Photography emotional wedding portrait"
            />
          </div>

        </div>

      </section>


      {/* =================================
          SEO CONTENT
      ================================= */}

      <section className="about-seo section-padding">

        <div className="seo-number">
          06
        </div>

        <div className="seo-content">

          <span>ONAIR PHOTOGRAPHY</span>

          <h2>
            Wedding photography
            <br />
            crafted with
            <br />
            <em>meaning.</em>
          </h2>

          <p>
            ONAIR Photography is a professional wedding photography
            studio specializing in candid wedding photography,
            traditional wedding photography, pre wedding shoots,
            wedding portraits and cinematic wedding films.
          </p>

          <p>
            We photograph weddings across Madurai, Chennai,
            Coimbatore and destinations throughout Tamil Nadu
            and South India. Our photography style combines
            documentary storytelling with elegant editorial
            portraits to create photographs that are natural,
            emotional and timeless.
          </p>

          <p>
            Whether you are planning a traditional Tamil wedding,
            Hindu wedding, Brahmin wedding, Telugu wedding,
            Malayali wedding, Christian wedding, Muslim wedding
            or destination wedding, we create a visual story
            that reflects your culture, personality and connection.
          </p>

          <p>
            Our wedding photography experience is designed to
            be comfortable and personal. Instead of turning your
            celebration into a photoshoot, we allow the day to
            unfold naturally while carefully documenting the
            emotions, people, details and celebrations that make
            it unforgettable.
          </p>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="about-cta">

        <div className="cta-orbit" />

        <span>07 · YOUR STORY STARTS HERE</span>

        <h2>
          Let's create
          <br />
          something
          <br />
          <em>timeless.</em>
        </h2>

        <p>
          Planning your wedding or looking for a photographer
          for your next special occasion?
        </p>

        <a href="/contact" className="about-cta-button">
          Let's Talk
          <FiArrowUpRight />
        </a>

      </section>

    </main>
  );
}

export default About;