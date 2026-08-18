import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight, Copy } from 'lucide-react';
import { NAVIGATION_CHAPTERS } from '../data/portfolioData';

export default function NavigationRail({
  activeSection,
  setActiveSection,
  theme,
  toggleTheme,
  onCopyEmail,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [wibTime, setWibTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Live WIB Time Clock (Jakarta/Depok GMT+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setWibTime(`${formatted} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    setIsOpen(false);
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

  const currentChapter = NAVIGATION_CHAPTERS.find((c) => c.id === activeSection);

  return (
    <>
      {/* DESKTOP NAVIGATION RAIL (Left Side Vertical Dock) */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 z-40 flex-col justify-between items-center py-8 border-r border-[#2E2A24]/60 bg-[#181818]/90 backdrop-blur-md transition-colors duration-300">
        {/* Top: Monogram */}
        <button
          onClick={() => handleNavigate('hero')}
          className="w-10 h-10 rounded-full border border-[#A97843]/40 bg-[#202020] text-[#D4A96A] font-editorial-serif font-bold text-lg flex items-center justify-center hover:border-[#A97843] hover:scale-105 transition-all cursor-pointer"
          title="M. Raffi Barzally"
        >
          RB
        </button>

        {/* Center: Vertical Navigation Rail */}
        <nav className="flex flex-col items-center gap-6 my-auto" aria-label="Main Navigation">
          {NAVIGATION_CHAPTERS.map((chap) => {
            const isActive = activeSection === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => handleNavigate(chap.id)}
                className="group relative flex items-center justify-center p-2 rounded transition-all cursor-pointer focus:outline-none"
                aria-label={`Jump to ${chap.title}`}
              >
                {/* Visual Indicator Line / Dot */}
                <div
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'w-3 h-3 bg-[#A97843] rounded-full shadow-[0_0_8px_#A97843]'
                      : 'w-2 h-2 bg-[#9E988E]/40 rounded-full group-hover:bg-[#D4A96A]'
                  }`}
                />

                {/* Tooltip Hover Label */}
                <div className="absolute left-14 px-3 py-1.5 bg-[#202020] border border-[#A97843]/40 text-[#F3EFE8] rounded shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 font-space-num text-xs font-semibold">
                  <span>{chap.title}</span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom: Live Clock & Theme Toggle */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-[#2E2A24] bg-[#202020] text-[#D4A96A] flex items-center justify-center hover:border-[#A97843] transition-all cursor-pointer"
            title="Toggle Theme [T]"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[#8C5E2B]" />
            ) : (
              <Sun className="w-4 h-4 text-[#D4A96A]" />
            )}
          </button>

          <div className="font-mono-code text-[9px] text-[#A97843] font-semibold tracking-wider uppercase [writing-mode:vertical-lr] rotate-180">
            {wibTime || '10:32 WIB'}
          </div>
        </div>
      </aside>

      {/* TOP HEADER STRIP */}
      <header className="fixed top-0 inset-x-0 z-30 lg:pl-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between pointer-events-auto">
          {/* Mobile Monogram & Active Section Tag */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavigate('hero')}
              className={`lg:hidden px-3.5 py-1.5 bg-[#202020]/90 border border-[#2E2A24] text-[#F3EFE8] rounded-full text-xs font-space-num font-bold tracking-wider hover:border-[#A97843] transition-all flex items-center gap-2 ${
                scrolled ? 'shadow-md scale-95' : ''
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#A97843]" />
              <span>M. RAFFI BARZALLY</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-[#202020]/80 border border-[#2E2A24] rounded-full font-space-num text-xs text-[#9E988E]">
              <span className="uppercase text-[#F3EFE8] font-medium">
                {currentChapter?.title || 'Home'}
              </span>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCopyEmail}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#202020]/90 border border-[#2E2A24] hover:border-[#A97843] text-[#F3EFE8] rounded-full font-space-num text-xs font-medium transition-all cursor-pointer"
              title="Copy Email [C]"
            >
              <Copy className="w-3.5 h-3.5 text-[#D4A96A]" />
              <span>CONTACT [C]</span>
            </button>

            <button
              onClick={toggleTheme}
              className="lg:hidden p-2 bg-[#202020]/90 border border-[#2E2A24] rounded-full text-[#D4A96A] hover:border-[#A97843] transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden px-4 py-1.5 bg-[#202020]/90 border border-[#2E2A24] hover:border-[#A97843] text-[#F3EFE8] rounded-full font-space-num text-xs font-bold tracking-widest flex items-center gap-2 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
              {isOpen ? <X className="w-4 h-4 text-[#A97843]" /> : <Menu className="w-4 h-4 text-[#D4A96A]" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#181818]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 sm:p-10 pt-24 overflow-y-auto"
          >
            <div className="space-y-8 my-auto">
              <div className="font-space-num text-xs font-bold text-[#A97843] tracking-widest uppercase border-b border-[#2E2A24] pb-3 flex justify-between">
                <span>NAVIGATION</span>
                <span>{wibTime}</span>
              </div>

              <div className="space-y-4">
                {NAVIGATION_CHAPTERS.map((chap) => {
                  const isActive = activeSection === chap.id;
                  return (
                    <button
                      key={chap.id}
                      onClick={() => handleNavigate(chap.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#202020] border-[#A97843] text-[#D4A96A]'
                          : 'bg-[#181818] border-[#2E2A24] text-[#F3EFE8] hover:border-[#A97843]/50'
                      }`}
                    >
                      <span className="font-editorial-serif text-2xl font-semibold tracking-wide uppercase">
                        {chap.title}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#9E988E]" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#2E2A24] pt-6 flex flex-col gap-3 font-space-num text-xs text-[#9E988E]">
              <div className="flex justify-between items-center">
                <span>SHORTCUTS:</span>
                <span className="text-[#D4A96A] font-mono-code">[T] Theme | [C] Contact</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
