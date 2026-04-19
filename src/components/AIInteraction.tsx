'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function AIInteraction() {
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Neural link established. I have full access to Rajesh's system core. What would you like to investigate?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Dynamic Logic: Search portfolioData for answers
    setTimeout(() => {
      const query = userMsg.toLowerCase();
      let botResponse = "";

      // 1. Search Projects
      const matchedProject = portfolioData.projects.find(p => 
        query.includes(p.title.toLowerCase()) || 
        query.includes(p.id.toLowerCase())
      );

      // 2. Search Skills
      const matchedSkill = portfolioData.skills.find(cat => 
        cat.skills.some(s => query.includes(s.toLowerCase())) ||
        query.includes(cat.title.toLowerCase())
      );

      if (matchedProject) {
        botResponse = `${matchedProject.title} is an ${matchedProject.subtitle}. Its core objective was to ${matchedProject.objective.toLowerCase()} It was built using ${matchedProject.tech.join(', ')}.`;
      } else if (matchedSkill) {
        botResponse = `Rajesh has extensive experience in ${matchedSkill.title}, specifically with ${matchedSkill.skills.join(', ')}. These are core pillars of his engineering stack.`;
      } else if (query.includes("project")) {
        const titles = portfolioData.projects.map(p => p.title).join(', ');
        botResponse = `Rajesh's current portfolio contains several advanced modules, including: ${titles}. Which one would you like details on?`;
      } else if (query.includes("tech") || query.includes("skill") || query.includes("stack")) {
        const categories = portfolioData.skills.map(s => s.title).join(', ');
        botResponse = `The RajeshOS core stack is divided into: ${categories}. He specializes in high-performance system architecture and full-stack engineering.`;
      } else {
        botResponse = `I'm the RajeshOS terminal assistant. I can provide real-time data on any of Rajesh's projects or technical skills. Try asking about "FinDNA" or his "Full Stack" capability.`;
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="max-w-3xl mx-auto h-[600px] flex flex-col glass rounded-3xl border-white/5 overflow-hidden">
      {/* Bot Header */}
      <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Bot size={18} />
        </div>
        <div>
          <h3 className="text-sm font-heading font-semibold">RajeshOS Intelligence</h3>
          <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">Neural Link: Active</p>
        </div>
      </div>

      {/* Message Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar"
      >
        <AnimatePresence mode="popLayout">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${
                  m.role === 'user' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                }`}>
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-secondary/10 border border-secondary/20 rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Bot size={16} />
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex items-center gap-1">
                <Loader2 size={14} className="animate-spin text-muted" />
                <span className="text-xs text-muted font-mono uppercase tracking-widest ml-1">Reasoning...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-white/[0.01]">
        <div className="relative flex items-center gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about technologies, projects..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
          />
          <button 
            onClick={handleSend}
            className="p-4 rounded-2xl bg-primary text-[#1C1C1C] hover:scale-105 transition-transform"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="mt-3 text-[10px] text-center text-muted font-mono uppercase tracking-widest opacity-50">
          Neural Interface v2.0.1 — Dynamic Context Enabled
        </p>
      </div>
    </div>
  );
}
