export type Project = {
  id: string;
  title: string;
  location: string;
  finish: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "harbour-residence",
    title: "Harbour Residence",
    location: "Chennai",
    finish: "Limewash walls",
    image: "/0d478af7-c767-4f97-8030-2d6197cd7d84.webp",
  },
  {
    id: "arch-bath",
    title: "Arch Bath",
    location: "Bengaluru",
    finish: "Seamless microcement",
    image: "/f6b54c8c-2a94-4af1-a3d1-bd14492b1aff.webp",
  },
  {
    id: "atelier-floor",
    title: "Atelier Floor",
    location: "Mumbai",
    finish: "Microcement flooring",
    image: "/84c897c7-f668-4e8c-881a-acfb8d0a812f.webp",
  },
  {
    id: "quarry-lobby",
    title: "Quarry Lobby",
    location: "Hyderabad",
    finish: "Mandana texture",
    image: "/8fc15c66-c034-4708-9192-a1028236fcd3.webp",
  },
  {
    id: "salt-cafe",
    title: "Salt Café",
    location: "Goa",
    finish: "Travertine walls",
    image: "/0a5a5bd6-c7ad-461d-84a2-c8c0bc66d5e8.webp",
  },
  {
    id: "ember-suite",
    title: "Ember Suite",
    location: "Jaipur",
    finish: "Ombre feature wall",
    image: "/7962703b-707e-4e2c-8988-2f20dff1b2db.webp",
  },
];
