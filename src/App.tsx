import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Terminal,
  Briefcase,
  Code2,
  Layers,
} from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
import { personal, experience, projects, skills, stats } from "./data";

/* ──────────────────── Helpers ──────────────────── */

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </section>
  );
}

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20 text-accent text-xs font-medium tracking-wide uppercase">
        <Icon size={14} />
        {label}
      </div>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

/* ──────────────────── Navbar ──────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ["experience", "projects", "skills", "contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-text-bright font-semibold text-lg tracking-tight">
          <span className="text-accent">{">"}</span> MT
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="px-3 py-1.5 text-sm text-text hover:text-text-bright transition-colors rounded-lg hover:bg-bg-card"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-border pl-3">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg-card transition-all">
              <GitHubIcon size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg-card transition-all">
              <LinkedinIcon size={16} />
            </a>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="ml-2 px-4 py-1.5 text-sm bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ──────────────────── Marquee ──────────────────── */

const marqueeItems = [
  "RAG Pipelines", "Agentic AI", "LLM Optimization", "Full-Stack", "FastAPI", "Next.js",
  "React Native", "PostgreSQL", "Computer Vision", "MLflow", "Docker", "AWS",
];

function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 border-y border-border bg-bg-card/50">
      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="text-sm font-mono text-text-dim flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────── Hero ──────────────────── */

function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "building AI systems that ship";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax background orbs */}
      <div
        className="glow bg-accent left-1/4 top-1/4"
        style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`, transition: "transform 0.3s ease-out" }}
      />
      <div
        className="glow bg-purple-500 right-1/4 top-1/2"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`, transition: "transform 0.3s ease-out" }}
      />
      <div
        className="glow bg-emerald-500 left-1/2 bottom-1/4 opacity-[0.06]"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`, transition: "transform 0.3s ease-out" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto pt-24">
        {/* Top row: status + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-dim border border-green/20">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="text-xs text-green font-medium">Open to work</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card border border-border text-xs text-text-dim">
            <MapPin size={12} />
            India / Remote
          </div>
        </motion.div>

        {/* Name - left aligned, massive */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-8xl font-extrabold text-text-bright tracking-tighter leading-[0.9] mb-6"
        >
          I build things
          <br />
          that <span className="gradient-text">think.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-text max-w-2xl mb-4 leading-relaxed"
        >
          <span className="text-text-bright font-semibold">{personal.name}</span>
          <span className="text-text-dim"> / </span>
          {personal.title} at{" "}
          <span className="gradient-text font-semibold">TheAgentic AI</span>
        </motion.p>

        {/* Terminal tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-bg-card border border-border font-mono text-sm mb-10"
        >
          <span className="text-green">~</span>
          <span className="text-accent">$</span>
          <span className="text-text-bright">{typedText}</span>
          <span className="cursor-blink text-accent">|</span>
        </motion.div>

        {/* Stats row - horizontal, not grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-6 md:gap-10 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="group">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-text-bright tracking-tight">{stat.value}</span>
                {i < stats.length - 1 && <span className="hidden md:block text-border text-2xl ml-6">/</span>}
              </div>
              <div className="text-xs text-text-dim mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${personal.email}`}
            className="group flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            <Mail size={18} />
            Let's talk
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-bg-card border border-border text-text-bright rounded-xl font-medium hover:border-border-hover transition-all"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 bg-bg-card border border-border text-text-bright rounded-xl font-medium hover:border-border-hover transition-all"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1 px-4 py-3 text-sm text-text-dim hover:text-text-bright transition-colors"
          >
            View work
            <ChevronRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-text-dim" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────── Experience ──────────────────── */

function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Briefcase} label="Experience" />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[18px] top-4 bottom-4 w-px bg-border hidden md:block" />

          <div className="space-y-3">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[14px] top-6 w-[9px] h-[9px] rounded-full border-2 hidden md:block ${
                  exp.current ? "bg-green border-green shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-bg border-border"
                }`} />

                <div
                  className="card-glow rounded-xl bg-bg-card border border-border overflow-hidden cursor-pointer transition-colors hover:bg-bg-card-hover"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {/* Header */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-text-bright font-semibold text-sm">{exp.role}</h3>
                        {exp.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-accent-dim text-accent border border-accent/20">
                            {exp.badge}
                          </span>
                        )}
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-green-dim text-green border border-green/20">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-dim">
                        <span className="text-text font-medium">{exp.company}</span>
                        <span>{exp.type}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {exp.location}
                          {exp.remote && " (Remote)"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-text-dim font-mono">{exp.period}</span>
                      <ChevronRight
                        size={16}
                        className={`text-text-dim transition-transform duration-200 ${expanded === i ? "rotate-90" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <div className="border-t border-border pt-4">
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((bullet, j) => (
                            <li key={j} className="flex gap-2 text-sm text-text leading-relaxed">
                              <ChevronRight size={14} className="text-accent shrink-0 mt-1" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.tags && (
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg border border-border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Highlight Band ──────────────────── */

function HighlightBand() {
  return (
    <div className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-purple-500/5 to-accent/5" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-accent/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-mono text-xs mb-4 tracking-wider uppercase"
        >
          Track record
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-extrabold text-text-bright tracking-tight mb-6"
        >
          3 platforms shipped in 2 weeks each.
          <br />
          <span className="text-text">50% inference cost cut. 10x onboarding speed.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-dim max-w-xl mx-auto leading-relaxed"
        >
          From health-tech AI pipelines to regulatory compliance platforms,
          I don't just build features. I ship entire products, end-to-end, fast.
        </motion.p>
      </div>
    </div>
  );
}

/* ──────────────────── Projects ──────────────────── */

function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Code2} label="Projects" />

        {/* Featured */}
        <div className="space-y-4 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`card-glow group p-6 rounded-xl bg-bg-card border border-border hover:bg-bg-card-hover transition-colors project-accent-${(i % 3) + 1}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-text-bright font-semibold text-lg">{project.name}</h3>
                  {project.tagline && (
                    <p className="text-accent text-sm font-medium mt-0.5">{project.tagline}</p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs text-text-dim hover:text-accent hover:bg-accent-dim transition-all"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {"beta" in project && project.beta && (
                    <a
                      href={project.beta as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs text-green bg-green-dim border border-green/20 hover:bg-green/20 transition-all"
                    >
                      Beta
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-all"
                    >
                      <GitHubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-text mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {other.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-4 rounded-xl bg-bg-card border border-border hover:bg-bg-card-hover hover:border-border-hover transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-text-bright font-medium text-sm">{project.name}</h4>
                <div className="flex gap-1.5">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent transition-colors">
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-text-bright transition-colors">
                      <GitHubIcon size={13} />
                    </a>
                  ) : (
                    <Briefcase size={12} className="text-text-dim" />
                  )}
                </div>
              </div>
              {project.tagline && (
                <p className="text-[11px] text-accent mb-1.5">{project.tagline}</p>
              )}
              <p className="text-xs text-text-dim leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Skills ──────────────────── */

function SkillsSection() {
  const categoryColors: Record<string, string> = {
    "AI & LLM": "text-purple-400 bg-purple-400/10 border-purple-400/20",
    "Backend": "text-blue-400 bg-blue-400/10 border-blue-400/20",
    "Frontend & Mobile": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    "ML & Data": "text-orange-400 bg-orange-400/10 border-orange-400/20",
    "Infrastructure": "text-green-400 bg-green-400/10 border-green-400/20",
    "Databases & BaaS": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  };

  return (
    <Section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Layers} label="Skills & Tools" />

        {/* Primary skills - large, visual */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {Object.entries(skills).slice(0, 3).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-bg-card border border-border group hover:bg-bg-card-hover transition-colors"
            >
              <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium border mb-3 ${categoryColors[category] || "text-accent bg-accent-dim border-accent/20"}`}>
                <Terminal size={12} />
                {category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, j) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-lg text-xs cursor-default transition-all duration-200 ${
                      j < 3
                        ? "text-text-bright bg-bg border border-border font-medium hover:border-accent/40"
                        : "text-text-dim bg-bg/50 border border-border/50 hover:border-border"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary skills - compact */}
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(skills).slice(3).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="p-4 rounded-xl bg-bg-card border border-border"
            >
              <div className={`inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-medium border mb-2.5 ${categoryColors[category] || "text-accent bg-accent-dim border-accent/20"}`}>
                {category}
              </div>
              <div className="flex flex-wrap gap-1">
                {items.map((skill, j) => (
                  <span
                    key={skill}
                    className={`px-2 py-0.5 rounded text-[11px] cursor-default transition-colors ${
                      j < 3
                        ? "text-text bg-bg border border-border"
                        : "text-text-dim"
                    }`}
                  >
                    {skill}{j < items.length - 1 && j >= 3 ? " /" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Contact ──────────────────── */

function ContactSection() {
  return (
    <Section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative p-10 md:p-16 rounded-2xl bg-bg-card border border-border overflow-hidden text-center">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent font-mono text-sm mb-4"
            >
              {"// what's next?"}
            </motion.p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-text-bright mb-4 tracking-tight">
              Let's build something
              <br />
              <span className="gradient-text">unreasonably good.</span>
            </h2>
            <p className="text-text mb-8 leading-relaxed max-w-lg mx-auto">
              Whether it's a production AI platform, an ambitious startup idea, or a role where I can lead and ship fast.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                <Mail size={18} />
                {personal.email}
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex justify-center gap-3">
              {[
                { icon: GitHubIcon, href: personal.github, label: "GitHub" },
                { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg border border-border text-text hover:text-text-bright hover:border-border-hover transition-all"
                >
                  <Icon size={16} />
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Footer ──────────────────── */

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-text-bright font-semibold text-sm mb-1">
              <span className="text-accent font-mono">{">"}</span> {personal.name}
            </div>
            <p className="text-xs text-text-dim">
              Senior Full Stack AI Engineer. Building things that think.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-text-bright transition-colors">
              <GitHubIcon size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-text-bright transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${personal.email}`} className="text-text-dim hover:text-text-bright transition-colors">
              <Mail size={18} />
            </a>
            <span className="text-text-dim text-[10px] font-mono ml-2">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── App ──────────────────── */

export default function App() {
  return (
    <div className="relative grid-bg">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Marquee />
      <ExperienceSection />
      <HighlightBand />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
