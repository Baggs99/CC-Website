/**
 * Build small PNG favicons from the club crest.
 * Run: node scripts/generate-favicon.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const src = path.join(root, "public", "ycc_owlbook.png");

async function main() {
  const buf = await fs.readFile(src);
  const srcImg = sharp(buf).rotate();
  const pngOpts = { compressionLevel: 9 };

  const out32 = await srcImg
    .clone()
    .resize(32, 32, { fit: "cover", position: "centre" })
    .png(pngOpts)
    .toBuffer();

  const out180 = await srcImg
    .clone()
    .resize(180, 180, { fit: "cover", position: "centre" })
    .png(pngOpts)
    .toBuffer();

  const p32 = path.join(root, "public", "favicon-32.png");
  const p180 = path.join(root, "public", "apple-touch-icon.png");

  await fs.writeFile(p32, out32);
  await fs.writeFile(p180, out180);

  console.log("favicon-32.png", "→", `${Math.round(out32.length / 1024)} KB`);
  console.log("apple-touch-icon.png", "→", `${Math.round(out180.length / 1024)} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
