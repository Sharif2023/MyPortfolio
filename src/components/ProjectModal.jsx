import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
  const boxRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    if (boxRef.current) boxRef.current.scrollTop = 0;
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const stackPills = (project.stack || []).map(t => (
    <span className="modal-stack-pill" key={t}>{t}</span>
  ));

  return (
    <div className="proj-modal-overlay open" role="dialog" aria-modal="true" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="proj-modal-box" id="proj-modal-box" ref={boxRef}>
        <button className="proj-modal-close" onClick={onClose} aria-label="Close"><i className="bi bi-x-lg" /></button>

        <div className="proj-modal-img-wrap">
          {project.thumbnail.endsWith('.mp4') ? (
            <video src={project.thumbnail} autoPlay loop muted playsInline className="proj-modal-img" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', transform: 'scale(1.25) translateY(-8%)' }} />
          ) : (
            <img src={project.thumbnail} alt={project.name} className="proj-modal-img" />
          )}
          <div className="proj-modal-img-overlay" />
        </div>

        <div className="proj-modal-content">
          <div className="proj-modal-header">
            <h3 id="proj-modal-title">{project.name}</h3>
            <span className="proj-modal-lang-badge">{project.language}</span>
          </div>

          <div id="proj-modal-body">
            <div className="modal-section">
              <span className="modal-section-label"><i className="bi bi-lightbulb-fill" /> Problem</span>
              <p>{project.problem}</p>
            </div>
            <div className="modal-section">
              <span className="modal-section-label"><i className="bi bi-stack" /> Tech Stack</span>
              <div className="modal-stack-list">{stackPills}</div>
            </div>
            <div className="modal-section">
              <span className="modal-section-label"><i className="bi bi-globe2" /> Real-World Impact</span>
              <p>{project.impact}</p>
            </div>
            {project.learning && (
              <div className="modal-section">
                <span className="modal-section-label"><i className="bi bi-mortarboard-fill" /> What I Learned</span>
                <div className="modal-learning-content" dangerouslySetInnerHTML={{ __html: project.learning }} />
              </div>
            )}
            {project.requiresContact && (
              <div className="modal-section" style={{ borderLeftColor: '#f59e0b' }}>
                <span className="modal-section-label" style={{ color: '#f59e0b' }}><i className="bi bi-shield-lock-fill" /> Access Control</span>
                <p style={{ fontSize: '13px', fontStyle: 'italic' }}>
                  For security reasons, test credentials are not displayed publicly.{' '}
                  <a href="#contact" onClick={onClose} style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>Contact me</a>
                  {' '}to request access for testing.
                </p>
              </div>
            )}
          </div>

          <div className="proj-modal-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-repo">
              <i className="bi bi-github" /> View Repo
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-live">
                <i className="bi bi-play-fill" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
