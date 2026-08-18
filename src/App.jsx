import React, { useState, useEffect } from 'react';

import MainLayout from './layouts/MainLayout';
import GrainOverlay from './components/GrainOverlay';
import NavigationRail from './components/NavigationRail';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import Toast from './components/Toast';
import { IDENTITY } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('dark');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      showToast('Light Editorial Paper Mode Activated [T]');
    } else {
      document.documentElement.classList.remove('light-theme');
      showToast('Matte Dark Charcoal Mode Activated [T]');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    showToast('Copied raffi.barzally@gmail.com to clipboard');
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -20,
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Keyboard Shortcuts Listener ([T] Theme, [C] Contact)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      } else if (e.key === 'c' || e.key === 'C') {
        scrollTo('contact');
        showToast('Jumped to Inquiries Monograph [C]');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme]);

  // Intersection Scroll Observer for Active Section
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];

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

  return (
    <MainLayout>
      {/* Tactile Grain Overlay */}
      <GrainOverlay />

      {/* Architectural Navigation Rail */}
      <NavigationRail
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onCopyEmail={copyEmail}
      />

      {/* Main Page Sections */}
      <HeroSection
        onExplore={() => scrollTo('projects')}
        onContact={() => scrollTo('contact')}
      />

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ExperienceSection />

      <ContactSection onShowToast={showToast} />

      <FooterSection />

      {/* Toast Notification Alert */}
      <Toast message={toastMessage} visible={toastVisible} />
    </MainLayout>
  );
}
