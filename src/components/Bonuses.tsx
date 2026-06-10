import {
  BookOpen,
  ClipboardCheck,
  Gift,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./ui";

const BONUSES: {
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
}[] = [
  {
    label: "Bônus 1",
    icon: BookOpen,
    title: "Guia dos 12 Alimentos Hormonais",
    description:
      "PDF prático com os 12 alimentos que mais ajudam a regular seus hormônios — e como incluir cada um no dia a dia.",
    value: "R$ 27,00",
  },
  {
    label: "Bônus 2",
    icon: ClipboardCheck,
    title: "Checklist do Exame Hormonal Completo",
    description:
      "A lista exata de exames para levar ao médico e finalmente investigar o que os exames de rotina não mostram.",
    value: "R$ 19,00",
  },
  {
    label: "Bônus 3",
    icon: MessageSquareText,
    title: "Roteiro da Consulta Inteligente",
    description:
      "Um guia que ensina exatamente o que falar pro ginecologista/endocrinologista: quais exames pedir, como descrever sintomas pra ser levada a sério, perguntas que não podem faltar.",
    value: "R$ 37,00",
  },
];

export function Bonuses() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blush">
            <Gift className="size-6 text-terra" aria-hidden />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
            E você ainda recebe estes{" "}
            <em className="text-terra">bônus gratuitos</em>:
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {BONUSES.map(({ label, icon: Icon, title, description, value }, i) => (
            <Reveal key={label} delay={i * 120}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm shadow-terra/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-terra/10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-terra">
                  {label}
                </p>
                <div className="mt-3 flex size-11 items-center justify-center rounded-2xl bg-blush">
                  <Icon className="size-5 text-terra" aria-hidden />
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-clay">
                  {description}
                </p>
                <p className="mt-4 text-xs font-semibold text-clay">
                  <span className="line-through opacity-70">Valor: {value}</span>{" "}
                  <span className="ml-1 rounded-full bg-blush px-2.5 py-1 font-bold text-terra-dark">
                    GRÁTIS hoje
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
