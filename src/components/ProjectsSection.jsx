import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, Github, Layers, X, Sparkles, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

const PROJECTS = [
  {
    id: 'music-player',
    dossierCode: 'DOSSIER #001',
    classification: 'LEVEL S // AUDIO DOM',
    title: 'Web Music Player',
    tagline: 'Pemutar musik berbasis web dengan state audio real-time dan visual interaktif.',
    image: '../img\MusicPlayer-removebg-preview.png',
    tags: ['JAVASCRIPT ES6+', 'HTML5 AUDIO API', 'CSS ANIMATIONS', 'CUSTOM DOM STATE'],
    overview: 'Web-based interactive audio player built with raw JavaScript and HTML5 Audio API. Features custom playlist queue state, real-time seek bar calculation, and fluid aesthetic UI animations.',
    challenges: 'Synchronizing real-time track progress with Web Audio API events while preventing DOM re-renders and animation stutter during audio seeking.',
    solution: 'Engineered an event-driven audio listener system paired with lightweight CSS keyframes for 60fps waveform animation state.',
    features: [
      'Real-time seek bar seeking & track duration formatting',
      'Playlist queue management & track switching',
      'Audio volume control with smooth fade transitions',
      'Minimalist dark aesthetic UI layout',
    ],
    github: 'https://github.com/SkyCiell/MusicPlayer',
    demo: 'https://skyciell.github.io/Portofolio',
  },
  {
    id: 'buildforge',
    dossierCode: 'DOSSIER #002',
    classification: 'LEVEL S // FULLSTACK REACT',
    title: 'BuildForge Configurator',
    tagline: 'Platform konfigurator PC interaktif premium dengan kalkulasi watt TDP otomatis.',
    image: '/img/BuildForge.png',
    tags: ['REACT 19', 'EXPRESS.JS', 'MYSQL', 'VITE', 'REST API'],
    overview: 'Premium interactive PC building configurator designed for gamers & tech enthusiasts. Integrates real-time TDP wattage calculation and automated PSU power recommendation algorithms.',
    challenges: 'Validating motherboard socket compatibility across dozens of CPU and RAM generations dynamically without laggy database queries.',
    solution: 'Designed an optimized MySQL relational schema paired with express controller caching to calculate total build draw instantaneously.',
    features: [
      'Smart PSU TDP wattage calculator & bottleneck alerts',
      'Socket & form factor compatibility validation engine',
      'Real-time component price breakdown & budget tracker',
      'Build summary export & save system',
    ],
    github: 'https://github.com/SkyCiell/BuildForge',
    demo: 'https://github.com/SkyCiell/BuildForge',
  },
  {
    id: 'project-ass',
    dossierCode: 'DOSSIER #003',
    classification: 'LEVEL S // MULTI-PLATFORM',
    title: 'Project-ass (Portal Lapor)',
    tagline: 'Sistem pengaduan masyarakat fullstack multi-platform Web Admin & Mobile App.',
    image: '/img/Project-ass.png',
    tags: ['NEXT.JS', 'REACT NATIVE', 'EXPO', 'REST API', 'MYSQL'],
    overview: 'Comprehensive public civic reporting platform bridging web admin dashboards with mobile mobile applications for seamless ticket processing.',
    challenges: 'Maintaining real-time synchronization between municipal admin web dashboards and citizen mobile apps.',
    solution: 'Built a centralized REST API backend service powering unified Web and Mobile client endpoints with role-based JWT auth.',
    features: [
      'Citizen ticket creation with photo attachments & tags',
      'Web admin ticket assignment & priority status management',
      'Real-time ticket lifecycle status notifications',
      'Verified RPL competency score 87 certification system',
    ],
    github: 'https://github.com/SkyCiell/Project-ass',
    demo: 'https://github.com/SkyCiell/Project-ass',
  },
  {
    id: 'revera',
    dossierCode: 'DOSSIER #004',
    classification: 'LEVEL A // OPEN SOURCE',
    title: 'Revera Web Architecture',
    tagline: 'Repositori open-source arsitektur modular Revera untuk skalabilitas sistem.',
    image: '/img/jawajawa.png',
    tags: ['REACT', 'MODULAR CODE', 'GITHUB WORKFLOW', 'CLEAN ARCHITECTURE'],
    overview: 'Open-source modular architectural codebase designed for scalability, zero dependency overhead, and clean module separation.',
    challenges: 'Enforcing strict component decoupling boundaries while maintaining high developer usability.',
    solution: 'Created atomic file patterns and comprehensive architectural documentation for rapid integration.',
    features: [
      'Decoupled UI pattern library',
      'Zero-dependency utility helpers',
      'Standardized clean code conventions',
      'Community open-source repository',
    ],
    github: 'https://github.com/SkyCiell/Revera',
    demo: 'https://github.com/SkyCiell/Revera',
  },
];

export default function ProjectsSection() {
  const [selectedDossier, setSelectedDossier] = useState(null);

  return (
    <section
      id="projects"
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
                03 // FEATURED MISSION DOSSIERS
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Engineering <span className="italic text-[#79C7BF]">Dossier Vault.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Click any dossier record to unlock the full-screen tactical showcase featuring system architecture, tech stacks, and implementation case studies.
          </p>
        </motion.div>

        {/* Mission Dossier Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => setSelectedDossier(project)}
              className="codex-panel p-6 sm:p-8 codex-hover-glow cursor-pointer group flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Top Dossier Header Strip */}
              <div className="flex items-center justify-between border-b border-[#B8F1E8]/12 pb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#CDB47D]" />
                  <span className="font-space text-xs font-bold tracking-widest text-[#CDB47D]">
                    {project.dossierCode}
                  </span>
                </div>
                <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase px-2.5 py-1 rounded bg-[#18323B] border border-[#B8F1E8]/10">
                  {project.classification}
                </span>
              </div>

              {/* Laptop Image Screen Preview */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#B8F1E8]/15 bg-[#09161A] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#09161A]/40 group-hover:bg-transparent transition-colors" />

                {/* Overlaid Open Hover Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#18323B]/90 border border-[#5FA8A3] text-[#B8F1E8] font-space text-[10px] tracking-widest uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                  OPEN DOSSIER
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-garamond text-3xl font-bold text-[#EEF8F7] group-hover:text-[#B8F1E8] transition-colors">
                  {project.title}
                </h3>
                <p className="font-outfit text-sm text-[#A8C5C3] leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-space text-[9px] font-bold tracking-widest text-[#79C7BF] bg-[#18323B] border border-[#5FA8A3]/30 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-[#B8F1E8]/12 flex items-center justify-between text-xs font-space font-semibold text-[#B8F1E8]">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  INSPECT FULL DOSSIER <ChevronRight className="w-4 h-4 text-[#CDB47D]" />
                </span>
                <span className="text-[#A8C5C3]/60">CLICK TO UNLOCK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          FULL-SCREEN MISSION DOSSIER SHOWCASE OVERLAY MODAL
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedDossier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#09161A]/98 backdrop-blur-md p-4 sm:p-8 lg:p-12 overflow-y-auto flex items-center justify-center select-text"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="codex-panel max-w-5xl w-full p-6 sm:p-10 my-auto relative border-2 border-[#5FA8A3]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-8"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-start justify-between border-b border-[#B8F1E8]/15 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#CDB47D]/15 border border-[#CDB47D] font-space text-[10px] font-bold text-[#CDB47D] uppercase">
                      {selectedDossier.dossierCode}
                    </span>
                    <span className="font-space text-xs tracking-widest text-[#79C7BF] uppercase">
                      {selectedDossier.classification}
                    </span>
                  </div>
                  <h2 className="font-garamond text-3xl sm:text-5xl font-bold text-[#EEF8F7] mt-2">
                    {selectedDossier.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedDossier(null)}
                  className="w-11 h-11 rounded-xl bg-[#18323B] border border-[#B8F1E8]/20 flex items-center justify-center text-[#EEF8F7] hover:border-[#CDB47D] hover:text-[#CDB47D] transition-colors cursor-pointer"
                  aria-label="Close Dossier"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Hero Image Showcase */}
              <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#B8F1E8]/20 bg-[#102229] shadow-2xl">
                <img
                  src={selectedDossier.image}
                  alt={selectedDossier.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Dossier Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                {/* Left Column (7 Cols): Overview, Challenges, Solutions */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Tactical Overview */}
                  <div className="space-y-2">
                    <h4 className="font-space text-xs tracking-widest text-[#CDB47D] uppercase font-bold">
                      MISSION OVERVIEW
                    </h4>
                    <p className="font-outfit text-base text-[#EEF8F7] leading-relaxed">
                      {selectedDossier.overview}
                    </p>
                  </div>

                  {/* Challenges & Solution Split Cards */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#18323B]/80 border border-[#B8F1E8]/10 space-y-1">
                      <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase font-bold block">
                        ENGINEERING CHALLENGE
                      </span>
                      <p className="font-outfit text-xs text-[#A8C5C3] leading-relaxed">
                        {selectedDossier.challenges}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18323B]/80 border border-[#5FA8A3]/30 space-y-1">
                      <span className="font-space text-[10px] tracking-widest text-[#B8F1E8] uppercase font-bold block">
                        IMPLEMENTED SOLUTION
                      </span>
                      <p className="font-outfit text-xs text-[#EEF8F7] leading-relaxed">
                        {selectedDossier.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 Cols): Features & External Links */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Key Features List */}
                  <div className="codex-surface p-5 space-y-4">
                    <h4 className="font-space text-xs tracking-widest text-[#CDB47D] uppercase font-bold">
                      KEY SYSTEM FEATURES
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedDossier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="font-outfit text-xs text-[#A8C5C3] flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5FA8A3] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2">
                    <h4 className="font-space text-[10px] tracking-widest text-[#A8C5C3] uppercase">
                      TECHNOLOGY SPECIFICATION
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDossier.tags.map((tag, idx) => (
                        <span key={idx} className="font-space text-[9px] font-bold text-[#B8F1E8] bg-[#18323B] border border-[#5FA8A3]/40 px-3 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={selectedDossier.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-[#18323B] border border-[#5FA8A3] text-[#B8F1E8] font-space text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#21414A] hover:border-[#B8F1E8] transition-all"
                    >
                      <Github className="w-4 h-4 text-[#CDB47D]" />
                      GITHUB CODE
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
