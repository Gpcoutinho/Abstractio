import React, { useState } from 'react';

type WordSlide = {
  kind: 'word';
  left?: string;
  right?: string;
  word: string;
  definition: string;
};

type OtherSlide = {
  kind: 'intro' | 'final';
};

type Slide = WordSlide | OtherSlide;

const SLIDES: Slide[] = [
  { kind: 'intro' },
  {
    kind: 'word',
    right: 'Orientada a Objetos',
    word: 'Programação',
    definition:
      'processo de dar instruções para que um computador resolva problemas, utilizando uma linguagem (código) que a máquina consiga compreender.',
  },
  {
    kind: 'word',
    left: 'Programação',
    right: 'a Objetos',
    word: 'Orientada',
    definition:
      '"focada em", "guiada por" ou "direcionada a". Na computação, chamamos isso de paradigma: é uma lente através da qual o programador enxerga a arquitetura do sistema.',
  },
  {
    kind: 'word',
    left: 'Programação Orientada a',
    word: 'Objetos',
    definition:
      'blocos de código que representam coisas ou entidades (sejam físicas, como um polvo, ou abstratas, como uma conta bancária).',
  },
  { kind: 'final' },
];

const TOTAL = SLIDES.length;

const SlideIntro: React.FC = () => (
  <div className="flex items-center justify-center min-h-[120px]">
    <p className="text-2xl font-bold text-textPrimary text-center leading-snug">
      Programação Orientada a Objetos
    </p>
  </div>
);

const SlideWord: React.FC<WordSlide> = ({ left, right, word, definition }) => (
  <div className="flex flex-col gap-4 min-h-[180px]">
    <div className="flex justify-between items-start min-h-[1.5rem]">
      <span className="text-sm text-textSecondary font-medium">{left ?? ''}</span>
      <span className="text-sm text-textSecondary font-medium">{right ?? ''}</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <p className="text-5xl font-black text-textPrimary text-center leading-none">{word}</p>
      <span className="text-textSecondary text-xl">↓</span>
      <p className="text-sm text-textSecondary text-center max-w-xs leading-relaxed">{definition}</p>
    </div>
  </div>
);

const SlideFinal: React.FC = () => (
  <div className="flex flex-col gap-3 min-h-[120px] justify-center">
    <p className="text-lg font-bold text-textPrimary">Programação Orientada a Objetos:</p>
    <p className="text-sm text-textBody leading-relaxed">
      A Programação Orientada a Objetos é um paradigma (estilo) de criar software onde o seu foco
      principal deixa de ser escrever uma lista infinita de comandos sequenciais para o computador
      executar. Em vez disso, você constrói o seu sistema modelando pequenos "atores" (os objetos)
      que conversam e interagem entre si.
    </p>
  </div>
);

const SlidesPOO: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  return (
    <div className="not-prose my-6 bg-bgSecondary border border-borderDark rounded-xl p-6">
      <div className="transition-opacity duration-150">
        {slide.kind === 'intro' && <SlideIntro />}
        {slide.kind === 'word' && <SlideWord {...slide} />}
        {slide.kind === 'final' && <SlideFinal />}
      </div>

      <div className="flex items-center justify-between pt-5 mt-4 border-t border-borderDark">
        <div>
          {current > 0 && (
            <button
              onClick={() => setCurrent(c => c - 1)}
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
              className={`block w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-accent' : 'bg-borderDark'}`}
            />
          ))}
        </div>
        <div>
          {current < TOTAL - 1 ? (
            <button
              onClick={() => setCurrent(c => c + 1)}
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
