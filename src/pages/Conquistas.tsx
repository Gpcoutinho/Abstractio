import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, XMarkIcon, StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { useTrilha } from '../hooks/useTrilha';
import type { MissaoView, NivelView } from '../hooks/useTrilha';
import { useProgress } from '../hooks/useProgress';
import { useSession } from '../hooks/useSession';
import { resolveEmblem } from '../utils/emblem';
import Footer from '../components/Footer';
import MissionIcon from '../components/MissionIcon';
import HexBadge from '../components/HexBadge';
import ShellIcon from '../components/ShellIcon';
import PageWrapper from '../components/PageWrapper';

type SelectedEmblem = {
  missao: MissaoView;
  nivel: NivelView;
  missaoIdx: number;
};

const Conquistas: React.FC = () => {
  const { niveis, totalMissoes, loading } = useTrilha();
  const { completed, conchas_por_missao, getTier, getExtrasTotal } = useProgress();
  const { profile, balance } = useSession();
  const genero = profile?.gender ?? null;
  const [selected, setSelected] = useState<SelectedEmblem | null>(null);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <PageWrapper className="flex-grow max-w-5xl pb-16">
          <div className="space-y-3 animate-pulse mt-10" aria-hidden="true">
            <div className="h-8 w-1/2 rounded bg-bgSecondary" />
            <div className="h-4 w-2/3 rounded bg-bgSecondary" />
            <div className="flex gap-5 mt-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-36 h-36 rounded-2xl bg-bgSecondary" />
              ))}
            </div>
          </div>
        </PageWrapper>
        <Footer />
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <PageWrapper className="flex-grow max-w-5xl pb-16">

        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">Conquistas</h1>
          <p className="text-textSecondary">
            {completed.length} de {totalMissoes} emblemas · {balance?.formatted ?? '—'}
          </p>
        </div>

        {/* Emblemas por nível */}
        <div className="space-y-12">
          {niveis.map(nivel => (
            <section key={nivel.id}>
              <h2 className="text-base font-semibold text-textSecondary uppercase tracking-widest mb-5">
                {nivel.title}
              </h2>
              <div className="flex flex-wrap gap-5">
                {nivel.missoes.map((missao, missaoIdx) => {
                  const earned = completed.includes(missao.id);
                  const tierVal = getTier(missao.id);
                  const tier = tierVal !== 'none' ? tierVal : undefined;
                  const tierCount = { none: 0, bronze: 1, silver: 2, gold: 3 }[tierVal];
                  const hasExtras = getExtrasTotal(missao.id) > 0;
                  return (
                    <div key={missao.id} className="flex flex-col items-center gap-1.5 w-36">
                      {/* Label discreto acima */}
                      <div className="text-center px-1">
                        <p className="text-xs text-textSecondary uppercase tracking-wider leading-none mb-0.5">
                          Missão {missaoIdx}
                        </p>
                        <p className="text-sm text-textPrimary leading-tight line-clamp-1">
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
                          emblem={resolveEmblem(missao.emblem ?? undefined, genero)}
                          tier={tier}
                          className={earned ? '' : 'opacity-35 grayscale'}
                        >
                          <MissionIcon iconName={missao.icon} completed={earned} className="w-12 h-12" />
                        </HexBadge>
                      </button>

                      {/* Estrelas de tier (apenas missões com extras) */}
                      {hasExtras && (
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3].map(n =>
                            tierCount >= n
                              ? <StarSolid key={n} className="w-4 h-4 text-yellow-400" />
                              : <StarOutline key={n} className="w-4 h-4 text-borderDark" />
                          )}
                        </div>
                      )}

                      {/* Conchas */}
                      {!!conchas_por_missao[missao.id] && (
                        <span className="inline-flex items-center gap-0.5 text-xs text-accent font-semibold">
                          {conchas_por_missao[missao.id]}
                          <ShellIcon className="w-3 h-3" />
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
      const modalTierVal = getTier(missao.id);
      const modalTier = modalTierVal !== 'none' ? modalTierVal : undefined;
      const modalTierCount = { none: 0, bronze: 1, silver: 2, gold: 3 }[modalTierVal];
      const modalHasExtras = getExtrasTotal(missao.id) > 0;
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
              <HexBadge earned={earned} emblem={resolveEmblem(missao.emblem ?? undefined, genero)} interactive={false} large tier={modalTier} className="w-36">
                <MissionIcon iconName={missao.icon} completed={earned} className="w-12 h-12" />
              </HexBadge>
            </div>

            <p className="text-textSecondary text-xs mb-0.5 uppercase tracking-wider">
              {nivel.title}
            </p>
            <p className="text-textPrimary font-semibold mb-1">
              Missão {missaoIdx} · {missao.title}
            </p>

            {modalHasExtras && (
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3].map(n =>
                  modalTierCount >= n
                    ? <StarSolid key={n} className="w-4 h-4 text-yellow-400" />
                    : <StarOutline key={n} className="w-4 h-4 text-borderDark" />
                )}
              </div>
            )}

            {!!conchasGanhas && (
              <p className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-3">
                {conchasGanhas}
                <ShellIcon className="w-3.5 h-3.5" />
              </p>
            )}

            <div className="mt-6 pt-4 border-t border-borderDark w-full flex justify-center">
            <Link
              to={`/missao/${nivel.id}/${missaoIdx + 1}`}
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-1 text-xs text-textSecondary hover:text-textPrimary transition-colors"
            >
              ir para a missão
              <ArrowRightIcon className="w-3 h-3" />
            </Link>
            </div>
          </div>
        </div>
      );
    })()}
    </>
  );
};

export default Conquistas;
