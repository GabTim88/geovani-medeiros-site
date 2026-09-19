"use client";

import { useReveal } from "@/lib/useReveal";
import { site, whatsappLink } from "@/lib/site";

export default function Agenda() {
  const copyRef = useReveal();
  const cardRef = useReveal(0.1);

  const calendarSrc =
    `https://calendar.google.com/calendar/embed` +
    `?src=${encodeURIComponent(site.calendarId)}` +
    `&ctz=America%2FSao_Paulo&mode=AGENDA&wkst=1` +
    `&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0`;

  return (
    <section
      id="agenda"
      aria-labelledby="agenda-titulo"
      className="relative overflow-hidden bg-terra-dark border-t border-terra-cream/10 py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        {/* Texto lateral */}
        <div ref={copyRef} className="reveal">
          <p className="text-terra-gold tracking-[0.3em] uppercase text-[0.65rem] mb-3">
            Disponibilidade
          </p>
          <h2
            id="agenda-titulo"
            className="font-serif text-terra-cream text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6"
          >
            Agenda
            <br />
            <span className="text-terra-gold italic">do artista.</span>
          </h2>
          <div className="editorial-line mb-8" />

          <div className="space-y-4 text-terra-cream/75 leading-relaxed max-w-md">
            <p>
              Consulte as datas já comprometidas e veja se o seu dia está livre.
              A agenda é a mesma que o Geovani usa no dia a dia, então o que
              está aqui é o que vale.
            </p>
            <p>
              Achou sua data em aberto? Chame no WhatsApp para segurar. Não
              achou? Fale com a gente mesmo assim &mdash; às vezes dá para
              encaixar.
            </p>
          </div>

          <a
            href={whatsappLink(
              "Olá, Geovani! Vi a agenda no site e queria consultar a disponibilidade para [data], em [cidade]."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra-gold px-8 py-3.5 text-terra-dark text-[0.78rem] font-medium tracking-[0.1em] uppercase hover:bg-terra-cream transition-colors duration-300"
          >
            Consultar uma data
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Card da agenda */}
        <div ref={cardRef} className="reveal reveal-delay-1">
          <div className="rounded-[18px] border border-terra-cream/15 bg-terra-cream/5 overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-terra-cream/15 px-6 py-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-terra-burn" />
                <span className="w-2.5 h-2.5 rounded-full bg-terra-gold" />
                <span className="w-2.5 h-2.5 rounded-full bg-terra-cream/40" />
              </div>
              <p className="text-terra-cream/70 tracking-[0.15em] uppercase text-[0.65rem]">
                Agenda &mdash; Geovani Medeiros
              </p>
              <div className="w-[38px]" aria-hidden="true" />
            </div>

            <iframe
              src={calendarSrc}
              title="Agenda de shows de Geovani Medeiros"
              className="gcal-embed"
              height={420}
              loading="lazy"
              scrolling="no"
            />
          </div>

          <p className="mt-4 text-terra-cream/60 text-xs text-center">
            Horário de Brasília. Datas sujeitas a confirmação.
          </p>
        </div>
      </div>
    </section>
  );
}
