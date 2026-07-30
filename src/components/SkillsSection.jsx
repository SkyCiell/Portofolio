import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Code, Smartphone, Database, GitBranch, Layers, CheckCircle2, ChevronRight } from 'lucide-react';

const TALENT_NODES = [
  {
    id: 'frontend',
    category: 'APEX SPECIALIZATION',
    title: 'Frontend Architecture & Ecosystems',
    level: 98,
    isApex: true,
    icon: Code,
    desc: 'Primary core competency. Building modern, lightning-fast UI applications with React 19, custom design tokens, responsive CSS grids, and smooth state updates.',
    skills: [
      { name: 'React 19 & Hooks', stat: 98, desc: 'Advanced component state, custom hooks, context API, performance optimization.' },
      { name: 'JavaScript (ES6+)', stat: 95, desc: 'Async/await, ES modules, DOM manipulation, state handling.' },
      { name: 'Vite & Build Tools', stat: 92, desc: 'HMR tooling, bundler config, asset optimization.' },
      { name: 'HTML5 & CSS3 Systems', stat: 96, desc: 'Semantic layout, CSS variables, Flexbox & Grid, keyframe animations.' },
    ],
  },
  {
    id: 'mobile',
    category: 'BRANCH TALENT',
    title: 'Mobile Systems & Cross-Platform',
    level: 90,
    isApex: false,
    icon: Smartphone,
    desc: 'Developing cross-platform mobile ecosystems connecting seamlessly with REST API microservices.',
    skills: [
      { name: 'React Native', stat: 90, desc: 'Cross-platform UI components, native navigation, mobile views.' },
      { name: 'Expo Framework', stat: 88, desc: 'Rapid mobile prototyping, device APIs, push notification workflows.' },
    ],
  },
  {
    id: 'backend',
    category: 'BRANCH TALENT',
    title: 'Backend Services & Database',
    level: 86,
    isApex: false,
    icon: Database,
    desc: 'Architecting RESTful APIs, routing controllers, and relational database schemas.',
    skills: [
      { name: 'Node.js & Express.js', stat: 86, desc: 'REST server routing, middleware controllers, JSON payloads.' },
      { name: 'MySQL Relational DB', stat: 85, desc: 'Database schema design, queries, table joins, foreign key relations.' },
    ],
  },
  {
    id: 'architecture',
    category: 'BRANCH TALENT',
    title: 'API & Engineering Standards',
    level: 92,
    isApex: false,
    icon: GitBranch,
    desc: 'Maintaining strict clean code paradigms, modular component separation, and version control.',
    skills: [
      { name: 'REST API Integration', stat: 94, desc: 'Async fetch/axios handling, JSON payload contracts, error handling.' },
      { name: 'Git & GitHub Workflow', stat: 92, desc: 'Version control, branch management, pull requests, release tagging.' },
      { name: 'Clean Modular Architecture', stat: 95, desc: 'Single-responsibility modules, reusable component libraries.' },
    ],
  },
];

export default function SkillsSection() {
  const [activeNodeId, setActiveNodeId] = useState('frontend');
  const activeNode = TALENT_NODES.find((n) => n.id === activeNodeId) || TALENT_NODES[0];

  return (
    <section
      id="skills"
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
                04 // ABILITY TREE & ATTRIBUTES
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Talent Nodes & <span className="italic text-[#CDB47D]">Competencies.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Interactive character ability tree. Select any node to inspect detailed attributes, technical progress rings, and engineering capabilities.
          </p>
        </motion.div>

        {/* Ability Tree Node Network Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Node Selection Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-space text-xs tracking-widest text-[#CDB47D] uppercase block mb-2">
              RESONANCE TALENT NODES
            </span>

            {TALENT_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = activeNodeId === node.id;
              return (
                <motion.button
                  key={node.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`w-full p-5 rounded-xl border text-left transition-all relative overflow-hidden flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#18323B] border-[#5FA8A3] shadow-[0_0_25px_rgba(95,168,163,0.2)] text-[#EEF8F7]'
                      : 'bg-[#102229] border-[#B8F1E8]/12 text-[#A8C5C3] hover:border-[#B8F1E8]/30 hover:bg-[#18323B]/50'
                  }`}
                >
                  {/* Apex indicator tag */}
                  {node.isApex && (
                    <span className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-[#CDB47D]/15 border border-[#CDB47D]/40 font-space text-[8px] tracking-widest text-[#CDB47D] uppercase">
                      PEAK APEX
                    </span>
                  )}

                  <div className="flex items-center gap-4">
                    {/* Ring progress mini badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative ${
                      isSelected ? 'bg-[#21414A] text-[#B8F1E8]' : 'bg-[#18323B] text-[#79C7BF]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="font-space text-[9px] tracking-widest text-[#CDB47D] uppercase block">
                        {node.category}
                      </span>
                      <h4 className="font-outfit text-base font-bold text-[#EEF8F7]">
                        {node.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-space text-sm font-bold text-[#79C7BF]">
                      {node.level}%
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#B8F1E8]' : 'text-[#A8C5C3]/40'}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Inspected Node Details & Stat Progress Rings */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="codex-panel p-6 sm:p-8 space-y-8"
              >
                {/* Active Node Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#B8F1E8]/12 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-[#CDB47D]" />
                      <span className="font-space text-xs tracking-widest text-[#CDB47D] uppercase font-bold">
                        {activeNode.category}
                      </span>
                    </div>
                    <h3 className="font-garamond text-3xl font-bold text-[#EEF8F7]">
                      {activeNode.title}
                    </h3>
                  </div>

                  {/* Circular Stat Ring */}
                  <div className="relative w-16 h-16 rounded-full bg-[#18323B] border border-[#5FA8A3]/30 flex items-center justify-center shadow-lg">
                    <span className="font-space text-lg font-bold text-[#B8F1E8]">
                      {activeNode.level}<span className="text-xs text-[#79C7BF]">%</span>
                    </span>
                  </div>
                </div>

                {/* Node Overview Lore / Desc */}
                <p className="font-outfit text-sm text-[#A8C5C3] leading-relaxed">
                  {activeNode.desc}
                </p>

                {/* Skill Item Progress Indicator List */}
                <div className="space-y-6 pt-2">
                  <h4 className="font-space text-xs tracking-widest text-[#79C7BF] uppercase font-semibold">
                    SUB-ROUTINE ATTRIBUTES & PROFICIENCY
                  </h4>

                  <div className="space-y-5">
                    {activeNode.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2 p-4 rounded-xl bg-[#18323B]/70 border border-[#B8F1E8]/10">
                        <div className="flex items-center justify-between">
                          <span className="font-outfit text-sm font-bold text-[#EEF8F7] flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#5FA8A3]" />
                            {skill.name}
                          </span>
                          <span className="font-space text-xs font-bold text-[#CDB47D]">
                            {skill.stat}%
                          </span>
                        </div>

                        <p className="font-outfit text-xs text-[#A8C5C3]">
                          {skill.desc}
                        </p>

                        {/* Animated Progress Bar */}
                        <div className="w-full h-1.5 bg-[#102229] rounded-full overflow-hidden mt-2 border border-[#B8F1E8]/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.stat}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                            className="h-full bg-[#5FA8A3] shadow-[0_0_10px_#5FA8A3]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
