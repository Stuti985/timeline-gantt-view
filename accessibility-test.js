
const puppeteer = require("puppeteer");
const AxePuppeteer = require("@axe-core/puppeteer").default;

async function waitForStorybook(url, retries = 10, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (e) {
      console.log(`⏳ Waiting for Storybook to start... (${i + 1}/${retries})`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw new Error("❌ Storybook not reachable after waiting.");
}

(async () => {
  const url = "http://127.0.0.1:6006";
  await waitForStorybook(url);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log("✅ Storybook is running, scanning for accessibility issues...");
  await page.goto(url, { waitUntil: "networkidle2" });

  const results = await new AxePuppeteer(page).analyze();

  console.log("🧩 Accessibility Violations:");
  console.log(JSON.stringify(results.violations, null, 2));

  await browser.close();
})();
