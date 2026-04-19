'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData';

export default function SkillsMatrix() {
  const { skills: skillCategories } = portfolioData;

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="relative h-[600px] hidden lg:block">
        {/* Visual Matrix Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-40 h-40 rounded-full glass border-primary/30 flex items-center justify-center z-10"
          >
            <div className="text-center">
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary/60 mb-1">Central</div>
              <div className="text-xl font-heading font-bold">CORE</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-primary/60 mt-1">Matrix</div>
            </div>
          </motion.div>

          {/* Connected Categories */}
          {skillCategories.map((cat, i) => {
            const angle = (i * 360) / skillCategories.length;
            const radius = 220;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div key={cat.title} className="absolute flex items-center justify-center">
                {/* Connection Line */}
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 0.2, width: radius }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="absolute h-[1px] bg-primary origin-left"
                  style={{ transform: `rotate(${angle}deg)` }}
                />
                
                {/* Category Node */}
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x, y }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute w-48 p-4 glass rounded-xl border-white/10 group cursor-default hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${cat.color}`}>
                      {(() => {
                        const Icon = cat.icon;
                        return <Icon size={16} />;
                      })()}
                    </div>
                    <span className="text-xs font-heading font-medium tracking-wide uppercase">{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-muted group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet List View */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 glass rounded-2xl border-white/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${cat.color}`}>
                {(() => {
                  const Icon = cat.icon;
                  return <Icon size={20} />;
                })()}
              </div>
              <h3 className="font-heading font-semibold uppercase tracking-wider text-sm">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-6 glass rounded-2xl border-primary/20 bg-primary/[0.02] text-center"
      >
        <p className="text-sm text-muted">
          <span className="text-primary font-mono uppercase tracking-widest text-[10px] block mb-2">System Insight</span>
          Interconnected skills forming a modular intelligence structure for cross-domain engineering.
        </p>
      </motion.div>
    </div>
  );
}
