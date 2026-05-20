import React, { useState } from 'react';

const BoloFactory: React.FC = () => {
  const [bolos, setBolos] = useState<number[]>([]);

  return (
    <div className="my-6 not-prose">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch">

        <div className="flex-1 rounded-lg overflow-hidden border border-white/10 bg-white/5">
          <div className="px-4 py-2 border-b border-white/10 bg-white/5">
            <span className="text-xs font-bold text-textSecondary uppercase tracking-wider">
              Receita (Procedural)
            </span>
          </div>
          <div className="px-4 py-5 flex flex-col items-center gap-3">
            <ol className="text-sm text-textSecondary space-y-2 w-full list-none p-0">
              {['quebre os ovos', 'misture a farinha', 'asse por 40 min'].map((step, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-textSecondary/40 font-mono text-xs w-4">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <span className="text-textSecondary/40 text-lg leading-none">↓</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl">🎂</span>
              <span className="text-xs text-textSecondary/50">executa uma vez</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-1">
          <span className="text-textSecondary/30 text-sm font-bold">vs</span>
        </div>

        <div className="flex-1 rounded-lg overflow-hidden border border-accent/30 bg-accent/5">
          <div className="px-4 py-2 border-b border-accent/20 bg-accent/10">
            <span className="font-mono text-xs font-bold text-accent">class Bolo:</span>
          </div>
          <div className="px-4 py-5 flex flex-col items-center gap-3">
            <button
              onClick={() => setBolos(b => [...b, b.length])}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30 active:scale-95 transition-all"
            >
              Produzir Bolo
            </button>
            <div className="min-h-[52px] flex flex-wrap gap-2 justify-center items-center">
              {bolos.length === 0
                ? <span className="text-xs text-textSecondary/30">clique para produzir</span>
                : bolos.map(i => <span key={i} className="text-3xl">🎂</span>)
              }
            </div>
            {bolos.length > 0 && (
              <button
                onClick={() => setBolos([])}
                className="text-xs text-textSecondary/40 hover:text-textSecondary/70 transition-colors"
              >
                limpar
              </button>
            )}
          </div>
        </div>

      </div>
      <p className="text-center text-xs text-textSecondary/40 mt-3 italic">
        Mesma palavra, papéis opostos.
      </p>
    </div>
  );
};

export default BoloFactory;
