import "./Blog.css";

import {
  FiArrowDown,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import blog01 from "../assets/1.jpg";
import blog02 from "../assets/2.jpg";
import blog03 from "../assets/3.jpg";
import blog04 from "../assets/4.jpg";
import blog05 from "../assets/5.jpg";
import blog06 from "../assets/6.jpg";
import blog07 from "../assets/7.jpg";
import blog08 from "../assets/8.jpg";

const blogPosts = [
  {
    id: 1,
    image: blog01,
    category: "WEDDING GUIDE",
    date: "SEP 08, 2026",
    read: "6 MIN READ",
    title: "How to Choose the Right Wedding Photographer for Your Big Day",
    excerpt:
      "From photography style to experience, planning and personality, here are the things every couple should consider before booking their wedding photographer.",
  },
  {
    id: 2,
    image: blog02,
    category: "SOUTH INDIAN WEDDINGS",
    date: "SEP 02, 2026",
    read: "8 MIN READ",
    title: "A Complete Guide to South Indian Wedding Photography",
    excerpt:
      "The rituals, emotions and beautiful details that make South Indian weddings unforgettable stories to photograph.",
  },
  {
    id: 3,
    image: blog03,
    category: "CANDID PHOTOGRAPHY",
    date: "AUG 26, 2026",
    read: "5 MIN READ",
    title: "Why Candid Wedding Photography Feels More Real",
    excerpt:
      "The best photographs are often the moments nobody planned. Discover why authentic emotions create timeless wedding memories.",
  },
  {
    id: 4,
    image: blog04,
    category: "PRE WEDDING",
    date: "AUG 18, 2026",
    read: "5 MIN READ",
    title: "How to Plan a Beautiful Pre-Wedding Photoshoot",
    excerpt:
      "Location, outfits, timing, styling and natural expressions — everything you need to plan a relaxed pre-wedding session.",
  },
  {
    id: 5,
    image: blog05,
    category: "WEDDING TIPS",
    date: "AUG 11, 2026",
    read: "7 MIN READ",
    title: "15 Wedding Moments Your Photographer Should Never Miss",
    excerpt:
      "From quiet family emotions to the biggest rituals, these are the photographs that become priceless years after your wedding.",
  },
  {
    id: 6,
    image: blog06,
    category: "PHOTOGRAPHY",
    date: "AUG 04, 2026",
    read: "4 MIN READ",
    title: "The Difference Between Traditional and Candid Photography",
    excerpt:
      "Understand the two approaches and discover why combining both can create a complete wedding story.",
  },
  {
    id: 7,
    image: blog07,
    category: "WEDDING STORIES",
    date: "JUL 28, 2026",
    read: "6 MIN READ",
    title: "Behind the Frame: Capturing Emotion on a Wedding Day",
    excerpt:
      "A closer look at how we observe the little moments that happen between rituals, portraits and celebrations.",
  },
  {
    id: 8,
    image: blog08,
    category: "MADURAI WEDDINGS",
    date: "JUL 20, 2026",
    read: "5 MIN READ",
    title: "Wedding Photography in Madurai: What Couples Should Know",
    excerpt:
      "A practical guide for couples planning traditional, candid and cinematic wedding photography in Madurai.",
  },
];

const categories = [
  "ALL",
  "WEDDING GUIDE",
  "SOUTH INDIAN WEDDINGS",
  "CANDID PHOTOGRAPHY",
  "PRE WEDDING",
  "WEDDING TIPS",
];

function Blog() {
  return (
    <main className="blog-page">

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-container">
 
          <div className="blog-hero-content">

            <div className="blog-hero-copy">
              <span className="blog-eyebrow">
                THE ONAIR JOURNAL
              </span>

              <h1>
                Stories
                <br />
                <em>behind the frame.</em>
              </h1>

              <p>
                Wedding stories, photography inspiration,
                planning guides and beautiful ideas for couples
                creating memories that deserve to be remembered.
              </p>

              <a
                href="#blog-stories"
                className="blog-explore"
              >
                <span>EXPLORE STORIES</span>
                <FiArrowDown />
              </a>
            </div>

            <div className="blog-hero-number">
              <strong>08</strong>
              <span>FEATURED<br />STORIES</span>
            </div>

          </div>

          <div className="blog-hero-bottom">
            <span>WEDDINGS · STORIES · INSPIRATION</span>
            <span>SCROLL TO READ</span>
          </div>

        </div>
      </section>

      {/* FEATURED */}
      <section className="blog-featured">
        <div className="blog-container">

          <div className="blog-section-heading">

            <div>
              <span className="blog-label">
                01 / FEATURED STORY
              </span>

              <h2>
                The story
                <br />
                <em>starts here.</em>
              </h2>
            </div>

            <p>
              Inspiration for couples who believe their wedding
              photographs should feel as beautiful as the day itself.
            </p>

          </div>

          <article className="blog-featured-card">

            <div className="blog-featured-image">
              <img
                src={blogPosts[1].image}
                alt="South Indian wedding photography by ONAIR Photography"
              />

              <span className="blog-featured-number">
                01
              </span>
            </div>

            <div className="blog-featured-content">

              <div className="blog-meta">
                <span>{blogPosts[1].category}</span>
                <span>{blogPosts[1].date}</span>
              </div>

              <h3>
                {blogPosts[1].title}
              </h3>

              <p>
                {blogPosts[1].excerpt}
              </p>

              <Link
                to="/blog/south-indian-wedding-photography"
                className="blog-read-button"
              >
                <span>READ STORY</span>
                <FiArrowUpRight />
              </Link>

            </div>

          </article>

        </div>
      </section>

      {/* STORIES */}
      <section
        className="blog-stories"
        id="blog-stories"
      >
        <div className="blog-container">

          <div className="blog-stories-heading">

            <div>
              <span className="blog-label">
                02 / FROM THE JOURNAL
              </span>

              <h2>
                Explore our
                <br />
                <em>latest stories.</em>
              </h2>
            </div>

            <span className="blog-count">
              08 ARTICLES
            </span>

          </div>

          {/* FILTER */}
          <div className="blog-filters">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
              >
                {category}
              </button>
            ))}

          </div>

          {/* GRID */}
          <div className="blog-grid">

            {blogPosts.map((post, index) => (
              <article
                className={`blog-card ${
                  index === 0 ? "blog-card-large" : ""
                }`}
                key={post.id}
              >

                <Link
                  to={`/blog/${post.id}`}
                  className="blog-card-image"
                >

                  <img
                    src={post.image}
                    alt={`${post.title} - ONAIR Photography`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  <span className="blog-card-arrow">
                    <FiArrowUpRight />
                  </span>

                  <span className="blog-card-number">
                    {String(post.id).padStart(2, "0")}
                  </span>

                </Link>

                <div className="blog-card-content">

                  <div className="blog-card-meta">
                    <span>{post.category}</span>

                    <span className="blog-reading">
                      <FiClock />
                      {post.read}
                    </span>
                  </div>

                  <h3>
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p>
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="blog-card-link"
                  >
                    READ ARTICLE
                    <FiArrowUpRight />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="blog-philosophy">

        <div className="blog-container">

          <div className="blog-philosophy-inner">

            <span className="blog-label">
              03 / OUR PHILOSOPHY
            </span>

            <h2>
              The best photographs
              <br />
              are the ones that
              <br />
              <em>make you feel.</em>
            </h2>

            <p>
              We believe wedding photography is more than beautiful
              composition. It is about remembering the laughter,
              nervous hands, warm hugs and quiet glances long after
              the celebration is over.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="blog-cta">

        <div className="blog-container">

          <div className="blog-cta-top">
            <span>04 / YOUR STORY</span>
            <span>ONAIR PHOTOGRAPHY</span>
          </div>

          <div className="blog-cta-content">

            <span className="blog-label">
              HAVE A STORY TO TELL?
            </span>

            <h2>
              Let's create
              <br />
              something <em>timeless.</em>
            </h2>

            <Link
              to="/contact"
              className="blog-cta-button"
            >
              <span>LET'S TALK</span>
              <FiArrowUpRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Blog;