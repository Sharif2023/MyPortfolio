import { SKILLS } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
      </div>
      <div className="container">
        {Object.values(SKILLS).map(({ icon, label, items }, gi) => (
          <div className="skill-group" key={label} data-aos="fade-up" data-aos-delay={100 + gi * 50}>
            <div className="skill-group-header">
              <i className={`bi ${icon}`} /><span>{label}</span>
            </div>
            <div className="skill-pills">
              {items.map(({ name, icon: src, invert }) => (
                <div className="skill-pill" key={name}>
                  <img src={src} alt={name} loading="lazy" decoding="async"
                    style={invert ? { filter: 'brightness(0) invert(1)' } : undefined} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
