# Contenu, photos et pages légales

## Source de vérité

- Carte, prix, horaires et coordonnées : valeurs de démonstration dans `content/`, à remplacer par celles du client.
  Toute modification de prix se fait dans `content/menu.ts` uniquement, avec la date du relevé.

## Textes

- Langue : français. Ton simple, chaleureux et direct, sans superlatifs.
- Titre principal précis : ce que propose le restaurant, où, et ce que le visiteur peut faire.
- **Aucun tiret cadratin (—)** dans les textes visibles. Utiliser point, virgule, deux-points ou parenthèses.
- **Aucun faux avis, faux chiffre ou affirmation non prouvée** (« le meilleur de Casablanca », « n°1 »...).
  Les affirmations sur la fabrication (fumage 12 h, levain naturel, sans conservateurs) viennent du restaurant lui-même.
- Avis : les commentaires du hero sont des exemples de démonstration (`content/dishes.ts`). Pour un client : uniquement de vrais avis, cités mot pour mot, nom abrégé, accord des auteurs.
- Pas de badge « Fait avec l'IA ».

## Formats (Maroc)

- Montants : 2 décimales, espace fine avant la devise : `129,00 MAD` (fonction `formatMad`).
- Heures en 24 h : `09:30`, `23:30`.
- Dates lisibles : `ven. 14 nov. 2026` (`Intl.DateTimeFormat("fr-MA")`).
- Téléphone affiché `06 78 84 81 81`, lien `tel:+212678848181`.

## Photos

- Pas d'image générée par IA présentée comme réelle.
- Photos actuelles : Unsplash (licence Unsplash, usage commercial autorisé), utilisées comme **illustrations**
  et signalées comme telles dans la galerie. Aucune photo d'un autre établissement présentée comme celle du client.
- Chaque image ajoutée est listée dans `docs/licences.md` (source, auteur ou URL, licence).
- `alt` descriptif pour toute image utile, `alt=""` pour les images décoratives.

## Pages légales

- Le site lui-même ne dépose pas de cookie. La carte Google Maps est affichée directement (demande du client) :
  Google peut y déposer ses propres cookies. Si la loi ou le client l'exigent, revenir à un chargement au clic
  ou ajouter un bandeau (« Accepter » et « Refuser » de même importance).
