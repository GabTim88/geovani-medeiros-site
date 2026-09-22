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
                Sozinho ou com a formação musical que você preferir, Geovani Medeiros contrói a apresentação artística 
                com corpo alma e coração entregues para a música. Com carisma e leitura coerente do publico, 
                sabe bem como trabalhar a dinâmica de qualquer evento.
              </p>
              <p>
                São mais de 10 anos de estrada. Desde o começo nos bares da região, eventos corporativos, 
                até grandes festas espalhadas por tantas cidades de Minas Gerais. Tudo começou a ficar mais sério, 
                quando em 2017, lançou seu primeiro álbum “Pra começar”. Na época ainda com disponibilidade das mídias físicas (CD), 
                o artista distribuiu mais de 5 mil cópias desse projeto feito de forma 100 % independente.
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
