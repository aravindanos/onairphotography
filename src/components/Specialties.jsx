import "./Specialties.css";

const specialties = [
  {
    number: "01",
    title: "Traditional Wedding",
    description:
      "Timeless wedding photography that preserves rituals, emotions, family moments and every meaningful detail.",
    tag: "WEDDINGS",
  },
  {
    number: "02",
    title: "Candid Photography",
    description:
      "Natural expressions, genuine laughter and those beautiful unscripted moments that tell your real story.",
    tag: "EMOTIONS",
  },
  {
    number: "03",
    title: "Pre Wedding Shoot",
    description:
      "Creative pre-wedding stories designed around your chemistry, personality and favourite locations.",
    tag: "LOVE STORIES",
  },
  {
    number: "04",
    title: "Indoor Studio Shoot",
    description:
      "Professional studio portraits with controlled lighting, elegant compositions and premium finishing.",
    tag: "PORTRAITS",
  },
  {
    number: "05",
    title: "Outdoor Photography",
    description:
      "Beautiful portraits and lifestyle photography created with natural light and cinematic outdoor locations.",
    tag: "LIFESTYLE",
  },
  {
    number: "06",
    title: "New Born Photography",
    description:
      "Soft, intimate and carefully crafted newborn memories captured with patience and attention to detail.",
    tag: "NEWBORN",
  },
  {
    number: "07",
    title: "Corporate Events",
    description:
      "Professional event coverage for conferences, launches, celebrations, teams and important business moments.",
    tag: "CORPORATE",
  },
  {
    number: "08",
    title: "Short Film Production",
    description:
      "From concept to final frame, we create cinematic short films with storytelling, cinematography and editing.",
    tag: "CINEMA",
  },
];

function Specialties() {
  return (
    <section className="specialties section" id="services">
      <div className="container">

        <div className="specialties-heading">

          <div>
            <span className="section-label">
              What We Create
            </span>

            <h2 className="section-title">
              Our
              <br />
              <em>Specialties</em>
            </h2>
          </div>

          <p className="specialties-intro">
            From intimate moments to grand celebrations, we
            transform real experiences into photographs and
            films that remain meaningful for years to come.
          </p>

        </div>

        <div className="specialties-grid">

          {specialties.map((item) => (
            <article
              className="specialty-card"
              key={item.number}
            >
              <div className="specialty-top">

                <span className="specialty-number">
                  {item.number}
                </span>

                <span className="specialty-tag">
                  {item.tag}
                </span>

              </div>

              <div className="specialty-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <div className="specialty-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Specialties;