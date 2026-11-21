import Link from "next/link";
import { LogoMark } from "@/components/shared/logo";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { navLinks, site } from "@/content/site";

export function SiteFooter() {
  const { address } = site;

  return (
    <footer className="dark bg-forest text-porcelain">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <LogoMark className="size-14 [&_circle:first-child]:fill-forest-soft" />
            <p className="type-display text-[clamp(2.75rem,6vw,4.25rem)]">{site.name}</p>
          </div>
          <p className="mt-5 max-w-[38ch] text-on-forest-muted">
            {site.tagline}, {address.street}, {address.city}. Réservation par WhatsApp, réponse rapide.
          </p>
          <WhatsAppButton size="lg" className="mt-7" />
        </div>

        <nav aria-label="Plan du site" className="md:col-span-3 md:col-start-7">
          <h2 className="text-sm font-semibold text-brass">Le site</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-brass">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-brass">Contact</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`tel:${site.phone.e164}`} className="inline-flex min-h-11 items-center hover:text-brass">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all hover:text-brass">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-brass">
                Itinéraire<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-line">
        <p className="container-page py-6 text-sm text-on-forest-muted">
          Site de démonstration pour restaurants et cafés. Photos d&apos;illustration : Unsplash.
        </p>
      </div>
    </footer>
  );
}
