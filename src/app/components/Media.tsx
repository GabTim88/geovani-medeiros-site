"use client";

import { useReveal } from "@/lib/useReveal";
import { site } from "@/lib/site";

export default function Media() {
  const headerRef = useReveal();
  const spotifyRef = useReveal(0.1);
  const youtubeRef = useReveal(0.1);

  return (
    <section id="midia" className="py-24 md:py-32 bg-terra-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-16">
          <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
            Mídia
          </p>
          <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
            Ouça, assista e{" "}
            <span className="text-terra-gold italic">acompanhe</span>
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-cream/70 mt-6 max-w-xl mx-auto leading-relaxed">
            O som ao vivo e os bastidores da gravação em Tiradentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Spotify */}
          <div ref={spotifyRef} className="reveal reveal-delay-1">
            <h3 className="font-serif text-terra-cream text-xl mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-terra-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </h3>
            <div className="bg-terra-cream/5 rounded-lg overflow-hidden">
              {/* TODO(cliente): confirmar o ID. O mesmo valor aparece como
                  artist ID aqui e como user ID no rodapé — um dos dois está errado. */}
              <iframe
                src="https://open.spotify.com/embed/artist/21tii3nlto6nvbamkdxfjiu5i?utm_source=generator&theme=0"
                title="Player do Spotify com as músicas de Geovani Medeiros"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* YouTube */}
          <div ref={youtubeRef} className="reveal reveal-delay-2">
            <h3 className="font-serif text-terra-cream text-xl mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-terra-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </h3>
            <div className="bg-terra-cream/5 rounded-lg overflow-hidden">
              {/* Replace VIDEO_ID with actual video */}
              <div className="aspect-video bg-terra-dark/50 flex flex-col items-center justify-center gap-3 rounded-lg px-6 text-center">
                <p className="text-terra-cream/80 font-serif italic">
                  Os vídeos de &ldquo;Um Entardecer em Tiradentes&rdquo; chegam em
                  breve.
                </p>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terra-gold text-sm tracking-widest uppercase underline underline-offset-4 hover:text-terra-cream transition-colors"
                >
                  Inscrever-se no canal
                </a>
              </div>
              {/* When video is ready, uncomment: */}
              {/* <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                width="100%"
                className="aspect-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
