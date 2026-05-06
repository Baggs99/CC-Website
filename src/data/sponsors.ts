export type Sponsor = {
  name: string;
  tier: "Gold" | "Silver";
};

export const sponsors: Sponsor[] = [
  { name: "McKinsey & Company", tier: "Gold" },
  { name: "Bain & Company", tier: "Gold" },
  { name: "Boston Consulting Group", tier: "Gold" },
  { name: "Deloitte", tier: "Silver" },
  { name: "EY-Parthenon", tier: "Silver" },
  { name: "Kearney", tier: "Silver" },
  { name: "L.E.K. Consulting", tier: "Silver" },
  { name: "Oliver Wyman", tier: "Silver" },
  { name: "PwC Strategy&", tier: "Silver" },
  { name: "ZS Associates", tier: "Silver" },
];
