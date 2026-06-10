declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const FB_STANDARD_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "InitiateCheckout",
  "AddToCart",
  "Lead",
  "Purchase",
]);

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
  "fbclid",
  "gclid",
] as const;

const UTM_STORAGE_KEY = "hh_utms";

/** Captura UTMs/click-ids da URL e persiste para repassar ao checkout. */
export function captureUtms(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    }
  } catch {
    /* storage indisponível — segue sem persistir */
  }
}

/** Monta a URL de checkout repassando as UTMs capturadas na entrada da página. */
export function checkoutUrlWithUtms(base: string): string {
  try {
    const url = new URL(base);
    const saved = JSON.parse(
      sessionStorage.getItem(UTM_STORAGE_KEY) ?? "{}",
    ) as Record<string, string>;
    for (const [key, value] of Object.entries(saved)) {
      url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return base;
  }
}

/** Dispara o evento para Meta Pixel, GA4 e dataLayer (GTM), quando presentes. */
export function track(event: string, params: Record<string, unknown> = {}): void {
  if (window.fbq) {
    window.fbq(FB_STANDARD_EVENTS.has(event) ? "track" : "trackCustom", event, params);
  }
  window.gtag?.("event", event, params);
  window.dataLayer?.push({ event, ...params });
  if (import.meta.env.DEV) {
    console.debug("[track]", event, params);
  }
}

/** Rola suavemente até a seção de oferta, registrando a origem do clique. */
export function scrollToOffer(source: string): void {
  track("CTAClick", { source });
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
