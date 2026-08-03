import { useState, useEffect } from 'react';
import './styles/main.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import ProjectModal from './components/ProjectModal';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handleScroll = () => {
      const pos = window.scrollY + 200;
      sections.forEach(s => {
        if (pos >= s.offsetTop && pos <= s.offsetTop + s.offsetHeight) {
          setActiveSection(s.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      {loading && <Preloader />}
      <Header theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Projects onOpenModal={setModalProject} />
        <Experience />
        <Resume />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </>
  );
}

export default App;
