import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { ExtraExercise } from '../data/curriculum/types';
import { useProgress } from '../hooks/useProgress';
import type { TierLevel } from '../hooks/useProgress';
import { calcTier } from '../contexts/ProgressContext';
import ShellIcon from './ShellIcon';

interface Props {
  missaoId: string;
  extras: ExtraExercise[];
  proximaMissao: string | null;
}

const TIER_META: { threshold: number; stars: number; label: string; color: string }[] = [
  { threshold: 2, stars: 1, label: 'Bronze', color: 'text-amber-700' },
  { threshold: 4, stars: 2, label: 'Prata',  color: 'text-slate-400' },
  { threshold: 6, stars: 3, label: 'Ouro',   color: 'text-yellow-600' },
];

function tierMeta(tier: Exclude<TierLevel, 'none'>) {
  return TIER_META.find(t => t.label === ({ bronze: 'Bronze', silver: 'Prata', gold: 'Ouro' }[tier]))!;
}

const BauDeConchas: React.FC<Props> = ({ missaoId, extras, proximaMissao }) => {
  const { getExtrasDone, completarExtraExercise, penalizarExtraErro } = useProgress();
  const extrasDone = getExtrasDone(missaoId);
  const doneCount = extrasDone.length;
  const allDone = doneCount >= extras.length;

  const firstIncomplete = extras.findIndex(ex => !extrasDone.includes(ex.id));
  const [currentIdx, setCurrentIdx] = useState(firstIncomplete === -1 ? extras.length - 1 : firstIncomplete);
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  const [tierUnlocked, setTierUnlocked] = useState<Exclude<TierLevel, 'none'> | null>(null);

  const current = extras[currentIdx];
  if (!current) return null;

  const isCurrentDone = extrasDone.includes(current.id);
  const acertou = selecionada === current.correct;

  const handleSubmit = () => {
    if (selecionada === null || isCurrentDone) return;
    setRespondida(true);
    if (acertou) {
      const prevTier = calcTier(doneCount);
      const newTier = calcTier(doneCount + 1);
      completarExtraExercise(missaoId, current.id);
      if (newTier !== prevTier && newTier !== 'none') {
        setTierUnlocked(newTier as Exclude<TierLevel, 'none'>);
      }
    } else {
      penalizarExtraErro(missaoId);
    }
  };

  const handleNext = () => {
    const next = extras.findIndex((ex, i) => i > currentIdx && !extrasDone.includes(ex.id));
    const any = extras.findIndex(ex => !extrasDone.includes(ex.id));
    const go = next !== -1 ? next : any;
    if (go !== -1) {
      setCurrentIdx(go);
      setSelecionada(null);
      setRespondida(false);
    }
  };

  const handleRetry = () => {
    setSelecionada(null);
    setRespondida(false);
  };

  // --- Indicador de progresso ---
  const renderProgress = () => (
    <div className="bg-bgPrimary border border-borderDark rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-textSecondary font-medium uppercase tracking-widest">Progresso</span>
        <span className="text-sm font-semibold text-textPrimary tabular-nums">{doneCount}/{extras.length}</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        {TIER_META.map((tm, gi) => {
          const achieved = doneCount >= tm.threshold;
          const dot1done = doneCount > gi * 2;
          const dot2done = doneCount > gi * 2 + 1;
          return (
            <React.Fragment key={gi}>
              {gi > 0 && <div className="w-4 h-0.5 bg-borderDark flex-shrink-0" />}
              <div className="flex flex-col items-center gap-1.5">
                <span className={`text-sm font-bold leading-none transition-colors ${achieved ? tm.color : 'text-borderDark'}`}>
                  {'★'.repeat(tm.stars)}
                </span>
                <div className="flex items-center gap-1">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${dot1done ? 'bg-success border-success' : 'border-borderDark'}`} />
                  <div className={`w-2 h-0.5 transition-colors ${dot1done ? 'bg-success' : 'bg-borderDark'}`} />
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-colors ${dot2done ? 'bg-success border-success' : 'border-borderDark'}`} />
                </div>
                <span className={`text-[0.6rem] font-medium transition-colors ${achieved ? tm.color : 'text-textSecondary/40'}`}>
                  {tm.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  // --- Modal de tier desbloqueado ---
  const renderTierModal = () => {
    if (!tierUnlocked) return null;
    const meta = tierMeta(tierUnlocked);
    return (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-bgPrimary/75 backdrop-blur-sm animate-fade-in"
        onClick={() => setTierUnlocked(null)}
      >
        <div
          className="bg-bgSecondary border border-borderDark rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop-in"
          onClick={e => e.stopPropagation()}
        >
          <p className={`text-4xl mb-3 ${meta.color}`}>{'★'.repeat(meta.stars)}</p>
          <h2 className="text-2xl font-bold text-textPrimary mb-1">Conquista evoluída!</h2>
          <p className={`text-lg font-semibold mb-5 ${meta.color}`}>{meta.label}</p>
          <p className="text-textSecondary text-sm mb-6">
            Você completou {meta.threshold} exercícios extras desta missão.
          </p>
          <button
            onClick={() => setTierUnlocked(null)}
            className="w-full px-6 py-3 rounded-lg bg-accent text-bgPrimary font-bold hover:opacity-90 transition-opacity"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderProgress()}

      {allDone ? (
        <div className="text-center py-10">
          <p className="text-5xl mb-3">🏆</p>
          <h3 className="text-xl font-bold text-textPrimary mb-2">Baú esvaziado!</h3>
          <p className="text-textSecondary text-sm mb-8">
            Você completou todos os exercícios extras desta missão.
          </p>
          {proximaMissao && (
            <Link
              to={proximaMissao}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bgPrimary font-bold hover:opacity-90 transition-opacity"
            >
              Próxima missão
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      ) : (
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
              Extra {currentIdx + 1} de {extras.length}
            </h2>
            <span className="text-xs text-textSecondary inline-flex items-center gap-1">
              <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
              +3 conchas
            </span>
          </div>

          <p className="text-textPrimary mb-5">{current.question}</p>

          <fieldset className="space-y-3">
            <legend className="sr-only">Opções de resposta</legend>
            {current.options.map((opcao, i) => {
              let estilo = 'border-borderDark';
              if (respondida) {
                if (i === selecionada) {
                  estilo = acertou ? 'border-success bg-success/10' : 'border-danger bg-danger/10';
                }
              } else if (i === selecionada) {
                estilo = 'border-accent bg-accent/10';
              }
              return (
                <label
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${estilo} ${respondida ? 'cursor-default' : 'hover:border-accent/50'}`}
                >
                  <input
                    type="radio"
                    name={`extra-${currentIdx}`}
                    value={i}
                    checked={selecionada === i}
                    disabled={respondida}
                    onChange={() => setSelecionada(i)}
                    className="mt-0.5 accent-accent"
                  />
                  <span className="text-textPrimary text-sm">{opcao}</span>
                </label>
              );
            })}
          </fieldset>

          {respondida && (
            <div className={`mt-5 p-4 rounded-lg border ${acertou ? 'bg-success/10 border-success' : 'bg-danger/10 border-danger'}`}>
              <p className={`font-semibold mb-1 ${acertou ? 'text-success' : 'text-danger'}`}>
                {acertou ? '✓ Correto!' : '✗ Não foi dessa vez.'}
              </p>
              {acertou && (
                <p className="text-textSecondary text-sm">{current.explanation}</p>
              )}
              {acertou ? (
                <p className="text-success text-xs font-medium mt-2 flex items-center gap-1">
                  <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
                  +3 conchas!
                </p>
              ) : (
                <p className="text-danger/70 text-xs mt-2 flex items-center gap-1">
                  <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
                  −1 concha
                </p>
              )}
            </div>
          )}

          <div className="mt-5 flex items-center gap-3">
            {!respondida && (
              <button
                onClick={handleSubmit}
                disabled={selecionada === null}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Responder
              </button>
            )}
            {respondida && !acertou && (
              <button
                onClick={handleRetry}
                className="px-5 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent hover:text-textPrimary transition-colors text-sm"
              >
                Tentar novamente
              </button>
            )}
            {respondida && acertou && !allDone && (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bgPrimary font-bold hover:opacity-90 transition-opacity"
              >
                Próximo
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>
      )}

      {renderTierModal()}
    </>
  );
};

export default BauDeConchas;
