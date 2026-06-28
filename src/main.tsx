import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { useHashPath } from "./membros/navigation";
import { MembrosLayout } from "./membros/MembrosLayout";
import { MembrosHome } from "./membros/MembrosHome";
import { Ebook } from "./membros/Ebook";
import { Aulas } from "./membros/Aulas";

/** Roteamento por hash: "/" = página de vendas; "/membros*" = área de membros. */
function Root() {
  const path = useHashPath();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (path.startsWith("/membros")) {
    let page = <MembrosHome />;
    if (path === "/membros/ebook") page = <Ebook />;
    else if (path === "/membros/aulas") page = <Aulas />;
    return <MembrosLayout>{page}</MembrosLayout>;
  }

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
