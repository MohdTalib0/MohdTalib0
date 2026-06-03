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
      "Architected the core multi-tenant agentic orchestration engine (seeding the OpenFishh OSS framework), enabling the rapid deployment of 10 production-grade enterprise platforms for 10 clients within 8 months, while maintaining strict tenant data isolation.",
      "CortexON: Contributed core multi-agent task planning and execution APIs to TheAgentic's open-source generalized AI agent (455 GitHub stars).",
      "Enterprise peer-support platform: Architected a multi-tenant, privacy-first platform matching support seekers to mentors from voice stories. Built a safety-gated voice-intake pipeline (transcription, moderation and crisis classifier with human-in-the-loop, structured LLM extraction, multi-vector embeddings) feeding a learned-to-rank matching engine (pgvector ANN + LightGBM lambdarank, self-retraining at near-zero inference cost). Enterprise and university pilots in 2026.",
      "Solunar (Health-Tech): Designed an async vision + LLM pipeline for medical tongue-image analysis, generating automated metabolic insight reports. Multi-tenant APIs and analytics on FastAPI, PostgreSQL, and async SQLAlchemy.",
      "H2M (Reg-Tech): Replaced an unreliable black-box RAG system with deterministic SQL + LLM tool-use orchestration, making FDA and CFR compliance workflows fully auditable. Next.js + FastAPI.",
      "Orchestrated weekly design reviews with enterprise client stakeholders, translating complex security and compliance constraints (FDA, CFR) into deterministic graph-based agent workflows.",
      "Fundraising-ops platform: Shipped new features and refactored the codebase of an AI fundraising operating system used by founders across Google for Startups and NVIDIA Inception cohorts.",
    ],
    tags: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "OpenAI", "Anthropic", "LangChain", "Kubernetes", "Multi-tenant"],
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
      "Spearheaded technology strategy as de facto CTO (reporting to CEO), directing a 20-member cross-functional engineering team and managing hiring, developer training, sprint planning, and architectural roadmap execution.",
      "Built Dumroo 2.0 from scratch in 4 weeks: an AI-driven learning and assessment platform now in production across US K-12 schools. Next.js, TypeScript, Supabase, Vercel, GitHub Actions.",
      "Designed and engineered the core AI infrastructure of Dumroo 2.0, implementing semantic vector caching and a dynamic LLM routing gateway to cut inference costs by 50% while doubling accuracy.",
      "Interfaced directly with school administrators and district heads to build role-based access control (RBAC) and automated onboarding pipelines, scaling platform adoption to 6 school districts within 6 months.",
      "Architected internal developer productivity and MLOps tooling (automated regression testing and evaluation pipelines), reducing system setup and customer onboarding latency by 10x.",
      "Promoted to Senior within 6 months of joining.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "RAG", "Agentic AI", "Vercel"],
  },
  {
    role: "Head of AI & Engineering",
    company: "CodeSpaze",
    type: "AI Education & Products",
    location: "Lucknow, India",
    remote: true,
    period: "Apr 2024 - Feb 2025",
    current: false,
    bullets: [
      "Accelerated the AI Services division to drive a 3x growth in Monthly Recurring Revenue (MRR) by design-patterning reusable ML templates and full-stack services.",
      "Spearheaded a 20-member cross-functional engineering team (AI, backend, frontend, design, marketing), establishing CI/CD pipelines, automated testing, and developer onboarding to scale capacity for a pipeline of 10,000+ candidates.",
      "Engineered and deployed production AI systems using LLMs, Hugging Face, and custom NLP pipelines, while mentoring junior engineers in ML and full-stack development.",
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
      "Architected high-throughput .NET Core APIs and optimized SQL database schemas, reducing query latency by 40% and improving dashboard loading latency.",
      "Directed technical delivery of client web services, introducing reusable micro-frontend systems that secured new project renewals and increased services revenue by completing deliverables ahead of schedule.",
      'Awarded "Best Performer: Software Developer" (2023) for outstanding contribution to data pipeline reliability.',
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
      "Designed and executed a semi-automated active learning labeling pipeline utilizing confidence-threshold pre-annotation, completing a 100k+ healthcare dataset in 3 weeks (accelerating total project timeline by 30%).",
      "Orchestrated a distributed team of 60+ ML engineers across 15 countries to train, evaluate, and deploy YOLOv8 + PyTorch computer vision pipelines, delivering the diagnostics system to the client ahead of schedule.",
    ],
    tags: ["YOLOv8", "PyTorch", "TensorFlow", "Team Lead", "Computer Vision"],
  },
  {
    role: "Software Engineer",
    company: "CodeSpaze",
    type: "Software, Web & AI Development",
    location: "Lucknow, India",
    remote: true,
    period: "Jul 2021 - Feb 2023",
    current: false,
    bullets: [
      "Engineered 8+ client applications across web, AI, and automation engagements, owning frontend and backend features end-to-end on 2 to 3 week delivery cycles.",
      "Developed reusable component libraries and internal tooling that cut project setup and delivery time by ~30%, contributing to the early AI/ML prototypes that seeded the company's AI service line.",
    ],
    tags: ["React", "Node.js", "Full-Stack", "AI/ML", "Internal Tooling"],
  },
];

export const projects = [
  {
    name: "OpenFishh",
    tagline: "Open-source agent infrastructure for production AI.",
    description:
      "Open-source agent infrastructure platform built around the three hardest problems in production agents: agent memory (persistent, provenance-tracked), agent reliability (verification, confidence scoring, and safe fallbacks), and agent evaluation (knowing when an agent is actually good). The OSS counterpart to HumanizingLabs, Apache 2.0. READMEs in 7 languages (EN/ZH/JA/KO/ES/HI/AR), Docker-ready.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Multi-Agent Orchestration",
      "Agent Memory",
      "RAG",
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
    name: "CortexON",
    tagline: "Open-source generalized AI agent for everyday automation.",
    description:
      "TheAgentic's open-source generalized AI agent that plans and executes everyday tasks end-to-end through multi-agent tool-use orchestration. Contributor to the project, which has earned strong community traction since launch.",
    tech: [
      "Python",
      "Multi-Agent AI",
      "LLM Orchestration",
      "Tool Calling",
      "FastAPI",
    ],
    github: "https://github.com/TheAgenticAI/CortexON",
    stars: 455,
    openSource: true,
    featured: true,
  },
  {
    name: "HumanizingLabs",
    tagline: "1,200 AI beings. 30,000+ beliefs. Zero epistemic shortcuts.",
    description: "A living digital society of 1,200 AI agents across 31 knowledge domains that reads the internet continuously, maintains persistent belief memory with full provenance chains, runs structured debates on contested claims, and produces auditable intelligence reports on demand. Every belief is typed, sourced, confidence-decomposed, and lifecycle-governed: the system tracks why it believes things, how confident it should be, and what would change its mind.",
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
 * a senior hiring manager scans first; it has to be precise and
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
 * Trimmed skill matrix: 4-6 items per category. Recruiter rule:
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
 * Education: recruiters specifically check degree + school + year.
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
 * The hero proof strip: the 4 numbers that should make a recruiter
 * decide to send an email within 10 seconds.
 * Numbers come first, then a single descriptive line.
 */
export const proofMetrics = [
  {
    value: "10+",
    label: "Production AI platforms",
    detail: "Shipped 0-to-1 at TheAgentic AI and Dumroo.ai",
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
 * Trust strip: quiet wordmarks shown below the hero so a recruiter
 * sees a sequence of credible places before scrolling.
 */
export const collaborations = [
  "TheAgentic AI",
  "Dumroo.ai",
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
