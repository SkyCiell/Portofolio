import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[20000] px-6 py-3.5 bg-[#202020] border border-[#A97843] text-[#F3EFE8] font-space-num text-xs font-semibold tracking-widest uppercase flex items-center gap-3 select-none shadow-2xl rounded-full"
        >
          <CheckCircle2 className="w-4 h-4 text-[#D4A96A]" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
