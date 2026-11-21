"use client";

/**
 * Carrousel minimal (Embla), repris du composant « shadcn-studio hero-section-41 ».
 * Utilisé par le hero pour synchroniser l'assiette principale, les vignettes et les commentaires.
 */

import { createContext, useCallback, useContext, useEffect, type ComponentProps, type KeyboardEvent } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselProps = {
  opts?: UseCarouselParameters[0];
  plugins?: UseCarouselParameters[1];
  setApi?: (api: CarouselApi) => void;
};

const CarouselContext = createContext<{ carouselRef: ReturnType<typeof useEmblaCarousel>[0] } | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel doit être utilisé dans <Carousel />");
  return context;
}

export function Carousel({ opts, setApi, plugins, className, children, ...props }: ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: "x" }, plugins);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api?.scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        api?.scrollNext();
      }
    },
    [api],
  );

  useEffect(() => {
    if (api && setApi) setApi(api);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider value={{ carouselRef }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carrousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: ComponentProps<"div">) {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div className={cn("-ml-4 flex", className)} {...props} />
    </div>
  );
}

export function CarouselItem({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      role="group"
      aria-roledescription="diapositive"
      data-slot="carousel-item"
      className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
      {...props}
    />
  );
}
