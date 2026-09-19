/**
 * Fonte única de verdade para dados do site.
 * Usado em metadata, JSON-LD, sitemap, footer e CTAs.
 */

export const site = {
  name: "Geovani Medeiros",
  url: "https://geovanimedeiros.com.br",
  locale: "pt_BR",
  city: "Barbacena",
  state: "MG",
  region: "Campos das Vertentes",
  activeSince: "2014",
  tagline: "Música brasileira ao vivo para casamentos e eventos",
  whatsapp: "553284588496",
  social: {
    instagram: "https://instagram.com/geovanimedeiros",
    youtube: "https://youtube.com/@geovanimedeirosoficial",
    spotify: "https://open.spotify.com/user/21tii3nlto6nvbamkdxfjiu5i",
  },
  /**
   * Agenda pública no Google Calendar.
   * O embed só renderiza se o calendário estiver com "Disponibilizar
   * publicamente" ligado nas configurações de compartilhamento.
   */
  calendarId: "digioassis@gmail.com",
  /** Cidades atendidas — alimenta o areaServed do JSON-LD (SEO local). */
  areaServed: [
    "Barbacena",
    "Tiradentes",
    "São João del-Rei",
    "Juiz de Fora",
    "Belo Horizonte",
    "Campos das Vertentes",
  ],
} as const;

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
