import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Compass, Cpu, Layers, Sparkles, BookOpen, Heart, Target } from 'lucide-react';

export default function AboutSection() {
  const identityAttributes = [
    { label: 'NAME / ALIAS', value: 'M. Raffi Barzally (SkyCiell)' },
    { label: 'AFFILIATION', value: 'SMK Taruna Bhakti (RPL Department)' },
    { label: 'PRIMARY CLASS', value: 'Frontend Architecture & Mobile Developer' },
    { label: 'SPECIALIZATION', value: 'React 19, React Native, Vite, Modular Systems' },
    { label: 'LOCATION / BASE', value: 'Depok, West Java, Indonesia (6.39°S 106.83°E)' },
    { label: 'RESONANCE STATUS', value: 'Optimal • Available for Engineering Projects' },
  ];

  const specCards = [
    {
      num: '01',
      title: 'Modular Systems',
      desc: 'Building software architectures with decoupled components, single responsibility paradigms, and pristine code maintainability.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'Aesthetic Precision',
      desc: 'Obsessed with high-fashion, editorial typography, atmospheric depth, and fluid 60fps micro-interactions.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'Cross-Platform Mobile',
      desc: 'Bridging React Native & Expo ecosystems with REST API backends and real-time data state management.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'Performance First',
      desc: 'Ensuring ultra-fast load times, lightweight bundle footprints, and seamless layout transitions across all devices.',
      icon: Shield,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-4 sm:px-8 lg:pl-28 lg:pr-12 bg-codex-grid border-t border-[#B8F1E8]/12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#B8F1E8]/12 pb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#CDB47D]" />
              <span className="font-space text-xs tracking-[0.25em] text-[#CDB47D] uppercase">
                02 // CHARACTER PROFILE & ARCHIVE
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Identity & <span className="italic text-[#79C7BF]">Resonance Specs.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Personal manifesto and operational specifications of M. Raffi Barzally — software engineering student striving for functional elegance and architectural harmony.
          </p>
        </motion.div>

        {/* 3-Column Character Profile Codex Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Personal Manifesto & Identity Attributes */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Identity Panel */}
            <div className="codex-panel p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-[#B8F1E8]/12 pb-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#CDB47D]" />
                  <h3 className="font-garamond text-xl font-bold text-[#EEF8F7]">CHARACTER MANIFESTO</h3>
                </div>
                <span className="font-space text-[10px] text-[#5FA8A3] uppercase tracking-widest">DOSSIER #01</span>
              </div>

              <p className="font-outfit text-sm text-[#A8C5C3] leading-relaxed">
                Saya adalah seorang pelajar di SMK Taruna Bhakti jurusan Rekayasa Perangkat Lunak (RPL) yang sangat tertarik dalam dunia pengembangan perangkat lunak dan desain antarmuka. Selalu berusaha menciptakan solusi yang fungsional, estetis, dan berdampak.
              </p>

              {/* Attribute Key-Value List */}
              <div className="space-y-3 pt-2">
                {identityAttributes.map((attr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#18323B]/60 border border-[#B8F1E8]/10 space-y-1">
                    <span className="font-space text-[9px] tracking-widest text-[#CDB47D] block uppercase">
                      {attr.label}
                    </span>
                    <span className="font-outfit text-xs text-[#EEF8F7] font-medium block">
                      {attr.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Column (3 Cols): Portrait Box & Exact Requested Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col items-center"
          >
            <div className="codex-panel p-4 w-full flex flex-col items-center text-center space-y-4">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#B8F1E8]/15 bg-[#18323B] relative group">
                <img
                  src="/img/Rapiganteng1.jpeg"
                  alt="M. Raffi Barzally"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09161A] via-transparent to-transparent opacity-60" />
              </div>

              {/* Exact Requested Filename & Caption Format */}
              <div className="w-full text-left space-y-1 pt-1">
                <div className="font-space text-sm font-bold text-[#79C7BF] tracking-wider">
                  Rapiganteng.jpeg
                </div>
                <div className="font-garamond text-sm italic text-[#A8C5C3] leading-snug">
                  "Moments of clarity in the middle of chaos."
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (4 Cols): Grid of Focus, Tools, Approach, Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Focus */}
              <div className="codex-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#CDB47D]">
                  <Target className="w-4 h-4" />
                  <span className="font-space text-xs tracking-widest uppercase font-bold">FOCUS</span>
                </div>
                <ul className="space-y-1.5 font-outfit text-xs text-[#A8C5C3]">
                  <li>• Frontend Architecture</li>
                  <li>• UI/UX Systems</li>
                  <li>• Web Performance</li>
                </ul>
              </div>

              {/* Tools */}
              <div className="codex-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#5FA8A3]">
                  <Cpu className="w-4 h-4" />
                  <span className="font-space text-xs tracking-widest uppercase font-bold">TOOLS</span>
                </div>
                <ul className="space-y-1.5 font-outfit text-xs text-[#A8C5C3]">
                  <li>• VS Code</li>
                  <li>• Figma & Canvas</li>
                  <li>• Git & GitHub</li>
                </ul>
              </div>

              {/* Approach */}
              <div className="codex-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#79C7BF]">
                  <Compass className="w-4 h-4" />
                  <span className="font-space text-xs tracking-widest uppercase font-bold">APPROACH</span>
                </div>
                <ul className="space-y-1.5 font-outfit text-xs text-[#A8C5C3]">
                  <li>• Clean Modular Code</li>
                  <li>• Attention to Detail</li>
                  <li>• User First Philosophy</li>
                </ul>
              </div>

              {/* Interests */}
              <div className="codex-card p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#B8F1E8]">
                  <Heart className="w-4 h-4" />
                  <span className="font-space text-xs tracking-widest uppercase font-bold">INTERESTS</span>
                </div>
                <ul className="space-y-1.5 font-outfit text-xs text-[#A8C5C3]">
                  <li>• Music & Audio APIs</li>
                  <li>• Software Systems</li>
                  <li>• Custom PC Building</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metric Spec Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {specCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="codex-card p-6 flex flex-col justify-between codex-hover-glow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-garamond text-3xl font-bold text-[#CDB47D]">{card.num}</span>
                    <div className="w-9 h-9 rounded-xl bg-[#102229] border border-[#B8F1E8]/15 flex items-center justify-center text-[#79C7BF]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-outfit text-lg font-bold text-[#EEF8F7]">{card.title}</h4>
                  <p className="font-outfit text-xs text-[#A8C5C3] leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
