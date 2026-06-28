import {
  ArrowRight,
  BookOpen,
  Heart,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Overline } from "../components/ui";
import { SUPPORT_EMAIL } from "../config";
import { MembrosHeader } from "./MembrosHeader";
import { Link } from "./navigation";

/** Progresso estático em 0% por enquanto — sem tracking real ainda. */
const PROGRESS_PERCENT = 0;

const ETAPAS = [
  {
    to: "/membros/ebook",
    icon: BookOpen,
    titulo: "Ebook Completo",
    descricao: "Seu guia completo de equilíbrio hormonal",
    cta: "Acessar ebook",
  },
  {
    to: "/membros/aulas",
    icon: PlayCircle,
    titulo: "Videoaulas",
    descricao: "Aulas práticas para aplicar o protocolo",
    cta: "Assistir aulas",
  },
];

export function MembrosHome() {
  return (
    <>
      <MembrosHeader />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6">
        {/* Hero de boas-vindas */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-terra/25 bg-blush px-3.5 py-1.5 text-xs font-bold text-terra-dark">
          <Sparkles className="size-3.5" aria-hidden />
          Sua jornada começa aqui
        </div>

        <h1 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          Bem-vinda ao seu Protocolo{" "}
          <span className="text-terra">Harmonia Feminina</span>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-clay">
          Todo o conteúdo que você precisa para restaurar seu equilíbrio
          hormonal está aqui. Siga o passo a passo abaixo.
        </p>

        {/* Card de progresso */}
        <section className="mt-8 rounded-3xl border border-blush bg-white p-6 shadow-xl shadow-terra/10 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Overline>Sua jornada</Overline>
              <h2 className="mt-2 font-serif text-xl font-bold sm:text-2xl">
                21 dias para o seu equilíbrio
              </h2>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-serif text-3xl font-bold text-terra">
                {PROGRESS_PERCENT}%
              </p>
              <p className="text-xs text-clay">concluído</p>
            </div>
          </div>

          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-blush">
            <div
              className="h-full rounded-full bg-terra transition-all"
              style={{ width: `${PROGRESS_PERCENT}%` }}
            />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-clay">
            Comece pelo ebook e avance para as aulas. Tudo no seu ritmo.
          </p>
        </section>

        {/* Etapas */}
        <div className="mt-12">
          <Overline>Por onde começar</Overline>
          <h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">
            Seu protocolo, em duas etapas
          </h2>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {ETAPAS.map(({ to, icon: Icon, titulo, descricao, cta }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-3xl border border-blush bg-white p-6 shadow-sm shadow-terra/5 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-terra/10"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-terra text-cream shadow-md shadow-terra/30">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{titulo}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-clay">
                {descricao}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-terra">
                {cta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Rodapé */}
        <footer className="mt-16 border-t border-blush pt-8 text-center">
          <p className="inline-flex items-center gap-1.5 font-serif text-lg font-bold text-terra">
            <Heart className="size-4 fill-current" aria-hidden />
            Harmonia Feminina
          </p>
          <p className="mt-2 text-xs text-clay">
            Harmonia Feminina © {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-xs text-clay">
            Dúvidas? Entre em contato:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-medium text-terra transition-colors hover:text-terra-dark"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
