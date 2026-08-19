import React from 'react';
import { Clock, Briefcase, Search } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection({ searchQuery }) {
  const query = (searchQuery || '').toLowerCase().trim();

  const filteredExperience = EXPERIENCE.filter((exp) => {
    if (!query) return true;
    return (
      exp.role.toLowerCase().includes(query) ||
      exp.organization.toLowerCase().includes(query) ||
      exp.department.toLowerCase().includes(query) ||
      exp.description.toLowerCase().includes(query) ||
      exp.technologies.some((t) => t.toLowerCase().includes(query))
    );
  });

  return (
    <section id="experience" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Clock className="w-4 h-4 text-[#58a6ff]" />
          <span>Experience</span>
          {query && (
            <span className="px-2 py-0.5 text-xs bg-[#21262d] text-[#58a6ff] rounded-full border border-[#30363d] font-mono">
              {filteredExperience.length} / {EXPERIENCE.length}
            </span>
          )}
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Activity timeline</span>
      </div>

      {/* Developer Activity Timeline */}
      {filteredExperience.length > 0 ? (
        <div className="space-y-4 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-[#30363d] pl-8">
          {filteredExperience.map((exp, idx) => (
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
                  {exp.technologies.map((tech, tIdx) => {
                    const isMatch = query && tech.toLowerCase().includes(query);
                    return (
                      <span
                        key={tIdx}
                        className={`px-2 py-0.5 border text-[11px] font-mono rounded transition-colors ${
                          isMatch
                            ? 'bg-[#1f6feb]/20 text-[#58a6ff] border-[#1f6feb]'
                            : 'bg-[#0d1117] border-[#30363d] text-[#8b949e]'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gh-card p-6 text-center text-xs font-mono text-[#8b949e] flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-[#8b949e]" />
          <span>No experience items match search "{searchQuery}"</span>
        </div>
      )}
    </section>
  );
}
