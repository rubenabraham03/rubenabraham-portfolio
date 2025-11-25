export default function ProjectsPage() {
  return (
    <main className="container">
      <section>
        <h2>Projects</h2>
        <p>
          A few things I have shipped on my own time. I like building tools that feel
          fast, clean, and practical.
        </p>

        <div className="grid">
          <div className="card">
            <h3>YouTube Clone</h3>
            <p><em>Next.js · React 19 · TypeScript · Firebase · Docker · FFmpeg</em></p>
            <ul>
              <li>
                Built a YouTube style app with auth, responsive pages, video uploads, and
                basic engagement features.
              </li>
              <li>
                Wired Firebase Cloud Functions to a Docker based FFmpeg service for
                transcoding and metadata handling.
              </li>
              <li>
                Split storage for raw and processed media and used shared types to keep
                client and server logic in sync.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Frontend Generator</h3>
            <p><em>NestJS · React · Tailwind · Google Gemini API · AWS</em></p>
            <ul>
              <li>
                Built an AI powered tool that turns natural language prompts into ready to
                ship frontend layouts.
              </li>
              <li>
                Wrote a NestJS backend with JWT auth, tests, and an API that talks to the
                Gemini model.
              </li>
              <li>
                Built a React and Tailwind editor using Monaco and GrapesJS and deployed
                the app to AWS with Firebase admin for hosting control.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
