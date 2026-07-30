import React, { useState, useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import FloatingNav from './components/FloatingNav';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      {/* Floating Header */}
      <FloatingNav activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Page Sections */}
      <HeroSection
        onExplore={() => scrollTo('about')}
        onContact={() => scrollTo('contact')}
      />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ExperienceSection />

      <CertificatesSection />

      <ContactSection onShowToast={showToast} />

      <FooterSection />

      {/* Toast Alert */}
      <Toast message={toastMessage} visible={toastVisible} />
    </MainLayout>
  );
}


