import type { Price } from "@/content/menu";

const NNBSP = " ";

const mad = new Intl.NumberFormat("fr-MA", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true,
});

/** Montant sans devise : « 1 250,00 ». */
export function formatAmount(value: number): string {
  // fr-MA utilise un point comme séparateur décimal selon les moteurs : on normalise.
  const [int, dec] = mad.format(value).replace(/\s/g, NNBSP).split(/[.,](?=\d{2}$)/);
  return `${int},${dec}`;
}

/** Montant avec devise : « 129,00 MAD ». */
export function formatMad(value: number): string {
  return `${formatAmount(value)}${NNBSP}MAD`;
}

/** Prix simple ou intervalle : « 129,00 MAD » ou « 129,00 à 159,00 MAD ». */
export function formatPrice(price: Price): string {
  if (typeof price === "number") return formatMad(price);
  return `${formatAmount(price.from)} à ${formatMad(price.to)}`;
}
