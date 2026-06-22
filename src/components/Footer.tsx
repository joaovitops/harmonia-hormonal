import { SUPPORT_EMAIL } from "../config";

export function Footer() {
  return (
    <footer className="bg-espresso px-4 py-14 pb-28 text-center text-cream lg:pb-14">
      <p className="font-serif text-2xl font-bold">Harmonia Hormonal</p>

      <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-cream/80">
        <a href="#" className="transition-colors hover:text-cream">
          Termos de uso
        </a>
        <span aria-hidden className="text-cream/40">
          •
        </span>
        <a href="#" className="transition-colors hover:text-cream">
          Política de privacidade
        </a>
        <span aria-hidden className="text-cream/40">
          •
        </span>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="transition-colors hover:text-cream"
        >
          Contato
        </a>
      </nav>

      <p className="mt-8 text-xs text-cream/50">
        © {new Date().getFullYear()} Harmonia Hormonal. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
