import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terra-dark py-16 border-t border-terra-cream/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-terra-cream text-2xl hover:text-terra-gold transition-colors">
              Geovani Medeiros
            </Link>
            <p className="text-terra-cream/70 text-sm mt-3 leading-relaxed">
              Cantor, violonista e gaitista de Barbacena MG. Musica brasileira ao vivo para eventos diversos, como festivais, corporativos, bares, pubs, palcos em Minas Gerais desde {site.activeSince}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
              Navegação
            </p>
            {/* Alvos de 44px encostados, sem gap: a 20px de altura os links
                reprovavam o mínimo de alvo de toque da WCAG 2.5.8. */}
            <nav className="flex flex-col -my-2">
              {[
                { label: "Início", href: "/#inicio" },
                { label: "Sobre", href: "/#sobre" },
                { label: "Projeto", href: "/#projeto" },
                { label: "Depoimentos", href: "/#depoimentos" },
                { label: "Galeria", href: "/#galeria" },
                { label: "Agenda", href: "/#agenda" },
                { label: "Contratação", href: "/contratacao" },
                { label: "Dúvidas frequentes", href: "/contratacao#duvidas" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center min-h-[44px] text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
              Onde acompanhar
            </p>
            <div className="flex flex-col -my-2">
              {[
                { label: "Instagram", href: site.social.instagram },
                { label: "YouTube", href: site.social.youtube },
                { label: "Spotify", href: site.social.spotify },
                {
                  label: "WhatsApp",
                  href: whatsappLink(
                    "Olá, Geovani! Gostaria de saber mais sobre seus shows."
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center min-h-[44px] text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-terra-cream/10 pt-8 text-center">
          <p className="text-terra-cream/60 text-xs tracking-wide">
            &copy; {currentYear} Geovani Medeiros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
