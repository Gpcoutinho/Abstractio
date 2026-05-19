import React, { useState } from "react";

const CORES = {
  programacao: "#F472B6",
  orientada: "#60A5FA",
  objetos: "#86EFAC",
} as const;

type WordSlide = {
  kind: "word";
  left?: string;
  right?: string;
  word: string;
  color: string;
  definition: string;
};

type OtherSlide = {
  kind: "intro" | "final";
};

type Slide = WordSlide | OtherSlide;

const SLIDES: Slide[] = [
  { kind: "intro" },
  {
    kind: "word",
    right: "Orientada a Objetos",
    word: "Programação",
    color: CORES.programacao,
    definition:
      "processo de dar instruções para que um computador resolva problemas, utilizando uma linguagem (código) que a máquina consiga compreender.",
  },
  {
    kind: "word",
    left: "Programação",
    right: "a Objetos",
    word: "Orientada",
    color: CORES.orientada,
    definition:
      '"focada em", "guiada por" ou "direcionada a". Na computação, chamamos isso de paradigma: é uma lente através da qual o programador enxerga a arquitetura do sistema.',
  },
  {
    kind: "word",
    left: "Programação Orientada a",
    word: "Objetos",
    color: CORES.objetos,
    definition:
      "blocos de código que representam coisas ou entidades (sejam físicas, como um polvo, ou abstratas, como uma conta bancária).",
  },
  { kind: "final" },
];

const TOTAL = SLIDES.length;

const TituloPOO: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={className}>
    <span style={{ color: CORES.programacao }}>Programação</span>{" "}
    <span style={{ color: CORES.orientada }}>Orientada</span>
    {" a "}
    <span style={{ color: CORES.objetos }}>Objetos</span>
  </span>
);

const SlideIntro: React.FC = () => (
  <div className="flex flex-col gap-3 min-h-[120px]">
    <p className="text-base font-semibold text-textSecondary mb-4">
      O que é POO?
    </p>
    <p className="text-2xl font-bold text-center leading-snug">
      <TituloPOO />
    </p>
  </div>
);

const SlideWord: React.FC<WordSlide> = ({
  left,
  right,
  word,
  color,
  definition,
}) => (
  <div className="flex items-start justify-center gap-3 min-h-[180px]">
    <span className="text-sm text-textSecondary font-medium shrink-0 pt-3">
      {left ?? ""}
    </span>
    <div className="flex flex-col items-center gap-1">
      <p
        className="text-5xl font-black text-center leading-none"
        style={{ color }}
      >
        {word}
      </p>
      <span className="text-textSecondary text-xl">↓</span>
      <p className="text-sm text-textSecondary text-center max-w-xs leading-relaxed">
        {definition}
      </p>
    </div>
    <span className="text-sm text-textSecondary font-medium shrink-0 pt-3">
      {right ?? ""}
    </span>
  </div>
);

const SlideFinal: React.FC = () => (
  <div className="flex flex-col gap-3 min-h-[120px] justify-center">
    <p className="text-lg font-bold">
      <TituloPOO />:
    </p>
    <p className="text-sm text-textBody leading-relaxed">
      {"A "}
      <TituloPOO />
      {
        ' é um paradigma (estilo) de criar software onde o seu foco principal deixa de ser escrever uma lista infinita de comandos sequenciais para o computador executar. Em vez disso, você constrói o seu sistema modelando pequenos "atores" (os objetos) que conversam e interagem entre si.'
      }
    </p>
  </div>
);

const SlidesPOO: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  return (
    <div className="not-prose my-6 bg-bgSecondary border border-borderDark rounded-xl p-6">
      <div className="transition-opacity duration-150">
        {slide.kind === "intro" && <SlideIntro />}
        {slide.kind === "word" && <SlideWord {...slide} />}
        {slide.kind === "final" && <SlideFinal />}
      </div>

      <div className="flex items-center justify-between pt-5 mt-4 border-t border-borderDark">
        <div className="flex-1">
          {current > 0 && (
            <button
              onClick={() => setCurrent((c) => c - 1)}
              className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              ← Anterior
            </button>
          )}
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-accent" : "bg-borderDark"
              }`}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          {current < TOTAL - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="text-sm text-accent hover:opacity-80 transition-opacity"
            >
              Próximo →
            </button>
          ) : (
            <button
              onClick={() => setCurrent(0)}
              className="text-sm text-accent hover:opacity-80 transition-opacity"
            >
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlidesPOO;
