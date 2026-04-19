'use client';
// Force Refresh: 2026-04-19T15:33:00

import { motion } from 'framer-motion';
import { Mail, Send, Copy, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import portfolioData from '@/data/portfolioData';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function ContactInterface() {
  const [copied, setCopied] = useState<string | null>(null);
  const { social } = portfolioData;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'email': return Mail;
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      default: return Send;
    }
  };

  const getColor = (name: string) => {
    switch (name.toLowerCase()) {
      case 'email': return "text-primary";
      case 'github': return "text-white";
      case 'linkedin': return "text-[#0077B5]";
      default: return "text-primary";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-4">
      {/* 01. INTRO SECTION */}
      <section className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-mono tracking-widest"
        >
          Comms Interface
        </motion.div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading leading-tight italic">
            Let’s build <span className="text-primary not-italic">something meaningful</span> through technology.
          </h2>
          <p className="text-lg text-muted font-light leading-relaxed max-w-3xl">
            I am always open to discussing system architecture, AI research, or potential collaborations on high-impact software projects.
          </p>
        </div>
      </section>

      {/* 02. CONTACT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-4">
        {/* Left Side: Pulse Status */}
        <div className="p-6 glass rounded-2xl border-white/5 bg-white/[0.01]">
          <div className="flex items-center gap-4 text-primary mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Status: Ready for Transmission</span>
          </div>
          <p className="text-sm text-muted">Response latency expected: &lt; 24 hours</p>
        </div>

        {/* Right Side: Contact Links */}
        <div className="space-y-4">
          {social.map((link, i) => {
            const Icon = getIcon(link.name);
            const colorClass = getColor(link.name);
            
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-colors rounded-2xl -z-10" />
                <div className="glass rounded-2xl p-6 border-white/5 flex items-center justify-between hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-white/5 ${colorClass}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-1">{link.name}</h3>
                      <p className="text-sm font-medium">{link.value}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => copyToClipboard(link.value)}
                      className="p-2.5 rounded-xl hover:bg-white/5 text-muted hover:text-primary transition-all active:scale-95"
                      title="Copy to clipboard"
                    >
                      {copied === link.value ? <span className="text-[10px] font-mono text-primary">COPIED</span> : <Copy size={16} />}
                    </button>
                    <a 
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl hover:bg-white/5 text-muted hover:text-primary transition-all active:scale-95"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
