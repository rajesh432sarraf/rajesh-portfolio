'use client';

import { motion } from 'framer-motion';
import { Circle, Terminal, Zap, Hourglass, Target } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

const getStatusIcon = (status: string) => {
  switch (status.toUpperCase()) {
    case 'COMPLETED': return Zap;
    case 'ACTIVE': return Terminal;
    case 'READY': return Target;
    default: return Circle;
  }
};

const getStatusColor = (status: string) => {
  switch (status.toUpperCase()) {
    case 'COMPLETED': return 'text-mesh-1';
    case 'ACTIVE': return 'text-mesh-2';
    case 'READY': return 'text-mesh-3';
    default: return 'text-foreground/60';
  }
};

export default function EvolutionTimeline() {
  const { evolutionTimeline } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="relative">
        {/* Glass Background Track */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/30 backdrop-blur-sm border-r border-white/40 -translate-x-1/2 hidden md:block" />
        
        {/* Mobile Track */}
        <div className="absolute left-8 top-4 bottom-4 w-[2px] bg-white/30 backdrop-blur-sm border-r border-white/40 md:hidden" />

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
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col items-start ${i % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}
              >
                {/* Central Node Marker */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-8 h-8 rounded-full bg-white/40 backdrop-blur-md border-[3px] flex items-center justify-center shadow-sm ${
                      event.status === 'ACTIVE' ? 'border-mesh-2 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'border-white/60'
                    }`}
                  >
                    {event.status === 'ACTIVE' && <div className="w-3 h-3 rounded-full bg-mesh-2 animate-pulse" />}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  {/* Timestamp & Phase */}
                  <div className={`flex items-center gap-3 mb-3 font-mono text-xs font-bold tracking-widest text-foreground/60 uppercase ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-mesh-1 to-mesh-4">PHASE {event.phase}</span>
                    <span>•</span>
                    <span>{event.timestamp}</span>
                  </div>
                  
                  {/* Glass Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-8 glass-panel rounded-3xl"
                  >
                    <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <div className={`p-3 rounded-2xl bg-white/40 border border-white/50 shadow-sm ${statusColor} group-hover:text-white group-hover:bg-gradient-to-br from-mesh-1 to-mesh-3 transition-colors`}>
                        <StatusIcon size={24} />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground drop-shadow-sm">{event.title}</h3>
                    </div>

                    <p className="text-base text-foreground/80 font-medium leading-relaxed mb-6">
                      {event.desc}
                    </p>
                    
                    {/* Status Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 border border-white/40 text-xs font-bold tracking-wide shadow-sm backdrop-blur-md ${statusColor}`}>
                      <div className={`w-2 h-2 rounded-full bg-current ${event.status === 'ACTIVE' ? 'animate-pulse' : ''}`} />
                      {event.status}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
