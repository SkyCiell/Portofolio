import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function EditorialCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if primary pointer is fine (mouse/trackpad, not touch-only)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer') !== null;
      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block"
      animate={{
        x: mousePosition.x - (isHovered ? 16 : 5),
        y: mousePosition.y - (isHovered ? 16 : 5),
        width: isHovered ? 32 : 10,
        height: isHovered ? 32 : 10,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.2,
      }}
    >
      <div
        className={`w-full h-full rounded-full transition-all duration-200 ${
          isHovered
            ? 'bg-[#3B82F6]/80 border border-[#3B82F6] scale-100'
            : 'bg-[#2563EB] scale-100'
        }`}
      />
    </motion.div>
  );
}
