import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';



export default function Projects({ onOpenModal }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    let t;
    t = setTimeout(() => {
      if (window.VanillaTilt && tiltRef.current) {
        window.VanillaTilt.init(tiltRef.current.querySelectorAll('.proj-card'), {
          max: 8, speed: 400, glare: true, 'max-glare': 0.15,
        });
      }
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>A showcase of my work — real-world applications across web development, UI/UX, and full-stack solutions.</p>
      </div>

      <div className="container">
        <div id="github-projects" className="projects-grid" ref={tiltRef}>
          {PROJECTS.map((p, i) => (
            <div className={`projects-item${p.featured ? ' filter-featured' : ''}`} key={p.key} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className={`proj-card${p.featured ? ' proj-card--featured' : ''}`}>
                <div className="proj-thumb">
                  <img src={p.thumbnail} alt={p.name} className="proj-thumb-img" loading="lazy" />
                  <div className="proj-thumb-overlay" />
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="badge-live-demo">
                      <i className="bi bi-broadcast-pin" /> Live
                    </a>
                  )}
                  {p.featured && <span className="proj-featured-chip"><i className="bi bi-star-fill" /> Featured</span>}
                </div>
                <div className="proj-body">
                  <h4 className="proj-title">{p.name}</h4>
                  <p className="proj-desc">{p.problem}</p>

                  <div className="proj-actions">
                    <button className="proj-btn proj-btn-detail" onClick={() => onOpenModal(p)}>
                      <i className="bi bi-info-circle" /> Details
                    </button>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-repo">
                      <i className="bi bi-github" /> Repo
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-live">
                        <i className="bi bi-play-fill" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
