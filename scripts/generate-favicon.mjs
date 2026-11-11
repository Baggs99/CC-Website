/**
 * Build favicons and the Open Graph image from club assets.
 * Run: node scripts/generate-favicon.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const crest = path.join(root, "public", "ycc_owlbook.png");
const hero = path.join(root, "public", "images", "yale-som-evans-hall-hero.jpg");
const publicDir = path.join(root, "public");

function pngToIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  const payloads = [];
  for (const { size, buf } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    payloads.push(buf);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...payloads]);
}

async function writePng(srcImg, size, dest, pngOpts) {
  const buf = await srcImg
    .clone()
    .resize(size, size, { fit: "cover", position: "centre" })
    .png(pngOpts)
    .toBuffer();
  await fs.writeFile(dest, buf);
  return buf;
}

async function main() {
  const buf = await fs.readFile(crest);
  const srcImg = sharp(buf).rotate();
  const pngOpts = { compressionLevel: 9 };

  const out32 = await writePng(
    srcImg,
    32,
    path.join(publicDir, "favicon-32.png"),
    pngOpts,
  );
  const out48 = await writePng(
    srcImg,
    48,
    path.join(publicDir, "favicon-48.png"),
    pngOpts,
  );
  await writePng(
    srcImg,
    180,
    path.join(publicDir, "apple-touch-icon.png"),
    pngOpts,
  );

  const ico = pngToIco([
    { size: 32, buf: out32 },
    { size: 48, buf: out48 },
  ]);
  await fs.writeFile(path.join(publicDir, "favicon.ico"), ico);

  const og = await sharp(hero)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await fs.writeFile(path.join(publicDir, "og-image.jpg"), og);

  const kb = (bytes) => `${Math.round(bytes.length / 1024)} KB`;
  console.log("favicon.ico", "→", kb(ico));
  console.log("favicon-32.png", "→", kb(out32));
  console.log("favicon-48.png", "→", kb(out48));
  console.log("og-image.jpg", "→", kb(og));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
