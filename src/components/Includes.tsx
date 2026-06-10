import { Leaf, LineChart, Moon, type LucideIcon } from "lucide-react";
import { Reveal } from "./ui";

const ITEMS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Leaf,
    title: "Plano Alimentar por Fase Hormonal",
    description:
      "Cardápios personalizados de 21 dias que equilibram estrogênio, progesterona e insulina naturalmente.",
  },
  {
    icon: Moon,
    title: "Protocolo de Sono e Recuperação",
    description:
      "Rotina noturna específica para o seu perfil, com técnicas para eliminar calorões e acordar restaurada.",
  },
  {
    icon: LineChart,
    title: "Diário de Sintomas Inteligente",
    description:
      "Acompanhe sua evolução dia a dia e veja gráficos claros do seu retorno ao equilíbrio.",
  },
];

export function Includes() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Seu Protocolo <em className="text-terra">Harmonia Hormonal</em>{" "}
            Inclui:
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="h-full rounded-3xl bg-white p-7 shadow-sm shadow-terra/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-terra/10">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blush">
                  <Icon className="size-6 text-terra" aria-hidden />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-clay">
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
