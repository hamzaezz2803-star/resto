/**
 * Identité et coordonnées de l'établissement.
 *
 * Ce site est un modèle de démonstration pour restaurants et cafés :
 * le nom, l'adresse, le numéro WhatsApp et les horaires ci-dessous sont des exemples.
 * Pour livrer le site à un client, il suffit de remplacer les valeurs de ce fichier
 * (et le contenu de content/menu.ts, content/gallery.ts, content/dishes.ts).
 */

export type DayKey = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = dimanche (comme Date.getDay)

export type TimeRange = { open: string; close: string };

/** Numéro WhatsApp de démonstration, au format international sans « + ». */
const whatsappNumber = "212600000000";

export const site = {
  name: "Maison Olive",
  fullName: "Maison Olive, restaurant et café",
  tagline: "Restaurant et café",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  address: {
    street: "Boulevard d'Anfa",
    district: "Racine",
    city: "Casablanca",
    postalCode: "20000",
    country: "MA",
  },
  geo: { lat: 33.5883, lng: -7.6324 },
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=33.5883,-7.6324",
  mapEmbedUrl: "https://maps.google.com/maps?q=33.5883,-7.6324&z=16&output=embed",
  phone: { display: "06 00 00 00 00", e164: "+212600000000" },
  /** Réservation : ouvre WhatsApp avec un message prérempli. */
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Maison Olive, je souhaite réserver une table pour ... personnes, le ... à ... h. Merci !",
  )}`,
  /** Question sur un plat : message prérempli avec le nom du plat. */
  whatsappAbout: (dish: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Bonjour Maison Olive, je souhaite réserver une table et j'ai une question sur « ${dish} ».`,
    )}`,
  email: "bonjour@example.com",
  priceRange: "60,00 à 220,00 MAD par personne",
  services: ["Petit-déjeuner", "déjeuner", "dîner", "café toute la journée"],
  /** Horaires d'ouverture, heure de Casablanca. */
  hours: {
    1: [{ open: "08:00", close: "23:00" }],
    2: [{ open: "08:00", close: "23:00" }],
    3: [{ open: "08:00", close: "23:00" }],
    4: [{ open: "08:00", close: "23:00" }],
    5: [
      { open: "08:00", close: "12:30" },
      { open: "14:00", close: "23:30" },
    ],
    6: [{ open: "09:00", close: "23:30" }],
    0: [{ open: "09:00", close: "22:00" }],
  } satisfies Record<DayKey, TimeRange[]>,
} as const;

export const dayNames: Record<DayKey, string> = {
  1: "Lundi",
  2: "Mardi",
  3: "Mercredi",
  4: "Jeudi",
  5: "Vendredi",
  6: "Samedi",
  0: "Dimanche",
};

/** Ordre d'affichage : la semaine commence le lundi. */
export const weekOrder: DayKey[] = [1, 2, 3, 4, 5, 6, 0];

export const navLinks = [
  { href: "/#assiettes", label: "Les assiettes" },
  { href: "/#maison", label: "La maison" },
  { href: "/#carte", label: "La carte" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#infos", label: "Nous trouver" },
] as const;
