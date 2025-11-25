export default function AboutPage() {
  return (
    <>
            <section id="hero" className="hero">
        <div className="container hero-flex">

          {/* LEFT — Image */}
          <div className="hero-left">
            <img
              src="/ruben-headshot.JPG"
              alt="Ruben Abraham"
              className="hero-avatar-large"
            />
          </div>

          {/* RIGHT — Text */}
          <div className="hero-right">
            <h2 className="hero-title">
              Builder • Student
            </h2>

            <p className="hero-subtext">
              I design and ship modern web apps with clean UX and real impact.
              I enjoy building scalable software and clear interfaces.
            </p>

            <div className="cta-buttons">
              <a href="mailto:rubenabraham03@gmail.com" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* PLAYGROUND / GAMES */}
      <section>
        <h2>Playground</h2>
        <p>Small games and gimmicks I built for fun.</p>

        <div className="games-grid">
          <div className="card">
            <h3>Blackjack</h3>
            <div className="embed-game">
              <iframe
                id="bjFrame"
                className="game-frame"
                src="/games/blackjack.html?compact=1"
                title="Blackjack tiny window"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

            <div className="card">
              <h3>Fireworks</h3>
              <p>Click inside the window to launch fireworks.</p>
              <div className="embed-game">
                <iframe
                  id="fwFrame"
                  className="game-frame"
                  src="/games/fireworks.html?compact=1"
                  title="Fireworks playground"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:rubenabraham03@gmail.com">
            rubenabraham03@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/rubenabraham/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/rubenabraham
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/rubenabraham03"
            target="_blank"
            rel="noreferrer"
          >
            github.com/rubenabraham03
          </a>
        </p>
      </section>
    </>
  );
}
