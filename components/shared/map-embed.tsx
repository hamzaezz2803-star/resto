"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

/**
 * La carte Google Maps ne se charge qu'après un clic : aucun cookie tiers n'est déposé avant.
 * Voir la politique de cookies.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Plan d'accès Google Maps vers Pastrama, rue Oumayma Essayeh, Maarif"
        src={site.mapEmbedUrl}
        className="size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="on-smoke flex size-full flex-col items-start justify-end gap-4 bg-smoke p-6 text-paper sm:p-8">
      <MapPin className="size-8 text-mustard" aria-hidden="true" />
      <p className="max-w-[40ch] text-on-smoke-muted">
        La carte est fournie par Google Maps. En l&apos;affichant, vous acceptez que Google dépose des cookies.
      </p>
      <Button
        variant="outline"
        onClick={() => setLoaded(true)}
        className="border-paper/50 bg-transparent text-paper hover:bg-paper hover:text-smoke"
      >
        Afficher la carte
      </Button>
    </div>
  );
}
