import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ChevronDown, Radio, Terminal, Award } from 'lucide-react';

export default function HeroSection({ onExplore, onContact }) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const specializations = [
    'React & Frontend Systems Architect.',
    'Mobile Cross-Platform Developer.',
    'UI/UX Engineering & Aesthetics.',
  ];

  useEffect(() => {
    const targetText = specializations[typingIndex];
    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === targetText) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % specializations.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? targetText.substring(0, currentText.length - 1)
          : targetText.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 lg:pl-28 lg:pr-12 bg-codex-grid overflow-hidden"
    >
      {/* Top Telemetry Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-[#B8F1E8]/12 pb-4 z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5FA8A3] shadow-[0_0_10px_#5FA8A3] animate-soft-pulse" />
          <span className="font-space text-xs tracking-[0.2em] text-[#CDB47D] uppercase font-semibold">
            STATUS: ACTIVE RESONANCE
          </span>
          <span className="text-[#B8F1E8]/20">•</span>
          <span className="font-space text-xs tracking-wider text-[#A8C5C3]">
            CLASS: FRONTEND ARCHITECT
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-space text-[#A8C5C3]">
          <span className="px-3 py-1 rounded-full bg-[#102229] border border-[#5FA8A3]/30 text-[#79C7BF]">
            RPL @ SMK TARUNA BHAKTI
          </span>
          <span className="hidden md:inline text-[#CDB47D]">ISSUE NO. 01 — 2026</span>
        </div>
      </motion.div>

      {/* Main Center Stage - Centered Character Portrait Codex */}
      <div className="my-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 max-w-7xl mx-auto w-full">
        {/* Left Column: Title & Specialization */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex-1 text-left space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#102229] border border-[#B8F1E8]/15 shadow-inner">
            <Sparkles className="w-4 h-4 text-[#CDB47D]" />
            <span className="font-space text-xs tracking-widest text-[#79C7BF] uppercase font-medium">
              CHARACTER CODEX ARCHIVE
            </span>
          </div>

          {/* Name Display Header */}
          <div className="space-y-2">
            <h1 className="font-garamond text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] text-[#EEF8F7]">
              M. Raffi <br />
              <span className="font-normal italic text-[#CDB47D]">Barzally.</span>
            </h1>
            <p className="font-space text-xs tracking-[0.25em] text-[#5FA8A3] uppercase pt-2">
              SOFTWARE ENGINEER & UI SYSTEMS ARCHITECT
            </p>
          </div>

          {/* Bio Text */}
          <p className="font-outfit text-base sm:text-lg text-[#A8C5C3] leading-relaxed max-w-xl">
            RPL student at SMK Taruna Bhakti focused on Frontend Engineering & Mobile Systems Development. Crafting modular web ecosystems with pristine architecture and calm eastern fantasy aesthetics.
          </p>

          {/* Dynamic Typing Display Box */}
          <div className="codex-surface p-4 border-l-2 border-l-[#5FA8A3] flex items-center justify-between gap-4 max-w-lg">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-[#5FA8A3] shrink-0" />
              <div>
                <span className="text-[10px] font-space text-[#CDB47D] tracking-widest uppercase block">
                  CURRENT SPECIALIZATION
                </span>
                <span className="font-garamond text-lg italic text-[#EEF8F7]">
                  {currentText}
                  <span className="animate-pulse text-[#5FA8A3]">|</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExplore}
              className="px-6 py-3.5 rounded-xl bg-[#18323B] border border-[#5FA8A3] text-[#B8F1E8] font-space text-xs tracking-widest font-semibold uppercase hover:bg-[#21414A] hover:border-[#B8F1E8] hover:shadow-[0_0_20px_rgba(95,168,163,0.3)] transition-all flex items-center gap-2 group"
            >
              <Shield className="w-4 h-4 text-[#CDB47D] group-hover:rotate-12 transition-transform" />
              INSPECT CHARACTER PROFILE
            </button>
            <button
              onClick={onContact}
              className="px-6 py-3.5 rounded-xl bg-[#102229] border border-[#B8F1E8]/15 text-[#EEF8F7] font-space text-xs tracking-widest font-semibold uppercase hover:border-[#CDB47D] hover:text-[#CDB47D] transition-all flex items-center gap-2"
            >
              <Radio className="w-4 h-4 text-[#79C7BF]" />
              ESTABLISH TRANSMISSION
            </button>
          </div>
        </motion.div>

        {/* Right Column: Character Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center shrink-0 w-full sm:w-[420px]"
        >
          {/* Centered Character Portrait Frame */}
          <div className="relative w-72 sm:w-80 h-96 sm:h-[440px] rounded-2xl bg-[#102229] border border-[#B8F1E8]/20 overflow-hidden shadow-2xl group">
            {/* Image */}
            <img
              src="/img/Rapiganteng1.jpeg"
              alt="M. Raffi Barzally — Character Portrait"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlaid Subtle Shadow Framing */}
            <div className="absolute inset-0 border border-[#5FA8A3]/20 rounded-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09161A]/90 via-transparent to-transparent" />

            {/* Bottom Character ID Card Tag */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#09161A]/90 border border-[#B8F1E8]/15 backdrop-blur-xs flex items-center justify-between">
              <div>
                <span className="font-space text-[10px] tracking-widest text-[#CDB47D] uppercase block">
                  FILE: RAPIGANTENG1.JPEG
                </span>
                <span className="font-garamond text-sm text-[#EEF8F7] font-medium">
                  M. Raffi Barzally
                </span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-[#18323B] border border-[#5FA8A3]/30 flex items-center justify-center text-[#79C7BF]">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Ticker Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="border-t border-[#B8F1E8]/12 pt-4 flex flex-wrap items-center justify-between gap-4 z-10 text-xs font-space text-[#A8C5C3]"
      >
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-2 text-[#EEF8F7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5FA8A3]" /> REACT 19
          </span>
          <span className="flex items-center gap-2 text-[#EEF8F7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#79C7BF]" /> REACT NATIVE
          </span>
          <span className="flex items-center gap-2 text-[#EEF8F7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CDB47D]" /> VITE & EXPRESS
          </span>
          <span className="flex items-center gap-2 text-[#EEF8F7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8F1E8]" /> MYSQL & REST API
          </span>
        </div>

        <button
          onClick={onExplore}
          className="flex items-center gap-2 text-[#CDB47D] hover:text-[#B8F1E8] transition-colors cursor-pointer"
        >
          <span>SCROLL FOR CODEX</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
