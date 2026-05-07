export type Sponsor = {
  name: string;
  tier: "Gold" | "Silver";
  /** Raster or SVG logo URL (vendors may mirror files under `public/sponsors/` instead). */
  logoSrc: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "McKinsey & Company",
    tier: "Gold",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/McKinsey_Script_Mark_2019.svg",
  },
  {
    name: "Bain & Company",
    tier: "Gold",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bain_%26_Company_logo.svg",
  },
  {
    name: "Boston Consulting Group",
    tier: "Gold",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Boston_Consulting_Group_2020_logo.svg",
  },
  {
    name: "Deloitte",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg",
  },
  {
    name: "EY-Parthenon",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/EY_Parthenon_logo.svg",
  },
  {
    name: "Kearney",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Kearney_Logo.svg",
  },
  {
    name: "L.E.K. Consulting",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/L.E.K._Consulting_logo.svg",
  },
  {
    name: "Oliver Wyman",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Oliver_Wyman_Logo.svg",
  },
  {
    name: "PwC Strategy&",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/PwC_Company_Logo.svg",
  },
  {
    name: "ZS Associates",
    tier: "Silver",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/ZS_Associates.svg",
  },
];
