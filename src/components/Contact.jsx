import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error'
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setMsg('⏳ Sending message...');
    const form = e.target;
    const data = new FormData(form);
    try {
      // Access the key from the .env file using Vite's import.meta.env
      data.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      
      const res = await fetch('https://api.web3forms.com/submit', { 
        method: 'POST', 
        body: data
      });
      
      const json = await res.json();
      
      if (json.success) { 
        setStatus('ok'); 
        setMsg('✅ Message sent successfully! I will get back to you soon.'); 
        form.reset(); 
      } else { 
        setStatus('error'); 
        setMsg('❌ ' + (json.message || 'Failed to send message.')); 
      }
    } catch {
      setStatus('error'); setMsg('❌ Error sending message. Please check your network connection.');
    }
  };

  const alertClass = status === 'ok' ? 'alert alert-success' : status === 'error' ? 'alert alert-danger' : 'alert alert-info';

  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-stretch">

          {/* Info Panel */}
          <div className="col-lg-5">
            <div className="contact-info-panel h-100">
              <h3 className="contact-info-heading">Let's Talk</h3>
              <p className="contact-info-sub">I'm currently available for freelance projects, collaborations, and open-source contributions. Feel free to reach out!</p>
              <div className="contact-info-items">
                {[
                  { icon: 'bi-geo-alt-fill', label: 'Location', value: 'Mugdapara, Dhaka, Bangladesh', href: null },
                  { icon: 'bi-telephone-fill', label: 'Phone', value: '+880 1700 871179', href: 'tel:+8801700871179' },
                  { icon: 'bi-envelope-fill', label: 'Email', value: 'sharifislam0505@gmail.com', href: 'mailto:sharifislam0505@gmail.com' },
                ].map(item => (
                  <div className="contact-info-item" key={item.label}>
                    <div className="contact-info-icon"><i className={`bi ${item.icon}`} /></div>
                    <div>
                      <span className="contact-info-label">{item.label}</span>
                      {item.href
                        ? <a className="contact-info-value" href={item.href}>{item.value}</a>
                        : <span className="contact-info-value">{item.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-social-row">
                {[
                  { href: 'https://www.linkedin.com/in/si-sharif/', icon: 'bi-linkedin', title: 'LinkedIn' },
                  { href: 'https://github.com/Sharif2023', icon: 'bi-github', title: 'GitHub' },
                  { href: 'https://facebook.com/sharif.me2018', icon: 'bi-facebook', title: 'Facebook' },
                  { href: 'https://www.instagram.com/shariful_islam10', icon: 'bi-instagram', title: 'Instagram' },
                ].map(s => (
                  <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-btn" title={s.title}>
                    <i className={`bi ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="col-lg-7">
            <div className="contact-form-panel">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="contact-field-wrap">
                      <label htmlFor="name-field"><i className="bi bi-person me-1" /> Your Name</label>
                      <input type="text" name="name" id="name-field" className="contact-input" placeholder="e.g. John Doe" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-field-wrap">
                      <label htmlFor="email-field"><i className="bi bi-envelope me-1" /> Your Email</label>
                      <input type="email" name="email" id="email-field" className="contact-input" placeholder="e.g. john@example.com" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-field-wrap">
                      <label htmlFor="subject-field"><i className="bi bi-chat-dots me-1" /> Subject</label>
                      <input type="text" name="subject" id="subject-field" className="contact-input" placeholder="What's this about?" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-field-wrap">
                      <label htmlFor="message-field"><i className="bi bi-pencil-square me-1" /> Message</label>
                      <textarea name="message" id="message-field" className="contact-input contact-textarea" rows="7" placeholder="Share your thoughts or project details..." required />
                    </div>
                  </div>
                  <div className="col-12">
                    {status && <div id="form-messages" className={`${alertClass} mb-3`}>{msg}</div>}
                    <button type="submit" className="contact-submit-btn">
                      <i className="bi bi-send-fill me-2" /> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
