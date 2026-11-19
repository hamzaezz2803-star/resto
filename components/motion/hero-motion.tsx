"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, EASE } from "@/components/motion/gsap";

/**
 * Séquence d'ouverture du hero (unique moment orchestré de la page).
 * Cibles : [data-hero-image], [data-hero-line] (dans un masque overflow-hidden), [data-hero-fade].
 * L'état masqué initial est posé en CSS uniquement si JS actif et mouvement autorisé (voir globals.css).
 */
export function HeroMotion({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: EASE } });
        tl.fromTo("[data-hero-image]", { scale: 1.06 }, { scale: 1, duration: 1.4, ease: "power2.out" }, 0)
          .fromTo(
            "[data-hero-line]",
            // y: 0 écrase la translation posée en CSS avant hydratation (lue par GSAP comme un décalage en px).
            { y: 0, yPercent: 105 },
            { y: 0, yPercent: 0, duration: 0.45, stagger: 0.06 },
            0.15,
          )
          .fromTo(
            "[data-hero-fade]",
            { y: 12, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.05 },
            0.45,
          );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
