import { cn } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  intro?: string;
  className?: string;
};

/** Titre de section (h2) et introduction courte. Les couleurs suivent la section (claire ou `dark`). */
export function SectionHeading({ id, title, intro, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="type-display text-[clamp(2.5rem,6vw,4.5rem)] text-balance">
        {title}
      </h2>
      {intro ? <p className="mt-5 max-w-[58ch] text-lg text-pretty text-muted-foreground">{intro}</p> : null}
    </div>
  );
}
