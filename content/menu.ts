/**
 * Carte de démonstration (MAD). À remplacer par la carte du client.
 * Quand un plat existe en plusieurs tailles, `price` est un intervalle.
 */

export type Price = number | { from: number; to: number };

export type MenuItem = {
  name: string;
  price: Price;
  note?: string;
};

export type MenuGroup = { title?: string; items: MenuItem[] };

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  groups: MenuGroup[];
};

export const menu: MenuCategory[] = [
  {
    id: "matin",
    label: "Le matin",
    intro: "Servi jusqu'à 12:00. Pain et viennoiseries cuits chaque matin.",
    groups: [
      {
        title: "Petits-déjeuners",
        items: [
          { name: "Petit-déjeuner de la maison", price: 85, note: "boisson chaude, jus pressé, œufs, pain, beurre et confiture" },
          { name: "Petit-déjeuner marocain", price: 75, note: "msemen, baghrir, amlou, huile d'olive, thé à la menthe" },
          { name: "Avocado toast", price: 68, note: "pain au levain, œuf mollet, graines" },
          { name: "Pain perdu brioché", price: 62, note: "fruits rouges, sirop d'érable" },
        ],
      },
      {
        title: "Viennoiseries",
        items: [
          { name: "Croissant pur beurre", price: 16 },
          { name: "Pain au chocolat", price: 18 },
          { name: "Cookie du jour", price: 22 },
        ],
      },
    ],
  },
  {
    id: "cafe",
    label: "Café et boissons",
    intro: "Café de spécialité torréfié en petites quantités, thés et boissons fraîches.",
    groups: [
      {
        title: "Café",
        items: [
          { name: "Espresso", price: 18 },
          { name: "Cappuccino", price: 28 },
          { name: "Flat white", price: 32 },
          { name: "Latte", price: { from: 30, to: 36 }, note: "vanille, caramel ou noisette" },
          { name: "Iced latte", price: 36 },
        ],
      },
      {
        title: "Thés et frais",
        items: [
          { name: "Thé à la menthe", price: { from: 20, to: 45 }, note: "verre ou théière" },
          { name: "Jus d'orange pressé", price: 25 },
          { name: "Smoothie", price: 42, note: "mangue passion ou fruits rouges" },
          { name: "Citronnade maison", price: 30 },
        ],
      },
    ],
  },
  {
    id: "assiettes",
    label: "Entrées et salades",
    intro: "Des assiettes de saison, à partager ou à garder pour soi.",
    groups: [
      {
        items: [
          { name: "Burrata, tomates anciennes", price: 95 },
          { name: "Salade César au poulet grillé", price: 89 },
          { name: "Bowl quinoa, légumes rôtis", price: 82 },
          { name: "Zaalouk et taktouka, pain chaud", price: 55 },
          { name: "Soupe du jour", price: 45 },
          { name: "Planche à partager", price: 165, note: "2 à 3 personnes" },
        ],
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    intro: "Le midi et le soir. Produits du marché, cuisinés sur place.",
    groups: [
      {
        items: [
          { name: "Filet de bœuf, sauce au poivre", price: 189 },
          { name: "Tajine d'agneau aux pruneaux", price: 145 },
          { name: "Pavé de saumon, légumes verts", price: 159 },
          { name: "Pâtes fraîches au pesto", price: 98 },
          { name: "Pizza au feu de bois", price: { from: 85, to: 120 } },
          { name: "Brochettes de poulet, frites maison", price: 110 },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    intro: "Faits maison, chaque jour.",
    groups: [
      {
        items: [
          { name: "Fondant au chocolat", price: 55, note: "cœur coulant, glace vanille" },
          { name: "Cheesecake", price: 52, note: "fruits rouges ou citron" },
          { name: "Pastilla au lait", price: 48 },
          { name: "Coupe glacée", price: 45, note: "trois boules au choix" },
        ],
      },
    ],
  },
];
