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
                  <h5><i aria-hidden="true" className="bi bi-calendar3 me-1" />March 2026 &ndash; September 2026</h5>
                  <p><em><i aria-hidden="true" className="bi bi-building me-1" /><a href="https://www.fakibajgobeshok.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>Fakibaj Gobeshok</a> &nbsp;·&nbsp; Remote, Part-time</em></p>
                  <ul className="mt-3" style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'justify', fontSize: '0.95rem', color: 'var(--color-default)' }}>
                    <li className="mb-2">Build and manage a production e-learning platform using React.js and Tailwind CSS, featuring reusable UI components and responsive interfaces with DRY approach.</li>
                    <li className="mb-2">Using Axios, JWT-based authentication, and Swagger/OpenAPI documentation, develop and integrate REST APIs to support core platform workflows.</li>
                    <li className="mb-2">Implement RBAC between stakeholders interfaces for access to protected features.</li>
                    <li className="mb-2">Optimize the data loading on the frontend and application reactivity with parallel API requests, filtering supported by backend and component optimizations.</li>
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
