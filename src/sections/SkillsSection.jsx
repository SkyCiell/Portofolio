import React from 'react';
import { Cpu, Terminal, Code2 } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Cpu className="w-4 h-4 text-[#58a6ff]" />
          <span>Languages & Tools</span>
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Tech Stack Specifications</span>
      </div>

      {/* Groups */}
      <div className="space-y-4">
        {SKILL_GROUPS.map((group, idx) => (
          <div key={idx} className="gh-card p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-[#30363d]/60 pb-2">
              <span className="font-mono text-xs font-semibold text-[#58a6ff] flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                {group.name}
              </span>
              <span className="text-[11px] font-mono text-[#8b949e]">
                {group.skills.length} items
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2.5 bg-[#0d1117] border border-[#30363d] rounded-md hover:border-[#58a6ff] transition-colors flex items-center justify-between group"
                >
                  <span className="text-xs font-mono font-medium text-[#f0f6fc] group-hover:text-[#58a6ff] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8b949e] px-1.5 py-0.5 bg-[#21262d] rounded">
                    {skill.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
