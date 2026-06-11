// @ts-check
/**
 * One-time download / sync of remote case-study cover images into
 * `public/case-studies/` so the Insights → Case Studies page can
 * serve them from the local origin instead of hitting maqsoftware.com
 * (slow) through the wsrv.nl proxy (cold cache).
 *
 * After running, `src/data/insights.ts` is rewritten to use the
 * local paths.
 *
 * Usage (from MAQSoftwareWebsite-New folder):
 *   node scripts/download-case-study-images.mjs
 */

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, access } from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const insightsFile = path.join(projectRoot, "src", "data", "insights.ts");
const outputDir = path.join(projectRoot, "public", "case-studies");
const publicPrefix = "/case-studies/";

function extFromUrl(url) {
  const u = new URL(url);
  const last = u.pathname.split("/").pop() || "";
  const dot = last.lastIndexOf(".");
  if (dot === -1) return ".jpg";
  const ext = last.slice(dot).toLowerCase();
  if (ext.length > 6) return ".jpg";
  return ext;
}

function safeName(url) {
  const hash = createHash("sha1")
    .update(url)
    .digest("hex")
    .slice(0, 12);
  return `${hash}${extFromUrl(url)}`;
}

async function fileExists(p) {
  try {
    await access(p, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function download(url, dest) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": "MAQSoftwareWebsite/local-cache" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  const source = await readFile(insightsFile, "utf8");
  const urlMatcher = /"imageUrl":\s*"(https?:\/\/[^"]+)"/g;
  const urls = new Set();
  for (const m of source.matchAll(urlMatcher)) urls.add(m[1]);

  if (urls.size === 0) {
    console.log("No remote imageUrl entries found.");
    return;
  }

  await mkdir(outputDir, { recursive: true });

  /** @type {Map<string, string>} */
  const replacements = new Map();
  let downloaded = 0;
  let cached = 0;
  let failed = 0;

  for (const url of urls) {
    const name = safeName(url);
    const dest = path.join(outputDir, name);
    const localUrl = publicPrefix + name;
    if (await fileExists(dest)) {
      cached++;
      replacements.set(url, localUrl);
      continue;
    }
    try {
      const bytes = await download(url, dest);
      console.log(
        `↓ ${url}\n   → ${localUrl} (${(bytes / 1024).toFixed(1)} KB)`,
      );
      downloaded++;
      replacements.set(url, localUrl);
    } catch (err) {
      failed++;
      console.warn(`✗ ${url}: ${err instanceof Error ? err.message : err}`);
    }
  }

  if (replacements.size === 0) {
    console.log("No images were successfully downloaded.");
    return;
  }

  let updated = source;
  for (const [remote, local] of replacements) {
    const escaped = remote.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    updated = updated.replace(
      new RegExp(`"imageUrl":\\s*"${escaped}"`, "g"),
      `"imageUrl": "${local}"`,
    );
  }

  if (updated !== source) {
    await writeFile(insightsFile, updated, "utf8");
    console.log(`\nRewrote ${replacements.size} imageUrl entries in src/data/insights.ts`);
  }

  console.log(
    `\nDone. downloaded=${downloaded} cached=${cached} failed=${failed} total=${urls.size}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
