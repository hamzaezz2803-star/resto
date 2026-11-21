"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";
import { cn } from "@/lib/utils";

// Recalcul chaque minute ; côté serveur, aucun statut (l'heure n'est connue que du navigateur).
let cached: { key: number; status: OpenStatus } | null = null;
function getSnapshot(): OpenStatus {
  const key = Math.floor(Date.now() / 60_000);
  if (!cached || cached.key !== key) cached = { key, status: getOpenStatus() };
  return cached.status;
}
function subscribe(cb: () => void) {
  const id = window.setInterval(cb, 30_000);
  return () => window.clearInterval(id);
}

export function OpenStatusText({ className }: { className?: string }) {
  const status = useSyncExternalStore(subscribe, getSnapshot, () => null);

  if (!status) {
    return (
      <span className={cn("inline-flex items-center gap-2", className)}>
        <Clock className="size-4" aria-hidden="true" />
        Ouvert tous les jours
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn("size-2 rounded-full", status.open ? "bg-open-on-forest" : "bg-brass")}
      />
      {status.open
        ? `Ouvert maintenant, jusqu'à ${status.closesAt}`
        : status.opensAt
          ? `Fermé pour le moment. Ouvre ${status.opensToday ? "à" : "demain à"} ${status.opensAt}`
          : "Fermé pour le moment"}
    </span>
  );
}
