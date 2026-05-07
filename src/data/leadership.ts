/**
 * Leadership roster — Yale SOM Consulting Club.
 *
 * Photos: add files under `public/leadership/` and set `photoFile` to the
 * filename only (e.g. `"holly-briffa.jpg"` → `/leadership/holly-briffa.jpg`).
 */

export type LeaderTitle = "President" | "Executive committee";

export type Leader = {
  name: string;
  title: LeaderTitle;
  initials: string;
  linkedin: string;
  photoFile?: string;
};

/** Order: presidents first, then executive committee */
export const leadership: Leader[] = [
  {
    name: "Holly Briffa",
    title: "President",
    initials: "HB",
    linkedin: "#",
    photoFile: "holly-briffa.jpg",
  },
  {
    name: "Richard Ulbricht",
    title: "President",
    initials: "RU",
    linkedin: "#",
    photoFile: "richard-ulbricht.jpg",
  },
  {
    name: "Dan Baglini",
    title: "Executive committee",
    initials: "DB",
    linkedin: "#",
    photoFile: "dan-baglini.jpg",
  },
  {
    name: "Siddhant Malhotra",
    title: "Executive committee",
    initials: "SM",
    linkedin: "#",
    photoFile: "siddhant-malhotra.jpg",
  },
  {
    name: "Saif Pilpile",
    title: "Executive committee",
    initials: "SP",
    linkedin: "#",
    photoFile: "saif-pilpile.jpg",
  },
  {
    name: "Jacob Coughlin",
    title: "Executive committee",
    initials: "JC",
    linkedin: "#",
    photoFile: "jacob-coughlin.jpg",
  },
  {
    name: "Jake Chang",
    title: "Executive committee",
    initials: "JK",
    linkedin: "#",
    photoFile: "jake-chang.jpg",
  },
  {
    name: "Patrycja Pajdak",
    title: "Executive committee",
    initials: "PP",
    linkedin: "#",
    photoFile: "patrycja-pajdak.jpg",
  },
  {
    name: "Shashwat Bhattacharjee",
    title: "Executive committee",
    initials: "SB",
    linkedin: "#",
    photoFile: "shashwat-bhattacharjee.jpg",
  },
  {
    name: "Camila Ortiz Silva",
    title: "Executive committee",
    initials: "COS",
    linkedin: "#",
    photoFile: "camila-ortiz-silva.jpg",
  },
];
