import { useEffect, useState } from "react";
import { Clapperboard, Play, X } from "lucide-react";
import { Overline } from "../components/ui";
import { MembrosHeader } from "./MembrosHeader";

type Aula = {
  numero: string;
  titulo: string;
  youtubeId: string;
};

/**
 * Lista de aulas — fácil de editar. youtubeId é o id do vídeo (não listado)
 * do YouTube: https://www.youtube.com/watch?v=<youtubeId>.
 */
const aulas: Aula[] = [
  {
    numero: "01",
    titulo: "Introdução hormonal — Dra. Lorena Amato",
    youtubeId: "gqCII9XKTZo",
  },
  {
    numero: "02",
    titulo: "Hormônios e emoções — Estrogênio no cérebro",
    youtubeId: "uOmj4vzaP_g",
  },
  {
    numero: "03",
    titulo: "Alimentação — Alimentos hormonais",
    youtubeId: "X-3XpK5HvZE",
  },
  {
    numero: "04",
    titulo: "Ciclo das sementes — Equilíbrio hormonal natural",
    youtubeId: "ELj7huRiO-Q",
  },
  {
    numero: "05",
    titulo: "Alimentação na menopausa — Aliviando os sintomas",
    youtubeId: "1ojAMFLW6jg",
  },
  {
    numero: "06",
    titulo: "Ciclo das sementes — O que diz a ciência",
    youtubeId: "q8kdOTeHaDY",
  },
];

export function Aulas() {
  const [active, setActive] = useState<Aula | null>(null);

  return (
    <>
      <MembrosHeader back />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6">
        <div className="text-center">
          <Overline>Seu protocolo em vídeo</Overline>
          <h1 className="mt-2 inline-flex items-center gap-2.5 font-serif text-3xl font-bold sm:text-4xl">
            <Clapperboard className="size-7 text-terra" aria-hidden />
            Suas Videoaulas
          </h1>
          <p className="mt-3 text-base leading-relaxed text-clay">
            Assista na ordem para melhor aproveitamento do protocolo.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {aulas.map((aula) => (
            <AulaCard
              key={aula.numero}
              aula={aula}
              onPlay={() => setActive(aula)}
            />
          ))}
        </div>
      </main>

      {active && (
        <VideoModal aula={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}

function AulaCard({ aula, onPlay }: { aula: Aula; onPlay: () => void }) {
  const disponivel = aula.youtubeId !== "";
  const thumb = disponivel
    ? `https://img.youtube.com/vi/${aula.youtubeId}/hqdefault.jpg`
    : null;

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-blush bg-white p-4 shadow-sm shadow-terra/5 sm:flex-row sm:items-center">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-terra to-terra-dark sm:aspect-square sm:w-32">
        {thumb && (
          <img
            src={thumb}
            alt=""
            aria-hidden
            className="size-full object-cover"
          />
        )}
        {/* Número */}
        <span className="absolute left-2 top-2 inline-flex size-7 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-terra shadow-sm">
          {aula.numero}
        </span>
        {/* Play central */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/90 text-terra shadow-md">
            <Play className="size-5 translate-x-0.5 fill-current" aria-hidden />
          </span>
        </span>
      </div>

      {/* Texto + ação */}
      <div className="min-w-0 flex-1">
        <Overline>Aula {aula.numero}</Overline>
        <h2 className="mt-1.5 font-serif text-lg font-bold leading-snug">
          {aula.titulo}
        </h2>

        {disponivel ? (
          <button
            type="button"
            onClick={onPlay}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-terra px-5 py-2 text-sm font-bold text-white shadow-md shadow-terra/30 transition-colors hover:bg-terra-dark"
          >
            <Play className="size-4 fill-current" aria-hidden />
            Assistir
          </button>
        ) : (
          <span className="mt-3 inline-flex cursor-default items-center rounded-full bg-blush px-5 py-2 text-sm font-bold text-clay">
            Em breve
          </span>
        )}
      </div>
    </div>
  );
}

function VideoModal({ aula, onClose }: { aula: Aula; onClose: () => void }) {
  // ESC fecha e o scroll do fundo trava enquanto o modal está aberto.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Aula ${aula.numero}: ${aula.titulo}`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/70 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-espresso shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
        >
          <X className="size-5" aria-hidden />
        </button>

        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${aula.youtubeId}?autoplay=1&rel=0`}
            title={aula.titulo}
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="size-full"
          />
        </div>

        <p className="px-5 py-3 text-sm text-cream">
          <span className="font-bold uppercase tracking-wide text-cream/60">
            Aula {aula.numero}
          </span>{" "}
          — {aula.titulo}
        </p>
      </div>
    </div>
  );
}
