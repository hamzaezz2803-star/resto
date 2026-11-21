import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function SiteFooter() {
  const { address } = site;

  return (
    <footer className="dark bg-forest text-porcelain">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="type-display text-[clamp(3.5rem,9vw,6.5rem)]">Pastrama</p>
          <p className="mt-4 max-w-[36ch] text-on-forest-muted">
            Deli new-yorkais et burgers craft, {address.street}, {address.district}, {address.city}.
          </p>
        </div>

        <nav aria-label="Plan du site" className="md:col-span-3">
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

        <div className="md:col-span-4">
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
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-brass"
              >
                Itinéraire<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-porcelain/15">
        <p className="container-page py-6 text-sm text-on-forest-muted">Photos et vidéo d&apos;illustration : Unsplash et Pexels.</p>
      </div>
    </footer>
  );
}
