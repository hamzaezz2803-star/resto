# Contenu, photos et pages légales

## Source de vérité

- Carte, prix, horaires et coordonnées : relevés sur **pastrama.ma** (novembre 2026), stockés dans `content/`.
  Toute modification de prix se fait dans `content/menu.ts` uniquement, avec la date du relevé.
- Note Google : 4,5 sur 5, 2 179 avis (relevé de novembre 2026). À mettre à jour, ou à retirer si elle n'est plus exacte.

## Textes

- Langue : français. Ton simple, chaleureux et direct, sans superlatifs.
- Titre principal précis : ce que propose le restaurant, où, et ce que le visiteur peut faire.
- **Aucun tiret cadratin (—)** dans les textes visibles. Utiliser point, virgule, deux-points ou parenthèses.
- **Aucun faux avis, faux chiffre ou affirmation non prouvée** (« le meilleur de Casablanca », « n°1 »...).
  Les affirmations sur la fabrication (fumage 12 h, levain naturel, sans conservateurs) viennent du restaurant lui-même.
- Avis : uniquement de vrais avis Google, cités mot pour mot (fichier `content/reviews.ts`), nom abrégé. Accord des auteurs à obtenir.
- Pas de badge « Fait avec l'IA ».

## Formats (Maroc)

- Montants : 2 décimales, espace fine avant la devise : `129,00 MAD` (fonction `formatMad`).
- Heures en 24 h : `09:30`, `23:30`.
- Dates lisibles : `ven. 14 nov. 2026` (`Intl.DateTimeFormat("fr-MA")`).
- Téléphone affiché `06 78 84 81 81`, lien `tel:+212678848181`.

## Photos

- Pas d'image générée par IA présentée comme réelle.
- Vidéo du hero : Pexels (licence Pexels), vraie prise de vue mais pas chez Pastrama, illustration à remplacer.
- Photos actuelles : Unsplash (licence Unsplash, usage commercial autorisé), utilisées comme **illustrations**
  et signalées comme telles dans la galerie. Aucune photo d'un autre restaurant présentée comme celle de Pastrama.
- Chaque image ajoutée est listée dans `docs/licences.md` (source, auteur ou URL, licence).
- `alt` descriptif pour toute image utile, `alt=""` pour les images décoratives.

## Pages légales

- Le client a demandé de ne pas publier de pages légales ni de mention de copyright (voir `00-lire-en-premier.md`).
- Le site lui-même ne dépose pas de cookie. La carte Google Maps est affichée directement (demande du client) :
  Google peut y déposer ses propres cookies. Si la loi ou le client l'exigent, revenir à un chargement au clic
  ou ajouter un bandeau (« Accepter » et « Refuser » de même importance).
