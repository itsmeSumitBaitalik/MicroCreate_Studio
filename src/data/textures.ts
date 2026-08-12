export type Texture = {
  id: string;
  name: string;
  category: 'Wall' | 'Floor';
  description: string;
  image: string;
};

export const textures: Texture[] = [
{
  id: 'ombre',
  name: 'Ombre Texture',
  category: 'Wall',
  description:
  'A hand-graded fade from deep earth to soft cream, blended wet-on-wet so the transition reads as light rather than paint.',
  image: "/7962703b-707e-4e2c-8988-2f20dff1b2db.jpg"

},
{
  id: 'limewash',
  name: 'Limewash',
  category: 'Wall',
  description:
  'Breathable mineral lime laid in soft cloudy strokes. Chalk-matte, naturally antibacterial, and it only deepens with age.',
  image: "/eadc15e6-9082-41a2-a5ba-afd088866219.jpg"

},
{
  id: 'marmorino',
  name: 'Marmorino',
  category: 'Wall',
  description:
  'Venetian marble-dust plaster burnished to a low satin sheen — the classic polished finish, with veining formed by hand.',
  image: "/1997d847-c509-4643-9c8a-2b0f75f3bf1f.jpg"

},
{
  id: 'travertine',
  name: 'Travertine',
  category: 'Wall',
  description:
  'Warm cream banding with open, honed pores. All the weight of quarried stone at a fraction of the thickness.',
  image: "/0a5a5bd6-c7ad-461d-84a2-c8c0bc66d5e8.jpg"

},
{
  id: 'fossil-stone',
  name: 'Fossil Stone',
  category: 'Wall',
  description:
  'Sedimentary sand tones carrying shell and ammonite impressions, pressed and carved into the surface while still green.',
  image: "/aeba2866-d972-4566-9cbe-700f18d97077.jpg"

},
{
  id: 'mandana',
  name: 'Mandana Texture',
  category: 'Wall',
  description:
  'Chiselled charcoal grooves with a rugged matte face — a dramatic, architectural finish for feature walls and facades.',
  image: "/8fc15c66-c034-4708-9192-a1028236fcd3.jpg"

},
{
  id: 'microcement-floor',
  name: 'Microcement Floor',
  category: 'Floor',
  description:
  'Seamless, joint-free flooring at 3mm. Laid over existing tile or screed, sealed for wet areas and heavy footfall.',
  image: "/84c897c7-f668-4e8c-881a-acfb8d0a812f.jpg"

}];