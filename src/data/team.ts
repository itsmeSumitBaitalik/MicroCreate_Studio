export type Member = {
  id: string;
  name: string;
  role: string;
  note: string;
  image: string;
};

export const team: Member[] = [
  {
    id: "rajesh",
    name: "Rajesh Kumar",
    role: "Master Applicator",
    note: "22 years on the trowel. Leads every marmorino and travertine burnish.",
    image: "/profile_1.webp",
  },
  {
    id: "meera",
    name: "Meera Iyer",
    role: "Colour & Texture Design",
    note: "Mixes every custom shade and builds the sample boards you approve.",
    image: "/profile_2.webp",
  },
  {
    id: "arun",
    name: "Arun Prakash",
    role: "Site Supervisor",
    note: "Runs prep, scheduling and the final quality walk on every project.",
    image: "/profile_3.webp",
  },
];
