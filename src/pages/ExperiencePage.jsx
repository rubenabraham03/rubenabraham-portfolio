export default function ExperiencePage() {
  return (
    <>
      <section id="experience">
        <h2>Experience</h2>
        <div className="grid">
          {/* Fill in your cards like before */}
          {/* Example */}
          <div className="card">
            <h3>AI Fellow — Handshake</h3>
            <p>
              <em>Oct 2025 to Present • Remote</em>
            </p>
            <ul>
              <li>
                Crafted and refined prompts for LLM evaluation and ranked outputs
                to improve response quality and domain reasoning.
              </li>
              <li>
                Assessed accuracy and fairness and resolved edge cases with
                precise annotations and guideline updates.
              </li>
            </ul>
          </div>
          {/* Add other roles here */}
        </div>
      </section>

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

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="grid">
          {/* your skill cards, same as before but here */}
        </div>
      </section>
    </>
  );
}
