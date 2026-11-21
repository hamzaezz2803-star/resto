import Image from "next/image";
import { Coffee, Leaf, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { houseImages } from "@/content/gallery";
import { site } from "@/content/site";

// Engagements de démonstration : à remplacer par ceux de l'établissement.
const promises = [
  { icon: Leaf, title: "Produits du marché", text: "Une carte courte, qui change avec les saisons et les arrivages." },
  { icon: Coffee, title: "Café de spécialité", text: "Grains torréfiés en petites quantités, préparés par des baristas." },
  { icon: UtensilsCrossed, title: "Tout est fait maison", text: "Pains, sauces et desserts sont préparés chaque jour sur place." },
];

export function House() {
  return (
    <section id="maison" aria-labelledby="maison-title" className="py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-porcelain-deep sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={houseImages.room.src}
              alt={houseImages.room.alt}
              fill
              quality={60}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* Le comptoir, en médaillon rond : rappel des assiettes */}
          <div className="absolute -right-2 -bottom-8 size-40 overflow-hidden rounded-full border-[6px] border-porcelain shadow-[0_20px_40px_-20px_rgb(16_48_42/0.6)] sm:size-52 lg:-right-10">
            <Image src={houseImages.counter.src} alt={houseImages.counter.alt} fill quality={60} sizes="208px" className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <SectionHeading
            id="maison-title"
            title="Une adresse pour toute la journée"
            intro={`Le matin, on y prend un café et une viennoiserie. Le midi, une assiette de saison. Le soir, on s'attarde à table. ${site.name} est pensée comme une maison ouverte, simple et soignée.`}
          />
          <ul className="mt-10 flex flex-col divide-y divide-line border-y border-line">
            {promises.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-5 py-5">
                <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-forest text-brass">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-moss">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
