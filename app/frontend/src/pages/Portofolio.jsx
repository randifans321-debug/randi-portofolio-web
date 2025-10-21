import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { portfolioData } from '../data/mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero data={portfolioData.personal} />
        </section>
        <section id="about">
          <About data={portfolioData.personal} />
        </section>
        <section id="projects">
          <Projects projects={portfolioData.projects} />
        </section>
        <section id="skills">
          <Skills skills={portfolioData.skills} />
        </section>
        <section id="experience">
          <Experience experience={portfolioData.experience} />
        </section>
        <section id="contact">
          <Contact email={portfolioData.personal.email} />
        </section>
      </main>
      <Footer data={portfolioData.personal} />
    </div>
  );
};

export default Portfolio;