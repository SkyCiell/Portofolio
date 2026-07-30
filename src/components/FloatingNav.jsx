import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'certificates', label: 'Badges' },
  { id: 'contact', label: 'Contact' },
];

export default function FloatingNav({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* MINIMALIST DESKTOP PILL NAV */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`pointer-events-auto flex items-center gap-8 px-6 py-2.5 rounded-full border transition-all duration-500 shadow-2xl backdrop-blur-xl ${
            scrolled
              ? 'bg-[#081014]/85 border-[#1E343E] shadow-black/40'
              : 'bg-[#0B151B]/60 border-[#1E343E]/40'
          }`}
        >
          {/* Minimalist Brand Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#6CA8A7] shadow-[0_0_8px_#6CA8A7] group-hover:scale-125 transition-transform" />
            <span className="font-space text-sm font-semibold tracking-wider text-[#EEF8F7] group-hover:text-[#6CA8A7] transition-colors">
              SkyCiell<span className="text-[#BFA36A]">.</span>
            </span>
          </button>

          <div className="w-[1px] h-4 bg-[#1E343E]/60" />

          {/* Clean Text Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1 rounded-full text-xs font-outfit font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#EEF8F7] bg-[#182730]'
                      : 'text-[#8FA3AC] hover:text-[#EEF8F7]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full border border-[#6CA8A7]/40 z-[-1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block w-[1px] h-4 bg-[#1E343E]/60" />

          {/* Action CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-space font-medium text-[#BFA36A] hover:text-[#EEF8F7] transition-colors cursor-pointer group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 rounded-full text-[#8FA3AC] hover:text-[#EEF8F7] focus:outline-none cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#BFA36A]" /> : <Menu className="w-5 h-5 text-[#6CA8A7]" />}
          </button>
        </motion.nav>
      </header>

      {/* MINIMALIST MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-4 top-20 z-40 p-6 rounded-2xl bg-[#0B151B]/95 border border-[#1E343E] shadow-2xl backdrop-blur-2xl space-y-4"
          >
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full p-3 rounded-xl text-left font-outfit text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#182730] text-[#EEF8F7] font-semibold border border-[#6CA8A7]/30'
                        : 'text-[#8FA3AC] hover:text-[#EEF8F7] hover:bg-[#182730]/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#6CA8A7]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#1E343E] flex justify-between items-center text-xs font-space text-[#8FA3AC]">
              <span>M. Raffi Barzally</span>
              <span className="text-[#BFA36A]">SMK Taruna Bhakti</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

