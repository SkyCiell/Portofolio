import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING RESONANCE CODEX...');

  useEffect(() => {
    const statuses = [
      'INITIALIZING RESONANCE CODEX...',
      'DECRYPTING CHARACTER FREQUENCY...',
      'LOADING TALENT NODE NETWORK...',
      'CALIBRATING MISSION DOSSIERS...',
      'RESONANCE SYNCHRONIZED',
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }

        // Update status text based on progress
        const index = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[index]);

        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[10000] bg-[#09161A] flex flex-col items-center justify-center p-6 bg-codex-grid select-none"
    >
      {/* Outer ambient glow ring */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Animated background rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-[#B8F1E8]/10 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-[#5FA8A3]/20 border-t-[#CDB47D]"
          />
          
          {/* Inner percentage display */}
          <div className="text-center">
            <span className="font-space font-bold text-3xl tracking-wider text-[#EEF8F7]">
              {progress}
              <span className="text-sm font-normal text-[#79C7BF]">%</span>
            </span>
            <div className="text-[9px] font-space tracking-widest text-[#CDB47D] uppercase mt-1">
              PORTFOLIO ARCHIVE
            </div>
          </div>
        </div>

        {/* Status text banner */}
        <div className="mt-8 text-center max-width-[320px]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5FA8A3] animate-ping" />
            <span className="font-space text-xs tracking-[0.22em] text-[#79C7BF] uppercase">
              {statusText}
            </span>
          </div>

          {/* Progress bar container */}
          <div className="w-64 h-1 bg-[#102229] border border-[#B8F1E8]/15 rounded-full overflow-hidden mt-3">
            <motion.div
              className="h-full bg-[#5FA8A3] shadow-[0_0_12px_#5FA8A3]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Footer classification stamp */}
        <div className="mt-12 text-[10px] font-space tracking-[0.25em] text-[#A8C5C3]/40 uppercase flex items-center gap-4">
          <span>CLASSIFICATION: LEVEL S</span>
          <span>•</span>
          <span>RPL ARCHITECTURE 2026</span>
        </div>
      </div>
    </motion.div>
  );
}
