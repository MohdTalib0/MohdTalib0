/**
 * Resume + CV → PDF generator (Puppeteer).
 *
 * Generates two PDFs from the HTML sources and writes them into
 * portfolio/public/ so the portfolio website can link to them directly.
 *
 * Run:
 *   npm run build:resumes
 *
 * Outputs:
 *   public/Mohd_Talib_Resume.pdf   (one-pager — replaces /resume.pdf alias)
 *   public/Mohd_Talib_CV.pdf       (detailed CV)
 *   public/resume.pdf              (kept as alias for the one-pager so
 *                                   portfolio's /resume.pdf links keep working)
 */

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { copyFile, mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const publicDir = resolve(repoRoot, "public");

/** @type {{src: string, out: string, label: string, maxPages: number}[]} */
const docs = [
  {
    src: resolve(__dirname, "resume-onepage.html"),
    out: resolve(publicDir, "Mohd_Talib_Resume.pdf"),
    label: "One-page Resume",
    maxPages: 1,
  },
  {
    src: resolve(__dirname, "cv-detailed.html"),
    out: resolve(publicDir, "Mohd_Talib_CV.pdf"),
    label: "Detailed CV",
    maxPages: 3,
  },
];

async function renderPdf(browser, doc) {
  const page = await browser.newPage();

  // Load the HTML file from disk. file:// is needed for the relative
  // stylesheet link (./styles.css) to resolve.
  await page.goto(`file://${doc.src}`, { waitUntil: "networkidle0" });

  // Webfonts: wait until Inter + JetBrains Mono are actually painted.
  // Without this, Puppeteer can serialize before the fonts swap in,
  // shifting line breaks and (occasionally) overflowing onto an extra page.
  await page.evaluateHandle("document.fonts.ready");

  await page.pdf({
    path: doc.out,
    format: "A4",
    printBackground: true,
    // Use the @page margin defined in styles.css instead of these.
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  // Quick sanity check on page count using a second pass — Puppeteer
  // doesn't expose pageCount directly, so we inspect the generated PDF's
  // byte signature. Cheap approximation: count "/Type /Page" occurrences.
  // (Not exact but catches the 1-pager-spilling-to-2 case.)
  const { readFile } = await import("node:fs/promises");
  const buf = await readFile(doc.out);
  const haystack = buf.toString("latin1");
  const matches = haystack.match(/\/Type\s*\/Page[^s]/g) || [];
  const pageCount = matches.length;

  if (pageCount > doc.maxPages) {
    console.warn(
      `⚠  ${doc.label}: rendered ${pageCount} pages (max ${doc.maxPages}). ` +
        `Consider tightening content.`
    );
  } else {
    console.log(`✓  ${doc.label}: ${pageCount} page(s) → ${doc.out}`);
  }

  await page.close();
}

async function main() {
  await mkdir(publicDir, { recursive: true });

  console.log("Launching headless Chromium…");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const doc of docs) {
      await renderPdf(browser, doc);
    }

    // Keep /resume.pdf as the alias for the one-pager so the portfolio's
    // existing <a href="/resume.pdf"> links keep working without edits.
    await copyFile(
      resolve(publicDir, "Mohd_Talib_Resume.pdf"),
      resolve(publicDir, "resume.pdf")
    );
    console.log("✓  Alias copied → public/resume.pdf");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Resume build failed:", err);
  process.exit(1);
});
