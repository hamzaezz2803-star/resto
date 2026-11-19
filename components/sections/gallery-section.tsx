import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { gallery } from "@/content/gallery";

export function GallerySection() {
  return (
    <section id="galerie" aria-labelledby="galerie-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="galerie-title"
          title="Galerie"
          intro="Sandwichs, burgers, grillades et desserts. Touchez une photo pour l'agrandir."
        />
        <GalleryGrid images={gallery} />
        <p className="mt-6 text-sm text-ink-soft">
          Photos d&apos;illustration (Unsplash), en attendant les photos du restaurant.
        </p>
      </div>
    </section>
  );
}
