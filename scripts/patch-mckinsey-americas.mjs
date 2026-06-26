/**
 * Patch McKinsey US/Canada/Mexico offices from official contact page screenshots.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OFFICES_PATH = path.join(__dirname, "../src/data/mbbOffices.json");

const PATCHES = {
  // Canada
  Montreal: "1250 Boulevard René-Lévesque Ouest, Bureau 4430, Montréal, QC H3B 4W8, Canada",
  Toronto: "110 Charles Street West, Toronto, ON M5S 1K9, Canada",
  "Western Canada – Calgary":
    "Royal Bank Building, 335 8th Avenue SW, Suite 2210, Calgary, AB T2P 1C9, Canada",

  // Mexico
  "Mexico City": "Pedregal 24, Torre Virreyes, 23rd Floor, Molino del Rey 11040, Mexico City, Mexico",
  Monterrey:
    "Av. Ricardo Margain Zozaya 444, Torre Norte Piso 4, Col. Valle del Campestre, San Pedro Garza García, NL 66265, Mexico",

  // United States
  Atlanta: "725 Ponce de Leon Ave, Suite 700, Atlanta, GA 30306, USA",
  Austin: "1221 S. Congress Ave., Bldg 1, Suite 200, Austin, TX 78704, USA",
  "Bay Area – San Francisco": "555 California Street, Suite 4700, San Francisco, CA 94104, USA",
  "Bay Area – Silicon Valley": "889 Winslow St, Suite 300, Redwood City, CA 94063, USA",
  Boston: "115 Federal Street, Winthrop Center, Floor 20, Boston, MA 02110, USA",
  Charlotte: "300 South Tryon Street, Suite 1100, Charlotte, NC 28202, USA",
  Chicago: "300 East Randolph Street, Suite 3100, Chicago, IL 60601, USA",
  "Connecticut – Darien": "34 Old Kings Highway South, Darien, CT 06820, USA",
  Dallas: "McKinney & Olive, 2021 McKinney Ave, Suite 1800, Dallas, TX 75201, USA",
  Detroit: "500 Woodward Avenue, Suite 2850, Detroit, MI 48226, USA",
  "Florida – Miami": "78 SW 7th St, Suite 1000, Miami, FL 33130, USA",
  Houston: "609 Main Street, Suite 2300, Houston, TX 77002, USA",
  Minneapolis: "800 LaSalle Avenue, Suite 2350, Minneapolis, MN 55402, USA",
  Miramar: "3350 SW 148th Avenue, Suite 403, Miramar, FL 33027, USA",
  "New Jersey – Newark": "110 Edison Place, Suite 400, Newark, NJ 07102, USA",
  "New York – 3WTC": "3 World Trade Center, 175 Greenwich Street, New York, NY 10007, USA",
  "Ohio – Cleveland": "127 Public Sq, Suite 5250, Cleveland, OH 44114, USA",
  "Ohio – Columbus": "Industrious The Sutton, 875 N High Street, Columbus, OH 43215, USA",
  Philadelphia: "The Cira Centre, 2929 Arch Street, Suite 1400, Philadelphia, PA 19104, USA",
  Phoenix: "222 S Mill Ave, Tempe Gateway, Ste 600 and 700, Tempe, AZ 85281, USA",
  Pittsburgh: "One PPG Place, Suite 2350, Pittsburgh, PA 15222, USA",
  Raleigh: "1101 E Whitaker Mill Rd, Suite 280, Raleigh, NC 27604, USA",
  "Rocky Mountains – Denver": "1800 Larimer St, Suite 2200, Denver, CO 80202, USA",
  Seattle: "1420 Fifth Avenue, Suite 4300, Seattle, WA 98101, USA",
  "St. Louis": "7733 Forsyth Blvd, Suite 825, Saint Louis, MO 63105, USA",
  Tampa: "140 Fountain Parkway, Floor 3 & Floor 8, St. Petersburg, FL 33716, USA",
  "Washington DC": "1200 Nineteenth Street NW, Suite 1000, Washington, DC 20036, USA",
};

const REMOVE = ["San Jose"];

async function photon(query) {
  const url = "https://photon.komoot.io/api/?" + new URLSearchParams({ q: query, limit: "1" });
  const res = await fetch(url);
  const data = await res.json();
  const f = data.features?.[0];
  if (!f) return null;
  const [lng, lat] = f.geometry.coordinates;
  return { lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6 };
}

async function geocode(address) {
  for (const q of [`McKinsey & Company, ${address}`, address]) {
    const geo = await photon(q);
    if (geo) return geo;
    await new Promise((r) => setTimeout(r, 250));
  }
  return null;
}

async function main() {
  let offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  const before = offices.length;

  offices = offices.filter(
    (o) => !(o.firm === "McKinsey" && REMOVE.includes(o.name))
  );
  if (before !== offices.length) console.log(`Removed: ${REMOVE.join(", ")}`);

  let updated = 0;
  for (const office of offices) {
    if (office.firm !== "McKinsey") continue;
    const address = PATCHES[office.name];
    if (!address) continue;

    office.address = address;
    const geo = await geocode(address);
    if (geo) {
      office.lat = geo.lat;
      office.lng = geo.lng;
    }
    updated++;
    console.log(`✓ ${office.name}`);
  }

  fs.writeFileSync(OFFICES_PATH, JSON.stringify(offices, null, 2) + "\n");
  console.log(`\nUpdated ${updated} offices. Total: ${offices.length}`);
}

main().catch(console.error);
