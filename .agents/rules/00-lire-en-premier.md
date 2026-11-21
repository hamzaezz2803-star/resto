# Règles du projet (à lire avant toute modification)

Ce dépôt est un **modèle de site vitrine pour restaurants et cafés**, présenté avec une marque fictive
(**Maison Olive, restaurant et café**). Il sert à démarcher des établissements : chaque livraison client
se fait en remplaçant le contenu de `content/` (voir `README.md`).

Ordre de lecture :

1. `01-identite-et-design.md` : direction artistique, palette, typographie, composants.
2. `02-mouvement.md` : animations (Motion, GSAP, Lenis), accessibilité du mouvement.
3. `03-code-et-architecture.md` : Next.js 16, TypeScript, structure des dossiers, conventions.
4. `04-contenu-et-legal.md` : textes, chiffres, photos, formats marocains.
5. `05-performance-et-accessibilite.md` : Core Web Vitals, images, WCAG AA, checklist de mise en ligne.

## Décisions prises

- **Nom générique** (décision du 21 novembre 2026) : le site n'est plus celui de Pastrama. Le nom, l'adresse,
  le téléphone et le numéro WhatsApp sont des exemples centralisés dans `content/site.ts`.
- **Site vitrine uniquement** : présentation, consultation de la carte et réservation. **Pas de commande, de panier
  ni de paiement en ligne, pas de formulaire.** Toute action de réservation ouvre WhatsApp (`site.whatsappUrl`,
  ou `site.whatsappAbout(plat)` depuis la fenêtre d'une assiette), via `WhatsAppButton` ou un lien équivalent.
- **Sections** : hero à assiettes synchronisées (d'après shadcn-studio *hero-section-41*), tapis tournant
  « Les assiettes du moment » (d'après *sushi-conveyor-menu*), la maison, la carte, galerie, « Nous trouver ».
- **Carte Google Maps affichée directement**, en chargement différé (`loading="lazy"`).
- **Pas de pages légales** pour la démonstration ; à ajouter pour un client si la loi ou le client l'exigent.
- **Commentaires clients d'exemple** dans le hero (démonstration). Pour un vrai client : uniquement de vrais avis.
- Les photos viennent d'Unsplash (licence Unsplash) et sont **des illustrations**, signalées comme telles.
