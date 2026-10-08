export const personal = {
  name: "Mohd Talib",
  title: "Engineering Lead · AI Platforms & Infrastructure · Applied AI Systems",
  tagline: "I build platforms that raise AI data quality, reduce manual work, and scale reliable operations.",
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
    role: "Engineering Lead",
    badge: "AI Platforms & Data",
    company: "Agents Only Technologies (part of TP)",
    type: "Contract · AI Data & Evaluation",
    location: "India",
    remote: true,
    period: "Jul 2026 - Present",
    current: true,
    bullets: [
      "Lead architecture, full-stack delivery, and operations for AI evaluation, media collection, annotation, and QA platforms supporting programs for NVIDIA, ByteDance, and Google.",
      "Unified contributor onboarding, resumable uploads, processing, QA and delivery in MediaHub for TTS and Egoverse programs. Supported 10,000+ contributors across 2026 programs and intercepted 195 non-compliant submissions before delivery in September through configurable rules and SLA-based review queues.",
      "Automated checks for codec, resolution, frame rate, duration, audio quality, exposure, sharpness, and other project rules. Reduced manual technical checks by approximately 90% and raised acceptance from 40% to 95% on NVIDIA programs.",
      "Operational reliability: Introduced background validation jobs, preview retries, queue monitoring, Sentry observability, and recovery controls, maintaining ~99.98% server-error-free production API execution in September 2026.",
      "Controlled AI evaluation: Built five-model comparison and GMR, medical, coding, and STEM assessment workflows in AI Arena, supporting 6,000+ candidates across 2026 assessments with qualification scoring, access controls, progress tracking, and reporting. Established golden-dataset and structured-scoring foundations for medical reasoning evaluations.",
      "Led the planned migration from Cloudflare R2 to AWS S3 with multi-bucket separation, checksum reconciliation, rollback controls, and least-privilege access. Established release gates, regression testing, architecture reviews, and clearer ownership across application and cloud engineering.",
    ],
    tags: ["AI Evaluation", "Media Processing", "AWS S3", "Cloudflare R2", "Sentry", "QA Automation", "Technical Leadership"],
  },
  {
    role: "Senior Full Stack AI Engineer",
    badge: "Technical Lead",
    company: "TheAgentic AI",
    type: "Contract · Applied AI Research",
    location: "California, USA",
    remote: true,
    period: "Nov 2025 - Sep 2026",
    current: false,
    bullets: [
      "Enabled delivery of 10 enterprise platforms for 10 clients in 8 months through a reusable multi-tenant agentic orchestration engine with tenant data isolation.",
      "CortexON: Contributed multi-agent task planning and execution APIs to TheAgentic's open-source generalized AI agent.",
      "Enterprise peer-support platform: Architected a multi-tenant, privacy-first platform matching support seekers to mentors from voice stories. Built a safety-gated voice-intake pipeline (transcription, moderation and crisis classifier with human-in-the-loop, structured LLM extraction, multi-vector embeddings) feeding a learned-to-rank matching engine (pgvector ANN + LightGBM lambdarank, self-retraining at near-zero inference cost). Enterprise and university pilots in 2026.",
      "Solunar (Health-Tech): Designed an async vision + LLM pipeline for medical tongue-image analysis, generating automated metabolic insight reports. Multi-tenant APIs and analytics on FastAPI, PostgreSQL, and async SQLAlchemy.",
      "H2M (Reg-Tech): Replaced an unreliable black-box RAG system with deterministic SQL + LLM tool-use orchestration, making FDA and CFR compliance workflows fully auditable. Next.js + FastAPI.",
      "Orchestrated weekly design reviews with enterprise client stakeholders, translating complex security and compliance constraints (FDA, CFR) into deterministic graph-based agent workflows.",
      "Fundraising-ops platform: Shipped new features and refactored the codebase of an AI fundraising operating system used by founders across Google for Startups and NVIDIA Inception cohorts.",
      "Prometheus RCA: Unified GitHub, Grafana, Prometheus, CloudWatch, Slack, Jira, and Notion with alerts, metrics, logs, traces, deployments, topology, and runbook context for evidence-backed incident investigation and postmortem generation.",
      "Investigation controls: Added engineer clarification, service inference, workspace isolation, encrypted credentials, OAuth, sensitive-data redaction, and configurable publishing controls.",
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
      "Technical lead for a 20-engineer team, reporting to the CEO; owned architecture, hiring, developer training, and roadmap execution.",
      "Led the team to build Dumroo 2.0 from scratch in 4 weeks: an AI-driven learning and assessment platform now in production across US K-12 districts. Next.js, TypeScript, Supabase, Vercel, GitHub Actions.",
      "Designed hybrid AI infrastructure combining RAG, conventional application logic and caching to reduce unnecessary model calls and cut LLM inference costs by 50%.",
      "Partnered with school administrators and district heads to ship role-based access control (RBAC) and automated onboarding pipelines, scaling adoption to 6 districts / 10+ schools in 6 months, with 10+ districts in the pipeline.",
      "Built an internal platform that automated approximately 90% of manual setup and onboarding work; established regression testing, evaluation pipelines and CI/CD.",
      "Improved response accuracy through RAG, adversarial testing, failure-case analysis, prompt refinement and model-parameter tuning.",
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
      "Technical lead for a 20-engineer team; established CI/CD, automated testing, reusable delivery frameworks and developer onboarding across AI, backend and frontend work.",
      "Built reusable AI/full-stack delivery frameworks and production LLM/NLP services, reducing delivery overhead and supporting services growth; mentored engineers in ML and full-stack development.",
    ],
    tags: ["LLMs", "Hugging Face", "NLP", "Team Leadership"],
  },
  {
    role: "Software Engineer & Data Analyst",
    company: "Techpile Technology",
    type: "Client Software Delivery",
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
    type: "Project-based engagement",
    location: "New York, USA",
    remote: true,
    period: "Mar 2023 - Jul 2023",
    current: false,
    bullets: [
      "Designed and executed a semi-automated active learning labeling pipeline utilizing confidence-threshold pre-annotation, completing a 100k+ healthcare dataset in 3 weeks (accelerating total project timeline by 30%).",
      "Coordinated data engineering work across a 60+ member global project team in 15 countries; delivered YOLOv8/PyTorch computer vision pipelines ahead of schedule.",
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
    name: "MediaHub",
    tagline: "Configurable media collection and QA for enterprise AI data programs.",
    description: "Built for audio and video programs supporting NVIDIA, ByteDance, and Google. Combines contributor onboarding, large-file workflows, automated technical and quality checks, reviewer queues, delivery tracking, and analytics. Automation raised acceptance from 40% to 95% on NVIDIA programs and removed approximately 90% of manual checks.",
    tech: ["Media Processing", "QA Automation", "AWS S3", "Cloudflare R2", "Sentry"],
    featured: true,
  },
  {
    name: "AI Arena",
    tagline: "Controlled model comparison and AI assessment workflows.",
    description: "AI evaluation platform supporting 6,000+ candidates across model comparison, ByteDance GMR, medical, coding, and STEM assessments in 2026. Combines controlled access, qualification scoring, progress tracking, reporting, and golden-dataset evaluation foundations.",
    tech: ["AI Evaluation", "Model Comparison", "Scoring", "Analytics"],
    featured: true,
  },
  {
    name: "Prometheus RCA",
    tagline: "Evidence-backed incident investigation across topology, telemetry and code.",
    description: "TheAgentic AI's incident investigation platform connects monitoring, code and operational knowledge. It groups cascading alerts, compares likely causes using service dependencies and telemetry, asks engineers targeted questions, and drafts postmortems with controlled publishing to Slack, Jira and Notion.",
    tech: ["Python", "FastAPI", "LangGraph", "React", "TypeScript", "Service Topology"],
    featured: true,
  },
  {
    name: "OpenFishh",
    tagline: "Open-source collective intelligence with traceable evidence.",
    description:
      "Multi-agent research platform that gathers public sources, tracks claims and confidence, handles contradictions and generates auditable reports. Connects evidence provenance with knowledge graphs and a React interface. Apache 2.0, with Docker setup and multilingual documentation.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "SQLite",
      "Multi-Agent Orchestration",
      "Evidence Provenance",
      "Confidence Scoring",
      "Docker",
      "Apache 2.0",
    ],
    live: "https://openfishh.com",
    github: "https://github.com/MohdTalib0/OpenFishh",
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
    featured: false,
  },
  {
    name: "HumanizingLabs",
    tagline: "Persistent research with sourced memory and auditable reports.",
    description: "Multi-agent research system across 31 knowledge domains with persistent sourced memory, structured debate and auditable intelligence reports. Tracks claims, evidence provenance and confidence as information changes.",
    tech: ["Python", "Multi-Agent AI", "OpenAI", "Anthropic", "PostgreSQL", "FastAPI", "Redis", "RAG", "LLM Orchestration"],
    live: "https://humanizing-labs.vercel.app/",
    featured: false,
  },
  {
    name: "Wrively",
    tagline: "Sound like yourself. Every time.",
    description: "Most AI writes for everyone. Wrively writes for you. Trained on how you think, what you believe, and how you sound at your best. Builds your voice once and writes from it forever. From topic to post in under 3 minutes.",
    tech: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Tailwind CSS"],
    live: "https://wrively.com",
    github: "https://github.com/MohdTalib0/FounderX",
    featured: false,
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
    description: "Technical lead for a 20-engineer team delivering an AI learning and assessment platform in four weeks. RAG, hybrid processing and caching reduced inference costs 50%; an internal platform automated approximately 90% of manual setup and onboarding work, supporting adoption across six US districts and more than ten schools within six months.",
    tech: ["Next.js", "TypeScript", "Supabase", "RAG", "Agentic AI"],
    featured: true,
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
  "React",
  "TypeScript",
  "PostgreSQL",
  "AWS S3",
  "OpenAI",
  "Anthropic",
  "AI Evaluation",
  "AWS",
  "Docker",
];

/**
 * Trimmed skill matrix: 4-6 items per category. Recruiter rule:
 * top 10 are signal, the rest dilute.
 */
export const skills = {
  "AI Platforms & Infrastructure": ["Agent Orchestration", "Multi-Agent Systems", "AI Evaluation", "LLM Observability", "Model Routing", "Tool Calling", "RAG", "Memory Systems", "Provenance", "Agent Reliability", "LangGraph", "pgvector"],
  "Backend & Platform Engineering": ["Python", "FastAPI", "PostgreSQL", "Redis", "TypeScript", "React / Next.js", "REST APIs", "Multi-Tenant Architecture", "Background Jobs", "Queues"],
  "ML & Data Systems": ["PyTorch", "XGBoost", "LightGBM", "YOLOv8", "SQLAlchemy", "Alembic", "Media QA Pipelines"],
  "Cloud & Reliability": ["AWS", "S3", "Docker", "GitHub Actions", "CI/CD", "Sentry", "Cloudflare R2", "Observability"],
  "Technical Leadership": ["Architecture Reviews", "Hiring", "Mentoring", "Roadmap Ownership", "Technical Writing", "Enterprise Delivery", "0-to-1 Platforms"],
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

export const executiveEducation = {
  program: "Executive Programme in Technology & AI Leadership",
  school: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
  department: "Partha Ghosh School of Leadership",
  period: "2026 - 2027",
  status: "In progress",
  focus: ["AI Strategy", "Technology Leadership", "Responsible AI", "Governance & Risk", "Digital Transformation"],
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
  { value: "20", label: "Engineers in Teams Led" },
  { value: "15+", label: "Countries Collaborated" },
];

/**
 * The hero proof strip: the 4 numbers that should make a recruiter
 * decide to send an email within 10 seconds.
 * Numbers come first, then a single descriptive line.
 */
export const proofMetrics = [
  {
    value: "95%",
    label: "Media acceptance",
    detail: "Up from 40% on NVIDIA programs",
  },
  {
    value: "~90%",
    label: "Less manual checking",
    detail: "Through configurable MediaHub validation",
  },
  {
    value: "50%",
    label: "Lower inference costs",
    detail: "Through RAG, hybrid processing and caching at Dumroo",
  },
  {
    value: "20",
    label: "Engineering team size",
    detail: "Technical leadership, architecture and roadmap ownership",
  },
];

/**
 * Trust strip: quiet wordmarks shown below the hero so a recruiter
 * sees a sequence of credible places before scrolling.
 */
export const collaborations = [
  "Agents Only Technologies",
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
