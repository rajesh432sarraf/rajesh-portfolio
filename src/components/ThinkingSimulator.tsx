'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Box, Cpu, Activity, ShieldCheck, ChevronRight, Settings, Database, Code } from 'lucide-react';

const steps = [
  {
    title: "System Deconstruction",
    desc: "Identifying first principles and defining core system constraints to ensure architectural integrity.",
    icon: Search,
    color: "text-primary",
    details: ["Constraint Analysis", "First-Principles Thinking", "Resource Allocation"]
  },
  {
    title: "Schema & Flow Design",
    desc: "Architecting the data flow and component hierarchy for maximum scalability and low latency.",
    icon: Database,
    color: "text-secondary",
    details: ["Data Pipeline Design", "State Propagation", "Component Decoupling"]
  },
  {
    title: "Logic Engineering",
    desc: "Implementing deterministic algorithms and high-performance middleware for the system core.",
    icon: Code,
    color: "text-primary",
    details: ["Algorithm Efficiency", "Middleware Development", "Deterministic Logic"]
  },
  {
    title: "Performance Hardening",
    desc: "Stress testing and refining the computational velocity of every system module.",
    icon: Activity,
    color: "text-secondary",
    details: ["Load Balancing", "Memory Management", "Speed Optimization"]
  },
  {
    title: "Resilience Verification",
    desc: "Rigorous edge-case validation to ensure the system remains stable under extreme conditions.",
    icon: ShieldCheck,
    color: "text-primary",
    details: ["Chaos Engineering", "Predictive Error Handling", "UX Safety Guardrails"]
  }
];

export default function ThinkingSimulator() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-5xl mx-auto py-4">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Navigation / Step list */}
        <div className="w-full md:w-1/3 space-y-2">
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(i)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border ${
                activeStep === i 
                ? 'bg-primary/10 border-primary/30 text-primary' 
                : 'hover:bg-white/5 border-transparent text-muted'
              }`}
            >
              <div className={`p-2 rounded-lg ${activeStep === i ? 'bg-primary/20' : 'bg-white/5'}`}>
                <step.icon size={18} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono tracking-widest opacity-50 block uppercase">Step 0{i+1}</span>
                <span className="text-sm font-heading font-semibold uppercase">{step.title}</span>
              </div>
              {activeStep === i && (
                <motion.div layoutId="arrow">
                  <ChevronRight size={16} />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Simulator Display */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="glass rounded-3xl p-8 md:p-12 min-h-[440px] flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`p-4 rounded-2xl bg-white/5 ${steps[activeStep].color}`}>
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon size={40} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-heading mb-1">{steps[activeStep].title}</h3>
                    <p className="text-muted font-mono text-xs uppercase tracking-[0.2em] animate-pulse">Processing Logical Flow...</p>
                  </div>
                </div>

                <p className="text-xl text-foreground font-light leading-relaxed">
                  {steps[activeStep].desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps[activeStep].details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-light text-muted">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative progress animation */}
              <div className="mt-12 flex gap-1 h-1">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-full transition-all duration-500 ${
                      i <= activeStep ? 'bg-primary' : 'bg-white/5'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
