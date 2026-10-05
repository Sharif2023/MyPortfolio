import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import VanillaTilt from 'vanilla-tilt';



export default function Projects({ onOpenModal }) {
  const tiltRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Others'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  useEffect(() => {
    let t;
    t = setTimeout(() => {
      if (window.VanillaTilt && tiltRef.current) {
        // Destroy existing tilt instances to prevent bugs when DOM changes
        const cards = tiltRef.current.querySelectorAll('.proj-card');
        cards.forEach(card => card.vanillaTilt && card.vanillaTilt.destroy());
        
        VanillaTilt.init(cards, {
          max: 8, speed: 400, glare: true, 'max-glare': 0.15,
        });
      }
    }, 300);
    return () => clearTimeout(t);
  }, [activeCategory]);

  return (
    <section id="projects" className="projects section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>A showcase of my work — real-world applications across web development, UI/UX, and full-stack solutions.</p>
      </div>

      <div className="container">
        
        {/* Category Filters */}
        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="col-12 d-flex justify-content-center flex-wrap gap-3 projects-filters" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The key prop forces React to completely recreate this grid when the category changes, re-triggering the entrance animations */}
        <div id="github-projects" className="projects-grid" ref={tiltRef} key={activeCategory}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p, i) => (
              <div 
                className={`projects-item${p.featured ? ' filter-featured' : ''} project-animated`} 
                key={p.key} 
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`proj-card${p.featured ? ' proj-card--featured' : ''}`}>
                  <div className="proj-thumb">
                    {p.thumbnail.endsWith('.mp4') ? (
                      <video src={p.thumbnail} autoPlay loop muted playsInline className="proj-thumb-img" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', transform: p.key === 'resume-builder' ? 'scale(1.25) translateY(-8%)' : 'none' }} />
                    ) : (
                      <img src={p.thumbnail} alt={p.name} className="proj-thumb-img" loading="lazy" />
                    )}
                    <div className="proj-thumb-overlay" />
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="badge-live-demo">
                        <i aria-hidden="true" className="bi bi-broadcast-pin" /> Live
                      </a>
                    )}
                    {p.featured && <span className="proj-featured-chip"><i aria-hidden="true" className="bi bi-star-fill" /> Featured</span>}
                  </div>
                  <div className="proj-body">
                    <h4 className="proj-title">{p.name}</h4>
                    <p className="proj-desc">{p.problem}</p>

                    <div className="proj-actions">
                      <button className="proj-btn proj-btn-detail" onClick={() => onOpenModal(p)}>
                        <i aria-hidden="true" className="bi bi-info-circle" /> Details
                      </button>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-repo">
                        <i aria-hidden="true" className="bi bi-github" /> Repo
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-live">
                          <i aria-hidden="true" className="bi bi-play-fill" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="projects-empty-state project-animated" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '80px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <i aria-hidden="true" className="bi bi-laptop" style={{ fontSize: '3.5rem', color: 'var(--accent-color)', opacity: 0.8, marginBottom: '20px', display: 'block' }}></i>
              <h4 style={{ color: 'var(--heading-color)', marginBottom: '15px', fontWeight: '600' }}>Currently Working on it...</h4>
              <p style={{ color: 'var(--default-color)', opacity: 0.8, margin: 0, fontSize: '1.1rem' }}>Exciting new {activeCategory.toLowerCase()} projects are under development. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
