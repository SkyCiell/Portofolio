import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Smartphone, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS = {
  'Frontend Architecture': Code,
  'Mobile Systems': Smartphone,
  'Backend & Services': Cpu,
  'Database & Data': Database,
  'Engineering Tools': Wrench,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 bg-[#081014] border-t border-[#1E343E]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1E343E] pb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#BFA36A]" />
              <span className="font-space text-xs tracking-[0.25em] text-[#BFA36A] uppercase font-semibold">
                04 // CATEGORIZED TECHNICAL MODULES
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Skills & <span className="italic text-[#6CA8A7]">Specialization.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-md">
            Categorized technical capabilities, languages, frameworks, and engineering standards used across production applications.
          </p>
        </motion.div>

        {/* Skill Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.category] || Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="panel-surface p-6 flex flex-col justify-start space-y-6 hover:border-[#6CA8A7]/40 transition-colors"
              >
                {/* Module Header */}
                <div className="flex items-center justify-between border-b border-[#1E343E] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#182730] border border-[#1E343E] flex items-center justify-center text-[#6CA8A7]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-garamond text-xl font-bold text-[#EEF8F7]">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-space text-[10px] text-[#BFA36A] uppercase font-semibold">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-lg bg-[#182730] border border-[#1E343E] space-y-1 hover:border-[#6CA8A7]/30 transition-all cursor-default"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-outfit text-sm font-bold text-[#EEF8F7]">
                          {skill.name}
                        </span>
                        <span className="font-space text-[10px] text-[#BFA36A] uppercase font-semibold">
                          {skill.level}
                        </span>
                      </div>
                      <p className="font-outfit text-xs text-[#8FA3AC]">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


