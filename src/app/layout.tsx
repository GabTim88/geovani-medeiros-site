import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { site } from "@/lib/site";

// next/font self-hospeda as fontes: elimina o request bloqueante ao Google
// e o layout shift (gera @font-face com size-adjust automático).
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Geovani Medeiros — Música Brasileira ao Vivo | Barbacena/MG",
    template: "%s | Geovani Medeiros",
  },
  description:
    "Cantor e violonista de Barbacena/MG com repertório eclético de música brasileira. Shows ao vivo para casamentos, eventos corporativos e festivais em Minas Gerais. Conheça o audiovisual Um Entardecer em Tiradentes.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Geovani Medeiros",
    "música ao vivo Barbacena",
    "cantor para casamento MG",
    "música brasileira ao vivo",
    "contratar músico Minas Gerais",
    "voz e violão casamento",
    "música para evento corporativo MG",
    "Um Entardecer em Tiradentes",
    "artista Campos das Vertentes",
    "gaita e violão",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    title: "Geovani Medeiros — Música Brasileira ao Vivo | Barbacena/MG",
    description:
      "Repertório eclético de música brasileira com arranjos autorais de gaita e violão. Shows para casamentos, eventos e festivais em Minas Gerais.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Geovani Medeiros tocando violão durante a gravação em Tiradentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geovani Medeiros — Música Brasileira ao Vivo",
    description:
      "Cantor e violonista de Barbacena/MG. Shows para casamentos, eventos corporativos e festivais.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <noscript>
          {/* Sem JS o scroll reveal nunca dispara; revela tudo de uma vez. */}
          <style>{`.reveal,.hero-phase-logo,.hero-phase-text,.hero-cta{opacity:1!important;visibility:visible!important;transform:none!important}.hero-track{height:auto!important;min-height:100svh}.hero-stage{position:static!important;height:auto!important;min-height:100svh;padding:8rem 0}.hero-layer{position:static!important;gap:2.5rem}.hero-phase-text{position:static!important}`}</style>
        </noscript>
        <JsonLd />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-terra-cream focus:text-terra-dark focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
