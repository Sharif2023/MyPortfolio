import { RESUME_DATA } from '../data/portfolioData';

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
              <h3 className="resume-title mb-1"><i aria-hidden="true" className="bi bi-person-lines-fill me-2" /> {RESUME_DATA.summary.name}</h3>
              <p className="fw-semibold mb-2" style={{ color: 'var(--accent-color)' }}>{RESUME_DATA.summary.title}</p>
              <p className="fst-italic mb-3">{RESUME_DATA.summary.description}</p>
              <ul className="mt-2">
                {RESUME_DATA.summary.contact.map((item, i) => (
                  <li key={i}>
                    <i aria-hidden="true" className={`bi ${item.icon}`} /> 
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                    ) : (
                      ` ${item.text}`
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="resume-pdf-btn-wrap">
              <a href={RESUME_DATA.summary.resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-download-btn">
                <i aria-hidden="true" className="bi bi-file-earmark-pdf" /><span>View PDF Resume</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row gy-5">
          {/* Education */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title mb-4"><i aria-hidden="true" className="bi bi-mortarboard-fill me-2" /> Education</h3>
            <div className="timeline">
              {RESUME_DATA.education.map(e => (
                <div className="timeline-item" key={e.title}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{e.title}</h4>
                    <h5><i aria-hidden="true" className="bi bi-calendar3 me-1" />{e.period}</h5>
                    <p><em><i aria-hidden="true" className="bi bi-building me-1" />{e.institution}</em></p>
                    {e.detail && <p>{e.detail}</p>}
                    <div className="edu-gpa-row">
                      <strong>{e.gpa}</strong>
                      <a href={e.certificate} target="_blank" rel="noopener noreferrer" className="edu-cert-btn">
                        <i aria-hidden="true" className="bi bi-file-earmark-pdf-fill" /> View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research + Languages */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title mb-4"><i aria-hidden="true" className="bi bi-journal-code me-2" /> Research Works</h3>
            <div className="timeline">
              {RESUME_DATA.research.map(r => (
                <div className="timeline-item" key={r.title}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <h4>{r.title}</h4>
                    <p><em><i aria-hidden="true" className={`bi ${r.icon} me-1`} />{r.field}</em></p>
                    <p>Status: <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>In Progress</span></p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="resume-title mt-5 mb-4"><i aria-hidden="true" className="bi bi-translate me-2" /> Languages</h3>
            <div className="timeline">
              {RESUME_DATA.languages.map(l => (
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
