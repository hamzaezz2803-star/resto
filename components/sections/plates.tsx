"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import SushiConveyorMenu, { type ConveyorDish } from "@/components/ui/sushi-conveyor-menu";
import { Button } from "@/components/ui/button";
import { dishes } from "@/content/dishes";
import { site } from "@/content/site";
import { formatPrice } from "@/lib/format";

const items: ConveyorDish[] = dishes.map((d) => ({
  id: d.id,
  name: d.name,
  description: d.description,
  price: formatPrice(d.price),
  tier: d.tier,
  details: d.details,
  // Image servie par le CDN Unsplash à la bonne taille (le tapis n'utilise pas next/image).
  image: `${d.image.src}?w=480&h=480&fit=crop&q=60&auto=format`,
}));

const legend = {
  1: "moins de 40 MAD",
  2: "40 à 80",
  3: "80 à 100",
  4: "100 à 150",
  5: "plus de 150",
};

/** « Les assiettes » : le comptoir tournant, seul élément spectaculaire de la page. */
export function Plates() {
  return (
    <div id="assiettes" className="dark scroll-mt-0">
      <SushiConveyorMenu
        aria-labelledby="assiettes-title"
        headingId="assiettes-title"
        items={items}
        legend={legend}
        heading="Les assiettes du moment"
        caption="Survolez une assiette pour l'arrêter, faites glisser le tapis, touchez une assiette pour la voir de près."
        autoplay
        cta={{
          label: "Réserver pour la goûter",
          href: (item) => site.whatsappAbout(item.name),
          icon: <MessageCircle aria-hidden="true" className="size-4" />,
        }}
        action={
          <Button asChild size="lg" variant="outline" className="border-forest-line bg-transparent hover:bg-forest-soft">
            <Link href="/#carte">Voir toute la carte</Link>
          </Button>
        }
      />
    </div>
  );
}
