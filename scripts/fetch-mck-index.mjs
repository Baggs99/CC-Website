import fs from "fs";

const res = await fetch("https://www.mckinsey.com/locations", {
  headers: { "User-Agent": "Mozilla/5.0" },
});
const t = await res.text();
fs.writeFileSync("scripts/mck-index.html", t);
const links = [...t.matchAll(/href="(\/locations\/[^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(links)];
console.log("location links", unique.length);
unique.forEach((l) => console.log(l));
