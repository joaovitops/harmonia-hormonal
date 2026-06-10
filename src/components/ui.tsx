import { useEffect, useRef, useState, type ReactNode } from "react";
import { Star } from "lucide-react";

/** Revela o conteúdo com fade + translate quando entra na viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} aria-hidden />
      ))}
    </div>
  );
}

const AVATAR_TONES = [
  "bg-[#e7c3b6] text-[#7c4434]",
  "bg-[#d9b8a5] text-[#6e4630]",
  "bg-[#e9d3c0] text-[#8a5a3b]",
  "bg-[#dcc2b8] text-[#74463a]",
];

/** Avatar placeholder com iniciais sobre tom quente da paleta. */
export function Avatar({
  name,
  tone = 0,
  className = "size-12 text-base",
}: {
  name: string;
  tone?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full font-serif font-semibold ring-2 ring-white ${
        AVATAR_TONES[tone % AVATAR_TONES.length]
      } ${className}`}
    >
      {initials}
    </div>
  );
}

/** Pré-título em caps com letter-spacing largo. */
export function Overline({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.28em] text-terra">
      {children}
    </p>
  );
}
