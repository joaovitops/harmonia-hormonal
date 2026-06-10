import { useEffect, useState } from "react";
import { useTimer } from "../context/timer";
import { scrollToOffer } from "../lib/track";
import { PRICE } from "../config";

/**
 * CTA fixo inferior — aparece depois que a visitante rola além do hero,
 * para não competir com o CTA principal na primeira dobra.
 */
export function BottomBar() {
  const { display, urgent } = useTimer();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-terra/15 bg-cream/95 px-4 pt-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        onClick={() => scrollToOffer("bottom_bar")}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-terra py-3.5 text-base font-bold text-white shadow-lg shadow-terra/30 transition-all duration-200 hover:bg-terra-dark active:scale-[0.98]"
      >
        Garantir {PRICE}
        <span aria-hidden>•</span>
        <span className={`font-mono tabular-nums ${urgent ? "animate-pulse" : ""}`}>
          {display}
        </span>
      </button>
    </div>
  );
}
