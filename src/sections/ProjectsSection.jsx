import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ExternalLink, Github, X, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section
      id="projects"
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
                03 // FEATURED SHOWCASE PANELS
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Selected <span className="italic text-[#6CA8A7]">Case Studies.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-md">
            Large showcase panels. Select any project to expand into a full case study overlay containing system architecture and technical solutions.
          </p>
        </motion.div>

        {/* Large Showcase Panels Layout */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedCaseStudy(project)}
              className="panel-surface p-6 sm:p-10 cursor-pointer group hover:border-[#6CA8A7]/50 transition-all space-y-8 relative overflow-hidden"
            >
              {/* Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E343E] pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-space text-xs font-bold text-[#BFA36A] uppercase tracking-widest">
                    {project.code}
                  </span>
                  <span className="text-[#1E343E]">•</span>
                  <span className="font-space text-xs text-[#8FA3AC]">
                    {project.subtitle}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-space text-[#6CA8A7] group-hover:translate-x-1 transition-transform">
                  <span>EXPAND CASE STUDY</span>
                  <ChevronRight className="w-4 h-4 text-[#BFA36A]" />
                </div>
              </div>

              {/* Grid: Preview & Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Preview Image */}
                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#1E343E] bg-[#081014] aspect-[16/10] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="font-garamond text-3xl sm:text-4xl font-bold text-[#EEF8F7] group-hover:text-[#B8D8D3] transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-outfit text-sm text-[#8FA3AC] leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="space-y-2">
                    <span className="font-space text-[10px] text-[#BFA36A] uppercase tracking-widest block font-semibold">
                      TECHNOLOGY SPECIFICATION
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-space text-[10px] text-[#6CA8A7] bg-[#182730] border border-[#1E343E] px-3 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#081014]/95 p-4 sm:p-8 lg:p-12 overflow-y-auto flex items-center justify-center select-text"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="panel-surface max-w-5xl w-full p-6 sm:p-10 my-auto relative border-2 border-[#6CA8A7]/40 shadow-2xl space-y-8"
            >
              {/* Top Bar */}
              <div className="flex items-start justify-between border-b border-[#1E343E] pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full bg-[#BFA36A]/15 border border-[#BFA36A] font-space text-[10px] font-bold text-[#BFA36A] uppercase">
                      {selectedCaseStudy.code}
                    </span>
                    <span className="font-space text-xs text-[#8FA3AC]">
                      {selectedCaseStudy.subtitle}
                    </span>
                  </div>
                  <h2 className="font-garamond text-3xl sm:text-5xl font-bold text-[#EEF8F7] mt-2">
                    {selectedCaseStudy.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-10 h-10 rounded-xl bg-[#182730] border border-[#1E343E] flex items-center justify-center text-[#EEF8F7] hover:border-[#BFA36A] hover:text-[#BFA36A] transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#1E343E] bg-[#111C22]">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                {/* Description & Solutions */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-space text-xs tracking-widest text-[#BFA36A] uppercase font-bold">
                      CASE STUDY DESCRIPTION
                    </h4>
                    <p className="font-outfit text-base text-[#EEF8F7] leading-relaxed">
                      {selectedCaseStudy.overview}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#182730] border border-[#1E343E] space-y-1">
                      <span className="font-space text-[10px] tracking-widest text-[#6CA8A7] uppercase font-bold block">
                        ENGINEERING CHALLENGE
                      </span>
                      <p className="font-outfit text-xs text-[#8FA3AC] leading-relaxed">
                        {selectedCaseStudy.challenges}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#182730] border border-[#6CA8A7]/40 space-y-1">
                      <span className="font-space text-[10px] tracking-widest text-[#B8D8D3] uppercase font-bold block">
                        ARCHITECTURAL SOLUTION
                      </span>
                      <p className="font-outfit text-xs text-[#EEF8F7] leading-relaxed">
                        {selectedCaseStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features & Actions */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="card-surface p-5 space-y-4">
                    <h4 className="font-space text-xs tracking-widest text-[#BFA36A] uppercase font-bold">
                      SYSTEM FEATURES
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedCaseStudy.features.map((feat, fIdx) => (
                        <li key={fIdx} className="font-outfit text-xs text-[#8FA3AC] flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#6CA8A7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-space text-[10px] tracking-widest text-[#8FA3AC] uppercase">
                      TECHNOLOGY SPECIFICATION
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCaseStudy.techStack.map((tech, idx) => (
                        <span key={idx} className="font-space text-[9px] font-bold text-[#B8D8D3] bg-[#182730] border border-[#1E343E] px-3 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={selectedCaseStudy.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4 text-[#6CA8A7]" />
                      LIVE DEMO
                    </a>
                    <a
                      href={selectedCaseStudy.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 justify-center"
                    >
                      <Github className="w-4 h-4 text-[#BFA36A]" />
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


