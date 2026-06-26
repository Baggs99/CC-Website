import { useMemo, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  MBB_FIRM_COLORS,
  MBB_REGIONS,
  mbbOffices,
  type MbbFirm,
  type MbbOffice,
  type MbbRegion,
} from "@/data/mbbOffices";
import { cn } from "@/lib/utils";

import "leaflet/dist/leaflet.css";

type FirmFilter = MbbFirm | "All";
type RegionFilter = MbbRegion | "All";

function hasVerifiedAddress(address: string): boolean {
  return address.length > 5 && address.includes(",");
}

function makeIcon(color: string, verified: boolean) {
  const opacity = verified ? "0.88" : "0.55";
  return L.divIcon({
    className: "",
    html: `<div style="width:8px;height:8px;background:${color};border-radius:50%;border:1.5px solid rgba(255,255,255,0.9);opacity:${opacity};box-shadow:0 1px 3px rgba(0,0,0,0.22)"></div>`,
    iconSize: [8, 8],
    iconAnchor: [4, 4],
    popupAnchor: [0, -6],
  });
}

const FIRMS: FirmFilter[] = ["All", "McKinsey", "BCG", "Bain"];

const REGION_LABELS: Record<MbbRegion, string> = {
  "North America": "North America",
  "Central & South America": "C&S America",
  Europe: "Europe",
  "Middle East": "Middle East",
  Africa: "Africa",
  "Asia Pacific": "Asia Pacific",
};

function OfficePopup({ office }: { office: MbbOffice }) {
  const color = MBB_FIRM_COLORS[office.firm];
  const verified = hasVerifiedAddress(office.address);

  return (
    <div className="min-w-[180px] text-xs leading-relaxed">
      <p
        className="text-[10px] font-semibold uppercase tracking-wider"
        style={{ color }}
      >
        {office.firm}
      </p>
      <p className="font-serif text-sm font-medium text-navy-900">
        {office.name}
        {verified ? (
          <span className="ml-1.5 inline-block rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-semibold text-green-800">
            verified
          </span>
        ) : null}
      </p>
      <p className="text-[11px] text-navy-600/80">
        {office.country} · {office.region}
      </p>
      {verified ? (
        <p className="mt-2 border-t border-navy-900/10 pt-2 text-[11px] text-navy-700">
          {office.address}
        </p>
      ) : (
        <p className="mt-2 border-t border-navy-900/10 pt-2 text-[11px] italic text-navy-500">
          Address not yet verified
        </p>
      )}
    </div>
  );
}

export function MbbOfficeMap() {
  const [firm, setFirm] = useState<FirmFilter>("All");
  const [region, setRegion] = useState<RegionFilter>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return mbbOffices.filter((office) => {
      if (firm !== "All" && office.firm !== firm) return false;
      if (region !== "All" && office.region !== region) return false;
      if (!q) return true;
      return (
        office.name.toLowerCase().includes(q) ||
        office.country.toLowerCase().includes(q) ||
        office.address.toLowerCase().includes(q)
      );
    });
  }, [firm, region, search]);

  const stats = useMemo(() => {
    const countries = new Set(filtered.map((o) => o.country));
    const verified = filtered.filter((o) =>
      hasVerifiedAddress(o.address),
    ).length;
    return { count: filtered.length, verified, countries: countries.size };
  }, [filtered]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {FIRMS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFirm(f)}
            className={cn(
              "rounded-md border px-4 py-1.5 text-xs font-medium transition-colors",
              firm === f
                ? f === "All"
                  ? "border-navy-900 bg-navy-900 text-ivory-50"
                  : f === "McKinsey"
                    ? "border-[#1B6EC2] bg-[#1B6EC2] text-white"
                    : f === "BCG"
                      ? "border-[#006838] bg-[#006838] text-white"
                      : "border-[#C8102E] bg-[#C8102E] text-white"
                : "border-navy-900/15 bg-white text-navy-700 hover:border-navy-900/25",
            )}
          >
            {f === "All" ? "All firms" : f}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city, country, or address…"
          className="w-full max-w-xs rounded-full border border-navy-900/15 bg-white px-3.5 py-1.5 text-xs text-navy-900 outline-none focus:border-navy-900/30 focus:ring-2 focus:ring-navy-900/10"
        />
        <button
          type="button"
          onClick={() => setRegion("All")}
          className={cn(
            "rounded-full border px-3 py-1 text-[11px] transition-colors",
            region === "All"
              ? "border-navy-900 bg-navy-900 text-ivory-50"
              : "border-navy-900/15 bg-white text-navy-700",
          )}
        >
          All regions
        </button>
        {MBB_REGIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] transition-colors",
              region === r
                ? "border-navy-900 bg-navy-900 text-ivory-50"
                : "border-navy-900/15 bg-white text-navy-700 hover:border-navy-900/20",
            )}
          >
            {REGION_LABELS[r]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 text-xs text-navy-600/80">
        <span>
          <strong className="font-semibold text-navy-900">{stats.count}</strong>{" "}
          offices
        </span>
        <span>
          <strong className="font-semibold text-navy-900">
            {stats.verified} / {stats.count}
          </strong>{" "}
          verified addresses
        </span>
        <span>
          <strong className="font-semibold text-navy-900">{stats.countries}</strong>{" "}
          countries
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-soft">
        <MapContainer
          center={[25, 20]}
          zoom={2}
          minZoom={1}
          scrollWheelZoom
          className="z-0 h-[min(580px,70vh)] w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> &copy; <a href="https://carto.com">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={19}
          />
          {filtered.map((office) => {
            const verified = hasVerifiedAddress(office.address);
            const color = MBB_FIRM_COLORS[office.firm];
            return (
              <Marker
                key={`${office.firm}-${office.name}-${office.lat}`}
                position={[office.lat, office.lng]}
                icon={makeIcon(color, verified)}
              >
                <Popup>
                  <OfficePopup office={office} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-navy-700">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#1B6EC2]" />
          McKinsey
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#006838]" />
          BCG
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#C8102E]" />
          Bain
        </span>
      </div>

      <p className="text-[11px] leading-relaxed text-navy-600/70">
        Addresses sourced from official firm office directories (bain.com, bcg.com,
        mckinsey.com) and geocoded to building-level coordinates. Brighter dots
        indicate verified street addresses.
      </p>
    </div>
  );
}
