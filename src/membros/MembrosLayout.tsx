import type { ReactNode } from "react";
import { PasswordGate } from "../components/PasswordGate";

/**
 * Envolve todas as páginas de /membros com o PasswordGate e o fundo creme.
 * Equivalente, no Vite, ao app/membros/layout.tsx do protótipo Next.js.
 */
export function MembrosLayout({ children }: { children: ReactNode }) {
  return (
    <PasswordGate>
      <div className="min-h-screen bg-cream text-ink">{children}</div>
    </PasswordGate>
  );
}
