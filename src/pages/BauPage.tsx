import React, { useState, useMemo } from 'react';
import { StarIcon as StarOutline, LockClosedIcon, XMarkIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { niveis } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import MissionIcon from '../components/MissionIcon';
import BauDeConchas from '../components/BauDeConchas';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/Footer';

const BG = '#1e293b';

const TIER_CARD_STYLE: Partial<Record<string, React.CSSProperties>> = {
  bronze: {
    background: `linear-gradient(rgba(124,45,18,0.07), rgba(124,45,18,0.07)) padding-box, linear-gradient(${BG}, ${BG}) padding-box, linear-gradient(135deg, #431407, #7c2d12, #b45309, #7c2d12, #3d0a00) border-box`,
    border: '1px solid transparent',
  },
  silver: {
    background: `linear-gradient(rgba(148,163,184,0.09), rgba(148,163,184,0.09)) padding-box, linear-gradient(${BG}, ${BG}) padding-box, linear-gradient(135deg, #1e293b, #64748b, #f1f5f9, #64748b, #1e293b) border-box`,
    border: '1px solid transparent',
  },
  gold: {
    background: `linear-gradient(rgba(202,138,4,0.07), rgba(202,138,4,0.07)) padding-box, linear-gradient(${BG}, ${BG}) padding-box, linear-gradient(135deg, #713f12, #ca8a04, #fef08a, #ca8a04, #713f12) border-box`,
    border: '1px solid transparent',
  },
};

function getProximaMissao(nivelId: number, missaoIdx: number): string | null {
  const nivel = niveis.find(n => n.id === nivelId)!;
  if (missaoIdx < nivel.missoes.length) return `/missao/${nivelId}/${missaoIdx + 1}`;
  const proximoNivel = niveis.find(n => n.id === nivelId + 1);
  if (proximoNivel) return `/missao/${proximoNivel.id}/1`;
  return null;
}

const BauPage: React.FC = () => {
  const { isMissaoConcluida, getTier, getExtrasDone } = useProgress();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const missionsWithExtras = useMemo(() =>
    niveis.flatMap(nivel =>
      nivel.missoes
        .map((missao, idx) => ({ missao, nivel, missaoIdx: idx + 1 }))
        .filter(({ missao }) => !!missao.extra_exercises?.length)
    ), []);

  const selected = missionsWithExtras.find(m => m.missao.id === selectedId);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <PageWrapper className="flex-grow max-w-3xl pb-16">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-textPrimary mb-1">Baú de Conchas</h1>
            <p className="text-textSecondary text-sm">Ganhe mais conchas e evolua suas conquistas</p>
          </div>

          <div className="space-y-10">
            {niveis.map(nivel => {
              const nivelMissions = missionsWithExtras.filter(m => m.nivel.id === nivel.id);
              if (!nivelMissions.length) return null;
              return (
                <section key={nivel.id}>
                  <h2 className="text-base font-semibold text-textSecondary uppercase tracking-widest mb-3">
                    {nivel.title}
                  </h2>
                  <div className="space-y-2">
                    {nivelMissions.map(({ missao }) => {
                      const done = isMissaoConcluida(missao.id);
                      const tierVal = getTier(missao.id);
                      const tierCount = { none: 0, bronze: 1, silver: 2, gold: 3 }[tierVal];
                      const extrasDone = getExtrasDone(missao.id).length;
                      const extrasTotal = missao.extra_exercises!.length;
                      const hasTierStyle = done && tierVal !== 'none';

                      return (
                        <button
                          key={missao.id}
                          onClick={() => done && setSelectedId(missao.id)}
                          disabled={!done}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                            !done
                              ? 'border border-borderDark bg-bgSecondary opacity-40 cursor-not-allowed'
                              : tierVal === 'none'
                              ? 'border border-borderDark bg-bgSecondary cursor-pointer hover:border-accent/50'
                              : 'cursor-pointer hover:brightness-110'
                          }`}
                          style={hasTierStyle ? TIER_CARD_STYLE[tierVal] : undefined}
                        >
                          <MissionIcon iconName={missao.icon} completed={done} className="w-8 h-8 shrink-0" />

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-textPrimary leading-snug truncate">
                              {missao.title}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3].map(n =>
                                tierCount >= n
                                  ? <StarSolid key={n} className="w-3.5 h-3.5 text-yellow-400" />
                                  : <StarOutline key={n} className="w-3.5 h-3.5 text-borderDark" />
                              )}
                            </div>
                            <span className="text-xs text-textSecondary tabular-nums w-8 text-right">
                              {extrasDone}/{extrasTotal}
                            </span>
                            {!done && <LockClosedIcon className="w-3.5 h-3.5 text-textSecondary/50" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

        </PageWrapper>
        <Footer />
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 bg-bgPrimary/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="bg-bgPrimary border border-borderDark rounded-2xl w-full max-w-xl shadow-2xl animate-pop-in max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-borderDark/30 shrink-0">
              <div>
                <p className="text-[10px] text-textSecondary uppercase tracking-widest mb-0.5">
                  {selected.nivel.title}
                </p>
                <h2 className="text-lg font-bold text-textPrimary">{selected.missao.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to="/conquistas"
                  onClick={() => setSelectedId(null)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-textSecondary hover:text-textPrimary hover:bg-bgSecondary transition-colors"
                  title="Ver conquistas"
                >
                  <TrophyIcon className="w-3.5 h-3.5" />
                  Conquistas
                </Link>
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-textSecondary hover:text-textPrimary transition-colors"
                  aria-label="Fechar"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto px-6 py-5">
              <BauDeConchas
                key={selected.missao.id}
                missaoId={selected.missao.id}
                extras={selected.missao.extra_exercises!}
                proximaMissao={getProximaMissao(selected.nivel.id, selected.missaoIdx)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BauPage;
