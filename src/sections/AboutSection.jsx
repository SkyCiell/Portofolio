import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Heart, Compass } from 'lucide-react';
import { IDENTITY, ABOUT_MODULES } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 bg-[#081014] border-t border-[#1E343E]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1E343E] pb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#BFA36A]" />
              <span className="font-space text-xs tracking-[0.25em] text-[#BFA36A] uppercase font-semibold">
                02 // MODULAR PROFILE CODEX
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Identity & <span className="italic text-[#6CA8A7]">Modular Specs.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-md">
            Modular overview of background, software engineering education, technical focus, and architectural philosophy.
          </p>
        </motion.div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Panel 1 (7 Cols): Introduction & Education */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-8"
          >
            {/* Introduction Module */}
            <div className="panel-surface p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#1E343E] pb-4">
                <User className="w-5 h-5 text-[#BFA36A]" />
                <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">INTRODUCTION</h3>
              </div>
              <p className="font-outfit text-sm text-[#8FA3AC] leading-relaxed">
                {IDENTITY.manifesto}
              </p>
            </div>

            {/* Education Module */}
            <div className="panel-surface p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1E343E] pb-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#6CA8A7]" />
                  <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">ACADEMIC EDUCATION</h3>
                </div>
                <span className="font-space text-xs text-[#BFA36A] font-semibold">
                  {ABOUT_MODULES.education.years}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-garamond text-xl font-bold text-[#EEF8F7]">
                  {ABOUT_MODULES.education.school}
                </h4>
                <div className="font-space text-xs text-[#6CA8A7] uppercase font-semibold">
                  {ABOUT_MODULES.education.major}
                </div>
                <p className="font-outfit text-xs text-[#8FA3AC] leading-relaxed">
                  {ABOUT_MODULES.education.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Panel 2 (5 Cols): Portrait Box & Caption */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="panel-surface p-5 w-full max-w-sm space-y-4">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#1E343E] bg-[#182730] relative group">
                <img
                  src={IDENTITY.portraitImg}
                  alt={IDENTITY.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="space-y-1 pt-1">
                <div className="font-space text-sm font-bold text-[#6CA8A7]">
                  {IDENTITY.captionFilename}
                </div>
                <div className="font-garamond text-sm italic text-[#8FA3AC]">
                  "{IDENTITY.captionQuote}"
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom 3-Column Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-surface p-6 space-y-4"
          >
            <div className="flex items-center gap-2 text-[#BFA36A]">
              <Target className="w-4 h-4" />
              <span className="font-space text-xs tracking-widest uppercase font-bold">CURRENT FOCUS</span>
            </div>
            <ul className="space-y-2 font-outfit text-xs text-[#8FA3AC]">
              {ABOUT_MODULES.focus.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6CA8A7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface p-6 space-y-4"
          >
            <div className="flex items-center gap-2 text-[#6CA8A7]">
              <Heart className="w-4 h-4" />
              <span className="font-space text-xs tracking-widest uppercase font-bold">INTERESTS</span>
            </div>
            <ul className="space-y-2 font-outfit text-xs text-[#8FA3AC]">
              {ABOUT_MODULES.interests.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8D8D3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Goals & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-surface p-6 space-y-4"
          >
            <div className="flex items-center gap-2 text-[#B8D8D3]">
              <Compass className="w-4 h-4" />
              <span className="font-space text-xs tracking-widest uppercase font-bold">GOALS & VISION</span>
            </div>
            <p className="font-outfit text-xs text-[#8FA3AC] leading-relaxed">
              {ABOUT_MODULES.goals}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


