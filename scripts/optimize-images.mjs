/**
 * One-shot JPEG optimization for Yale SOM photography in public/images.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const dir = path.resolve("public/images");

const MAX_WIDTH = { hero: 2400, heroXL: 2880, large: 1800 };

function maxWidthFor(file) {
  if (file.includes("yale-som-evans-hall-hero")) return MAX_WIDTH.heroXL;
  if (file.includes("evans-hall") || file.includes("students")) return MAX_WIDTH.hero;
  return MAX_WIDTH.large;
}

async function main() {
  const entries = await fs.readdir(dir);
  const jpgs = entries.filter((f) => /\.jpe?g$/i.test(f));

  for (const file of jpgs) {
    const inputPath = path.join(dir, file);
    const buf = await fs.readFile(inputPath);
    const meta = await sharp(buf).metadata();

    let pipeline = sharp(buf).rotate();
    const maxW = maxWidthFor(file);

    if (meta.width && meta.width > maxW) {
      pipeline = pipeline.resize({
        width: maxW,
        withoutEnlargement: true,
      });
    }

    const out = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    await fs.writeFile(inputPath, out);
    console.log(file, "→", `${Math.round(out.length / 1024)} KB`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
