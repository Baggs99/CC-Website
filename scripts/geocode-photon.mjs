import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OFFICES_PATH = path.join(__dirname, "../src/data/mbbOffices.json");

async function photon(query) {
  const url = "https://photon.komoot.io/api/?" + new URLSearchParams({ q: query, limit: "1" });
  const res = await fetch(url);
  const data = await res.json();
  const f = data.features?.[0];
  if (!f) return null;
  const [lng, lat] = f.geometry.coordinates;
  return { lat, lng };
}

async function main() {
  const offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  let updated = 0;

  const needsFix = (office) => {
    if (!office.address?.includes(",")) return false;
    const latDec = String(office.lat).split(".")[1]?.length ?? 0;
    const lngDec = String(office.lng).split(".")[1]?.length ?? 0;
    return latDec <= 3 || lngDec <= 3;
  };

  for (const office of offices) {
    if (!needsFix(office)) continue;

    const queries = [office.address, `${office.firm} ${office.name} ${office.country}`];
    let geo = null;
    for (const q of queries) {
      geo = await photon(q);
      if (geo) break;
      await new Promise((r) => setTimeout(r, 200));
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

  fs.writeFileSync(OFFICES_PATH, JSON.stringify(offices, null, 2) + "\n");
  console.log(`\nPhoton geocoded ${updated} imprecise offices`);
}

main().catch(console.error);
