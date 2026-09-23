"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { useVideoBackgroundEnabled } from "@/lib/useVideoBackground";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import Carousel from "../components/Carousel";

/**
 * Mesmo vídeo e mesma foto de fallback da seção "Ouça agora" da home — só
 * carrega em tela larga, e a foto assume quando o vídeo não vem.
 */
const TESTIMONIALS_VIDEO = "/videos/video-background-02.mp4";
const TESTIMONIALS_POSTER = "/images/midias.jpg";

export default function HireTestimonials() {
  const ref = useReveal();
  const showVideo = useVideoBackgroundEnabled();
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 md:py-32 bg-terra-dark">
      <Image
        src={TESTIMONIALS_POSTER}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {showVideo && !videoFailed ? (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => {
            setVideoReady(false);
            setVideoFailed(true);
          }}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={TESTIMONIALS_VIDEO} type="video/mp4" />
        </video>
      ) : null}

      {/* Véu a 88%, mesmo tratamento da seção "Ouça agora": mantém o
          contraste do kicker dourado e dos cards sobre o vídeo. */}
      <div className="absolute inset-0 bg-terra-dark/[0.88]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-10 md:mb-16">
          <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
            Quem já contratou
          </p>
          <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
            Experiências que falam por si
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-cream/70 mt-6 max-w-xl mx-auto leading-relaxed">
            De casamento intimista a evento corporativo: veja como foi para quem
            já passou por essa conversa.
          </p>
        </div>

      </div>

      <div className="relative z-10">
        <Carousel ariaLabel="Depoimentos de clientes" speed={28}>
          {testimonials.map((t) => (
            <HireTestimonialCard key={t.name} {...t} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function HireTestimonialCard({
  quoteShort,
  name,
  location,
  context,
}: Testimonial) {
  return (
    <figure className="w-[85vw] sm:w-[400px] shrink-0 flex flex-col bg-terra-cream/5 backdrop-blur-sm p-8 rounded-sm border border-terra-cream/10">
      <p className="text-terra-gold text-xs tracking-[0.2em] uppercase mb-4">
        {context}
      </p>
      <blockquote className="text-terra-cream/85 leading-relaxed text-sm mb-6 italic">
        &ldquo;{quoteShort}&rdquo;
      </blockquote>
      <figcaption className="border-t border-terra-cream/10 pt-4 mt-auto">
        <p className="font-serif text-terra-cream font-medium">{name}</p>
        {location ? (
          <p className="text-terra-gold/80 text-xs">{location}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
