/**
 * Photos d'illustration (Unsplash, licence Unsplash). Voir docs/licences.md.
 * À remplacer par les photos de l'établissement du client.
 */

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

/** Photos de la section « La maison ». */
export const houseImages = {
  room: { src: u("1517248135467-4c7edcad34c4"), alt: "Salle de restaurant lumineuse avec tables en bois" },
  counter: { src: u("1554118811-1e0d58224f24"), alt: "Comptoir d'un café avec machine à espresso" },
};

export const gallery: GalleryImage[] = [
  { id: "salle", src: u("1414235077428-338989a2e8c0"), alt: "Tables dressées dans une salle de restaurant chaleureuse" },
  { id: "cafes", src: u("1495474472287-4d71bcdd2085"), alt: "Trois cafés au lait trinqués au-dessus d'une table" },
  { id: "bowls", src: u("1490645935967-10de6ba17061"), alt: "Plusieurs bols de cuisine colorée sur une table" },
  { id: "terrasse", src: u("1559925393-8be0ec4767c8"), alt: "Terrasse d'un café avec tables et ardoise" },
  { id: "pates", src: u("1473093295043-cdd812d0e601"), alt: "Salade de pâtes aux tomates cerises et au basilic" },
  { id: "pancakes", src: u("1528207776546-365bb710ee93"), alt: "Pancakes au sirop, banane et myrtilles" },
  { id: "dessert", src: u("1578985545062-69928b1d9587"), alt: "Gâteau au chocolat sur une assiette" },
  { id: "terrasse-mer", src: u("1559339352-11d035aa65de"), alt: "Terrasse couverte d'un restaurant face à la mer" },
];
