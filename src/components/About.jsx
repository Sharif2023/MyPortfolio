export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Passionate Software Engineer specializing in full-stack web development and UI/UX design — building scalable, impactful digital experiences.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/me_about.jpg" className="img-fluid about-profile-img" alt="Shariful Islam - Web Developer" loading="lazy" decoding="async" />
          </div>
          <div className="col-lg-8 content">
            <div className="custom-text-design">
              <h2>Crafting Scalable Web Solutions with <span>Passion</span></h2>
              <p>I'm a full-stack web developer with a deep passion for building modern, scalable web applications. Currently, I'm working at Fakibaj Gobeshok, where I design and maintain systems that power dynamic e-learning platforms.</p>
              <p>My expertise spans across React, Node.js, and backend technologies like Express.js and PHP. I specialize in scalable frontend architectures, API integration, and database optimization.</p>
              <p>Beyond my professional work, I'm pursuing research in green computing and AI-driven interactions to create technology that is not only functional but meaningful.</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>6 December, 2001</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>B.Sc. in CSE</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+8801700871179</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Mugdapara, Dhaka-1214</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right" /> <strong>University:</strong> <span>United International University</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>sharifislam0505@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>LinkedIn:</strong> <span><a href="https://www.linkedin.com/in/si-sharif/" target="_blank" rel="noopener noreferrer">si-sharif</a></span></li>
                  <li><i className="bi bi-chevron-right" /> <strong>GitHub:</strong> <span><a href="https://github.com/sharif2023" target="_blank" rel="noopener noreferrer">Sharif2023</a></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5" data-aos="fade-up">
          <div className="col-12 content">
            <div className="about-story-block">
              <h4 className="about-story-title"><i className="bi bi-map-fill" /> My Journey</h4>
              <p>My journey into technology began not with memorization, but with a deep-rooted passion for critical thinking. I naturally gravitated toward analytical subjects like Mathematics, Physics, and Chemistry. However, it was during my intermediate studies that I discovered Information and Communication Technology (ICT). Learning about number systems, HTML, and databases sparked a profound curiosity: <em>How does real-world software actually work behind the scenes?</em></p>
              <p>Despite not having a personal computer at the time to practice coding, my fascination only grew. I explored various tech disciplines and eventually chose to pursue a degree in <strong>Computer Science & Engineering (CSE)</strong> over a singular focus on software engineering. CSE offered a comprehensive foundation across multiple domains—from AI and cybersecurity to DevOps and project management—giving me the freedom to discover which path truly suited me best.</p>
              <p>Today, my focus is on mastering software development from scratch. I deeply analyze industry workflows, architectural gaps, and business logic to evolve into a complete, highly adaptable software engineer. I continuously build new projects to keep pace with rapid industry shifts, embracing the challenge of learning new frameworks on demand. Ultimately, my vision is to architect and deploy my own large-scale digital platforms—similar to Udemy or Daraz—creating impactful products that solve real-world problems and generate sustainable passive income.</p>
            </div>

            <div className="about-softskills-block mt-4">
              <h4 className="about-story-title"><i className="bi bi-people-fill" /> Teamwork &amp; Soft Skills</h4>
              <p>Throughout my academic and professional career, I have developed a highly adaptive approach to teamwork. When collaborating with cross-functional or less technically experienced teams, I naturally step into a leadership role—strategically delegating tasks like data collection, surveys, and documentation while I architect and deploy the critical codebase from scratch. This was instrumental in driving the end-to-end development of three research papers currently submitted to ICCB.</p>
              <p>I thrive under immense pressure. Working through sleepless nights and tight deadlines has been one of my greatest catalysts for rapid skill growth. Conversely, when collaborating with highly skilled engineers—whether debugging over a Google Meet or brainstorming architectures informally over tea at a local canteen or bridge—I am a sponge for new knowledge. I adapt to new environments almost instantly, always seeking the most optimized path to 100% project completion under my core philosophy: <em>"Less Effort, More Outcome."</em> Ultimately, I am driven by an uncompromising sense of accountability; I take my commitments seriously and refuse to settle for known mistakes.</p>
              <div className="softskill-tags mt-3">
                <span><i className="bi bi-diagram-3" /> Technical Leadership</span>
                <span><i className="bi bi-lightning-charge" /> High-Pressure Execution</span>
                <span><i className="bi bi-arrow-repeat" /> Rapid Adaptability</span>
                <span><i className="bi bi-check2-circle" /> Accountability</span>
                <span><i className="bi bi-chat-quote" /> Informal Collaboration</span>
                <span><i className="bi bi-gear-wide-connected" /> Strategic Delegation</span>
              </div>
            </div>

            <div className="about-cta-wrap mt-5">
              <a href="https://www.linkedin.com/in/si-sharif/" target="_blank" rel="noopener noreferrer" className="about-cta-btn"><i className="bi bi-linkedin" /> LinkedIn</a>
              <a href="https://github.com/sharif2023" target="_blank" rel="noopener noreferrer" className="about-cta-btn"><i className="bi bi-github" /> GitHub</a>
              <a href="/assets/resume/Shariful_Islam_Resume.pdf" target="_blank" rel="noopener noreferrer" className="about-cta-btn about-cta-primary"><i className="bi bi-file-earmark-person" /> View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
