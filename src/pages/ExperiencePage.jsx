export default function ExperiencePage() {
  return (
    <main className="container">
      <section>
        <h2>Professional Experience</h2>
        <p>
          I like working on real problems with real users. Here is what I have been
          doing recently.
        </p>

        <div className="grid">
          <div className="card">
            <h3>AI Fellow — Handshake</h3>
            <p><em>Oct 2025 – Present · Remote</em></p>
            <ul>
              <li>
                Refine prompts, rank model outputs, and write feedback to improve response
                quality and reasoning for production systems.
              </li>
              <li>
                Review answers for accuracy and fairness and resolve edge cases through
                careful annotation and updated guidelines.
              </li>
              <li>
                Work with other reviewers to keep workflows clear, efficient, and NDA safe.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>AI and Automation Intern — Outamation</h3>
            <p><em>May 2025 – July 2025 · SouthLake, TX</em></p>
            <ul>
              <li>
                Built a data pipeline for mortgage files using Python, cleaning and
                preprocessing scanned documents to cut processing time.
              </li>
              <li>
                Automated OCR and compliance checks with tools like Tesseract and Amazon
                Textract plus custom validation scripts.
              </li>
              <li>
                Used RAG and NLP or vision models to classify documents and pull key fields
                for downstream systems.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Machine Learning Engineer Intern — Argonne National Laboratory</h3>
            <p><em>May 2024 – Sept 2024 · Lemont, IL</em></p>
            <ul>
              <li>
                Trained models on sky images to classify sky type and predict solar power
                output with strong test metrics.
              </li>
              <li>
                Combined Mini MPL data with image and power data to show how LiDAR improves
                prediction quality.
              </li>
              <li>
                Cleaned and aligned more than seven thousand images and signals and shared
                results with a large technical audience.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Software Engineer Intern — Argonne National Laboratory</h3>
            <p><em>Jan 2024 – May 2024 · Lemont, IL</em></p>
            <ul>
              <li>
                Built a Python tool to automate failure data analysis for semiconductors,
                shrinking work from hours to minutes.
              </li>
              <li>
                Used NumPy, pandas, and OpenCV to clean images, plot data, and keep data in
                sync with measurements.
              </li>
              <li>
                Tested hundreds of devices and improved code that reads and stores data
                from lab instruments.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
