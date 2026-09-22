"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu no Esc — padrão esperado de qualquer overlay.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navLinks = [
    { label: "Sobre", href: "/#sobre" },
    { label: "Projeto", href: "/#projeto" },
    { label: "Depoimentos", href: "/#depoimentos" },
    { label: "Mídia", href: "/#midia" },
    { label: "Agenda", href: "/#agenda" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-terra-dark/95 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-terra-cream text-xl md:text-2xl tracking-wide hover:text-terra-gold transition-colors"
        >
          Geovani Medeiros
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center min-h-[44px] px-1 text-terra-cream/80 hover:text-terra-gold text-sm tracking-widest transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contratacao"
            className="flex items-center min-h-[44px] px-6 rounded-full bg-terra-gold text-terra-dark text-sm font-medium tracking-widest hover:bg-terra-gold/90 transition-colors duration-300"
          >
            Contrate agora
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-terra-cream p-2.5 -mr-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        aria-hidden={!menuOpen}
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="bg-terra-dark/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center min-h-[44px] text-terra-cream/80 hover:text-terra-gold text-sm tracking-widest transition-colors border-b border-terra-cream/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contratacao"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center min-h-[44px] mt-2 rounded-full bg-terra-gold text-terra-dark text-sm font-medium tracking-widest hover:bg-terra-gold/90 transition-colors"
          >
            Contrate agora
          </Link>
        </nav>
      </div>
    </header>
  );
}
