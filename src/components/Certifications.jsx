import { useEffect, useRef } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import VanillaTilt from 'vanilla-tilt';

export default function Certifications() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      VanillaTilt.init(gridRef.current.querySelectorAll('.cert-card'), {
        max: 8, speed: 400, glare: true, 'max-glare': 0.15,
      });
    }
  }, []);

  return (
    <section id="certifications" className="certifications section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certifications &amp; Achievements</h2>
        <p>Verified credentials and milestones earned through dedicated learning in web development and programming.</p>
      </div>
      <div className="container">
        <div className="row gy-4" ref={gridRef}>
          {CERTIFICATIONS.map((cert, i) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" key={cert.title} data-aos="fade-up" data-aos-delay={100 + i * 50}>
              <div className="cert-card w-100">
                <div className="cert-card-header">
                  <div className="cert-issuer-logo">
                    <img src={cert.logo} alt={cert.issuer} loading="lazy" decoding="async"
                      onError={e => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }} />
                    <div className="cert-issuer-fallback" style={{ display: 'none' }}><i className="bi bi-award-fill" /></div>
                  </div>
                  <span className="cert-date">{cert.year}</span>
                </div>
                <div className="cert-card-body">
                  <h5 className="cert-title">{cert.title}</h5>
                  <span className="cert-issuer-name">{cert.issuer}</span>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-tags">{cert.tags.map(t => <span className="cert-tag" key={t}>{t}</span>)}</div>
                </div>
                <div className="cert-card-footer">
                  {cert.verifyUrl && (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-btn">
                      <i className="bi bi-patch-check-fill" /> Verify Certificate
                    </a>
                  )}
                  <a href={cert.viewUrl} target="_blank" rel="noopener noreferrer"
                    className={cert.verifyUrl ? 'cert-view-btn' : 'cert-view-btn cert-view-btn--full'}>
                    <i className="bi bi-eye" /> View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
