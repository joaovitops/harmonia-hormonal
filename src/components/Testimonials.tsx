import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { Avatar, Overline, Reveal, Stars } from "./ui";

const TESTIMONIALS = [
  {
    name: "Carla",
    age: 43,
    tone: 0,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Eu já tinha tentado de tudo. Médicos diziam que era ansiedade, que era TPM, que era a idade. Em 2 semanas com o protocolo, voltei a dormir a noite inteira e meu humor estabilizou. Pela primeira vez em anos, me sinto eu mesma.",
  },
  {
    name: "Renata",
    age: 51,
    tone: 1,
    photo: "https://randomuser.me/api/portraits/women/76.jpg",
    quote:
      "Os calorões me tiravam do sério. Eu trocava de roupa 3 vezes no trabalho. Seguindo as orientações do app, em 18 dias os calorões reduziram drasticamente. Isso é ciência, não milagre.",
  },
  {
    name: "Juliana",
    age: 36,
    tone: 2,
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    quote:
      "Minha TPM estava destruindo meus relacionamentos. Descobri no diagnóstico que tinha dominância estrogênica — algo que meu ginecologista nunca mencionou. 21 dias depois, meu ciclo finalmente faz sentido.",
  },
];

/** Foto da depoente com fallback para as iniciais se a imagem não carregar. */
function PhotoAvatar({
  name,
  photo,
  tone,
}: {
  name: string;
  photo: string;
  tone: number;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <Avatar name={name} tone={tone} className="size-11 text-sm" />;
  }
  return (
    <img
      src={photo}
      alt={`Foto de ${name}`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="size-11 shrink-0 rounded-full object-cover ring-2 ring-white"
    />
  );
}

export function Testimonials() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Overline>Mulheres como você</Overline>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            Elas também ouviram{" "}
            <em className="text-terra">“está tudo normal”</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, age, tone, photo, quote }, i) => (
            <Reveal key={name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-sm shadow-terra/5">
                <Stars />
                <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-clay">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-blush pt-4">
                  <PhotoAvatar name={name} photo={photo} tone={tone} />
                  <div>
                    <p className="text-sm font-bold">
                      {name}, {age} anos
                    </p>
                    <p className="flex items-center gap-1 text-xs text-clay">
                      <BadgeCheck className="size-3.5 text-terra" aria-hidden />
                      Compra verificada
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
