import { Cpu, Code, Layers, Database, Library, Settings } from 'lucide-react';

export const portfolioData = {
  about: {
    name: "Rajesh",
    role: "System Architect & Full Stack Developer",
    philosophy: "Designing Systems, Not Just Writing Code. Exploring the convergence of logic, intelligence, and meaningful software architecture.",
    status: "Online // Neural Link Stable",
    version: "DevOS v2.4.0"
  },

  systemStats: [
    { label: "Availability", value: "Open to Work", color: "text-secondary" },
    { label: "Location", value: "India(Hyderabad)", color: "text-primary" }
  ],

  codeIntelligence: {
    stats: [
      { name: "Problem Solving Strength", value: 92, color: "text-primary" },
      { name: "Technology Distribution", value: 85, color: "text-secondary" },
      { name: "Coding Consistency", value: 96, color: "text-primary" },
      { name: "Learning Progress", value: 88, color: "text-secondary" }
    ],
    languages: [
      { name: "Python", share: 40 },
      { name: "Java", share: 20 },
      { name: "JavaScript", share: 25 },
      { name: "Other", share: 15 }
    ]
  },

  evolutionTimeline: [
    {
      phase: "01",
      title: "Logic Initialization",
      desc: "Architecting core logic foundations through C/Java and developing Digital Tic-Tac-Toe to master real-time state management.",
      status: "COMPLETED",
      timestamp: "2023.Q1"
    },
    {
      phase: "02",
      title: "Architectural Foundation",
      desc: "Scaling into Resilient Web patterns. Focusing on high-availability layouts and performance-optimized UI modules.",
      status: "COMPLETED",
      timestamp: "2023.Q4"
    },
    {
      phase: "03",
      title: "Intelligence Convergence",
      desc: "Developing FinDNA and Code Reviewer. Integrating LLMs and AI intelligence into financial and code verification workflows.",
      status: "COMPLETED",
      timestamp: "2024.Q1"
    },
    {
      phase: "04",
      title: "Enterprise Ecosystems",
      desc: "Launching Vignan Verse: Scaling enterprise educational platforms with multi-user synchronization and modular scaling.",
      status: "ACTIVE",
      timestamp: "2024.Q2"
    },
    {
      phase: "05",
      title: "Strategic Safety Integration",
      desc: "SIH 2025: Architecting Tourist Safety systems using AI/IoT integration for predictive public safety protocols.",
      status: "READY",
      timestamp: "2024.VISION"
    }
  ],

  projects: [
    {
      id: "findna",
      title: "FinDNA",
      subtitle: "AI Financial Intelligence System",
      problem: "Complex financial planning often ignores inflation and behavioral dynamics.",
      objective: "Architect a resilient system that generates a 'Financial DNA' through adaptive logic.",
      approach: "Built a high-performance analytics platform using Next.js and secure Python middleware.",
      tech: ["Next.js", "Python", "Supabase", "Prisma"],
      features: ["Predictive inflation engine", "Dynamic risk profiling", "Secure cloud sync"],
      schematic: {
        architecture: "Distributed Middleware with Python Real-time indexing",
        challenges: ["Complex inflation indexing", "High-concurrency planning triggers"],
        solution: "Non-blocking worker pattern with reactive frontend bridges.",
        metrics: ["0.2s Latency", "99.9% Integrity"]
      },
      color: "from-primary/20 to-transparent",
      icon: Cpu
    },
    {
      id: "vignan-verse",
      title: "Vignan Verse",
      subtitle: "Enterprise Educational Ecosystem",
      problem: "Fragmented learning systems lack centralized data integrity and performance.",
      objective: "Scale a unified platform for multi-user academic management and intelligence.",
      approach: "Distributed system architecture with real-time state synchronization.",
      tech: ["React", "PostgreSQL", "Node.js", "Tailwind"],
      features: ["Enterprise user management", "Real-time sync", "Modular architecture"],
      schematic: {
        architecture: "Modular Multi-tenant Architecture",
        challenges: ["Data isolation between entities", "High-frequency state sync"],
        solution: "Implemented a robust tenant-isolation layer with Socket.io bridges.",
        metrics: ["5k+ Concurrent nodes", "Zero data drift"]
      },
      color: "from-secondary/20 to-transparent",
      icon: Database
    },
    {
      id: "tourist-safety",
      title: "SIH 2025: Tourist Safety",
      subtitle: "Predictive Public Safety Interface",
      problem: "Lack of real-time monitoring and safety automation for tourism nodes.",
      objective: "Implement a high-availability dashboard for predictive incident management.",
      approach: "AI/IoT integration with real-time analytics for safety automation.",
      tech: ["Python", "React", "IoT APIs", "Mapbox"],
      features: ["Real-time node tracking", "Emergency protocols", "Predictive alerts"],
      schematic: {
        architecture: "AI-Augmented IoT Ingestion Pipeline",
        challenges: ["Heterogeneous IoT data streams", "Real-time alert latency"],
        solution: "Centralized ingestion engine with predictive ML heuristics.",
        metrics: ["Real-time visual map", "95% Alert accuracy"]
      },
      color: "from-primary/20 to-transparent",
      icon: Layers
    },
    {
      id: "codereviewer",
      title: "Code Reviewer",
      subtitle: "Automated Logic Verification Engine",
      problem: "Manual review patterns are slow and prone to architectural drift.",
      objective: "Automate code quality and structural integrity analysis using AI.",
      approach: "Integrating LLM-driven verification pipelines into developer workflows.",
      tech: ["TypeScript", "Node.js", "GPT-API"],
      features: ["Structural drift analysis", "Clean code verification", "Security audit"],
      color: "from-secondary/20 to-transparent",
      icon: Code
    }
  ],

  skills: [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Java", "C", "JavaScript"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Full Stack",
      icon: Layers,
      skills: ["HTML5", "CSS3", "TailwindCSS", "Node.js", "Next.js"],
      color: "bg-secondary/20 text-secondary"
    },
    {
      title: "CS Fundamentals",
      icon: Database,
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Libraries",
      icon: Library,
      skills: ["NumPy", "Pandas", "Matplotlib"],
      color: "bg-secondary/20 text-secondary"
    },
    {
      title: "Approach",
      icon: Settings,
      skills: ["System Thinking", "Clean Code", "Modular Architecture", "Problem Decomposition"],
      color: "bg-white/10 text-white"
    }
  ],

  social: [
    { name: "Email", value: "sarrafrajesh432@gmail.com", link: "https://mail.google.com/mail/u/0/#inbox" },
    { name: "GitHub", value: "rajesh432sarraf", link: "https://github.com/rajesh432sarraf" },
    { name: "LinkedIn", value: "Rajesh Kumar", link: "https://www.linkedin.com/in/rajesh-kumar-105891350/" }
  ]
};

export default portfolioData;
