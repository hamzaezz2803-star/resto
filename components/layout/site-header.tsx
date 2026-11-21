"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "@/components/shared/logo";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

/** En-tête fixe : transparent en haut de page, fond porcelaine et filet dès qu'on défile. */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > 560 && y > prev);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b text-forest transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "border-line bg-porcelain/95 shadow-[0_8px_24px_-18px_rgb(16_48_42/0.45)] backdrop-blur-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 text-[0.9375rem] font-medium text-moss transition-colors duration-150 hover:bg-porcelain-deep hover:text-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton label="Réserver" className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
