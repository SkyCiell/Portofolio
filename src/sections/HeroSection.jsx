import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { IDENTITY, HERO_METADATA } from '../data/portfolioData';

export default function HeroSection({ onExplore, onContact }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] flex flex-col justify-between border-b border-[#2E2A24]/60 overflow-hidden lg:pl-28"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-12 relative z-10">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2E2A24]/60 pb-6 font-space-num text-xs"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#A97843] animate-pulse" />
            <span className="font-bold tracking-widest text-[#D4A96A] uppercase">
              PORTFOLIO
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#9E988E] font-mono-code text-[11px]">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#202020] border border-[#2E2A24] rounded-full text-[#F3EFE8]">
              <Compass className="w-3.5 h-3.5 text-[#A97843]" />
              {IDENTITY.coordinates}
            </span>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="my-auto py-6 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="space-y-2">
                <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
                  SOFTWARE ENGINEER & UI ARCHITECT
                </span>
                <h1 className="font-editorial-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.88] tracking-tight uppercase text-[var(--text-editorial)]">
                  M. RAFFI <br />
                  <span className="font-bold text-[#A97843] italic">BARZALLY</span>
                </h1>
              </div>

              <p className="font-sans text-base sm:text-xl text-[#D4A96A] font-medium tracking-wide uppercase pt-2 border-t border-[#2E2A24]/60 max-w-2xl">
                {IDENTITY.role}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#9E988E] leading-relaxed max-w-2xl font-normal">
                {IDENTITY.intro} Focused on modular architecture, editorial design precision, and refined interaction quality across web and cross-platform mobile ecosystems.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onExplore}
                  className="btn-editorial-bronze group"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onContact}
                  className="btn-editorial-outline group"
                >
                  <span>CONTACT ME</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#A97843]" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Profile Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="editorial-card p-3 relative group overflow-hidden border-bronze-glow">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#141414] border border-[#2E2A24]">
                  <img
                    src={IDENTITY.portraitImg}
                    alt={IDENTITY.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="pt-3 px-1 flex justify-between items-center font-space-num text-xs">
                  <span className="font-bold text-[#F3EFE8]">{IDENTITY.alias}</span>
                  <span className="text-[#A97843] font-mono-code font-semibold">RPL 2026</span>
                </div>
              </div>

              <div className="editorial-card p-5 space-y-3 font-space-num text-xs bg-[#202020]">
                <div className="flex items-center justify-between border-b border-[#2E2A24] pb-2 font-bold tracking-widest">
                  <span className="text-[#A97843] uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4A96A]" />
                    STATUS REPORT
                  </span>
                  <span className="text-[#D4A96A] font-mono-code">VERIFIED</span>
                </div>
                <p className="font-sans text-xs text-[#9E988E] leading-relaxed">
                  Student at <strong className="text-[#F3EFE8]">SMK Taruna Bhakti</strong> (RPL). Verified UKK competency scores: <strong className="text-[#D4A96A]">89 & 87</strong>.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-mono-code">
                  <span className="px-2.5 py-1 bg-[#181818] border border-[#2E2A24] text-[#F3EFE8] rounded">REACT 19</span>
                  <span className="px-2.5 py-1 bg-[#181818] border border-[#2E2A24] text-[#F3EFE8] rounded">REACT NATIVE</span>
                  <span className="px-2.5 py-1 bg-[#181818] border border-[#2E2A24] text-[#F3EFE8] rounded">EXPO</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-[#2E2A24]/60 pt-6"
        >
          {HERO_METADATA.map((meta, idx) => (
            <div
              key={idx}
              className="editorial-card p-4 space-y-2 hover:border-[#A97843] transition-colors"
            >
              <div className="font-space-num text-xs font-bold tracking-widest text-[#F3EFE8] uppercase">
                {meta.title}
              </div>
              <p className="font-sans text-xs text-[#9E988E] font-normal">
                {meta.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
