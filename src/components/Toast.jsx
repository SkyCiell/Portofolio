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
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[20000] px-5 py-3 rounded-xl bg-[#111C22] border-2 border-[#6CA8A7] text-[#EEF8F7] font-space text-xs tracking-wider shadow-2xl flex items-center gap-3 select-none"
        >
          <CheckCircle2 className="w-4 h-4 text-[#B8D8D3]" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


