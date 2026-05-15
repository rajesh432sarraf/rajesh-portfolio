'use client';

import AboutSection from '../components/AboutSection';
import SkillsMatrix from '../components/SkillsMatrix';
import ProjectsEngine from '../components/ProjectsEngine';
import EvolutionTimeline from '../components/EvolutionTimeline';
import ContactInterface from '../components/ContactInterface';
import ResumeViewer from '../components/ResumeViewer';
import MeshBackground from '../components/MeshBackground';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary relative">
      <MeshBackground />
      
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 w-full bg-white/40 backdrop-blur-xl border-b border-white/20 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight text-gradient">
            Rajesh Sarraf
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/70">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32 relative z-10">
        
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-foreground tracking-tight mb-6"
          >
            Software Engineer <br/> & <span className="text-gradient">Problem Solver</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mb-10"
          >
            I build elegant, high-performance web applications and scalable backends. Focused on clean code, seamless user experiences, and continuous learning.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="px-10 py-4 bg-[#6366F1] text-white rounded-full font-bold shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.8)] hover:scale-105 transition-all duration-300">
              Get in Touch
            </a>
          </motion.div>
        </section>

        {/* Component Sections */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">About Me</h2>
          <AboutSection />
        </section>

        <section id="skills" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Technical Arsenal</h2>
          <SkillsMatrix />
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Selected Works</h2>
          <ProjectsEngine />
        </section>

        <section id="experience" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Experience & Evolution</h2>
          <EvolutionTimeline />
        </section>

        <section id="resume" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Technical Credentials</h2>
          <ResumeViewer />
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Let&apos;s Connect</h2>
          <ContactInterface />
        </section>

      </div>
    </main>
  );
}
