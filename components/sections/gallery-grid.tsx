"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { GalleryImage } from "@/content/gallery";
import { cn } from "@/lib/utils";

// Composition de la mosaïque (ordinateur) : certaines photos occupent deux cases.
// 8 photos : 3 rangées pleines sur ordinateur (4 colonnes), 5 rangées pleines sur mobile (2 colonnes).
const spans = ["col-span-2 md:row-span-2", "", "", "", "", "col-span-2", "", ""];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? images[index] : null;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <>
      <ul className="mt-12 grid auto-rows-[44vw] grid-cols-2 gap-2 sm:auto-rows-[30vw] md:auto-rows-[15rem] md:grid-cols-4 md:gap-3">
        {images.map((img, i) => (
          <li key={img.id} className={cn("relative", spans[i % spans.length])}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block size-full overflow-hidden rounded-lg bg-smoke"
              aria-label={`Agrandir la photo : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                quality={60}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-[transform,opacity] duration-150 ease-out group-hover:scale-[1.02] group-hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          showCloseButton={false}
          onKeyDown={onKeyDown}
          className="on-smoke flex h-[100dvh] max-h-none w-screen max-w-none flex-col gap-0 rounded-none bg-smoke p-0 text-paper ring-0 sm:max-w-none"
        >
          <DialogTitle className="sr-only">Galerie photo</DialogTitle>
          <DialogDescription className="sr-only">
            Utilisez les flèches gauche et droite pour changer de photo, Échap pour fermer.
          </DialogDescription>

          <div className="flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">
            <p className="tabular-nums text-on-smoke-muted" aria-live="polite">
              {index !== null ? `${index + 1} / ${images.length}` : null}
            </p>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="text-paper hover:bg-paper/10 hover:text-paper" aria-label="Fermer la galerie">
                <X className="size-6" aria-hidden="true" />
              </Button>
            </DialogClose>
          </div>

          <div className="relative min-h-0 flex-1">
            <AnimatePresence initial={false} mode="popLayout">
              {current ? (
                <motion.div
                  key={current.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Image src={current.src} alt={current.alt} fill quality={75} sizes="100vw" className="object-contain" />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <Button variant="ghost" size="icon" onClick={() => go(-1)} className="text-paper hover:bg-paper/10 hover:text-paper" aria-label="Photo précédente">
              <ChevronLeft className="size-6" aria-hidden="true" />
            </Button>
            <p className="line-clamp-2 text-center text-on-smoke-muted">{current?.alt}</p>
            <Button variant="ghost" size="icon" onClick={() => go(1)} className="text-paper hover:bg-paper/10 hover:text-paper" aria-label="Photo suivante">
              <ChevronRight className="size-6" aria-hidden="true" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
