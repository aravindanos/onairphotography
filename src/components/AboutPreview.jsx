import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview section" id="about">
      <div className="container">
        <div className="why-section">

          <div className="why-heading"> 

            <h2 className="section-title">
              Why couples
              <br />
              <em>choose us.</em>
            </h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <span className="why-number">01</span>

              <h3>Emotion First</h3>

              <p>
                We focus on genuine moments rather than
                forced poses, allowing your personality
                and emotions to naturally come through.
              </p>
            </div>

            <div className="why-card">
              <span className="why-number">02</span>

              <h3>Cinematic Vision</h3>

              <p>
                Every frame is thoughtfully composed with
                attention to light, depth, movement and
                visual storytelling.
              </p>
            </div>

            <div className="why-card">
              <span className="why-number">03</span>

              <h3>Personal Approach</h3>

              <p>
                Your story isn't a template. We understand
                your vision and create photographs that
                feel personal to you.
              </p>
            </div>

            <div className="why-card">
              <span className="why-number">04</span>

              <h3>Timeless Memories</h3>

              <p>
                Our goal isn't to follow temporary trends.
                We create photographs you'll still love
                looking at decades from now.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;