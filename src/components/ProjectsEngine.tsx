'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight, X, Terminal, Cpu, Database, Layers, Code as CodeIcon, Activity, Box } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function ProjectsEngine() {
  const { projects } = portfolioData;
  const [selectedSchematic, setSelectedSchematic] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === selectedSchematic);

  return (
    <div className="max-w-6xl mx-auto space-y-16 py-4 relative">
      {projects.map((project, i) => (
        <motion.section 
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="glass rounded-3xl p-8 md:p-12 border-white/5 overflow-hidden relative shadow-2xl">
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Info Side */}
              <div className="flex-1 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      {(() => {
                        const Icon = project.icon;
                        return <Icon size={20} />;
                      })()}
                    </div>
                    <span className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">Module: Case Study</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading mb-2">{project.title}</h2>
                  <p className="text-lg text-primary/80 font-medium italic">{project.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase text-muted tracking-widest">The Problem</h3>
                    <p className="text-foreground/90 leading-relaxed font-light">{project.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase text-muted tracking-widest">Objective</h3>
                    <p className="text-foreground/90 leading-relaxed font-light">{project.objective}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase text-muted tracking-widest">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map(f => (
                      <div key={f} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm">
                        <ChevronRight size={12} className="text-primary" />
                        <span className="font-light">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.schematic && (
                    <button 
                      onClick={() => setSelectedSchematic(project.id)}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-[#1C1C1C] font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                    >
                      View Schematic <Cpu size={14} />
                    </button>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary/80 text-[#1C1C1C] font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-secondary/20"
                    >
                      Launch System <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full glass border-white/10 text-sm hover:bg-white/5 transition-colors"
                    >
                      Source Code <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech Side */}
              <div className="lg:w-1/3 flex flex-col justify-center border-l border-white/5 lg:pl-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-mono uppercase text-muted tracking-widest mb-4">System Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-md bg-primary/5 border border-primary/20 text-primary text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase text-muted tracking-widest mb-4">Approach</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed italic border-l-2 border-primary/30 pl-4 py-1">
                      &quot;{project.approach}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Schematic Deep-Dive Overlay */}
      <AnimatePresence>
        {selectedSchematic && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 backdrop-blur-md bg-black/40"
          >
            <motion.div
              layoutId={`schematic-${selectedSchematic}`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl max-h-full overflow-y-auto glass border-primary/30 rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl shadow-primary/10 custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedSchematic(null)}
                className="absolute top-8 right-8 p-3 rounded-2xl bg-white/5 hover:bg-red-500/10 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="space-y-12">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary">
                    <Terminal size={18} />
                    <span className="text-xs font-mono uppercase tracking-[0.4em]">Project Integrity Deep-Dive</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading uppercase italic tracking-tighter">System Schematic: {activeProject.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-sm font-mono text-primary uppercase tracking-widest flex items-center gap-2">
                        <Box size={14} /> Architectural Solution
                      </h3>
                      <p className="text-xl font-light leading-relaxed text-foreground/90">
                        {activeProject.schematic?.solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xs font-mono text-muted uppercase tracking-widest">Engineering Challenges</h3>
                        <ul className="space-y-3">
                          {activeProject.schematic?.challenges.map(c => (
                            <li key={c} className="flex gap-3 text-sm font-light text-muted leading-snug">
                              <span className="text-primary mt-1">•</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xs font-mono text-muted uppercase tracking-widest">Core Architecture</h3>
                        <p className="text-sm font-light text-muted leading-relaxed italic border-l border-white/10 pl-4">
                          {activeProject.schematic?.architecture}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 space-y-6">
                      <h3 className="text-[10px] font-mono text-secondary uppercase tracking-[0.3em]">System Metrics</h3>
                      <div className="space-y-4">
                        {activeProject.schematic?.metrics.map(m => (
                          <div key={m} className="flex items-center gap-3">
                             <Activity size={14} className="text-secondary" />
                             <span className="text-sm font-mono">{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center gap-4">
                       <ShieldCheck className="text-primary shrink-0" size={24} />
                       <p className="text-[10px] font-mono text-muted uppercase leading-relaxed tracking-wider">
                         Schematic verified by neural architect kernel.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-[0.5em] opacity-40">End of Technical Record</span>
                  <button 
                    onClick={() => setSelectedSchematic(null)}
                    className="px-8 py-3 rounded-full glass border-white/10 text-xs font-mono uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                  >
                    Close Session
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center pb-8 pt-12">
        <p className="text-xs font-mono text-muted uppercase tracking-[0.4em]">End of Core Projects Matrix</p>
      </div>
    </div>
  );
}

// Internal Helper for Verification
function ShieldCheck({ className, size }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
