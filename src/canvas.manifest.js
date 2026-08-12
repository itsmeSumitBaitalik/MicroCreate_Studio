export const manifest = {
  screens: {
    scr_rxmyu7: { name: "Home", route: "/", position: { "x": 160, "y": 220 } },
    scr_t3z68i: { name: "About Us", route: "/about", position: { "x": 1560, "y": 220 } },
    scr_2cpllq: { name: "Services", route: "/services", position: { "x": 2960, "y": 220 } },
    scr_ibnh56: { name: "Work", route: "/work", position: { "x": 4360, "y": 220 } },
    scr_qywk9g: { name: "Contact Us", route: "/contact", state: { "sent": false }, position: { "x": 160, "y": 2200 } },
    scr_a7ao1o: { name: "Quote Sent", route: "/contact", state: { "sent": true }, position: { "x": 1560, "y": 2200 } }
  },
  sections: {
    sec_fnvsbj: { name: "Main Pages", x: 0, y: 0, width: 5720, height: 1180 },
    sec_g1jfii: { name: "Contact Flow", x: 0, y: 1980, width: 2920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_fnvsbj", children: [
    { kind: "screen", id: "scr_rxmyu7" },
    { kind: "screen", id: "scr_t3z68i" },
    { kind: "screen", id: "scr_2cpllq" },
    { kind: "screen", id: "scr_ibnh56" }]
  },
  { kind: "section", id: "sec_g1jfii", children: [
    { kind: "screen", id: "scr_qywk9g" },
    { kind: "screen", id: "scr_a7ao1o" }]
  }]

};