"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import { gsap, ScrollTrigger } from "@/components/motion/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Défilement fluide (Lenis) synchronisé avec GSAP ScrollTrigger,
 * et configuration Motion respectant prefers-reduced-motion.
 */
export function MotionProviders({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.05, anchors: { offset: -72 } });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [reduced]);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
