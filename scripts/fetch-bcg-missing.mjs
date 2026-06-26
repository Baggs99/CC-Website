import fs from "fs";

const slugs = ["dublin", "kyiv", "moscow", "guangzhou", "vancouver"];
const USER_AGENT = "Mozilla/5.0";

for (const slug of slugs) {
  try {
    const res = await fetch(`https://www.bcg.com/offices/${slug}/default`, {
      headers: { "User-Agent": USER_AGENT },
    });
    const html = await res.text();
    const title = html.match(/<h1[^>]*>([^<]+)/i)?.[1];
    const addr = html.match(/OfficeAddress__address">\s*([\s\S]*?)(?:<div class="OfficeAddress__phone">|<\/div>)/i);
    let address = "";
    if (addr) {
      address = addr[1]
        .replace(/<br\s*\/?>/gi, ", ")
        .replace(/<[^>]+>/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }
    console.log(slug, res.status, title || "?", address || "NO ADDR");
  } catch (e) {
    console.log(slug, "ERR", e.message);
  }
}
