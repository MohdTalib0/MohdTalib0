import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  Briefcase,
  Code2,
  Layers,
  Clock,
  Sparkles,
  Star,
  GitFork,
  Download,
  GraduationCap,
  Award,
  CalendarClock,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

import {
  personal,
  experience,
  projects,
  skills,
  proofMetrics,
  collaborations,
  availability,
  education,
  awards,
  currentStack,
} from "./data";

/* ──────────────────── Inline brand icons ──────────────────── */

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ──────────────────── Helpers ──────────────────── */

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </section>
  );
}

function SectionLabel({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20 text-accent text-[11px] font-semibold tracking-widest uppercase">
        <Icon size={13} aria-hidden="true" />
        {label}
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}

/* ──────────────────── Navbar ──────────────────── */

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["experience", "projects", "skills", "contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handler);
      observer.disconnect();
    };
  }, []);

  // Body scroll lock + Esc-to-close while the drawer is open.
  // Restoring overflow on cleanup is important; a stuck "hidden"
  // state silently breaks the whole page after navigation.
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(26,24,21,0.06)]"
            : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-text-bright font-semibold text-lg tracking-tight"
            aria-label="Home · Mohd Talib"
          >
            <span className="text-accent font-mono">{">"}</span> MT
          </a>

          {/* Desktop nav (md+) */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`px-3 py-1.5 text-sm transition-colors rounded-lg hover:bg-bg-card ${
                  activeSection === link
                    ? "text-text-bright bg-bg-card"
                    : "text-text hover:text-text-bright"
                }`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm text-text hover:text-text-bright transition-colors rounded-lg hover:bg-bg-card inline-flex items-center gap-1"
            >
              Resume
              <Download size={12} aria-hidden="true" />
            </a>
            <a
              href={personal.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm text-text hover:text-text-bright transition-colors rounded-lg hover:bg-bg-card inline-flex items-center gap-1.5"
            >
              Book Call
              <CalendarClock size={13} aria-hidden="true" />
            </a>
            <div className="ml-2 flex items-center gap-1.5 border-l border-border pl-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg-card transition-all mr-0.5 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg-card transition-all"
              >
                <GitHubIcon size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg-card transition-all"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="ml-2 px-4 py-1.5 text-sm bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger (< md) */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-lg text-text-bright hover:bg-bg-card transition-colors"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer + backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
              className="md:hidden fixed inset-0 z-[60] bg-text-bright/30 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-[70] w-[86vw] max-w-[340px] bg-bg-card border-l border-border flex flex-col shadow-[0_0_40px_rgba(26,24,21,0.12)]"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
                <span className="text-text-bright font-semibold text-sm">
                  <span className="text-accent font-mono">{">"}</span> Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center w-9 h-9 -mr-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-colors"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-0.5">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-3 text-base rounded-lg transition-colors ${
                      activeSection === link
                        ? "text-text-bright bg-bg font-medium"
                        : "text-text hover:text-text-bright hover:bg-bg"
                    }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base text-text hover:text-text-bright rounded-lg hover:bg-bg transition-colors inline-flex items-center justify-between"
                >
                  <span>Resume</span>
                  <Download size={15} aria-hidden="true" className="opacity-70" />
                </a>
                <a
                  href={personal.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base text-text hover:text-text-bright rounded-lg hover:bg-bg transition-colors inline-flex items-center justify-between"
                >
                  <span>Book a 15-min call</span>
                  <CalendarClock size={15} aria-hidden="true" className="opacity-70" />
                </a>
              </nav>

              <div className="px-5 py-5 border-t border-border flex flex-col gap-3 shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-colors"
                    >
                      <GitHubIcon size={18} />
                    </a>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-colors"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      toggleTheme();
                      setMobileOpen(false);
                    }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-colors border border-border cursor-pointer"
                    aria-label="Toggle dark mode"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  Get in touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ──────────────────── Hero ──────────────────── */
/**
 * One job: convert a recruiter glance into an email click in 10 seconds.
 * Hierarchy: title → proof → primary CTA. Brand voice is moved to Contact.
 */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] flex flex-col justify-center px-5 md:px-6 overflow-hidden"
    >
      {/* Single ambient glow (replaces parallax orbs) */}
      <div
        className="ambient-glow bg-accent"
        style={{
          width: 720,
          height: 720,
          left: "-10%",
          top: "10%",
        }}
        aria-hidden="true"
      />
      <div
        className="ambient-glow bg-purple"
        style={{
          width: 520,
          height: 520,
          right: "-5%",
          top: "30%",
          opacity: 0.05,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto pt-24 md:pt-28 w-full">
        {/* Status row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-dim border border-green/20">
            <span className="relative flex h-2 w-2">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            <span className="text-xs text-green font-medium">Open to Staff &amp; Lead roles</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card border border-border text-xs text-text-dim">
            <MapPin size={12} aria-hidden="true" />
            Based in {availability.base} · Remote / {availability.remoteFor.join(" / ")}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card border border-border text-xs text-text-dim">
            <Sparkles size={12} aria-hidden="true" />
            Tech Lead @ TheAgentic AI
          </span>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-text-dim mb-5"
        >
          Mohd Talib · AI Engineering Lead · Full-Stack
        </motion.p>

        {/* Headline: value claim, not brand voice */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
          className="text-[2rem] sm:text-5xl md:text-[5.25rem] font-extrabold text-text-bright tracking-tighter leading-[1] sm:leading-[0.95] mb-5 md:mb-6"
        >
          I lead teams that ship
          <br />
          production AI.{" "}
          <span className="gradient-text">0 to 1, in weeks.</span>
        </motion.h1>

        {/* Proof paragraph: concrete, defensible, scannable */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-text max-w-2xl mb-5 leading-relaxed"
        >
          Tech lead at <span className="text-text-bright font-medium">TheAgentic AI</span>.
          Previously, as de facto CTO,{" "}
          <span className="text-text-bright font-medium">
            led a 20-engineer team to build Dumroo 2.0 in 4 weeks
          </span>{" "}
          (promoted to Senior in 6 months), now serving 6 US K-12 districts.{" "}
          <span className="text-text-bright">
            ~50% lower inference cost, 2x accuracy, 10x faster onboarding.
          </span>{" "}
          Agentic AI, RAG, full-stack on FastAPI &amp; Next.js.
        </motion.p>

        {/* Recognition strip: education + awards, fills the credibility gap */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-dim mb-9"
        >
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap size={13} aria-hidden="true" />
            {education.degree.replace("B.Tech in ", "B.Tech, ")},{" "}
            {education.school.split(",")[0]} · {education.year}
          </span>
          {awards.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5"
            >
              <span className="text-text-dim/40" aria-hidden="true">·</span>
              <Award size={13} aria-hidden="true" />
              {a}
            </span>
          ))}
        </motion.div>

        {/* CTAs: one dominant primary, two ghost secondary. GitHub moved to nav. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${personal.email}?subject=Re%3A%20your%20portfolio&body=Hi%20Mohd%2C%0A%0A`}
            className="group flex items-center gap-2 px-6 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_8px_32px_rgba(184,102,45,0.32)]"
          >
            <Mail size={18} aria-hidden="true" />
            <span className="hidden sm:inline">{personal.email}</span>
            <span className="sm:hidden">Email me</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 bg-bg-card border border-border text-text-bright rounded-xl font-medium hover:border-border-hover transition-all"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 bg-bg-card border border-border text-text-bright rounded-xl font-medium hover:border-border-hover transition-all"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </motion.div>

        {/* Booking tertiary: recruiters who don't want to email can self-serve */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-4"
        >
          <a
            href={personal.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-text-bright transition-colors group"
          >
            <CalendarClock size={14} aria-hidden="true" />
            or book a 15-min call
            <ArrowUpRight
              size={12}
              className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────── Metrics Strip ──────────────────── */
/**
 * Numbers are first-class typography. Tabular nums, no decoration.
 * Sits directly under the hero so a recruiter sees proof above the fold
 * on most laptops.
 */

function MetricsStrip() {
  return (
    <div className="relative border-y border-border bg-bg-card/40">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-7 md:gap-y-8 gap-x-5 md:gap-x-6">
        {proofMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <div className="tnum text-3xl md:text-4xl font-extrabold text-text-bright tracking-tight leading-none mb-2">
              {m.value}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-1">
              {m.label}
            </div>
            <div className="text-xs text-text-dim leading-relaxed max-w-[20ch]">
              {m.detail}
            </div>
            {i < proofMetrics.length - 1 && (
              <div className="hidden md:block absolute right-[-12px] top-1 bottom-1 w-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────── Trust Strip ──────────────────── */
/**
 * Quiet wordmark row: what an editorial / audit-firm site does instead
 * of a marquee. No animation, no logos that might break trademark norms.
 */

function TrustStrip() {
  const brandStyles: Record<string, string> = {
    "TheAgentic AI": "font-serif tracking-tight font-extrabold italic text-sm md:text-base",
    "Dumroo.ai": "font-sans tracking-tighter font-black text-xs md:text-sm uppercase",
    "Omdena": "font-mono tracking-widest font-bold text-[11px] md:text-xs uppercase",
    "CodeSpaze": "font-sans tracking-tight font-semibold text-xs md:text-sm lowercase",
    "Techpile": "font-mono tracking-normal font-medium text-xs md:text-sm",
    "Innomatics": "font-serif tracking-widest font-normal text-xs md:text-sm uppercase",
  };

  return (
    <div className="relative px-5 md:px-6 py-7 md:py-8 border-b border-border bg-bg-card/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:gap-5">
        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-text-dim">
          Selected collaborations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-3.5 md:gap-y-4">
          {collaborations.map((co) => {
            const fontStyle = brandStyles[co] || "font-sans font-medium";
            return (
              <span
                key={co}
                className={`text-text opacity-40 hover:opacity-100 hover:scale-105 cursor-default transition-all duration-300 select-none ${fontStyle}`}
              >
                {co}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Experience ──────────────────── */

function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Section id="experience" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Briefcase} label="Experience" />

        <div className="relative">
          <div className="timeline-spine absolute left-[18px] top-4 bottom-4 w-px hidden md:block" />

          <div className="space-y-3">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative md:pl-12"
              >
                <div
                  className={`absolute left-[14px] top-6 w-[9px] h-[9px] rounded-full border-2 hidden md:block ${
                    exp.current
                      ? "bg-green border-green shadow-[0_0_8px_rgba(85,122,65,0.45)]"
                      : "bg-bg border-border"
                  }`}
                  aria-hidden="true"
                />

                <button
                  type="button"
                  aria-expanded={expanded === i}
                  aria-controls={`exp-${i}-detail`}
                  className={`card-glow w-full text-left rounded-xl bg-bg-card border overflow-hidden transition-all hover:bg-bg-card-hover ${
                    exp.current
                      ? "border-accent/25 shadow-[0_0_0_1px_rgba(184,102,45,0.10),0_4px_32px_rgba(184,102,45,0.05)]"
                      : "border-border"
                  }`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-text-bright font-semibold text-sm">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gradient-to-r from-accent/20 to-purple/25 text-accent border border-accent/20">
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
                          <MapPin size={10} aria-hidden="true" />
                          {exp.location}
                          {exp.remote && " (Remote)"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="tnum text-[11px] text-text-dim font-mono px-2 py-0.5 rounded bg-bg border border-border">
                        {exp.period}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`text-text-dim transition-transform duration-200 ${
                          expanded === i ? "rotate-90" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {expanded === i && (
                    <motion.div
                      id={`exp-${i}-detail`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5"
                    >
                      <div className="border-t border-border pt-4">
                        <ul className="space-y-2 mb-4">
                          {exp.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm text-text leading-relaxed"
                            >
                              <ChevronRight
                                size={14}
                                className="text-accent shrink-0 mt-1"
                                aria-hidden="true"
                              />
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
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Projects ──────────────────── */

function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Code2} label="Selected work" />

        <div className="space-y-4 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`card-glow group relative p-6 rounded-xl bg-bg-card border border-border hover:bg-bg-card-hover transition-all hover:-translate-y-0.5 hover:shadow-xl project-accent-${
                (i % 3) + 1
              }`}
            >
              <div className="flex items-start justify-between mb-2 gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-text-bright font-semibold text-lg">
                      {project.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim border border-border bg-bg">
                      featured
                    </span>
                    {"openSource" in project && project.openSource && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium text-green bg-green-dim border border-green/20">
                        Open source
                      </span>
                    )}
                    {"stars" in project && typeof project.stars === "number" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} on GitHub · ${project.stars} stars`}
                        className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[10px] font-mono text-text-dim border border-border bg-bg hover:text-text-bright hover:border-border-hover transition-colors tnum"
                      >
                        <span className="inline-flex items-center gap-1">
                          <Star size={11} aria-hidden="true" />
                          {project.stars}
                        </span>
                        {"forks" in project && typeof project.forks === "number" && (
                          <>
                            <span className="text-text-dim/40" aria-hidden="true">
                              ·
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <GitFork size={11} aria-hidden="true" />
                              {project.forks}
                            </span>
                          </>
                        )}
                      </a>
                    )}
                  </div>
                  {project.tagline && (
                    <p className="text-accent text-sm font-medium">
                      {project.tagline}
                    </p>
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
                      <ExternalLink size={14} aria-hidden="true" />
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
                      aria-label={`${project.name} on GitHub`}
                      className="p-1.5 rounded-lg text-text-dim hover:text-text-bright hover:bg-bg transition-all"
                    >
                      <GitHubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-text mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-text-dim bg-bg border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact grid: quieter palette, no per-card accent colors */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {other.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-4 rounded-xl bg-bg-card border border-border hover:bg-bg-card-hover hover:border-border-hover transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-text-dim group-hover:bg-accent transition-colors" />
                  <h4 className="text-text-bright font-medium text-sm truncate">
                    {project.name}
                  </h4>
                </div>
                <div className="flex gap-1.5 shrink-0 ml-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live`}
                      className="text-text-dim hover:text-accent transition-colors"
                    >
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="text-text-dim hover:text-text-bright transition-colors"
                    >
                      <GitHubIcon size={13} />
                    </a>
                  ) : (
                    <Briefcase
                      size={12}
                      className="text-text-dim"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
              {project.tagline && (
                <p className="text-[11px] text-accent mb-1.5">
                  {project.tagline}
                </p>
              )}
              <p className="text-xs text-text-dim leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Skills ──────────────────── */
/**
 * Restraint pass: one accent for AI/LLM (purple), one for everything else
 * (muted text-bright). Six-color category palette removed; it read as
 * hackathon dashboard, not Staff-band engineer.
 */

function SkillsSection() {
  const aiAccent = {
    badge: "text-purple bg-purple-dim border-purple/25",
    border: "var(--color-purple)",
    glowBorder: "rgba(122, 79, 44, 0.32)",
    glowShadow: "rgba(122, 79, 44, 0.08)",
    primary: "text-purple",
  };

  const neutral = {
    badge: "text-text-bright bg-bg-card border-border",
    border: "var(--color-border-hover)",
    glowBorder: "rgba(184, 102, 45, 0.24)",
    glowShadow: "rgba(184, 102, 45, 0.05)",
    primary: "text-text-bright",
  };

  const entries = Object.entries(skills);

  return (
    <Section id="skills" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel icon={Layers} label="Skills & Tools" />

        {/* Currently shipping with: the line a hiring manager screens on */}
        <div className="mb-8 p-5 rounded-xl bg-bg-card border border-border">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-text-dim mb-3">
            Currently shipping with
          </p>
          <div className="flex flex-wrap gap-1.5">
            {currentStack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs text-text-bright bg-bg border border-border font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {entries.map(([category, items], i) => {
            const isAI = category === "AI & LLM";
            const style = isAI ? aiAccent : neutral;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={
                  {
                    borderLeft: `2px solid ${style.border}`,
                    "--glow-border": style.glowBorder,
                    "--glow-shadow": style.glowShadow,
                  } as React.CSSProperties
                }
                className="skill-card p-5 rounded-xl bg-bg-card border border-border"
              >
                <div
                  className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium border mb-3 ${style.badge}`}
                >
                  {category}
                  <span className="opacity-60 tnum font-mono">
                    ({items.length})
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill, j) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs cursor-default transition-colors ${
                        j < 3
                          ? `${style.primary} bg-bg border border-border font-medium`
                          : "text-text-dim bg-bg/50 border border-border/40 hover:border-border"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ──────────────────── Contact ──────────────────── */
/**
 * Brand voice lives here, not in the hero. The hero is for proof;
 * the closer is for personality. One large CTA, one response-time
 * line, explicit geography, secondary links.
 */

function ContactSection() {
  return (
    <Section id="contact" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative p-6 sm:p-10 md:p-16 rounded-2xl bg-bg-card border border-border overflow-hidden text-center contact-card-glow">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-purple/8 blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className="text-accent font-mono text-xs uppercase tracking-[0.22em] mb-4">
              What's next
            </p>

            <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-text-bright mb-4 tracking-tight leading-[1.05]">
              Let's build something
              <br />
              <span className="gradient-text">unreasonably good.</span>
            </h2>

            <p className="text-text mb-8 leading-relaxed max-w-lg mx-auto">
              Hiring for an AI Tech Lead, Staff Engineer, or 0-to-1 founding role?
              I read every message and usually reply within a day.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a
                href={`mailto:${personal.email}?subject=Re%3A%20your%20portfolio&body=Hi%20Mohd%2C%0A%0A`}
                className="group flex items-center gap-2 px-5 sm:px-7 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_8px_32px_rgba(184,102,45,0.32)] max-w-full"
              >
                <Mail size={18} aria-hidden="true" />
                <span className="hidden sm:inline">{personal.email}</span>
                <span className="sm:hidden">Email me</span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href={personal.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3.5 bg-bg border border-border text-text-bright rounded-xl font-semibold hover:border-border-hover hover:bg-bg-card-hover transition-all"
              >
                <CalendarClock size={18} aria-hidden="true" />
                Book a 15 min
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Availability detail */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-dim mb-6">
              <span className="flex items-center gap-1.5">
                <Clock size={12} aria-hidden="true" />
                {availability.responseTime}
              </span>
              <span className="hidden md:inline text-text-dim/40">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} aria-hidden="true" />
                Based in {availability.base}
              </span>
              <span className="hidden md:inline text-text-dim/40">·</span>
              <span>
                Open to relocation:{" "}
                <span className="text-text">
                  {availability.relocateTo.join(", ")}
                </span>
              </span>
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
                  aria-label={label}
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
    <footer className="py-8 md:py-10 px-5 md:px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-text-bright font-semibold text-sm mb-1">
              <span className="text-accent font-mono">{">"}</span> {personal.name}
            </div>
            <p className="text-xs text-text-dim">
              AI Engineering Lead · Full-Stack. Building production AI systems.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-text-dim hover:text-text-bright inline-flex items-center gap-1 mt-1 transition-colors"
            >
              <Download size={11} aria-hidden="true" />
              Download resume (PDF)
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-dim hover:text-text-bright transition-colors"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-dim hover:text-text-bright transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-text-dim hover:text-text-bright transition-colors"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <span className="text-text-dim text-[10px] font-mono ml-2 tnum">
              2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── App ──────────────────── */

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative grid-bg">
      <div className="noise-overlay" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <MetricsStrip />
      <TrustStrip />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
