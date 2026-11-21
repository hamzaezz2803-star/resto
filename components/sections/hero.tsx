import Link from "next/link";
import { MapPin } from "lucide-react";
import { HeroMotion } from "@/components/motion/hero-motion";
import { HeroPlates, type HeroPlateView } from "@/components/sections/hero-plates";
import { OpenStatusText } from "@/components/shared/open-status";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Button } from "@/components/ui/button";
import { dishById, heroPlates } from "@/content/dishes";
import { site } from "@/content/site";
import { formatPrice } from "@/lib/format";

export function Hero() {
  const plates: HeroPlateView[] = heroPlates.map((hp) => {
    const dish = dishById(hp.dishId);
    return {
      id: dish.id,
      name: dish.name,
      price: formatPrice(dish.price),
      image: dish.image,
      comment: hp.comment,
      guest: hp.guest,
    };
  });

  const intro = (
    <div className="flex flex-col max-lg:items-center max-lg:text-center">
      <h1 id="hero-title" className="type-display text-[clamp(3rem,7.4vw,6.5rem)]">
        <span className="block overflow-hidden pb-[0.1em]">
          <span data-hero-line className="block">Cuisine du marché,</span>
        </span>
        <span className="block overflow-hidden pb-[0.1em]">
          <span data-hero-line className="block">café de spécialité.</span>
        </span>
      </h1>
      <p data-hero-fade className="mt-6 max-w-[50ch] text-lg text-pretty text-moss md:text-xl">
        {site.name} vous reçoit du petit-déjeuner au dîner, à {site.address.city}. Consultez la carte, puis réservez
        votre table en un message WhatsApp.
      </p>
      <div data-hero-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
        <WhatsAppButton size="lg" />
        <Button asChild size="lg" variant="secondary">
          <Link href="/#carte">Voir la carte</Link>
        </Button>
      </div>
      <ul data-hero-fade className="mt-8 flex flex-col gap-2 text-[0.9375rem] text-moss sm:flex-row sm:gap-6">
        <li>
          <OpenStatusText />
        </li>
        <li>
          <Link href="/#infos" className="inline-flex items-center gap-2 underline-offset-4 hover:text-forest hover:underline">
            <MapPin className="size-4" aria-hidden="true" />
            {site.address.street}, {site.address.city}
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-[4.5rem]">
      <HeroMotion className="container-page py-12 sm:py-16 lg:py-20">
        <HeroPlates plates={plates} intro={intro} />
      </HeroMotion>
    </section>
  );
}
