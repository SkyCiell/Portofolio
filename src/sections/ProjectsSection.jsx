import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import EditorialProjectSpreads from '../components/EditorialProjectSpreads';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative bg-[var(--canvas)] text-[var(--text-editorial)] border-b border-[#2E2A24]/60 lg:pl-28"
    >
      {/* Section Header */}
      <div className="py-20 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] border-b border-[#2E2A24]/60">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6"
        >
          <div>
            <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
              WORK
            </span>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl font-normal uppercase text-[var(--text-editorial)]">
              FEATURED <span className="font-bold text-[#A97843] italic">PROJECTS</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#9E988E] max-w-md font-normal leading-relaxed">
            Showcase of web applications, mobile platforms, audio tools, and open-source software systems.
          </p>
        </motion.div>
      </div>

      {/* Spreads Container */}
      <div className="relative">
        <EditorialProjectSpreads
          projects={PROJECTS}
          onSelectProject={setSelectedProject}
        />
      </div>

      {/* CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#181818]/95 p-4 sm:p-8 lg:p-12 overflow-y-auto flex items-center justify-center select-text backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-[#202020] text-[#F3EFE8] max-w-5xl w-full p-6 sm:p-10 my-auto relative border border-[#A97843]/40 rounded-2xl space-y-8 shadow-2xl"
            >
              {/* Overlay Navigation Bar */}
              <div className="flex items-start justify-between border-b border-[#2E2A24] pb-6">
                <div>
                  <h2 className="font-editorial-serif text-3xl sm:text-5xl font-semibold text-[#F3EFE8] uppercase mt-1">
                    {selectedProject.title}
                  </h2>
                  <p className="font-sans text-sm text-[#D4A96A] mt-1 font-medium">{selectedProject.subtitle}</p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 bg-[#181818] text-[#F3EFE8] hover:bg-[#A97843] border border-[#2E2A24] rounded-full transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Meta Grid Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-[#2E2A24] bg-[#181818] rounded-xl font-space-num text-xs">
                <div>
                  <span className="text-[#9E988E] block font-medium">AUTHOR</span>
                  <span className="font-bold text-[#F3EFE8]">M. RAFFI BARZALLY</span>
                </div>
                <div>
                  <span className="text-[#9E988E] block font-medium">INSTITUTION</span>
                  <span className="font-bold text-[#F3EFE8]">SMK TARUNA BHAKTI</span>
                </div>
                <div>
                  <span className="text-[#9E988E] block font-medium">VERIFICATION</span>
                  <span className="font-bold text-[#D4A96A]">VERIFIED UKK SCORES</span>
                </div>
                <div>
                  <span className="text-[#9E988E] block font-medium">STATUS</span>
                  <span className="font-bold text-[#A97843]">PRODUCTION READY</span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                {/* Left Column: Overview, Challenge, Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-space-num text-xs tracking-widest text-[#A97843] uppercase font-bold">
                      OVERVIEW
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-[#F3EFE8] leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 border border-[#2E2A24] bg-[#181818] rounded-xl space-y-2 border-l-2 border-l-[#A97843]">
                      <div className="flex items-center gap-2 font-space-num text-xs font-bold text-[#A97843] uppercase tracking-widest">
                        <ShieldAlert className="w-4 h-4 text-[#A97843]" />
                        ENGINEERING CHALLENGE
                      </div>
                      <p className="font-sans text-xs text-[#9E988E] leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div className="p-5 border border-[#2E2A24] bg-[#181818] rounded-xl space-y-2 border-l-2 border-l-[#D4A96A]">
                      <div className="flex items-center gap-2 font-space-num text-xs font-bold text-[#D4A96A] uppercase tracking-widest">
                        <Cpu className="w-4 h-4 text-[#D4A96A]" />
                        ARCHITECTURAL SOLUTION
                      </div>
                      <p className="font-sans text-xs text-[#F3EFE8] leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Features & Tech Spec */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="editorial-card p-6 space-y-4 bg-[#181818] rounded-xl">
                    <h4 className="font-space-num text-xs tracking-widest text-[#F3EFE8] uppercase font-bold border-b border-[#2E2A24] pb-2">
                      KEY SYSTEM FEATURES
                    </h4>
                    <ul className="space-y-3 font-sans text-xs text-[#9E988E]">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#A97843] shrink-0 mt-0.5" />
                          <span className="text-[#F3EFE8] font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-space-num text-xs tracking-widest text-[#9E988E] uppercase font-bold">
                      TECHNOLOGY SPECIFICATION
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1 bg-[#181818] border border-[#2E2A24] font-space-num text-xs font-semibold text-[#F3EFE8] rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#2E2A24]">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-bronze flex-1 justify-center rounded-full cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LIVE APPLICATION
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-outline flex-1 justify-center rounded-full cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-[#D4A96A]" />
                        GITHUB CODE
                      </a>
                    )}
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
