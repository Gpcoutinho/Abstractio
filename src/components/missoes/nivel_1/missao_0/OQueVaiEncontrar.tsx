import React, { useState } from 'react';
import ConceitoBox from '../../../ConceitoBox';

const MiniSlide: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    'Cada conceito é apresentado em partes.',
    'Navegue no seu próprio ritmo. ✓',
  ];
  const isLast = current === slides.length - 1;

  return (
    <div className="rounded-xl border border-borderDark bg-bgPrimary p-4">
      <p className="text-sm text-textBody leading-relaxed min-h-[44px]">{slides[current]}</p>
      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-borderDark">
        <div className="flex-1">
          {current > 0 && (
            <button onClick={() => setCurrent(c => c - 1)} className="text-xs text-textSecondary hover:text-textPrimary transition-colors">
              ← Anterior
            </button>
          )}
        </div>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <span key={i} className={`block w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-accent' : 'bg-borderDark'}`} />
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          {!isLast ? (
            <button onClick={() => setCurrent(c => c + 1)} className="text-xs text-accent hover:opacity-80 transition-opacity">
              Próximo →
            </button>
          ) : (
            <button onClick={() => setCurrent(0)} className="text-xs text-accent hover:opacity-80 transition-opacity">
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const TENTACULOS_DATA = [
  { d: 'M31,66 Q18,86 24,104',   dur: '2.2s', vals: '-5,31,66;5,31,66;-5,31,66'   },
  { d: 'M41,70 Q29,90 35,108',   dur: '2.1s', vals: '4,41,70;-4,41,70;4,41,70'    },
  { d: 'M51,74 Q42,94 47,112',   dur: '2.6s', vals: '-3,51,74;3,51,74;-3,51,74'   },
  { d: 'M61,76 Q56,96 61,114',   dur: '1.9s', vals: '3,61,76;-3,61,76;3,61,76'    },
  { d: 'M69,76 Q74,96 69,114',   dur: '2.3s', vals: '-3,69,76;3,69,76;-3,69,76'   },
  { d: 'M79,74 Q88,94 83,112',   dur: '2.0s', vals: '4,79,74;-4,79,74;4,79,74'    },
  { d: 'M89,70 Q101,90 95,108',  dur: '2.5s', vals: '-4,89,70;4,89,70;-4,89,70'   },
  { d: 'M99,66 Q112,86 106,104', dur: '2.2s', vals: '5,99,66;-5,99,66;5,99,66'    },
];

const BODY  = '#db2777';
const LIGHT = '#f472b6';

const MiniInterativo: React.FC = () => {
  const [animKey, setAnimKey] = useState(0);
  const [nadando, setNadando] = useState(false);

  const nadar = () => {
    setNadando(true);
    setAnimKey(k => k + 1);
    setTimeout(() => setNadando(false), 1600);
  };

  return (
    <div className="rounded-xl border border-borderDark bg-bgPrimary p-4 flex items-center gap-5">
      <style>{`
        @keyframes mini-nadar {
          0%,100% { transform: translateX(0); }
          25%      { transform: translateX(-10px); }
          75%      { transform: translateX(10px); }
        }
      `}</style>
      <div key={animKey} style={nadando ? { animation: 'mini-nadar 0.8s ease-in-out 2' } : {}}>
        <svg viewBox="0 0 130 130" width="62" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          {TENTACULOS_DATA.map((t, i) => (
            <path key={i} d={t.d} stroke={BODY} strokeWidth="4.5" fill="none" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate" values={t.vals} dur={t.dur} repeatCount="indefinite" />
            </path>
          ))}
          <ellipse cx="65" cy="42" rx="22" ry="20" fill={LIGHT} />
          <ellipse cx="65" cy="56" rx="26" ry="22" fill={BODY} />
          <circle cx="55" cy="42" r="5" fill="white" />
          <circle cx="75" cy="42" r="5" fill="white" />
          <circle cx="55" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="75" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="53.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          <circle cx="73.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          <path d="M59,53 Q65,59 71,53" stroke={LIGHT} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <button
        onClick={nadar}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary active:scale-95 transition-all text-sm cursor-pointer"
      >
        🌊 Nadar
      </button>
    </div>
  );
};

const MiniConceito: React.FC = () => (
  <ConceitoBox>
    Um <strong>objeto</strong> possui um <strong>estado</strong> (o que sabe sobre si mesmo) e um <strong>comportamento</strong> (o que sabe fazer).
  </ConceitoBox>
);

const ITEMS: { label: string; desc: string; Example: React.FC }[] = [
  {
    label: 'Slides',
    desc: 'Apresentações curtas que decompõem um conceito em partes navegáveis.',
    Example: MiniSlide,
  },
  {
    label: 'Interações',
    desc: 'Componentes onde você experimenta o conceito na prática, mexendo diretamente nos dados.',
    Example: MiniInterativo,
  },
  {
    label: 'Conceito',
    desc: 'Definições formais para anotar à mão no seu caderno. Escrever ajuda a fixar.',
    Example: MiniConceito,
  },
];

const OQueVaiEncontrar: React.FC = () => (
  <div className="not-prose my-6">
    {ITEMS.map(({ label, desc, Example }, i) => (
      <div
        key={label}
        className={`flex flex-col sm:flex-row items-start gap-4 py-5 ${i < ITEMS.length - 1 ? 'border-b border-borderDark' : ''}`}
      >
        <div className="sm:w-48 shrink-0 space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <p className="text-sm font-semibold text-textPrimary">{label}</p>
          </div>
          <p className="text-xs text-textSecondary leading-relaxed pl-3.5">{desc}</p>
        </div>
        <div className="flex-1 min-w-0 w-full">
          <Example />
        </div>
      </div>
    ))}
  </div>
);

export default OQueVaiEncontrar;
