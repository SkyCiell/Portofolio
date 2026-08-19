import React from 'react';
import { Folder } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection({ searchQuery, onSelectProject }) {
  const filteredProjects = PROJECTS.filter((p) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.techStack.some((t) => t.toLowerCase().includes(query))
    );
  });

  return (
    <section id="projects" className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Folder className="w-4 h-4 text-[#58a6ff]" />
          <span>Projects</span>
          <span className="px-2 py-0.5 text-xs bg-[#21262d] text-[#8b949e] rounded-full border border-[#30363d]">
            {filteredProjects.length}
          </span>
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Repositories listing</span>
      </div>

      {/* Repository Cards Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      ) : (
        <div className="gh-card p-8 text-center space-y-2">
          <p className="text-sm font-mono text-[#8b949e]">
            No projects found matching "{searchQuery}"
          </p>
        </div>
      )}
    </section>
  );
}
