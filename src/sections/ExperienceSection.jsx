import React from 'react';
import { Clock, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Clock className="w-4 h-4 text-[#58a6ff]" />
          <span>Experience</span>
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Activity timeline</span>
      </div>

      {/* Developer Activity Timeline */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-[#30363d] pl-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative space-y-3">
            {/* Timeline Dot */}
            <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#58a6ff] border-2 border-[#0d1117]" />

            <div className="gh-card p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#30363d]/60 pb-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-[#58a6ff]" />
                  <span className="font-sans text-sm font-bold text-[#f0f6fc]">
                    {exp.role}
                  </span>
                </div>
                <span className="px-2 py-0.5 text-xs font-mono bg-[#21262d] text-[#58a6ff] border border-[#30363d] rounded">
                  {exp.year}
                </span>
              </div>

              <p className="text-xs font-mono text-[#8b949e]">
                {exp.organization} · {exp.department}
              </p>

              <p className="text-xs text-[#c9d1d9] leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-[#0d1117] border border-[#30363d] text-[#8b949e] text-[11px] font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
