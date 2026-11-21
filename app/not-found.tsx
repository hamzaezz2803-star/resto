import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80svh] flex-col justify-center pt-32 pb-20">
      <h1 className="type-display text-[clamp(3rem,10vw,7rem)]">Page introuvable</h1>
      <p className="mt-6 max-w-[48ch] text-lg text-moss">
        Cette adresse ne correspond à aucune page du site. La carte, les horaires et la réservation sont sur l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Retour à l&apos;accueil</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/#carte">Voir la carte</Link>
        </Button>
      </div>
    </section>
  );
}
