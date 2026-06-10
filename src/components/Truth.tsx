import { Overline, Reveal } from "./ui";

export function Truth() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Overline>A verdade</Overline>

        <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          Se Você Já Ouviu{" "}
          <em className="text-terra">“Está Tudo Normal Nos Seus Exames”</em>,
          Leia Isso
        </h2>

        <p className="mt-6 text-left text-base leading-relaxed text-clay sm:text-lg">
          Você não está imaginando. Os calorões, a insônia, a irritabilidade, o
          ganho de peso que não faz sentido, a névoa mental — são sinais reais
          de que seus hormônios estão pedindo socorro. O problema é que exames
          convencionais não detectam flutuações sutis, e a maioria das mulheres
          sai do consultório se sentindo ignorada.
        </p>

        <div className="mt-8 rounded-r-3xl border-l-4 border-terra bg-blush/60 p-6 text-left sm:p-8">
          <p className="text-lg font-medium leading-relaxed sm:text-xl">
            Nosso método identifica três desequilíbrios específicos que{" "}
            <strong className="text-terra">89% das mulheres têm</strong> — e que
            nenhum médico está investigando.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
