'use client';

import { motion } from 'framer-motion';
import { Circle, Terminal, Zap, Hourglass, Target } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

const getStatusIcon = (status: string) => {
  switch (status.toUpperCase()) {
    case 'COMPLETED': return Zap;
    case 'ACTIVE': return Terminal;
    case 'UPCOMING': return Hourglass;
    case 'GOAL': return Target;
    default: return Circle;
  }
};

const getStatusColor = (status: string) => {
  switch (status.toUpperCase()) {
    case 'COMPLETED': return 'text-secondary';
    case 'ACTIVE': return 'text-primary';
    case 'UPCOMING': return 'text-muted';
    case 'GOAL': return 'text-white/40';
    default: return 'text-muted';
  }
};

export default function EvolutionTimeline() {
  const { evolutionTimeline } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="relative">
        {/* Futuristic Background Track */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent -translate-x-1/2 hidden md:block" />
        
        {/* Mobile Track */}
        <div className="absolute left-8 top-4 bottom-4 w-[1px] bg-primary/20 md:hidden" />

        <div className="space-y-16 md:space-y-24 relative">
          {evolutionTimeline.map((event, i) => {
            const StatusIcon = getStatusIcon(event.status);
            const statusColor = getStatusColor(event.status);
            
            return (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col items-start ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}
              >
                {/* Central Node Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className={`w-4 h-4 rounded-full bg-[#1C1C1C] border-2 flex items-center justify-center ${
                      event.status === 'ACTIVE' ? 'border-primary ring-4 ring-primary/20' : 'border-white/20'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${event.status === 'ACTIVE' ? 'bg-primary' : 'bg-white/20'}`} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  {/* Timestamp & Phase */}
                  <div className={`flex items-center gap-3 mb-2 font-mono text-[10px] uppercase tracking-[0.2em] ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-primary font-bold">PHASE {event.phase}</span>
                    <span className="text-muted/40">•</span>
                    <span className="text-muted">{event.timestamp}</span>
                  </div>
                  
                  {/* Glass Card */}
                  <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <div className={`p-2 rounded-lg bg-white/5 ${statusColor}`}>
                        <StatusIcon size={18} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-heading group-hover:text-primary transition-colors">{event.title}</h3>
                    </div>

                    <p className="text-sm text-muted leading-relaxed font-light mb-6">
                      {event.desc}
                    </p>
                    
                    {/* Status Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-[0.2em] ${statusColor}`}>
                      <div className="w-1 h-1 rounded-full bg-current animate-pulse" />
                      {event.status}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Evolution Summary Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-32 p-10 md:p-16 glass rounded-[3rem] border-primary/20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-10"
      >
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        
        <div className="relative z-10 space-y-4 flex-1">
          <Terminal className="text-primary mb-4" size={32} />
          <h3 className="text-3xl md:text-4xl font-heading leading-tight">
            System Evolution <span className="text-primary italic">Perpetual</span>
          </h3>
          <p className="text-muted leading-relaxed font-light">
            Continuous system expansion through recursive learning and high-frequency deployment iterations. No technical plateau detected.
          </p>
        </div>

        <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 min-w-[200px]">
          <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-4">Current Vector</div>
          <div className="text-2xl font-heading italic">&quot;Inventing the Future.&quot;</div>
        </div>
      </motion.div>
    </div>
  );
}
