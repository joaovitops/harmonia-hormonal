import { LockOpen } from "lucide-react";
import { Reveal } from "./ui";
import { useTimer } from "../context/timer";
import { DISCOUNT_PERCENT } from "../config";

export function DiscountCard() {
  const { display, urgent, fraction } = useTimer();

  return (
    <section className="bg-blush px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-terra/10 sm:p-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blush">
            <LockOpen className="size-6 text-terra" aria-hidden />
          </div>

          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl">
            Desconto do diagnóstico desbloqueado
          </h2>

          <p className="mt-3 text-clay">
            Você completou o questionário hormonal e ganhou{" "}
            <strong className="text-terra">{DISCOUNT_PERCENT} de desconto</strong>.
            Este benefício é válido apenas pelos próximos minutos.
          </p>

          <div className="mt-6 rounded-2xl border border-terra/15 bg-cream px-8 py-5">
            <p
              className={`font-mono text-5xl font-bold tabular-nums text-terra sm:text-6xl ${
                urgent ? "animate-pulse" : ""
              }`}
            >
              {display}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.3em] text-clay">
              minutos&nbsp;&nbsp;segundos
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-blush">
              <div
                className="h-full rounded-full bg-terra transition-[width] duration-1000 ease-linear"
                style={{ width: `${fraction * 100}%` }}
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-clay">
            Quando o tempo zerar, esta página volta ao preço cheio.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
