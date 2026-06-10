import { createContext, useContext, type ReactNode } from "react";
import { useCountdown, type Countdown } from "../hooks/useCountdown";
import { TIMER_MINUTES } from "../config";

const TimerContext = createContext<Countdown | null>(null);

export function TimerProvider({ children }: { children: ReactNode }) {
  const countdown = useCountdown(TIMER_MINUTES);
  return <TimerContext.Provider value={countdown}>{children}</TimerContext.Provider>;
}

export function useTimer(): Countdown {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error("useTimer deve ser usado dentro de <TimerProvider>");
  return ctx;
}
