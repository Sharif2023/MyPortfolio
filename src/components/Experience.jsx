export default function Experience() {
  return (
    <section id="experience" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Work Experience</h2>
        <p>Professional roles and industry contributions — building real-world products at scale.</p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11" data-aos="fade-up" data-aos-delay="100">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h4>Front End Developer</h4>
                  <h5><i className="bi bi-calendar3 me-1" />March 2026 &ndash; Now</h5>
                  <p><em><i className="bi bi-building me-1" /><a href="https://www.fakibajgobeshok.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>Fakibaj Gobeshok</a> &nbsp;·&nbsp; MangoSeed — E-Learning Platform &nbsp;·&nbsp; Remote, Part-time</em></p>
                  <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify', fontSize: '0.95rem', color: 'var(--color-default)' }}>
                    <li className="mb-2">Architected a scalable <strong>React</strong> and <strong>Tailwind CSS</strong> frontend from scratch comprising <strong>75+ modular components and pages</strong>, following <strong>DRY principles</strong> for high reusability across student and instructor interfaces.</li>
                    <li className="mb-2">Integrated <strong>85+ REST API endpoints</strong> via Swagger using centralized Axios service modules with <strong>JWT</strong> interceptors, driving features including video streaming, interactive Q&amp;A, secure checkouts, and real-time instructor analytics.</li>
                    <li className="mb-2">Designed a robust routing architecture handling <strong>55+ application routes</strong> with <strong>RBAC</strong>, securing <strong>19 protected routes</strong> across Student and Instructor roles using shared HOC guard logic.</li>
                    <li className="mb-2">Optimized frontend performance via parallel data fetching (<code>Promise.all</code>) and server-side filtering migration, significantly reducing page load times and eliminating browser memory crashes on heavy views.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
