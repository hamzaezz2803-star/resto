"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export type HeroPlateView = {
  id: string;
  name: string;
  price: string;
  image: { src: string; alt: string };
  comment: string;
  guest: { name: string; avatar: string };
};

/**
 * Hero inspiré de « hero-section-41 » : assiette principale, vignettes et commentaires
 * synchronisés (trois carrousels Embla). Défilement automatique avec bouton pause,
 * coupé si l'utilisateur demande moins d'animations.
 */
export function HeroPlates({ plates, intro }: { plates: HeroPlateView[]; intro: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [commentsApi, setCommentsApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay] = useState(() => Autoplay({ delay: 3800, stopOnInteraction: false, playOnInit: false }));

  // Les trois carrousels restent alignés, quel que soit celui que l'on manipule.
  useEffect(() => {
    const apis = [mainApi, thumbApi, commentsApi];
    const cleanups: Array<() => void> = [];
    apis.forEach((api) => {
      if (!api) return;
      const onSelect = () => {
        const index = api.selectedScrollSnap();
        setCurrent(index);
        apis.forEach((other) => {
          if (other && other !== api && other.selectedScrollSnap() !== index) other.scrollTo(index);
        });
      };
      api.on("select", onSelect);
      cleanups.push(() => api.off("select", onSelect));
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [mainApi, thumbApi, commentsApi]);

  useEffect(() => {
    if (!mainApi) return;
    if (reduced || paused) autoplay.stop();
    else autoplay.play();
  }, [mainApi, autoplay, reduced, paused]);

  const goTo = useCallback((index: number) => mainApi?.scrollTo(index), [mainApi]);
  const plate = plates[current];

  return (
    <div className="flex flex-col gap-14 md:gap-16">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">{intro}</div>

        <div className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none">
          {/* Sous-assiette : un anneau laiton fixe, l'assiette change dessus */}
          <div aria-hidden="true" className="absolute inset-[-3%] rounded-full border border-brass" />
          <div aria-hidden="true" className="absolute inset-[3%] rounded-full bg-porcelain-deep shadow-[inset_0_2px_14px_rgb(16_48_42/0.14)]" />
          <Carousel
            setApi={setMainApi}
            plugins={[autoplay]}
            opts={{ loop: true }}
            aria-label="Assiettes de la maison"
            className="relative"
          >
            <CarouselContent>
              {plates.map((p, i) => (
                <CarouselItem key={p.id} aria-label={`${i + 1} sur ${plates.length} : ${p.name}`}>
                  <div className="relative mx-auto my-[6%] aspect-square w-[88%] overflow-hidden rounded-full shadow-[0_30px_60px_-28px_rgb(16_48_42/0.6)]">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      preload={i === 0}
                      quality={75}
                      sizes="(min-width: 1024px) 36vw, 88vw"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Étiquette de l'assiette affichée */}
          <p
            aria-live="polite"
            className="absolute -bottom-4 left-1/2 flex max-w-[92%] -translate-x-1/2 items-center gap-3 rounded-full border border-line bg-card px-5 py-2.5 text-[0.9375rem] font-semibold whitespace-nowrap shadow-[0_12px_28px_-16px_rgb(16_48_42/0.6)]"
          >
            <span className="truncate">{plate.name}</span>
            <span className="font-medium text-moss tabular-nums">{plate.price}</span>
          </p>

          {!reduced ? (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? "Reprendre le défilement des assiettes" : "Mettre en pause le défilement des assiettes"}
              className="absolute top-1 right-1 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-card text-moss shadow-sm transition-colors duration-150 hover:text-forest"
            >
              {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
            </button>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <Carousel
          setApi={setThumbApi}
          opts={{ loop: true }}
          aria-label="Choisir une assiette"
          className="relative w-full max-lg:order-2 lg:col-span-7"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />
          <CarouselContent className="my-1">
            {plates.map((p, i) => (
              <CarouselItem key={p.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3 xl:basis-1/4">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Afficher : ${p.name}`}
                  aria-current={current === i ? "true" : undefined}
                  className="group relative flex h-33 w-full cursor-pointer items-center justify-center rounded-xl"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 161 92"
                    fill="none"
                    className={cn(
                      "absolute bottom-0 w-full max-w-40 transition-colors duration-150",
                      current === i ? "text-brass-deep" : "text-line group-hover:text-moss",
                    )}
                  >
                    <path
                      d="M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z"
                      stroke="currentColor"
                      strokeWidth={current === i ? 1.6 : 1}
                    />
                  </svg>
                  <span className="relative size-24 overflow-hidden rounded-full shadow-[0_10px_20px_-12px_rgb(16_48_42/0.6)]">
                    <Image src={p.image.src} alt="" fill quality={60} sizes="96px" className="object-cover" />
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Carousel setApi={setCommentsApi} opts={{ loop: true }} aria-label="Ce qu'en disent les clients" className="w-full lg:col-span-5">
          <CarouselContent>
            {plates.map((p) => (
              <CarouselItem key={p.id}>
                <figure className="flex min-h-16 items-center gap-4">
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-full border-4 border-card shadow-md">
                    <Image src={p.guest.avatar} alt="" fill quality={60} sizes="48px" className="object-cover" />
                  </span>
                  <span aria-hidden="true" className="hidden h-8 w-0.5 shrink-0 rounded-full bg-brass sm:block" />
                  <div>
                    <blockquote className="text-pretty">« {p.comment} »</blockquote>
                    <figcaption className="mt-1 text-sm text-moss">{p.guest.name}</figcaption>
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
