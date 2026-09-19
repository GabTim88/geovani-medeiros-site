"use client";

import { useReveal } from "@/lib/useReveal";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import Carousel from "./Carousel";


export default function Testimonials() {
  const headerRef = useReveal();

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-terra-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-terra-burn tracking-[0.2em] uppercase text-xs mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-terra-dark text-3xl md:text-5xl mb-6">
            Quem contratou,{" "}
            <span className="text-terra-burn italic">conta por quê</span>
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-dark/75 mt-6 max-w-xl mx-auto leading-relaxed">
            Noivos, produtores e donos de casa de show &mdash; o que eles dizem
            depois da última música.
          </p>
        </div>
      </div>

      {/* Full-bleed: a faixa atravessa a tela inteira */}
      <Carousel ariaLabel="Depoimentos de quem já contratou Geovani Medeiros">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </Carousel>
    </section>
  );
}

function TestimonialCard({ quote, name, location, context }: Testimonial) {
  return (
    <figure className="w-[85vw] sm:w-[420px] shrink-0 flex flex-col bg-white/60 backdrop-blur-sm p-8 rounded-sm border border-terra-gold/20 hover:border-terra-gold/50 transition-colors duration-500">
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-terra-gold/70 mb-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <blockquote className="text-terra-dark/70 leading-relaxed text-sm mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="border-t border-terra-gold/20 pt-4 mt-auto">
        <p className="font-serif text-terra-dark font-medium">{name}</p>
        <p className="text-terra-burn text-xs tracking-wide">
          {context}
          {location ? ` · ${location}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
