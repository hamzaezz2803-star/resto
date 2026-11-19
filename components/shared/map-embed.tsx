import { site } from "@/content/site";

/**
 * Carte Google Maps affichée directement (demande du client).
 * Chargement différé : l'iframe n'est chargée qu'à l'approche de la section.
 * Note : Google peut déposer ses propres cookies via cette carte.
 */
export function MapEmbed() {
  return (
    <iframe
      title="Plan d'accès Google Maps vers Pastrama, rue Oumayma Essayeh, Maarif, Casablanca"
      src={site.mapEmbedUrl}
      className="absolute inset-0 size-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
