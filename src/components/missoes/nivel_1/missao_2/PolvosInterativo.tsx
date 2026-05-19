import React, { useState, useEffect } from 'react';

type Cor = 'Roxo' | 'Azul' | 'Verde';
type Tamanho = 'Pequeno' | 'Grande';
type NTentaculos = 6 | 8;
type Acao = 'nadar' | 'pirueta' | 'tinta' | null;

const COR_MAP: Record<Cor, { body: string; light: string }> = {
  Roxo:  { body: '#7c5cbf', light: '#a080d8' },
  Azul:  { body: '#2c6ea8', light: '#5090d0' },
  Verde: { body: '#1e8858', light: '#3aaa78' },
};

const ACAO_MSG: Record<NonNullable<Acao>, string> = {
  nadar:   '🌊 Polvinho está nadando!',
  pirueta: '🌀 Polvinho deu uma pirueta!',
  tinta:   '🖤 Polvinho soltou tinta!',
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

const PolvosInterativo: React.FC = () => {
  const [cor, setCor] = useState<Cor>('Roxo');
  const [tamanho, setTamanho] = useState<Tamanho>('Pequeno');
  const [tentaculos, setTentaculos] = useState<NTentaculos>(8);
  const [acao, setAcao] = useState<Acao>(null);
  const [acaoKey, setAcaoKey] = useState(0);

  const dispararAcao = (a: NonNullable<Acao>) => {
    setAcao(a);
    setAcaoKey(k => k + 1);
  };

  useEffect(() => {
    if (!acao) return;
    const t = setTimeout(() => setAcao(null), 3000);
    return () => clearTimeout(t);
  }, [acaoKey]);

  const { body, light } = COR_MAP[cor];
  const scale = tamanho === 'Grande' ? 1.35 : 1;
  const activeTentacles = tentaculos === 6 ? TENTACULOS_DATA.slice(1, 7) : TENTACULOS_DATA;

  const wrapperStyle: React.CSSProperties = acao === 'nadar'
    ? { animation: 'pi-nadar 1.4s ease-in-out 2', transformOrigin: 'center' }
    : acao === 'pirueta'
    ? { animation: 'pi-pirueta 0.9s ease-in-out 1', transformOrigin: 'center' }
    : { transform: `scale(${scale})`, transformOrigin: 'center' };

  const chip = (active: boolean) =>
    `px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer ${
      active
        ? 'bg-accent/20 border-accent text-accent'
        : 'border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary'
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <style>{`
        @keyframes pi-nadar {
          0%,100% { transform: scale(${scale}) translateX(0); }
          25%      { transform: scale(${scale}) translateX(-16px); }
          75%      { transform: scale(${scale}) translateX(16px); }
        }
        @keyframes pi-pirueta {
          from { transform: scale(${scale}) rotate(0deg); }
          to   { transform: scale(${scale}) rotate(360deg); }
        }
        @keyframes pi-tinta {
          0%   { opacity: 0; transform: scale(0.4); }
          35%  { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
      `}</style>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">

        {/* Características */}
        <div className="p-5 md:w-52 space-y-4">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Características</p>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Cor</p>
            <div className="flex gap-2 flex-wrap">
              {(['Roxo', 'Azul', 'Verde'] as Cor[]).map(c => (
                <button key={c} onClick={() => setCor(c)} className={chip(cor === c)}>{c}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Tamanho</p>
            <div className="flex gap-2 flex-wrap">
              {(['Pequeno', 'Grande'] as Tamanho[]).map(t => (
                <button key={t} onClick={() => setTamanho(t)} className={chip(tamanho === t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-textSecondary">Tentáculos</p>
            <div className="flex gap-2 flex-wrap">
              {([6, 8] as NTentaculos[]).map(n => (
                <button key={n} onClick={() => setTentaculos(n)} className={chip(tentaculos === n)}>{n}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Polvinho */}
        <div className="flex-1 flex flex-col items-center justify-center py-10 gap-4">
          <div key={acaoKey} style={wrapperStyle}>
            <svg viewBox="0 0 130 130" width="110" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
              {activeTentacles.map((t, i) => (
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
              {acao === 'tinta' && (
                <ellipse
                  cx="65" cy="92" rx="26" ry="11"
                  fill="#0a0614"
                  style={{ animation: 'pi-tinta 1.5s ease-out forwards', transformOrigin: '65px 92px' }}
                />
              )}
            </svg>
          </div>
          <div className="h-6 flex items-center">
            {acao && (
              <p className="text-sm text-textSecondary animate-in fade-in duration-200">
                {ACAO_MSG[acao]}
              </p>
            )}
          </div>
        </div>

        {/* Ações */}
        <div className="p-5 md:w-52 space-y-3">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Ações</p>
          {([
            { id: 'nadar'   as const, label: 'Nadar',        emoji: '🌊' },
            { id: 'pirueta' as const, label: 'Dar pirueta',  emoji: '🌀' },
            { id: 'tinta'   as const, label: 'Soltar tinta', emoji: '🖤' },
          ]).map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => dispararAcao(id)}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-borderDark text-textSecondary hover:border-accent/50 hover:text-textPrimary active:scale-95 transition-all text-sm cursor-pointer"
            >
              <span>{emoji}</span>
              {label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PolvosInterativo;
