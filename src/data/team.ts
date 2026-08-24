export type Member = {
  id: string;
  name: string;
  role: string;
  note: string;
  image: string;
  objectPosition?: string;
  featured?: boolean;
};

export const team: Member[] = [
  {
    id: "parimal",
    name: "Parimal R. Sahani",
    role: "Founder & Owner",
    note: "Founded Microcrete Studio with a vision to bring premium seamless wall and floor finishes to modern interiors.",
    image: "/profile_1.webp",
    objectPosition: "top center",
    featured: true,
  },
  {
    id: "kabita",
    name: "Mrs. Kabita Prasad",
    role: "Client Relations & Showroom Manager",
    note: "Manages enquiries, client communication and showroom interactions — ensuring every client feels welcome.",
    image: "/profile_2.webp",
    objectPosition: "top center",
  },
  {
    id: "mahesh",
    name: "Mr. Mahesh Sahani",
    role: "Quality & Project Coordination",
    note: "Oversees material quality, preparation standards and quality checks to ensure every project meets the studio's finish standards.",
    image: "/profile_3.webp",
    objectPosition: "top center",
  },
];
