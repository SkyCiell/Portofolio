import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Copy, Mail, Github, Instagram, Linkedin, Send, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    const email = 'raffi.barzally@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      onShowToast('FREQUENCY ADDRESS COPIED TO CLIPBOARD');
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setSentSuccess(true);
      onShowToast('TRANSMISSION SENT SUCCESSFULLY');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-8 lg:pl-28 lg:pr-12 bg-codex-grid border-t border-[#B8F1E8]/12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
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
                07 // TRANSMISSION CONSOLE LINK
              </span>
            </div>
            <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
              Initiate <span className="italic text-[#79C7BF]">Signal Link.</span>
            </h2>
          </div>

          <p className="font-outfit text-sm text-[#A8C5C3] max-w-md">
            Open for internships, collaborative engineering projects, or discussing Frontend & Mobile Architecture ideas. Send a transmission below.
          </p>
        </motion.div>

        {/* Transmission Console & Social Channels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Direct Frequency Address & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Signal Frequency Card */}
            <div className="codex-panel p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#B8F1E8]/12 pb-4">
                <Radio className="w-5 h-5 text-[#CDB47D]" />
                <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">DIRECT FREQUENCY LINK</h3>
              </div>

              <div className="space-y-2">
                <span className="font-space text-[10px] tracking-widest text-[#79C7BF] uppercase block">
                  PRIMARY COMMUNICATION ADDRESS
                </span>
                <a
                  href="mailto:raffi.barzally@gmail.com"
                  className="font-garamond text-2xl sm:text-3xl text-[#B8F1E8] hover:text-[#CDB47D] transition-colors font-medium block underline decoration-[#5FA8A3]/40 underline-offset-4"
                >
                  raffi.barzally@gmail.com
                </a>
              </div>

              <p className="font-outfit text-xs text-[#A8C5C3] leading-relaxed">
                Terbuka untuk tawaran magang, project kolaborasi, atau sekadar bertukar pikiran tentang Frontend & Mobile Architecture.
              </p>

              {/* Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full py-3.5 px-4 rounded-xl bg-[#18323B] border border-[#5FA8A3] text-[#EEF8F7] font-space text-xs tracking-widest uppercase font-bold hover:bg-[#21414A] hover:border-[#B8F1E8] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Copy className="w-4 h-4 text-[#CDB47D]" />
                COPY FREQUENCY ADDRESS
              </button>
            </div>

            {/* Social Channels Panel */}
            <div className="codex-panel p-6 space-y-4">
              <span className="font-space text-xs tracking-widest text-[#CDB47D] uppercase font-bold block">
                EXTENDED SATELLITE CHANNELS
              </span>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://github.com/SkyCiell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18323B]/60 border border-[#B8F1E8]/10 text-[#EEF8F7] font-space text-xs font-bold tracking-wider hover:border-[#5FA8A3] hover:text-[#B8F1E8] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#CDB47D]" />
                    <span>GITHUB // @SkyCiell</span>
                  </div>
                  <Send className="w-3.5 h-3.5 text-[#79C7BF] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://www.instagram.com/piraapiiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18323B]/60 border border-[#B8F1E8]/10 text-[#EEF8F7] font-space text-xs font-bold tracking-wider hover:border-[#5FA8A3] hover:text-[#B8F1E8] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-[#CDB47D]" />
                    <span>INSTAGRAM // @piraapiiii</span>
                  </div>
                  <Send className="w-3.5 h-3.5 text-[#79C7BF] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/raffi-barzally-a18979382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#18323B]/60 border border-[#B8F1E8]/10 text-[#EEF8F7] font-space text-xs font-bold tracking-wider hover:border-[#5FA8A3] hover:text-[#B8F1E8] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#CDB47D]" />
                    <span>LINKEDIN // Raffi Barzally</span>
                  </div>
                  <Send className="w-3.5 h-3.5 text-[#79C7BF] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Premium Communication Console Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="codex-panel p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#B8F1E8]/12 pb-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#5FA8A3]" />
                  <h3 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                    TRANSMISSION TERMINAL CONSOLE
                  </h3>
                </div>
                <span className="font-space text-[10px] text-[#CDB47D] tracking-widest uppercase">
                  STATUS: ENCRYPTED
                </span>
              </div>

              {sentSuccess ? (
                <div className="p-8 rounded-xl bg-[#18323B] border border-[#5FA8A3] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#B8F1E8] mx-auto animate-bounce" />
                  <h4 className="font-garamond text-3xl font-bold text-[#EEF8F7]">
                    Transmission Delivered!
                  </h4>
                  <p className="font-outfit text-xs text-[#A8C5C3] max-w-sm mx-auto">
                    Your transmission frequency has been logged into the codex console. M. Raffi Barzally will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Sender Name */}
                  <div className="space-y-1.5">
                    <label className="font-space text-[10px] tracking-widest text-[#CDB47D] uppercase block font-bold">
                      TRANSMITTER NAME / ALIAS
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lead Architect / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18323B] border border-[#B8F1E8]/15 text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#5FA8A3] focus:ring-1 focus:ring-[#5FA8A3] transition-all placeholder-[#A8C5C3]/40"
                    />
                  </div>

                  {/* Sender Email */}
                  <div className="space-y-1.5">
                    <label className="font-space text-[10px] tracking-widest text-[#CDB47D] uppercase block font-bold">
                      RETURN FREQUENCY / EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18323B] border border-[#B8F1E8]/15 text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#5FA8A3] focus:ring-1 focus:ring-[#5FA8A3] transition-all placeholder-[#A8C5C3]/40"
                    />
                  </div>

                  {/* Signal Message */}
                  <div className="space-y-1.5">
                    <label className="font-space text-[10px] tracking-widest text-[#CDB47D] uppercase block font-bold">
                      TRANSMISSION PAYLOAD MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your signal inquiry or project invitation details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18323B] border border-[#B8F1E8]/15 text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#5FA8A3] focus:ring-1 focus:ring-[#5FA8A3] transition-all placeholder-[#A8C5C3]/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={transmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#18323B] border-2 border-[#5FA8A3] text-[#B8F1E8] font-space text-xs tracking-widest uppercase font-bold hover:bg-[#21414A] hover:border-[#B8F1E8] hover:shadow-[0_0_25px_rgba(95,168,163,0.3)] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {transmitting ? (
                      <span>TRANSMITTING SIGNAL...</span>
                    ) : (
                      <>
                        <Radio className="w-4 h-4 text-[#CDB47D]" />
                        <span>DISPATCH TRANSMISSION PAYLOAD</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Monograph Banner */}
        <div className="pt-12 border-t border-[#B8F1E8]/12 flex flex-col sm:flex-row items-center justify-between gap-4 font-space text-xs text-[#A8C5C3]">
          <div>&copy; 2026 M. RAFFI BARZALLY • ALL RIGHTS RESERVED</div>
          <div>DEPOK • INDONESIA • GMT+7</div>
          <div className="text-[#CDB47D]">BUILT WITH PRECISION & ELEGANCE</div>
        </div>
      </div>
    </section>
  );
}
