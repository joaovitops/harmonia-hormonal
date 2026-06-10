import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Overline, Reveal } from "./ui";
import { track } from "../lib/track";

const FAQS = [
  {
    question: "O protocolo funciona para qualquer fase hormonal?",
    answer:
      "Sim. O protocolo é estruturado para se adaptar à sua fase atual — seja TPM intensa, perimenopausa ou menopausa — com orientações específicas para cada perfil identificado no seu diagnóstico.",
  },
  {
    question: "Preciso parar de tomar anticoncepcional ou reposição hormonal?",
    answer:
      "Não. O protocolo é baseado em alimentação, sono e rotina, e funciona em conjunto com seu tratamento atual. Nunca interrompa medicação sem orientação do seu médico.",
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer:
      "A maioria das mulheres relata melhoras no sono e na disposição já na primeira semana. Mudanças mais profundas tendem a aparecer ao longo dos 21 dias.",
  },
  {
    question: "Preciso comprar suplementos caros?",
    answer:
      "Não. Todo o protocolo usa alimentos acessíveis e hábitos simples. Nada de suplementos obrigatórios ou produtos caros.",
  },
  {
    question: "Como recebo o acesso após a compra?",
    answer:
      "O acesso chega no seu email em até 2 minutos após a confirmação do pagamento. Funciona em qualquer celular, tablet ou computador — sem precisar instalar nada.",
  },
  {
    question: "E se eu não me adaptar ao protocolo?",
    answer:
      "Você tem 7 dias de garantia incondicional. Basta um email com a frase “quero meu reembolso” e devolvemos 100% do valor — e você ainda fica com os 3 bônus.",
  },
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-terra/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold leading-snug">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-terra transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-clay">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <Overline>Ainda na dúvida?</Overline>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10 space-y-3">
          {FAQS.map(({ question, answer }, i) => (
            <FaqItem
              key={question}
              question={question}
              answer={answer}
              open={openIndex === i}
              onToggle={() => {
                const next = openIndex === i ? null : i;
                setOpenIndex(next);
                if (next !== null) track("FaqOpen", { question });
              }}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
