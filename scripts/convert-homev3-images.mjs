import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const homeFile = path.resolve("src/pages/HomeV3.tsx");
const source = fs.readFileSync(homeFile, "utf8");
const matches = [...source.matchAll(/"(\/images\/[^"\n]+\.png)"/g)].map((m) => m[1]);
const imagePaths = [...new Set(matches)];

if (imagePaths.length === 0) {
  console.log("No PNG image paths found in HomeV3.tsx");
  process.exit(0);
}

for (const urlPath of imagePaths) {
  const decodedPath = decodeURIComponent(urlPath);
  const inputFile = path.resolve("public", `.${decodedPath}`);
  if (!fs.existsSync(inputFile)) {
    console.log(`skip-missing\t${urlPath}`);
    continue;
  }

  const outputBase = inputFile.replace(/\.png$/i, "");
  const webpFile = `${outputBase}.webp`;
  const avifFile = `${outputBase}.avif`;

  const image = sharp(inputFile);
  await image.clone().webp({ quality: 72, effort: 6 }).toFile(webpFile);
  await image.clone().avif({ quality: 50, effort: 6 }).toFile(avifFile);

  const inSize = fs.statSync(inputFile).size;
  const webpSize = fs.statSync(webpFile).size;
  const avifSize = fs.statSync(avifFile).size;

  console.log(`${urlPath}\t${inSize}\t->\t${path.basename(webpFile)} ${webpSize}\t|\t${path.basename(avifFile)} ${avifSize}`);
}
