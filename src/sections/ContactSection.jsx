import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Mail, Github, Instagram, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { IDENTITY } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(IDENTITY.email).then(() => {
      onShowToast('EMAIL ADDRESS COPIED TO CLIPBOARD');
    }).catch(() => {
      window.location.href = `mailto:${IDENTITY.email}`;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransmitting(true);
    setTimeout(() => {
      setTransmitting(false);
      setSentSuccess(true);
      onShowToast('TRANSMISSION DISPATCHED');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-28 px-4 sm:px-8 lg:px-16 bg-[#081014] border-t border-[#1E343E] flex flex-col justify-between"
    >
      <div className="max-w-3xl mx-auto w-full my-auto space-y-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111C22] border border-[#1E343E]">
            <span className="w-2 h-2 rounded-full bg-[#6CA8A7]" />
            <span className="font-space text-xs tracking-widest text-[#BFA36A] uppercase font-semibold">
              07 // TRANSMISSION CONSOLE
            </span>
          </div>

          <h2 className="font-garamond text-4xl sm:text-6xl font-light text-[#EEF8F7]">
            Initiate <span className="italic text-[#6CA8A7]">Dialogue.</span>
          </h2>

          <p className="font-outfit text-sm text-[#8FA3AC] max-w-lg mx-auto leading-relaxed">
            Terbuka untuk tawaran magang, project kolaborasi, atau bertukar pikiran tentang Frontend & Mobile Systems Architecture.
          </p>
        </motion.div>

        {/* Email Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="panel-surface p-6 sm:p-8 space-y-4 max-w-xl mx-auto"
        >
          <span className="font-space text-[10px] text-[#6CA8A7] uppercase tracking-widest block font-bold">
            PRIMARY EMAIL ADDRESS
          </span>

          <a
            href={`mailto:${IDENTITY.email}`}
            className="font-garamond text-2xl sm:text-3xl text-[#B8D8D3] hover:text-[#BFA36A] transition-colors font-medium block underline decoration-[#6CA8A7]/40 underline-offset-4"
          >
            {IDENTITY.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-secondary cursor-pointer"
          >
            <Copy className="w-4 h-4 text-[#BFA36A]" />
            <span>COPY EMAIL ADDRESS</span>
          </button>
        </motion.div>

        {/* Transmission Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="panel-surface p-6 sm:p-8 text-left max-w-xl mx-auto space-y-6"
        >
          {sentSuccess ? (
            <div className="p-6 rounded-xl bg-[#182730] border border-[#6CA8A7] text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#B8D8D3] mx-auto" />
              <h4 className="font-garamond text-2xl font-bold text-[#EEF8F7]">
                Message Sent Successfully!
              </h4>
              <p className="font-outfit text-xs text-[#8FA3AC]">
                Your signal has been dispatched. M. Raffi Barzally will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-space text-[10px] text-[#BFA36A] uppercase font-bold tracking-widest block">
                  SENDER NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name / Organization"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#182730] border border-[#1E343E] text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#6CA8A7] transition-all placeholder-[#8FA3AC]/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-space text-[10px] text-[#BFA36A] uppercase font-bold tracking-widest block">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@address.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#182730] border border-[#1E343E] text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#6CA8A7] transition-all placeholder-[#8FA3AC]/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-space text-[10px] text-[#BFA36A] uppercase font-bold tracking-widest block">
                  MESSAGE PAYLOAD
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your transmission message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#182730] border border-[#1E343E] text-[#EEF8F7] font-outfit text-sm focus:outline-none focus:border-[#6CA8A7] transition-all placeholder-[#8FA3AC]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={transmitting}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {transmitting ? (
                  <span>DISPATCHING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#BFA36A]" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 pt-4">
          <a
            href={IDENTITY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#111C22] border border-[#1E343E] text-[#8FA3AC] hover:text-[#EEF8F7] hover:border-[#6CA8A7] transition-all flex items-center gap-2 font-space text-xs"
          >
            <Github className="w-4 h-4 text-[#BFA36A]" />
            <span>GITHUB</span>
          </a>

          <a
            href={IDENTITY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#111C22] border border-[#1E343E] text-[#8FA3AC] hover:text-[#EEF8F7] hover:border-[#6CA8A7] transition-all flex items-center gap-2 font-space text-xs"
          >
            <Instagram className="w-4 h-4 text-[#BFA36A]" />
            <span>INSTAGRAM</span>
          </a>

          <a
            href={IDENTITY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#111C22] border border-[#1E343E] text-[#8FA3AC] hover:text-[#EEF8F7] hover:border-[#6CA8A7] transition-all flex items-center gap-2 font-space text-xs"
          >
            <Linkedin className="w-4 h-4 text-[#BFA36A]" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
}


