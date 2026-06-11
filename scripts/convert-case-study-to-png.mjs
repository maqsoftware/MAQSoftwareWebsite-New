// @ts-check
/**
 * Re-encode every raster file in `public/case-studies/` as an
 * optimized PNG (palette quantization + max zlib compression),
 * resizing to a card-friendly max width. Updates
 * `src/data/insights.ts` so any non-PNG imageUrl entries are
 * rewritten to the new `.png` filenames.
 *
 * SVGs are left untouched.
 *
 * Usage (from MAQSoftwareWebsite-New folder):
 *   node scripts/convert-case-study-to-png.mjs
 */

import { readdir, readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const imagesDir = path.join(projectRoot, "public", "case-studies");
const insightsFile = path.join(projectRoot, "src", "data", "insights.ts");

const TARGET_MAX_WIDTH = 1280;

const RASTER_EXTS = new Set([
  ".webp",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".tif",
  ".tiff",
]);

async function main() {
  const entries = await readdir(imagesDir, { withFileTypes: true });
  const rasters = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => RASTER_EXTS.has(path.extname(name).toLowerCase()));

  if (rasters.length === 0) {
    console.log("No raster images to convert.");
    return;
  }

  let beforeBytes = 0;
  let afterBytes = 0;
  /** @type {Map<string, string>} */
  const rename = new Map(); // oldName -> newName

  for (const name of rasters) {
    const inPath = path.join(imagesDir, name);
    const baseName = name.slice(0, name.length - path.extname(name).length);
    const outName = `${baseName}.png`;
    const outPath = path.join(imagesDir, outName);

    try {
      const inStat = await stat(inPath);
      beforeBytes += inStat.size;

      const buffer = await sharp(inPath, { failOn: "none" })
        .rotate()
        .resize({
          width: TARGET_MAX_WIDTH,
          withoutEnlargement: true,
          fit: "inside",
        })
        // Palette + max compression keeps PNGs small. quality controls
        // pngquant-like quantization aggressiveness.
        .png({
          compressionLevel: 9,
          palette: true,
          quality: 80,
          effort: 9,
          adaptiveFiltering: true,
        })
        .toBuffer();

      // Atomic-ish: write new file first, then unlink old if names differ.
      await writeFile(outPath, buffer);
      afterBytes += buffer.length;

      if (path.extname(name).toLowerCase() !== ".png") {
        await unlink(inPath);
        rename.set(name, outName);
      }

      console.log(
        `${name} (${(inStat.size / 1024).toFixed(0)} KB) → ${outName} (${(buffer.length / 1024).toFixed(0)} KB)`,
      );
    } catch (err) {
      console.warn(
        `! ${name}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  if (rename.size === 0) {
    console.log("No filename rewrites needed.");
  } else {
    const source = await readFile(insightsFile, "utf8");
    let updated = source;
    for (const [oldName, newName] of rename) {
      const escaped = `/case-studies/${oldName}`.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      updated = updated.replace(
        new RegExp(`"imageUrl":\\s*"${escaped}"`, "g"),
        `"imageUrl": "/case-studies/${newName}"`,
      );
    }
    if (updated !== source) {
      await writeFile(insightsFile, updated, "utf8");
      console.log(
        `\nRewrote ${rename.size} imageUrl entries in src/data/insights.ts`,
      );
    }
  }

  const dropped = beforeBytes - afterBytes;
  const pct = beforeBytes ? ((dropped / beforeBytes) * 100).toFixed(1) : "0";
  console.log(`\nBefore: ${(beforeBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`After:  ${(afterBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Δ:      ${(dropped / 1024 / 1024).toFixed(2)} MB (${pct}%)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
