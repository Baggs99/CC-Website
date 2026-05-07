/**
 * Leadership roster, Yale SOM Consulting Club.
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
  employer: string;
  city: string;
  photoFile?: string;
};

/** Order: presidents first, then executive committee */
export const leadership: Leader[] = [
  {
    name: "Holly Briffa",
    title: "President",
    initials: "HB",
    linkedin: "https://www.linkedin.com/in/holly-briffa/",
    employer: "McKinsey & Company",
    city: "Darien, CT",
    photoFile: "holly-briffa.jpg",
  },
  {
    name: "Richard Ulbricht",
    title: "President",
    initials: "RU",
    linkedin: "https://www.linkedin.com/in/richard-ulbricht-79a46326a/",
    employer: "BCG",
    city: "Chicago, IL",
    photoFile: "richard-ulbricht.jpg",
  },
  {
    name: "Dan Baglini",
    title: "Executive committee",
    initials: "DB",
    linkedin: "https://www.linkedin.com/in/daniel-baglini/",
    employer: "McKinsey & Company",
    city: "Darien, CT",
    photoFile: "dan-baglini.jpg",
  },
  {
    name: "Siddhant Malhotra",
    title: "Executive committee",
    initials: "SM",
    linkedin: "https://www.linkedin.com/in/malhotra-siddhant/",
    employer: "BCG",
    city: "Dallas, TX",
    photoFile: "siddhant-malhotra.jpg",
  },
  {
    name: "Saif Pilpile",
    title: "Executive committee",
    initials: "SP",
    linkedin: "https://www.linkedin.com/in/saifpilpile/",
    employer: "BCG",
    city: "Washington, DC",
    photoFile: "saif-pilpile.jpg",
  },
  {
    name: "Jacob Coughlin",
    title: "Executive committee",
    initials: "JC",
    linkedin: "https://www.linkedin.com/in/jacobgcoughlin/",
    employer: "Redstone Strategy Group",
    city: "Boulder, CO",
    photoFile: "jacob-coughlin.jpg",
  },
  {
    name: "Jake Chang",
    title: "Executive committee",
    initials: "JK",
    linkedin: "https://www.linkedin.com/in/jacobtchang/",
    employer: "McKinsey & Company",
    city: "Darien, CT",
    photoFile: "jake-chang.jpg",
  },
  {
    name: "Patrycja Pajdak",
    title: "Executive committee",
    initials: "PP",
    linkedin: "https://www.linkedin.com/in/patrycja-pajdak/",
    employer: "McKinsey & Company",
    city: "Washington, DC",
    photoFile: "patrycja-pajdak.jpg",
  },
  {
    name: "Shashwat Bhattacharjee",
    title: "Executive committee",
    initials: "SB",
    linkedin: "https://www.linkedin.com/in/shashwat-bhattacharjee/",
    employer: "BCG",
    city: "Boston, MA",
    photoFile: "shashwat-bhattacharjee.jpg",
  },
  {
    name: "Camila Ortiz Silva",
    title: "Executive committee",
    initials: "COS",
    linkedin: "https://www.linkedin.com/in/camila-ortiz-silva-646ab9150/",
    employer: "Kearney",
    city: "Chicago, IL",
    photoFile: "camila-ortiz-silva.jpg",
  },
];
