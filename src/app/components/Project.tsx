"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

interface ProjectBlockProps {
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  aspect: string;
  reverse?: boolean;
  delayClass: string;
}

function ProjectBlock({
  label,
  title,
  text,
  image,
  alt,
  aspect,
  reverse,
  delayClass,
}: ProjectBlockProps) {
  const ref = useReveal(0.12);

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} grid md:grid-cols-2 gap-10 md:gap-16 items-center`}
    >
      {/* Image */}
      <div className={reverse ? "md:order-2" : undefined}>
        <div
          className={`relative ${aspect} bg-terra-cream/5 rounded-sm overflow-hidden`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1152px) 45vw, 512px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? "md:order-1" : undefined}>
        <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-3">
          {label}
        </p>
        <h3 className="font-serif text-terra-cream text-2xl md:text-3xl mb-4 leading-snug">
          {title}
        </h3>
        <div className="w-10 h-[2px] bg-terra-gold mb-6" />
        <p className="text-terra-cream/70 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function Project() {
  const headerRef = useReveal();

  const blocks = [
    {
      label: "A Origem",
      title: "Da simplicidade nasce a arte",
      text: "Nascido e criado em Barbacena, no coração de Minas Gerais, Geovani encontrou na música a sua forma de tocar as pessoas. Desde 2014 percorre palcos e festivais do estado com arranjos autorais de gaita e violão, na autenticidade de quem vive cada nota.",
      image: "/images/projeto-origem.webp",
      alt: "Geovani Medeiros estendendo um microfone vintage prateado em direção à câmera, em retrato de estúdio",
      aspect: "aspect-[3/2]",
      delayClass: "reveal-delay-1",
    },
    {
      label: "O Audiovisual",
      title: "Um Entardecer em Tiradentes",
      text: "No gramado em frente à Capela de São Francisco de Paula, em Tiradentes, Geovani gravou dez músicas inéditas ao vivo, cercado por 40 convidados sob a luz do entardecer mineiro. Com direção de Marcus Santiago, produção musical de Augusto Nogueira e direção artística de Nara Soalheiro, o projeto captura a essência de um artista em sua forma mais genuína.",
      image: "/images/projeto-tiradentes1.webp",
      alt: "Geovani Medeiros cantando ao violão em um microfone vintage, com as torres de uma igreja barroca de Tiradentes ao fundo",
      aspect: "aspect-[1080/1744]",
      delayClass: "reveal-delay-2",
    },
    {
      label: "O Futuro",
      title: "Uma nova fase começa agora",
      text: "Com assinatura da Pacific Records, de Belo Horizonte, e disponível em todas as plataformas de streaming, 'Um Entardecer em Tiradentes' consolida Geovani no cenário mineiro e abre portas para novos públicos e palcos.",
      image: "/images/projeto-futuro.webp",
      alt: "Geovani Medeiros de braço erguido no gramado ao entardecer, com a banda completa atrás e o público sentado ao redor",
      aspect: "aspect-[3/2]",
      delayClass: "reveal-delay-3",
    },
  ];

  return (
    <section id="projeto" className="py-24 md:py-32 bg-terra-wine">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-20">
          <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
            O Projeto
          </p>
          <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
            Um Entardecer em{" "}
            <span className="text-terra-gold italic">Tiradentes</span>
          </h2>
          <div className="editorial-line editorial-line--gold mx-auto" />
          <p className="text-terra-cream/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            O registro de uma tarde só, ao ar livre, no alto de Tiradentes.
            O novo audiovisual de Geovani Medeiros.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {blocks.map((block, i) => (
            <ProjectBlock key={block.label} {...block} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
