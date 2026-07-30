import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Menu, X, Clock, MapPin, Shield, Layers, Cpu, Archive, Radio, User, Award } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: '00° COVER', title: 'Character Cover', icon: Shield },
  { id: 'about', label: '45° PROFILE', title: 'Character Profile', icon: User },
  { id: 'skills', label: '90° TALENTS', title: 'Ability Tree', icon: Cpu },
  { id: 'projects', label: '135° DOSSIERS', title: 'Mission Dossiers', icon: Layers },
  { id: 'experience', label: '180° MEMORIES', title: 'Resonance Memories', icon: Clock },
  { id: 'certificates', label: '225° VAULT', title: 'Collectible Badges', icon: Award },
  { id: 'contact', label: '270° SIGNAL', title: 'Transmission Console', icon: Radio },
];

export default function CompassNav({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wibTime, setWibTime] = useState('');

  // Live WIB clock update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setWibTime(`${h}:${m}:${s} WIB`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find index of current active section for compass ring rotation angle
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const ringRotation = activeIndex * 45;

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP FLOATING VERTICAL COMPASS DOCK (Fixed Left)
      ───────────────────────────────────────────────────────────── */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-20 z-50 flex-col justify-between items-center py-6 bg-[#09161A]/90 border-r border-[#B8F1E8]/12 backdrop-blur-sm">
        {/* Top Logo / Imperial Seal */}
        <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-full bg-[#102229] border border-[#B8F1E8]/20 flex items-center justify-center text-[#CDB47D] font-garamond font-bold text-lg shadow-[0_0_12px_rgba(205,180,125,0.15)] hover:border-[#CDB47D] transition-colors">
            RB
          </div>
          <span className="text-[8px] font-space tracking-widest text-[#A8C5C3] uppercase">PORTFOLIO</span>
        </div>

        {/* Center Compass Widget & Vertical Section Nav */}
        <div className="flex flex-col items-center gap-6 my-auto">
          {/* Compass Ring Visual */}
          <div className="relative w-12 h-12 rounded-full border border-[#B8F1E8]/20 bg-[#102229] flex items-center justify-center shadow-lg group">
            <motion.div
              animate={{ rotate: ringRotation }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 rounded-full border border-dashed border-[#5FA8A3]/40"
            />
            {/* North marker */}
            <div className="absolute -top-1 w-1.5 h-1.5 bg-[#CDB47D] rounded-full shadow-[0_0_8px_#CDB47D]" />
            <Compass className="w-5 h-5 text-[#79C7BF] group-hover:text-[#B8F1E8] transition-colors" />
          </div>

          {/* Vertical Section Buttons */}
          <nav className="flex flex-col gap-4 items-center">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <div key={sec.id} className="relative group flex items-center">
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#18323B] border border-[#5FA8A3] text-[#B8F1E8] shadow-[0_0_15px_rgba(95,168,163,0.25)]'
                        : 'bg-[#102229]/60 border border-[#B8F1E8]/10 text-[#A8C5C3] hover:text-[#EEF8F7] hover:border-[#B8F1E8]/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {isActive && (
                      <span className="absolute -right-1 w-2 h-2 rounded-full bg-[#B8F1E8] shadow-[0_0_8px_#B8F1E8]" />
                    )}
                  </button>

                  {/* Tooltip on hover */}
                  <div className="absolute left-14 px-3 py-1.5 rounded-lg bg-[#18323B] border border-[#B8F1E8]/20 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 whitespace-nowrap z-50">
                    <span className="text-[10px] font-space tracking-wider text-[#CDB47D] block uppercase">
                      {sec.label}
                    </span>
                    <span className="text-xs font-medium text-[#EEF8F7]">
                      {sec.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Coordinates & WIB Clock */}
        <div className="flex flex-col items-center text-center gap-2">
          <div className="writing-mode-vertical rotate-180 font-space text-[9px] tracking-[0.2em] text-[#A8C5C3]/60 uppercase">
            DEPOK 6.39°S 106.83°E
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#5FA8A3] animate-soft-pulse" />
        </div>
      </aside>

      {/* ─────────────────────────────────────────────────────────────
          TOP CORNER TELEMETRY BAR (Fixed Top Right)
      ───────────────────────────────────────────────────────────── */}
      <div className="fixed top-5 right-6 z-50 flex items-center gap-4">
        {/* Live WIB Clock Pill */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102229] border border-[#B8F1E8]/15 shadow-md">
          <Clock className="w-3.5 h-3.5 text-[#5FA8A3]" />
          <span className="font-space text-xs tracking-widest text-[#EEF8F7] font-semibold">
            {wibTime}
          </span>
        </div>

        {/* Coordinates Pill */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102229] border border-[#B8F1E8]/15 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-[#CDB47D]" />
          <span className="font-space text-xs tracking-wider text-[#A8C5C3]">
            DEPOK • ID
          </span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-11 h-11 rounded-xl bg-[#102229] border border-[#B8F1E8]/20 flex items-center justify-center text-[#EEF8F7] shadow-lg hover:border-[#5FA8A3] transition-colors"
          aria-label="Toggle Navigation Codex"
        >
          {mobileOpen ? <X className="w-5 h-5 text-[#CDB47D]" /> : <Menu className="w-5 h-5 text-[#79C7BF]" />}
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE EXPANDABLE COMPASS MENU OVERLAY
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#09161A]/98 p-6 pt-24 lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              {/* Compass Header Banner */}
              <div className="codex-panel p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#18323B] border border-[#CDB47D]/30 flex items-center justify-center text-[#CDB47D] font-garamond font-bold text-lg">
                    RB
                  </div>
                  <div>
                    <h3 className="font-garamond text-lg font-bold text-[#EEF8F7]">PORTFOLIO CODEX</h3>
                    <p className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase">RESONANCE MATRIX</p>
                  </div>
                </div>
                <div className="font-space text-xs text-[#CDB47D] font-bold">{wibTime}</div>
              </div>

              {/* Navigation Items List */}
              <div className="space-y-3">
                {SECTIONS.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full p-4 rounded-xl flex items-center justify-between text-left transition-all ${
                        isActive
                          ? 'bg-[#18323B] border border-[#5FA8A3] text-[#B8F1E8] shadow-lg'
                          : 'bg-[#102229] border border-[#B8F1E8]/10 text-[#A8C5C3]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#B8F1E8]' : 'text-[#79C7BF]'}`} />
                        <div>
                          <span className="font-space text-[10px] tracking-widest text-[#CDB47D] block uppercase">
                            {sec.label}
                          </span>
                          <span className="font-outfit text-base font-medium text-[#EEF8F7]">
                            {sec.title}
                          </span>
                        </div>
                      </div>
                      {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[#B8F1E8] shadow-[0_0_8px_#B8F1E8]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Specs */}
            <div className="pt-6 border-t border-[#B8F1E8]/12 flex justify-between items-center text-xs font-space text-[#A8C5C3]">
              <span>M. RAFFI BARZALLY</span>
              <span className="text-[#CDB47D]">DEPOK 6.39°S 106.83°E</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
