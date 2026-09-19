import type { Metadata } from "next";
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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-terra-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 60%, rgba(133,58,20,0.4) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-terra-gold tracking-[0.3em] uppercase text-xs mb-6">
            Contratação
          </p>
          <h1 className="font-serif text-terra-cream text-4xl md:text-6xl mb-6 leading-tight">
            A trilha sonora do{" "}
            <span className="text-terra-gold italic">seu grande dia</span>
          </h1>
          <div className="w-16 h-[2px] bg-terra-burn mx-auto mb-8" />
          <p className="text-terra-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
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
