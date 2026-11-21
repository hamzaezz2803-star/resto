# Identité visuelle et design system

## Concept : « la table vue d'en haut »

Un restaurant et café présenté comme une table dressée : les assiettes, toujours rondes et vues du dessus,
sont le motif de tout le site (hero, vignettes, tapis tournant, médaillon de la maison, monogramme).
Palette porcelaine et vert bouteille, détails en laiton : l'élégance d'une brasserie, sans le cliché crème et terracotta.

- **Un seul élément spectaculaire** : le tapis tournant « Les assiettes du moment », sur fond vert bouteille.
  Le reste de la page reste calme : beaucoup d'air, alignement à gauche, une seule couleur d'accent.
- Typographie d'affiche didone (Bodoni Moda), comme une carte de restaurant imprimée.

## Palette (définie une seule fois dans `app/globals.css`)

| Jeton | Valeur | Rôle |
| --- | --- | --- |
| `--porcelain` | `#EEF1EC` | Fond principal |
| `--porcelain-deep` | `#E1E7DF` | Fonds secondaires, boutons secondaires |
| `--forest` | `#10302A` | Texte principal, bouton principal, sections sombres |
| `--forest-soft` | `#1A4239` | Surfaces sur fond sombre |
| `--moss` | `#4B5E56` | Texte secondaire sur porcelaine (contraste 6,3:1) |
| `--brass` | `#C99B4F` | Accent sur fond sombre (contraste 6,1:1 avec `--forest`), bouton principal en section sombre |
| `--brass-deep` | `#7F5C1D` | Accent sur fond clair : prix, état actif (contraste 5,6:1) |
| `--line` | `#CDD7CF` | Bordures et séparateurs |
| `--tier-1` à `--tier-5` | | Liseré des assiettes selon la gamme de prix (toujours avec une légende texte) |

Les sections sombres utilisent la classe `dark` (variante personnalisée) : les jetons shadcn (`background`,
`foreground`, `muted-foreground`, `primary`...) y sont redéfinis. Dans un composant, utiliser `var(--foreground)`
et non `var(--color-foreground)` (ce dernier est figé à la racine).

Interdits : dégradé décoratif, glassmorphism, couleur en dur dans un composant (sauf le blanc des assiettes du tapis).

## Typographie

- **Bodoni Moda** (OFL), graisse 500, taille optique automatique : titres (`type-display`, `type-heading`).
- **Manrope** (OFL) : texte courant et interface.
- Texte courant 16 px minimum, 18 px pour les introductions. Lignes de moins de 70 caractères.
- Titres en casse normale ; pas d'étiquette en capitales au-dessus des titres ; pas de mot isolé mis en couleur.

## Composants

- Boutons **en pilule** (`rounded-full`, rappel des assiettes). Hauteur 44 px minimum, 48 px pour l'action principale.
- Un seul bouton principal par écran (vert bouteille sur clair, laiton sur sombre). Les autres : `secondary` ou `outline`.
- Cartes et images : rayon 1 rem à 2 rem. Photos de plats : rondes.
- Icônes : Lucide uniquement. Pas d'emoji.

## Mise en page

- Mobile d'abord. Conteneur max 1280 px (`container-page`), gouttière 20 px mobile, 32 px tablette.
- Sections : `py-20` mobile, `py-28` ordinateur. Un seul `<h1>` par page.
