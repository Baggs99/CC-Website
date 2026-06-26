import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OFFICES_PATH = path.join(__dirname, "../src/data/mbbOffices.json");
const CACHE_PATH = path.join(__dirname, "geocode-cache.json");
const USER_AGENT = "YaleSOMConsultingClub/1.0";
const DELAY_MS = 1100;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function firmLabel(firm) {
  if (firm === "McKinsey") return "McKinsey & Company";
  if (firm === "BCG") return "Boston Consulting Group";
  return "Bain & Company";
}

async function geocode(query, cache, force = false) {
  if (!force && cache[query]) return cache[query];

  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({ q: query, format: "json", limit: "1" });
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = await res.json();
  await sleep(DELAY_MS);

  const result = data[0] ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) } : null;
  cache[query] = result;
  return result;
}

async function main() {
  const offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  const cache = fs.existsSync(CACHE_PATH) ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) : {};

  let updated = 0;
  for (const office of offices) {
    if (!office.address || !office.address.includes(",")) continue;

    const queries = [
      `${firmLabel(office.firm)}, ${office.address}`,
      office.address,
      `${firmLabel(office.firm)}, ${office.name}, ${office.country}`,
    ];

    let geo = null;
    for (const q of queries) {
      delete cache[q];
      geo = await geocode(q, cache, true);
      if (geo) break;
    }

    if (geo) {
      office.lat = Math.round(geo.lat * 1e6) / 1e6;
      office.lng = Math.round(geo.lng * 1e6) / 1e6;
      updated++;
      console.log(`✓ ${office.firm} ${office.name}`);
    } else {
      console.warn(`✗ ${office.firm} ${office.name}`);
    }
  }

  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
  fs.writeFileSync(OFFICES_PATH, JSON.stringify(offices, null, 2) + "\n");
  console.log(`\nRe-geocoded ${updated}/${offices.length} offices`);
}

main().catch(console.error);
