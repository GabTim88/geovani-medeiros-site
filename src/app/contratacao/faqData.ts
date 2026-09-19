/**
 * FAQ da página de contratação.
 * Serve tanto a UI quanto o JSON-LD (FAQPage) — uma fonte, dois consumidores.
 *
 * TODO(cliente): revisar e confirmar cada resposta antes de publicar.
 * As respostas abaixo só afirmam o que já consta no site; onde falta
 * informação de negócio (raio de deslocamento, prazo de reserva, formas de
 * pagamento), o texto encaminha para o WhatsApp em vez de inventar um número.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Quais tipos de evento o Geovani atende?",
    answer:
      "Casamentos e cerimônias, eventos corporativos, aniversários, bares e restaurantes, festivais e eventos temáticos. O repertório e a formação mudam conforme a ocasião — do voz e violão intimista ao show completo com banda.",
  },
  {
    question: "Em quais cidades ele toca?",
    answer:
      "A base é Barbacena, em Minas Gerais, e a atuação se concentra na região de Campos das Vertentes — incluindo Tiradentes, São João del-Rei, Juiz de Fora e Belo Horizonte. Para outras cidades, é só perguntar pelo WhatsApp.",
  },
  {
    question: "Dá para escolher as músicas?",
    answer:
      "Sim. Todos os formatos incluem repertório personalizado, e no formato Personalizado há consultoria de repertório para montar a lista junto com você, momento a momento — cerimônia, jantar e festa têm climas diferentes.",
  },
  {
    question: "A sonorização está inclusa?",
    answer:
      "No formato Pocket, sim: a sonorização acompanha a apresentação em ambientes de até 80 pessoas. O formato Full inclui sonorização e iluminação profissionais. No Personalizado, a estrutura é definida caso a caso.",
  },
  {
    question: "Quanto tempo dura a apresentação?",
    answer:
      "O Pocket vai até 2 horas e o Full até 3 horas. No formato Personalizado a duração é flexível e combinada junto com o repertório.",
  },
  {
    question: "Como faço para contratar?",
    answer:
      "Chame no WhatsApp contando a data, a cidade e o tipo de evento. A partir dessas três informações já é possível sugerir o formato e enviar uma proposta com valores.",
  },
];
