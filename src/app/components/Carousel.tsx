"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

/**
 * Faixa horizontal com rolagem automática contínua (direita -> esquerda).
 *
 * - Auto-scroll via requestAnimationFrame sobre `scrollLeft`, e não via
 *   transform: assim o arrasto nativo por toque no mobile funciona de graça,
 *   com a inércia do próprio sistema.
 * - Pausa no hover (mouse), no foco por teclado e enquanto a pessoa arrasta.
 * - Loop infinito: a lista é renderizada duas vezes. A distância do loop é
 *   MEDIDA (offsetLeft do 2º grupo menos o do 1º), e não estimada como metade
 *   do scrollWidth — metade não inclui o gap entre os grupos e produziria um
 *   salto visível a cada volta.
 * - prefers-reduced-motion: não anima; vira uma faixa rolável comum.
 */
export default function Carousel({
  children,
  ariaLabel,
  /** Pixels por segundo. */
  speed = 32,
  /** Espera antes de retomar depois do arrasto. */
  resumeDelay = 2000,
}: {
  children: ReactNode;
  ariaLabel: string;
  speed?: number;
  resumeDelay?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const groupARef = useRef<HTMLDivElement>(null);
  const groupBRef = useRef<HTMLDivElement>(null);

  // Refs e não state: pausar não deve reiniciar o loop de animação.
  const pausedRef = useRef(false);
  const loopRef = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const measure = useCallback(() => {
    const a = groupARef.current;
    const b = groupBRef.current;
    if (a && b) loopRef.current = b.offsetLeft - a.offsetLeft;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (groupARef.current) ro.observe(groupARef.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => ro.disconnect();
    }

    let raf = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(now - last, 100); // ignora saltos ao voltar de aba
      last = now;

      const loop = loopRef.current;
      if (!pausedRef.current && loop > 0) {
        let next = el.scrollLeft + (speed * dt) / 1000;
        if (next >= loop) next -= loop;
        el.scrollLeft = next;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [speed, measure]);

  // Se a pessoa arrastar para trás além do início, reentra pelo fim.
  const onScroll = () => {
    const el = scrollerRef.current;
    const loop = loopRef.current;
    if (!el || loop <= 0) return;
    if (el.scrollLeft <= 0) el.scrollLeft = loop;
  };

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };

  const resume = (delay = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    []
  );

  return (
    <div
      ref={scrollerRef}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      onScroll={onScroll}
      onMouseEnter={pause}
      onMouseLeave={() => resume()}
      onFocus={pause}
      onBlur={() => resume()}
      onPointerDown={pause}
      onPointerUp={() => resume(resumeDelay)}
      onPointerCancel={() => resume(resumeDelay)}
      className="no-scrollbar overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]"
    >
      <div className="flex w-max gap-8 px-6 py-2">
        <div ref={groupARef} className="flex gap-8">
          {children}
        </div>
        {/* Cópia para o loop — escondida de leitores de tela */}
        <div ref={groupBRef} className="flex gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
