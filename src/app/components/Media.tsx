"use client";

import Image from "next/image";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";
import { useVideoBackgroundEnabled } from "@/lib/useVideoBackground";
import { site } from "@/lib/site";

/**
 * Vídeo de fundo da seção "Ouça agora": em loop, cobrindo a altura total
 * da seção, com a foto (midias.jpg) como fallback via onError.
 */
const MIDIA_VIDEO = "/videos/video-background-02.mp4";

export default function Media() {
  const headerRef = useReveal();
  const textRef = useReveal(0.1);
  const spotifyRef = useReveal(0.1);

  const showVideo = useVideoBackgroundEnabled();
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="midia"
      className="relative overflow-hidden py-16 md:py-32 bg-terra-dark"
    >
      <Image
        src="/images/midias.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {showVideo && !videoFailed ? (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => {
            setVideoReady(false);
            setVideoFailed(true);
          }}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={MIDIA_VIDEO} type="video/mp4" />
        </video>
      ) : null}

      {/* Véu a 88%: abaixo disso o kicker dourado reprova AA sobre os pontos
          mais claros da imagem de fundo. A imagem/vídeo fica como textura,
          não como assunto. */}
      <div className="absolute inset-0 bg-terra-dark/[0.88]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal text-center mb-10 md:mb-16">
          <p className="text-terra-gold tracking-[0.2em] uppercase text-xs mb-4">
            Ouça agora
          </p>
          <h2 className="font-serif text-terra-cream text-3xl md:text-5xl mb-6">
            Ouça, assista e acompanhe
          </h2>
          <div className="editorial-line mx-auto" />
          <p className="text-terra-cream/80 mt-6 max-w-xl mx-auto leading-relaxed">
            O som ao vivo e os bastidores da gravação em Tiradentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Texto */}
          <div ref={textRef} className="reveal reveal-delay-1">
            <h3 className="font-serif text-terra-cream text-2xl md:text-3xl mb-4 leading-snug">
              Do palco para o seu dia a dia
            </h3>
            <div className="w-10 h-[2px] bg-terra-gold mb-6" />
            <p className="text-terra-cream/70 leading-relaxed mb-4">
              As dez faixas de &ldquo;Um Entardecer em Tiradentes&rdquo; já
              estão no Spotify, prontas para tocar sempre que bater a
              vontade. Aperte o play ao lado e deixe. a sonoridade das gaitas, 
              violões e tantos outros instrumentos contarem, mais uma vez, 
              a história de uma tarde inteira em Tiradentes.
            </p>
            <p className="text-terra-cream/70 leading-relaxed">
              Quer ver os bastidores da gravação? Acompanhe pelo Instagram e
              pelo YouTube.
            </p>
          </div>

          {/* Spotify */}
          <div ref={spotifyRef} className="reveal reveal-delay-2">
            {/* Altura fixa de 352px reservada no wrapper: evita layout shift
                enquanto o iframe lazy carrega e mantém o player no formato
                "capa grande" (melhor toque no mobile). */}
            <div className="bg-terra-cream/5 rounded-xl overflow-hidden h-[352px]">
              <iframe
                src="https://open.spotify.com/embed/album/2wIFuQTB9t5U5YIimMVR5C?utm_source=generator&si=afa7d3c33bd84073"
                title="Player do Spotify com o álbum Um Entardecer em Tiradentes"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="block w-full h-full rounded-xl border-0"
              />
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir no Instagram"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-terra-gold/30 text-terra-gold hover:border-terra-gold hover:bg-terra-gold/10 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Assista no YouTube"
                className="h-11 flex items-center gap-2 rounded-full border border-terra-gold/30 px-5 text-terra-gold hover:border-terra-gold hover:bg-terra-gold/10 transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="text-sm tracking-wide whitespace-nowrap">
                  Assista no YouTube
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
