const USER_AGENT = "YaleSOMConsultingClub/1.0";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function geocode(q) {
  const url =
    "https://nominatim.openstreetmap.org/search?" +
    new URLSearchParams({ q, format: "json", limit: "1" });
  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  const data = await res.json();
  return data[0] ? { lat: data[0].lat, lon: data[0].lon, name: data[0].display_name } : null;
}

const queries = [
  "McKinsey & Company, Boston",
  "McKinsey & Company, Paris",
  "McKinsey & Company, Tokyo",
  "Boston Consulting Group, London",
  "Boston Consulting Group, Munich",
  "Bain & Company, Minneapolis",
];

for (const q of queries) {
  const r = await geocode(q);
  console.log(q, "->", r ? `${r.lat},${r.lon} | ${r.name.slice(0, 70)}` : "NO");
  await sleep(1100);
}
