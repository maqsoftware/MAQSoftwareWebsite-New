#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = new URL(process.argv[2] ?? "http://127.0.0.1:5173/");
const outputUrl = new URL("../artifacts/link-inventory.json", import.meta.url);
const timeout = 15_000;

const profiles = [
  {
    name: "mobile",
    options: {
      viewport: { width: 390, height: 844 },
      isMobile: true,
      hasTouch: true,
    },
  },
  {
    name: "desktop",
    options: { viewport: { width: 1440, height: 900 } },
  },
];

function normalize(rawUrl) {
  const url = new URL(rawUrl, baseUrl);
  url.hash = "";
  return url.href;
}

function isInternalPage(rawUrl) {
  const url = new URL(rawUrl, baseUrl);
  return (
    url.origin === baseUrl.origin &&
    /^https?:$/.test(url.protocol) &&
    !/\.(?:avif|gif|jpe?g|pdf|png|svg|webp|zip)$/i.test(url.pathname)
  );
}

async function expandMobileHeader(page) {
  const toggle = page.getByRole("button", { name: "Open navigation" });
  if (!(await toggle.isVisible().catch(() => false))) return;

  await toggle.click();
  const dialog = page.locator("#mobile-nav");
  await dialog.waitFor({ state: "visible", timeout });

  const sections = await dialog.locator("button:not([aria-label])").all();
  for (const section of sections) {
    if ((await section.locator("..").locator("a[href]").count()) === 0) {
      await section.click();
    }
  }
}

async function collectControls(page) {
  const links = [];
  for (const link of await page.locator("a[href]").all()) {
    const href = await link.getAttribute("href");
    if (!href) continue;

    links.push({
      name: (await link.getAttribute("aria-label")) ?? (await link.innerText()).trim(),
      href,
      absoluteUrl: new URL(href, page.url()).href,
    });
  }

  const buttons = [];
  for (const button of await page.locator("button").all()) {
    buttons.push({
      name: (await button.getAttribute("aria-label")) ?? (await button.innerText()).trim(),
      type: (await button.getAttribute("type")) ?? "submit",
      disabled: await button.isDisabled(),
    });
  }

  return { links, buttons };
}

async function verifyBaseUrl(browser) {
  const context = await browser.newContext(profiles[1].options);
  const page = await context.newPage();
  await page.goto(baseUrl.href, { waitUntil: "domcontentloaded", timeout });
  const title = await page.title();
  const hasSiteHeader = (await page.locator(".site-header").count()) > 0;
  await context.close();

  if (!hasSiteHeader) {
    throw new Error(
      `${baseUrl.href} does not appear to be this website (page title: "${title}"). ` +
      "Use the URL printed by this project's Vite dev server.",
    );
  }
}

async function crawlProfile(browser, profile, seedUrls = []) {
  const context = await browser.newContext(profile.options);
  const page = await context.newPage();
  const queue = [baseUrl.href, ...seedUrls];
  const queued = new Set(queue.map(normalize));
  const pages = [];
  const failures = [];

  while (queue.length > 0) {
    const url = normalize(queue.shift());

    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout });
      const status = response?.status() ?? 0;
      if (status >= 400) throw new Error(`HTTP ${status}`);

      await page.waitForTimeout(250);
      if (profile.name === "mobile" && url === normalize(baseUrl.href)) {
        await expandMobileHeader(page);
      }

      const controls = await collectControls(page);
      pages.push({ url, status, ...controls });
      console.log(`  PASS ${url}`);

      for (const link of controls.links) {
        if (!isInternalPage(link.absoluteUrl)) continue;
        const target = normalize(link.absoluteUrl);
        if (queued.has(target)) continue;
        queued.add(target);
        queue.push(target);
      }
    } catch (error) {
      failures.push({ url, error: error.message });
      console.log(`  FAIL ${url}: ${error.message}`);
    }
  }

  await context.close();
  return { pages, failures, internalUrls: [...queued] };
}

const browser = await chromium.launch();
const results = {};

try {
  await verifyBaseUrl(browser);
  console.log("Checking mobile and building the URL inventory...");
  results.mobile = await crawlProfile(browser, profiles[0]);

  console.log("\nChecking the same URLs on desktop...");
  results.desktop = await crawlProfile(browser, profiles[1], results.mobile.internalUrls);
} finally {
  await browser.close();
}

const inventory = {
  baseUrl: baseUrl.href,
  generatedAt: new Date().toISOString(),
  urls: [...new Set([
    ...results.mobile.pages.flatMap((page) => page.links.map((link) => link.absoluteUrl)),
    ...results.desktop.pages.flatMap((page) => page.links.map((link) => link.absoluteUrl)),
  ])].sort(),
  buttons: [
    ...results.mobile.pages.flatMap((page) =>
      page.buttons.map((button) => ({ profile: "mobile", pageUrl: page.url, ...button })),
    ),
    ...results.desktop.pages.flatMap((page) =>
      page.buttons.map((button) => ({ profile: "desktop", pageUrl: page.url, ...button })),
    ),
  ],
  mobile: results.mobile.pages,
  desktop: results.desktop.pages,
};

await mkdir(new URL("../artifacts/", import.meta.url), { recursive: true });
await writeFile(outputUrl, `${JSON.stringify(inventory, null, 2)}\n`);

const failures = [
  ...results.mobile.failures.map((failure) => ({ profile: "mobile", ...failure })),
  ...results.desktop.failures.map((failure) => ({ profile: "desktop", ...failure })),
];

console.log(`\nInventory written to ${outputUrl.pathname}`);
console.log(`Found ${results.mobile.internalUrls.length} internal URLs.`);

if (failures.length > 0) {
  console.error(`\n${failures.length} URL failure(s):`);
  for (const failure of failures) {
    console.error(`- ${failure.profile}: ${failure.url}: ${failure.error}`);
  }
  process.exitCode = 1;
} else {
  console.log("All internal URLs loaded successfully on mobile and desktop.");
}
