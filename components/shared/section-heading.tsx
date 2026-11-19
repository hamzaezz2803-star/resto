import { cn } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  tone?: "paper" | "smoke";
};

/** Titre de section (h2) et introduction courte. */
export function SectionHeading({ id, title, intro, className, tone = "paper" }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="type-heading text-[clamp(2.5rem,6vw,4.75rem)] text-balance">
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 max-w-[58ch] text-lg text-pretty",
            tone === "smoke" ? "text-on-smoke-muted" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
