import type { ReactNode } from "react";
import {
  CalendarCheck,
  Gift,
  Mail,
  ShieldCheck,
  Undo2,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./ui";
import { SUPPORT_EMAIL } from "../config";

const COLUMNS: { icon: LucideIcon; title: string; text: ReactNode }[] = [
  {
    icon: CalendarCheck,
    title: "Como funciona",
    text: "A garantia começa no dia da compra e vale por 7 dias corridos, mesmo que você ainda nem tenha começado o protocolo.",
  },
  {
    icon: Mail,
    title: "Como solicitar",
    text: (
      <>
        Manda um email pra{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-semibold text-terra underline decoration-terra/40 underline-offset-2 hover:text-terra-dark"
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        com a frase “quero meu reembolso”. Só isso.
      </>
    ),
  },
  {
    icon: Undo2,
    title: "Prazo do estorno",
    text: "O valor cai de volta na sua conta em até 5 dias úteis, no mesmo método de pagamento que você usou.",
  },
];

export function Guarantee() {
  return (
    <section className="bg-white/60 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-terra/25 bg-blush px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-terra-dark">
            <ShieldCheck className="size-4" aria-hidden />
            Risco zero pra você
          </div>

          <div className="relative mx-auto mt-8 w-fit">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-blush/80 blur-xl"
            />
            <div className="relative flex size-24 items-center justify-center rounded-full bg-terra shadow-xl shadow-terra/30">
              <ShieldCheck className="size-12 text-cream" aria-hidden />
            </div>
          </div>

          <h2 className="mt-7 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            7 dias pra sentir. Se não sentir,{" "}
            <em className="text-terra">a gente devolve tudo</em>.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-clay">
            Você experimenta o protocolo inteiro. Lê os bônus. Testa as
            receitas. Se em 7 dias seu corpo não responder como você esperava, a
            gente devolve cada centavo — sem perguntas, sem formulário cheio de
            campos, sem você precisar justificar nada.
          </p>

          <div className="mx-auto mt-6 flex max-w-2xl items-start gap-3 rounded-3xl border border-terra/15 bg-blush/50 p-5 text-left sm:items-center">
            <Gift className="mt-0.5 size-6 shrink-0 text-terra sm:mt-0" aria-hidden />
            <p className="text-sm leading-relaxed">
              <strong>E mais:</strong> se você pedir reembolso, os 3 bônus
              continuam sendo seus. É o nosso jeito de agradecer por ter dado
              uma chance — o risco é 100% nosso, nunca seu.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 text-center md:grid-cols-3 md:gap-6">
          {COLUMNS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-blush">
                <Icon className="size-5 text-terra" aria-hidden />
              </div>
              <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.22em]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-clay">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <blockquote className="mx-auto max-w-2xl font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
            “Se a gente não tivesse certeza absoluta, não daria essa garantia.
            Comece tranquila — o risco é todo nosso.”
          </blockquote>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-clay">
            — Equipe Harmonia Hormonal
          </p>
        </Reveal>
      </div>
    </section>
  );
}
