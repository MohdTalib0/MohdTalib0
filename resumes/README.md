# Résumé + CV

Two purpose-built documents, generated from HTML sources.

| File                  | Audience                                           | Target length |
| --------------------- | -------------------------------------------------- | ------------- |
| `resume-onepage.html` | FAANG / top YC formal apps via Workday/Greenhouse  | 1 page strict |
| `cv-detailed.html`    | Smaller YC startups, warm intros, Indian/Gulf tier | 2–3 pages     |

Both share `styles.css` (print-optimized, ATS-friendly, brand-aligned with
the portfolio).

---

## Regenerating the PDFs

From `portfolio/`:

```bash
npm run build:resumes
```

That runs Puppeteer headlessly, waits for webfonts to load, and writes:

- `public/Mohd_Talib_Resume.pdf` — one-pager
- `public/Mohd_Talib_CV.pdf` — detailed CV
- `public/resume.pdf` — alias for the one-pager so existing portfolio
  links (`<a href="/resume.pdf">`) keep working without edits

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
- **Generic client descriptors** ("a health-tech client", "a reg-tech
  client") — NDA-safe for TheAgentic AI work.

## When to update

| When                              | Update                                                                            |
| --------------------------------- | --------------------------------------------------------------------------------- |
| Change role or company            | Both HTML files, plus `portfolio/src/data.ts` for site consistency                |
| New project goes live             | Both HTML files (add to `Selected Projects`), plus `portfolio/src/data.ts`        |
| Promotion / new metric            | Both HTML files                                                                   |
| OpenFishh stars/forks crossed 25★ | Bump the `pill` badges in both HTML files                                         |
| Awards / recognition              | Both HTML files                                                                   |
| Phone number, email, links        | Both HTML files (header block — first ~15 lines)                                  |
