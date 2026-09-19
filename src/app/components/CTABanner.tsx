"use client";

import Link from "next/link";
import { useReveal } from "@/lib/useReveal";

export default function CTABanner() {
  const ref = useReveal();

  return (
    <section className="py-20 md:py-28 bg-terra-burn relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(213,191,134,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(251,250,239,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
          Seu evento merece{" "}
          <span className="text-terra-gold italic">música de verdade</span>
        </h2>
        <p className="text-terra-cream/80 text-lg mb-10 max-w-2xl mx-auto">
          Casamento, evento corporativo, bar ou festival: Geovani monta o
          repertório junto com você e ajusta a formação ao tamanho do espaço.
          Conte o que você imaginou &mdash; ele cuida do resto.
        </p>
        <Link
          href="/contratacao"
          className="inline-block px-10 py-4 bg-terra-cream text-terra-burn text-sm tracking-widest uppercase hover:bg-terra-gold hover:text-terra-dark transition-all duration-300 rounded-sm font-medium"
        >
          Pedir um orçamento
        </Link>
        <p className="mt-5 text-terra-cream/80 text-sm">
          Sem compromisso &mdash; você recebe a proposta pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
