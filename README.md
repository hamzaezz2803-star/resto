# Modèle de site vitrine pour restaurants et cafés

Site de démonstration (marque fictive **Maison Olive**) à présenter aux restaurants et cafés.
Le site présente l'établissement : assiettes, maison, carte, galerie, horaires et accès.
**Aucune commande ni paiement en ligne** : la seule action est la réservation, qui ouvre WhatsApp avec un message prérempli.

## Lancer le projet

```bash
npm install
npm run dev
```

## Adapter le site à un client

Tout le contenu est dans `content/`, aucun texte n'est écrit en dur dans les composants.

| Fichier | Contenu |
| --- | --- |
| `content/site.ts` | Nom, adresse, coordonnées GPS, téléphone, **numéro WhatsApp**, e-mail, horaires, liens du menu |
| `content/menu.ts` | La carte complète (catégories, plats, prix en MAD) |
| `content/dishes.ts` | Les assiettes du hero et du tapis tournant, commentaires clients |
| `content/gallery.ts` | Photos de la section « La maison » et de la galerie |

Ensuite : remplacer `app/icon.svg` et `LogoMark` (`components/shared/logo.tsx`) par le logo du client,
régler `NEXT_PUBLIC_SITE_URL`, et remplacer les photos d'illustration et les commentaires d'exemple
par de vrais contenus (voir `.agents/rules/04-contenu-et-legal.md`).

## Sections

1. **Hero** : titre, réservation WhatsApp, assiette principale + vignettes + commentaires synchronisés
   (d'après le composant shadcn-studio *hero-section-41*, `components/sections/hero-plates.tsx`).
2. **Les assiettes du moment** : tapis tournant interactif (d'après *sushi-conveyor-menu*,
   `components/ui/sushi-conveyor-menu.tsx`). La fenêtre d'une assiette propose « Réserver pour la goûter » sur WhatsApp.
3. **La maison**, 4. **La carte** (onglets), 5. **Galerie**, 6. **Nous trouver** (Google Maps, horaires, contact).

## Vérifications

```bash
npm run lint
npm run build
```
