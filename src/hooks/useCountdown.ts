import { useEffect, useState } from "react";

const DEADLINE_KEY = "hh_offer_deadline";

export interface Countdown {
  /** Segundos restantes. */
  seconds: number;
  /** Tempo formatado MM:SS. */
  display: string;
  expired: boolean;
  /** Últimos 3 minutos — usado para reforçar a urgência visual. */
  urgent: boolean;
  /** Fração restante (1 → 0), para barras de progresso. */
  fraction: number;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/**
 * Contagem única compartilhada por todos os timers da página.
 * O deadline persiste em sessionStorage: recarregar a página não reinicia
 * o relógio (escassez consistente — recarregar não "ganha" tempo).
 */
export function useCountdown(totalMinutes: number): Countdown {
  const totalSeconds = totalMinutes * 60;

  const [deadline] = useState<number>(() => {
    try {
      const stored = Number(sessionStorage.getItem(DEADLINE_KEY));
      if (stored > 0 && stored <= Date.now() + totalSeconds * 1000) {
        return stored;
      }
      const fresh = Date.now() + totalSeconds * 1000;
      sessionStorage.setItem(DEADLINE_KEY, String(fresh));
      return fresh;
    } catch {
      return Date.now() + totalSeconds * 1000;
    }
  });

  const remaining = () =>
    Math.max(0, Math.round((deadline - Date.now()) / 1000));

  const [seconds, setSeconds] = useState<number>(remaining);

  useEffect(() => {
    if (deadline - Date.now() <= 0) return;
    const id = setInterval(() => {
      const left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setSeconds(left);
      if (left <= 0) clearInterval(id);
    }, 250);
    return () => clearInterval(id);
  }, [deadline]);

  return {
    seconds,
    display: `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`,
    expired: seconds <= 0,
    urgent: seconds > 0 && seconds <= 180,
    fraction: totalSeconds > 0 ? seconds / totalSeconds : 0,
  };
}
