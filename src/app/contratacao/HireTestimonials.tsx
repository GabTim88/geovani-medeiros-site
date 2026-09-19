"use client";

import { useReveal } from "@/lib/useReveal";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import Carousel from "../components/Carousel";


export default function HireTestimonials() {
  const ref = useReveal();

  return (
    <section className="py-24 md:py-32 bg-terra-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="reveal text-center mb-16">
          <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
            Quem já contratou
          </p>
          <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
            Experiências que{" "}
            <span className="text-terra-gold italic">falam por si</span>
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-cream/70 mt-6 max-w-xl mx-auto leading-relaxed">
            De casamento intimista a evento corporativo: veja como foi para quem
            já passou por essa conversa.
          </p>
        </div>

      </div>

      <Carousel
        ariaLabel="Depoimentos de clientes"
        speed={28}
      >
        {testimonials.map((t) => (
          <HireTestimonialCard key={t.name} {...t} />
        ))}
      </Carousel>
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
      <blockquote className="text-terra-cream/70 leading-relaxed text-sm mb-6 italic">
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
