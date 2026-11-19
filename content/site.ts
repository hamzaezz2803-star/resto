/**
 * Coordonnées et informations du restaurant.
 * Source : pastrama.ma et fiche Google (relevé de novembre 2026).
 * Ne jamais inventer une valeur.
 */

export type DayKey = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = dimanche (comme Date.getDay)

export type TimeRange = { open: string; close: string };

export const site = {
  name: "Pastrama",
  fullName: "Pastrama, Deli & Craft Burger",
  tagline: "New York deli, Casablanca style",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pastrama.ma",
  address: {
    street: "Rue Oumayma Essayeh",
    district: "Maarif",
    city: "Casablanca",
    postalCode: "20250",
    country: "MA",
  },
  geo: { lat: 33.5872606, lng: -7.6384253 },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=33.5872606,-7.6384253",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=33.5872606,-7.6384253&z=16&output=embed",
  phone: { display: "06 78 84 81 81", e164: "+212678848181" },
  email: "manager@pastrama.ma",
  priceRange: "100,00 à 350,00 MAD par personne",
  services: ["Sur place", "À emporter", "Livraison"],
  rating: {
    value: 4.5,
    count: 2179,
    source: "Google",
    checkedOn: "novembre 2026",
    url: "https://www.google.com/maps/search/?api=1&query=Pastrama+Deli+%26+Craft+Burger+Casablanca",
  },
  /** Horaires d'ouverture, heure de Casablanca. */
  hours: {
    1: [{ open: "09:30", close: "23:30" }],
    2: [{ open: "09:30", close: "23:30" }],
    3: [{ open: "09:30", close: "23:30" }],
    4: [{ open: "09:30", close: "23:30" }],
    5: [
      { open: "09:30", close: "12:30" },
      { open: "13:30", close: "23:30" },
    ],
    6: [{ open: "09:30", close: "23:30" }],
    0: [{ open: "09:30", close: "23:30" }],
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
  { href: "/#carte", label: "La carte" },
  { href: "/#maison", label: "La maison" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#avis", label: "Avis" },
  { href: "/#infos", label: "Horaires et accès" },
] as const;
