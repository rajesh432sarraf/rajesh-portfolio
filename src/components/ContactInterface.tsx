'use client';

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

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* 01. INTRO SECTION */}
      <section className="text-center space-y-6">
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground drop-shadow-sm">
          Let’s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-mesh-1 to-mesh-2 italic drop-shadow-sm">something meaningful.</span>
        </h3>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
          I am always open to discussing system architecture, engineering challenges, or potential collaborations on high-impact software projects.
        </p>
      </section>

      {/* 02. CONTACT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {social.map((link, i) => {
          const Icon = getIcon(link.name);
          
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 flex flex-col justify-between items-start gap-6 group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-mesh-1/10 to-mesh-4/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-full flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/40 border border-white/50 text-foreground group-hover:text-white group-hover:bg-gradient-to-br from-mesh-1 to-mesh-3 transition-all duration-300 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground drop-shadow-sm mb-1">{link.name}</h3>
                    <p className="text-sm text-foreground/70 font-medium">{link.value}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full flex gap-3 pt-6 border-t border-white/30 relative z-10">
                <button 
                  onClick={() => copyToClipboard(link.value)}
                  className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-white/40 border border-white/50 text-sm font-bold shadow-sm hover:bg-white/60 transition-colors"
                  title="Copy to clipboard"
                >
                  {copied === link.value ? <span className="text-mesh-1">Copied!</span> : <><Copy size={16} /> Copy</>}
                </button>
                <a 
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-mesh-1 to-mesh-3 text-white text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-0.5"
                >
                  <ArrowUpRight size={16} /> Visit
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
