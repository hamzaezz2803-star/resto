import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Monogramme rond (une assiette vue du dessus, une feuille d'olivier). À remplacer par le logo du client. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-9 shrink-0", className)}>
      <circle cx="32" cy="32" r="32" className="fill-forest" />
      <circle cx="32" cy="32" r="21" fill="none" strokeWidth="2.5" className="stroke-brass" />
      <path d="M32 18c6 4 8.5 9 8 15-.4 5-3.4 9.6-8 13-4.6-3.4-7.6-8-8-13-.5-6 2-11 8-15Z" className="fill-brass" />
      <path d="M32 24v20" strokeWidth="2" strokeLinecap="round" className="stroke-forest" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-h-11 items-center gap-3 rounded-full", className)}
      aria-label={`${site.name}, retour à l'accueil`}
    >
      <LogoMark />
      <span className="type-heading text-[1.6rem] leading-none">{site.name}</span>
    </Link>
  );
}
