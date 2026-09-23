"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

/**
 * Masonry em CSS columns. As imagens entram com largura/altura intrínsecas
 * (w-full h-auto) em vez de caixa com aspect fixo: o mosaico fica com as
 * proporções reais das fotos e sem layout shift.
 *
 * `width`/`height` são as dimensões reais dos arquivos em /public/images —
 * se uma foto for trocada por outra de proporção diferente, atualizar aqui,
 * senão o navegador reserva a caixa errada e o mosaico salta ao carregar.
 *
 * A ordem alterna retratos e paisagens de propósito: em CSS columns as fotos
 * caem na sequência da lista, e blocos de mesma proporção seguidos deixam as
 * colunas visivelmente desiguais.
 */
const galleryItems = [
  {
    src: "/images/1.webp",
    width: 1067,
    height: 1600,
    alt: "Retrato em preto e branco de Geovani Medeiros tocando violão e gaita de boca no suporte de pescoço, sob a luz de palco",
  },
  {
    src: "/images/3.webp",
    width: 1600,
    height: 1067,
    alt: "Vista ampla da apresentação no gramado, com a banda entre os instrumentos e o casario de Tiradentes na encosta ao fundo",
  },
  {
    src: "/images/5.webp",
    width: 1065,
    height: 1600,
    alt: "Geovani Medeiros em retrato de estúdio, de jaqueta jeans, segurando a gaita de boca sobre fundo escuro",
  },
  {
    src: "/images/2.webp",
    width: 720,
    height: 1080,
    alt: "Geovani Medeiros de pé tocando violão em palco ao ar livre, entre palmeiras e com a banda ao fundo",
  },
  {
    src: "/images/14.webp",
    width: 1080,
    height: 720,
    alt: "Panorâmica do show ao entardecer: a banda reunida no gramado, palmeiras e as montanhas ao fundo",
  },
  {
    src: "/images/16.webp",
    width: 1065,
    height: 1600,
    alt: "Retrato de estúdio de Geovani Medeiros de terno, tocando gaita de boca com as duas mãos",
  },
  {
    src: "/images/4.webp",
    width: 513,
    height: 768,
    alt: "Geovani Medeiros sentado tocando violão diante de uma parede rosa com janela colonial vermelha, o case do instrumento no chão",
  },
  {
    src: "/images/13.webp",
    width: 1080,
    height: 667,
    alt: "Banda e convidados reunidos para foto ao fim do show, à noite, com a igreja iluminada ao fundo",
  },
  {
    src: "/images/17.webp",
    width: 1067,
    height: 1600,
    alt: "Foto em preto e branco de Geovani Medeiros sorrindo enquanto toca violão em apresentação noturna",
  },
  {
    src: "/images/09.webp",
    width: 720,
    height: 1080,
    alt: "Geovani Medeiros cantando em microfone vintage e tocando violão, com o casario da cidade desfocado ao fundo",
  },
  {
    src: "/images/6.webp",
    width: 1024,
    height: 684,
    alt: "Geovani Medeiros de violão em punho diante da serra, em campo aberto",
  },
  {
    src: "/images/18.webp",
    width: 1065,
    height: 1600,
    alt: "Geovani Medeiros de óculos escuros tocando violão ao ar livre, sob a copa de uma árvore",
  },
  {
    src: "/images/11.webp",
    width: 720,
    height: 1080,
    alt: "Geovani Medeiros sentado tocando violão com a banda, cercado pelo público em pé durante o show",
  },
  {
    src: "/images/15.webp",
    width: 1080,
    height: 705,
    alt: "Músicos e público posando juntos entre os instrumentos ao fim da apresentação noturna",
  },
  {
    src: "/images/12.webp",
    width: 781,
    height: 1080,
    alt: "Geovani Medeiros ao microfone em show noturno, com a igreja iluminada no alto da colina ao fundo",
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

        {/* Duas colunas já no celular: em coluna única as fotos viram
            várias telas de rolagem. */}
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
