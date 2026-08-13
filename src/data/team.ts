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
    image: "/69397f52-eae6-45c0-b897-26bd543273fd.webp",
  },
  {
    id: "meera",
    name: "Meera Iyer",
    role: "Colour & Texture Design",
    note: "Mixes every custom shade and builds the sample boards you approve.",
    image: "/42b52cac-5883-4923-a847-45f3e3794dfa.webp",
  },
  {
    id: "arun",
    name: "Arun Prakash",
    role: "Site Supervisor",
    note: "Runs prep, scheduling and the final quality walk on every project.",
    image: "/03f7c160-1939-4a3f-86c5-be0bfb41fa12.webp",
  },
];
