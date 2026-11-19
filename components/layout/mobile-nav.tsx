"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav({ overHero }: { overHero: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("lg:hidden", overHero && "text-paper hover:bg-paper/15 hover:text-paper")}
          aria-label="Ouvrir le menu"
        >
          <Menu className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 bg-smoke p-0 text-paper sm:max-w-md on-smoke [&>[data-slot=sheet-close]]:top-4 [&>[data-slot=sheet-close]]:right-4 [&>[data-slot=sheet-close]]:size-11 [&>[data-slot=sheet-close]]:text-paper [&>[data-slot=sheet-close]]:hover:bg-paper/10">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Navigation du site Pastrama</SheetDescription>
        <nav aria-label="Navigation mobile" className="flex flex-1 flex-col px-6 pt-24 pb-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-paper/15">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-heading flex min-h-16 items-center text-[2.5rem] transition-colors duration-150 hover:text-mustard"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Button asChild size="lg" onClick={() => setOpen(false)}>
              <Link href="/#reserver">Réserver une table</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-paper/40 bg-transparent text-paper hover:bg-paper hover:text-smoke"
            >
              <a href={site.orderUrl} target="_blank" rel="noopener noreferrer">
                Commander en ligne
                <ExternalLink aria-hidden="true" />
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            </Button>
            <a
              href={`tel:${site.phone.e164}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 text-on-smoke-muted hover:text-paper"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone.display}
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
