import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { ACADEMIC_TIMELINE, COMPETENCY_SCORES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="resume"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] border-b border-[#2E2A24]/60 lg:pl-28"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#2E2A24]/60 pb-6"
        >
          <div>
            <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
              EXPERIENCE & CREDENTIALS
            </span>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl font-normal uppercase text-[var(--text-editorial)]">
              ACADEMIC <span className="font-bold text-[#A97843] italic">EXPERIENCE</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#9E988E] max-w-md font-normal leading-relaxed">
            Software Engineering (RPL) education at SMK Taruna Bhakti Depok and verified competency certifications.
          </p>
        </motion.div>

        {/* 1. VERIFIED UKK COMPETENCY TEST SCORES CARDS */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-space-num text-xs font-bold text-[#A97843] uppercase tracking-widest border-b border-[#2E2A24] pb-3">
            <Award className="w-4 h-4 text-[#D4A96A]" />
            <span>VERIFIED COMPETENCY CERTIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COMPETENCY_SCORES.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="editorial-card p-6 sm:p-8 space-y-6 bg-[#202020] rounded-xl border border-[#2E2A24] hover:border-[#A97843] transition-all flex flex-col justify-between"
              >
                {/* Score Header Strip */}
                <div className="flex items-center justify-between border-b border-[#2E2A24] pb-4 font-space-num text-xs">
                  <span className="text-[#9E988E] uppercase font-mono-code">UKK CERTIFICATION</span>
                  <div className="px-3.5 py-1 bg-[#181818] border border-[#A97843]/50 text-[#D4A96A] font-mono-code font-bold rounded-md">
                    SCORE: {cert.score} / {cert.maxScore}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-editorial-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE8] uppercase">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-xs text-[#9E988E] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Evaluated Criteria */}
                <div className="p-4 bg-[#181818] border border-[#2E2A24] rounded-lg space-y-2.5">
                  <span className="font-space-num text-[11px] font-bold text-[#A97843] uppercase tracking-widest block">
                    EVALUATED COMPETENCIES:
                  </span>
                  <div className="space-y-2">
                    {cert.criteria.map((crit, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 font-sans text-xs text-[#F3EFE8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A97843] shrink-0 mt-0.5" />
                        <span>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-between font-mono-code text-[11px] text-[#9E988E] border-t border-[#2E2A24]">
                  <span>ISSUER: {cert.issuer}</span>
                  <span>YEAR: {cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. ACADEMIC JOURNEY TIMELINE */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3 font-space-num text-xs font-bold text-[#A97843] uppercase tracking-widest border-b border-[#2E2A24] pb-3">
            <GraduationCap className="w-4 h-4 text-[#D4A96A]" />
            <span>ACADEMIC TIMELINE</span>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-[1px] before:bg-[#2E2A24]">
            {ACADEMIC_TIMELINE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-10 sm:pl-16 space-y-4"
              >
                {/* Marker Dot */}
                <div className="absolute left-[12px] sm:left-[28px] top-4 w-3 h-3 bg-[#A97843] rounded-full border-2 border-[#181818]" />

                <div className="editorial-card p-6 sm:p-8 space-y-4 bg-[#202020] rounded-xl border border-[#2E2A24] hover:border-[#A97843] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2E2A24] pb-3 font-space-num text-xs">
                    <span className="bg-[#181818] border border-[#2E2A24] text-[#D4A96A] px-3.5 py-1 rounded font-mono-code font-bold">
                      {exp.year}
                    </span>
                    <span className="text-[#A97843] uppercase tracking-widest font-semibold">
                      {exp.department}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE8] uppercase">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-xs font-semibold text-[#D4A96A]">
                      {exp.organization}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#9E988E] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-[#2E2A24] flex flex-wrap gap-2">
                    {exp.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-3.5 py-1 bg-[#181818] border border-[#2E2A24] font-space-num text-xs text-[#F3EFE8] rounded-md"
                      >
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
