import React, { useState } from 'react';
import PolvinhoSVG, { type CorPolvo } from '../PolvinhoSVG';

type NomePolvo = 'ada' | 'caju' | 'muriel';
type AttrKey = 'nome' | 'cor' | 'num_tentaculos' | 'tamanho_cm';

const ATTR_KEYS: AttrKey[] = ['nome', 'cor', 'num_tentaculos', 'tamanho_cm'];

const POLVOS: Record<NomePolvo, {
  cor: CorPolvo;
  tentaculos: 6 | 8;
  femea: boolean;
  width: number;
  atributos: Record<AttrKey, string>;
}> = {
  ada:    { cor: 'Rosa',    tentaculos: 8, femea: true, width: 90,  atributos: { nome: '"Ada"',    cor: '"rosa"',    num_tentaculos: '8', tamanho_cm: '25' } },
  caju:   { cor: 'Amarela', tentaculos: 6, femea: true, width: 65,  atributos: { nome: '"Caju"',   cor: '"amarela"', num_tentaculos: '6', tamanho_cm: '18' } },
  muriel: { cor: 'Ciano',   tentaculos: 8, femea: true, width: 115, atributos: { nome: '"Muriel"', cor: '"ciano"',   num_tentaculos: '8', tamanho_cm: '32' } },
};

const TresPolvosAcesso: React.FC = () => {
  const [polvo, setPolvo] = useState<NomePolvo>('ada');
  const [attr, setAttr] = useState<AttrKey | ''>('');

  const dados = POLVOS[polvo];
  const resultado = attr ? dados.atributos[attr] : null;

  const handlePolvoChange = (nome: NomePolvo) => {
    setPolvo(nome);
    setAttr('');
  };

  const btnClass = (nome: NomePolvo) =>
    `px-3 py-1 rounded-full text-xs font-mono transition-colors ${
      polvo === nome
        ? 'bg-accent text-bgPrimary font-bold'
        : 'bg-bgPrimary border border-borderDark text-textSecondary hover:text-textPrimary'
    }`;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">

      {/* Header com seletor */}
      <div className="px-5 py-2.5 border-b border-borderDark flex items-center gap-3 flex-wrap">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Selecione um objeto</p>
        <div className="flex gap-2">
          {(['ada', 'caju', 'muriel'] as NomePolvo[]).map(nome => (
            <button key={nome} onClick={() => handlePolvoChange(nome)} className={btnClass(nome)}>
              {nome}
            </button>
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col lg:flex-row gap-4 p-5 items-center">

        {/* Card do polvo */}
        <div className="w-44 rounded-xl border border-borderDark bg-bgPrimary overflow-hidden flex-shrink-0">
          <div className="px-3 py-2 border-b border-borderDark text-center">
            <span className="text-xs font-bold text-textPrimary tracking-wide">
              {polvo.charAt(0).toUpperCase() + polvo.slice(1)}
            </span>
          </div>
          <div className="flex justify-center py-4">
            <PolvinhoSVG
              cor={dados.cor}
              tentaculos={dados.tentaculos}
              femea={dados.femea}
              width={dados.width}
            />
          </div>
          <div className="px-3 pt-2 pb-3 border-t border-borderDark space-y-1">
            {ATTR_KEYS.map(k => (
              <div
                key={k}
                className="grid gap-1 font-mono text-[11px]"
                style={{ gridTemplateColumns: 'auto 1fr' }}
              >
                <span className="text-textSecondary">{k}:</span>
                <span className="text-textPrimary">{dados.atributos[k]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seta */}
        <div className="hidden lg:block text-textSecondary text-xl flex-shrink-0 select-none">→</div>

        {/* Painel de acesso */}
        <div className="flex-1 min-w-0 rounded-xl border border-borderDark bg-bgPrimary overflow-hidden w-full">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-borderDark">

            <div className="flex-1 p-4 flex flex-col justify-center gap-3">
              <p className="text-[10px] text-textSecondary uppercase tracking-widest mb-1">Linha de código</p>
              <div className="flex items-center gap-1 font-mono text-sm flex-wrap bg-bgSecondary rounded-lg px-4 py-3 border border-borderDark">
                <span className="text-purple-400">print</span>
                <span className="text-textSecondary">(</span>
                <span className="text-accent">{polvo}</span>
                <span className="text-textPrimary">.</span>
                <select
                  value={attr}
                  onChange={e => setAttr(e.target.value as AttrKey | '')}
                  className="bg-accent/10 border border-accent/40 text-accent rounded px-2 py-0.5 text-xs font-mono outline-none cursor-pointer hover:bg-accent/20 transition-colors"
                >
                  <option value="" className="bg-bgSecondary text-textSecondary">___</option>
                  {ATTR_KEYS.map(k => (
                    <option key={k} value={k} className="bg-bgSecondary text-textPrimary">{k}</option>
                  ))}
                </select>
                <span className="text-textSecondary">)</span>
              </div>
            </div>

            <div className="flex-1 p-4 flex flex-col justify-center gap-3">
              <p className="text-[10px] text-textSecondary uppercase tracking-widest mb-1">Retorno na tela</p>
              {resultado ? (
                <div className="bg-bgSecondary rounded-lg px-4 py-3 border border-borderDark font-mono text-sm text-textPrimary animate-in fade-in duration-200">
                  {resultado}
                </div>
              ) : (
                <div className="bg-bgSecondary rounded-lg px-4 py-3 border border-borderDark font-mono text-sm text-textSecondary/30 select-none">
                  —
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TresPolvosAcesso;
