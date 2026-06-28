import { Download, ExternalLink, Sparkles } from "lucide-react";
import { MembrosHeader } from "./MembrosHeader";

// PDF servido de public/ (base-aware p/ GitHub Pages). Para trocar, basta substituir
// o arquivo public/harmonia-femina-ebook.pdf ou apontar para uma URL externa.
const EBOOK_PDF_URL = `${import.meta.env.BASE_URL}harmonia-femina-ebook.pdf`;

// TODO (opcional): colar a URL da imagem de capa. Vazio = usa o card com gradiente.
const EBOOK_COVER_URL = "";

export function Ebook() {
  const hasPdf = EBOOK_PDF_URL.trim() !== "";

  return (
    <>
      <MembrosHeader back />

      <main className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6">
        {/* Capa */}
        <div className="mx-auto w-full max-w-xs">
          {EBOOK_COVER_URL ? (
            <img
              src={EBOOK_COVER_URL}
              alt="Capa do ebook Protocolo Harmonia Feminina"
              className="aspect-[3/4] w-full rounded-3xl object-cover shadow-xl shadow-terra/30"
            />
          ) : (
            <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-terra to-terra-dark p-8 text-center text-cream shadow-xl shadow-terra/30">
              <Sparkles className="size-9" aria-hidden />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-cream/80">
                Harmonia Feminina
              </p>
              <p className="mt-3 font-serif text-2xl font-bold leading-tight">
                Protocolo Harmonia Feminina
              </p>
              <p className="mt-2 text-sm text-cream/85">
                Equilíbrio hormonal em 21 dias
              </p>
            </div>
          )}
        </div>

        {/* Descrição */}
        <h1 className="mt-10 text-center font-serif text-2xl font-bold leading-snug sm:text-3xl">
          Protocolo Harmonia Feminina — Guia Completo de Equilíbrio Hormonal em
          21 Dias
        </h1>

        <p className="mt-4 text-center text-base leading-relaxed text-clay">
          Neste ebook você vai descobrir como identificar seu perfil hormonal,
          quais alimentos equilibram seus hormônios naturalmente e o passo a
          passo do protocolo de 21 dias.
        </p>

        {/* Ações */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={hasPdf ? EBOOK_PDF_URL : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasPdf}
            className={`inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-base font-bold text-white shadow-xl shadow-terra/30 transition-all ${
              hasPdf
                ? "hover:scale-[1.02] hover:bg-terra-dark"
                : "pointer-events-none opacity-50"
            }`}
          >
            <ExternalLink className="size-5" aria-hidden />
            Abrir Ebook
          </a>

          <a
            href={hasPdf ? EBOOK_PDF_URL : undefined}
            download="harmonia-femina-ebook.pdf"
            aria-disabled={!hasPdf}
            className={`inline-flex items-center gap-1.5 text-sm font-medium text-terra transition-colors ${
              hasPdf ? "hover:text-terra-dark" : "pointer-events-none opacity-50"
            }`}
          >
            <Download className="size-4" aria-hidden />
            Baixar PDF
          </a>

          {!hasPdf && (
            <p className="text-xs text-clay">
              Link do PDF ainda não configurado.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
