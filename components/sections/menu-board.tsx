"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gsap, useGSAP, EASE } from "@/components/motion/gsap";
import type { MenuCategory, MenuItem } from "@/content/menu";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Carte en onglets accessibles, lignes à points de conduite entre le plat et le prix. */
export function MenuBoard({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const boardRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  // Révélation unique du tableau à son entrée dans l'écran.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-menu-row]",
          { y: 12, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.4,
            ease: EASE,
            stagger: 0.04,
            scrollTrigger: { trigger: boardRef.current, start: "top 75%", once: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: boardRef },
  );

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = categories.length - 1;
    const next =
      e.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : e.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    const id = categories[next].id;
    setActiveId(id);
    tabRefs.current[id]?.focus();
  };

  return (
    <div ref={boardRef} className="mt-12 md:mt-16">
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none]">
        <div role="tablist" aria-label="Catégories de la carte" className="flex min-w-max gap-1 border-b border-line">
          {categories.map((cat, i) => {
            const selected = cat.id === activeId;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[cat.id] = el;
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${cat.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(cat.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={cn(
                  "relative min-h-12 px-4 text-base font-semibold whitespace-nowrap transition-colors duration-150",
                  selected ? "text-forest" : "text-moss hover:text-forest",
                )}
              >
                {cat.label}
                {selected ? (
                  <motion.span
                    layoutId={`${baseId}-indicator`}
                    className="absolute inset-x-2 -bottom-px h-[3px] rounded-full bg-brass"
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        tabIndex={0}
        className="mt-10 rounded-sm focus-visible:outline-offset-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 max-w-[60ch] text-lg text-moss">{active.intro}</p>
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
              {active.groups.map((group, gi) => (
                <div key={group.title ?? gi} className={cn(!group.title && active.groups.length === 1 && "lg:col-span-2")}>
                  {group.title ? (
                    <h3 className="type-display mb-4 text-[1.75rem] text-forest">{group.title}</h3>
                  ) : null}
                  <ul className={cn(!group.title && active.groups.length === 1 && "lg:columns-2 lg:gap-x-16")}>
                    {group.items.map((item) => (
                      <MenuRow key={item.name} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li data-menu-row className="break-inside-avoid border-b border-line py-4">
      <div className="flex items-baseline gap-3">
        <span className="type-display min-w-0 flex-1 text-[1.5rem] leading-tight [overflow-wrap:anywhere] sm:flex-none md:text-[1.625rem]">{item.name}</span>
        <span aria-hidden="true" className="hidden min-w-6 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-moss/40 sm:block" />
        <span className="shrink-0 text-right font-semibold whitespace-nowrap text-brass-deep tabular-nums">{formatPrice(item.price)}</span>
      </div>
      {item.note ? <p className="mt-1 text-[0.9375rem] text-moss">{item.note}</p> : null}
    </li>
  );
}
