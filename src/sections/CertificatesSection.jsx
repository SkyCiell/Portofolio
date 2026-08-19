import React from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#f0f6fc]">
          <Award className="w-4 h-4 text-[#58a6ff]" />
          <span>Certificates</span>
          <span className="px-2 py-0.5 text-xs bg-[#21262d] text-[#8b949e] rounded-full border border-[#30363d]">
            {CERTIFICATES.length}
          </span>
        </div>
        <span className="text-xs text-[#8b949e] font-mono">Verified Credentials</span>
      </div>

      {/* Repository-style List */}
      <div className="space-y-4">
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className="gh-card p-5 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#30363d]/60 pb-3">
              <div className="space-y-1">
                <h3 className="font-sans text-sm font-bold text-[#f0f6fc]">
                  {cert.name}
                </h3>
                <p className="font-mono text-xs text-[#8b949e]">
                  {cert.issuer} · {cert.year}
                </p>
              </div>

              <div className="px-2.5 py-1 bg-[#0d1117] border border-[#30363d] text-[#3fb950] font-mono text-xs font-bold rounded-md">
                SCORE: {cert.score} / {cert.maxScore}
              </div>
            </div>

            <p className="text-xs text-[#c9d1d9] leading-relaxed">
              {cert.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 bg-[#21262d] border border-[#30363d] text-[#8b949e] text-[11px] font-mono rounded flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#3fb950]" />
                    {skill}
                  </span>
                ))}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn text-xs py-1 px-3"
                >
                  <span>Verification Link</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#58a6ff]" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
