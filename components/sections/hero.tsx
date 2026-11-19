import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { HeroMotion } from "@/components/motion/hero-motion";
import { OpenStatusText } from "@/components/shared/open-status";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/content/gallery";
import { site } from "@/content/site";

export function Hero() {
  const { rating, address } = site;

  return (
    <section aria-labelledby="hero-title" className="on-smoke relative isolate overflow-hidden bg-smoke text-paper">
      <HeroMotion className="relative flex min-h-[100svh] flex-col">
        <div className="absolute inset-0 -z-10" data-hero-image>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            preload
            quality={75}
            sizes="100vw"
            className="object-cover object-[60%_40%]"
          />
          {/* Voile fonctionnel : garantit le contraste du texte sur la photo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(31_26_22/0.94)_0%,rgb(31_26_22/0.6)_45%,rgb(31_26_22/0.3)_100%)]" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgb(31_26_22/0.7)_0%,rgb(31_26_22/0.35)_45%,transparent_75%)] md:block" />
        </div>

        <div className="container-page flex flex-1 flex-col justify-end pt-32 pb-10 md:pb-14">
          <h1 id="hero-title" className="type-display max-w-[14ch] text-[clamp(3.25rem,10.5vw,9.5rem)]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">Pastrami fumé</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">12 heures,</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">burgers craft.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-6 max-w-[52ch] text-lg text-pretty text-paper/90 md:text-xl">
            Le deli new-yorkais du Maarif, à Casablanca. Pain au levain maison, viandes préparées le jour même.
            Sur place, à emporter ou en livraison.
          </p>

          <div data-hero-fade className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#carte">Découvrir la carte</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/50 bg-transparent text-paper hover:bg-paper hover:text-smoke"
            >
              <Link href="/#infos">Horaires et accès</Link>
            </Button>
          </div>

          <ul
            data-hero-fade
            className="mt-12 grid gap-3 border-t border-paper/20 pt-6 text-[0.9375rem] text-paper/85 md:grid-cols-3 md:gap-6"
          >
            <li>
              <OpenStatusText />
            </li>
            <li>
              <a
                href={rating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:text-paper hover:underline"
              >
                <Star className="size-4 fill-mustard text-mustard" aria-hidden="true" />
                {rating.value.toLocaleString("fr-MA")} sur 5 sur {rating.source} ({rating.count.toLocaleString("fr-MA")} avis)
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            </li>
            <li>
              <Link href="/#infos" className="inline-flex items-center gap-2 underline-offset-4 hover:text-paper hover:underline">
                <MapPin className="size-4" aria-hidden="true" />
                {address.street}, {address.district}
              </Link>
            </li>
          </ul>
        </div>
      </HeroMotion>
    </section>
  );
}
