import React from 'react';
import { Folder, Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="gh-card p-5 flex flex-col justify-between space-y-4 group">
      <div className="space-y-3">
        {/* Repo Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold truncate">
            <Folder className="w-4 h-4 text-[#58a6ff] shrink-0" />
            <button
              onClick={() => onSelect(project)}
              className="text-[#58a6ff] hover:underline truncate cursor-pointer text-left"
            >
              {project.name}
            </button>
          </div>

          <span className="px-2 py-0.5 text-[10px] font-mono border border-[#30363d] text-[#8b949e] rounded-full shrink-0">
            Public
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-xs font-mono text-[#58a6ff] font-medium">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-xs text-[#8b949e] leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Footer Meta & Actions */}
      <div className="space-y-3 pt-2 border-t border-[#30363d]/60">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-[#21262d] border border-[#30363d] text-[#c9d1d9] text-[11px] font-mono rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Language Dot & Action Buttons */}
        <div className="flex items-center justify-between pt-1 text-xs font-mono text-[#8b949e]">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: project.languageColor || '#58a6ff' }}
            />
            <span>{project.language}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(project)}
              className="gh-btn text-xs py-1 px-2.5"
            >
              <span>Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#58a6ff]" />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-[#58a6ff] transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:text-[#58a6ff] transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
