/**
 * Avis Google réels, cités tels quels (langue d'origine), relevés en novembre 2026 (dates relatives à ce relevé).
 * Le nom est abrégé (prénom + initiale). Ne jamais ajouter d'avis inventé ni reformulé.
 * Règle studio : obtenir l'accord des auteurs avant la mise en ligne.
 */

export type Review = {
  author: string;
  meta: string;
  when: string;
  lang: string;
  text: string;
};

export const reviews: Review[] = [
  {
    author: "Hatim F.",
    meta: "3 avis",
    when: "il y a 4 mois",
    lang: "en",
    text: "So far, this is one of the top places in Maarif. It's incredibly cozy and makes you feel at home from the very first visit.",
  },
  {
    author: "Younes B.",
    meta: "Local Guide, 15 avis",
    when: "il y a 5 mois",
    lang: "en",
    text: "Every time I come to Casablanca, I end up eating here at least once. I've tried several dishes here, but the pastrami is their specialty.",
  },
  {
    author: "Nitin U.",
    meta: "Local Guide, 12 avis",
    when: "il y a 3 semaines",
    lang: "en",
    text: "Great food. Had the dynamite chicken burger, tastes goood. The prices are on the higher end but are worth it for a great meal.",
  },
];
