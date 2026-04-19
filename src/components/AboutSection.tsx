'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 min-h-[60vh] flex flex-col justify-center">
      {/* 01. THE CORE IDENTITY */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Profile Focus */}
          <div className="relative shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl relative overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 animate-pulse" />
              <div className="absolute inset-[2px] rounded-[22px] overflow-hidden bg-[#1C1C1C]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/rajesh-portfolio/profile.png" 
                  alt="Rajesh Portfolio" 
                  className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rajesh&background=C6A15B&color=F5F5F5';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
            </div>
            
            <div className="absolute -bottom-2 -right-2 px-4 py-1.5 bg-primary rounded-full shadow-[0_10px_30px_rgba(198,161,91,0.4)] z-20">
              <span className="text-[9px] font-mono font-black text-[#1C1C1C] uppercase tracking-[0.2em]">Verified</span>
            </div>
          </div>

          {/* Critical Highlights Only */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] block"
              >
                {`// Neural Identity: 0x8FA2`}
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-heading leading-tight">
                Architecting <span className="text-primary italic">Resilient Ecosystems</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted leading-relaxed font-light max-w-2xl">
              I specialize in transmuting complex logic into high-performance software. My mission is to design tools where human intuition meets algorithmic precision—starting with <span className="text-white font-medium">FinDNA</span>.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest">Full-Stack Scale</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="text-xs font-mono uppercase tracking-widest">AI Intelligence</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="text-xs font-mono uppercase tracking-widest">System Logic</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 02. SYSTEM ACTIVITY (Bottom Section) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pt-12 border-t border-white/5"
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] text-primary font-mono uppercase tracking-[0.4em]">Recent System Activity</span>
          <div className="h-[1px] flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "01", group: "Kernel", action: "System Compiled", status: "Success", time: "24ms" },
            { id: "02", group: "Network", action: "Memory Link Stable", status: "Active", time: "Synced" },
            { id: "03", group: "Project", action: "FinDNA Deployment", status: "Live", time: "v2.0" },
            { id: "04", group: "Status", action: "Professional Integration", status: "Ready", time: "NOW" },
          ].map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-primary/20 transition-all">
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-muted font-mono">{activity.id}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted uppercase font-mono tracking-widest">{activity.group}</span>
                  <span className="text-sm font-light">{activity.action}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-primary font-mono uppercase">{activity.status}</span>
                <span className="text-[9px] text-muted font-mono">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pt-8 text-center md:text-left"
      >
        <p className="text-[9px] text-muted font-mono tracking-[0.3em] uppercase opacity-30">
          Deterministic Engineering // Perpetual Evolution
        </p>
      </motion.div>
    </div>
  );
}
