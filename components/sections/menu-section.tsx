import { MenuBoard } from "@/components/sections/menu-board";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { menu } from "@/content/menu";

export function MenuSection() {
  return (
    <section id="carte" aria-labelledby="carte-title" className="bg-porcelain-deep py-20 md:py-28">
      <div className="container-page">
        <div className="rounded-[2rem] border border-line bg-card px-5 py-12 shadow-[0_30px_60px_-40px_rgb(16_48_42/0.45)] sm:px-10 md:px-14 md:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="carte-title"
              title="La carte"
              intro="Du petit-déjeuner au dîner. Prix en dirhams ; quand un plat existe en plusieurs formats, le prix va du plus petit au plus grand."
            />
            <WhatsAppButton variant="outline" className="shrink-0" />
          </div>

          <MenuBoard categories={menu} />

          <p className="mt-10 text-sm text-moss">Carte de démonstration. Les prix et les plats sont donnés à titre d&apos;exemple.</p>
        </div>
      </div>
    </section>
  );
}
