/**
 * Converts all SVG and PNG images in public/images/case-studies/external/
 * to WebP and saves them alongside the originals.
 *
 * Usage: node scripts/convert-case-study-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const EXTERNAL_DIR = path.resolve("public/images/case-studies/external");
const WEBP_QUALITY = 82;
const OUTPUT_WIDTH = 800; // card images render at max ~400px wide on desktop

const files = fs.readdirSync(EXTERNAL_DIR).filter((f) => /\.(svg|png)$/i.test(f));

if (files.length === 0) {
  console.log("No SVG/PNG files found.");
  process.exit(0);
}

let converted = 0;
let skipped = 0;
let failed = 0;

for (const file of files) {
  const inputFile = path.join(EXTERNAL_DIR, file);
  const baseName = file.replace(/\.(svg|png)$/i, "");
  const webpFile = path.join(EXTERNAL_DIR, `${baseName}.webp`);

  if (fs.existsSync(webpFile)) {
    console.log(`skip-exists\t${file}`);
    skipped++;
    continue;
  }

  try {
    await sharp(inputFile, { density: 192 }) // high density for crisp SVG rasterisation
      .resize({ width: OUTPUT_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpFile);

    const inSize = fs.statSync(inputFile).size;
    const outSize = fs.statSync(webpFile).size;
    const pct = Math.round((1 - outSize / inSize) * 100);
    console.log(`converted\t${file}\t${inSize} -> ${outSize} bytes (${pct > 0 ? "-" : "+"}${Math.abs(pct)}%)`);
    converted++;
  } catch (err) {
    console.error(`FAILED\t${file}\t${err.message}`);
    failed++;
  }
}

console.log(`\nDone. converted=${converted}  skipped=${skipped}  failed=${failed}`);
