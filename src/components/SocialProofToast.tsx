import { useEffect, useState } from "react";
import { BadgeCheck, X } from "lucide-react";
import { Avatar } from "./ui";

const PURCHASES = [
  { name: "Mariana", city: "Curitiba", minutes: 2 },
  { name: "Fernanda", city: "Belo Horizonte", minutes: 5 },
  { name: "Patrícia", city: "São Paulo", minutes: 8 },
  { name: "Adriana", city: "Recife", minutes: 11 },
  { name: "Luciana", city: "Porto Alegre", minutes: 14 },
  { name: "Camila", city: "Goiânia", minutes: 17 },
];

const FIRST_DELAY_MS = 9000;
const VISIBLE_MS = 5500;
const INTERVAL_MS = 22000;

/** Notificações discretas de compras recentes — prova social em tempo real. */
export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showNext = () => {
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        setIndex((i) => (i + 1) % PURCHASES.length);
      }, VISIBLE_MS);
    };

    const firstTimer = setTimeout(showNext, FIRST_DELAY_MS);
    const loop = setInterval(showNext, INTERVAL_MS);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(hideTimer);
      clearInterval(loop);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const { name, city, minutes } = PURCHASES[index];

  return (
    <div
      role="status"
      className="animate-toast-in fixed bottom-24 left-4 z-40 flex max-w-[19rem] items-center gap-3 rounded-2xl bg-white p-3.5 pr-9 shadow-2xl shadow-espresso/20 lg:bottom-6"
    >
      <Avatar name={name} tone={index} className="size-10 text-xs" />
      <div className="min-w-0">
        <p className="text-xs leading-snug">
          <strong>{name}</strong> de {city} garantiu o protocolo
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[10px] text-clay">
          <BadgeCheck className="size-3 text-terra" aria-hidden />
          há {minutes} min • compra verificada
        </p>
      </div>
      <button
        type="button"
        aria-label="Fechar notificação"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-2 rounded-full p-1 text-clay/60 transition-colors hover:bg-blush hover:text-ink"
      >
        <X className="size-3.5" aria-hidden />
      </button>
    </div>
  );
}
