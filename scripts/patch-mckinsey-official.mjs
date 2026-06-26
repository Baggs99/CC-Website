/**
 * Patch McKinsey offices with addresses from official mckinsey.com contact pages.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OFFICES_PATH = path.join(__dirname, "../src/data/mbbOffices.json");

/** @type {Record<string, string>} name → official address */
const MCKINSEY_OFFICIAL = {
  // Middle East
  Cairo: "5A by the Waterway, Building A3 First Floor, New Cairo, Egypt",
  Doha: "Office 1203, 12th Floor, Tower 2, The Gate, Maysaloun St., West Bay, Doha, Qatar",
  Dubai: "Legatum Plaza, Gate Precinct 6 Level 5, DIFC, Dubai, UAE",
  Karachi: "Ocean Tower, 24th Floor, G-3, Khyaban-e-Iqbal, Block 9 Clifton, Karachi 75600, Pakistan",
  "Kuwait City": "Al Shaya Building, Level 14, Al Soor Street, Al Mirqab, P.O. Box 181, Safat 13002, Kuwait",
  Manama: "Office 1069, Building 15, Road 3801, Block 338, Manama, Bahrain",
  Riyadh: "Kingdom Tower, 54th Floor, P.O. Box 54517, Riyadh 11524, Saudi Arabia",

  // Africa
  Johannesburg: "The MARC Tower 2, 129 Rivonia Road, Sandhurst Ext 3, Sandton, 2196, South Africa",
  Luanda: "Telassa Supermarket, Rua Dos Mártires de Qifica, Luanda Talatona, Angola",
  Nairobi: "Westlands Business Park, Block B, 3rd Floor, Nairobi, Kenya",

  // Central & South America
  "Mexico City": "Pedregal 24, Torre Virreyes, 23rd Floor, Molino del Rey 11040, Mexico City, Mexico",
  Monterrey: "Av. Ricardo Margain Zozaya 444, Torre Norte, 4th Floor, San Pedro Garza García, NL 66265, Mexico",
  "Guatemala City": "12 Calle 2-25, Zona 10, Edificio Corporativo Avia, Torre 2, Suite 1701, Guatemala City 01010, Guatemala",
  Bogotá: "Carrera 7 No 71-21, Torre B, Suite 1606, Bogotá, Colombia",
  Quito: "Centro Corporativo Ekopark, Av. Libertador Simón Bolívar, Quito 170124, Ecuador",
  Lima: "Las Begonias 415, 16th Floor, Suite 1601 A, Torre Begonias, Lima 27, Peru",
  Santiago: "Av. Apoquindo 2929, Edificio Apoquindo 2929, 20th Floor, Las Condes, Santiago, Chile",
  Montevideo: "Luis Bonavita 1294, WTC FZ, Torre I, Suite 704, Montevideo 11300, Uruguay",
  "Panama City": "Avenida Balboa PH Davivienda Tower, 21st Floor, Panamá, Panama",
  "Santo Domingo": "95 Winston Churchill Ave, Blue Mall Tower, Floor 21, Santo Domingo 10148, Dominican Republic",
  "Buenos Aires": "Av. Leandro N. Alem 855, Alem Plaza, 24th Floor, Buenos Aires, Argentina",
  Medellín: "Cra 42 #3 sur-81, Edificio Milla de Oro, Torre 1, Suite 404, Medellín, Colombia",

  // Greater China
  Beijing: "28/F South Tower, Beijing Kerry Centre, 1 Guanghua Road, Chaoyang District, Beijing 100020, China",
  Chengdu: "Unit 4502-03, 45F, Tower 1, Chengdu IFS, No. 1 Section 3 Hongxing Road, Jinjiang District, Chengdu, China",
  "Hong Kong": "33/F, Alexandra House, 18 Chater Road, Central, Hong Kong",
  Shanghai: "21F, 168 Hubin Road, Shanghai 200020, China",
  Shenzhen: "Unit 02B, Floor 10, Tower 2, Qianhai Kerry Centre, Qianhai Avenue, Nanshan District, Shenzhen 518052, China",
  Taipei: "47/F, 7 Xin-Yi Road Section 5, Taipei 101 Tower, Taipei 110, Taiwan",

  // India
  "Bengaluru – Brigade Center": "Nalapad Brigade Center, Whitefield Rd, Mahadevapura, ITPL Road, Bengaluru, Karnataka 560048, India",
  "Chennai – Brigade WTC": "World Trade Center, 5/142, Tower B, 17th-19th Floor, Rajiv Gandhi Salai, OMR, Perungudi, Chennai 600096, India",
  "Gurugram/Delhi": "16th Floor, Downtown Tower 4, DLF 3 (Ambience Island), Gurugram 122002, Haryana, India",
  "Gurugram/Delhi – Vatika": "3rd Floor Block III, Vatika Business Park, Sector 49, Sohna Road, Gurugram 122018, India",
  Kolkata: "69 Park Street, P.S. Arcadia Centrum, 11th Floor, Kolkata, WB 700016, India",
  Mumbai: "Ground Floor, North Avenue 1, Maker Maxity, Bandra Kurla Complex Rd, BKC, Bandra East, Mumbai 400051, India",

  // Asia Pacific
  Jakarta: "Wisma GKBI, 40th Floor, Jl. Jend. Sudirman 28, Jakarta 10210, Indonesia",
  "Kansai – Osaka": "Grand Front Osaka, Tower B, 3-1 Ofuka-cho, Kita-ku, Osaka 530-0011, Japan",
  Tokyo: "32F Ark Hills Sengokuyama Mori Tower, 9-10 Roppongi 1-chome, Minato-ku, Tokyo 106-0032, Japan",
  Almaty: "Esentai Tower, 15th Floor, 77/7 Al-Farabi Avenue, Almaty 050000, Kazakhstan",
  Astana: "16 Dostyk Street, Yessil District, Astana 010016, Kazakhstan",
  "Kuala Lumpur": "Level 27, Menara 3 Petronas, Persiaran KLCC, 50088 Kuala Lumpur, Malaysia",
  Auckland: "Level 13, 188 Quay Street, Auckland 1010, New Zealand",
  Manila: "7/F Zuellig Building, Makati Avenue Corner Paseo de Roxas, Makati City 1225, Philippines",
  Singapore: "One Raffles Quay, Level 24, South Tower, Singapore 048583",
  Seoul: "54F Three IFC, 10 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul 07326, South Korea",
  Colombo: "One Galle Face Tower, Level 24, Unit 2406 & 2407, 1A Center Road, Galle Face, Colombo 02, Sri Lanka",
  Bangkok: "M. Thai Tower, 24th Floor, All Seasons Place, 87 Wireless Road, Bangkok 10330, Thailand",
  Hanoi: "Tower 1, 24th Floor, Capital Place, 29 Lieu Giai Street, Ngoc Ha Ward, Hanoi, Vietnam",
  "Ho Chi Minh City": "Saigon Centre Tower 2, Level 21, 67 Le Loi Street, District 1, Ho Chi Minh City, Vietnam",
};

const NEW_OFFICES = [
  {
    firm: "McKinsey",
    name: "Amman",
    country: "Jordan",
    region: "Middle East",
    address: "2nd Floor, Prestige Towers Building, Zahran Street, Amman 11831, Jordan",
  },
  {
    firm: "McKinsey",
    name: "Gaborone",
    country: "Botswana",
    region: "Africa",
    address: "Plot 54360, iTowers Main Tower, Level 4 & 7, CBD, Gaborone, Botswana",
  },
];

async function photon(query) {
  const url = "https://photon.komoot.io/api/?" + new URLSearchParams({ q: query, limit: "1" });
  const res = await fetch(url);
  const data = await res.json();
  const f = data.features?.[0];
  if (!f) return null;
  const [lng, lat] = f.geometry.coordinates;
  return { lat: Math.round(lat * 1e6) / 1e6, lng: Math.round(lng * 1e6) / 1e6 };
}

async function geocodeOffice(firm, name, address) {
  const label = firm === "McKinsey" ? "McKinsey & Company" : firm;
  for (const q of [`${label}, ${address}`, address]) {
    const geo = await photon(q);
    if (geo) return geo;
    await new Promise((r) => setTimeout(r, 250));
  }
  return null;
}

async function main() {
  const offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  let updated = 0;

  for (const office of offices) {
    if (office.firm !== "McKinsey") continue;
    const official = MCKINSEY_OFFICIAL[office.name];
    if (!official) continue;

    office.address = official;
    const geo = await geocodeOffice(office.firm, office.name, official);
    if (geo) {
      office.lat = geo.lat;
      office.lng = geo.lng;
    }
    updated++;
    console.log(`✓ ${office.name}`);
  }

  for (const entry of NEW_OFFICES) {
    if (offices.some((o) => o.firm === entry.firm && o.name === entry.name)) continue;
    const geo = await geocodeOffice(entry.firm, entry.name, entry.address);
    offices.push({
      ...entry,
      lat: geo?.lat ?? 0,
      lng: geo?.lng ?? 0,
    });
    console.log(`+ ${entry.name}`);
    updated++;
  }

  offices.sort((a, b) => {
    if (a.firm !== b.firm) return a.firm.localeCompare(b.firm);
    return a.name.localeCompare(b.name);
  });

  fs.writeFileSync(OFFICES_PATH, JSON.stringify(offices, null, 2) + "\n");
  console.log(`\nUpdated ${updated} McKinsey offices from official contact pages`);
  console.log(`Total offices: ${offices.length}`);
}

main().catch(console.error);
