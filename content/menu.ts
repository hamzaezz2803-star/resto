/**
 * Carte et prix (MAD), relevés sur pastrama.ma/maarif en novembre 2026.
 * Quand un plat existe en plusieurs tailles, `price` est un intervalle.
 * Modifier les prix ici uniquement.
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

export const menuCheckedOn = "novembre 2026";

export const menu: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgers",
    intro: "Burgers craft, servis en plusieurs tailles.",
    groups: [
      {
        items: [
          { name: "Truffle Burger", price: { from: 129, to: 159 } },
          { name: "Peper'n'Pastrama", price: { from: 129, to: 159 } },
          { name: "Tartare Burger", price: { from: 115, to: 145 } },
          { name: "Spice'n'Pepperoni Burger", price: { from: 115, to: 145 } },
          { name: "Smokin'Grill", price: { from: 115, to: 145 } },
          { name: "All American", price: { from: 115, to: 145 } },
          { name: "Hot & Furious", price: { from: 115, to: 145 } },
          { name: "Dynamite Chicken Burger", price: 109 },
          { name: "Chicken O Filet", price: 109 },
          { name: "Crispy Chicken", price: 99 },
        ],
      },
    ],
  },
  {
    id: "deli",
    label: "Deli",
    intro: "Le cœur de la maison : viandes fumées et pain au levain maison.",
    groups: [
      {
        title: "Deli chaud",
        items: [
          { name: "The Pastrama", price: { from: 129, to: 189 } },
          { name: "The Corned Beef", price: { from: 129, to: 189 } },
          { name: "The Smoked Chicken", price: { from: 119, to: 179 } },
        ],
      },
      {
        title: "Deli froid",
        items: [
          { name: "Bresaola Milano", price: 89 },
          { name: "Poulet Braisé Signature", price: 89 },
          { name: "Duck Royale Truffle", price: 89 },
        ],
      },
      {
        title: "Saucisses et wraps",
        items: [
          { name: "The Spicy Flame Merguez", price: 99 },
          { name: "The Casablanca Sausage Melt", price: 89 },
          { name: "The Chicken Wrap", price: 89 },
          { name: "Döner Kebab", price: 89 },
        ],
      },
    ],
  },
  {
    id: "grill",
    label: "Viandes",
    intro: "Steaks, ribs et poulet grillé, avec leur accompagnement.",
    groups: [
      {
        items: [
          { name: "BBQ Beef Ribs", price: 269 },
          { name: "Truffle Steak on Fries", price: 219 },
          { name: "Pepper Steak on Fries", price: 209 },
          { name: "Chargrill Steak on Potatoes", price: 209 },
          { name: "Grilled Chicken Breast", price: 139 },
        ],
      },
    ],
  },
  {
    id: "partager",
    label: "À partager",
    intro: "Entrées et plateaux pour la table.",
    groups: [
      {
        title: "À partager",
        items: [
          { name: "Mixed Sliders", price: 429, note: "9 pièces" },
          { name: "The Platter", price: 298 },
          { name: "Chicken Sliders", price: 149, note: "3 pièces" },
          { name: "Beef Sliders", price: 149, note: "3 pièces" },
          { name: "Nachos Beef & Cheese", price: 109, note: "2 personnes" },
        ],
      },
      {
        title: "Entrées",
        items: [
          { name: "Beef Bresaola", price: 99 },
          { name: "Guacamole", price: 99 },
          { name: "Spinach Artichoke Dip", price: 85 },
          { name: "BBQ Chicken Wings", price: 79, note: "6 pièces" },
          { name: "Chicken Tenders", price: 79, note: "4 pièces" },
          { name: "Dynamite Chicken", price: 79 },
          { name: "Ham Cheese Roll", price: 79, note: "4 pièces" },
          { name: "Chili Chicken Ball", price: 69, note: "8 pièces" },
        ],
      },
    ],
  },
  {
    id: "salades",
    label: "Salades et à-côtés",
    intro: "Salades composées, frites et garnitures.",
    groups: [
      {
        title: "Salades",
        items: [
          { name: "Greek Salad", price: 99 },
          { name: "Chicken Caesar Salad", price: 89 },
          { name: "Buffalo Salad", price: 89 },
        ],
      },
      {
        title: "Accompagnements",
        items: [
          { name: "Spicy Potatoes", price: 35 },
          { name: "Bacon & Cheese Fries", price: 35 },
          { name: "Onion & Cheese Fries", price: 35 },
          { name: "Cheese & Ham Ravioli", price: 35 },
          { name: "Purée de pommes de terre", price: 35 },
          { name: "French Fries", price: 25 },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    intro: "Cheesecakes, gâteaux américains et tiramisus.",
    groups: [
      {
        items: [
          {
            name: "Cheesecake",
            price: 49,
            note: "pomme caramel, framboise, chocolat ou citron",
          },
          {
            name: "American cake",
            price: 49,
            note: "red velvet, noisette chocolat ou carotte",
          },
          { name: "Tiramisu", price: 49, note: "classique, framboise ou citron" },
          { name: "Mousse au chocolat", price: 49 },
          { name: "Cookie", price: 18, note: "vanille pépites ou extrême chocolat" },
        ],
      },
      {
        title: "Boissons fraîches",
        items: [
          { name: "Milk-shake", price: { from: 49, to: 59 } },
          { name: "Smoothie", price: 55 },
          { name: "Frappé", price: { from: 39, to: 45 } },
          { name: "Cocktails et jus", price: { from: 35, to: 59 } },
        ],
      },
    ],
  },
];

/** Les plats mis en avant dans la section « La maison ». */
export type SignatureDish = {
  name: string;
  price: Price;
  description: string;
  image: { src: string; alt: string };
};

export const signatureDishes: SignatureDish[] = [
  {
    name: "The Pastrama",
    price: { from: 129, to: 189 },
    description: "Le sandwich qui a donné son nom à la maison : pastrami fumé, servi chaud.",
    image: {
      src: "https://images.unsplash.com/photo-1639667911189-700bd2029f5b",
      alt: "Sandwich garni de viande tranchée, de fromage et de salade",
    },
  },
  {
    name: "Truffle Burger",
    price: { from: 129, to: 159 },
    description: "Le burger le plus commandé, parfumé à la truffe.",
    image: {
      src: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
      alt: "Burger tenu par un couteau planté, sur fond sombre",
    },
  },
  {
    name: "BBQ Beef Ribs",
    price: 269,
    description: "Côtes de bœuf laquées au barbecue, à partager ou pas.",
    image: {
      src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd",
      alt: "Planche de côtes grillées au barbecue",
    },
  },
];
