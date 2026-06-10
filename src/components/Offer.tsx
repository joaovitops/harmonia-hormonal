import {
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  ShieldCheck,
  Sparkles,
  TimerIcon,
} from "lucide-react";
import { Reveal } from "./ui";
import { useTimer } from "../context/timer";
import { checkoutUrlWithUtms, track } from "../lib/track";
import {
  CHECKOUT_URL,
  FULL_PRICE,
  PRICE,
  VALUE_STACK,
  VALUE_TOTAL,
} from "../config";

export function Offer() {
  const { display, urgent } = useTimer();

  return (
    <section id="oferta" className="relative scroll-mt-16 overflow-hidden px-4 py-20 sm:px-6">
      <div
        aria-hidden
        className="absolute -left-32 top-10 size-80 rounded-full bg-blush/80 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-10 size-80 rounded-full bg-terra/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-lg">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Pronta para se sentir{" "}
            <em className="text-terra">você mesma</em> de novo?
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-terra/10 bg-white shadow-2xl shadow-terra/15">
            <div className="flex items-center justify-center gap-2 bg-blush px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-terra-dark">
              <Sparkles className="size-3.5" aria-hidden />
              Desconto exclusivo do diagnóstico
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-center font-serif text-2xl font-bold">
                Protocolo Harmonia Hormonal
              </p>
              <p className="mt-1 text-center text-sm font-medium text-clay">
                Transformação completa em 21 dias
              </p>

              {/* empilhamento de valor */}
              <ul className="mt-6 space-y-2.5">
                {VALUE_STACK.map(({ label, value }) => (
                  <li
                    key={label}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="flex items-start gap-2 text-clay">
                      <Check className="mt-0.5 size-4 shrink-0 text-terra" aria-hidden />
                      {label}
                    </span>
                    <span className="shrink-0 font-medium text-clay line-through opacity-70">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl bg-cream p-5 text-center">
                <p className="text-sm text-clay">
                  Valor total:{" "}
                  <span className="font-semibold line-through">{VALUE_TOTAL}</span>
                </p>
                <p className="mt-2 text-sm font-medium text-clay">
                  Hoje, pelo seu diagnóstico:
                </p>
                <p className="mt-1 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                  <span className="whitespace-nowrap text-lg text-clay line-through">
                    {FULL_PRICE}
                  </span>
                  <span className="whitespace-nowrap font-serif text-5xl font-bold text-terra sm:text-6xl">
                    <span className="text-2xl sm:text-3xl">R$</span> 19,90
                  </span>
                </p>
                <p className="mt-2 text-xs font-medium text-clay">
                  pagamento único • acesso imediato • sem mensalidades
                </p>
              </div>

              <a
                href={checkoutUrlWithUtms(CHECKOUT_URL)}
                onClick={() =>
                  track("InitiateCheckout", {
                    content_name: "Protocolo Harmonia Hormonal",
                    value: 19.9,
                    currency: "BRL",
                  })
                }
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-terra px-6 py-4 text-center text-base font-bold text-white shadow-xl shadow-terra/30 transition-all duration-200 hover:scale-[1.02] hover:bg-terra-dark sm:text-lg"
              >
                <span>
                  Quero meu protocolo por{" "}
                  <span className="whitespace-nowrap">{PRICE}</span>
                </span>
                <ArrowRight
                  className="size-5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </a>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-clay">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="size-3.5 text-terra" aria-hidden />
                  Pagamento seguro
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CreditCard className="size-3.5 text-terra" aria-hidden />
                  Pix, cartão, boleto
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-terra" aria-hidden />
                  Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-clay">
            <TimerIcon className="size-4 text-terra" aria-hidden />
            Este desconto expira em{" "}
            <span
              className={`font-mono text-base font-bold tabular-nums text-terra ${
                urgent ? "animate-pulse" : ""
              }`}
            >
              {display}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
