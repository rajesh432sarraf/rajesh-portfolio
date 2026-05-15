'use client';

import { motion } from 'framer-motion';

export default function MeshBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background">
      {/* Blob 1 - Indigo */}
      <motion.div
        animate={{
          x: [0, 80, 0, -80, 0],
          y: [0, 40, 100, 40, 0],
          scale: [1, 1.1, 1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-25"
        style={{ backgroundColor: 'var(--mesh-1)' }}
      />
      
      {/* Blob 2 - Teal */}
      <motion.div
        animate={{
          x: [0, -100, 0, 80, 0],
          y: [0, 80, 0, -40, 0],
          scale: [1, 1.3, 1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
        style={{ backgroundColor: 'var(--mesh-2)' }}
      />

      {/* Blob 3 - Rose */}
      <motion.div
        animate={{
          x: [0, 120, 240, 120, 0],
          y: [0, -80, 0, 80, 0],
          scale: [1, 1.05, 1.2, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-15%] left-[15%] w-[65vw] h-[65vw] rounded-full mix-blend-multiply filter blur-[140px] opacity-15"
        style={{ backgroundColor: 'var(--mesh-3)' }}
      />

      {/* Blob 4 - Amber */}
      <motion.div
        animate={{
          x: [0, -60, -120, -60, 0],
          y: [0, 100, 0, -100, 0],
          scale: [1, 1.1, 1, 1.15, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[110px] opacity-15"
        style={{ backgroundColor: 'var(--mesh-4)' }}
      />
      
      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </div>
  );
}
