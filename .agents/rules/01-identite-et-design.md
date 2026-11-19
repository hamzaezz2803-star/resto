# Identité visuelle et design system

## Concept : « la planche du deli »

Pastrama se présente comme un *New York deli, Casablanca style* : pastrami fumé 12 heures, pain au levain maison,
burgers craft. Le site emprunte au vocabulaire du deli new-yorkais (tableau des prix, papier boucher, moutarde,
fumée) sans tomber dans le pastiche rétro.

- **Un seul élément audacieux** : la carte présentée comme un tableau de deli sombre (fond fumé, prix moutarde,
  lignes de points entre le plat et le prix). Le reste de la page reste calme et discipliné.
- Typographie de display condensée et lourde, utilisée comme matière graphique (titres très grands, serrés).
- Photographie plein cadre, recadrée serré sur la nourriture. Pas de photo d'intérieur qui ne serait pas celle du restaurant.

## Palette (définie une seule fois dans `app/globals.css`)

| Jeton | Valeur | Rôle |
| --- | --- | --- |
| `--paper` | `#F7F3EC` | Fond principal (papier de deli) |
| `--smoke` | `#1F1A16` | Fond des sections sombres, texte principal |
| `--ink-soft` | `#5A4F45` | Texte secondaire sur papier (contraste 7,4:1) |
| `--pastrami` | `#A3271F` | Couleur primaire, bouton principal (contraste 6,6:1 avec le papier) |
| `--mustard` | `#E9A825` | Accent : prix et détails sur fond fumé (contraste 8,6:1 avec `--smoke`) |
| `--rule` | `#DDD3C5` | Bordures et séparateurs sur papier |

Statuts : succès `#2E6B3A`, attention `#8A5A00`, erreur `#B3261E`. Toujours accompagnés d'un libellé ou d'une icône.

Interdits : dégradé violet, dégradé décoratif, glassmorphism, couleur en dur dans un composant
(toujours une classe Tailwind liée aux jetons : `bg-paper`, `text-smoke`, `text-mustard`...).
Le seul dégradé autorisé est le voile sombre sur la photo du hero, pour la lisibilité du texte.

## Typographie

- **Bricolage Grotesque** (OFL), largeur condensée, graisse 700 à 800 : titres et prix. Variable `--font-display`.
- **Geist** (OFL) : texte courant et interface. Variable `--font-sans`.
- Chargées via `next/font/google` (auto-hébergées au build). Pas d'autre famille.
- Texte courant 16 px minimum (18 px pour les paragraphes d'introduction), libellés 14 px minimum.
- Lignes de texte de moins de 70 caractères (`max-w-prose` ou `max-w-[60ch]`).
- Titres de section en casse normale (pas de petites étiquettes en capitales au-dessus des titres).
- On ne met pas un seul mot d'un titre en couleur ou en italique pour « l'accentuer ».

## Composants

- Boutons : rayon 8 px (`rounded-lg`), **jamais en pilule**. Hauteur 44 px minimum (48 px pour l'action principale).
- **Un seul bouton principal par écran** (`variant="default"`, rouge pastrami). Les autres sont `outline` ou `ghost`.
- États survol, focus (anneau moutarde ou pastrami de 3 px, visible) et désactivé obligatoires.
- Icônes : **Lucide uniquement**, `aria-hidden` si accompagnées de texte, `aria-label` sur le bouton si seules.
- Pas d'emoji comme icône.
- Formulaires : libellé visible au-dessus du champ, message d'erreur sous le champ (`aria-describedby`),
  bouton désactivé pendant l'envoi.
- Composants de base : shadcn/ui (`components/ui`), personnalisés par les jetons, jamais réécrits à la main en double.

## Mise en page

- Mobile d'abord. Points de rupture Tailwind par défaut (`sm` 640, `md` 768, `lg` 1024, `xl` 1280).
- Gouttière de 20 px sur mobile, 32 px sur tablette, conteneur max 1280 px (`container-page`).
- Espacements en multiples de 4 px. Sections : `py-20` mobile, `py-28` ordinateur.
- Alignement à gauche par défaut. Le centré est réservé aux éléments courts (note Google, appel à l'action final).
- Un seul `<h1>` par page.
