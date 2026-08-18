import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#0A0A0C] text-[#F0F0F2] border-b border-[#1F2026]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#1F2026] pb-6"
        >
          <div>
            <h2 className="font-display-tall text-4xl sm:text-6xl font-extrabold text-[#F0F0F2] uppercase tracking-tight leading-none">
              VERIFIED <span className="text-[#3B82F6]">CERTIFICATIONS.</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#8A8B92] max-w-md font-normal leading-relaxed">
            Industry competency test certifications evaluated by SMK Taruna Bhakti RPL department.
          </p>
        </motion.div>

        {/* Horizontal List Ledger */}
        <div className="space-y-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="editorial-card p-6 sm:p-8 space-y-6 border border-[#1F2026] hover:border-[#2C2D36] bg-[#121316] rounded-2xl transition-all"
            >
              {/* Header Strip */}
              <div className="flex items-center justify-between border-b border-[#1F2026] pb-4 font-space-num text-xs font-semibold">
                <span className="text-[#8A8B92] uppercase font-mono-code">{cert.issuer}</span>
                <div className="flex items-center gap-4">
                  <span className="text-[#8A8B92]">YEAR: {cert.year}</span>
                  <span className="px-3.5 py-1 bg-[#0A0A0C] border border-[#1F2026] text-[#3B82F6] font-mono-code font-bold rounded-full">
                    SCORE: {cert.score}/{cert.maxScore}
                  </span>
                </div>
              </div>

              {/* Title & Description Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display-tall text-2xl sm:text-3xl font-bold text-[#F0F0F2] uppercase tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-sm text-[#8A8B92] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Relevant Skills / Evaluated Criteria */}
                <div className="lg:col-span-6 space-y-3 bg-[#0A0A0C] p-4.5 border border-[#1F2026] rounded-xl">
                  <span className="font-space-num text-xs font-semibold text-[#3B82F6] uppercase tracking-widest block">
                    EVALUATED COMPETENCIES & SKILLS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cert.criteria.map((crit, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 font-sans text-xs text-[#F0F0F2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
