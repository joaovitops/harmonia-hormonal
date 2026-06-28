import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "./navigation";

/**
 * Cabeçalho fixo compartilhado pelas páginas da área de membros.
 * `back` troca o ícone de sparkle por uma seta de voltar para /membros.
 */
export function MembrosHeader({ back = false }: { back?: boolean }) {
  return (
    <header className="sticky top-0 z-20 border-b border-blush/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-2.5 px-4 py-3.5 sm:px-6">
        {back ? (
          <Link
            to="/membros"
            aria-label="Voltar para a área de membros"
            className="inline-flex items-center text-terra transition-colors hover:text-terra-dark"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </Link>
        ) : (
          <Sparkles className="size-5 text-terra" aria-hidden />
        )}
        <span className="font-serif text-lg font-bold text-terra">
          Harmonia Feminina
        </span>
      </div>
    </header>
  );
}
