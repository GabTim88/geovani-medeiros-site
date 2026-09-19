"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 bg-terra-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[9/16] bg-terra-dark/5 rounded-sm overflow-hidden">
              <Image
                src="/images/sobre.webp"
                alt="Geovani Medeiros sentado em uma banqueta, de jaqueta de couro, segurando seu violão em retrato de estúdio"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1152px) 45vw, 512px"
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terra-gold/30 rounded-sm -z-10" />
          </div>

          {/* Text column */}
          <div>
            <p className="text-terra-burn tracking-[0.2em] uppercase text-xs mb-4">
              Sobre o artista
            </p>
            <h2 className="font-serif text-terra-dark text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Uma vida dedicada
              <br />
              <span className="text-terra-burn italic">à música brasileira</span>
            </h2>
            <div className="editorial-line mb-8" />
            <div className="space-y-5 text-terra-dark/75 leading-relaxed">
              <p>
                Sozinho, Geovani constrói a sonoridade de uma banda inteira &mdash; e lê
                o público com o carisma de quem sabe exatamente quando acelerar e quando
                deixar a música respirar.
              </p>
              <p>
                São mais de dez anos de estrada: casamento, bar, evento corporativo,
                festival. E um álbum, <em>&ldquo;Pra Começar&rdquo;</em>, de 2017, com
                mais de cinco mil cópias distribuídas em produção 100% independente.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-2 border-terra-gold">
              <p className="font-serif text-terra-dark italic text-lg leading-relaxed">
                &ldquo;Há doze anos eu fui escolhido pela arte, para propagar mais do que
                melodias e harmonias. Eu fui escolhido para levar as melhores energias
                e inundar os corações das pessoas com bons sentimentos.&rdquo;
              </p>
              <cite className="block mt-3 text-terra-burn text-sm not-italic tracking-wide">
                &mdash; Geovani Medeiros
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
