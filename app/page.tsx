import { GallerySection } from "@/components/sections/gallery-section";
import { Hero } from "@/components/sections/hero";
import { House } from "@/components/sections/house";
import { MenuSection } from "@/components/sections/menu-section";
import { Plates } from "@/components/sections/plates";
import { Visit } from "@/components/sections/visit";
import { site, weekOrder } from "@/content/site";

const dayCodes = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Données structurées (schema.org) pour les moteurs de recherche.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop"],
  name: site.fullName,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email,
  servesCuisine: ["Cuisine du marché", "Café", "Brunch"],
  priceRange: "60-220 MAD",
  hasMenu: `${site.url}/#carte`,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: weekOrder.flatMap((d) =>
    site.hours[d].map((r) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayCodes[d],
      opens: r.open,
      closes: r.close,
    })),
  ),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
      <Hero />
      <Plates />
      <House />
      <MenuSection />
      <GallerySection />
      <Visit />
    </>
  );
}
