"use client";

import { useReveal } from "@/lib/useReveal";

const showTypes = [
  {
    name: "Pocket",
    tagline: "Voz e violão, bem de perto",
    description:
      "Para quando a música precisa estar presente sem roubar a conversa. Funciona em cerimônia de casamento, jantar corporativo, restaurante, lounge e coquetel.",
    features: [
      "Voz e violão",
      "Repertório personalizado",
      "Até 2 horas de apresentação",
      "Sonorização inclusa (até 80 pessoas)",
      "Ideal para ambientes intimistas",
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Full",
    tagline: "Banda completa, pista cheia",
    description:
      "Para eventos maiores e mais elaborados, que pedem energia e estrutura. Banda com diversos músicos, equipe técnica de som e luz, e repertório preparado para a ocasião e para o público.",
    features: [
      "Voz, violão e gaita + banda completa",
      "Repertório montado para a ocasião e o público",
      "Até 3 horas de apresentação",
      "Equipe técnica de som e luz",
      "Ideal para grandes eventos e festivais",
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Personalizado",
    tagline: "Montado com você",
    description:
      "Quando nenhum formato pronto serve. Vocês definem juntos a formação, o repertório e a duração — música por música, momento por momento.",
    features: [
      "Formação e repertório sob demanda",
      "Participações especiais possíveis",
      "Duração flexível",
      "Consultoria de repertório inclusa",
      "Ideal para eventos temáticos",
    ],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

export default function ShowTypes() {
  const headerRef = useReveal();

  return (
    <section className="py-16 md:py-32 bg-terra-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-10 md:mb-16">
          <p className="text-terra-burn tracking-[0.2em] uppercase text-xs mb-4">
            Formatos de show
          </p>
          <h2 className="font-serif text-terra-dark text-3xl md:text-5xl mb-6">
            Três formatos,
            <br className="sm:hidden" />{" "}
            <span className="text-terra-burn italic">um para cada ocasião</span>
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-dark/75 mt-6 max-w-xl mx-auto leading-relaxed">
            Na dúvida entre dois? Conte o tamanho do espaço e quantas pessoas
            você espera &mdash; a recomendação vem junto com o orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {showTypes.map((show, i) => (
            <ShowCard key={show.name} {...show} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowCard({
  name,
  tagline,
  description,
  features,
  icon,
  index,
}: (typeof showTypes)[number] & { index: number }) {
  const ref = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1} bg-white p-8 rounded-sm border border-terra-gold/20 hover:border-terra-burn/40 hover:shadow-xl transition-all duration-500 flex flex-col`}
    >
      <div className="text-terra-burn mb-6">{icon}</div>

      <h3 className="font-serif text-terra-dark text-2xl mb-1">{name}</h3>
      <p className="text-terra-burn text-sm tracking-wide mb-4">{tagline}</p>

      {/* /75 e não /65: sobre o card branco, 65% dá 4.23:1 e reprova o AA de
          texto normal (4.5:1). A 75% sobe para 5.64:1. */}
      <p className="text-terra-dark/75 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <ul className="space-y-2 mt-auto">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-terra-dark/70">
            <svg
              className="w-4 h-4 text-terra-gold mt-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
