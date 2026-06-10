import { Clock3 } from "lucide-react";
import { useTimer } from "../context/timer";
import { scrollToOffer } from "../lib/track";
import { PRICE } from "../config";

export function TopBar() {
  const { display, urgent } = useTimer();

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-terra-dark text-cream shadow-md shadow-espresso/10">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <p className="flex min-w-0 items-center gap-2 text-xs font-medium sm:text-sm">
          <Clock3 className="size-4 shrink-0" aria-hidden />
          <span className="sm:hidden">Expira em</span>
          <span className="hidden sm:inline">Desconto expira em</span>
          <span
            className={`rounded-md bg-white/15 px-1.5 py-0.5 font-mono text-sm font-bold tabular-nums sm:text-base ${
              urgent ? "animate-pulse" : ""
            }`}
          >
            {display}
          </span>
        </p>
        <button
          type="button"
          onClick={() => scrollToOffer("top_bar")}
          className="shrink-0 rounded-full bg-cream px-4 py-1.5 text-xs font-bold text-terra-dark transition-all duration-200 hover:bg-white hover:shadow-lg sm:text-sm"
        >
          Garantir {PRICE}
        </button>
      </div>
    </div>
  );
}
