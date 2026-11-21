import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { HoursTable } from "@/components/shared/hours-table";
import { MapEmbed } from "@/components/shared/map-embed";
import { OpenStatusText } from "@/components/shared/open-status";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

/** « Nous trouver » : carte Google Maps et fiche pratique (horaires, adresse, réservation). */
export function Visit() {
  const { address } = site;

  return (
    <section id="infos" aria-labelledby="infos-title" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="infos-title"
          title="Nous trouver"
          intro={`${site.services.join(", ")}. Comptez de ${site.priceRange}.`}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-line bg-porcelain-deep lg:col-span-7 lg:min-h-[36rem]">
            <MapEmbed />
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-card px-4 text-sm font-semibold shadow-[0_12px_28px_-14px_rgb(16_48_42/0.7)] hover:bg-porcelain"
            >
              <MapPin className="size-4 text-brass-deep" aria-hidden="true" />
              {address.street}, {address.city}
              <span className="sr-only">(itinéraire, nouvel onglet)</span>
            </a>
          </div>

          <div className="dark flex flex-col rounded-[2rem] bg-forest p-7 text-porcelain sm:p-10 lg:col-span-5">
            <p className="text-on-forest-muted">
              <OpenStatusText />
            </p>
            <h3 className="type-display mt-6 text-[2rem]">Horaires</h3>
            <div className="mt-3">
              <HoursTable />
            </div>

            <h3 className="type-display mt-10 text-[2rem]">Adresse et contact</h3>
            <address className="mt-3 not-italic">
              <p className="text-lg">
                {address.street}, {address.district}
                <br />
                {address.postalCode} {address.city}
              </p>
              <ul className="mt-3 space-y-1 text-on-forest-muted">
                <li>
                  <a href={`tel:${site.phone.e164}`} className="inline-flex min-h-11 items-center gap-3 hover:text-porcelain">
                    <Phone className="size-5 text-brass" aria-hidden="true" />
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-3 break-all hover:text-porcelain">
                    <Mail className="size-5 text-brass" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </address>

            <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg" />
              <Button asChild variant="outline" size="lg" className="border-forest-line bg-transparent hover:bg-forest-soft">
                <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation aria-hidden="true" />
                  Itinéraire
                  <span className="sr-only">(Google Maps, nouvel onglet)</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
