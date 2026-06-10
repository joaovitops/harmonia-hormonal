import { useEffect } from "react";
import { TimerProvider } from "./context/timer";
import { captureUtms, track } from "./lib/track";
import { TopBar } from "./components/TopBar";
import { BottomBar } from "./components/BottomBar";
import { Hero } from "./components/Hero";
import { DiscountCard } from "./components/DiscountCard";
import { Truth } from "./components/Truth";
import { Includes } from "./components/Includes";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Offer } from "./components/Offer";
import { Bonuses } from "./components/Bonuses";
import { Guarantee } from "./components/Guarantee";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { SocialProofToast } from "./components/SocialProofToast";

/** Dispara ViewContent, captura UTMs e mede profundidade de scroll (25/50/75/100). */
function useTracking() {
  useEffect(() => {
    captureUtms();
    track("ViewContent", {
      content_name: "Protocolo Harmonia Hormonal",
      content_category: "sales_page",
    });

    const fired = new Set<number>();
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const depth = (window.scrollY / total) * 100;
      for (const mark of [25, 50, 75, 100]) {
        if (depth >= mark && !fired.has(mark)) {
          fired.add(mark);
          track("ScrollDepth", { percent: mark });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export default function App() {
  useTracking();

  return (
    <TimerProvider>
      <TopBar />
      <main>
        <Hero />
        <DiscountCard />
        <Truth />
        <Includes />
        <HowItWorks />
        <Testimonials />
        <Offer />
        <Bonuses />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <BottomBar />
      <SocialProofToast />
    </TimerProvider>
  );
}
