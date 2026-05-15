'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

const Github = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function ProjectsEngine() {
  const { projects } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, i) => {
          const Icon = project.icon;
          
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-[2rem] group flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-white/40 border border-white/50 text-foreground group-hover:text-white group-hover:bg-gradient-to-br from-mesh-1 to-mesh-3 transition-all duration-300 shadow-sm">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground drop-shadow-sm group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-bold text-foreground/60 uppercase tracking-widest">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Core Info */}
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider mb-1">Objective</h4>
                  <p className="text-foreground/80 font-medium leading-relaxed">{project.objective}</p>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-full bg-white/30 border border-white/40 text-xs font-bold text-foreground/80 shadow-sm backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/30">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-mesh-1 to-mesh-3 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-0.5"
                  >
                    <span>Live Deployment</span>
                    <ArrowUpRight size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-xl bg-white/40 border border-white/50 text-foreground hover:bg-white/60 transition-all shadow-sm hover:-translate-y-0.5"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
