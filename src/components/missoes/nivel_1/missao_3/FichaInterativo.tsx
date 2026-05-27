import React, { useState } from 'react';

const NOMES    = ['Ada', 'Caju', 'Muriel'] as const;
const CORES    = ['rosa', 'amarela', 'ciano'] as const;
const TENTACULOS = [6, 8, 10] as const;

type NomeOpcao       = typeof NOMES[number];
type CorOpcao        = typeof CORES[number];
type TentaculosOpcao = typeof TENTACULOS[number];

const COR_SVG: Record<CorOpcao, { body: string; light: string }> = {
  rosa:    { body: '#db2777', light: '#f472b6' },
  amarela: { body: '#ca8a04', light: '#fbbf24' },
  ciano:   { body: '#0891b2', light: '#22d3ee' },
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

const FichaInterativo: React.FC = () => {
  const [nome,      setNome]      = useState<NomeOpcao>('Ada');
  const [cor,       setCor]       = useState<CorOpcao>('rosa');
  const [tentaculos, setTentaculos] = useState<TentaculosOpcao>(8);

  const { body, light } = COR_SVG[cor];
  const activeTentaculos = tentaculos === 6 ? TENTACULOS_DATA.slice(1, 7) : TENTACULOS_DATA;

  const selectClass =
    'bg-bgPrimary border border-accent/40 text-accent rounded px-2 py-0.5 ' +
    'text-xs font-mono outline-none cursor-pointer hover:border-accent transition-colors';

  return (
    <div className="not-prose my-6 w-52 mx-auto rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">

      {/* Header */}
      <div className="px-4 py-2.5 border-b border-borderDark text-center">
        <span className="text-xs font-bold text-textPrimary tracking-wide">{nome}</span>
      </div>

      {/* Polvo */}
      <div className="flex justify-center py-6">
        <svg viewBox="0 0 130 130" width="110" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          {activeTentaculos.map((t, i) => (
            <path key={i} d={t.d} stroke={body} strokeWidth="4.5" fill="none" strokeLinecap="round">
              <animateTransform attributeName="transform" type="rotate"
                values={t.vals} dur={t.dur} repeatCount="indefinite" />
            </path>
          ))}
          {/* Corpo */}
          <ellipse cx="65" cy="42" rx="22" ry="20" fill={light} />
          <ellipse cx="65" cy="56" rx="26" ry="22" fill={body} />
          {/* Bochechas */}
          <ellipse cx="50" cy="54" rx="6" ry="4" fill={light} opacity="0.3" />
          <ellipse cx="80" cy="54" rx="6" ry="4" fill={light} opacity="0.3" />
          {/* Olhos */}
          <circle cx="55" cy="42" r="5" fill="white" />
          <circle cx="75" cy="42" r="5" fill="white" />
          <circle cx="55" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="75" cy="43" r="2.8" fill="#1a0a30" />
          <circle cx="53.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          <circle cx="73.5" cy="41.5" r="1" fill="white" opacity="0.8" />
          {/* Cílios */}
          <g transform="translate(47,41) rotate(-60)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(47,42) rotate(-85)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(47,43) rotate(-110)"><path d="M0,0 C0.4,-1.5 0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(83,41) rotate(60)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(83,42) rotate(85)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          <g transform="translate(83,43) rotate(110)"><path d="M0,0 C-0.4,-1.5 -0.5,-3.2 0,-5" stroke="#1a0a30" strokeWidth="1.1" fill="none" strokeLinecap="round" /></g>
          {/* Sorriso */}
          <path d="M59,53 Q65,59 71,53" stroke={light} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* Atributos editáveis */}
      <div className="px-4 pt-3 pb-4 border-t border-borderDark space-y-2.5">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-textSecondary">nome:</span>
          <select value={nome} onChange={e => setNome(e.target.value as NomeOpcao)} className={selectClass}>
            {NOMES.map(n => (
              <option key={n} value={n} className="bg-bgSecondary">{`"${n}"`}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-textSecondary">cor:</span>
          <select value={cor} onChange={e => setCor(e.target.value as CorOpcao)} className={selectClass}>
            {CORES.map(c => (
              <option key={c} value={c} className="bg-bgSecondary">{`"${c}"`}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-textSecondary">qte_tentaculos:</span>
          <select
            value={tentaculos}
            onChange={e => setTentaculos(Number(e.target.value) as TentaculosOpcao)}
            className={selectClass}
          >
            {TENTACULOS.map(t => (
              <option key={t} value={t} className="bg-bgSecondary">{t}</option>
            ))}
          </select>
        </div>
      </div>

    </div>
  );
};

export default FichaInterativo;
