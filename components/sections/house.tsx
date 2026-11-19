import Image from "next/image";
import { CalendarCheck, Flame, Wheat } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { signatureDishes } from "@/content/menu";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

// Engagements annoncés par le restaurant sur pastrama.ma.
const promises = [
  { icon: Flame, title: "Fumé 12 heures", text: "Le pastrami est fumé lentement, puis tranché à la commande." },
  { icon: CalendarCheck, title: "Préparé le jour même", text: "Sans conservateurs, sans nitrites ni nitrates ajoutés." },
  { icon: Wheat, title: "Pain au levain maison", text: "Un pain de deli au levain naturel, cuit pour nos sandwichs." },
];

export function House() {
  const [first, ...rest] = signatureDishes;

  return (
    <section id="maison" aria-labelledby="maison-title" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              id="maison-title"
              title="Un deli new-yorkais, à la mode de Casablanca"
              intro="Pastrama est né d'une envie simple : retrouver au Maarif l'esprit des delis de New York. Des viandes travaillées sur place, des produits choisis avec soin, et le savoir-faire de l'équipe de La Fonda."
            />
          </div>
          <ul className="flex flex-col divide-y divide-rule border-y border-rule lg:col-span-5 lg:self-end">
            {promises.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 py-5">
                <Icon className="mt-1 size-6 shrink-0 text-pastrami" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 md:mt-28">
          <h3 className="type-heading text-[clamp(2rem,4vw,3rem)]">Les incontournables</h3>
          <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-8">
            <DishFigure dish={first} className="md:col-span-7" aspect="aspect-[4/5]" sizes="(min-width: 768px) 58vw, 100vw" />
            <div className="flex flex-col gap-10 md:col-span-5 md:gap-8">
              {rest.map((dish) => (
                <DishFigure key={dish.name} dish={dish} aspect="aspect-[4/3]" sizes="(min-width: 768px) 40vw, 100vw" />
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-soft">Photos d&apos;illustration. Prix relevés sur pastrama.ma.</p>
        </div>
      </div>
    </section>
  );
}

function DishFigure({
  dish,
  className,
  aspect,
  sizes,
}: {
  dish: (typeof signatureDishes)[number];
  className?: string;
  aspect: string;
  sizes: string;
}) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <div className={cn("relative overflow-hidden rounded-lg bg-smoke", aspect)}>
        <Image src={dish.image.src} alt={dish.image.alt} fill sizes={sizes} quality={60} className="object-cover" />
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="type-heading text-[1.75rem]">{dish.name}</span>
        <span className="font-semibold text-pastrami tabular-nums">{formatPrice(dish.price)}</span>
        <span className="w-full max-w-[48ch] text-ink-soft">{dish.description}</span>
      </figcaption>
    </figure>
  );
}
