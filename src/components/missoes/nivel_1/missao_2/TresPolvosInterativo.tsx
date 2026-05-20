import React, { useState } from 'react';

type Cor = 'Rosa' | 'Azul' | 'Verde';
type NTentaculos = 6 | 8;

const COR_MAP: Record<Cor, { body: string; light: string }> = {
  Rosa:  { body: '#db2777', light: '#f472b6' },
  Azul:  { body: '#2c6ea8', light: '#5090d0' },
  Verde: { body: '#1e8858', light: '#3aaa78' },
};

const TENTACULOS_DATA = [
  { d: 'M31,66 Q18,86 24,104',   dur: '2.2s', vals: '-5,31,66;5,31,66;-5,31,66'    },
  { d: 'M41,70 Q29,90 35,108',   dur: '2.1s', vals: '4,41,70;-4,41,70;4,41,70'     },
  { d: 'M51,74 Q42,94 47,112',   dur: '2.6s', vals: '-3,51,74;3,51,74;-3,51,74'    },
  { d: 'M61,76 Q56,96 61,114',   dur: '1.9s', vals: '3,61,76;-3,61,76;3,61,76'     },
  { d: 'M69,76 Q74,96 69,114',   dur: '2.3s', vals: '-3,69,76;3,69,76;-3,69,76'    },
  { d: 'M79,74 Q88,94 83,112',   dur: '2.0s', vals: '4,79,74;-4,79,74;4,79,74'     },
  { d: 'M89,70 Q101,90 95,108',  dur: '2.5s', vals: '-4,89,70;4,89,70;-4,89,70'    },
  { d: 'M99,66 Q112,86 106,104', dur: '2.2s', vals: '5,99,66;-5,99,66;5,99,66'     },
];

interface PolvoConfig {
  name: string;
  cor: Cor;
  tentaculos: NTentaculos;
}

const INITIAL: PolvoConfig[] = [
  { name: 'Ada',     cor: 'Rosa',  tentaculos: 8 },
  { name: 'Ana',     cor: 'Azul',  tentaculos: 6 },
  { name: 'Douglas', cor: 'Verde', tentaculos: 8 },
];

const TresPolvosInterativo: React.FC = () => {
  const [polvos, setPolvos] = useState<PolvoConfig[]>(INITIAL);

  const update = (idx: number, patch: Partial<PolvoConfig>) => {
    setPolvos(prev => prev.map((p, i) => i === idx ? { ...p, ...patch } : p));
  };

  const chip = (active: boolean) =>
    `px-2.5 py-0.5 text-[11px] rounded-full border transition-colors cursor-pointer ${
      active
        ? 'bg-accent/20 border-accent text-accent'
        : 'border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary'
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">
        {polvos.map((polvo, idx) => {
          const { body, light } = COR_MAP[polvo.cor];
          const tentacles = polvo.tentaculos === 6 ? TENTACULOS_DATA.slice(1, 7) : TENTACULOS_DATA;

          return (
            <div key={polvo.name} className="flex-1 p-5 flex flex-col items-center gap-3">
              <p className="text-sm font-bold text-textPrimary">{polvo.name}</p>

              <svg viewBox="0 0 130 130" width="90" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                {tentacles.map((t, i) => (
                  <path key={i} d={t.d} stroke={body} strokeWidth="4.5" fill="none" strokeLinecap="round">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values={t.vals}
                      dur={t.dur}
                      repeatCount="indefinite"
                    />
                  </path>
                ))}
                <ellipse cx="65" cy="42" rx="22" ry="20" fill={light} />
                <ellipse cx="65" cy="56" rx="26" ry="22" fill={body} />
                <circle cx="55" cy="42" r="5" fill="white" />
                <circle cx="75" cy="42" r="5" fill="white" />
                <circle cx="55" cy="43" r="2.8" fill="#1a0a30" />
                <circle cx="75" cy="43" r="2.8" fill="#1a0a30" />
                <circle cx="53.5" cy="41.5" r="1" fill="white" opacity="0.8" />
                <circle cx="73.5" cy="41.5" r="1" fill="white" opacity="0.8" />
                <path d="M59,53 Q65,59 71,53" stroke={light} strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>

              <div className="space-y-2 w-full">
                <div className="space-y-1">
                  <p className="text-[10px] text-textSecondary uppercase tracking-wider">Cor</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {(['Rosa', 'Azul', 'Verde'] as Cor[]).map(c => (
                      <button key={c} onClick={() => update(idx, { cor: c })} className={chip(polvo.cor === c)}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-textSecondary uppercase tracking-wider">Tentáculos</p>
                  <div className="flex gap-1.5">
                    {([6, 8] as NTentaculos[]).map(n => (
                      <button key={n} onClick={() => update(idx, { tentaculos: n })} className={chip(polvo.tentaculos === n)}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center text-xs text-textSecondary/40 py-3 border-t border-borderDark">
        Cada polvo tem seus próprios dados — mudar um não afeta os outros.
      </p>
    </div>
  );
};

export default TresPolvosInterativo;
