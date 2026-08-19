import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard: raffi.barzally@gmail.com');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="gh-card p-6 sm:p-8 space-y-6">
      <div className="space-y-2 border-b border-[#30363d] pb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#f0f6fc] font-sans">
          Let's build something.
        </h2>
        <p className="text-xs sm:text-sm text-[#8b949e]">
          Available for PKL placement, frontend & mobile development opportunities. Feel free to reach out via email or connect on social networks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
        {/* Email Card */}
        <div className="p-4 bg-[#0d1117] border border-[#30363d] rounded-md space-y-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#58a6ff]">
            <span className="font-semibold">Email</span>
            <Mail className="w-4 h-4" />
          </div>
          <p className="text-[#c9d1d9] truncate text-[11px]">
            {PROFILE.email}
          </p>
          <div className="flex gap-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="gh-btn-primary text-xs py-1 px-3 flex-1 justify-center"
            >
              Send Email
            </a>
            <button
              onClick={handleCopyEmail}
              className="gh-btn text-xs py-1 px-2.5"
              title="Copy Email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#3fb950]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* GitHub Link Card */}
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] rounded-md space-y-3 flex flex-col justify-between transition-colors group cursor-pointer"
        >
          <div className="flex items-center justify-between text-[#58a6ff]">
            <span className="font-semibold">GitHub</span>
            <Github className="w-4 h-4" />
          </div>
          <p className="text-[#8b949e] group-hover:text-[#f0f6fc] transition-colors text-[11px]">
            @{PROFILE.username}
          </p>
          <span className="gh-btn text-xs py-1 justify-center">
            View Profile
          </span>
        </a>

        {/* LinkedIn Link Card */}
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] rounded-md space-y-3 flex flex-col justify-between transition-colors group cursor-pointer"
        >
          <div className="flex items-center justify-between text-[#58a6ff]">
            <span className="font-semibold">LinkedIn</span>
            <Linkedin className="w-4 h-4" />
          </div>
          <p className="text-[#8b949e] group-hover:text-[#f0f6fc] transition-colors text-[11px]">
            Raffi Barzally
          </p>
          <span className="gh-btn text-xs py-1 justify-center">
            Connect
          </span>
        </a>
      </div>
    </section>
  );
}
