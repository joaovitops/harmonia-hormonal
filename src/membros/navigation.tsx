import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

/**
 * Mini-roteador baseado em hash (#/rota), sem dependências.
 *
 * Por quê hash e não history/BrowserRouter: o projeto é publicado como site
 * estático no GitHub Pages (base "./", sem rewrites no servidor). Com hash,
 * abrir/recarregar /#/membros funciona sem precisar de configuração de servidor.
 */

/** Caminho atual derivado do hash. "" vira "/". */
export function currentPath(): string {
  const raw = window.location.hash.replace(/^#/, "");
  return raw === "" ? "/" : raw;
}

/** Reage a mudanças de hash e devolve o caminho atual. */
export function useHashPath(): string {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const onChange = () => setPath(currentPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}

/** Navegação programática. */
export function navigate(to: string): void {
  window.location.hash = to;
}

type LinkProps = {
  to: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/** <a> que aponta para uma rota interna (#/...). */
export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}
