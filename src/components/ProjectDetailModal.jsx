import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, BookOpen, Layers, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-[#0d1117]/85 backdrop-blur-sm p-4 sm:p-6 lg:p-10 overflow-y-auto flex items-center justify-center select-text"
      >
        <motion.div
          initial={{ scale: 0.98, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.98, y: 15 }}
          transition={{ duration: 0.2 }}
          className="gh-card bg-[#161b22] text-[#f0f6fc] max-w-4xl w-full p-6 sm:p-8 my-auto relative border border-[#30363d] rounded-lg space-y-6 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between border-b border-[#30363d] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#8b949e]">
                <span>{project.fullName || `SkyCiell/${project.name}`}</span>
                <span className="px-2 py-0.5 text-[10px] border border-[#30363d] rounded-full">Public</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-[#58a6ff] font-sans">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#8b949e]">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="gh-btn p-2 rounded-full cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Actions Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[#0d1117] border border-[#30363d] rounded-md font-mono text-xs">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: project.languageColor || '#58a6ff' }}
              />
              <span className="text-[#f0f6fc] font-semibold">{project.language}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn-primary text-xs py-1 px-3"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn text-xs py-1 px-3"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Image Screenshot Preview (if available) */}
          {project.image && (
            <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117] aspect-[16/9] max-h-80 flex items-center justify-center p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Detailed Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            
            {/* Left Column: Overview, Challenge, Solution */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-[#58a6ff] uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#c9d1d9] leading-relaxed">
                  {project.longDescription || project.overview}
                </p>
              </div>

              {project.challenges && (
                <div className="p-4 bg-[#0d1117] border border-[#30363d] rounded-md space-y-1.5 border-l-2 border-l-[#d29922]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d29922]">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Engineering Challenge</span>
                  </div>
                  <p className="text-xs text-[#8b949e] leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-4 bg-[#0d1117] border border-[#30363d] rounded-md space-y-1.5 border-l-2 border-l-[#58a6ff]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#58a6ff]">
                    <Cpu className="w-4 h-4" />
                    <span>Architectural Solution</span>
                  </div>
                  <p className="text-xs text-[#c9d1d9] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Features & Stack */}
            <div className="lg:col-span-5 space-y-5">
              {project.features && project.features.length > 0 && (
                <div className="p-4 bg-[#0d1117] border border-[#30363d] rounded-md space-y-3">
                  <h4 className="text-xs font-mono font-semibold text-[#f0f6fc] border-b border-[#30363d] pb-2 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#3fb950]" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#8b949e]">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-[#c9d1d9]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-[#8b949e] uppercase">
                  Technology Specification
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
