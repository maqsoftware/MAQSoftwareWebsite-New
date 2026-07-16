import fs from 'node:fs';
const file = 'src/data/insights.ts';
let src = fs.readFileSync(file, 'utf8');
const updated = src.replace(/"imageUrl": "([^"]+)\.(svg|png)"/g, (m, path) => `"imageUrl": "${path}.webp"`);
const count = (updated.match(/\.webp"/g) || []).length;
fs.writeFileSync(file, updated);
console.log(`Updated ${count} imageUrl entries to .webp`);
