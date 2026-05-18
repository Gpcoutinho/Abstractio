import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { niveis } from '../data/curriculum';
import type { Missao, Nivel } from '../data/curriculum/types';
import { useProgress } from '../hooks/useProgress';
import Footer from '../components/Footer';
import MissionIcon from '../components/MissionIcon';
import HexBadge from '../components/HexBadge';
import ShellIcon from '../components/ShellIcon';
import PageWrapper from '../components/PageWrapper';

type SelectedEmblem = {
  missao: Missao;
  nivel: Nivel;
  missaoIdx: number;
};

const Conquistas: React.FC = () => {
  const { completed, conchas, conchas_por_missao } = useProgress();
  const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);
  const [selected, setSelected] = useState<SelectedEmblem | null>(null);

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <PageWrapper className="flex-grow max-w-5xl pb-16">

        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">Conquistas</h1>
          <p className="text-textSecondary">
            {completed.length} de {totalMissoes} troféus · {conchas} conchas
          </p>
        </div>

        {/* Troféus por nível */}
        <div className="space-y-12">
          {niveis.map(nivel => (
            <section key={nivel.id}>
              <h2 className="text-base font-semibold text-textSecondary uppercase tracking-widest mb-5">
                {nivel.title}
              </h2>
              <div className="flex flex-wrap gap-5">
                {nivel.missoes.map((missao, missaoIdx) => {
                  const earned = completed.includes(missao.id);
                  return (
                    <div key={missao.id} className="flex flex-col items-center gap-1.5 w-24">
                      {/* Label discreto acima */}
                      <div className="text-center px-1">
                        <p className="text-[9px] text-textSecondary/40 uppercase tracking-wider leading-none mb-0.5">
                          Missão {missaoIdx}
                        </p>
                        <p className="text-[10px] text-textSecondary/60 leading-tight line-clamp-1">
                          {missao.title}
                        </p>
                      </div>

                      {/* Emblema hexagonal */}
                      <button
                        onClick={() => setSelected({ missao, nivel, missaoIdx })}
                        className="block w-full transition-transform hover:scale-105 cursor-pointer"
                      >
                        <HexBadge
                          earned={earned}
                          emblem={missao.emblem}
                          className={earned ? '' : 'opacity-35 grayscale'}
                        >
                          <MissionIcon iconName={missao.icon} completed={earned} className="w-9 h-9" />
                        </HexBadge>
                      </button>

                      {/* Conchas */}
                      {conchas_por_missao[missao.id] !== undefined && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-accent font-semibold">
                          {conchas_por_missao[missao.id]}
                          <ShellIcon className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </PageWrapper>
      <Footer />
    </div>

    {/* Modal de detalhe do emblema */}
    {selected && (() => {
      const { missao, nivel, missaoIdx } = selected;
      const earned = completed.includes(missao.id);
      const conchasGanhas = conchas_por_missao[missao.id];
      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bgPrimary/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-bgSecondary border border-borderDark rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl animate-pop-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-textSecondary hover:text-textPrimary transition-colors"
              aria-label="Fechar"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-5">
              <HexBadge earned={earned} emblem={missao.emblem} interactive={false} className="w-36">
                <MissionIcon iconName={missao.icon} completed={earned} className="w-12 h-12" />
              </HexBadge>
            </div>

            <p className="text-textSecondary text-xs mb-0.5 uppercase tracking-wider">
              {nivel.title}
            </p>
            <p className="text-textPrimary font-semibold mb-1">
              Missão {missaoIdx} · {missao.title}
            </p>

            {conchasGanhas !== undefined && (
              <p className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3">
                {conchasGanhas}
                <ShellIcon className="w-3.5 h-3.5" />
              </p>
            )}

            <Link
              to={`/missao/${nivel.id}/${missaoIdx + 1}`}
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-1 text-xs text-textSecondary hover:text-textPrimary transition-colors mt-5"
            >
              ir para a missão
              <ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      );
    })()}
    </>
  );
};

export default Conquistas;
