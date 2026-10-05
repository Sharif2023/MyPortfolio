import { ABOUT_DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/me_about.jpg" className="img-fluid about-profile-img" alt="Shariful Islam - Web Developer" loading="lazy" decoding="async" />
          </div>
          <div className="col-lg-8 content">
            <div className="custom-text-design">
              <h2 dangerouslySetInnerHTML={{ __html: ABOUT_DATA.title }} />
              {ABOUT_DATA.description.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {ABOUT_DATA.statsLeft.map((stat, i) => (
                    <li key={i}>
                      <i aria-hidden="true" className="bi bi-chevron-right" /> 
                      <strong>{stat.label}:</strong> 
                      <span>{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {ABOUT_DATA.statsRight.map((stat, i) => (
                    <li key={i}>
                      <i aria-hidden="true" className="bi bi-chevron-right" /> 
                      <strong>{stat.label}:</strong> 
                      <span>
                        {stat.link ? (
                          <a href={stat.link} target="_blank" rel="noopener noreferrer">{stat.value}</a>
                        ) : (
                          stat.value
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12 content">
            <div className="about-story-block">
              <h4 className="about-story-title"><i aria-hidden="true" className="bi bi-map-fill" /> My Journey</h4>
              {ABOUT_DATA.journey.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="about-softskills-block mt-4">
              <h4 className="about-story-title"><i aria-hidden="true" className="bi bi-people-fill" /> Teamwork &amp; Soft Skills</h4>
              {ABOUT_DATA.softSkillsText.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <div className="softskill-tags mt-3">
                {ABOUT_DATA.softSkillsTags.map((tag, i) => (
                  <span key={i}><i aria-hidden="true" className={`bi ${tag.icon}`} /> {tag.text}</span>
                ))}
              </div>
            </div>

            <div className="about-cta-wrap mt-5">
              <a href="https://www.linkedin.com/in/si-sharif/" target="_blank" rel="noopener noreferrer" className="about-cta-btn"><i aria-hidden="true" className="bi bi-linkedin" /> LinkedIn</a>
              <a href="https://github.com/sharif2023" target="_blank" rel="noopener noreferrer" className="about-cta-btn"><i aria-hidden="true" className="bi bi-github" /> GitHub</a>
              <a href="/assets/resume/Shariful_Islam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="about-cta-btn about-cta-primary"><i aria-hidden="true" className="bi bi-file-earmark-person" /> View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
