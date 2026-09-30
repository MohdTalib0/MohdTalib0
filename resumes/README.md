# Résumé + CV

Two purpose-built documents, generated from HTML sources. The `.tex` files are
alternate editable versions; the published PDFs are generated from HTML.

| File                  | Audience                                           | Target length |
| --------------------- | -------------------------------------------------- | ------------- |
| `resume-onepage.html` | General Senior / Lead / Staff software and AI applications | 1 page strict |
| `cv-detailed.html`    | Technical hiring managers and warm introductions | 2 pages       |

Both share `styles.css` (print-optimized, ATS-friendly, brand-aligned with
the portfolio).

---

## Regenerating the PDFs

From the repository root:

```bash
npm run build:resumes
```

That runs Puppeteer headlessly, waits for the local fonts to load, and writes:

- `public/Mohd_Talib_Resume.pdf` — one-pager
- `public/Mohd_Talib_CV.pdf` — detailed CV
- `public/resume.pdf` — alias for the one-pager so existing portfolio
  links (`<a href="/resume.pdf">`) keep working without edits

Puppeteer needs a compatible Chrome installation. If its bundled browser is
missing, set `PUPPETEER_EXECUTABLE_PATH` to an installed Chrome/Chromium binary
when running the command. The current PDFs were verified with installed
Chromium, including page counts, extracted text and rendered-page inspection.

The historical `public/LaTex Resume's/` PDF paths are kept as copies for
existing links. They contain the same current documents as the main public PDFs.

The script also warns if the one-pager spills onto page 2 (a sentinel —
tighten content if you see that warning).

## Editing

Just open the `.html` files and edit. Layout, sizing, page rules all live
in `styles.css`. Both documents have a "Save as PDF" button visible only
on screen — useful when iterating in the browser instead of rebuilding
via Puppeteer.

## Quick preview without rebuilding

```bash
# From portfolio/
open resumes/resume-onepage.html        # macOS
start resumes\resume-onepage.html       # Windows PowerShell
```

Chrome will load the file. Hit ⌘P / Ctrl+P to preview the print output
directly — you'll see exactly what the PDF will look like.

## Design choices, briefly

- **Single-column flow, semantic HTML.** ATS parsers read it as
  structured text; multi-column resumes break Workday-style parsers.
- **Pure black body on white paper.** Gray-on-white kills contrast
  scoring on cheap PDF-to-text parsers.
- **Tabular numerals** (`font-feature: tnum`) so dates and metrics scan
  digit-by-digit instead of jittering.
- **Single accent color** (`#B8662D` terracotta) — name and section
  rules only. Matches portfolio brand without tripping ATS color filters.
- **Inter + JetBrains Mono** — same family the portfolio uses, so the
  three artifacts (portfolio + 2 PDFs) read as a coherent brand system.
  Fonts and their SIL Open Font Licenses are stored in `public/fonts/`;
  rendering does not require a Google Fonts request.
- **Generic client descriptors** ("a health-tech client", "a reg-tech
  client") — NDA-safe for TheAgentic AI work.

## General resume and opportunity-specific tailoring

The one-page resume is the default for referrals, recruiter introductions and
applications without a strong role-specific reason to change it. The detailed
CV supplies additional architecture, implementation and leadership context.
Use the general version as the source for tailored copies when a concrete JD
and compensation opportunity justify the effort.

| Target | Emphasize in the summary and first bullets | Supporting evidence |
| --- | --- | --- |
| Senior / Lead AI Product Engineer | Python, TypeScript, end-to-end delivery, business outcomes | MediaHub acceptance and automation; Dumroo inference economics |
| AI Platform / Staff Engineer | Reusable architecture, evaluation, tenant isolation, integration controls, team influence | TheAgentic's reusable platform engine; Prometheus RCA; release and ownership decisions |
| Enterprise AI Solutions Engineer | Customer requirements, integrations, technical demonstrations, reusable workflows | Enterprise programs, RCA connectors, configurable media rules |
| General Senior Software Engineer | Full-stack depth, APIs, data, background processing, reliability | FastAPI / React implementation, SQL optimization, recovery controls |

For a tailored version, change the summary, reorder relevant bullets and skills,
and select the most relevant project. Preserve employers, dates, credentials,
metric definitions and the scope of the work. Do not add technologies solely
because a JD mentions them. Save tailored files separately so the public PDF
remains the general version.

## Evidence definitions and next additions

- User-confirmed 2026 aggregate totals: 10,000+ contributors across MediaHub
  projects and 6,000+ candidates across AI Arena assessments (model comparison,
  GMR, medical, coding and STEM). These are participants, not a claim of
  concurrent active users or completed assessments. The project-specific
  September snapshot below has a narrower scope; keep the two separate.
  New programs arrive weekly or fortnightly; use dated totals rather than
  projecting future growth.

- NVIDIA acceptance: 40% to 95%, a 55-percentage-point increase on the relevant
  programs. Keep the measurement period and acceptance criteria available for
  interview discussion.
- Manual technical checks: approximately 90% reduction; this is not a claim
  that all human QA was removed.
- MediaHub: September 2026 snapshot of 310 accounts, 275 contributors, 278
  tracked submissions, 195 non-compliant submissions identified before delivery
  and 84 approved media files across two production projects. These counts
  should not be used to reconstruct the separate program acceptance rate.
- API reliability: approximately 0.02% server errors across more than 137,000
  September 2026 requests. This is an error-rate measure, not an uptime SLA.
- Dumroo inference: 50% lower cost and doubled accuracy. Keep the evaluated task,
  model configuration, baseline and accuracy measure available for discussion.
- Leadership: teams of 20 engineers at Dumroo and CodeSpaze. Keep team composition,
  reporting relationships and decisions clear; do not sum teams into a claim of
  unique direct reports.
- Prometheus RCA: describe implemented workflows and controls. Add MTTR or
  diagnostic-accuracy numbers only after a reproducible measurement exists.

The most valuable additional business measures are median QA minutes per asset,
review hours saved, rework rate, delivery turnaround and cost per approved asset.
Calculate savings from recorded before/after times and the relevant volume;
attach operating-cost estimates only when the inputs are known.

The portfolio's expandable case studies live in `src/case-studies.ts`. Update
those alongside the resumes when new evidence becomes available. The LinkedIn
copy in `linkedin-profile.txt` is ready for review and has not been published.

## When to update

| When                              | Update                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------- |
| Change role or company            | Both HTML files, plus `src/data.ts` for site consistency                |
| New project goes live             | Both HTML files (add to `Selected Projects`), plus `src/data.ts`        |
| Promotion / new metric            | Both HTML files                                                                   |
| Awards / recognition              | Both HTML files                                                                   |
| Phone number, email, links        | Both HTML files (header block — first ~15 lines)                                  |
