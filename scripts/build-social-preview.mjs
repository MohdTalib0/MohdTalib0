import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const source = new URL("./social-preview.html", import.meta.url);
const output = fileURLToPath(new URL("../public/og.png", import.meta.url));
const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox"],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto(source.href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: output });
  console.log(`Sharing preview: 1200x630 -> ${output}`);
} finally {
  await browser.close();
}
