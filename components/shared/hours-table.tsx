"use client";

import { useSyncExternalStore } from "react";
import { dayNames, site, weekOrder } from "@/content/site";
import { casablancaNow, formatRanges } from "@/lib/hours";
import { cn } from "@/lib/utils";

const noop = () => () => {};
const currentDay = () => casablancaNow().day;

/** Tableau des horaires ; le jour en cours (heure de Casablanca) est mis en évidence côté navigateur. */
export function HoursTable() {
  const today = useSyncExternalStore(noop, currentDay, () => null);

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Horaires d&apos;ouverture</caption>
      <tbody>
        {weekOrder.map((day) => {
          const isToday = day === today;
          return (
            <tr key={day} className={cn("border-b border-border", isToday && "bg-muted font-semibold")}>
              <th scope="row" className="py-3 pr-4 pl-3 font-medium">
                {dayNames[day]}
                {isToday ? <span className="ml-2 text-sm font-semibold text-brass-deep dark:text-brass">(aujourd&apos;hui)</span> : null}
              </th>
              <td className="py-3 pr-3 text-right tabular-nums">{formatRanges(site.hours[day])}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
