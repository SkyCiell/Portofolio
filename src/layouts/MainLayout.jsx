import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#081014] text-[#EEF8F7] font-outfit selection:bg-[#6CA8A7]/30 selection:text-[#B8D8D3]">
      {children}
    </div>
  );
}


