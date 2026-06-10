# Harmonia Hormonal — Landing Page de Vendas

Sales page de página única, mobile-first, em React + TypeScript + Tailwind CSS v4 + lucide-react.

## Como rodar

> Este projeto usa o Node.js local instalado em `~/.local/node/node-v22.17.0-darwin-arm64`.

```bash
export PATH="$HOME/.local/node/node-v22.17.0-darwin-arm64/bin:$PATH"
npm install      # primeira vez
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # produção (gera /dist)
```

## ✅ Checklist antes de publicar

1. **URL do checkout** — troque `CHECKOUT_URL` em [src/config.ts](src/config.ts) pela URL real (Kiwify, Hotmart, Perfect Pay…). As UTMs da página são repassadas automaticamente ao checkout.
2. **Meta Pixel** — descomente o bloco no [index.html](index.html) e cole seu Pixel ID no lugar de `SEU_PIXEL_ID`.
3. **Google Analytics 4** — descomente o bloco no [index.html](index.html) e cole seu ID `G-XXXXXXXXXX`.
4. **Links do rodapé** — aponte "Termos de uso" e "Política de privacidade" para as páginas reais em [src/components/Footer.tsx](src/components/Footer.tsx).
5. **Duração do timer** — ajuste `TIMER_MINUTES` em [src/config.ts](src/config.ts) se quiser algo diferente de 15 min.

## Eventos de rastreamento já implementados

| Evento | Quando dispara | Destinos |
| --- | --- | --- |
| `ViewContent` | Carregamento da página | Pixel (padrão), GA4, dataLayer |
| `ScrollDepth` (25/50/75/100) | Profundidade de rolagem | Pixel (custom), GA4, dataLayer |
| `CTAClick` (com `source`) | Qualquer CTA da página | Pixel (custom), GA4, dataLayer |
| `InitiateCheckout` | Clique no botão de compra | Pixel (padrão), GA4, dataLayer |
| `FaqOpen` (com `question`) | Abertura de pergunta no FAQ | Pixel (custom), GA4, dataLayer |

UTMs (`utm_*`, `src`, `sck`, `fbclid`, `gclid`) são capturadas na entrada, persistidas na sessão e anexadas à URL do checkout.

## Mecânicas de conversão

- **Timer único 15:00 → 00:00** compartilhado por top bar, card de desconto, oferta, CTA final e bottom bar. Persiste em `sessionStorage` — recarregar a página não reinicia a contagem.
- **Urgência progressiva**: nos últimos 3 minutos os timers pulsam.
- **Bottom bar fixa** (mobile) aparece após a primeira dobra para não competir com o CTA do hero.
- **Prova social**: avaliações, depoimentos com selo "compra verificada" e notificações discretas de compras recentes (dispensáveis pelo X).
- **Ancoragem de valor**: empilhamento R$ 130 → R$ 19,90 no card de oferta; bônus com valor riscado.
- **Inversão de risco**: garantia incondicional de 7 dias + bônus permanecem com a cliente mesmo em caso de reembolso.

## Estrutura

```
src/
├── config.ts              # preço, checkout, timer, e-mail de suporte, value stack
├── lib/track.ts           # wrapper Pixel/GA4/dataLayer + captura de UTMs
├── hooks/useCountdown.ts  # contagem regressiva persistente
├── context/timer.tsx      # timer único compartilhado
└── components/            # uma seção por arquivo, na ordem da página
```
