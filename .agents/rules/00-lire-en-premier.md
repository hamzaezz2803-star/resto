# Règles du projet Pastrama (à lire avant toute modification)

Ces fichiers sont les règles permanentes du site vitrine de **Pastrama, Deli & Craft Burger** (Maarif, Casablanca).
Ils ne sont pas optionnels : toute modification du code, du contenu ou du design doit les respecter.

Ordre de lecture :

1. `01-identite-et-design.md` : direction artistique, palette, typographie, composants.
2. `02-mouvement.md` : animations (Motion, GSAP, Lenis), accessibilité du mouvement.
3. `03-code-et-architecture.md` : Next.js 16, TypeScript, structure des dossiers, conventions.
4. `04-contenu-et-legal.md` : textes, chiffres, photos, pages légales, formats marocains.
5. `05-performance-et-accessibilite.md` : Core Web Vitals, images, WCAG AA, checklist de mise en ligne.

Ces règles reprennent et précisent les règles générales de design et de contenu du studio
(`README-design.md`). En cas de conflit entre une demande ponctuelle et ces règles, les règles gagnent,
sauf décision explicite du client notée ici.

## Décisions prises

- **Site vitrine** (décision du client, 19 novembre 2026) : il présente le restaurant (maison, carte, galerie, avis,
  horaires et accès). **Pas de commande en ligne ni de formulaire.** La seule action est le bouton **« Réserver »**,
  qui ouvre WhatsApp (`site.whatsappUrl`, message prérempli vers le 06 78 84 81 81), via le composant `WhatsAppButton`.
- **Carte Google Maps affichée directement** (décision du client), en chargement différé (`loading="lazy"`).
- **Hero en vidéo** (décision du client) : vidéo d'ambiance en boucle, muette, au-dessus de la photo du hero,
  avec bouton pause. Désactivée si `prefers-reduced-motion` ou économie de données.
- **Pas de pages légales ni de mention de copyright** sur ce site (décision du client, 19 novembre 2026),
  bien que la règle studio les demande pour un site public. Ne pas les rajouter sans nouvelle demande du client.
- **Pas de parallaxe** ni d'animation sur chaque section (règle studio), même si le brief initial en mentionnait.
- **Avis** : section demandée par le client. On cite uniquement de vrais avis Google, mot pour mot, dans leur langue d'origine,
  avec le nom abrégé (prénom + initiale) et la note globale. Aucun avis inventé, reformulé ou note individuelle supposée.
  Règle studio : obtenir l'accord des auteurs avant la mise en ligne.
- **Pas de réseaux sociaux** dans le pied de page tant que les comptes officiels ne sont pas confirmés.
- Les photos actuelles viennent d'Unsplash (licence Unsplash) et sont **des illustrations**, signalées comme telles.
  Elles doivent être remplacées par les vraies photos du restaurant dès que possible.
