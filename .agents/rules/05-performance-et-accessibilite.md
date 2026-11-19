# Performance, accessibilité et mise en ligne

## Performance

- Objectifs : LCP < 2,5 s sur mobile 4G, CLS < 0,1, INP < 200 ms.
- Images : `next/image` uniquement, `sizes` renseigné, `preload` seulement sur l'image du hero,
  chargement différé pour le reste. Formats AVIF/WebP via `images.formats`. Qualités autorisées : `[60, 75]`.
- Polices : `next/font`, `display: swap`, sous-ensemble `latin`.
- Le JavaScript client reste limité aux îlots interactifs. GSAP ScrollTrigger enregistré une seule fois.
- La carte Google Maps est en `loading="lazy"`. La vidéo du hero ne bloque pas le LCP (la photo reste l'image affichée en premier).
- Aucun débordement horizontal (`overflow-x: clip` sur `body` interdit comme rustine : corriger la cause).

## Accessibilité (WCAG 2.2 AA)

- Contrastes : 4,5:1 pour le texte, 3:1 pour les grands textes et éléments d'interface. Vérifier chaque nouvelle paire de couleurs.
- Navigation complète au clavier : lien d'évitement « Aller au contenu », ordre logique, focus visible, Échap ferme les fenêtres.
- Visionneuse de la galerie : flèches gauche/droite, Échap, focus piégé dans la fenêtre puis rendu au déclencheur.
- Onglets de la carte : rôles `tablist`/`tab`/`tabpanel`, navigation aux flèches.
- Zones cliquables de 44 × 44 px minimum.
- Erreurs de formulaire annoncées (`aria-invalid`, `aria-describedby`, `role="alert"`).
- `lang="fr"` sur `<html>`.

## Checklist avant mise en ligne

- [ ] Aucun dégradé violet, aucun bouton en pilule, aucun emoji comme icône.
- [ ] Titre principal précis ; aucun faux avis, faux chiffre ni affirmation non prouvée.
- [ ] Aucun tiret cadratin dans les textes visibles (`grep -r "—" content app components`).
- [ ] Animations limitées, `prefers-reduced-motion` respecté.
- [ ] Contraste, clavier et `alt` vérifiés.
- [ ] Testé à 360 px, 768 px, 1280 px et plus.
- [ ] Photos authentiques ou sous licence, `docs/licences.md` à jour ; photos d'illustration remplacées si possible.
- [ ] Aucun lien « Commander » ; « Réserver » ouvre uniquement WhatsApp.
- [ ] Vidéo du hero : pause accessible, absente en mouvement réduit, fichier hébergé de façon fiable.
- [ ] Avis cités mot pour mot, accord des auteurs obtenu.
- [ ] Favicon en place, `NEXT_PUBLIC_SITE_URL` réglé sur le domaine réel.
- [ ] `npm run lint` et `npm run build` sans erreur, console du navigateur propre.
