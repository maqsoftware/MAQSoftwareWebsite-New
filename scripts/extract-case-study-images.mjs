/**
 * Extracts embedded base64 images from SVG wrapper files and saves them as their
 * native format (WebP/JPEG/PNG). Also handles real PNG files by converting to WebP.
 *
 * Usage: node scripts/extract-case-study-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const EXTERNAL_DIR = path.resolve("public/images/case-studies/external");

const allFiles = fs.readdirSync(EXTERNAL_DIR);
const svgFiles = allFiles.filter((f) => /\.svg$/i.test(f));
const pngFiles = allFiles.filter((f) => /\.png$/i.test(f));

// Delete previously generated blank WebP files from failed SVG conversion
const existingWebp = allFiles.filter((f) => /\.webp$/i.test(f));
for (const f of existingWebp) {
  const sizeBefore = fs.statSync(path.join(EXTERNAL_DIR, f)).size;
  if (sizeBefore < 5000) {
    // Blank conversion artifact — delete it
    fs.unlinkSync(path.join(EXTERNAL_DIR, f));
    console.log(`deleted-blank\t${f}`);
  }
}

let extracted = 0;
let skipped = 0;
let failed = 0;

// --- Process SVG files: extract embedded base64 image ---
for (const file of svgFiles) {
  const inputFile = path.join(EXTERNAL_DIR, file);
  const baseName = file.replace(/\.svg$/i, "");
  const svgContent = fs.readFileSync(inputFile, "utf8");

  // Match both xlink:href and href attributes
  const match = svgContent.match(/(?:xlink:href|href)="data:image\/(\w+);base64,([^"]+)"/);
  if (!match) {
    console.log(`no-embed\t${file}`);
    skipped++;
    continue;
  }

  const embeddedFormat = match[1]; // e.g. "webp", "jpeg", "png"
  const base64Data = match[2].replace(/\s/g, "");
  const outputExt = embeddedFormat === "jpeg" ? "jpg" : embeddedFormat;
  const outputFile = path.join(EXTERNAL_DIR, `${baseName}.${outputExt}`);

  // Always save as WebP for consistency
  const webpFile = path.join(EXTERNAL_DIR, `${baseName}.webp`);
  if (fs.existsSync(webpFile)) {
    const size = fs.statSync(webpFile).size;
    if (size > 5000) {
      console.log(`skip-exists\t${file}`);
      skipped++;
      continue;
    }
  }

  try {
    const buffer = Buffer.from(base64Data, "base64");
    if (embeddedFormat === "webp") {
      // Already WebP — write directly
      fs.writeFileSync(webpFile, buffer);
    } else {
      // Convert to WebP
      await sharp(buffer).webp({ quality: 82, effort: 4 }).toFile(webpFile);
    }
    const outSize = fs.statSync(webpFile).size;
    const inSize = fs.statSync(inputFile).size;
    console.log(`extracted\t${file}\t(${embeddedFormat})\t${inSize} -> ${outSize} bytes`);
    extracted++;
  } catch (err) {
    console.error(`FAILED\t${file}\t${err.message}`);
    failed++;
  }
}

// --- Process PNG files: convert to WebP ---
for (const file of pngFiles) {
  const inputFile = path.join(EXTERNAL_DIR, file);
  const baseName = file.replace(/\.png$/i, "");
  const webpFile = path.join(EXTERNAL_DIR, `${baseName}.webp`);

  if (fs.existsSync(webpFile) && fs.statSync(webpFile).size > 5000) {
    console.log(`skip-exists\t${file}`);
    skipped++;
    continue;
  }

  try {
    await sharp(inputFile)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(webpFile);

    const inSize = fs.statSync(inputFile).size;
    const outSize = fs.statSync(webpFile).size;
    console.log(`converted-png\t${file}\t${inSize} -> ${outSize} bytes`);
    extracted++;
  } catch (err) {
    console.error(`FAILED\t${file}\t${err.message}`);
    failed++;
  }
}

console.log(`\nDone. extracted/converted=${extracted}  skipped=${skipped}  failed=${failed}`);
