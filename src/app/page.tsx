'use client';

import { useState, Suspense, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from '../components/BootScreen';
import CommandCenter from '../components/CommandCenter';
import BackgroundEffects from '../components/BackgroundEffects';

// Use a module-level variable to persist the boot state across soft navigations.
// Next.js App Router may remount the page component on search param changes.
let hasBootedGlobal = false;

export default function Home() {
  const [booting, setBooting] = useState(!hasBootedGlobal);

  const handleBootComplete = () => {
    hasBootedGlobal = true;
    setBooting(false);
  };

  // Also backup with sessionStorage in case of a hard reload but we still want to skip it?
  // Usually, a hard reload should show the boot screen again, so global variable is better.
  
  return (
    <main className="min-h-screen bg-[#1C1C1C] text-[#F5F5F5] selection:bg-primary/30 selection:text-primary">
      <BackgroundEffects />
      <AnimatePresence mode="wait">
        {booting ? (
          <BootScreen key="boot" onComplete={handleBootComplete} />
        ) : (
          <Suspense fallback={null}>
            <CommandCenter key="dashboard" />
          </Suspense>
        )}
      </AnimatePresence>

      {/* Decorative scanline overlay for OS feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}

