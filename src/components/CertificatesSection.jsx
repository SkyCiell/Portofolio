import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Eye, X, Sparkles, Star } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 'ecommerce',
    badgeCode: 'BADGE #001',
    title: 'RPL Competency Test — E-Commerce Systems',
    score: 89,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    date: '2025',
    category: 'VERIFIED HIGH DISTINCTION',
    desc: 'Verified industry-standard certification for designing, architecting, and deploying structured E-Commerce web platforms with database relationship management.',
    skillsVerified: [
      'Relational E-Commerce Database Modeling',
      'Shopping Cart & Product Catalog State',
      'Transaction Security & Checkout Routing',
      'Responsive Web UI Standards',
    ],
  },
  {
    id: 'multiplatform',
    badgeCode: 'BADGE #002',
    title: 'RPL Competency Test — Multi-Platform Systems',
    score: 87,
    maxScore: 100,
    issuer: 'SMK Taruna Bhakti (Industry Verification)',
    date: '2025',
    category: 'VERIFIED HIGH DISTINCTION',
    desc: 'Verified competency certification for engineering the Portal Lapor civic complaint system spanning Mobile Applications (React Native/Expo) and REST API backend integration.',
    skillsVerified: [
      'React Native & Mobile App Architecture',
      'RESTful API Microservice Endpoint Design',
      'Geo-location Tagging & Media Attachments',
      'Role-based JWT Authentication Pipelines',
    ],
  },
];

export default function CertificatesSection() {
  const [inspectedCert, setInspectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-24 px-4 sm:px-8 lg:pl-28 lg:pr-12 bg-codex-grid border-t border-[#B8F1E8]/12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B8F1E8]/12 pb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#CDB47D]" />
              <span className="font-space text-xs tracking-[0.25em] text-[#CDB47D] uppercase">
                06 // COLLECTIBLE BADGE VAULT
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Verified <span className="italic text-[#CDB47D]">Certifications.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Collectible achievement badges stored inside the archive drawer. Select any badge slot to inspect verified examination scores and technical criteria.
          </p>
        </motion.div>

        {/* Collectible Badge Archive Drawer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setInspectedCert(cert)}
              className="codex-panel p-6 sm:p-8 codex-hover-glow cursor-pointer group flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Top Slot Header */}
              <div className="flex items-center justify-between border-b border-[#B8F1E8]/12 pb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#CDB47D]" />
                  <span className="font-space text-xs font-bold tracking-widest text-[#CDB47D]">
                    {cert.badgeCode}
                  </span>
                </div>
                <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase px-2.5 py-1 rounded bg-[#18323B] border border-[#5FA8A3]/30">
                  {cert.date} VERIFIED
                </span>
              </div>

              {/* Badge Visual Slot */}
              <div className="codex-surface p-6 flex items-center justify-between gap-6 border-l-4 border-l-[#CDB47D]">
                <div className="space-y-2">
                  <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase block">
                    {cert.issuer}
                  </span>
                  <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7] group-hover:text-[#B8F1E8] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Score Medallion */}
                <div className="w-20 h-20 rounded-2xl bg-[#102229] border-2 border-[#CDB47D] flex flex-col items-center justify-center shrink-0 shadow-[0_0_20px_rgba(205,180,125,0.2)]">
                  <span className="font-garamond text-3xl font-bold text-[#CDB47D] leading-none">
                    {cert.score}
                  </span>
                  <span className="font-space text-[9px] text-[#A8C5C3] mt-0.5">/ {cert.maxScore}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-outfit text-xs text-[#A8C5C3] leading-relaxed">
                {cert.desc}
              </p>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-[#B8F1E8]/12 flex items-center justify-between text-xs font-space font-semibold text-[#B8F1E8]">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  INSPECT BADGE DETAILS <Eye className="w-4 h-4 text-[#CDB47D]" />
                </span>
                <span className="text-[#CDB47D]">STATUS: VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BADGE INSPECTION MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {inspectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#09161A]/98 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center select-text"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="codex-panel max-w-2xl w-full p-6 sm:p-8 border-2 border-[#CDB47D]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-6 relative"
            >
              {/* Header Bar */}
              <div className="flex items-start justify-between border-b border-[#B8F1E8]/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#18323B] border border-[#CDB47D] flex items-center justify-center text-[#CDB47D]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-space text-xs font-bold text-[#CDB47D] uppercase tracking-widest block">
                      {inspectedCert.badgeCode} • {inspectedCert.category}
                    </span>
                    <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                      {inspectedCert.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setInspectedCert(null)}
                  className="w-10 h-10 rounded-xl bg-[#18323B] border border-[#B8F1E8]/20 flex items-center justify-center text-[#EEF8F7] hover:border-[#CDB47D] hover:text-[#CDB47D] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Score Highlight Box */}
              <div className="codex-surface p-5 flex items-center justify-between border-l-4 border-l-[#5FA8A3]">
                <div>
                  <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase block">
                    VERIFIED SCORE GRADE
                  </span>
                  <div className="font-garamond text-4xl font-bold text-[#CDB47D]">
                    {inspectedCert.score} <span className="text-sm font-normal text-[#A8C5C3]">/ 100 POINTS</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-space text-xs text-[#EEF8F7] block font-bold">
                    {inspectedCert.issuer}
                  </span>
                  <span className="font-space text-[10px] text-[#A8C5C3]">
                    TEST YEAR: {inspectedCert.date}
                  </span>
                </div>
              </div>

              {/* Verified Criteria List */}
              <div className="space-y-3">
                <h4 className="font-space text-xs tracking-widest text-[#CDB47D] uppercase font-bold">
                  VERIFIED EVALUATION CRITERIA
                </h4>
                <ul className="space-y-2">
                  {inspectedCert.skillsVerified.map((skill, sIdx) => (
                    <li key={sIdx} className="font-outfit text-xs text-[#EEF8F7] flex items-center gap-2.5 p-2.5 rounded-lg bg-[#18323B]/60 border border-[#B8F1E8]/10">
                      <CheckCircle2 className="w-4 h-4 text-[#5FA8A3] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-[#B8F1E8]/12 flex justify-end">
                <button
                  onClick={() => setInspectedCert(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#18323B] border border-[#CDB47D] text-[#CDB47D] font-space text-xs tracking-wider uppercase font-bold hover:bg-[#21414A] transition-colors cursor-pointer"
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
