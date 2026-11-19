"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroVideo } from "@/content/gallery";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type NetworkInformation = { saveData?: boolean };
const noop = () => () => {};
const saveDataSnapshot = () =>
  Boolean((navigator as Navigator & { connection?: NetworkInformation }).connection?.saveData);

/**
 * Vidéo d'ambiance du hero, posée au-dessus de la photo (qui reste l'image affichée en premier).
 * Pas de vidéo si l'utilisateur limite les animations ou économise ses données.
 * Bouton pause obligatoire (WCAG 2.2.2) car la vidéo boucle.
 */
export function HeroVideo() {
  const reduced = usePrefersReducedMotion();
  const saveData = useSyncExternalStore(noop, saveDataSnapshot, () => true);
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  if (reduced || saveData) return null;

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-200",
          visible ? "opacity-100" : "opacity-0",
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setVisible(true)}
      >
        <source src={heroVideo.large} type="video/mp4" media="(min-width: 1024px)" />
        <source src={heroVideo.small} type="video/mp4" />
      </video>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-label={paused ? "Lire la vidéo d'ambiance" : "Mettre la vidéo d'ambiance en pause"}
        className="absolute right-4 bottom-4 z-20 bg-smoke/50 text-paper hover:bg-smoke/80 hover:text-paper sm:right-6 sm:bottom-6"
      >
        {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </Button>
    </>
  );
}
