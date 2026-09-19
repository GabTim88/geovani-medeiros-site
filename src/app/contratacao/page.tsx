import type { Metadata } from "next";
import Image from "next/image";
import ShowTypes from "./ShowTypes";
import HireTestimonials from "./HireTestimonials";
import HireCTA from "./HireCTA";
import Faq from "./Faq";
import { faq } from "./faqData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contratar Música ao Vivo para Casamentos e Eventos em MG",
  description:
    "Contrate Geovani Medeiros para seu casamento, evento corporativo ou festival em Minas Gerais. Formatos voz e violão, banda completa ou personalizado, com sonorização inclusa. Orçamento pelo WhatsApp.",
  alternates: {
    canonical: "/contratacao",
  },
  openGraph: {
    type: "website",
    url: `${site.url}/contratacao`,
    siteName: site.name,
    locale: site.locale,
    title: "Contratar Geovani Medeiros para seu evento",
    description:
      "Voz e violão, banda completa ou formato sob medida. Música brasileira ao vivo em Barbacena, Tiradentes, São João del-Rei, Juiz de Fora e BH.",
    images: [
      {
        url: "/images/og-contratacao.jpg",
        width: 1200,
        height: 630,
        alt: "Geovani Medeiros em apresentação ao vivo",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ContratacaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero da página */}
      <section className="relative flex items-center min-h-[78svh] md:min-h-[86svh] pt-36 pb-24 md:pt-44 md:pb-32 bg-terra-dark overflow-hidden">
        <Image
          src="/images/projeto-futuro.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Véu: sem ele o texto creme não alcança contraste AA sobre a foto */}
        <div className="absolute inset-0 bg-terra-dark/85" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, rgba(133,58,20,0.45) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-terra-gold tracking-[0.3em] uppercase text-xs mb-6">
            Contratação
          </p>
          <h1 className="font-serif text-terra-cream text-4xl md:text-6xl mb-6 leading-tight">
            A trilha sonora
            <br />
            <span className="text-terra-gold italic">do seu grande dia</span>
          </h1>
          <div className="w-16 h-[2px] bg-terra-burn mx-auto mb-8" />
          <p className="text-terra-cream/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada evento tem seu ritmo. Geovani ajusta repertório, formação e
            energia para acertar o tom do começo ao fim &mdash; do silêncio de
            uma cerimônia à última música da pista.
          </p>
        </div>
      </section>

      <ShowTypes />
      <HireTestimonials />
      <Faq />
      <HireCTA />
    </>
  );
}
