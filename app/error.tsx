"use client";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="container-page flex min-h-[80svh] flex-col justify-center pt-32 pb-20">
      <h1 className="type-display text-[clamp(3rem,10vw,6rem)]">La page n&apos;a pas pu s&apos;afficher</h1>
      <p className="mt-6 max-w-[52ch] text-lg text-moss">
        Un problème technique a interrompu le chargement. Réessayez ; si cela persiste, appelez-nous au{" "}
        <a href={`tel:${site.phone.e164}`} className="font-semibold underline underline-offset-4">
          {site.phone.display}
        </a>
        .
      </p>
      <div className="mt-8">
        <Button size="lg" onClick={reset}>
          Réessayer
        </Button>
      </div>
    </section>
  );
}
