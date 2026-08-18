import React, { useEffect, useRef, useState } from 'react';

export default function TextPressure({
  text = 'MUHAMMAD RAFFI BARZALLY',
  fontFamily = "'Space Grotesk', 'Inter', sans-serif",
  width = true,
  weight = true,
  italic = false,
  alpha = false,
  flex = true,
  stroke = false,
  textColor = '#F0F0F2',
  strokeColor = '#3B82F6',
  className = '',
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const charRefs = useRef([]);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const words = text.split(' ');

  return (
    <div
      ref={containerRef}
      className={`relative select-none w-full flex flex-wrap gap-x-4 sm:gap-x-8 gap-y-2 items-baseline ${className}`}
      style={{ fontFamily }}
    >
      {words.map((word, wIdx) => (
        <div key={wIdx} className="inline-flex whitespace-nowrap">
          {word.split('').map((char, cIdx) => {
            const globalIndex = `${wIdx}-${cIdx}`;
            let dist = 1000;

            if (containerRef.current) {
              const el = charRefs.current[globalIndex];
              if (el) {
                const rect = el.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const charX = rect.left - containerRect.left + rect.width / 2;
                const charY = rect.top - containerRect.top + rect.height / 2;
                dist = Math.hypot(mousePos.x - charX, mousePos.y - charY);
              }
            }

            // Radius of influence (220px for subtle deformation)
            const maxRadius = 220;
            const factor = Math.max(0, Math.min(1, 1 - dist / maxRadius));

            // Weight mapping: 400 (normal) -> 900 (heavy)
            const charWeight = weight ? Math.round(400 + factor * 450) : 700;
            // Subtle scale: 1 -> 1.05
            const charScale = 1 + factor * 0.05;
            // Opacity if alpha enabled
            const charAlpha = alpha ? 0.6 + factor * 0.4 : 1;

            return (
              <span
                key={globalIndex}
                ref={(el) => (charRefs.current[globalIndex] = el)}
                className="inline-block transition-all duration-150 ease-out uppercase"
                style={{
                  fontWeight: charWeight,
                  transform: `scale(${charScale})`,
                  opacity: charAlpha,
                  color: textColor,
                  WebkitTextStroke: stroke ? `1px ${strokeColor}` : 'none',
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  fontStyle: italic && factor > 0.4 ? 'italic' : 'normal',
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
