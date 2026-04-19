'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

type Log = {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
};

export default function SystemTerminal({ onNavigate }: { onNavigate: (moduleId: string) => void }) {
  const [logs, setLogs] = useState<Log[]>([
    { text: "RajeshOS [Version 2.4.0]", type: 'output' },
    { text: "(c) 2024 DevOS Corporation. All modules verified.", type: 'output' },
    { text: "Type 'help' to see available system commands.", type: 'output' },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: Log[] = [...logs, { text: `> ${input}`, type: 'input' }];

    const args = cmd.split(' ');
    const baseCmd = args[0];

    switch (baseCmd) {
      case 'help':
        newLogs.push({ text: "Available Commands:", type: 'output' });
        newLogs.push({ text: "  ls              - List available system modules", type: 'output' });
        newLogs.push({ text: "  open [module]   - Launch a specific system module", type: 'output' });
        newLogs.push({ text: "  whoami          - Display current identity kernel", type: 'output' });
        // eslint-disable-next-line no-template-curly-in-string
        newLogs.push({ text: "  clear           - Purge terminal buffer", type: 'output' });
        newLogs.push({ text: "  cat about       - Read system core philosophy", type: 'output' });
        break;

      case 'ls':
        newLogs.push({ text: "Active System Modules:", type: 'output' });
        newLogs.push({ text: "  about, projects, skills, timeline, code, thinking, ai, contact", type: 'success' });
        break;

      case 'open':
        const module = args[1];
        const validModules = ['about', 'projects', 'skills', 'timeline', 'code', 'thinking', 'ai', 'contact', 'resume'];
        if (validModules.includes(module)) {
          newLogs.push({ text: `Initializing module: ${module}...`, type: 'success' });
          onNavigate(module);
        } else {
          newLogs.push({ text: `Error: Module '${module}' not found. Type 'ls' for list.`, type: 'error' });
        }
        break;

      case 'whoami':
        newLogs.push({ text: `USER: ${portfolioData.about.name}`, type: 'output' });
        newLogs.push({ text: `ROLE: ${portfolioData.about.role}`, type: 'output' });
        newLogs.push({ text: `STATUS: ${portfolioData.about.status}`, type: 'output' });
        break;

      case 'clear':
        setLogs([]);
        setInput("");
        return;

      case 'cat':
        if (args[1] === 'about') {
          newLogs.push({ text: portfolioData.about.philosophy, type: 'output' });
        } else {
          newLogs.push({ text: "usage: cat [file]", type: 'error' });
        }
        break;

      default:
        newLogs.push({ text: `Command not found: ${baseCmd}. Type 'help' for assistance.`, type: 'error' });
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <div className="h-full flex flex-col bg-black/40 rounded-2xl overflow-hidden border border-white/5 font-mono shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-primary" />
          <span className="text-[10px] text-muted uppercase tracking-[0.2em]">System Console // Neural Link</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
        </div>
      </div>

      {/* Terminal Output */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-2 custom-scrollbar text-sm"
      >
        {logs.map((log, i) => (
          <div 
            key={i} 
            className={`flex gap-3 ${
              log.type === 'error' ? 'text-red-400' :
              log.type === 'success' ? 'text-primary' :
              log.type === 'input' ? 'text-white font-bold' :
              'text-muted'
            }`}
          >
            {log.type === 'input' && <ChevronRight size={14} className="mt-1 shrink-0" />}
            <p className="leading-relaxed whitespace-pre-wrap">{log.text}</p>
          </div>
        ))}
        {/* Placeholder for typewriter effect or scroll anchor */}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleCommand} className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center gap-3">
        <span className="text-primary font-bold">rajeshoS $</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-white/10"
          placeholder="Enter command..."
        />
      </form>
    </div>
  );
}
