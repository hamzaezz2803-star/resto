/**
 * Assiettes mises en avant (hero et comptoir tournant).
 * Photos Unsplash (licence Unsplash), vues du dessus, recadrées en rond : ce sont des illustrations.
 * Les commentaires de clients sont des EXEMPLES pour la démonstration :
 * pour un vrai client, les remplacer par de vrais avis (cités mot pour mot, avec accord des auteurs).
 */

import type { Price } from "@/content/menu";

const u = (id: string) => `https://images.unsplash.com/photo-${id}`;

/** Gamme de prix, de 1 (le plus doux) à 5. Dessinée comme la couleur du liseré de l'assiette. */
export type PriceTier = 1 | 2 | 3 | 4 | 5;

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: Price;
  tier: PriceTier;
  details: string[];
  image: { src: string; alt: string };
};

export const dishes: Dish[] = [
  {
    id: "bowl",
    name: "Bowl du marché",
    description: "Quinoa, légumes rôtis, pois chiches, sauce tahini citronnée.",
    price: 82,
    tier: 3,
    details: ["Végétarien", "Midi et soir"],
    image: { src: u("1512621776951-a57141f2eefd"), alt: "Bowl de légumes colorés vu du dessus" },
  },
  {
    id: "latte",
    name: "Flat white",
    description: "Double ristretto et lait micro-moussé, servi en tasse de 18 cl.",
    price: 32,
    tier: 1,
    details: ["Café de spécialité", "Lait végétal possible"],
    image: { src: u("1509042239860-f550ce710b93"), alt: "Tasse de café au lait avec un dessin dans la mousse, vue du dessus" },
  },
  {
    id: "salade",
    name: "Salade de saison",
    description: "Jeunes pousses, avocat, œuf, graines torréfiées, vinaigrette maison.",
    price: 78,
    tier: 2,
    details: ["Végétarien", "Sans gluten"],
    image: { src: u("1546069901-ba9599a7e63c"), alt: "Salade composée dans un bol, vue du dessus" },
  },
  {
    id: "toast",
    name: "Avocado toast",
    description: "Pain au levain grillé, avocat écrasé, œuf mollet et piment doux.",
    price: 68,
    tier: 2,
    details: ["Le matin", "Végétarien"],
    image: { src: u("1482049016688-2d3e1b311543"), alt: "Tartine d'avocat et œuf sur une assiette noire, vue du dessus" },
  },
  {
    id: "boeuf",
    name: "Bœuf mariné, légumes croquants",
    description: "Bœuf saisi minute, herbes fraîches, sauce au citron vert.",
    price: 189,
    tier: 5,
    details: ["Le soir", "Plat signature"],
    image: { src: u("1504674900247-0877df9cc836"), alt: "Assiette de bœuf tranché et salade, vue du dessus" },
  },
  {
    id: "pizza",
    name: "Pizza au feu de bois",
    description: "Pâte maturée 48 heures, tomate, mozzarella fior di latte, basilic.",
    price: { from: 85, to: 120 },
    tier: 4,
    details: ["À partager", "Végétarienne possible"],
    image: { src: u("1565299624946-b28f40a0ae38"), alt: "Pizza garnie vue du dessus" },
  },
  {
    id: "buddha",
    name: "Assiette verte",
    description: "Légumes de saison, œuf, houmous et graines, pour un déjeuner léger.",
    price: 75,
    tier: 2,
    details: ["Végétarien", "Midi"],
    image: { src: u("1540189549336-e6e99c3679fe"), alt: "Assiette de légumes et œuf vue du dessus" },
  },
  {
    id: "brunch",
    name: "Pain perdu brioché",
    description: "Brioche dorée au beurre, fruits rouges et sirop d'érable.",
    price: 62,
    tier: 2,
    details: ["Le matin", "Fait maison"],
    image: { src: u("1484723091739-30a097e8f929"), alt: "Pain perdu et fruits rouges vus du dessus" },
  },
];

/** Assiettes du hero, chacune avec un commentaire client d'exemple. */
export type HeroPlate = {
  dishId: Dish["id"];
  comment: string;
  guest: { name: string; avatar: string };
};

export const heroPlates: HeroPlate[] = [
  {
    dishId: "bowl",
    comment: "On vient pour le déjeuner, on reste pour le café. Le bowl est généreux.",
    guest: { name: "Salma B.", avatar: u("1494790108377-be9c29b29330") },
  },
  {
    dishId: "pizza",
    comment: "Pâte légère et service attentionné, même un samedi soir complet.",
    guest: { name: "Youssef A.", avatar: u("1507003211169-0a1dd7228f2d") },
  },
  {
    dishId: "latte",
    comment: "Le meilleur endroit du quartier pour travailler une heure avec un flat white.",
    guest: { name: "Inès L.", avatar: u("1438761681033-6461ffad8d80") },
  },
  {
    dishId: "boeuf",
    comment: "Réservé sur WhatsApp en deux minutes, table prête à notre arrivée.",
    guest: { name: "Karim M.", avatar: u("1500648767791-00dcc994a43e") },
  },
  {
    dishId: "salade",
    comment: "Des produits frais, une salle lumineuse et une équipe souriante.",
    guest: { name: "Nadia R.", avatar: u("1494790108377-be9c29b29330") },
  },
];

export function dishById(id: Dish["id"]): Dish {
  const dish = dishes.find((d) => d.id === id);
  if (!dish) throw new Error(`Assiette inconnue : ${id}`);
  return dish;
}
