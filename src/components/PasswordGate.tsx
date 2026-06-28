import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Lock, LogOut } from "lucide-react";

/**
 * Proteção TEMPORÁRIA, client-side, da área de membros.
 * Persiste o acesso no localStorage e libera os `children` quando a senha bate.
 *
 * TODO: migrar para autenticação real (Supabase). Por enquanto a senha fica
 * hardcoded — é só uma barreira leve até a fase de auth de verdade.
 */
const AUTH_KEY = "harmonia-feminina-auth";
const CORRECT_PASSWORD = "minhachave2026";

export function PasswordGate({ children }: { children: ReactNode }) {
  // null = ainda lendo o localStorage. Evita o flash de conteúdo antes de saber.
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setAuthed(localStorage.getItem(AUTH_KEY) === "true");
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === CORRECT_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setValue("");
    setError(false);
  }

  // Enquanto verifica o localStorage, não renderiza nada.
  if (authed === null) return null;

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-3xl border border-blush bg-white p-8 text-center shadow-xl shadow-terra/10"
        >
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-blush">
            <Lock className="size-7 text-terra" aria-hidden />
          </div>
          <h1 className="mt-5 font-serif text-2xl font-bold text-ink">
            Harmonia Feminina
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-clay">
            Digite a senha de acesso para entrar na área de membros.
          </p>

          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Sua senha"
            aria-label="Senha de acesso"
            className="mt-6 w-full rounded-full border border-blush bg-cream px-5 py-3 text-center text-ink outline-none transition-colors placeholder:text-clay/60 focus:border-terra"
          />

          {error && (
            <p className="mt-3 text-sm font-medium text-terra-dark">
              Senha incorreta. Tente novamente.
            </p>
          )}

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-terra py-3 font-bold text-white shadow-md shadow-terra/30 transition-colors hover:bg-terra-dark"
          >
            Acessar
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleLogout}
        className="fixed right-3 top-3 z-30 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-clay transition-colors hover:text-terra"
      >
        <LogOut className="size-3.5" aria-hidden />
        Sair
      </button>
      {children}
    </>
  );
}
