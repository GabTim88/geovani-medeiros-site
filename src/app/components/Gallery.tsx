"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

/**
 * Masonry em CSS columns. As imagens entram com largura/altura intrínsecas
 * (w-full h-auto) em vez de caixa com aspect fixo: o mosaico fica com as
 * proporções reais das fotos e sem layout shift.
 */
const galleryItems = [
  {
    src: "/images/1.webp",
    width: 798,
    height: 1200,
    alt: "Geovani Medeiros em retrato de estúdio, de jaqueta caramelo, segurando o violão ao lado do corpo",
  },
  {
    src: "/images/2.webp",
    width: 1200,
    height: 800,
    alt: "Sanfoneiro e violonista tocando ao ar livre, com o casario de Tiradentes ao fundo",
  },
  {
    src: "/images/3.webp",
    width: 798,
    height: 1200,
    alt: "Geovani Medeiros tocando gaita em retrato de estúdio sobre fundo escuro",
  },
  {
    src: "/images/4.webp",
    width: 1200,
    height: 800,
    alt: "Baixista e violonista tocando lado a lado no contraluz dourado do entardecer",
  },
  {
    src: "/images/5.webp",
    width: 1200,
    height: 800,
    alt: "Geovani Medeiros de braço erguido no palco ao ar livre, com montanhas e o público sentado ao fundo",
  },
  {
    src: "/images/6.webp",
    width: 800,
    height: 1200,
    alt: "Geovani Medeiros sentado em uma banqueta tocando violão, cercado pelos convidados no gramado",
  },
];

export default function Gallery() {
  const headerRef = useReveal();

  return (
    <section id="galeria" className="py-16 md:py-32 bg-terra-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-10 md:mb-16">
          <p className="text-terra-burn tracking-[0.2em] uppercase text-xs mb-4">
            Galeria
          </p>
          <h2 className="font-serif text-terra-dark text-3xl md:text-5xl mb-6">
            Momentos em imagens
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-dark/75 mt-6 max-w-xl mx-auto leading-relaxed">
            Estúdio, estrada, apresentações diversas e o entardecer em Tiradentes. <br />Registros dos bastidores e das apresentações. 
          </p>
        </div>

        {/* Duas colunas já no celular: em coluna única as 6 fotos viram
            quatro telas de rolagem. */}
        <div className="columns-2 lg:columns-3 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <GalleryItem key={item.src} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  width,
  height,
  alt,
}: (typeof galleryItems)[number]) {
  const ref = useReveal(0.08);

  return (
    <div ref={ref} className="reveal break-inside-avoid group mb-3 md:mb-4">
      <div className="relative overflow-hidden rounded-sm bg-terra-dark/5 group-hover:shadow-xl transition-shadow duration-500">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 50vw, 360px"
          className="w-full h-auto"
        />
        <div
          className="absolute inset-0 bg-terra-burn/0 group-hover:bg-terra-burn/10 transition-colors duration-500"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
