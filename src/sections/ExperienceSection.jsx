import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 bg-[#081014] border-t border-[#1E343E]"
    >
      <div className="max-w-5xl mx-auto space-y-16">
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
                05 // PERJALANAN SEKOLAH & PROYEK
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Pendidikan & <span className="italic text-[#6CA8A7]">Perjalanan RPL.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-md">
            Perjalanan belajar dan pembuatan proyek Rekayasa Perangkat Lunak (RPL) di SMK Taruna Bhakti Depok.
          </p>
        </motion.div>

        {/* Vertical Journey Blocks */}
        <div className="relative border-l-2 border-[#1E343E] space-y-12 pl-6 sm:pl-10 ml-2 sm:ml-4">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative space-y-4"
            >
              {/* Connector Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#111C22] border-2 border-[#6CA8A7] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#BFA36A]" />
              </div>

              {/* Card Container */}
              <div className="panel-surface p-6 sm:p-8 space-y-4 hover:border-[#6CA8A7]/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E343E] pb-3">
                  <span className="font-garamond text-3xl font-bold text-[#BFA36A]">
                    {exp.year}
                  </span>
                  <div className="text-right">
                    <span className="font-space text-xs font-bold text-[#EEF8F7] block">
                      {exp.organization}
                    </span>
                    <span className="font-space text-[10px] text-[#6CA8A7] uppercase font-semibold">
                      {exp.department}
                    </span>
                  </div>
                </div>

                <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                  {exp.title}
                </h3>

                <p className="font-outfit text-xs sm:text-sm text-[#8FA3AC] leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  {exp.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="font-outfit text-xs text-[#B8D8D3] bg-[#182730] border border-[#1E343E] px-3 py-1 rounded-md flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6CA8A7]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

