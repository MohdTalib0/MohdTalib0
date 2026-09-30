import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { projects, skills, executiveEducation, education } from "../data";
import { caseStudies } from "../case-studies";

const highlights = [
  {
    name: "MediaHub",
    id: "work-mediahub",
    category: "AI data operations",
    company: "Agents Only Technologies",
    metric: "40% → 95%",
    metricLabel: "NVIDIA program acceptance",
    secondary: "~90% fewer manual technical checks · 10,000+ contributors across projects in 2026",
    summary:
      "A reusable audio and video operations platform for programs supporting NVIDIA, ByteDance and Google. Configurable validation connects contributor uploads to technical QA, review and delivery.",
    flow: ["Collect", "Validate", "Review", "Deliver"],
  },
  {
    name: "Prometheus RCA",
    id: "work-prometheus-rca",
    category: "Applied AI & observability",
    company: "TheAgentic AI",
    metric: "7",
    metricLabel: "connected operational tools",
    secondary: "Topology, telemetry, code and human context",
    summary:
      "An AI-assisted investigation platform that connects fragmented incident evidence. Groups cascading alerts, compares cause hypotheses and collaborates with engineers before publishing findings.",
    flow: ["Alerts", "Topology", "Investigate", "Postmortem"],
  },
  {
    name: "Dumroo 2.0",
    id: "work-dumroo",
    category: "AI product & model economics",
    company: "Dumroo.ai",
    metric: "50%",
    metricLabel: "lower inference costs",
    secondary: "6 US districts · 10+ schools in 6 months",
    summary:
      "An AI learning and assessment platform launched in four weeks. Semantic caching and model routing improved inference economics; repeatable onboarding supported district adoption.",
    flow: ["Onboard", "Retrieve", "Route", "Evaluate"],
  },
];

export function Hero() {
  return (
    <section id="top" className="portfolio-hero">
      <div className="portfolio-container">
        <div className="hero-intro">
          <p className="eyebrow">Mohd Talib / Engineering Lead</p>
          <span className="availability-note">
            <span aria-hidden="true" /> Open to international opportunities
          </span>
        </div>
        <div className="hero-layout">
          <div>
            <h1>
              Engineering AI
              <br />
              <span>for production.</span>
            </h1>
            <p className="hero-position">
              AI Platforms &amp; Infrastructure · Applied AI Systems
            </p>
            <p className="hero-description">
              I connect architecture, evaluation and delivery to build useful AI
              products. My work improves data quality, lowers inference costs
              and turns complex enterprise workflows into reusable platforms.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="portfolio-button primary">
                Explore selected work <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button secondary"
              >
                Download résumé <Download size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-location">
              Based in India · Remote collaboration with international teams
            </p>
          </div>
          <aside className="hero-brief" aria-label="Selected platform work">
            <div className="brief-header">
              <span className="eyebrow">Selected systems</span>
              <span className="brief-index">01—03</span>
            </div>
            {highlights.map((work, i) => (
              <a key={work.name} href={`#${work.id}`} className="brief-project">
                <span className="brief-number">0{i + 1}</span>
                <span>
                  <strong>{work.name}</strong>
                  <small>{work.category}</small>
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <div className="brief-footer">
              <span className="eyebrow">Current role</span>
              <p>
                Engineering Lead
                <br />
                <strong>Agents Only Technologies</strong>
                <span>Part of TP</span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function WorkSection() {
  const additional = projects.filter(
    (p) => p.name === "AI Arena" || p.name === "OpenFishh",
  );
  const other = projects.filter(
    (p) =>
      !highlights.some((h) => h.name === p.name) && !additional.includes(p),
  );
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2>
              Systems with a purpose.
              <br />
              <span>Outcomes you can inspect.</span>
            </h2>
          </div>
          <p>
            Business context, implementation and the engineering decisions
            behind the result.
          </p>
        </div>
        <div className="work-list">
          {highlights.map((work, i) => (
            <article key={work.name} id={work.id} className="work-card">
              <div className="work-card-body">
                <div className="work-context">
                  <p className="eyebrow">
                    0{i + 1} / {work.category}
                  </p>
                  <h3>{work.name}</h3>
                  <p className="work-company">{work.company}</p>
                  <p className="work-summary">{work.summary}</p>
                </div>
                <div className="work-result">
                  <span
                    className={`work-metric tnum ${work.metric.length > 5 ? "work-metric-long" : ""}`}
                  >
                    {work.metric}
                  </span>
                  <p>{work.metricLabel}</p>
                  <small>{work.secondary}</small>
                </div>
              </div>
              <ol className="work-flow" aria-label={`${work.name} workflow`}>
                {work.flow.map((step, n) => (
                  <li key={step}>
                    <span className="flow-number">0{n + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <details className="work-details">
                <summary>
                  Architecture &amp; engineering decisions{" "}
                  <span className="details-indicator" aria-hidden="true">
                    +
                  </span>
                </summary>
                <dl className="case-study-grid">
                  {(
                    [
                      ["Problem", "problem"],
                      ["Implementation", "approach"],
                      ["Engineering decisions", "decisions"],
                      ["Results & context", "outcome"],
                    ] as const
                  ).map(([label, field]) => (
                    <div key={field}>
                      <dt>{label}</dt>
                      <dd>{caseStudies[work.name][field]}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </article>
          ))}
        </div>
        <div className="additional-work">
          {additional.map((project) => (
            <article key={project.name} className="supporting-project">
              <p className="eyebrow">
                {project.name === "OpenFishh"
                  ? "Open source"
                  : "Evaluation systems"}
              </p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Explore repository{" "}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
              {!project.github && (
                <span className="supporting-note">
                  Model comparison · Controlled assessment · Scoring
                </span>
              )}
            </article>
          ))}
        </div>
        <details className="more-work">
          <summary>
            More product &amp; open-source work{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <div className="other-work-grid">
            {other.map((project) => (
              <article key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="flex gap-4 mt-3">
                  {project.live && (
                    <a
                      className="text-link"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      Visit project{" "}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="text-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} repository`}
                    >
                      Repository <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section id="skills" className="portfolio-section expertise-section">
      <div className="portfolio-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Engineering scope</p>
            <h2>
              Depth across the
              <br />
              <span>platform lifecycle.</span>
            </h2>
          </div>
          <p>
            Hands-on implementation, architectural judgment and technical
            leadership.
          </p>
        </div>
        <div className="expertise-list">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={category} className="expertise-row">
              <span className="eyebrow">0{i + 1}</span>
              <h3>{category}</h3>
              <p>{items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div className="education-panel">
          <div className="education-icon">
            <GraduationCap size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">Technology leadership</p>
            <h3>{executiveEducation.school}</h3>
            <p>
              <strong>{executiveEducation.program}</strong> ·{" "}
              {executiveEducation.department}
            </p>
            <p className="education-period">{executiveEducation.period}</p>
            <a
              href="https://online.iitkgp.ac.in/executive-program-technology-and-ai-leadership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Programme details <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <p className="degree-note">
              {education.degree} · {education.school} · {education.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
