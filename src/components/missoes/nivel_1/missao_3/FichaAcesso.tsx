import React, { useState } from 'react';

type AttrKey = 'nome' | 'cor' | 'num_tentaculos' | 'tamanho_cm' | 'especie';

const ATRIBUTOS: { key: AttrKey; value: string }[] = [
  { key: 'nome',           value: '"Thiago"'          },
  { key: 'cor',            value: '"roxo"'             },
  { key: 'num_tentaculos', value: '8'                  },
  { key: 'tamanho_cm',     value: '25'                 },
  { key: 'especie',        value: '"Octopus vulgaris"' },
];

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

const BODY  = '#7c5cbf';
const LIGHT = '#a080d8';

const FichaAcesso: React.FC = () => {
  const [selected, setSelected] = useState<AttrKey | null>(null);

  const attr = ATRIBUTOS.find(a => a.key === selected);
  const tentacleStroke = selected === 'num_tentaculos' ? LIGHT : BODY;

  const chipClass = (key: AttrKey) =>
    `px-3 py-1 text-xs rounded-full border font-mono transition-colors cursor-pointer ${
      selected === key
        ? 'bg-accent/20 border-accent text-accent'
        : 'border-borderDark text-textSecondary hover:border-accent/40 hover:text-textPrimary'
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">

        {/* Thiago SVG */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 gap-1">
          <svg viewBox="0 0 130 140" width="150" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>

            {selected === 'cor' && (
              <ellipse cx="65" cy="50" rx="33" ry="31" fill="none" stroke={LIGHT} strokeWidth="2" strokeDasharray="5,3" opacity="0.85">
                <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite" />
              </ellipse>
            )}

            {TENTACULOS_DATA.map((t, i) => (
              <path key={i} d={t.d} stroke={tentacleStroke} strokeWidth="4.5" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" values={t.vals} dur={t.dur} repeatCount="indefinite" />
              </path>
            ))}

            {selected === 'num_tentaculos' && (
              <text x="65" y="124" textAnchor="middle" fill={LIGHT} fontSize="12" fontFamily="monospace">× 8 tentáculos</text>
            )}

            <ellipse cx="65" cy="42" rx="22" ry="20" fill={LIGHT} />
            <ellipse cx="65" cy="56" rx="26" ry="22" fill={BODY} />
            <circle cx="55" cy="42" r="5" fill="white" />
            <circle cx="75" cy="42" r="5" fill="white" />
            <circle cx="55" cy="43" r="2.8" fill="#1a0a30" />
            <circle cx="75" cy="43" r="2.8" fill="#1a0a30" />
            <circle cx="53.5" cy="41.5" r="1" fill="white" opacity="0.8" />
            <circle cx="73.5" cy="41.5" r="1" fill="white" opacity="0.8" />
            <path d="M59,53 Q65,59 71,53" stroke={LIGHT} strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {selected === 'tamanho_cm' && (
              <g>
                <line x1="116" y1="24" x2="116" y2="114" stroke={LIGHT} strokeWidth="1.5" strokeDasharray="3,2" />
                <line x1="112" y1="24" x2="120" y2="24" stroke={LIGHT} strokeWidth="1.5" />
                <line x1="112" y1="114" x2="120" y2="114" stroke={LIGHT} strokeWidth="1.5" />
                <text x="124" y="70" fill={LIGHT} fontSize="11" fontFamily="monospace" textAnchor="start">25</text>
                <text x="124" y="82" fill={LIGHT} fontSize="11" fontFamily="monospace" textAnchor="start">cm</text>
              </g>
            )}

            {selected === 'especie' && (
              <text x="65" y="131" textAnchor="middle" fill={LIGHT} fontSize="11" fontFamily="monospace" fontStyle="italic">
                Octopus vulgaris
              </text>
            )}

            {selected === 'nome' && (
              <g>
                <rect x="20" y="3" width="90" height="24" rx="4" fill="#1e1840" stroke="#4F33A9" strokeWidth="1" />
                <text x="65" y="19" textAnchor="middle" fill={LIGHT} fontSize="13" fontFamily="monospace">Thiago</text>
              </g>
            )}
          </svg>
          <p className="text-xs text-textSecondary font-mono">thiago</p>
        </div>

        {/* Access panel */}
        <div className="flex-1 p-5 flex flex-col justify-center gap-4">
          <div>
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Acessar atributo</p>
            <div className="flex flex-wrap gap-2">
              {ATRIBUTOS.map(a => (
                <button
                  key={a.key}
                  onClick={() => setSelected(a.key === selected ? null : a.key)}
                  className={chipClass(a.key)}
                >
                  {a.key}
                </button>
              ))}
            </div>
          </div>

          {attr ? (
            <div className="space-y-2 animate-in fade-in duration-200">
              <div className="bg-bgPrimary rounded-lg px-3 py-2.5 border border-borderDark">
                <p className="text-[10px] text-textSecondary mb-1">acesso</p>
                <code className="text-sm text-accent font-mono break-all">thiago.{attr.key}</code>
              </div>
              <div className="flex justify-center text-textSecondary">↓</div>
              <div className="bg-bgPrimary rounded-lg px-3 py-2.5 border border-accent/30">
                <p className="text-[10px] text-textSecondary mb-1">valor</p>
                <code className="text-sm text-textPrimary font-mono break-all">{attr.value}</code>
              </div>
            </div>
          ) : (
            <p className="text-xs text-textSecondary leading-relaxed">
              Clique em um atributo para ver como acessá-lo.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default FichaAcesso;
