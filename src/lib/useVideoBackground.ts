"use client";

import { useEffect, useState } from "react";

/**
 * Decide se um vídeo de fundo deve ser exibido, poupando quem está com
 * economia de dados ligada, conexão muito lenta (2G) ou que pediu menos
 * movimento na tela (prefers-reduced-motion).
 */
export function useVideoBackgroundEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const saveData = conn?.saveData === true;
    const verySlow = /(^|-)2g$/.test(conn?.effectiveType ?? "");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setEnabled(!saveData && !verySlow && !reduced);
  }, []);

  return enabled;
}
