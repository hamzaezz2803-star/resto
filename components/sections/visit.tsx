import { Mail, Navigation, Phone } from "lucide-react";
import { HoursTable } from "@/components/shared/hours-table";
import { MapEmbed } from "@/components/shared/map-embed";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Visit() {
  const { address } = site;

  return (
    <section id="infos" aria-labelledby="infos-title" className="border-t border-rule py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="infos-title"
          title="Horaires et accès"
          intro={`${site.services.join(", ")}. Comptez de ${site.priceRange}.`}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold">Horaires</h3>
            <div className="mt-4">
              <HoursTable />
            </div>

            <h3 className="mt-12 text-xl font-semibold">Adresse et contact</h3>
            <address className="mt-4 not-italic">
              <p className="text-lg">
                {address.street}
                <br />
                {address.district}, {address.postalCode} {address.city}
              </p>
              <ul className="mt-4 space-y-1">
                <li>
                  <a href={`tel:${site.phone.e164}`} className="inline-flex min-h-11 items-center gap-3 hover:text-pastrami">
                    <Phone className="size-5 text-pastrami" aria-hidden="true" />
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-3 break-all hover:text-pastrami">
                    <Mail className="size-5 text-pastrami" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
              </ul>
            </address>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation aria-hidden="true" />
                Itinéraire dans Google Maps
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            </Button>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-rule lg:col-span-7 lg:min-h-0">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
