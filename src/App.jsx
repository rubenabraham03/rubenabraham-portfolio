import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [modalOpen, setModalOpen] = useState(false);
  const [gameTitle, setGameTitle] = useState("Game");
  const [gamePath, setGamePath] = useState("");

  // Initial theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    if (initial === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  // Keep body class and localStorage in sync with theme state
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close modal on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") {
        closeGame();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Smooth scroll for in page links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "light" ? "dark" : "light"));
  };

  const openGame = (path, title) => {
    setGamePath(path);
    setGameTitle(title || "Game");
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGame = () => {
    setModalOpen(false);
    setGamePath("about:blank");
    document.body.style.overflow = "";
  };

  // Optional deep link: ?game=blackjack or ?game=typing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const g = params.get("game");
    if (g === "blackjack") openGame("/games/blackjack.html", "Blackjack");
    if (g === "typing") openGame("/games/typing.html", "Typing Test");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* HEADER / NAV */}
      <header className="navbar">
        <div className="container nav-inner">
          <h1 className="logo">Ruben Abraham</h1>
          <nav>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>
              Experience
            </a>
            <a href="#education" onClick={(e) => handleNavClick(e, "education")}>
              Education
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>
              Skills
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
            <a href="/games/">Games</a>
            <button
              id="themeToggle"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              🌗
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <h2>Software Engineer • Builder • Student</h2>
          <p>
            I design and ship modern web apps with clean UX and real impact. I
            enjoy building scalable software and clear interfaces.
          </p>
          <div className="cta-buttons">
            <a
              href="#projects"
              className="btn primary"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              View Projects
            </a>
            <a href="mailto:rubenabraham03@gmail.com" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="container">
        {/* ABOUT */}
        <section id="intro">
          <h2>About Me</h2>
          <p>
            Hi, I am Ruben. I like turning ideas into useful products. I work
            across the stack and I care about clean code, simple design, and
            results.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="games-grid">
            {/* Blackjack tiny window */}
            <div className="card">
              <h3>Blackjack (tiny window)</h3>
              <p>Play in the small window or open full size.</p>
              <div className="embed-game">
                <div className="embed-bar">
                  <span>Blackjack</span>
                  <div className="embed-actions">
                    <button
                      className="btn"
                      onClick={() => {
                        const iframe = document.getElementById("bjFrame");
                        if (iframe) {
                          iframe.src = "/games/blackjack.html?compact=1";
                        }
                      }}
                    >
                      Reload
                    </button>
                    <button
                      className="btn primary"
                      onClick={() =>
                        openGame("/games/blackjack.html?compact=1", "Blackjack")
                      }
                    >
                      Open
                    </button>
                  </div>
                </div>
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

            {/* Typing tiny window */}
            <div className="card">
              <h3>Typing Test (tiny window)</h3>
              <p>Type in the small window or open full size.</p>
              <div className="embed-game">
                <div className="embed-bar">
                  <span>Typing Test</span>
                  <div className="embed-actions">
                    <button
                      className="btn"
                      onClick={() => {
                        const iframe = document.getElementById("ttFrame");
                        if (iframe) {
                          iframe.src = "/games/typing.html?compact=1";
                        }
                      }}
                    >
                      Reload
                    </button>
                    <button
                      className="btn primary"
                      onClick={() =>
                        openGame("/games/typing.html?compact=1", "Typing Test")
                      }
                    >
                      Open
                    </button>
                  </div>
                </div>
                <iframe
                  id="ttFrame"
                  className="game-frame"
                  src="/games/typing.html?compact=1"
                  title="Typing Test tiny window"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <h2>Experience</h2>
          <div className="grid">
            {/* same content you had, just converted to className */}
            {/* ... keep your experience cards here unchanged except for className */}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2>Education</h2>
          <div className="card">
            <h3>University of Illinois Urbana–Champaign</h3>
            <p>
              <em>Urbana–Champaign, IL</em>
            </p>
            <p>
              Bachelor of Science in Computer Science and Advertising. GPA 3.89.
              Expected May 2027.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="grid">
            {/* your skill cards, same as before but className */}
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
      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2025 Ruben Abraham • Built with React</p>
      </footer>

      {/* GAME MODAL */}
      {modalOpen && (
        <div id="gameModal" className="modal" aria-hidden={!modalOpen}>
          <div className="modal-backdrop" onClick={closeGame}></div>
          <div
            className="modal-body"
            role="dialog"
            aria-modal="true"
            aria-label="Game window"
          >
            <div className="modal-bar">
              <span id="gameTitle">{gameTitle}</span>
              <button className="btn" onClick={closeGame} aria-label="Close">
                Close
              </button>
            </div>
            <iframe
              id="gameFrame"
              title="Game frame"
              loading="lazy"
              src={gamePath}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
