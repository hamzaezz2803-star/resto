import type { ComponentProps } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

type Props = Omit<ComponentProps<typeof Button>, "asChild" | "children"> & { label?: string };

/** Bouton « Réserver » : ouvre WhatsApp avec un message prérempli vers le numéro du restaurant. */
export function WhatsAppButton({ label = "Réserver sur WhatsApp", ...props }: Props) {
  return (
    <Button asChild {...props}>
      <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
        <span className="sr-only">(ouvre WhatsApp dans un nouvel onglet)</span>
      </a>
    </Button>
  );
}
