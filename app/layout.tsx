import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MotionProviders } from "@/components/motion/motion-providers";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const description = `${site.fullName} à ${site.address.city}. Cuisine du marché midi et soir, café de spécialité toute la journée. Consultez la carte et réservez votre table sur WhatsApp.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, restaurant et café à ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: site.fullName,
    title: `${site.name}, restaurant et café`,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, restaurant et café`,
    description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#10302a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        {/* Marque la présence de JS avant le premier rendu (évite un flash avant la séquence du hero) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-full bg-forest px-4 py-3 text-porcelain focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <MotionProviders>
          <SiteHeader />
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProviders>
      </body>
    </html>
  );
}
