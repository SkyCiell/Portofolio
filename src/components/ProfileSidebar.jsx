import React from 'react';
import { MapPin, Globe, Github, Linkedin, Mail, Building, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ProfileSidebar({ onCopyEmail }) {
  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6">
      {/* Avatar & Identifiers */}
      <div className="space-y-4">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-[#30363d] bg-[#161b22] shadow-xl mx-auto lg:mx-0">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 p-1.5 bg-[#161b22] border border-[#30363d] rounded-full text-[#3fb950]" title="Available for PKL / Projects">
            <CheckCircle2 className="w-4 h-4 fill-[#238636] text-white" />
          </div>
        </div>

        <div className="text-center lg:text-left space-y-1">
          <h1 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] leading-tight font-sans">
            {PROFILE.name}
          </h1>
          <p className="text-sm font-mono text-[#8b949e]">
            {PROFILE.username}
          </p>
        </div>
      </div>

      {/* Role & Bio */}
      <div className="space-y-3 pt-2 text-center lg:text-left">
        <div className="inline-block px-2.5 py-1 bg-[#21262d] border border-[#30363d] text-[#58a6ff] text-xs font-mono font-medium rounded-full">
          {PROFILE.role}
        </div>

        <p className="text-xs text-[#c9d1d9] font-mono leading-normal">
          React · React Native · JavaScript
        </p>

        <p className="text-xs text-[#8b949e] leading-relaxed">
          {PROFILE.bio}
        </p>
      </div>

      {/* Contact & Links Ledger */}
      <div className="space-y-2.5 pt-4 border-t border-[#30363d] text-xs text-[#8b949e]">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-[#8b949e] shrink-0" />
          <span className="text-[#f0f6fc]">{PROFILE.company}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#8b949e] shrink-0" />
          <span>{PROFILE.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#8b949e] shrink-0" />
          <a
            href={PROFILE.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58a6ff] hover:underline truncate"
          >
            skyciell.github.io
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Github className="w-4 h-4 text-[#8b949e] shrink-0" />
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f6fc] hover:text-[#58a6ff] hover:underline truncate"
          >
            @{PROFILE.username}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-[#8b949e] shrink-0" />
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f6fc] hover:text-[#58a6ff] hover:underline truncate"
          >
            Raffi Barzally
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-[#8b949e] shrink-0" />
          <button
            onClick={onCopyEmail}
            className="text-[#8b949e] hover:text-[#58a6ff] transition-colors truncate cursor-pointer text-left"
          >
            {PROFILE.email}
          </button>
        </div>
      </div>

      {/* Status Badge */}
      <div className="p-3 bg-[#161b22] border border-[#30363d] rounded-md font-mono text-[11px] text-[#3fb950] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
        <span>Open for PKL placement & Web/Mobile roles</span>
      </div>
    </aside>
  );
}
