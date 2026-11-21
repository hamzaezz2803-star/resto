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
          intro="La salle, le comptoir et quelques assiettes. Touchez une photo pour l&apos;agrandir."
        />
        <GalleryGrid images={gallery} />
        <p className="mt-6 text-sm text-moss">
          Photos d&apos;illustration (Unsplash), à remplacer par celles de l&apos;établissement.
        </p>
      </div>
    </section>
  );
}
