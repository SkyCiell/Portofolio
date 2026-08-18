import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight, Keyboard, Terminal } from 'lucide-react';
import { IDENTITY } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email address copied to clipboard: raffi.barzally@gmail.com');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] border-b border-[#2E2A24]/60 lg:pl-28"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#2E2A24]/60 pb-6">
          <div>
            <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
              CONTACT
            </span>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl font-normal uppercase text-[var(--text-editorial)]">
              GET IN <span className="font-bold text-[#A97843] italic">TOUCH</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono-code text-xs text-[#D4A96A]">
            <Terminal className="w-4 h-4 text-[#A97843]" />
            <span>AVAILABLE FOR PKL 2026</span>
          </div>
        </div>

        {/* Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-editorial-serif text-5xl sm:text-7xl lg:text-[6.5rem] font-semibold text-[#F3EFE8] uppercase leading-[0.88] tracking-tight">
              LET'S BUILD <br />
              <span className="font-bold text-[#A97843] italic">SOMETHING</span> <br />
              EXTRAORDINARY.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#9E988E] max-w-xl leading-relaxed font-normal">
              Available for PKL placement, frontend engineering roles, and web & mobile system architecture inquiries. Feel free to initiate a message or connect on social media.
            </p>

            {/* Shortcuts */}
            <div className="p-4 bg-[#202020] border border-[#2E2A24] rounded-xl flex items-center justify-between font-space-num text-xs text-[#9E988E]">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-[#A97843]" />
                <span className="font-bold text-[#F3EFE8] uppercase">KEYBOARD SHORTCUTS:</span>
              </div>
              <div className="flex items-center gap-4 font-mono-code">
                <span><strong className="text-[#D4A96A]">[T]</strong> Theme</span>
                <span><strong className="text-[#D4A96A]">[C]</strong> Contact</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Card */}
            <div className="editorial-card p-6 space-y-5 bg-[#202020] rounded-xl border border-[#2E2A24] border-bronze-glow">
              <div className="flex items-center justify-between font-space-num text-xs font-bold text-[#A97843]">
                <span className="uppercase tracking-widest">EMAIL ADDRESS</span>
                <Mail className="w-4 h-4 text-[#D4A96A]" />
              </div>

              <div className="font-mono-code text-sm sm:text-base font-bold text-[#F3EFE8] break-all border-y border-[#2E2A24] py-3">
                {IDENTITY.email}
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${IDENTITY.email}`}
                  className="btn-editorial-bronze flex-1 justify-center rounded-full cursor-pointer"
                >
                  SEND EMAIL
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-3 border border-[#2E2A24] bg-[#181818] text-[#F3EFE8] hover:border-[#A97843] hover:text-[#D4A96A] transition-colors rounded-full cursor-pointer"
                  title="Copy Email Address to Clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-[#D4A96A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-space-num text-xs font-semibold">
              <a
                href={IDENTITY.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#2E2A24] bg-[#202020] hover:border-[#A97843] text-[#F3EFE8] rounded-xl transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#A97843]" />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4A96A]" />
              </a>

              <a
                href={IDENTITY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#2E2A24] bg-[#202020] hover:border-[#A97843] text-[#F3EFE8] rounded-xl transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#A97843]" />
                  <span>INSTAGRAM</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4A96A]" />
              </a>

              <a
                href={IDENTITY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-[#2E2A24] bg-[#202020] hover:border-[#A97843] text-[#F3EFE8] rounded-xl transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#A97843]" />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D4A96A]" />
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
