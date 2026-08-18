import React from 'react';
import { IDENTITY } from '../data/portfolioData';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] border-t border-[#2E2A24]/60 lg:pl-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-space-num text-xs font-semibold">
        {/* Left: Branding */}
        <div className="space-y-1">
          <div className="text-xl font-editorial-serif font-bold text-[#F3EFE8] tracking-wider uppercase">
            M. RAFFI <span className="text-[#A97843] italic">BARZALLY</span>
          </div>
          <p className="text-[11px] text-[#9E988E] font-mono-code">
            {IDENTITY.coordinates} — {IDENTITY.location}
          </p>
        </div>

        {/* Right: Copyright & Footer Links */}
        <div className="flex flex-wrap items-center gap-6 text-[#9E988E] uppercase tracking-widest text-[11px]">
          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4A96A] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={IDENTITY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4A96A] transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href={IDENTITY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4A96A] transition-colors"
          >
            LINKEDIN
          </a>
          <span className="text-[#A97843] font-mono-code font-bold">
            © {currentYear} M. RAFFI BARZALLY
          </span>
        </div>
      </div>
    </footer>
  );
}
