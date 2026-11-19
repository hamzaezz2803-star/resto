import Link from "next/link";
import { cn } from "@/lib/utils";

/** Logotype texte. À remplacer par le logo officiel vectoriel quand il sera fourni. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "type-heading inline-flex min-h-11 items-center text-[1.75rem] leading-none tracking-tight",
        className,
      )}
      aria-label="Pastrama, retour à l'accueil"
    >
      Pastrama
    </Link>
  );
}
