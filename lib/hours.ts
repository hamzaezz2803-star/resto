import { site, type DayKey, type TimeRange } from "@/content/site";

const TZ = "Africa/Casablanca";

export function formatRanges(ranges: readonly TimeRange[]): string {
  return ranges.map((r) => `${r.open} à ${r.close}`).join(", puis ");
}

/** Jour et minutes écoulées, à l'heure de Casablanca. À appeler côté client uniquement. */
export function casablancaNow(date = new Date()): { day: DayKey; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days.indexOf(get("weekday")) as DayKey;
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string | null; opensToday: boolean };

export function getOpenStatus(now = casablancaNow()): OpenStatus {
  const today = site.hours[now.day];
  for (const r of today) {
    if (now.minutes >= toMinutes(r.open) && now.minutes < toMinutes(r.close)) {
      return { open: true, closesAt: r.close };
    }
  }
  const later = today.find((r) => toMinutes(r.open) > now.minutes);
  if (later) return { open: false, opensAt: later.open, opensToday: true };
  const tomorrow = site.hours[((now.day + 1) % 7) as DayKey];
  return { open: false, opensAt: tomorrow[0]?.open ?? null, opensToday: false };
}

