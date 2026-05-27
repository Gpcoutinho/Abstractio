import React, { useState } from 'react';
import PolvinhoSVG, { type CorPolvo } from '../PolvinhoSVG';

const NOMES    = ['Ada', 'Caju', 'Muriel'] as const;
const CORES    = ['rosa', 'amarela', 'ciano'] as const;
const TENTACULOS = [6, 8, 10] as const;

type NomeOpcao       = typeof NOMES[number];
type CorOpcao        = typeof CORES[number];
type TentaculosOpcao = typeof TENTACULOS[number];

const COR_POLVO: Record<CorOpcao, CorPolvo> = {
  rosa:    'Rosa',
  amarela: 'Amarela',
  ciano:   'Ciano',
};

const FichaInterativo: React.FC = () => {
  const [nome,       setNome]       = useState<NomeOpcao>('Ada');
  const [cor,        setCor]        = useState<CorOpcao>('rosa');
  const [tentaculos, setTentaculos] = useState<TentaculosOpcao>(8);

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
        <PolvinhoSVG
          cor={COR_POLVO[cor]}
          tentaculos={tentaculos === 6 ? 6 : 8}
          femea
          width={110}
        />
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
