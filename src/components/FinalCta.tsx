import { ArrowRight, ShieldCheck, TimerIcon, Zap } from "lucide-react";
import { Reveal } from "./ui";
import { useTimer } from "../context/timer";
import { scrollToOffer } from "../lib/track";
import { PRICE } from "../config";

export function FinalCta() {
  const { display, urgent } = useTimer();

  return (
    <section className="bg-blush px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">
          Você merece se sentir <em className="text-terra">inteira</em> de novo.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-clay sm:text-lg">
          Cada dia vivendo com sintomas ignorados é um dia a menos da sua
          vitalidade. Seu protocolo está pronto — basta acessar.
        </p>

        <button
          type="button"
          onClick={() => scrollToOffer("final_cta")}
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra px-10 py-4 text-base font-bold text-white shadow-xl shadow-terra/30 transition-all duration-200 hover:scale-[1.02] hover:bg-terra-dark sm:w-auto sm:text-lg"
        >
          <span>
            Começar meu protocolo agora —{" "}
            <span className="whitespace-nowrap">{PRICE}</span>
          </span>
          <ArrowRight
            className="size-5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          />
        </button>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-clay">
          <TimerIcon className="size-4 text-terra" aria-hidden />
          <span
            className={`font-mono text-base font-bold tabular-nums text-terra ${
              urgent ? "animate-pulse" : ""
            }`}
          >
            {display}
          </span>
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-medium text-clay">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-terra" aria-hidden />
            Garantia incondicional de 7 dias
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="size-3.5 text-terra" aria-hidden />
            Acesso imediato
          </span>
        </div>
      </Reveal>
    </section>
  );
}
