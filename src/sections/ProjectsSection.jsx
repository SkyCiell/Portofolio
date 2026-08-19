import React, { useState } from 'react';
import { Folder, Filter, X, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsSection({ searchQuery, onSelectProject, onClearSearch }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Fullstack', 'Web', 'Mobile'];

  const filteredProjects = PROJECTS.filter((p) => {
    // 1. Filter by category
    const matchesCategory =
      activeCategory === 'All' ||
      p.category === activeCategory ||
      (p.techStack && p.techStack.some((t) => t.toLowerCase() === activeCategory.toLowerCase()));

    // 2. Filter by search query
    if (!searchQuery) return matchesCategory;

    const query = searchQuery.toLowerCase();
    const matchesQuery =
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.techStack.some((t) => t.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#30363d] pb-3 gap-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Folder className="w-4 h-4 text-[#58a6ff]" />
          <span>Projects</span>
          <span className="px-2 py-0.5 text-xs bg-[#21262d] text-[#58a6ff] rounded-full border border-[#30363d] font-mono font-bold">
            {filteredProjects.length} / {PROJECTS.length}
          </span>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-[#8b949e] shrink-0 mr-1 hidden sm:block" />
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#1f6feb] text-white font-semibold border border-[#388bfd] shadow-sm'
                    : 'bg-[#21262d] text-[#8b949e] hover:text-[#f0f6fc] border border-[#30363d] hover:border-[#8b949e]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 text-[10px] rounded-full ${
                    isActive ? 'bg-[#0442bf] text-white' : 'bg-[#161b22] text-[#8b949e]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Indicator / Reset */}
      {(searchQuery || activeCategory !== 'All') && (
        <div className="flex items-center justify-between bg-[#161b22] border border-[#30363d] px-3 py-2 rounded-md text-xs font-mono text-[#8b949e]">
          <div className="flex items-center gap-2 flex-wrap">
            <Sparkles className="w-3.5 h-3.5 text-[#58a6ff]" />
            <span>Filtering by:</span>
            {activeCategory !== 'All' && (
              <span className="px-2 py-0.5 bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/40 rounded">
                Category: {activeCategory}
              </span>
            )}
            {searchQuery && (
              <span className="px-2 py-0.5 bg-[#238636]/20 text-[#3fb950] border border-[#238636]/40 rounded">
                Search: "{searchQuery}"
              </span>
            )}
          </div>

          <button
            onClick={() => {
              setActiveCategory('All');
              if (onClearSearch) onClearSearch();
            }}
            className="flex items-center gap-1 text-[#f85149] hover:underline cursor-pointer text-xs ml-2 shrink-0 font-medium"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        </div>
      )}

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
        <div className="gh-card p-8 text-center space-y-3">
          <p className="text-sm font-mono text-[#8b949e]">
            No projects found matching the selected criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              if (onClearSearch) onClearSearch();
            }}
            className="gh-btn text-xs py-1.5 px-3 mx-auto"
          >
            Clear Search & Category Filters
          </button>
        </div>
      )}
    </section>
  );
}
