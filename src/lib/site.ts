/**
 * Fonte única de verdade para dados do site.
 * Usado em metadata, JSON-LD, sitemap, footer e CTAs.
 */

/** Domínio definitivo do cliente. */
const DOMINIO = "https://geovanimedeiros.com.br";

/**
 * URL base do site.
 *
 * Em produção na Vercel usa o domínio definitivo; em preview usa a própria
 * URL do deploy, para que canonical e Open Graph apontem para a página que a
 * pessoa está de fato vendo, e não para um domínio que pode ainda nem existir.
 */
const urlDoDeploy = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_ENV === "production" ? DOMINIO : urlDoDeploy) ??
  DOMINIO;

export const site = {
  name: "Geovani Medeiros",
  url: siteUrl,
  locale: "pt_BR",
  city: "Barbacena",
  state: "MG",
  region: "Campos das Vertentes",
  activeSince: "2014",
  tagline: "Música brasileira ao vivo para casamentos e eventos",
  whatsapp: "553284588496",
  social: {
    instagram: "https://www.instagram.com/geovanimedeirosoficial",
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
