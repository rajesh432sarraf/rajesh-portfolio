'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Eye, Terminal, Activity, Layers } from 'lucide-react';

export default function ResumeViewer() {
  const resumeUrl = "/rajesh-portfolio/resume.pdf"; 

  const metadata = [
    { label: "Document Type", value: "PDF / A4", icon: FileText },
    { label: "System Sync", value: "Verified", icon: ShieldCheck },
    { label: "Logic Load", value: "Optimal", icon: Activity },
    { label: "Integration", value: "Full Stack", icon: Layers }
  ];

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col gap-10 py-6">
      {/* SECTION 01: HEADER CONTROL PANEL */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-30" />
        
        <div className="relative z-10 flex items-center gap-6 text-center md:text-left">
          <div className="p-5 rounded-2xl bg-primary shadow-[0_0_30px_rgba(198,161,91,0.3)] text-[#1C1C1C]">
            <FileText size={36} />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter italic">Resume Kernel</h2>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em]">Official System Spec // v2.4.b</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-4 w-full md:w-auto">
          <a 
            href={resumeUrl} 
            download 
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-[#D4B475] text-[#1C1C1C] font-black text-sm hover:scale-105 transition-all shadow-[0_10px_40px_rgba(198,161,91,0.4)] uppercase tracking-widest"
          >
            <Download size={20} /> Download Specs
          </a>
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 rounded-2xl glass border-white/10 text-white hover:bg-white/10 transition-all hover:border-primary/40 active:scale-95 shadow-xl"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </motion.div>

      {/* SECTION 02: DOCUMENT VIEWPORT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-[600px]">
        
        {/* SIDEBAR: KERNEL ANALYSIS */}
        <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
          <div className="p-8 glass rounded-[2rem] border-white/5 space-y-10 bg-white/[0.01] flex-1">
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                <Terminal size={14} /> System Metadata
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {metadata.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 group hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className="text-muted group-hover:text-primary transition-colors" />
                      <span className="text-xs text-muted font-light">{item.label}</span>
                    </div>
                    <span className="text-xs font-mono text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 space-y-6">
              <h3 className="text-xs font-mono text-secondary uppercase tracking-[0.5em] flex items-center gap-3">
                <Activity size={14} /> Quick Insights
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Distributed Systems', 'Neural Networks', 'Full-Stack Scaling', 'Logic Architecture'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-mono text-muted uppercase group-hover:text-primary transition-colors hover:border-primary/30 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center gap-4 shadow-lg shadow-black/20">
            <div className="p-3 rounded-full bg-secondary/20 text-secondary">
              <Eye size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest leading-relaxed">
                Live Preview <span className="text-secondary">active</span>
              </p>
              <p className="text-[9px] text-muted/60 lowercase italic">synchronized with kernel_origin_fs</p>
            </div>
          </div>
        </div>

        {/* MAIN PREVIEW AREA */}
        <div className="lg:col-span-8 glass rounded-[2rem] border-white/5 overflow-hidden bg-white/[0.02] relative group shadow-2xl">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
          
          <iframe 
            src={`${resumeUrl}#toolbar=0&view=FitH`} 
            className="w-full h-full border-none grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            title="Resume System Preview"
          />
          
          {/* Fallback Display if no PDF */}
          <div className="absolute inset-0 -z-20 flex items-center justify-center flex-col gap-6 text-center p-12 bg-[#1C1C1C]">
            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-muted border border-white/10 animate-pulse">
              <FileText size={48} />
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-white tracking-widest uppercase italic">Missing System Kernel</h4>
              <p className="text-sm text-muted font-light leading-relaxed max-w-sm mx-auto">
                Kernel source file <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">resume.pdf</code> not detected in public repository. Deploy to root folder to enable preview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
