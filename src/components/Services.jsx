const services = [
  { icon: 'bi-vector-pen',   title: 'UI/UX Design',              desc: 'Wireframes, user flows, and pixel-perfect high-fidelity prototypes in Figma. I design with clarity, accessibility, and smooth user journeys in mind.',                                                tags: ['Figma', 'Wireframing', 'Prototyping'] },
  { icon: 'bi-code-slash',   title: 'Front-End Development',      desc: 'Responsive, component-based UIs built with React, TypeScript, Tailwind CSS, and Bootstrap — optimized for performance, SEO, and mobile-first experiences.',                                             tags: ['React.js', 'TypeScript', 'Tailwind CSS'] },
  { icon: 'bi-hdd-network',  title: 'Back-End Development',       desc: 'Secure, scalable server-side systems using PHP/Laravel and Node.js. From REST API design and multi-role authentication to file storage and third-party integrations.',                                   tags: ['PHP', 'Laravel', 'Node.js'] },
  { icon: 'bi-layers',       title: 'Full-Stack Web Apps',        desc: 'End-to-end product delivery — from concept to cloud deployment. Real-world projects include recipe platforms, healthcare portals, study tools, and marketplaces.',                                      tags: ['React', 'PHP', 'MySQL', 'Docker'] },
  { icon: 'bi-database',     title: 'Database & API Integration', desc: 'Robust schema design for MySQL, PostgreSQL, and MongoDB. RESTful API architecture, data modeling, indexing, and secure third-party integrations.',                                                     tags: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { icon: 'bi-journal-code', title: 'Research & Prototyping',     desc: 'Academic-level research in green computing, AI-driven developer wellness, and GenAI interaction design. From concept papers to working proof-of-concept prototypes.',                                    tags: ['Green Computing', 'AI', 'HCI'] },
];

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>End-to-end digital solutions — from pixel-perfect interfaces to production-grade backend systems.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {services.map((s, i) => (
            <div className="col-lg-4 col-md-6" key={s.title} data-aos="fade-up" data-aos-delay={100 + i * 100}>
              <div className="service-card">
                <div className="service-card-icon"><i className={`bi ${s.icon}`} /></div>
                <h4 className="service-card-title">{s.title}</h4>
                <p className="service-card-desc">{s.desc}</p>
                <div className="service-card-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
