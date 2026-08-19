import React from 'react';
import { BookOpen, Folder, Cpu, Clock, Award, Github, Linkedin, Mail, Search, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Navbar({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onCopyEmail,
  projectCount = 4,
  certCount = 2,
}) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Folder, count: projectCount },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Clock },
    { id: 'certificates', label: 'Certificates', icon: Award, count: certCount },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#161b22]/95 backdrop-blur-md border-b border-[#30363d] shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between h-16 gap-3 border-b border-[#30363d]/60">
          
          {/* Left: Branding & Search */}
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              onClick={() => handleTabClick('overview')}
              className="flex items-center gap-2 font-mono font-bold text-sm text-[#f0f6fc] hover:text-[#58a6ff] transition-colors cursor-pointer shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-[#21262d] border border-[#30363d] text-[#58a6ff] flex items-center justify-center text-xs font-bold shadow-sm">
                RB
              </div>
              <span className="hidden sm:inline">{PROFILE.username}</span>
            </button>

            {/* Search Input Filter */}
            <div className="relative flex-1 max-w-xs sm:max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8b949e]">
                <Search className="w-3.5 h-3.5" />
              </div>
              <input
                type="text"
                placeholder="Search projects, skills, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gh-input w-full pl-9 pr-8 py-1.5 text-xs font-mono rounded-md transition-all focus:border-[#58a6ff]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#8b949e] hover:text-[#f0f6fc] cursor-pointer"
                  title="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Quick External Links */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn text-xs py-1.5 px-2.5 flex items-center gap-1.5"
              title="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden md:inline">GitHub</span>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn text-xs py-1.5 px-2.5 flex items-center gap-1.5"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>

            <button
              onClick={onCopyEmail}
              className="gh-btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
              title="Copy Email Address"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none" aria-label="Section Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#f0f6fc] bg-[#21262d] border border-[#30363d] font-semibold shadow-sm'
                    : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d]/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`ml-1 px-1.5 py-0.5 text-[10px] font-mono rounded-full ${
                      isActive
                        ? 'bg-[#1f6feb]/30 text-[#58a6ff] border border-[#1f6feb]/50'
                        : 'bg-[#30363d] text-[#8b949e]'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
