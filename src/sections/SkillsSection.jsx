import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[var(--canvas)] text-[var(--text-editorial)] border-b border-[#2E2A24]/60 lg:pl-28"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#2E2A24]/60 pb-6"
        >
          <div>
            <span className="font-space-num text-xs font-bold text-[#A97843] tracking-[0.2em] uppercase block">
              SKILLS
            </span>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl font-normal uppercase text-[var(--text-editorial)]">
              TECHNICAL <span className="font-bold text-[#A97843] italic">SKILLS</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#9E988E] max-w-md font-normal leading-relaxed">
            Core capabilities, technical stacks, and software engineering standards.
          </p>
        </motion.div>

        {/* Competency Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-card p-6 sm:p-8 space-y-6 bg-[#202020] rounded-xl border border-[#2E2A24] hover:border-[#A97843] transition-all flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="border-b border-[#2E2A24] pb-4 font-space-num text-xs font-bold tracking-widest">
                <span className="text-[#A97843] uppercase">{cat.category}</span>
              </div>

              {/* Skills Catalog List */}
              <div className="space-y-3.5 flex-1">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 border border-[#2E2A24] bg-[#181818] rounded-lg hover:border-[#A97843]/60 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-space-num text-xs font-semibold text-[#F3EFE8]">
                      <span className="font-bold">{skill.name}</span>
                      <span className="px-2 py-0.5 bg-[#202020] border border-[#2E2A24] text-[10px] text-[#D4A96A] uppercase font-mono-code rounded">
                        {skill.level}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#9E988E] leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
