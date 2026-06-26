/**
 * Enrich MBB office data with exact addresses and coordinates.
 * 1. BCG — parse official office directory HTML
 * 2. Bain — fetch each office page JSON-LD address
 * 3. McKinsey — contact pages + Nominatim POI lookup
 * 4. Geocode all offices for precise lat/lng
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OFFICES_PATH = path.join(ROOT, "src/data/mbbOffices.json");
const CACHE_PATH = path.join(__dirname, "geocode-cache.json");

const USER_AGENT =
  "YaleSOMConsultingClub/1.0 (office-map-enrichment; academic project)";
const DELAY_MS = 1100;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function normalizeText(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function cityFromName(name) {
  return name
    .replace(/^[^:]+:\s*/, "")
    .replace(
      /^(Bay Area|Florida|Ohio|Western Canada|Connecticut|Rocky Mountains|Kansai|New Jersey)\s*[–-]\s*/i,
      ""
    )
    .replace(/\s*[–-]\s*.+$/, "")
    .trim();
}

function firmQueryLabel(firm) {
  if (firm === "McKinsey") return "McKinsey & Company";
  if (firm === "BCG") return "Boston Consulting Group";
  return "Bain & Company";
}

function formatBainAddress(raw) {
  return raw
    .replace(/([a-z])([A-Z])/g, "$1, $2")
    .replace(/(\d{5})([A-Za-z])/g, "$1, $2")
    .replace(/\s+/g, " ")
    .trim();
}

function displayNameToAddress(displayName, firm) {
  const parts = displayName.split(",").map((p) => p.trim());
  const label = firmQueryLabel(firm);
  if (parts[0]?.includes(label.split(" ")[0])) {
    return parts.slice(0, Math.min(4, parts.length - 2)).join(", ");
  }
  return parts.slice(0, Math.min(3, parts.length - 1)).join(", ");
}

function parseBcgHtml(html) {
  const offices = [];
  const chunks = html.split("<!-- OfficesPromo -->");
  for (const chunk of chunks) {
    const titleM = chunk.match(/Promo-title[\s\S]*?>([^<]+)<\/a>/);
    const addrM = chunk.match(
      /OfficeAddress__address">\s*([\s\S]*?)(?:<div class="OfficeAddress__phone">|<\/div>\s*\n\n<\/div>)/
    );
    if (!titleM || !addrM) continue;
    const name = titleM[1].trim();
    if (name.includes("Platinion") || name.includes("BCG Expand") || name.includes("BrightHouse")) continue;
    let addr = addrM[1]
      .replace(/<br\s*\/?>/gi, ", ")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    addr = addr.replace(/(, United States)+/g, ", United States");
    if (name && addr.length > 8) offices.push({ firm: "BCG", name, address: addr });
  }
  return offices;
}

function parseBainJsonLd(html) {
  const m = html.match(/"address"\s*:\s*"([^"]+)"/);
  if (!m) return "";
  return formatBainAddress(m[1].replace(/&#x2B;/g, "+"));
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function fetchAllBainOffices() {
  const indexHtml = fs.readFileSync(path.join(__dirname, "bain-offices.html"), "utf8");
  const slugs = [...new Set([...indexHtml.matchAll(/href="\/offices\/([^"/]+)\/"/gi)].map((m) => m[1]))];
  const offices = [];
  console.log(`Fetching ${slugs.length} Bain office pages...`);

  for (const slug of slugs) {
    try {
      const html = await fetchText(`https://www.bain.com/offices/${slug}/`);
      const address = parseBainJsonLd(html);
      const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      if (address) offices.push({ firm: "Bain", name, slug, address });
      await sleep(250);
    } catch (e) {
      console.warn(`  Bain /${slug}/: ${e.message}`);
    }
  }
  return offices;
}

function parseMcKinseyPage(html) {
  const offices = [];
  const items = html.split("GenericItem_mck-c-generic-item__h9uje");
  for (const item of items) {
    const descM = item.match(
      /mdc-c-description[\s\S]*?<div class="mck-u-links-inline[^"]*">([\s\S]*?)<\/div>/
    );
    const mapM = item.match(/href="(https:\/\/www\.google\.com\/maps[^"]+)"/);
    if (!descM) continue;

    const lines = descM[1]
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length < 2) continue;

    const name = lines[0];
    const address = lines.slice(1).join(", ");
    let lat = null;
    let lng = null;

    if (mapM) {
      const coords =
        mapM[1].match(/[?&]q=([-\d.]+),([-\d.]+)/) ||
        mapM[1].match(/!3d([-\d.]+)!4d([-\d.]+)/) ||
        mapM[1].match(/@([-\d.]+),([-\d.]+)/);
      if (coords) {
        lat = parseFloat(coords[1]);
        lng = parseFloat(coords[2]);
      }
    }

    offices.push({ firm: "McKinsey", name, address, lat, lng });
  }
  return offices;
}

async function fetchMcKinseyPages() {
  const urls = [
    "https://www.mckinsey.com/careers/internal-roles/locations",
    "https://www.mckinsey.com/middle-east/contact-us",
    "https://www.mckinsey.com/locations/south-america/careers-in-hispanoamerica",
    "https://www.mckinsey.com/industries/financial-services/how-we-help-clients/panorama/contact-us",
  ];
  const all = [];
  for (const url of urls) {
    try {
      const html = await fetchText(url);
      all.push(...parseMcKinseyPage(html));
      await sleep(400);
    } catch (e) {
      console.warn(`McKinsey ${url}: ${e.message}`);
    }
  }
  return all;
}

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
    new URLSearchParams({ q: query, format: "json", limit: "1", addressdetails: "1" });

  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = await res.json();
  await sleep(DELAY_MS);

  const result = data[0]
    ? {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        displayName: data[0].display_name,
        type: data[0].type,
        class: data[0].class,
      }
    : null;

  cache[query] = result;
  saveCache(cache);
  return result;
}

function matchScraped(office, scraped) {
  const officeCity = normalizeText(cityFromName(office.name));
  const officeName = normalizeText(office.name);

  let best = null;
  let bestScore = 0;

  for (const s of scraped) {
    if (s.firm !== office.firm) continue;
    const sName = normalizeText(s.name);
    const sCity = normalizeText(cityFromName(s.name));

    let score = 0;
    if (sName === officeName) score += 10;
    if (sCity === officeCity) score += 8;
    if (sName.includes(officeCity) || officeName.includes(sCity)) score += 5;
    if (officeCity && sCity && (sCity.includes(officeCity) || officeCity.includes(sCity))) score += 4;

    if (score > bestScore) {
      bestScore = score;
      best = s;
    }
  }

  return bestScore >= 4 ? best : null;
}

function hasVerifiedAddress(addr) {
  return addr && addr.length > 8 && addr.includes(",");
}

async function resolveOffice(office, scraped) {
  const match = matchScraped(office, scraped);
  let address = office.address;
  let lat = office.lat;
  let lng = office.lng;
  let source = "existing";

  if (match?.address && !hasVerifiedAddress(address)) {
    address = match.address;
    source = "scrape";
  }

  if (match?.lat && match?.lng) {
    lat = match.lat;
    lng = match.lng;
    source = "scrape-maps";
  }

  const label = firmQueryLabel(office.firm);
  const city = cityFromName(office.name);

  if (hasVerifiedAddress(address) && (!match?.lat || !match?.lng)) {
    const queries = [
      `${label}, ${address}`,
      address,
    ];
    for (const q of queries) {
      const geo = await geocode(q);
      if (geo && (geo.type === "office" || geo.class === "office" || geo.class === "building" || geo.class === "amenity")) {
        lat = geo.lat;
        lng = geo.lng;
        source = "geocode-address";
        break;
      }
      if (geo && !lat) {
        lat = geo.lat;
        lng = geo.lng;
        source = "geocode-address-fallback";
      }
    }
  } else if (!hasVerifiedAddress(address)) {
    const queries = [
      `${label}, ${city}, ${office.country}`,
      `${label}, ${city}`,
    ];
    for (const q of queries) {
      const geo = await geocode(q);
      if (!geo) continue;
      lat = geo.lat;
      lng = geo.lng;
      address = displayNameToAddress(geo.displayName, office.firm);
      source = "geocode-poi";
      if (geo.type === "office" || geo.class === "office" || geo.displayName.includes(label.split(" ")[0])) break;
    }
  }

  return {
    ...office,
    address: address || "",
    lat: Math.round(lat * 1e6) / 1e6,
    lng: Math.round(lng * 1e6) / 1e6,
    _source: source,
  };
}

async function main() {
  const offices = JSON.parse(fs.readFileSync(OFFICES_PATH, "utf8"));
  console.log(`Loaded ${offices.length} offices\n`);

  const bcgHtml = fs.readFileSync(path.join(__dirname, "bcg-offices.html"), "utf8");
  const bcgScraped = parseBcgHtml(bcgHtml);
  console.log(`BCG directory: ${bcgScraped.length} offices`);

  const mckScraped = await fetchMcKinseyPages();
  console.log(`McKinsey pages: ${mckScraped.length} offices`);

  const bainScraped = await fetchAllBainOffices();
  console.log(`Bain pages: ${bainScraped.length} offices\n`);

  const scraped = [...bcgScraped, ...mckScraped, ...bainScraped];
  const enriched = [];
  const failed = [];

  for (let i = 0; i < offices.length; i++) {
    const office = offices[i];
    process.stdout.write(`[${i + 1}/${offices.length}] ${office.firm} ${office.name}... `);
    try {
      const result = await resolveOffice(office, scraped);
      enriched.push(result);
      const ok = hasVerifiedAddress(result.address);
      console.log(ok ? `✓ (${result._source})` : `~ partial (${result._source})`);
      if (!ok) failed.push(`${office.firm} | ${office.name}`);
    } catch (e) {
      console.log(`✗ ${e.message}`);
      enriched.push(office);
      failed.push(`${office.firm} | ${office.name}`);
    }
  }

  const output = enriched.map(({ _source, ...o }) => o);
  fs.writeFileSync(OFFICES_PATH, JSON.stringify(output, null, 2) + "\n");

  const withAddr = output.filter((o) => hasVerifiedAddress(o.address)).length;
  console.log(`\n=== Complete ===`);
  console.log(`Verified addresses: ${withAddr}/${output.length}`);
  if (failed.length) {
    console.log(`\nPartial/missing (${failed.length}):`);
    failed.forEach((f) => console.log(`  ${f}`));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
