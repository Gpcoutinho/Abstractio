import React, { useState } from 'react';

type AttrKey = 'nome' | 'cor' | 'num_tentaculos' | 'tamanho_cm';

const RETORNO: Record<AttrKey, string> = {
  nome:           '"Ada"',
  cor:            '"rosa"',
  num_tentaculos: '8',
  tamanho_cm:     '25',
};

const FichaAcesso: React.FC = () => {
  const [attr, setAttr] = useState<AttrKey | ''>('');
  const resultado = attr ? RETORNO[attr] : null;

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">
      <div className="px-5 py-2.5 border-b border-borderDark">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Experimente</p>
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-borderDark">

        {/* Lado esquerdo — linha de código */}
        <div className="flex-1 p-5 flex flex-col justify-center gap-3">
          <p className="text-[10px] text-textSecondary uppercase tracking-widest mb-1">Linha de código</p>
          <div className="flex items-center gap-1 font-mono text-sm flex-wrap bg-bgPrimary rounded-lg px-4 py-3 border border-borderDark">
            <span className="text-purple-400">print</span>
            <span className="text-textSecondary">(</span>
            <span className="text-accent">ada</span>
            <span className="text-textPrimary">.</span>
            <select
              value={attr}
              onChange={e => setAttr(e.target.value as AttrKey | '')}
              className="bg-accent/10 border border-accent/40 text-accent rounded px-2 py-0.5 text-xs font-mono outline-none cursor-pointer hover:bg-accent/20 transition-colors"
            >
              <option value=""        className="bg-bgSecondary text-textSecondary">___</option>
              <option value="nome"       className="bg-bgSecondary text-textPrimary">nome</option>
              <option value="cor"        className="bg-bgSecondary text-textPrimary">cor</option>
              <option value="num_tentaculos" className="bg-bgSecondary text-textPrimary">num_tentaculos</option>
              <option value="tamanho_cm"     className="bg-bgSecondary text-textPrimary">tamanho_cm</option>
            </select>
            <span className="text-textSecondary">)</span>
          </div>
        </div>

        {/* Lado direito — retorno */}
        <div className="flex-1 p-5 flex flex-col justify-center gap-3">
          <p className="text-[10px] text-textSecondary uppercase tracking-widest mb-1">Retorno na tela</p>
          {resultado ? (
            <div className="bg-bgPrimary rounded-lg px-4 py-3 border border-borderDark font-mono text-sm text-textPrimary animate-in fade-in duration-200">
              {resultado}
            </div>
          ) : (
            <div className="bg-bgPrimary rounded-lg px-4 py-3 border border-borderDark font-mono text-sm text-textSecondary/30 select-none">
              —
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FichaAcesso;
