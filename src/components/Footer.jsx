import React from 'react';
import { PROFILE } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[#30363d] py-8 bg-[#0d1117] text-xs font-mono text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#30363d] text-[#58a6ff] flex items-center justify-center text-[10px] font-bold">
            RB
          </span>
          <span className="text-[#f0f6fc] font-semibold">
            {PROFILE.name}
          </span>
          <span>© {currentYear}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a6ff] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a6ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-[#58a6ff] transition-colors"
          >
            Email
          </a>
          <span>Depok, Indonesia</span>
        </div>

      </div>
    </footer>
  );
}
