import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Eye, X } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export default function CertificatesSection() {
  const [inspectedCert, setInspectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 bg-[#081014] border-t border-[#1E343E]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
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
                06 // ARCHIVE SHELF VAULT
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Verified <span className="italic text-[#BFA36A]">Certifications Shelf.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-md">
            Archive shelf storing verified RPL competency examination certificates. Select any item to inspect technical score metrics.
          </p>
        </motion.div>

        {/* Shelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setInspectedCert(cert)}
              className="panel-surface p-6 sm:p-8 cursor-pointer group hover:border-[#BFA36A]/50 transition-colors space-y-6 flex flex-col justify-between"
            >
              {/* Item Header */}
              <div className="flex items-center justify-between border-b border-[#1E343E] pb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#BFA36A]" />
                  <span className="font-space text-xs font-bold text-[#BFA36A] uppercase tracking-widest">
                    {cert.code}
                  </span>
                </div>
                <span className="font-space text-[10px] text-[#6CA8A7] bg-[#182730] px-2.5 py-1 rounded border border-[#1E343E]">
                  YEAR {cert.year}
                </span>
              </div>

              {/* Item Body */}
              <div className="card-surface p-5 flex items-center justify-between gap-6 border-l-4 border-l-[#BFA36A]">
                <div className="space-y-1">
                  <span className="font-space text-[10px] text-[#6CA8A7] uppercase block font-semibold">
                    {cert.issuer}
                  </span>
                  <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7] group-hover:text-[#B8D8D3] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Score Badge */}
                <div className="w-16 h-16 rounded-xl bg-[#111C22] border border-[#BFA36A] flex flex-col items-center justify-center shrink-0">
                  <span className="font-garamond text-2xl font-bold text-[#BFA36A] leading-none">
                    {cert.score}
                  </span>
                  <span className="font-space text-[8px] text-[#8FA3AC]">/ {cert.maxScore}</span>
                </div>
              </div>

              <p className="font-outfit text-xs text-[#8FA3AC] leading-relaxed">
                {cert.description}
              </p>

              <div className="pt-4 border-t border-[#1E343E] flex items-center justify-between text-xs font-space text-[#B8D8D3]">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  INSPECT SHELF ITEM <Eye className="w-4 h-4 text-[#BFA36A]" />
                </span>
                <span className="text-[#BFA36A] font-semibold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* INSPECTION MODAL */}
      <AnimatePresence>
        {inspectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#081014]/95 p-4 sm:p-8 flex items-center justify-center select-text"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="panel-surface max-w-2xl w-full p-6 sm:p-8 border-2 border-[#BFA36A]/50 shadow-2xl space-y-6 relative"
            >
              <div className="flex items-start justify-between border-b border-[#1E343E] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#182730] border border-[#BFA36A] flex items-center justify-center text-[#BFA36A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-space text-xs font-bold text-[#BFA36A] uppercase tracking-widest block">
                      {inspectedCert.code}
                    </span>
                    <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                      {inspectedCert.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setInspectedCert(null)}
                  className="w-9 h-9 rounded-lg bg-[#182730] border border-[#1E343E] flex items-center justify-center text-[#EEF8F7] hover:border-[#BFA36A] hover:text-[#BFA36A] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="card-surface p-5 flex items-center justify-between border-l-4 border-l-[#6CA8A7]">
                <div>
                  <span className="font-space text-[10px] text-[#6CA8A7] uppercase block font-semibold">
                    VERIFIED EXAMINATION SCORE
                  </span>
                  <div className="font-garamond text-3xl font-bold text-[#BFA36A]">
                    {inspectedCert.score} <span className="text-xs font-normal text-[#8FA3AC]">/ {inspectedCert.maxScore} POINTS</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-space text-xs text-[#EEF8F7] block font-bold">
                    {inspectedCert.issuer}
                  </span>
                  <span className="font-space text-[10px] text-[#8FA3AC]">
                    YEAR {inspectedCert.year}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-space text-xs tracking-widest text-[#BFA36A] uppercase font-bold">
                  EVALUATION CRITERIA VERIFIED
                </h4>
                <ul className="space-y-2">
                  {inspectedCert.criteria.map((crit, cIdx) => (
                    <li key={cIdx} className="font-outfit text-xs text-[#EEF8F7] flex items-center gap-2.5 p-2.5 rounded-lg bg-[#182730] border border-[#1E343E]">
                      <CheckCircle2 className="w-4 h-4 text-[#6CA8A7] shrink-0" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1E343E] flex justify-end">
                <button
                  onClick={() => setInspectedCert(null)}
                  className="btn-primary"
                >
                  CLOSE INSPECTION
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

