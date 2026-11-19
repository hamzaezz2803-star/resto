import Link from "next/link";
import { navLinks, site } from "@/content/site";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales et conditions d'utilisation" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/cookies", label: "Politique de cookies" },
] as const;

export function SiteFooter() {
  const { legal, address } = site;

  return (
    <footer className="on-smoke bg-smoke text-paper">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="type-display text-[clamp(3.5rem,9vw,6.5rem)]">Pastrama</p>
          <p className="mt-4 max-w-[36ch] text-on-smoke-muted">
            Deli new-yorkais et burgers craft, {address.street}, {address.district}, {address.city}.
          </p>
        </div>

        <nav aria-label="Plan du site" className="md:col-span-3">
          <h2 className="text-sm font-semibold text-mustard">Le site</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-mustard">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#reserver" className="inline-flex min-h-11 items-center hover:text-mustard">
                Réserver une table
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold text-mustard">Contact</h2>
          <ul className="mt-4 space-y-1">
            <li>
              <a href={`tel:${site.phone.e164}`} className="inline-flex min-h-11 items-center hover:text-mustard">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center break-all hover:text-mustard">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-mustard"
              >
                Commander sur pastrama.ma<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page flex flex-col gap-6 py-8 text-sm text-on-smoke-muted lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-1">
            <p>
              © 2026 {legal.operator}.
              {legal.ice ? ` ICE ${legal.ice}.` : ""}
              {legal.rc ? ` RC ${legal.rc}.` : ""}
            </p>
            <p>Photos d&apos;illustration : Unsplash.</p>
          </div>
          <nav aria-label="Informations légales">
            <ul className="flex flex-col gap-x-6 sm:flex-row sm:flex-wrap">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-paper hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
