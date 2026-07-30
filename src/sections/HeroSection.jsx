import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Radio } from 'lucide-react';
import { IDENTITY, TELEMETRY_STRIP } from '../data/portfolioData';

export default function HeroSection({ onExplore, onContact }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-16 bg-[#081014] flex flex-col justify-between"
    >
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (7 Cols): Title, Subtitle, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8 z-10"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111C22] border border-[#1E343E]">
            <span className="w-2 h-2 rounded-full bg-[#6CA8A7]" />
            <span className="font-space text-xs tracking-widest text-[#B8D8D3] uppercase font-medium">
              PORTFOLIO & PROFILE
            </span>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="font-garamond text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] text-[#EEF8F7]">
              M. Raffi <br />
              <span className="font-normal italic text-[#BFA36A]">Barzally.</span>
            </h1>
            <p className="font-space text-xs tracking-[0.25em] text-[#6CA8A7] uppercase pt-2">
              SOFTWARE ENGINEER & UI SYSTEMS ARCHITECT
            </p>
          </div>

          {/* Subtitle */}
          <p className="font-outfit text-base sm:text-lg text-[#8FA3AC] leading-relaxed max-w-xl">
            RPL student at SMK Taruna Bhakti focused on Frontend Engineering & Mobile Systems Development. Crafting modular web ecosystems with refined editorial layout composition.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExplore}
              className="btn-primary cursor-pointer"
            >
              <Shield className="w-4 h-4 text-[#BFA36A]" />
              <span>EXPLORE PROFILE CODEX</span>
            </button>
            <button
              onClick={onContact}
              className="btn-secondary cursor-pointer"
            >
              <Radio className="w-4 h-4 text-[#6CA8A7]" />
              <span>SEND TRANSMISSION</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column (5 Cols): Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Browser Window Mockup */}
          <div className="relative z-10 w-full max-w-md rounded-xl bg-[#111C22] border border-[#1E343E] shadow-2xl overflow-hidden hover:border-[#6CA8A7]/50 transition-colors">
            {/* Browser Top Bar */}
            <div className="px-4 py-2.5 bg-[#182730] border-b border-[#1E343E] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
              </div>
              <div className="font-space text-[10px] text-[#8FA3AC] tracking-widest uppercase">
                FEATURED WORK // BUILDFORGE.PNG
              </div>
              <div className="w-4" />
            </div>

            {/* Content Image */}
            <div className="aspect-[16/10] overflow-hidden bg-[#081014] relative group">
              <img
                src="/img/BuildForge-removebg-preview.png"
                alt="BuildForge PC Configurator Preview"
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Telemetry Strip */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto w-full pt-12 border-t border-[#1E343E] grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {TELEMETRY_STRIP.map((item, idx) => (
          <div key={idx} className="panel-surface p-4 space-y-1">
            <span className="font-space text-[9px] tracking-widest text-[#BFA36A] uppercase block font-semibold">
              {item.label}
            </span>
            <span className="font-outfit text-sm font-medium text-[#EEF8F7] block">
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}


