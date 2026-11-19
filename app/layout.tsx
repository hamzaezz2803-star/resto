import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MotionProviders } from "@/components/motion/motion-providers";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  display: "swap",
});

const description =
  "Deli new-yorkais et burgers craft à Casablanca (Maarif). Pastrami fumé 12 heures, pain au levain maison. Sur place, à emporter et en livraison. Ouvert tous les jours.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pastrama, deli et burgers craft à Casablanca (Maarif)",
    template: "%s | Pastrama",
  },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: site.fullName,
    title: "Pastrama, deli et burgers craft à Casablanca",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastrama, deli et burgers craft à Casablanca",
    description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1f1a16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geist.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        {/* Marque la présence de JS avant le premier rendu (évite un flash avant la séquence du hero) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#contenu"
          className="sr-only z-[60] rounded-lg bg-smoke px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
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
