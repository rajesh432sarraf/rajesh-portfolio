'use client';

import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolioData';

export default function SkillsMatrix() {
  const { skills } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillGroup, i) => {
          const Icon = skillGroup.icon;
          
          return (
            <motion.div 
              key={skillGroup.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-3xl group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/40 border border-white/50 text-foreground group-hover:text-white group-hover:bg-gradient-to-br from-mesh-1 to-mesh-3 transition-all duration-300 shadow-sm">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground drop-shadow-sm group-hover:text-gradient transition-all duration-300">
                  {skillGroup.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, j) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full bg-white/30 border border-white/40 text-sm font-medium text-foreground/80 hover:bg-white/60 hover:text-foreground transition-colors cursor-default backdrop-blur-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
