import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, Award, Code2, Cpu, CheckCircle2 } from 'lucide-react';

const MEMORY_NODES = [
  {
    year: '2024',
    code: 'MEMORY NODE #01',
    title: 'Admission & Foundations',
    institution: 'SMK Taruna Bhakti (Depok, West Java)',
    dept: 'Software Engineering (RPL)',
    desc: 'Commenced software engineering discipline at SMK Taruna Bhakti. Mastered foundational algorithms, data structures, HTML5/CSS3 semantic systems, and relational database paradigms.',
    highlights: [
      'Data structure & algorithm fundamentals',
      'Relational database schema modeling',
      'Vanilla JavaScript ES6+ state handling',
    ],
    icon: GraduationCap,
    accent: '#CDB47D',
  },
  {
    year: '2025',
    code: 'MEMORY NODE #02',
    title: 'Systems & Multi-Platform Architecture',
    institution: 'SMK Taruna Bhakti RPL Laboratory',
    dept: 'Advanced Frontend & Mobile Development',
    desc: 'Expanded technical focus into React, React Native, Expo, and Node.js REST API architectures. Engineered production-grade systems including Project-ass (Portal Lapor).',
    highlights: [
      'React Native & Expo cross-platform apps',
      'Express.js RESTful controller routing',
      'RPL Competency Test score 89 & 87 certification',
    ],
    icon: Code2,
    accent: '#5FA8A3',
  },
  {
    year: '2026',
    code: 'MEMORY NODE #03',
    title: 'Production Systems & Configurator Engineering',
    institution: 'Independent & Project Deployment',
    dept: 'Frontend Systems & UI Engineering',
    desc: 'Deployed BuildForge PC configurator platform and modular architecture libraries (DDG). Specializing in React 19, Vite, clean code standards, and editorial UI design.',
    highlights: [
      'BuildForge TDP power configurator launch',
      'DDG open-source modular repository',
      'Advanced UI micro-interactions & codex layouts',
    ],
    icon: Cpu,
    accent: '#79C7BF',
  },
];

export default function ExperienceSection() {
  const [activeMemory, setActiveMemory] = useState(1); // Default node 02

  return (
    <section
      id="experience"
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
                05 // CONNECTED FLOATING MEMORIES
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Resonance <span className="italic text-[#79C7BF]">Memory Constellation.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Academic timeline and milestone records represented as interconnected floating memory nodes linked across space by light threads.
          </p>
        </motion.div>

        {/* Floating Connected Memory Nodes Display */}
        <div className="relative py-8">
          {/* Connecting Light Thread Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-[#5FA8A3]/20 via-[#CDB47D]/50 to-[#79C7BF]/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {MEMORY_NODES.map((mem, idx) => {
              const Icon = mem.icon;
              const isActive = activeMemory === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  onClick={() => setActiveMemory(idx)}
                  className={`codex-panel p-6 sm:p-8 cursor-pointer transition-all duration-500 relative flex flex-col justify-between space-y-6 ${
                    isActive
                      ? 'bg-[#18323B] border-[#5FA8A3] shadow-[0_0_30px_rgba(95,168,163,0.25)] scale-[1.02]'
                      : 'bg-[#102229]/80 border-[#B8F1E8]/12 hover:border-[#B8F1E8]/30 opacity-90'
                  }`}
                >
                  {/* Glowing Node Pulse Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-md"
                        style={{ backgroundColor: '#102229', borderColor: mem.accent, color: mem.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-space text-xs font-bold tracking-widest uppercase" style={{ color: mem.accent }}>
                        {mem.code}
                      </span>
                    </div>

                    <div className="font-garamond text-3xl font-bold text-[#EEF8F7]">
                      {mem.year}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-2">
                    <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                      {mem.title}
                    </h3>
                    <div className="font-space text-xs text-[#79C7BF]">
                      {mem.institution}
                    </div>
                    <div className="font-space text-[10px] text-[#CDB47D] uppercase tracking-wider">
                      {mem.dept}
                    </div>
                  </div>

                  {/* Memory Lore Description */}
                  <p className="font-outfit text-xs text-[#A8C5C3] leading-relaxed">
                    {mem.desc}
                  </p>

                  {/* Highlights List */}
                  <div className="pt-4 border-t border-[#B8F1E8]/12 space-y-2">
                    <span className="font-space text-[9px] tracking-widest text-[#CDB47D] uppercase block">
                      RESONANCE HIGHLIGHTS
                    </span>
                    <ul className="space-y-1.5 font-outfit text-xs text-[#EEF8F7]">
                      {mem.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5FA8A3] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
