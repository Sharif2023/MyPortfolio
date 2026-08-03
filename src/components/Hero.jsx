import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer <i class='bi bi-laptop-fill'></i>",
        "React Developer <i class='bi bi-code-slash'></i>",
        "Backend Developer <i class='bi bi-hdd-stack-fill'></i>",
        "UI/UX Designer <i class='bi bi-vector-pen'></i>",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      contentType: 'html',
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <picture data-aos="fade-in">
        <source media="(max-width: 768px)" srcSet="/assets/img/me_mobile.jpg" />
        <img src="/assets/img/me.jpg" alt="Shariful Islam - Engineer Sharif Portfolio" className="hero-img" fetchPriority="high" decoding="async" />
      </picture>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Shariful Islam</h2>
        <p>I'm a <span ref={typedRef} /><span className="typed-cursor typed-cursor--blink" aria-hidden="true" /></p>
      </div>
    </section>
  );
}
