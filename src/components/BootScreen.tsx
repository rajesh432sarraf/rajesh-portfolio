'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sequences = [
  "Initializing developer...",
  "Loading problem solving modules...",
  "AI reasoning engine ready...",
  "Welcome to RajeshOS"
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < sequences.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 500); // Quick sequence transitions
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <div className="fixed inset-0 bg-[#1C1C1C] flex flex-col items-center justify-center z-50 p-6">
      <div className="max-w-md w-full">
        <div className="flex items-center gap-2 mb-8 ml-1">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-secondary/50 font-mono text-xs uppercase tracking-widest">System Boot</span>
        </div>
        
        <div className="space-y-2">
          {sequences.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={i <= index ? { opacity: 1, x: 0 } : {}}
              className={`font-mono text-sm ${i === index ? 'text-primary' : 'text-muted'}`}
            >
              {i <= index && (
                <span className="mr-2 opacity-50">{index > i ? '[ OK ]' : '>'}</span>
              )}
              {i <= index && text}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 h-[1px] bg-white/5 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="absolute inset-y-0 left-0 bg-primary/30"
            initial={{ width: "0%" }}
            animate={{ width: `${(index / sequences.length) * 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
