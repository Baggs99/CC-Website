/**
 * Patch remaining offices with manually verified addresses and geocode.
 * Also removes offices that no longer exist (BCG Vancouver, BCG Guangzhou).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OFFICES_PATH = path.join(__dirname, "../src/data/mbbOffices.json");
const CACHE_PATH = path.join(__dirname, "geocode-cache.json");
const USER_AGENT = "YaleSOMConsultingClub/1.0";
const DELAY_MS = 1100;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const PATCHES = [
  // McKinsey
  { firm: "McKinsey", name: "San Jose", address: "3075 Hansen Way, Palo Alto, CA 94304, USA" },
  { firm: "McKinsey", name: "New Jersey – Newark", address: "110 Edison Place, Newark, NJ 07102, USA" },
  { firm: "McKinsey", name: "Connecticut – Darien", address: "34 Old Kings Highway South, Suite 400, Darien, CT 06820, USA" },
  { firm: "McKinsey", name: "Bay Area – Silicon Valley", address: "3075 Hansen Way, Palo Alto, CA 94304, USA" },
  { firm: "McKinsey", name: "Stuttgart", address: "Dorotheenstraße 6, 70173 Stuttgart, Germany" },
  { firm: "McKinsey", name: "Athens", address: "6 Othonos Street, 105 57 Athens, Greece" },
  { firm: "McKinsey", name: "Herzliya", address: "11 Hamanofim, Herzliya 4672562, Israel" },
  { firm: "McKinsey", name: "Kolkata", address: "69 Park Street, 11th Floor, Arcadia Centrum, Kolkata 700016, India" },
  {
    firm: "McKinsey",
    name: "Ho Chi Minh City",
    address: "Saigon Centre Tower 2, Level 21, 67 Le Loi Street, District 1, Ho Chi Minh City, Vietnam",
  },
  {
    firm: "McKinsey",
    name: "Monterrey",
    address: "Av. Ricardo Margain Zozaya 444, Torre Norte, 4th Floor, San Pedro Garza García, NL 66265, Mexico",
  },
  {
    firm: "McKinsey",
    name: "Guatemala City",
    address: "12 Calle 2-25, Zona 10, Edificio Corporativo Avia, Torre 2, Suite 1701, Guatemala City 01010, Guatemala",
  },
  { firm: "McKinsey", name: "Raleigh", address: "2200 Atlantic Avenue, Raleigh Iron Works, Raleigh, NC 27604, USA" },
  {
    firm: "McKinsey",
    name: "Quito",
    address: "Centro Corporativo Ekopark, Av. Libertador Simón Bolívar, Quito 170124, Ecuador",
  },
  { firm: "McKinsey", name: "Ohio – Columbus", address: "875 N High Street, Columbus, OH 43215, USA" },
  {
    firm: "McKinsey",
    name: "Santo Domingo",
    address: "95 Winston Churchill Avenue, Blue Mall Tower, Floor 21, Santo Domingo 10148, Dominican Republic",
  },
  {
    firm: "McKinsey",
    name: "Belo Horizonte",
    address: "Alameda Oscar Niemeyer, 132, Concordia Tower, 1st Floor, Nova Lima, MG 34006-049, Brazil",
  },
  { firm: "McKinsey", name: "Nuremberg", address: "Gleissbuehlstraße 2, 90402 Nuremberg, Germany" },
  {
    firm: "McKinsey",
    name: "Montevideo",
    address: "Luis Bonavita 1294, WTC FZ, Torre I, Suite 704, Montevideo 11300, Uruguay",
  },
  {
    firm: "McKinsey",
    name: "Colombo",
    address: "One Galle Face Tower, Level 24, Unit 2406 & 2407, 1A Center Road, Galle Face, Colombo 02, Sri Lanka",
  },
  // BCG
  {
    firm: "BCG",
    name: "Dublin",
    address: "International House, 3 Harbourmaster Place, IFSC, Dublin 1, D01 K8F1, Ireland",
  },
  {
    firm: "BCG",
    name: "Kyiv",
    address: "8/4 Marii Kapnist Street, Office 806, Kyiv 02000, Ukraine",
  },
  {
    firm: "BCG",
    name: "Moscow",
    address: "6 Gasheka Street, Ducat Place III, Moscow 125047, Russia",
  },
];

const REMOVE = [
  { firm: "BCG", name: "Vancouver" },
  { firm: "BCG", name: "Guangzhou" },
];

function loadCache() {
  if (fs.existsSync(CACHE_PATH)) return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  return {};
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

async function geocode(query) {
  const cache = loadCache();
  if (query in cache) return cache[query];

  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({ q: query, format: "json", limit: "1" });
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = await res.json();
  await sleep(DELAY_MS);

  const result = data[0] ? { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) } : null;
  cache[query] = result;
  saveCache(cache);
  return result;
}

async function main() {
  let offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  const before = offices.length;

  offices = offices.filter(
    (o) => !REMOVE.some((r) => r.firm === o.firm && r.name === o.name)
  );
  console.log(`Removed ${before - offices.length} defunct offices`);

  for (const patch of PATCHES) {
    const office = offices.find((o) => o.firm === patch.firm && o.name === patch.name);
    if (!office) {
      console.warn(`Not found: ${patch.firm} ${patch.name}`);
      continue;
    }

    office.address = patch.address;
    const label =
      patch.firm === "McKinsey"
        ? "McKinsey & Company"
        : patch.firm === "BCG"
          ? "Boston Consulting Group"
          : "Bain & Company";

    const geo =
      (await geocode(`${label}, ${patch.address}`)) || (await geocode(patch.address));
    if (geo) {
      office.lat = Math.round(geo.lat * 1e6) / 1e6;
      office.lng = Math.round(geo.lng * 1e6) / 1e6;
      console.log(`✓ ${patch.firm} ${patch.name}`);
    } else {
      console.warn(`✗ geocode failed: ${patch.firm} ${patch.name}`);
    }
  }

  fs.writeFileSync(OFFICES_PATH, JSON.stringify(offices, null, 2) + "\n");

  const withAddr = offices.filter((o) => o.address && o.address.includes(",")).length;
  console.log(`\nFinal: ${withAddr}/${offices.length} with verified addresses`);
}

main().catch(console.error);
