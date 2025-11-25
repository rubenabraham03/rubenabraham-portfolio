export default function ProjectsPage() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        <div className="card">
          <h3>Ingredient Based Recipe Generator</h3>
          <p>
            React app that filters recipes by selected ingredients and shows
            ratings, nutrition, and steps.
          </p>
          <p>
            <strong>Tech:</strong> React, Vite, CSS, Testing Library, Vitest
          </p>
        </div>

        {/* Add ML project, automation pipeline, etc. */}
      </div>
    </section>
  );
}
