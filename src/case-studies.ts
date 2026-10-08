export type CaseStudy = {
  problem: string;
  approach: string;
  decisions: string;
  outcome: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  MediaHub: {
    problem: "Enterprise audio and video programs required different quality rules, contributor workflows and delivery checks. Manual technical review created repetitive work, while non-compliant submissions needed to be caught before client delivery.",
    approach: "Led architecture and full-stack delivery of MediaHub, connecting contributor onboarding, resumable uploads, background media validation, reviewer queues and delivery tracking. Project-specific checks cover codecs, resolution, frame rate, duration, audio quality, exposure and sharpness.",
    decisions: "Made validation configurable by project, with project-scoped access and SLA-based review prioritization. Added retryable jobs, preview recovery, queue monitoring and Sentry tracking. Planned storage migration with checksums and rollback controls. Established application and cloud ownership, release gates and architecture reviews.",
    outcome: "NVIDIA program acceptance rose from 40% to 95% (+55 percentage points); manual technical checks fell approximately 90%. Supported 10,000+ contributors across 2026 MediaHub programs; configurable rules and SLA-based review queues intercepted 195 non-compliant submissions before delivery in September.",
  },
  "Prometheus RCA": {
    problem: "Investigating a production failure required connecting alerts with telemetry, recent deployments, source code, ownership and runbooks spread across operational tools. Cascading alerts could obscure the originating failure.",
    approach: "Connected seven operational tools: GitHub, Grafana, Prometheus, CloudWatch, Slack, Jira and Notion, alongside metrics, logs, traces and service dependencies. Grouped related failures, gathered evidence, compared root-cause hypotheses and generated postmortems with confidence, impact and recommended actions.",
    decisions: "Used topology and timing to group alerts, and engineer clarification when evidence was insufficient. Added workspace isolation, encrypted credentials, OAuth, sensitive-data redaction and configurable controls for Slack, Jira and Notion publishing. Python, FastAPI and LangGraph backend; React and TypeScript frontend.",
    outcome: "Delivered an investigation workflow covering environment onboarding, service inference, connectors, topology, engineer collaboration and postmortem drafting. Supports demonstration and live investigation modes, with separately configurable integrations and publishing controls.",
  },
  "Dumroo 2.0": {
    problem: "An AI learning and assessment product needed production delivery, economical model inference and repeatable onboarding for US school districts.",
    approach: "Technical lead for a 20-engineer team, reporting to the CEO; owned architecture, hiring, developer training, and roadmap execution. Delivered Dumroo 2.0 in four weeks using Next.js, TypeScript and Supabase; added role-based access and automated onboarding.",
    decisions: "Combined RAG, conventional application logic and caching so workflows did not require a fresh model call at every step. Improved response quality through adversarial testing, failure-case analysis, prompt refinement and model-parameter tuning. Built an internal platform for setup and onboarding; established regression tests, evaluation pipelines and CI/CD.",
    outcome: "Reduced LLM inference costs 50% and automated approximately 90% of manual setup and onboarding work. Supported adoption across six US districts and more than ten schools within six months.",
  },
};
