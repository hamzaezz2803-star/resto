# Mouvement et animations

Chaque animation doit avoir une raison. Si on ne sait pas dire ce qu'elle explique, on la retire.

## Outils et responsabilités

| Outil | Usage autorisé |
| --- | --- |
| **GSAP** + `@gsap/react` (`useGSAP`) | Séquence d'ouverture du hero, révélation du tableau de la carte au défilement (ScrollTrigger). |
| **Motion** (`motion/react`) | Interactions d'interface : changement d'onglet de la carte, indicateur d'onglet, visionneuse de la galerie, apparition de l'en-tête. |
| **Lenis** | Défilement fluide global, synchronisé avec ScrollTrigger (`lenis.on("scroll", ScrollTrigger.update)` et `gsap.ticker`). |
| CSS (`transition`) | Survols et états des boutons, liens, cartes. |

Ne pas utiliser deux bibliothèques pour la même animation. Pas de nouvelle bibliothèque d'animation.

## Règles

- **Pas de parallaxe**, pas d'animation sur chaque section, pas d'animation qui se rejoue en boucle.
- Survols et micro-interactions : 150 ms maximum. Changements d'état d'interface : 200 ms maximum.
- Révélations au défilement (rares) : 450 ms maximum par élément, décalage de 40 à 60 ms entre éléments.
- Déplacements courts (16 px maximum) ; on anime `transform` et `opacity` uniquement.
- Easing : `power3.out` (GSAP) ou `[0.22, 1, 0.36, 1]` (Motion).
- **`prefers-reduced-motion: reduce`** : Lenis désactivé, séquences GSAP sautées (état final affiché directement),
  Motion configuré avec `MotionConfig reducedMotion="user"`. Utiliser le hook `usePrefersReducedMotion`.
- Le contenu doit être lisible sans JavaScript : l'état initial masqué n'est appliqué que par le JavaScript client.
- La logique d'animation vit dans `components/motion/` ou dans le composant client concerné, jamais dans une page serveur.
- Toujours nettoyer (`useGSAP` gère le contexte ; `lenis.destroy()` au démontage).
