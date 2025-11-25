import TypingText from "../components/TypingText";

export default function AboutPage() {
  return (
    <>
            <section id="hero" className="hero">
        <div className="container hero-flex">

          <div className="hero-left">
            <img
              src="/ruben-headshot.JPG"
              alt="Ruben Abraham"
              className="hero-avatar-large"
            />
          </div>

          <div className="hero-right">
            <h2 className="hero-title">
              <TypingText text="Hi! My name is Ruben Abraham." speed={70} />
            </h2>

            <p className="hero-subtext">
              I am a student at the University of Illinois Urbana Champaign, and I have loved building things for as long as I can remember. 
              I went from making sandcastles and oversized tree forts with too many nails to building software. 
              That curiosity to create never went away, and it is what led me to major in Computer Science and Advertising.
                <br/><br/>
              I like turning ideas into real products that feel clean, simple, and fast. 
              I care about both the code and the experience, which is why a combined major fits me so well and why full stack development feels natural to me. 
              I enjoy shaping the interface, building the backend, and bringing everything together into something people actually use. That same love for building carried into machine learning. 
              At Argonne, I worked on sky image classification and solar power prediction, which showed me how much I enjoy working with real datasets, running experiments, and pushing model performance. 
              Now, as an AI Fellow, I continue that work by fine tuning models, labeling data, and evaluating model behavior at scale.
                <br/><br/>
              Outside of school and projects, I usually play beach volleyball or read. 
              Volleyball keeps me active and competitive while reading helps me slow down. 
              I am currently reading Red Rising by Pierce Brown.
            </p>
          </div>
        </div>
      </section>


      {/* PLAYGROUND / GAMES */}
      <section>
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
