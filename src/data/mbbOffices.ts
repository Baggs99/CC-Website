import offices from "./mbbOffices.json";

export type MbbFirm = "McKinsey" | "BCG" | "Bain";

export type MbbRegion =
  | "North America"
  | "Central & South America"
  | "Europe"
  | "Middle East"
  | "Africa"
  | "Asia Pacific";

export interface MbbOffice {
  firm: MbbFirm;
  name: string;
  country: string;
  region: MbbRegion;
  lat: number;
  lng: number;
  address: string;
}

export const mbbOffices = offices as MbbOffice[];

export const MBB_FIRM_COLORS: Record<MbbFirm, string> = {
  McKinsey: "#1B6EC2",
  BCG: "#006838",
  Bain: "#C8102E",
};

export const MBB_REGIONS: MbbRegion[] = [
  "North America",
  "Central & South America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia Pacific",
];
