import { useState } from 'react';

const navLinks = [
  { href: '#hero',         icon: 'bi-house',             label: 'Home' },
  { href: '#about',        icon: 'bi-person',            label: 'About' },
  { href: '#skills',       icon: 'bi-lightning-charge',  label: 'Skills' },
  { href: '#projects',     icon: 'bi-collection',        label: 'Projects' },
  { href: '#experience',   icon: 'bi-briefcase',         label: 'Work Experience' },
  { href: '#resume',       icon: 'bi-file-earmark-text', label: 'Resume' },
  { href: '#certifications',icon: 'bi-patch-check',      label: 'Certifications' },
  { href: '#services',     icon: 'bi-hdd-stack',         label: 'Services' },
  { href: '#contact',      icon: 'bi-envelope',          label: 'Contact' },
];

const orbitIcons = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',      angle: '0deg',   delay: '0.3s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', angle: '45deg',  delay: '0.5s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', angle: '90deg',  delay: '0.7s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',    angle: '135deg', delay: '0.9s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',  angle: '180deg', delay: '1.1s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',          angle: '225deg', delay: '1.3s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',      angle: '270deg', delay: '1.5s' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', angle: '315deg', delay: '1.7s' },
];

export default function Header({ theme, toggleTheme, activeSection }) {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => { if (open) setOpen(false); };

  return (
    <header id="header" className={`header dark-background d-flex flex-column${open ? ' header-show' : ''}`}>
      <i
        className={`header-toggle d-xl-none bi ${open ? 'bi-x' : 'bi-list'}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      />

      <div className="profile-img">
        <img src="/assets/img/my-profile-img.jpg" alt="Shariful Islam" className="img-fluid rounded-circle" loading="lazy" />
        {orbitIcons.map((ic, i) => (
          <img
            key={i}
            src={ic.src}
            alt=""
            className="profile-orbit-icon"
            style={{ '--angle': ic.angle, '--delay': ic.delay }}
            loading="lazy"
          />
        ))}
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center" onClick={handleNavClick}>
        <h1 className="sitename">Shariful Islam</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://www.linkedin.com/in/si-sharif/" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
        <a href="https://facebook.com/sharif.me2018" className="facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" /></a>
        <a href="https://www.instagram.com/shariful_islam10" className="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /></a>
        <a href="https://github.com/Sharif2023" className="github-profile" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" /></a>
        <a href="https://www.youtube.com/channel/UCMFzUeOcyD2eVo_4EY8iDTQ" className="youtube" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.54-.123 1.07-.24 1.468a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navLinks.map(({ href, icon, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={handleNavClick}
              >
                <i className={`bi ${icon} navicon`} /> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="theme-toggle-wrap">
        <button id="theme-toggle-btn" className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle colour theme">
          <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`} />
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </header>
  );
}
