'use client';
// Force system-wide HMR refresh: 2026-04-19T16:15:00
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Cpu,
  FileText,
  History,
  MessageSquare,
  Network,
  Send,
  X,
  Maximize2,
  Minus,
  Terminal
} from 'lucide-react';
import portfolioData from '@/data/portfolioData';
import AboutSection from './AboutSection';
import SkillsMatrix from './SkillsMatrix';
import ProjectsEngine from './ProjectsEngine';
import ThinkingSimulator from './ThinkingSimulator';
import CodeIntelligence from './CodeIntelligence';
import EvolutionTimeline from './EvolutionTimeline';
import AIInteraction from './AIInteraction';
import ContactInterface from './ContactInterface';
import ResumeViewer from './ResumeViewer';
import SystemTerminal from './SystemTerminal';

type ModuleId = 'about' | 'projects' | 'skills' | 'timeline' | 'code' | 'thinking' | 'ai' | 'resume' | 'contact' | 'terminal' | null;

const modules = [
  { id: 'projects', title: 'Projects Engine', icon: Cpu, color: 'text-primary' },
  { id: 'skills', title: 'Skills Matrix', icon: Network, color: 'text-secondary' },
  { id: 'timeline', title: 'Evolution Timeline', icon: History, color: 'text-primary' },
  { id: 'code', title: 'Code Intelligence', icon: BarChart3, color: 'text-secondary' },
  { id: 'thinking', title: 'Thinking Simulator', icon: Code2, color: 'text-primary' },
  { id: 'ai', title: 'AI Interaction', icon: MessageSquare, color: 'text-secondary' },
  { id: 'resume', title: 'Resume Kernel', icon: FileText, color: 'text-primary' },
  { id: 'contact', title: 'Contact Interface', icon: Send, color: 'text-secondary' },
  { id: 'terminal', title: 'System Terminal', icon: Terminal, color: 'text-primary' },
];

export default function CommandCenter() {
  const [activeWindow, setActiveWindow] = useState<ModuleId>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = () => setIsMaximized(!isMaximized);

  const handleClose = () => {
    setActiveWindow(null);
    setIsMaximized(false);
  };

  const renderContent = () => {
    switch (activeWindow) {
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsEngine />;
      case 'skills': return <SkillsMatrix />;
      case 'timeline': return <EvolutionTimeline />;
      case 'code': return <CodeIntelligence />;
      case 'thinking': return <ThinkingSimulator />;
      case 'ai': return <AIInteraction />;
      case 'contact': return <ContactInterface />;
      case 'resume': return <ResumeViewer />;
      case 'terminal': return <SystemTerminal onNavigate={(id) => setActiveWindow(id as ModuleId)} />;
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen p-4 md:p-8 flex flex-col h-screen overflow-hidden">
      {/* Header / StatusBar */}
      <header className="flex justify-between items-center mb-8 border-b border-white/5 pb-2 shrink-0 h-16">
        <div className="flex items-center gap-4 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative cursor-pointer"
            onClick={() => setActiveWindow('about')}
            role="button"
          >
            <div className="w-14 h-14 rounded-xl overflow-hidden relative p-[2px] bg-white/5 border border-white/10 group-hover:border-primary/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-secondary opacity-50 animate-[spin_4s_linear_infinite]" />
              <div className="w-full h-full rounded-[9px] overflow-hidden relative bg-[#1C1C1C]">
                <img
                  src="/rajesh-portfolio/profile.png"
                  alt="R"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-primary font-heading font-bold text-2xl flex items-center justify-center h-full">R</span>';
                  }}
                />
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(198,161,91,0.1)_50%)] bg-[length:100%_2px] opacity-40" />
              </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-[#1C1C1C] z-10" />
          </motion.div>
          <div>
            <h1 className="text-lg font-heading tracking-tight leading-none">Rajesh<span className="text-primary italic">OS</span></h1>
            <p className="text-[10px] text-muted font-mono uppercase tracking-[0.2em] mt-1">System Status: Online</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {portfolioData.systemStats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-muted font-mono uppercase tracking-widest">{stat.label}</span>
                <span className={`text-xs font-mono ${stat.color}`}>{stat.value}</span>
              </div>
              {i < portfolioData.systemStats.length - 1 && (
                <div className="h-8 w-[1px] bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </header>

      {/* System Node Map */}
      <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center -mt-8">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <path d="M 200 300 L 400 200" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          <path d="M 200 450 L 400 550" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          <path d="M 400 200 L 700 300" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          <path d="M 400 550 L 700 450" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          <path d="M 700 300 L 900 200" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
          <path d="M 700 450 L 900 550" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-primary/20" />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-24 md:gap-y-16 relative z-10 p-4 max-w-7xl w-full">
          <div className="space-y-8 flex flex-col justify-center">
            {modules.slice(0, 2).map((mod, i) => (
              <NodeItem key={mod.id} mod={mod} index={i} onClick={() => setActiveWindow(mod.id as ModuleId)} />
            ))}
          </div>
          <div className="space-y-8 md:translate-y-12">
            {modules.slice(2, 5).map((mod, i) => (
              <NodeItem key={mod.id} mod={mod} index={i + 2} onClick={() => setActiveWindow(mod.id as ModuleId)} />
            ))}
          </div>
          <div className="space-y-8 flex flex-col justify-center">
            {modules.slice(5, 9).map((mod, i) => (
              <NodeItem key={mod.id} mod={mod} index={i + 5} onClick={() => setActiveWindow(mod.id as ModuleId)} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] font-mono text-primary uppercase tracking-[0.5em] animate-pulse">Neural Path Active // All Systems Go</p>
        </motion.div>
      </div>

      {/* Footer / Dock */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 flex justify-center z-40 bg-gradient-to-t from-[#1C1C1C] to-transparent pointer-events-none">
        <div className="glass px-6 py-3 rounded-full flex gap-6 items-center pointer-events-auto border-white/5 shadow-2xl">
          {modules.slice(0, 4).map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveWindow(mod.id as ModuleId)}
              className={`hover:text-primary transition-colors ${activeWindow === mod.id ? 'text-primary' : 'text-muted'}`}
            >
              {(() => {
                const Icon = mod.icon;
                return <Icon size={20} />;
              })()}
            </button>
          ))}
          <div className="w-[1px] h-4 bg-white/10" />
          {modules.slice(4).map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveWindow(mod.id as ModuleId)}
              className={`hover:text-primary transition-colors ${activeWindow === mod.id ? 'text-primary' : 'text-muted'}`}
            >
              {(() => {
                const Icon = mod.icon;
                const size = 20;
                return <Icon size={size} />;
              })()}
            </button>
          ))}
        </div>
      </footer>

      {/* Window Manager Overlay */}
      <AnimatePresence>
        {activeWindow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center ${isMaximized ? 'p-0' : 'p-4 md:p-8'} bg-black/40 backdrop-blur-sm`}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                width: isMaximized ? '100vw' : '100%',
                height: isMaximized ? '100vh' : 'auto',
                maxWidth: isMaximized ? '100vw' : '1152px',
                maxHeight: isMaximized ? '100vh' : '90vh'
              }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                mass: 1
              }}
              className={`w-full glass ${isMaximized ? 'rounded-none border-none' : 'rounded-3xl border-white/10'} overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.6)] relative ring-1 ring-white/10`}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-white/[0.03] backdrop-blur-md relative z-30">
                <div className="flex items-center gap-3">
                  {(() => {
                    const mod = modules.find(m => m.id === activeWindow);
                    if (!mod) return <div className="p-2 rounded-lg bg-primary/10"><BarChart3 size={16} className="text-primary" /></div>;
                    const Icon = mod.icon;
                    return <div className="p-2 rounded-lg bg-primary/10"><Icon size={16} className="text-primary" /></div>;
                  })()}
                  <span className="font-heading tracking-wide uppercase text-xs font-semibold text-primary">
                    {modules.find(m => m.id === activeWindow)?.title || 'System Window'}
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="hidden sm:flex gap-2">
                    <button
                      onClick={handleClose}
                      className="p-2 hover:bg-white/5 rounded-lg text-muted transition-colors"
                      title="Minimize"
                    >
                      <Minus size={16} />
                    </button>
                    <button
                      onClick={toggleMaximize}
                      className={`p-2 rounded-lg transition-colors ${isMaximized ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-muted'}`}
                      title={isMaximized ? "Restore" : "Maximize"}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg text-muted transition-colors"
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  {renderContent()}
                </motion.div>
              </div>

              <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
                <span>Status: Active</span>
                <span>Thread: {activeWindow?.toUpperCase()}</span>
                <span>System: 0x8FA2</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NodeItem({ mod, index, onClick }: { mod: { title: string, icon: React.ElementType, color: string }, index: number, onClick: () => void }) {
  const Icon = mod.icon;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      className="group relative flex items-center gap-4 p-4 glass rounded-xl border-white/5 hover:border-primary/40 transition-all duration-300 w-full max-w-[280px] mx-auto overflow-visible"
    >
      <div className={`p-3 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors ${mod.color} relative`}>
        <Icon size={20} />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 blur-[2px] opacity-0 group-hover:opacity-100" />
      </div>
      <div className="text-left">
        <h3 className="text-xs font-mono uppercase tracking-widest text-muted group-hover:text-primary transition-colors">{mod.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-1 h-1 rounded-full bg-primary/40" />
          <span className="text-[9px] font-mono text-muted/60 uppercase">Node_{index.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/[0.02] transition-colors" />
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
    </motion.button>
  );
}
