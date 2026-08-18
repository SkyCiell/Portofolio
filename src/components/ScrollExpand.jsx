import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';

function ScrollExpandProjectItem({ project, index, onSelectProject }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updateScrollProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Container total scroll height is 180vh.
      // Progress 0 when container top reaches top of viewport.
      // Progress 1 when user has scrolled through 80% of container height.
      const totalScrollableDistance = containerRef.current.offsetHeight - viewportHeight;
      const scrolledPast = -rect.top;

      let rawProgress = 0;
      if (scrolledPast > 0 && totalScrollableDistance > 0) {
        rawProgress = Math.min(1, Math.max(0, scrolledPast / totalScrollableDistance));
      }

      setScrollProgress(rawProgress);
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    animationFrameId = requestAnimationFrame(updateScrollProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Expansion phase (0 -> 0.6) and Content reveal phase (0.55 -> 0.95)
  const expandProgress = Math.min(1, scrollProgress / 0.6);
  const contentProgress = Math.min(1, Math.max(0, (scrollProgress - 0.55) / 0.4));

  // Asymmetric frame layouts per project index
  const layoutConfigs = [
    { startWidth: 44, startHeight: 58, startRadius: 24, align: 'center' }, // Project 01: Centered
    { startWidth: 48, startHeight: 60, startRadius: 24, align: 'right' },  // Project 02: Offset Right
    { startWidth: 50, startHeight: 54, startRadius: 20, align: 'left' },   // Project 03: Asymmetric Left
    { startWidth: 42, startHeight: 56, startRadius: 24, align: 'center' }, // Project 04: Centered Editorial
    { startWidth: 46, startHeight: 62, startRadius: 24, align: 'right' },  // Project 05: Offset Right
  ];

  const config = layoutConfigs[index % layoutConfigs.length];

  // Calculate GPU clip-path inset percentages
  let insetLeft = 0;
  let insetRight = 0;
  const insetY = ((100 - config.startHeight) / 2) * (1 - expandProgress);
  const currentRadius = config.startRadius * (1 - expandProgress);

  if (config.align === 'right') {
    insetLeft = (100 - config.startWidth) * 0.7 * (1 - expandProgress);
    insetRight = (100 - config.startWidth) * 0.3 * (1 - expandProgress);
  } else if (config.align === 'left') {
    insetLeft = (100 - config.startWidth) * 0.3 * (1 - expandProgress);
    insetRight = (100 - config.startWidth) * 0.7 * (1 - expandProgress);
  } else {
    insetLeft = ((100 - config.startWidth) / 2) * (1 - expandProgress);
    insetRight = insetLeft;
  }

  // Subtle image scale (1.12 -> 1.0)
  const currentZoom = 1.12 - 0.12 * expandProgress;

  // Title inside image: subtle translateY (-20px) and fade out (1 -> 0)
  const titleOpacity = Math.max(0, 1 - expandProgress * 1.7);
  const titleY = -20 * expandProgress;

  // Content overlay: subtle translateY (+15px -> 0px) and fade in (0 -> 1)
  const contentOpacity = contentProgress;
  const contentY = 15 * (1 - contentProgress);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[180vh] bg-[#FAFAFA] text-[#111111]"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#FAFAFA]">
        
        {/* Dynamic GPU Clip-Path Frame */}
        <div
          className="relative w-full h-full will-change-[clip-path]"
          style={{
            clipPath: `inset(${insetY}% ${insetRight}% ${insetY}% ${insetLeft}% round ${currentRadius}px)`,
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden bg-[#111111]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              style={{
                transform: `scale(${currentZoom})`,
              }}
            />
            {/* Vignette Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent transition-opacity duration-300"
              style={{ opacity: Math.max(0.2, 1 - contentProgress * 0.7) }}
            />
          </div>

          {/* INITIAL STATE: Large Serif Title Overlay */}
          <div
            className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end pointer-events-none transition-all duration-200 ease-out"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
            }}
          >
            <div className="space-y-2">
              <span className="font-space-num text-xs font-bold text-[#F4CEFF] uppercase tracking-widest block">
                {project.category || 'FEATURED WORK'}
              </span>
              <h3 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white uppercase tracking-tight leading-[0.9]">
                {project.title}
              </h3>
            </div>
          </div>

          {/* EXPANDED CONTENT: Magazine Info Overlay Layout */}
          <div
            className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-between z-10 pointer-events-auto bg-[#FAFAFA]/95 backdrop-blur-md transition-all duration-300 ease-out"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentY}px)`,
              display: expandProgress > 0.8 ? 'flex' : 'none',
            }}
          >
            {/* Top Magazine Header Rule */}
            <div className="flex items-center justify-between border-b border-[#111111] pb-4 font-space-num text-xs font-bold uppercase tracking-widest text-[#111111]">
              <span className="text-[#1B4EF5]">{project.category || 'PROJECT SHOWCASE'}</span>
              <span className="text-[#666666]">YEAR: {project.year}</span>
            </div>

            {/* Main Editorial Content Grid */}
            <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#111111] uppercase tracking-tight leading-[0.9]">
                  {project.title}
                </h2>
                <p className="font-sans text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl font-normal">
                  {project.overview}
                </p>

                {/* Tech Stack Pills */}
                <div className="space-y-2 pt-2">
                  <span className="font-space-num text-xs font-bold text-[#111111] uppercase tracking-widest block">
                    TECHNOLOGY STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-[#E2E2DF] font-space-num text-xs font-bold text-[#111111]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Highlights & Case Study Action */}
              <div className="lg:col-span-5 space-y-6 lg:pl-8 lg:border-l border-[#E2E2DF]">
                <div className="space-y-3 font-sans text-xs text-[#666666]">
                  <span className="font-space-num text-xs font-bold text-[#111111] uppercase tracking-widest block">
                    KEY HIGHLIGHTS
                  </span>
                  <ul className="space-y-2">
                    {project.features?.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4EF5] shrink-0 mt-0.5" />
                        <span className="text-[#111111] font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  {onSelectProject && (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-editorial-blue flex-1 justify-center text-xs py-3 cursor-pointer"
                    >
                      <span>EXAMINE CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-editorial-outline flex-1 justify-center text-xs py-3"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="border-t border-[#E2E2DF] pt-4 flex justify-between font-space-num text-xs font-bold text-[#666666]">
              <span>SCROLL TO CONTINUE</span>
              <span className="text-[#1B4EF5]">RAFFI PORTFOLIO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScrollExpand({ projects = [], onSelectProject }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="relative w-full bg-[#FAFAFA]">
      {projects.map((project, idx) => (
        <ScrollExpandProjectItem
          key={project.id}
          project={project}
          index={idx}
          onSelectProject={onSelectProject}
        />
      ))}
    </div>
  );
}
