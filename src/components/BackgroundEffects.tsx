'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function BackgroundEffects() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTimeout(() => setIsClient(true), 0);
    // Reduced particle count for performance (20 -> 12)
    const newParticles = [...Array(12)].map(() => ({
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      opacity: Math.random() * 0.4,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20
    }));
    setTimeout(() => setParticles(newParticles), 0);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#1C1C1C]">
      {/* 3D Perspective Grid Container - Optimized size and hardware acceleration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '800px' }}>
        <div 
          className="relative w-[150%] h-[150%] rotate-x-[60deg] opacity-30 will-change-transform"
          style={{ transform: 'rotateX(60deg) translateZ(0)' }}
        >
          {/* Vertical Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(198,161,91,0.4)_1px,transparent_1px)] bg-[length:50px_100%] shadow-[inset_0_0_100px_#1C1C1C]" />
          
          {/* Horizontal Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(198,161,91,0.4)_1px,transparent_1px)] bg-[length:100%_50px]" />
          
          {/* Scanning Pulse Line */}
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(198,161,91,0.6)] z-10 will-change-[top]"
          />
        </div>
      </div>

      {/* Vanishing Point Glow - Reduced blur radius for performance (120px -> 60px) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 blur-[60px] rounded-full translate-z-0" />

      {/* Drifting Tech Particles - Only rendered on client to avoid hydration mismatch */}
      {isClient && particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: p.x, y: p.y, opacity: p.opacity, scale: p.scale }}
          animate={{ 
            y: [null, '-20%', '120%'],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: p.delay
          }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute w-1 h-1 bg-primary rounded-sm blur-[0.5px]"
        />
      ))}

      {/* Scanline Overlay - Static for performance */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      
      {/* Vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1C1C1C_85%)]" />
    </div>
  );
}
