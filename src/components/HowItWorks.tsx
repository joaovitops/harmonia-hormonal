import { CalendarDays, HeartPulse, Smartphone, type LucideIcon } from "lucide-react";
import { Overline, Reveal } from "./ui";

const STEPS: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    icon: Smartphone,
    title: "Acesse seu app",
    description: "Login imediato após a compra, disponível em qualquer celular.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Siga seu protocolo de 21 dias",
    description:
      "15 minutos por dia, com orientações específicas para sua fase hormonal.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Sinta a transformação",
    description:
      "A maioria das mulheres relata mudanças significativas já na primeira semana.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white/60 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Overline>Como funciona</Overline>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Do diagnóstico ao equilíbrio em{" "}
            <em className="text-terra">3 passos simples</em>
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* linha pontilhada conectando os passos no desktop */}
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-terra/25 md:block"
          />

          {STEPS.map(({ number, icon: Icon, title, description }, i) => (
            <Reveal key={number} delay={i * 140}>
              <div className="relative text-center">
                <div className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-terra font-serif text-xl font-bold text-white shadow-lg shadow-terra/30">
                  {number}
                </div>
                <div className="mx-auto mt-4 flex size-11 items-center justify-center rounded-2xl bg-blush">
                  <Icon className="size-5 text-terra" aria-hidden />
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-clay">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
