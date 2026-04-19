'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Timer, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import portfolioData from '@/data/portfolioData';

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'problem solving strength': return Brain;
    case 'technology distribution': return Code;
    case 'coding consistency': return Timer;
    case 'learning progress': return TrendingUp;
    default: return Brain;
  }
};

export default function CodeIntelligence() {
  const [activityHeights, setActivityHeights] = useState<number[]>([]);
  const { stats, languages } = portfolioData.codeIntelligence;

  useEffect(() => {
    // Generate heights on mount to avoid purity issues and hydration mismatch
    const timer = setTimeout(() => {
      setActivityHeights([...Array(24)].map(() => Math.random() * 80 + 20));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = getIcon(stat.name);
          return (
            <motion.div 
              key={stat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border-white/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <Icon size={20} />
                </div>
                <span className="text-2xl font-heading text-foreground">{stat.value}%</span>
              </div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted">{stat.name}</h3>
              
              <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className={`h-full bg-gradient-to-r ${i % 2 === 0 ? 'from-primary/50 to-primary' : 'from-secondary/50 to-secondary'}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Language Distribution */}
        <div className="glass rounded-3xl p-8 border-white/5">
          <h3 className="text-lg font-heading mb-8">System Distribution</h3>
          <div className="space-y-6">
            {languages.map((lang, i) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                  <span className="text-muted">{lang.name}</span>
                  <span className="text-primary">{lang.share}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.share}%` }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                    className="h-full bg-primary/40 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Simulation */}
        <div className="glass rounded-3xl p-8 border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-heading mb-4">Consistency Matrix</h3>
            <p className="text-sm text-muted mb-8">Visualization of system active hours and core kernel commits over theoretical 24h cycle.</p>
          </div>
          
          <div className="flex items-end justify-between h-32 gap-1 px-2">
            {(activityHeights.length > 0 ? activityHeights : [...Array(24)].map(() => 0)).map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: 1 + i * 0.02 }}
                className={`w-full rounded-t-sm ${i > 8 && i < 18 ? 'bg-primary/60' : 'bg-white/10'}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-mono text-muted uppercase tracking-widest px-1">
            <span>00:00</span>
            <span>12:00</span>
            <span>23:59</span>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="p-6 glass rounded-2xl border-white/5 bg-white/[0.01]"
      >
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">Neural analysis complete. System performing at optimal logic efficiency.</p>
        </div>
      </motion.div>
    </div>
  );
}
