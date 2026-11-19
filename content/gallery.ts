/**
 * Photos d'illustration (Unsplash, licence Unsplash). Voir docs/licences.md.
 * À remplacer par les photos du restaurant.
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const heroImage = {
  src: u("1738173689012-95fa988f684d"),
  alt: "Sandwichs de deli empilés, garnis de viande tranchée",
};

export const gallery: GalleryImage[] = [
  { id: "deli-stack", src: u("1738173689012-95fa988f684d"), alt: "Sandwichs de deli empilés, garnis de viande tranchée" },
  { id: "burger-board", src: u("1550547660-d9450f859349"), alt: "Deux burgers servis sur un plateau en bois" },
  { id: "ribs", src: u("1544025162-d76694265947"), alt: "Côtes levées rôties avec tomates et pommes de terre" },
  { id: "sandwich-hands", src: u("1639667910197-888506ab6827"), alt: "Mains tenant un sandwich coupé en deux" },
  { id: "steak-fries", src: u("1600891964092-4316c288032e"), alt: "Steak tranché servi sur des frites" },
  { id: "wings", src: u("1567620832903-9fc6debc209f"), alt: "Ailes de poulet laquées avec sauce à tremper" },
  { id: "burger-fries", src: u("1766589221281-661e1398e721"), alt: "Burger avec frites et salade de chou sur une table en bois" },
  { id: "cheesecake", src: u("1524351199678-941a58a3df50"), alt: "Part de cheesecake sur une assiette noire" },
];
