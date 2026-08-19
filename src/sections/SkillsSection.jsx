import React from 'react';
import { Cpu, Code2, Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export default function SkillsSection({ searchQuery }) {
  const query = (searchQuery || '').toLowerCase().trim();

  // Filter skills per group
  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (!query) return group;
    const matchingSkills = group.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(query) ||
        skill.type.toLowerCase().includes(query) ||
        group.name.toLowerCase().includes(query)
    );
    return {
      ...group,
      skills: matchingSkills,
    };
  }).filter((group) => group.skills.length > 0);

  const totalFilteredSkills = filteredGroups.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <section id="skills" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Cpu className="w-4 h-4 text-[#58a6ff]" />
          <span>Languages & Tools</span>
          {query && (
            <span className="px-2 py-0.5 text-xs bg-[#21262d] text-[#58a6ff] rounded-full border border-[#30363d] font-mono">
              {totalFilteredSkills} items match
            </span>
          )}
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Tech Stack Specifications</span>
      </div>

      {/* Groups */}
      {filteredGroups.length > 0 ? (
        <div className="space-y-4">
          {filteredGroups.map((group, idx) => (
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
                {group.skills.map((skill, sIdx) => {
                  const isMatch =
                    query &&
                    (skill.name.toLowerCase().includes(query) ||
                      skill.type.toLowerCase().includes(query));

                  return (
                    <div
                      key={sIdx}
                      className={`p-2.5 bg-[#0d1117] border rounded-md transition-all flex items-center justify-between group ${
                        isMatch
                          ? 'border-[#58a6ff] bg-[#1c2129] shadow-sm'
                          : 'border-[#30363d] hover:border-[#58a6ff]'
                      }`}
                    >
                      <span
                        className={`text-xs font-mono font-medium transition-colors ${
                          isMatch
                            ? 'text-[#58a6ff] font-bold'
                            : 'text-[#f0f6fc] group-hover:text-[#58a6ff]'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#8b949e] px-1.5 py-0.5 bg-[#21262d] rounded">
                        {skill.type}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gh-card p-6 text-center text-xs font-mono text-[#8b949e] flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-[#8b949e]" />
          <span>No skills match search "{searchQuery}"</span>
        </div>
      )}
    </section>
  );
}
