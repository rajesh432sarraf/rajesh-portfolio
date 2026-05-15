'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Eye, Terminal, Activity, Layers } from 'lucide-react';

export default function ResumeViewer() {
  const resumeUrl = "/rajesh-portfolio/resume.pdf";

  const metadata = [
    { label: "Document Type", value: "PDF / A4", icon: FileText },
    { label: "Integrity", value: "Verified", icon: ShieldCheck },
    { label: "Format", value: "Optimized", icon: Activity },
    { label: "Profile", value: "Full Stack", icon: Layers }
  ];

  return (
    <div className="max-w-6xl mx-auto h-full flex flex-col gap-10 py-6">
      {/* SECTION 01: HEADER CONTROL PANEL */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-[2.5rem] glass-panel relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-mesh-1/10 via-transparent to-mesh-2/10 opacity-30" />
        
        <div className="relative z-10 flex items-center gap-6 text-center md:text-left">
          <div className="p-5 rounded-2xl bg-white/40 border border-white/50 text-foreground shadow-sm group-hover:bg-gradient-to-br from-mesh-1 to-mesh-3 group-hover:text-white transition-all duration-300">
            <FileText size={36} className="text-primary" />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-heading font-black text-gradient uppercase tracking-tighter italic">Curriculum Vitae</h2>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-mesh-2 animate-pulse" />
              <span className="text-[10px] font-mono text-muted uppercase tracking-[0.4em]">Professional Experience // 2024.v1</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-4 w-full md:w-auto">
          <a 
            href={resumeUrl} 
            download 
            className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-mesh-1 to-mesh-3 text-white font-black text-sm hover:scale-105 transition-all shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.5)] uppercase tracking-widest"
          >
            <Download size={20} /> Get Resume
          </a>
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 rounded-2xl bg-white/40 border border-white/50 text-foreground hover:bg-white/60 transition-all shadow-sm active:scale-95"
          >
            <ExternalLink size={24} />
          </a>
        </div>
      </motion.div>

      {/* SECTION 02: DOCUMENT VIEWPORT */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-[600px]">
        
        {/* SIDEBAR: KERNEL ANALYSIS */}
        <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
          <div className="p-8 glass-panel rounded-[2.5rem] space-y-10 flex-1">
            <div className="space-y-6">
              <h3 className="text-xs font-mono text-primary font-bold uppercase tracking-[0.5em] flex items-center gap-3">
                <Terminal size={14} /> Document Metadata
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {metadata.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/30 border border-white/40 group hover:bg-white/50 transition-all shadow-sm">
                    <div className="flex items-center gap-3">
                      <item.icon size={16} className="text-muted group-hover:text-primary transition-colors" />
                      <span className="text-xs text-muted font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                    <span className="text-xs font-mono text-foreground font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-white/30 space-y-6">
              <h3 className="text-xs font-mono text-mesh-2 font-bold uppercase tracking-[0.5em] flex items-center gap-3">
                <Activity size={14} /> Expertise Snapshot
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Distributed Systems', 'Cloud Scaling', 'Full-Stack Engineering', 'UI/UX Design'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/30 border border-white/40 text-[9px] font-bold text-muted uppercase hover:text-primary hover:border-primary transition-colors cursor-default backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[1.5rem] bg-white/40 border border-white/50 flex items-center gap-4 shadow-sm backdrop-blur-md">
            <div className="p-3 rounded-full bg-mesh-3/20 text-mesh-3">
              <Eye size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-muted uppercase tracking-widest leading-relaxed">
                Live Preview <span className="text-mesh-3 font-bold underline underline-offset-2">Active</span>
              </p>
              <p className="text-[9px] text-muted/60 lowercase italic">synchronized with verified_source</p>
            </div>
          </div>
        </div>

        {/* MAIN PREVIEW AREA */}
        <div className="lg:col-span-8 glass-panel rounded-[2.5rem] overflow-hidden relative group">
          <div className="absolute inset-0 bg-mesh-1/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
          
          <iframe 
            src={`${resumeUrl}#toolbar=0&view=FitH`} 
            className="w-full h-full border-none grayscale-[0.2] contrast-[1.05] hover:grayscale-0 transition-all duration-700 bg-white"
            title="Resume Preview"
          />
          
          {/* Fallback Display if no PDF */}
          <div className="absolute inset-0 -z-20 flex items-center justify-center flex-col gap-6 text-center p-12 bg-white/50">
            <div className="w-24 h-24 rounded-full bg-white/40 flex items-center justify-center text-muted border border-white/50 animate-pulse shadow-sm">
              <FileText size={48} />
            </div>
            <div className="space-y-4">
              <h4 className="font-heading text-2xl text-foreground font-black tracking-widest uppercase italic drop-shadow-sm">Resume Not Found</h4>
              <p className="text-sm text-muted font-medium leading-relaxed max-w-sm mx-auto">
                File <code className="text-primary font-mono bg-white/50 px-2 py-0.5 rounded border border-white/60">resume.pdf</code> not detected in public folder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
