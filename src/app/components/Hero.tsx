"use client";

import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useVideoBackgroundEnabled } from "@/lib/useVideoBackground";

/**
 * Vídeo de fundo do hero.
 *
 * hero.mp4: 15.6MB, 20.5s, 1080p, ~6.4 Mbps, com o moov no início
 * (faststart), então começa a tocar sem baixar o arquivo inteiro.
 *
 * O vídeo só carrega em telas >= 768px (ver useVideoBackgroundEnabled).
 * `hero.webp` pinta primeiro (é ela o LCP) e sai de cena assim que o vídeo
 * está pronto — nunca ficam as duas visíveis ao mesmo tempo. A foto é o
 * fundo único no celular, com economia de dados ligada, conexão 2g,
 * preferência por movimento reduzido, ou falha no download.
 *
 * A 6.4 Mbps o arquivo ainda é pesado para 20s: ~1.8 Mbps daria ~4.6MB.
 */
const HERO_VIDEO: { mp4: string | null; webm?: string } = {
  mp4: "/videos/hero.mp4",
  webm: undefined,
};

/** Primeiro quadro / fallback do hero. */
const HERO_POSTER = "/images/hero.webp";

/** Fundo do hero em telas < 768px. */
const HERO_POSTER_MOBILE = "/images/09.webp";

/**
 * Fração da altura da viewport em que a fase do logotipo dá lugar ao texto.
 * O trilho tem 200vh (ver .hero-track), então depois da troca o texto ainda
 * fica ~55vh na tela antes da seção terminar — tempo de sobra para o CTA
 * entrar (0,8s de atraso) e ser lido.
 */
const PHASE_SWITCH = 0.45;

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  // Só para a entrada do logotipo na montagem.
  const [mounted, setMounted] = useState(false);
  // Vídeo só em tela larga, sem economia de dados/2g/movimento reduzido.
  // No celular e em qualquer falha, a foto assume.
  const videoAllowed = useVideoBackgroundEnabled();
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = videoAllowed && !videoFailed;
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const logo = logoRef.current;
    const text = textRef.current;
    const hint = hintRef.current;

    if (reduced) {
      logo?.classList.add("visible");
      text?.classList.add("visible");
      return;
    }

    // Entrada: o logotipo surge logo após a montagem em vez de já estar lá.
    const enter = window.setTimeout(() => setMounted(true), 80);

    let ticking = false;
    const update = () => {
      ticking = false;
      const past = window.scrollY >= PHASE_SWITCH * window.innerHeight;

      logo?.classList.toggle("visible", !past);
      text?.classList.toggle("visible", past);
      if (hint) hint.style.opacity = past ? "0" : "1";
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.clearTimeout(enter);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const common = {
    alt: "",
    "aria-hidden": true,
    fill: true,
    priority: true,
    sizes: "100vw",
  } as const;
  const { props: desktopProps } = getImageProps({
    ...common,
    src: HERO_POSTER,
  });
  const { props: mobileProps } = getImageProps({
    ...common,
    src: HERO_POSTER_MOBILE,
  });

  return (
    <section id="inicio" className="hero-track">
      <div className="hero-stage bg-terra-dark">
        {/* Fundo */}
        <div className="absolute inset-0">
          {/*
            Primeiro quadro: é ele o LCP. Sai de cena quando o vídeo assume —
            as duas camadas visíveis ao mesmo tempo somavam um composto turvo.
          */}
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopProps.srcSet} />
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              {...mobileProps}
              className={`object-cover transition-opacity duration-1000 ${
                videoReady ? "opacity-0" : "opacity-60"
              }`}
            />
          </picture>

          {showVideo && HERO_VIDEO.mp4 ? (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                videoReady ? "opacity-60" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              onError={() => {
                // Falhou o download: a foto continua no lugar.
                setVideoReady(false);
                setVideoFailed(true);
              }}
              aria-hidden="true"
              tabIndex={-1}
            >
              {HERO_VIDEO.webm ? (
                <source src={HERO_VIDEO.webm} type="video/webm" />
              ) : null}
              <source src={HERO_VIDEO.mp4} type="video/mp4" />
            </video>
          ) : null}

          {/* Véu: contraste do logotipo sobre qualquer frame do vídeo */}
          <div className="absolute inset-0 bg-gradient-to-b from-terra-dark/80 via-terra-dark/40 to-terra-dark/90" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 60%, rgba(133,58,20,0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="hero-layer">
          {/* Fase 1 — o logotipo É o h1, mantendo a semântica sem texto duplicado */}
          <div
            ref={logoRef}
            className={`hero-phase-logo ${mounted ? "visible" : ""}`}
          >
            <h1>
              <Image
                src="/images/logo-geovani-medeiros-hero.png"
                alt="Geovani Medeiros"
                width={1600}
                height={585}
                priority
                sizes="(max-width: 768px) 78vw, 560px"
                className="w-[78vw] max-w-[560px] h-auto mx-auto"
              />
            </h1>
            <span className="text-terra-gold tracking-[0.35em] uppercase text-[0.65rem] md:text-xs">
              Voz, violões, gaitas e banda &bull; Barbacena/MG
            </span>
          </div>

          {/* Fase 2 — demais informações */}
          <div ref={textRef} className="hero-phase-text">
            <div className="editorial-line mx-auto mb-6" />
            <p className="font-serif text-terra-cream text-xl md:text-3xl max-w-3xl mx-auto leading-snug">
              Música brasileira, da melhor qualidade, ao vivo, que transforma todos os eventos em{" "}
              <span className="text-terra-gold italic">Minas Gerais e no Brasil</span>.
            </p>
            <p className="text-terra-cream/70 text-sm md:text-base mt-4">
              Desde 2014, no palco &mdash; e junto do público.
            </p>
            {/* Entra depois do último texto (ver .hero-cta) */}
            <Link
              href="/contratacao"
              className="hero-cta inline-flex items-center justify-center min-h-[48px] mt-8 px-8 rounded-full bg-terra-gold text-terra-dark text-sm font-medium tracking-widest uppercase hover:bg-terra-cream transition-colors duration-300"
            >
              Contrate agora
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          ref={hintRef}
          className="hero-hint absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-terra-cream/60 tracking-[0.2em] uppercase text-[0.62rem]">
            role
          </span>
          <span className="block w-px h-10 bg-gradient-to-b from-terra-gold/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
