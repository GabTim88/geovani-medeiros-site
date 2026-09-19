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
              Cantor, violonista e gaitista de Barbacena/MG. Música brasileira
              ao vivo para casamentos, eventos corporativos e festivais em Minas
              Gerais desde {site.activeSince}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
              Navegação
            </p>
            <nav className="flex flex-col gap-2">
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
                  className="text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
              Redes sociais
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
              >
                Instagram
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
              >
                YouTube
              </a>
              <a
                href={site.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
              >
                Spotify
              </a>
              <a
                href={whatsappLink(
                  "Olá, Geovani! Gostaria de saber mais sobre seus shows."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terra-cream/70 hover:text-terra-gold text-sm transition-colors"
              >
                WhatsApp
              </a>
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
