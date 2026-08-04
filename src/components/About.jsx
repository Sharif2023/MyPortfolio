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
            <p className="py-3">Currently pursuing three research projects in green computing, real-time anxiety detection, and generative AI interactions. I am driven by a vision to contribute to technology that is not only functional but meaningful.</p>

            <div className="about-story-block">
              <h4 className="about-story-title"><i className="bi bi-heart-fill" /> My Journey</h4>
              <p>I fell in love with coding the day I realised a few lines of logic could become something thousands of people actually use. Growing up in Dhaka, I was always curious about <em>how things work</em> — and web development gave me the answer in the most tangible way possible. Every project I build starts with a real human problem: how do we make daily life simpler, faster, or more connected?</p>
              <p>What inspires me most is the open-source community — the idea that knowledge should be free and that collaboration multiplies impact. I enjoy solving complex UX challenges: turning cluttered user flows into delightful, intuitive experiences. Whether it's a recipe app that feels like a friend's recommendation or a healthcare portal that saves someone a trip to a clinic — I build things that <strong>matter</strong>.</p>
            </div>

            <div className="about-softskills-block mt-4">
              <h4 className="about-story-title"><i className="bi bi-people-fill" /> Teamwork &amp; Soft Skills</h4>
              <p>I'm currently collaborating in a <strong>3-member research team</strong> on three academic papers spanning green computing, AI-driven developer wellness, and GenAI interaction design — coordinating research, literature reviews, and prototype development together.</p>
              <div className="softskill-tags">
                <span><i className="bi bi-people" /> Team Collaboration</span>
                <span><i className="bi bi-journal-code" /> Academic Research</span>
                <span><i className="bi bi-lightbulb" /> Problem Solving</span>
                <span><i className="bi bi-chat-dots" /> Communication</span>
                <span><i className="bi bi-arrow-repeat" /> Adaptability</span>
                <span><i className="bi bi-stars" /> Creative Thinking</span>
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
