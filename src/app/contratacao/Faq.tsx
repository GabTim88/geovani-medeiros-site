"use client";

import { useReveal } from "@/lib/useReveal";
import { faq } from "./faqData";

export default function Faq() {
  const headerRef = useReveal();
  const listRef = useReveal(0.1);

  return (
    <section
      id="duvidas"
      aria-labelledby="duvidas-titulo"
      className="py-16 md:py-32 bg-terra-cream"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-10 md:mb-14">
          <p className="text-terra-burn tracking-[0.2em] uppercase text-xs mb-4">
            Dúvidas frequentes
          </p>
          <h2
            id="duvidas-titulo"
            className="font-serif text-terra-dark text-3xl md:text-5xl mb-6"
          >
            Antes de chamar no WhatsApp
          </h2>
          <div className="editorial-line mx-auto" />
        </div>

        <div ref={listRef} className="reveal divide-y divide-terra-gold/25">
          {faq.map((item) => (
            <details key={item.question} className="group py-1">
              {/* min-h-[44px] + py: como pergunta de uma linha só, o alvo de
                  toque ficava em 28px de altura. */}
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 py-3 font-serif text-terra-dark text-lg list-none marker:content-none">
                {item.question}
                <svg
                  className="w-5 h-5 shrink-0 text-terra-burn transition-transform duration-300 group-open:rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mb-3 mt-1 text-terra-dark/75 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
