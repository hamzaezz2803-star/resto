import { ExternalLink, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={cn("size-4 text-pastrami", i < Math.round(value) && "fill-pastrami")} />
      ))}
    </span>
  );
}

/** Note globale Google et avis réels de clients. */
export function Reviews() {
  const { rating } = site;
  const value = rating.value.toLocaleString("fr-MA", { minimumFractionDigits: 1 });
  const [featured, ...others] = reviews;

  return (
    <section id="avis" aria-labelledby="avis-title" className="border-y border-rule bg-paper-deep py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="avis-title"
            title="Ce qu'en disent nos clients"
            intro={`Note moyenne de ${value} sur 5 sur ${rating.source}, sur ${rating.count.toLocaleString("fr-MA")} avis (relevé de ${rating.checkedOn}).`}
          />
          <div className="flex items-center gap-4">
            <p className="type-display text-[clamp(4.5rem,10vw,7rem)] leading-none tabular-nums" aria-hidden="true">
              {value}
            </p>
            <div>
              <Stars value={rating.value} />
              <p className="mt-1 text-ink-soft" aria-hidden="true">
                {rating.count.toLocaleString("fr-MA")} avis Google
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Avis mis en avant : grande citation */}
          <li className="lg:col-span-7">
            <figure className="flex h-full flex-col border-t-4 border-pastrami pt-8">
              <blockquote lang={featured.lang} className="type-heading text-[clamp(1.875rem,3.6vw,2.875rem)] text-pretty">
                « {featured.text} »
              </blockquote>
              <ReviewAuthor review={featured} />
            </figure>
          </li>

          <li className="flex flex-col gap-10 lg:col-span-5">
            {others.map((r) => (
              <figure key={r.author} className="border-t border-smoke/25 pt-6">
                <blockquote lang={r.lang} className="text-lg text-pretty">
                  « {r.text} »
                </blockquote>
                <ReviewAuthor review={r} />
              </figure>
            ))}
          </li>
        </ul>

        <div className="mt-14 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">Avis publiés sur Google, cités dans leur langue d&apos;origine.</p>
          <Button asChild variant="outline" size="lg">
            <a href={rating.url} target="_blank" rel="noopener noreferrer">
              Lire tous les avis sur Google
              <ExternalLink aria-hidden="true" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ReviewAuthor({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figcaption className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1">
      <span className="font-semibold">{review.author}</span>
      <span className="text-[0.9375rem] text-ink-soft">
        {review.meta}, {review.when}
      </span>
    </figcaption>
  );
}
