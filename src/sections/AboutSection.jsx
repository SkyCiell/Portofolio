import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY, MANIFESTO_MODULES } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] border-b border-[#2E2A24]/60 lg:pl-28"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2E2A24]/60 pb-6">
          <div>
            <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
              ABOUT ME
            </span>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl font-normal uppercase text-[var(--text-editorial)]">
              PERSONAL <span className="font-bold text-[#A97843] italic">PHILOSOPHY</span>
            </h2>
          </div>
          <span className="font-mono-code text-xs text-[#9E988E]">
            LOCATION: DEPOK, INDONESIA
          </span>
        </div>

        {/* Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="editorial-card p-8 sm:p-12 border-bronze-glow bg-[#202020] relative overflow-hidden"
        >
          <div className="max-w-4xl space-y-6">
            <span className="font-editorial-serif text-6xl text-[#A97843] leading-none block select-none">
              “
            </span>
            <p className="font-editorial-serif text-2xl sm:text-4xl lg:text-5xl italic font-normal text-[#F3EFE8] leading-[1.15]">
              {IDENTITY.manifesto}
            </p>
            <div className="pt-4 flex items-center justify-between font-space-num text-xs border-t border-[#2E2A24]/60">
              <span className="text-[#A97843] font-bold uppercase tracking-widest">
                — M. RAFFI BARZALLY
              </span>
              <span className="text-[#9E988E] font-mono-code">RPL 2026</span>
            </div>
          </div>
        </motion.div>

        {/* Profile & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="editorial-card p-3 bg-[#202020] relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-[#141414] border border-[#2E2A24]">
                <img
                  src={IDENTITY.portraitImg}
                  alt={IDENTITY.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-4 px-2 space-y-2">
                <div className="flex justify-between items-center font-space-num text-xs font-bold text-[#F3EFE8]">
                  <span>{IDENTITY.name}</span>
                  <span className="text-[#A97843] font-mono-code">INDONESIA</span>
                </div>
                <p className="font-editorial-serif italic text-sm text-[#9E988E] border-t border-[#2E2A24]/60 pt-2">
                  "{IDENTITY.captionQuote}"
                </p>
              </div>
            </div>

            <div className="editorial-card p-6 space-y-3 font-space-num text-xs bg-[#202020]">
              <div className="flex justify-between border-b border-[#2E2A24] pb-2">
                <span className="text-[#9E988E]">INSTITUTION:</span>
                <span className="font-bold text-[#F3EFE8]">SMK Taruna Bhakti</span>
              </div>
              <div className="flex justify-between border-b border-[#2E2A24] pb-2">
                <span className="text-[#9E988E]">MAJOR:</span>
                <span className="font-bold text-[#F3EFE8]">Software Engineering (RPL)</span>
              </div>
              <div className="flex justify-between border-b border-[#2E2A24] pb-2">
                <span className="text-[#9E988E]">SPECIALIZATION:</span>
                <span className="font-bold text-[#A97843]">Frontend & Mobile Systems</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9E988E]">PRIMARY STACK:</span>
                <span className="font-bold text-[#D4A96A]">React 19 & React Native</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {MANIFESTO_MODULES.map((module) => (
              <div
                key={module.title}
                className="editorial-card p-6 space-y-3 hover:border-[#A97843] transition-colors bg-[#202020]"
              >
                <h3 className="font-editorial-serif text-2xl font-semibold text-[#F3EFE8] uppercase border-b border-[#2E2A24] pb-2">
                  {module.title}
                </h3>
                <p className="font-sans text-xs text-[#9E988E] leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
