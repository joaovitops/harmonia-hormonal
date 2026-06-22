import { LockOpen } from "lucide-react";
import { Reveal } from "./ui";
import { DISCOUNT_PERCENT } from "../config";

export function DiscountCard() {
  return (
    <section className="bg-blush px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl shadow-terra/10 sm:p-10">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blush">
            <LockOpen className="size-6 text-terra" aria-hidden />
          </div>

          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl">
            Desconto do diagnóstico desbloqueado
          </h2>

          <p className="mt-3 text-clay">
            Você completou o questionário hormonal e ganhou{" "}
            <strong className="text-terra">{DISCOUNT_PERCENT} de desconto</strong>.
          </p>

          <div className="mt-6 rounded-2xl border border-terra/15 bg-cream px-8 py-6">
            <p className="font-serif text-2xl font-bold text-terra sm:text-3xl">
              {DISCOUNT_PERCENT} OFF
            </p>
            <p className="mt-2 text-sm leading-relaxed text-clay">
              Preço exclusivo para quem completou o diagnóstico. Não disponível
              na página principal.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
