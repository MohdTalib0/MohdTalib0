export const personal = {
  name: "Mohd Talib",
  title: "Senior Full Stack AI Engineer",
  tagline: "I build AI systems that ship. From RAG pipelines to production platforms, 0-to-1 in weeks.",
  email: "mohammad.talib319@gmail.com",
  phone: "+91 7408185999",
  linkedin: "https://linkedin.com/in/mohdtalib",
  github: "https://github.com/MohdTalib0",
  calendar: "https://calendar.app.google/n5DkyKFHLfNvTZR96",
  location: "India",
  available: true,
};

export const experience = [
  {
    role: "Senior Full Stack AI Engineer",
    badge: "Technical Lead",
    company: "TheAgentic AI",
    type: "Applied AI Research Company",
    location: "California, USA",
    remote: true,
    period: "Nov 2025 - Present",
    current: true,
    bullets: [
      "Technical lead owning engineering end-to-end. Co-built Solunar (Health-Tech), H2M (Reg-Tech), and Being (Workplace Well-being) with a 2-engineer team, each shipped 0-to-1 in 2 to 3 weeks with full client sign-off.",
      "Being: Multi-tenant audio-native platform that extracts emotional and situational signal from spoken experience and retrieves matched mentor wisdom stories. Aggregates anonymized signal into an enterprise Org Health Map for CPOs, Deans of Students, and Chief Nursing Officers.",
      "Solunar: Designed async vision + LLM pipeline for medical tongue-image analysis, generating automated metabolic insight reports. Multi-tenant APIs and analytics on FastAPI, PostgreSQL, and async SQLAlchemy.",
      "H2M: Replaced an unreliable black-box RAG system with deterministic SQL + LLM tool-use orchestration, making FDA and CFR compliance workflows fully auditable. Next.js + FastAPI.",
      "Boxsy.io: Rewrote a failing production platform end-to-end in 2 weeks, eliminating critical failures and restoring stability.",
      "KismetAI: Contributed to an AI ad-creation platform that generates and launches on-brand creatives across major channels in minutes.",
    ],
    tags: ["FastAPI", "Next.js", "PostgreSQL", "OpenAI", "Anthropic", "LangChain", "Multi-tenant", "Async"],
  },
  {
    role: "Senior Full Stack AI Engineer",
    badge: "Tech Lead",
    company: "Dumroo.ai",
    type: "AI-Powered EdTech",
    location: "New Jersey, USA",
    remote: true,
    period: "Mar 2025 - Nov 2025",
    current: false,
    bullets: [
      "Built Dumroo 2.0 from scratch in 4 weeks. An AI-driven learning and assessment platform, now used by US K-12 schools.",
      "Designed RAG pipelines and agentic AI workflows: 2x insight accuracy and ~50% LLM inference cost reduction via prompt optimization, model routing, and response caching.",
      "Drove inbound interest from 10+ US school districts and onboarded 3 schools. Automated onboarding for a 10x reduction in setup time.",
      "Owned engineering end-to-end: hiring, interviews, sprint planning, KTs, and direct coordination with US school administrators.",
      "Promoted to Senior within 6 months of joining.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "RAG", "Agentic AI", "Vercel"],
  },
  {
    role: "Blockchain & Generative AI Engineer",
    company: "Lokachakra",
    type: "Decentralized Social Platform",
    location: "London, UK",
    remote: true,
    period: "Jan 2025 - Mar 2025",
    current: false,
    bullets: [
      "Built Web3 social collaboration platform on Sui/Aptos blockchain with zkAuth identity, OpenAI-powered content moderation, and real-time encrypted streaming chat.",
    ],
    tags: ["Sui", "Aptos", "zkAuth", "OpenAI", "Web3"],
  },
  {
    role: "Head of AI & Engineering",
    company: "CodeSpaze",
    type: "AI Education & Products",
    location: "Lucknow, India",
    remote: true,
    period: "Apr 2024 - Dec 2024",
    current: false,
    bullets: [
      "Led 20-member cross-functional team (engineers, designers, content, marketing). Drove 10x growth to 10K+ applicants in 2 months.",
      "Deployed production AI systems using LLMs, Hugging Face, and custom NLP pipelines. Mentored engineers in ML and full-stack development.",
    ],
    tags: ["LLMs", "Hugging Face", "NLP", "Team Leadership"],
  },
  {
    role: "Software Engineer & Data Analyst",
    company: "Techpile Technology",
    type: "Software Development",
    location: "Lucknow, India",
    remote: false,
    period: "Jul 2023 - Apr 2024",
    current: false,
    bullets: [
      'Built .NET APIs, data pipelines, and SQL dashboards for analytics. Automated data validation and preprocessing. Awarded "Best Performer: Software Developer" (2023).',
    ],
    tags: [".NET", "SQL", "Data Pipelines"],
  },
  {
    role: "Machine Learning Engineer",
    badge: "Data Engineering Lead",
    company: "Omdena",
    type: "Global AI for Social Good",
    location: "New York, USA",
    remote: true,
    period: "Mar 2023 - Jul 2023",
    current: false,
    bullets: [
      "Led 60+ AI engineers across 15+ countries as Data Engineering Lead. Built YOLOv8 + PyTorch pipelines on 100K+ annotated images for healthcare diagnostics (autism early detection) and infrastructure monitoring (pavement degradation).",
      "Coordinated across 15 time zones via GitHub and Slack, managing ML pipelines and research documentation.",
    ],
    tags: ["YOLOv8", "PyTorch", "TensorFlow", "Team Lead", "Computer Vision"],
  },
  {
    role: "Data Science & ML Engineering",
    company: "Multiple Organizations",
    type: "Innomatics, CodeClause, Sparks Foundation, Shiga Corp, Robust Results",
    location: "Remote",
    remote: true,
    period: "Jul 2022 - Jun 2023",
    current: false,
    bullets: [
      "Built CNN & YOLO models for plant disease detection, TensorFlow neural networks for forecasting systems, Flask web apps with embedded ML pipelines, and Java backend services.",
      "Led engineering team at Innomatics. Top 10, Data Science Hackathon (2023).",
    ],
    tags: ["CNN", "YOLO", "TensorFlow", "Flask", "Java"],
  },
];

export const projects = [
  {
    name: "OpenFishh",
    tagline: "Open-source swarm intelligence for the open web.",
    description:
      "Open-source counterpart to HumanizingLabs. Apache 2.0. A persistent multi-agent society of up to 10,000+ AI agents that reads RSS, news, and research feeds across 31 intelligence beats (geopolitics, AI, markets, cybersecurity, biotech, frontier tech, more). Every belief is typed, sourced, and confidence-banded; every report ships with a 'what would change our mind' section. 17★, 3 forks, READMEs in 7 languages (EN/ZH/JA/KO/ES/HI/AR), Docker-ready.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Multi-Agent AI",
      "RAG",
      "Knowledge Graph",
      "Docker",
      "Apache 2.0",
    ],
    live: "https://openfishh.com",
    github: "https://github.com/MohdTalib0/OpenFishh",
    stars: 17,
    forks: 3,
    openSource: true,
    featured: true,
  },
  {
    name: "HumanizingLabs",
    tagline: "1,200 AI beings. 30,000+ beliefs. Zero epistemic shortcuts.",
    description: "A living digital society of 1,200 AI agents across 31 knowledge domains that reads the internet continuously, maintains persistent belief memory with full provenance chains, runs structured debates on contested claims, and produces auditable intelligence reports on demand. Every belief is typed, sourced, confidence-decomposed, and lifecycle-governed — the system tracks why it believes things, how confident it should be, and what would change its mind.",
    tech: ["Python", "Multi-Agent AI", "OpenAI", "Anthropic", "PostgreSQL", "FastAPI", "Redis", "RAG", "LLM Orchestration"],
    live: "https://humanizing-labs.vercel.app/",
    featured: true,
  },
  {
    name: "Wrively",
    tagline: "Sound like yourself. Every time.",
    description: "Most AI writes for everyone. Wrively writes for you. Trained on how you think, what you believe, and how you sound at your best. Builds your voice once and writes from it forever. From topic to post in under 3 minutes.",
    tech: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Tailwind CSS"],
    live: "https://wrively.com",
    github: "https://github.com/MohdTalib0/FounderX",
    featured: true,
  },
  {
    name: "BlueDrum AI",
    tagline: "Your evidence, organized for your lawyer.",
    description: "Helps you collect chats, documents, and financial records, then organizes them into a structured case file your lawyer can actually use. Built for couples going through divorce, separation, or anyone needing legal evidence organized. No legal knowledge required.",
    tech: ["React", "FastAPI", "AI/ML", "PostgreSQL", "Tailwind CSS"],
    live: "https://bluedrumai.com",
    beta: "https://beta.bluedrumai.com",
    github: "https://github.com/MohdTalib0/BlueDrumAI",
    featured: false,
  },
  {
    name: "TalPred AI",
    tagline: "Production-grade equity alpha system.",
    description: "Automated daily cross-sectional equity predictions with paper trading and monitoring. End-to-end ML pipeline with model training, evaluation, and a real-time React dashboard.",
    tech: ["XGBoost", "PostgreSQL", "Redis", "MLflow", "React", "GitHub Actions"],
    github: "https://github.com/MohdTalib0/TalPred-AI",
    featured: false,
  },
  {
    name: "Dumroo 2.0",
    tagline: "AI-powered EdTech platform.",
    description: "Built from scratch in 4 weeks. AI-driven learning, assessment, and code-generation platform for US K-12 schools. RAG + Agentic AI workflows.",
    tech: ["Next.js", "TypeScript", "Supabase", "RAG", "Agentic AI"],
    featured: false,
  },
  {
    name: "Solunar Wellness",
    tagline: "AI health-tech backend.",
    description: "Async job pipeline for AI tongue-image analysis. Vision model to LLM reasoning to metabolic guidance. Multi-tenant APIs on FastAPI + PostgreSQL.",
    tech: ["FastAPI", "PostgreSQL", "OpenAI", "Computer Vision"],
    featured: false,
  },
  {
    name: "H2M Regulatory",
    tagline: "LLM-powered compliance platform.",
    description: "Regulatory intelligence with deterministic SQL + LLM tool-use orchestration. Ingests CFR/FDA data. Auditable, not a black-box.",
    tech: ["Next.js", "FastAPI", "LLM Agents", "PostgreSQL"],
    featured: false,
  },
  {
    name: "Fundalytics",
    tagline: "Discover Global Funding Opportunities with AI.",
    description: "AI platform that automatically discovers, matches, and applies to grants, VC funding, accelerators, and investment opportunities worldwide. Save 20+ hours/week, increase funding success rate by 300%.",
    tech: ["React", "AI/ML", "PostgreSQL", "Netlify"],
    live: "https://fundalytics.netlify.app",
    github: "https://github.com/MohdTalib0/Fundalytics",
    featured: false,
  },
  {
    name: "InvestLocal",
    tagline: "Connecting local entrepreneurs with smart investors.",
    description: "Platform bridging the gap between local entrepreneurs seeking funding and investors looking for smart, community-driven investment opportunities.",
    tech: ["React", "Node.js", "PostgreSQL", "Render"],
    live: "https://investlocal.onrender.com",
    github: "https://github.com/MohdTalib0/investlocal",
    featured: false,
  },
  {
    name: "CodeSpaze",
    tagline: "Global Tech Learning & Career Platform.",
    description: "Empowering the next generation of tech leaders with hands-on learning, real-world projects, and global opportunities. From internships to AI development.",
    tech: ["Next.js", "React", "AI/ML", "EdTech"],
    live: "https://www.codespaze.org",
    featured: false,
  },
  {
    name: "StackSage",
    tagline: "AI codebase intelligence.",
    description: "AI developer tool for codebase understanding and intelligent debugging using RAG + LLM orchestration.",
    tech: ["RAG", "LLM", "Python", "React"],
    github: "https://github.com/MohdTalib0/StackSage",
    featured: false,
  },
  {
    name: "AutoServeHub",
    tagline: "Automated AI deployment.",
    description: "Service management and deployment hub for AI-powered applications with automated CI/CD pipelines.",
    tech: ["FastAPI", "Docker", "CI/CD", "React"],
    github: "https://github.com/MohdTalib0/AutoServeHub",
    featured: false,
  },
];

/**
 * The exact stack I'm shipping with right now. This is the line
 * a senior hiring manager scans first — it has to be precise and
 * defensible in an interview.
 */
export const currentStack = [
  "FastAPI",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "pgvector",
  "OpenAI",
  "Anthropic",
  "LangChain",
  "AWS",
  "Docker",
];

/**
 * Trimmed skill matrix — 4-6 items per category. Recruiter rule:
 * top 10 are signal, the rest dilute.
 */
export const skills = {
  "AI & LLM": [
    "RAG",
    "Agentic AI",
    "LLM Optimization",
    "Prompt Engineering",
    "LangChain",
    "OpenAI / Anthropic APIs",
  ],
  "Backend": [
    "FastAPI",
    "Node.js",
    "Django",
    "SQLAlchemy",
    "REST & Event APIs",
    "Async Architectures",
  ],
  "Frontend & Mobile": [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
  ],
  "ML & Data": [
    "PyTorch",
    "TensorFlow",
    "XGBoost",
    "Computer Vision",
    "MLflow",
    "ETL Pipelines",
  ],
  "Infrastructure": [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GitHub Actions",
    "CI/CD",
  ],
  "Databases & BaaS": [
    "PostgreSQL",
    "pgvector",
    "Supabase",
    "Redis",
    "MySQL",
  ],
};

/**
 * Education — recruiters specifically check degree + school + year.
 * Surfacing this in the visible portfolio (not just the PDF resume)
 * removes a "presumed absent" red flag.
 */
export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "Sagar Institute of Technology & Management, Barabanki",
  year: "2023",
};

/**
 * Awards, recognition, and credibility signals worth surfacing.
 * One quote from a CEO/PM here would be worth 10x any line below;
 * add as soon as available.
 */
export const awards = [
  "Best Performer: Software Developer (2023)",
  "Top 10, Data Science Hackathon (2023)",
  "Apache 2.0 OSS author (OpenFishh)",
];

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Products Shipped" },
  { value: "60+", label: "Engineers Led" },
  { value: "15+", label: "Countries Collaborated" },
];

/**
 * The hero proof strip — the 4 numbers that should make a recruiter
 * decide to send an email within 10 seconds.
 * Numbers come first, then a single descriptive line.
 */
export const proofMetrics = [
  {
    value: "5+",
    label: "Production AI platforms",
    detail: "Shipped 0-to-1 at TheAgentic AI, Dumroo, and Lokachakra",
  },
  {
    value: "4 wk",
    label: "Dumroo 2.0",
    detail: "Built from scratch. Now used by US K-12 schools",
  },
  {
    value: "~50%",
    label: "Inference cost cut",
    detail: "On Dumroo's RAG pipeline. Accuracy still up 2x",
  },
  {
    value: "10×",
    label: "Onboarding speed",
    detail: "Automated school setup at Dumroo.ai",
  },
];

/**
 * Trust strip — quiet wordmarks shown below the hero so a recruiter
 * sees a sequence of credible places before scrolling.
 */
export const collaborations = [
  "TheAgentic AI",
  "Dumroo.ai",
  "Lokachakra",
  "Omdena",
  "CodeSpaze",
  "Techpile",
  "Innomatics",
];

/**
 * Geographies the candidate is open to working in or relocating to.
 * Recruiters need to see this within 10 seconds.
 */
export const availability = {
  base: "India",
  remoteFor: ["US", "UK", "EU", "Gulf"],
  relocateTo: ["Dubai", "Saudi Arabia", "EU", "UK", "USA"],
  responseTime: "Usually replies within 24 hours",
};
