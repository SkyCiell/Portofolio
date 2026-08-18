import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { IDENTITY } from '../data/portfolioData';

const DEFAULT_ITEMS = [
  { id: 'about', label: 'About', tagline: 'Background & Engineering Manifesto' },
  { id: 'projects', label: 'Work', tagline: 'Selected Digital Products & Platforms' },
  { id: 'experience', label: 'Experience', tagline: 'Academic Journey & Core Skillset' },
  { id: 'contact', label: 'Contact', tagline: 'Direct Inquiries & PKL Placement' },
];

export default function BubbleMenu({
  activeSection,
  setActiveSection,
  onItemClick,
  logoText = 'RAFFI.',
  items = DEFAULT_ITEMS,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuOverlayRef = useRef(null);
  const bubblesContainerRef = useRef(null);
  const itemsRef = useRef([]);

  // Detect scroll state for floating closed navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility (Escape key closes menu)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // GSAP animation timeline for open/close
  useEffect(() => {
    if (!menuOverlayRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        // Open Animation
        gsap.set(menuOverlayRef.current, { display: 'block', opacity: 0 });
        gsap.to(menuOverlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Bubble expansion effect
        gsap.fromTo(
          bubblesContainerRef.current,
          { scale: 0.96, y: -15 },
          { scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );

        // Vertical stagger reveal for text items
        gsap.fromTo(
          itemsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      } else {
        // Close Animation
        gsap.to(itemsRef.current, {
          y: -15,
          opacity: 0,
          duration: 0.2,
          stagger: 0.03,
          ease: 'power2.in',
        });

        gsap.to(bubblesContainerRef.current, {
          scale: 0.98,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        });

        gsap.to(menuOverlayRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(menuOverlayRef.current, { display: 'none' });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  const handleNavigate = (id) => {
    if (setActiveSection) setActiveSection(id);
    if (onItemClick) onItemClick(id);
    setIsOpen(false);

    const target = document.getElementById(id);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -20, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      {/* CLOSED STATE: Minimal Floating Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 flex items-center justify-between pointer-events-auto">
        {/* Left: Logo/Name */}
        <button
          onClick={() => handleNavigate('hero')}
          className={`px-6 py-2.5 bg-[#121316] border border-[#1F2026] text-[#F0F0F2] rounded-full transition-all duration-300 flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#3B82F6] ${
            scrolled ? 'shadow-lg scale-95 border-[#2C2D36]' : ''
          }`}
          aria-label="Navigate to homepage"
        >
          <span className="font-display-tall text-base sm:text-lg font-bold tracking-wider text-[#F0F0F2] group-hover:text-[#3B82F6] transition-colors">
            {logoText}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </button>

        {/* Right: Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`px-6 py-2.5 bg-[#121316] text-[#F0F0F2] border border-[#1F2026] rounded-full hover:bg-[#1A1C22] hover:border-[#3B82F6] transition-all duration-300 flex items-center gap-2.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#3B82F6] ${
            scrolled ? 'shadow-lg scale-95' : ''
          }`}
        >
          <span className="font-space-num text-xs font-semibold tracking-widest uppercase">
            {isOpen ? 'CLOSE' : 'MENU'}
          </span>
          {isOpen ? (
            <X className="w-4 h-4 text-[#F0F0F2]" />
          ) : (
            <Menu className="w-4 h-4 text-[#F0F0F2]" />
          )}
        </button>
      </div>

      {/* OPEN STATE: Expanded Minimal Editorial Navigation Overlay */}
      <div
        ref={menuOverlayRef}
        className="fixed inset-0 bg-[#0A0A0C]/98 z-40 pointer-events-auto hidden overflow-y-auto"
      >
        <div className="min-h-screen max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-28 pb-16 flex flex-col justify-between">
          
          {/* Main Menu Container */}
          <div ref={bubblesContainerRef} className="my-auto space-y-12">
            
            {/* Top Header */}
            <div className="flex items-center justify-between border-b border-[#1F2026] pb-4 font-space-num text-xs font-semibold text-[#8A8B92] tracking-widest uppercase">
              <span>INDEX</span>
              <span className="text-[#3B82F6]">MUHAMMAD RAFFI BARZALLY</span>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Navigation Items */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                {items.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const offsets = [
                    'lg:pl-0 text-left',
                    'lg:pl-12 text-left',
                    'lg:pl-6 text-left',
                    'lg:pl-18 text-left',
                  ];
                  const offsetClass = offsets[index % offsets.length];

                  return (
                    <div
                      key={item.id}
                      ref={(el) => (itemsRef.current[index] = el)}
                      className={`group relative border-b border-[#1F2026] pb-4 sm:pb-6 transition-transform duration-200 hover:translate-x-2 origin-left ${offsetClass}`}
                    >
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className="w-full flex flex-col sm:flex-row sm:items-baseline justify-between text-left gap-2 cursor-pointer focus:outline-none"
                      >
                        <span
                          className={`font-display-tall text-3xl sm:text-6xl font-bold leading-[0.9] tracking-tight uppercase transition-colors duration-200 ${
                            isActive
                              ? 'text-[#3B82F6] underline decoration-2 underline-offset-8'
                              : 'text-[#F0F0F2] group-hover:text-[#3B82F6]'
                          }`}
                        >
                          {item.label}
                        </span>

                        <span className="font-sans text-xs sm:text-sm text-[#8A8B92] group-hover:text-[#F0F0F2] transition-colors max-w-xs font-normal">
                          {item.tagline}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Contact Panel */}
              <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-[#1F2026] pt-8 lg:pt-0 lg:pl-10">
                <div className="p-6 bg-[#121316] text-[#F0F0F2] space-y-4 border border-[#1F2026] rounded-2xl">
                  <span className="font-space-num text-xs font-semibold text-[#3B82F6] tracking-widest uppercase block">
                    DIRECT INQUIRY
                  </span>
                  <p className="font-sans text-sm text-[#8A8B92] leading-relaxed">
                    Available for PKL placement, frontend engineering roles, and web/mobile projects.
                  </p>
                  <a
                    href={`mailto:${IDENTITY.email}`}
                    className="inline-flex items-center gap-2 font-space-num text-xs font-bold text-white bg-[#2563EB] px-5 py-2.5 rounded-full hover:bg-[#1D4ED8] transition-colors"
                  >
                    <span>TALK WITH RAFFI</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-2 font-space-num text-xs text-[#8A8B92]">
                  <div className="flex justify-between border-b border-[#1F2026] pb-2">
                    <span>GITHUB:</span>
                    <a
                      href={IDENTITY.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F0F0F2] hover:text-[#3B82F6] font-semibold"
                    >
                      @SkyCiell
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-[#1F2026] pb-2">
                    <span>LINKEDIN:</span>
                    <a
                      href={IDENTITY.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F0F0F2] hover:text-[#3B82F6] font-semibold"
                    >
                      Raffi Barzally
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Strip */}
            <div className="border-t border-[#1F2026] pt-6 flex flex-wrap items-center justify-between gap-4 font-space-num text-xs font-semibold text-[#8A8B92]">
              <span className="uppercase text-[#F0F0F2]">INDONESIA</span>
              <span className="text-[#8A8B92]">PRESS ESC TO CLOSE</span>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
