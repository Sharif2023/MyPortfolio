export default function Resume() {
  return (
    <section id="resume" className="resume section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>A comprehensive snapshot of my academic journey and ongoing research contributions.</p>
      </div>
      <div className="container">
        {/* Summary Card */}
        <div className="resume-summary card shadow-sm p-4 mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
            <div>
              <h3 className="resume-title mb-1"><i className="bi bi-person-lines-fill me-2" /> Shariful Islam</h3>
              <p className="fw-semibold mb-2" style={{ color: 'var(--accent-color)' }}>Full-Stack Web Developer &amp; UI/UX Designer</p>
              <p className="fst-italic mb-3">Dedicated Software Engineer with hands-on experience building full-stack web applications. I bridge the gap between beautiful UI and robust backend engineering — delivering scalable, production-ready solutions.</p>
              <ul className="mt-2">
                <li><i className="bi bi-geo-alt" /> Mugdapara, Dhaka-1214, Bangladesh</li>
                <li><i className="bi bi-telephone" /> +8801700871179</li>
                <li><i className="bi bi-envelope" /> sharifislam0505@gmail.com</li>
                <li><i className="bi bi-linkedin" /> <a href="https://www.linkedin.com/in/si-sharif/" target="_blank" rel="noopener noreferrer">linkedin.com/in/si-sharif</a></li>
                <li><i className="bi bi-github" /> <a href="https://github.com/sharif2023" target="_blank" rel="noopener noreferrer">github.com/Sharif2023</a></li>
              </ul>
            </div>
            <div className="resume-pdf-btn-wrap">
              <a href="/assets/resume/Shariful_Islam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-btn">
                <i className="bi bi-file-earmark-pdf" /><span>View PDF Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-5">
          {/* Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title mb-4"><i className="bi bi-mortarboard-fill me-2" /> Education</h3>
            <div className="timeline">
              {[
                { title: 'B.Sc. in Computer Science & Engineering', period: '2021 – 2025', institution: 'United International University (UIU), Dhaka', detail: 'Focused on software development, web technologies, database systems, and UI/UX design.', gpa: 'GPA: 3.31 / 4.00' },
                { title: 'Higher Secondary Certificate (HSC) – Science', period: '2018 – 2020', institution: 'Kabi Nazrul Govt. College, Dhaka', gpa: 'GPA 4.75 / 5.00' },
                { title: 'Secondary School Certificate (SSC) – Science', period: '2016 – 2018', institution: 'KPB School & College, Dhaka', gpa: 'GPA 5.00 / 5.00' },
              ].map(e => (
                <div className="timeline-item" key={e.title}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{e.title}</h4>
                    <h5><i className="bi bi-calendar3 me-1" />{e.period}</h5>
                    <p><em><i className="bi bi-building me-1" />{e.institution}</em></p>
                    {e.detail && <p>{e.detail}</p>}
                    <p><strong>{e.gpa}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research + Languages */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title mb-4"><i className="bi bi-journal-code me-2" /> Research Works</h3>
            <div className="timeline">
              {[
                { title: 'Comparative Analysis of Energy Efficiency in Modern Frontend Frameworks', field: 'Green Computing Perspective', icon: 'bi-cpu' },
                { title: 'Real-Time Anxiety Detection and Intervention System for Programmers', field: 'Human-Computer Interaction', icon: 'bi-activity' },
                { title: 'Evaluating the Impact of Sketch and Voice Inputs on Divergent Thinking in Generative AI', field: 'Generative AI Interactions', icon: 'bi-lightbulb' },
              ].map(r => (
                <div className="timeline-item" key={r.title}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{r.title}</h4>
                    <p><em><i className={`bi ${r.icon} me-1`} />{r.field}</em></p>
                    <p>Status: <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>In Progress</span></p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="resume-title mt-5 mb-4"><i className="bi bi-translate me-2" /> Languages</h3>
            <div className="timeline">
              {[{ lang: 'Bangla', level: 'Native / Fluent' }, { lang: 'English', level: 'Professional Working Proficiency' }].map(l => (
                <div className="timeline-item" key={l.lang}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{l.lang}</h4><p><em>{l.level}</em></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
