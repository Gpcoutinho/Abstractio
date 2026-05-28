import React, { useState, useCallback } from 'react';
import { PlayIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import PolvinhoSVG from '../PolvinhoSVG';

const ATTRS = ['nome', 'cor', 'num_tentaculos', 'tamanho_cm'] as const;
type Attr = typeof ATTRS[number];
type Polvo = 'caju' | 'ada' | 'muriel';

const DADOS: Record<Polvo, Record<Attr, string>> = {
  caju:   { nome: '"Caju"',   cor: '"amarela"', num_tentaculos: '6', tamanho_cm: '18' },
  ada:    { nome: '"Ada"',    cor: '"rosa"',     num_tentaculos: '8', tamanho_cm: '25' },
  muriel: { nome: '"Muriel"', cor: '"ciano"',    num_tentaculos: '8', tamanho_cm: '32' },
};

const CARD = 'flex-1 min-w-0 rounded-xl border border-borderDark bg-bgPrimary overflow-hidden';
const ROW  = 'grid gap-1 font-mono text-[11px]';
const COL  = { gridTemplateColumns: 'auto 1fr' } as const;

const AnimacaoCamuflagem: React.FC = () => {
  const [animado,     setAnimado]     = useState(false);
  const [instantaneo, setInstantaneo] = useState(false);

  const tr = (v: string) => (instantaneo ? 'none' : v);

  const handleReproduzir = () => setAnimado(true);

  const handleReiniciar = useCallback(() => {
    setInstantaneo(true);
    setAnimado(false);
    setTimeout(() => setInstantaneo(false), 50);
  }, []);

  return (
    <div className="not-prose my-6 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">

      {/* Header */}
      <div className="px-5 py-2.5 border-b border-borderDark flex items-center justify-between">
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Observe</p>
        {animado ? (
          <button
            onClick={handleReiniciar}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-bgPrimary border border-borderDark text-textSecondary hover:text-textPrimary transition-colors"
          >
            <ArrowPathIcon className="w-2.5 h-2.5" />
            Reiniciar
          </button>
        ) : (
          <button
            onClick={handleReproduzir}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-bgPrimary border border-borderDark text-textSecondary hover:text-textPrimary transition-colors"
          >
            <PlayIcon className="w-2.5 h-2.5" />
            Reproduzir
          </button>
        )}
      </div>

      {/* Cards */}
      <div className="p-5">
        <div className="flex gap-3">

          {/* Caju */}
          <div className={CARD}>
            <div className="px-2 py-2 border-b border-borderDark text-center">
              <span className="text-xs font-bold text-textPrimary tracking-wide">Caju</span>
            </div>
            <div className="flex justify-center items-center h-32 overflow-hidden">
              <PolvinhoSVG cor="Amarela" tentaculos={6} femea width={55} />
            </div>
            <div className="px-2 pt-2 pb-2 border-t border-borderDark space-y-1">
              {ATTRS.map(k => (
                <div key={k} className={ROW} style={COL}>
                  <span className="text-textSecondary">{k}:</span>
                  <span className="text-textPrimary">{DADOS.caju[k]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ada — animada */}
          <div className={CARD}>
            <div className="px-2 py-2 border-b border-borderDark text-center">
              <span className="text-xs font-bold text-textPrimary tracking-wide">Ada</span>
            </div>
            <div
              className="flex justify-center items-center h-32 overflow-hidden"
              style={{
                opacity:    animado ? 0.12 : 1,
                filter:     animado ? 'saturate(0)' : 'saturate(1)',
                transition: tr('opacity 0.9s ease, filter 0.9s ease'),
              }}
            >
              <PolvinhoSVG cor="Rosa" tentaculos={8} femea width={76} />
            </div>
            <div className="px-2 pt-2 pb-2 border-t border-borderDark space-y-1">
              {ATTRS.map(k => (
                <div key={k} className={ROW} style={COL}>
                  <span className="text-textSecondary">{k}:</span>
                  {k === 'cor' ? (
                    <span className="relative">
                      <span
                        className="text-textPrimary"
                        style={{ opacity: animado ? 0 : 1, transition: tr('opacity 0.4s ease') }}
                      >
                        "rosa"
                      </span>
                      <span
                        className="absolute left-0 top-0 text-accent whitespace-nowrap"
                        style={{ opacity: animado ? 1 : 0, transition: tr('opacity 0.4s ease 0.3s') }}
                      >
                        "transparente"
                      </span>
                    </span>
                  ) : (
                    <span className="text-textPrimary">{DADOS.ada[k]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Muriel */}
          <div className={CARD}>
            <div className="px-2 py-2 border-b border-borderDark text-center">
              <span className="text-xs font-bold text-textPrimary tracking-wide">Muriel</span>
            </div>
            <div className="flex justify-center items-center h-32 overflow-hidden">
              <PolvinhoSVG cor="Ciano" tentaculos={8} femea width={97} />
            </div>
            <div className="px-2 pt-2 pb-2 border-t border-borderDark space-y-1">
              {ATTRS.map(k => (
                <div key={k} className={ROW} style={COL}>
                  <span className="text-textSecondary">{k}:</span>
                  <span className="text-textPrimary">{DADOS.muriel[k]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnimacaoCamuflagem;
