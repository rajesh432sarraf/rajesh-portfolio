'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 min-h-[60vh] flex flex-col justify-center">
      {/* 01. THE CORE IDENTITY */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative glass-panel p-8 md:p-12 rounded-[2.5rem]"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Profile Focus */}
          <div className="relative shrink-0 group">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative overflow-hidden bg-white/20 p-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-shadow duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/rajesh-portfolio/profile.png" 
                  alt="Rajesh Sarraf" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-overlay"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rajesh&background=E5E7EB&color=111827';
                  }}
                />
              </div>
            </div>
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 -right-2 px-5 py-2 bg-gradient-to-r from-mesh-1 to-mesh-4 text-white rounded-full shadow-lg z-20 border-2 border-white/50"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider">Available</span>
            </motion.div>
          </div>

          {/* Critical Highlights Only */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground drop-shadow-sm">
                Hi, I&apos;m Rajesh.
              </h2>
              <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-mesh-1 to-mesh-2 font-bold drop-shadow-sm">
                Software Engineer
              </h3>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl font-medium">
              I specialize in transmuting complex logic into high-performance software. My mission is to design tools where human intuition meets algorithmic precision—building robust web applications and scalable backends.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/30 border border-white/40 text-foreground shadow-sm hover:bg-white/50 transition-colors backdrop-blur-md">
                <span className="text-sm font-bold">Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/30 border border-white/40 text-foreground shadow-sm hover:bg-white/50 transition-colors backdrop-blur-md">
                <span className="text-sm font-bold">System Architecture</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/30 border border-white/40 text-foreground shadow-sm hover:bg-white/50 transition-colors backdrop-blur-md">
                <span className="text-sm font-bold">UI/UX Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 02. SYSTEM ACTIVITY (Bottom Section) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pt-12"
      >
        <h3 className="text-xl font-heading font-bold mb-6 text-foreground drop-shadow-sm px-4">Current Focus</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "01", group: "Project", action: "FinDNA Platform", status: "Active", desc: "Building scalable financial tech" },
            { id: "02", group: "Learning", action: "System Design", status: "Ongoing", desc: "Mastering distributed architectures" },
            { id: "03", group: "Community", action: "Open Source", status: "Contributing", desc: "React & Node.js ecosystems" },
            { id: "04", group: "Goal", action: "Engineering Excellence", status: "Target", desc: "Clean code & resilient systems" },
          ].map((activity, i) => (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              key={activity.id} 
              className="p-6 rounded-3xl glass-panel flex flex-col gap-3 group"
            >
              <div className="flex justify-between items-start">
                <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-mesh-1 to-mesh-3">{activity.action}</span>
                <span className="text-xs font-bold text-foreground bg-white/40 border border-white/50 px-3 py-1 rounded-full shadow-sm">{activity.status}</span>
              </div>
              <p className="text-sm text-foreground/70 font-medium">{activity.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
