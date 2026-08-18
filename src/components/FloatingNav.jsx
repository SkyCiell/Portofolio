import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { IDENTITY } from '../data/portfolioData';

const NAV_ITEMS = [
  { id: 'projects', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'STACK' },
  { id: 'experience', label: 'JOURNEY' },
  { id: 'contact', label: 'CONTACT' },
];

export default function FloatingNav({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -20, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div
        className={`w-full border-b transition-colors duration-300 ${
          scrolled
            ? 'bg-[#F5F5F3]/95 backdrop-blur-md border-[#E2E2DF] shadow-sm'
            : 'bg-[#F5F5F3]/80 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* Left: RAFFI Personal Mark */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <span className="font-space-num text-lg font-black tracking-tight text-[#111111] group-hover:text-[#1B4EF5] transition-colors">
              RAFFI<span className="text-[#1B4EF5]">.</span>
            </span>
            <span className="hidden sm:inline-block w-[1px] h-4 bg-[#E2E2DF]" />
            <span className="hidden sm:inline-flex items-center gap-2 px-2.5 py-0.5 border border-[#E2E2DF] bg-white font-space-num text-[10px] font-semibold text-[#111111] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4EF5] animate-pulse" />
              AVAILABLE FOR PKL
            </span>
          </button>

          {/* Center/Right: WORK, ABOUT, STACK, JOURNEY, CONTACT */}
          <nav className="hidden lg:flex items-center gap-8 font-space-num text-xs font-bold tracking-widest text-[#111111]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 cursor-pointer transition-colors hover:text-[#1B4EF5] uppercase ${
                    isActive ? 'text-[#1B4EF5]' : 'text-[#111111]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1B4EF5]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-editorial-blue text-[11px] py-2 px-4 inline-flex items-center gap-1.5"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-[#E2E2DF] bg-white font-space-num text-[9px] font-bold text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4EF5] animate-pulse" />
              PKL OPEN
            </span>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 border border-[#111111] bg-[#111111] text-white hover:bg-[#1B4EF5] hover:border-[#1B4EF5] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#F5F5F3] border-b border-[#111111] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full py-3 px-4 text-left font-space-num text-sm font-bold tracking-widest transition-all flex items-center justify-between border ${
                        isActive
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-white text-[#111111] border-[#E2E2DF] hover:border-[#111111]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 bg-[#1B4EF5]" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#E2E2DF] flex justify-between items-center text-xs font-mono-code text-[#666666]">
                <span>MUHAMMAD RAFFI BARZALLY</span>
                <span className="font-bold text-[#111111]">SMK TARUNA BHAKTI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
