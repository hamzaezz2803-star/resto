"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { navLinks, site } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="bg-transparent lg:hidden" aria-label="Ouvrir le menu">
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="dark w-full gap-0 bg-forest p-0 text-porcelain sm:max-w-md [&>[data-slot=sheet-close]]:top-4 [&>[data-slot=sheet-close]]:right-4 [&>[data-slot=sheet-close]]:size-11 [&>[data-slot=sheet-close]]:text-porcelain [&>[data-slot=sheet-close]]:hover:bg-porcelain/10">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Navigation du site {site.name}</SheetDescription>
        <nav aria-label="Navigation mobile" className="flex flex-1 flex-col px-6 pt-24 pb-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-forest-line">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-display flex min-h-16 items-center text-[2.5rem] transition-colors duration-150 hover:text-brass"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <WhatsAppButton size="lg" />
            <a
              href={`tel:${site.phone.e164}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 text-on-forest-muted hover:text-porcelain"
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
