import {
  ArrowRight,
  BadgeCheck,
  Flame,
  Leaf,
  Lock,
  Moon,
  Sparkles,
  Zap,
} from "lucide-react";
import { Avatar, Reveal, Stars } from "./ui";
import { scrollToOffer } from "../lib/track";
import { FULL_PRICE, PRICE } from "../config";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-fit">
      {/* brilho orgânico atrás do aparelho */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,#f7e4dc_55%,transparent)]"
      />

      <div className="w-[272px] rotate-2 rounded-[3rem] bg-espresso p-2.5 shadow-2xl shadow-espresso/40 transition-transform duration-500 hover:rotate-0 sm:w-[290px]">
        <div className="overflow-hidden rounded-[2.4rem] bg-cream">
          {/* dynamic island */}
          <div className="flex justify-center pt-3">
            <div className="h-6 w-24 rounded-full bg-espresso" />
          </div>

          <div className="px-5 pb-6 pt-5 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-terra shadow-lg shadow-terra/30">
              <Leaf className="size-7 text-cream" aria-hidden />
            </div>
            <p className="mt-3 font-serif text-xl font-bold leading-tight">
              Harmonia Hormonal
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-clay">
              Equilíbrio Total do Seu Corpo
            </p>

            {/* progresso dos 21 dias */}
            <div className="mt-5 rounded-2xl bg-white p-4 text-left shadow-sm">
              <div className="flex items-baseline justify-between">
                <p className="text-xs font-semibold text-ink">Seu protocolo</p>
                <p className="text-[10px] font-medium text-clay">21 dias</p>
              </div>
              <div className="mt-2.5 flex gap-1">
                {Array.from({ length: 21 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < 7 ? "bg-terra" : "bg-blush"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 space-y-2">
                <p className="flex items-center gap-2 text-[11px] text-clay">
                  <Moon className="size-3.5 text-terra" aria-hidden />
                  Rotina noturna do seu perfil
                </p>
                <p className="flex items-center gap-2 text-[11px] text-clay">
                  <Flame className="size-3.5 text-terra" aria-hidden />
                  Cardápio da fase: dia 7 de 21
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToOffer("phone_mockup")}
              className="mt-4 w-full rounded-full bg-terra py-3 text-sm font-bold text-white shadow-md shadow-terra/30 transition-colors hover:bg-terra-dark"
            >
              Iniciar Meu Protocolo
            </button>
          </div>
        </div>
      </div>

      {/* chips flutuantes de prova */}
      <div className="animate-float absolute -left-6 top-20 hidden items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl shadow-espresso/10 sm:flex">
        <BadgeCheck className="size-4 text-terra" aria-hidden />
        <p className="text-[11px] font-semibold">Dia 7 • sono restaurado</p>
      </div>
      <div className="animate-float-slow absolute -right-4 bottom-24 hidden items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl shadow-espresso/10 sm:flex">
        <Sparkles className="size-4 text-terra" aria-hidden />
        <p className="text-[11px] font-semibold">Perfil: Dominância Estrogênica</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
      {/* blobs decorativos */}
      <div
        aria-hidden
        className="absolute -right-32 -top-24 size-96 rounded-full bg-blush/70 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-72 size-80 rounded-full bg-terra/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-terra/25 bg-blush px-4 py-1.5 text-xs font-bold text-terra-dark">
            <Sparkles className="size-3.5" aria-hidden />
            Diagnóstico concluído • Perfil: Dominância Estrogênica
          </div>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            E se, em 21 dias, você{" "}
            <em className="text-terra">voltasse a ser você</em>?
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-clay sm:text-lg">
            Dormir a noite inteira. Acordar com vontade. Rir sem culpa, chorar
            sem motivo só quando você quiser. Seu corpo não está contra você —
            ele só está pedindo socorro num idioma que ninguém te ensinou a
            ouvir. A gente traduziu. E montou, com base no seu diagnóstico, o
            caminho de volta pra casa.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex -space-x-2.5">
              <Avatar name="Carla M" tone={0} className="size-9 text-xs" />
              <Avatar name="Renata S" tone={1} className="size-9 text-xs" />
              <Avatar name="Juliana P" tone={2} className="size-9 text-xs" />
            </div>
            <div>
              <Stars />
              <p className="mt-0.5 text-sm text-clay">
                Mais de <strong className="text-ink">14.200 mulheres</strong> já
                restauraram seu equilíbrio hormonal
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => scrollToOffer("hero")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-base font-bold text-white shadow-xl shadow-terra/30 transition-all duration-200 hover:scale-[1.02] hover:bg-terra-dark sm:w-auto sm:text-lg"
            >
              <span>
                Acessar meu protocolo por{" "}
                <span className="whitespace-nowrap">{PRICE}</span>
              </span>
              <ArrowRight
                className="size-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </button>

            <p className="mt-3 text-sm text-clay">
              <span className="line-through opacity-70">{FULL_PRICE}</span>{" "}
              <strong className="text-lg text-terra">{PRICE}</strong>{" "}
              <span className="text-xs">• pagamento único</span>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-medium text-clay">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3.5 text-terra" aria-hidden />
                Compra 100% segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="size-3.5 text-terra" aria-hidden />
                Acesso imediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-3.5 text-terra" aria-hidden />
                Garantia de 7 dias
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <PhoneMockup />
        </Reveal>
      </div>
    </header>
  );
}
