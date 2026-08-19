import React from 'react';
import { BookOpen, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';
import { README_DATA, PROFILE } from '../data/portfolioData';

export default function ReadmeSection() {
  return (
    <section id="overview" className="gh-card overflow-hidden">
      {/* README Header Bar */}
      <div className="px-4 py-2.5 bg-[#21262d] border-b border-[#30363d] flex items-center justify-between font-mono text-xs text-[#8b949e]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#8b949e]" />
          <span className="font-semibold text-[#f0f6fc]">{README_DATA.header}</span>
        </div>
        <span className="text-[11px]">Markdown format</span>
      </div>

      {/* Markdown Body Content */}
      <div className="p-6 sm:p-8 space-y-6 text-sm text-[#c9d1d9] leading-relaxed">
        
        {/* Intro */}
        <div className="space-y-2 border-b border-[#30363d] pb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] font-sans flex items-center gap-2">
            <span>{README_DATA.intro}</span>
          </h2>
          <p className="text-sm text-[#8b949e]">
            {README_DATA.overview}
          </p>
        </div>

        {/* What I Build */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-[#f0f6fc] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#58a6ff]" />
            <span>What I Build</span>
          </h3>
          <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#c9d1d9] pl-2">
            {README_DATA.whatIBuild.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#3fb950] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Technologies Grid */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold text-[#f0f6fc] flex items-center gap-2">
            <Code className="w-4 h-4 text-[#58a6ff]" />
            <span>Current Technologies</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {README_DATA.techStack.map((group, idx) => (
              <div key={idx} className="p-3 bg-[#0d1117] border border-[#30363d] rounded-md space-y-2">
                <span className="font-mono text-xs font-semibold text-[#58a6ff]">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {group.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Interests */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-semibold text-[#f0f6fc] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d29922]" />
            <span>Development Interests</span>
          </h3>
          <ul className="space-y-1.5 font-sans text-xs text-[#8b949e] list-disc list-inside pl-2">
            {README_DATA.interests.map((interest, idx) => (
              <li key={idx}>
                <span className="text-[#c9d1d9]">{interest}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
