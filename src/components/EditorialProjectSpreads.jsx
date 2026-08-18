import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Terminal } from 'lucide-react';

export default function EditorialProjectSpreads({ projects = [], onSelectProject }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full bg-[var(--canvas)] text-[var(--text-editorial)]">
      {projects.map((project, idx) => (
        <article
          key={project.id || idx}
          className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 border-b border-[#2E2A24]/60 relative overflow-hidden group"
        >
          <div className="max-w-7xl mx-auto space-y-12 relative z-10">
            
            {/* Top Meta Strip */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#2E2A24]/60 pb-4 font-space-num text-xs uppercase tracking-widest gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A97843]" />
                <span className="text-[#D4A96A] font-semibold">
                  {project.subtitle}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#9E988E] font-mono-code text-[11px]">
                <span>STATUS: VERIFIED</span>
              </div>
            </div>

            {/* Custom Browser Chrome Frame Mockup with Image Preview */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="editorial-card overflow-hidden bg-[#202020] border-bronze-glow group/frame"
            >
              {/* Browser Chrome Header Strip */}
              <div className="px-5 py-3.5 bg-[#181818] border-b border-[#2E2A24] flex items-center justify-between font-mono-code text-xs text-[#9E988E]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                  <span className="ml-3 text-[11px] text-[#A97843] font-semibold hidden sm:inline">
                    project://{project.id}
                  </span>
                </div>
              </div>

              {/* Title & Interactive Preview Container */}
              <div className="p-8 sm:p-12 space-y-8">
                <h3
                  onClick={() => onSelectProject(project)}
                  className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase tracking-tight leading-[0.9] text-[#F3EFE8] group-hover/frame:text-[#D4A96A] transition-colors duration-300 cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Image & Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  {/* Image Display */}
                  <div className="lg:col-span-7 overflow-hidden rounded-xl bg-[#141414] border border-[#2E2A24] aspect-[16/9] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 group-hover/frame:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Highlights & Tech Tags */}
                  <div className="lg:col-span-5 space-y-6">
                    <p className="font-sans text-sm sm:text-base text-[#9E988E] leading-relaxed">
                      {project.overview}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="font-space-num text-xs font-bold text-[#A97843] uppercase tracking-widest block">
                        TECHNICAL STACK
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1 bg-[#181818] border border-[#2E2A24] font-space-num text-xs font-semibold text-[#F3EFE8] rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#2E2A24]">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="btn-editorial-bronze group/btn cursor-pointer"
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-editorial-outline p-3 rounded-full flex items-center justify-center cursor-pointer"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4 text-[#D4A96A]" />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-editorial-outline p-3 rounded-full flex items-center justify-center cursor-pointer"
                          title="Launch Live Application"
                        >
                          <ExternalLink className="w-4 h-4 text-[#D4A96A]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </article>
      ))}
    </div>
  );
}
