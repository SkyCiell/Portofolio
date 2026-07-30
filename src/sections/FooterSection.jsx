import React from 'react';
import { IDENTITY } from '../data/portfolioData';

export default function FooterSection() {
  return (
    <footer className="py-8 px-4 sm:px-8 border-t border-[#1E343E] bg-[#081014]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-xs text-[#8FA3AC]">
        <div>&copy; {new Date().getFullYear()} {IDENTITY.name.toUpperCase()}</div>
        <div className="text-[#BFA36A] font-semibold">{IDENTITY.coordinates}</div>
        <div>PORTFOLIO &amp; TECHNICAL MONOGRAPH</div>
      </div>
    </footer>
  );
}


