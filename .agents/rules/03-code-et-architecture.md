# Code et architecture

## Pile technique

Next.js 16 (App Router, `cacheComponents` activé), React 19, TypeScript strict, Tailwind CSS 4, shadcn/ui (Radix),
Motion, GSAP + ScrollTrigger, Lenis, Lucide React. Déploiement sur Vercel.

**Avant d'écrire du code Next.js, lire le guide concerné dans `node_modules/next/dist/docs/`** : cette version
diffère des versions connues (ex. `preload` remplace `priority` sur `next/image`, `images.qualities` obligatoire,
API de requête asynchrones, `new Date()` interdit pendant le prérendu d'un composant serveur).

Aucune dépendance ajoutée sans justification. Pas de doublon de fonctionnalité (ex. `cn` fourni par shadcn,
donc pas de `clsx` ni `tailwind-merge`).

## Structure

```
app/                     routes (pages serveur par défaut), metadata, sitemap, robots, icônes
components/
  ui/                    composants shadcn (ne pas modifier sans raison)
  layout/                en-tête, pied de page, navigation mobile
  sections/              une section de la page d'accueil par fichier
  motion/                fournisseurs et utilitaires d'animation (Lenis, révélations)
  shared/                petits composants réutilisables (titre de section, conteneur, prix...)
content/                 tous les textes et données (carte, horaires, coordonnées) typés
lib/                     utilitaires purs (formats, horaires, utils)
docs/                    licences et notes de projet
.agents/rules/           ces règles
```

## Conventions

- Composants en `PascalCase`, fichiers en `kebab-case.tsx`, hooks `useQuelqueChose`.
- **Composant serveur par défaut.** `"use client"` uniquement pour l'état, les effets, les événements ou les animations,
  et le plus bas possible dans l'arbre (îlots clients).
- Les données ne sont jamais écrites en dur dans un composant : elles viennent de `content/`.
- Types explicites pour les données (`MenuItem`, `OpeningHours`...). Pas de `any`.
- Calculs dépendant de l'heure (ouvert/fermé) uniquement côté client, avec le fuseau `Africa/Casablanca`.
- HTML sémantique : `header`, `nav`, `main`, `section` avec `aria-labelledby`, `footer`, listes pour les menus.
- Liens externes : `target="_blank"` + `rel="noopener noreferrer"` et mention visuelle ou textuelle.
- Pas de composant de plus de 200 lignes : découper.
- `npm run lint` et `npm run build` doivent passer sans erreur avant chaque livraison.
