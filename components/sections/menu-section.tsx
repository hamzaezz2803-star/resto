import { MenuBoard } from "@/components/sections/menu-board";
import { SectionHeading } from "@/components/shared/section-heading";
import { menu, menuCheckedOn } from "@/content/menu";

export function MenuSection() {
  return (
    <section id="carte" aria-labelledby="carte-title" className="dark bg-forest py-20 text-porcelain md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="carte-title"
            
            title="La carte"
            intro="Sandwichs de deli, burgers, viandes grillées et desserts maison. Les prix sont en dirhams ; quand un plat existe en plusieurs tailles, le prix va de la plus petite à la plus grande."
          />
        </div>

        <MenuBoard categories={menu} />

        <p className="mt-10 text-sm text-on-forest-muted">
          Carte et prix relevés sur pastrama.ma en {menuCheckedOn}. La carte du restaurant fait foi.
        </p>
      </div>
    </section>
  );
}
