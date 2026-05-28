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

const ExerciciosExtras: React.FC<Props> = ({ missaoId, extras, proximaMissao }) => {
  const { getExtrasDone, completarExtraExercise } = useProgress();
  const extrasDone = getExtrasDone(missaoId);
  const doneCount = extrasDone.length;

  const firstIncomplete = extras.findIndex(ex => !extrasDone.includes(ex.id));
  const [currentIdx, setCurrentIdx] = useState(firstIncomplete === -1 ? extras.length - 1 : firstIncomplete);
  const [errorsMap, setErrorsMap] = useState<Record<string, number>>({});
  const [selecionadaMap, setSelecionadaMap] = useState<Record<string, number | null>>({});
  const [respondidaMap, setRespondidaMap] = useState<Record<string, boolean>>({});
  const [tierUnlocked, setTierUnlocked] = useState<Exclude<TierLevel, 'none'> | null>(null);

  // "Tudo concluído" só aparece quando todas as extras estão feitas E o usuário
  // respondeu algo nesta montagem (respondidaMap tem pelo menos uma entrada).
  // Assim, reabrir o modal mostra os exercícios — respondidaMap sempre começa vazio.
  const answeredInSession = Object.keys(respondidaMap).length > 0;
  const showCompletado = doneCount >= extras.length && answeredInSession;

  const current = extras[currentIdx];
  if (!current) return null;

  const isCurrentDone = extrasDone.includes(current.id);
  const selecionada = selecionadaMap[current.id] ?? null;
  const respondida = respondidaMap[current.id] ?? false;
  const errorCount = errorsMap[current.id] ?? 0;
  const reward = Math.max(0, 3 - errorCount);
  const acertou = selecionada === current.correct;

  const handleSelect = (i: number) => {
    if (respondida || isCurrentDone) return;
    setSelecionadaMap(prev => ({ ...prev, [current.id]: i }));
  };

  const handleSubmit = () => {
    if (selecionada === null || isCurrentDone || respondida) return;
    setRespondidaMap(prev => ({ ...prev, [current.id]: true }));
    if (selecionada === current.correct) {
      const prevTier = calcTier(doneCount);
      const newTier = calcTier(doneCount + 1);
      completarExtraExercise(missaoId, current.id, reward);
      if (newTier !== prevTier && newTier !== 'none') {
        setTierUnlocked(newTier as Exclude<TierLevel, 'none'>);
      }
    } else {
      setErrorsMap(prev => ({ ...prev, [current.id]: (prev[current.id] ?? 0) + 1 }));
    }
  };

  const handleRetry = () => {
    setRespondidaMap(prev => ({ ...prev, [current.id]: false }));
    setSelecionadaMap(prev => ({ ...prev, [current.id]: null }));
  };

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= extras.length) return;
    setCurrentIdx(idx);
  };


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

  const renderTierBadge = () => {
    const currentTierKey = calcTier(doneCount);
    const nextMeta = TIER_META.find(t => t.threshold > doneCount);
    const remaining = nextMeta ? nextMeta.threshold - doneCount : 0;
    const currentMeta = currentTierKey !== 'none'
      ? tierMeta(currentTierKey as Exclude<TierLevel, 'none'>)
      : null;

    return (
      <div className="flex items-center gap-2 mb-4 text-xs">
        {currentMeta && (
          <span className={`font-semibold ${currentMeta.color}`}>
            {'★'.repeat(currentMeta.stars)} {currentMeta.label}
          </span>
        )}
        {nextMeta && (
          <>
            {currentMeta && <span className="text-borderDark">·</span>}
            <span className="text-textSecondary">+{remaining} para {nextMeta.label}</span>
          </>
        )}
      </div>
    );
  };

  const renderNav = () => (
    <div className="flex items-center justify-between mb-5">
      <button
        onClick={() => goTo(currentIdx - 1)}
        disabled={currentIdx === 0}
        className="text-sm text-textSecondary hover:text-textPrimary disabled:opacity-25 transition-colors"
        aria-label="Exercício anterior"
      >
        ← Anterior
      </button>

      <div className="flex items-center gap-1.5">
        {extras.map((ex, i) => {
          const isDone = extrasDone.includes(ex.id);
          const isCurrent = i === currentIdx;
          return (
            <button
              key={ex.id}
              onClick={() => goTo(i)}
              aria-label={`Exercício ${i + 1}`}
              className={`rounded-full transition-all duration-150 hover:scale-125 focus:outline-none ${
                isCurrent
                  ? 'w-3 h-3 bg-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-bgSecondary'
                  : isDone
                  ? 'w-2.5 h-2.5 bg-success'
                  : 'w-2.5 h-2.5 border-2 border-borderDark bg-transparent hover:border-accent/60'
              }`}
            />
          );
        })}
      </div>

      <button
        onClick={() => goTo(currentIdx + 1)}
        disabled={currentIdx === extras.length - 1}
        className="text-sm text-accent hover:opacity-80 disabled:opacity-25 transition-colors"
        aria-label="Próximo exercício"
      >
        Próximo →
      </button>
    </div>
  );

  return (
    <>
      {showCompletado ? (
        <div className="text-center py-10">
          <p className="text-5xl mb-3">🏆</p>
          <h3 className="text-xl font-bold text-textPrimary mb-2">Tudo concluído!</h3>
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
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
              Exercício {currentIdx + 1} de {extras.length}
            </h2>
            {!isCurrentDone && (
              <span className="text-xs text-textSecondary inline-flex items-center gap-1">
                <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
                +{reward} concha{reward !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          {renderTierBadge()}
          {renderNav()}

          <p className="text-textPrimary mb-5">{current.question}</p>

          <fieldset className="space-y-3">
            <legend className="sr-only">Opções de resposta</legend>
            {current.options.map((opcao, i) => {
              let estilo = 'border-borderDark';
              if (isCurrentDone) {
                estilo = i === current.correct ? 'border-success bg-success/10' : 'border-borderDark opacity-50';
              } else if (respondida) {
                if (i === selecionada) {
                  estilo = acertou ? 'border-success bg-success/10' : 'border-danger bg-danger/10';
                }
              } else if (i === selecionada) {
                estilo = 'border-accent bg-accent/10';
              }
              const disabled = respondida || isCurrentDone;
              return (
                <label
                  key={i}
                  className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${estilo} ${disabled ? 'cursor-default' : 'cursor-pointer hover:border-accent/50'}`}
                >
                  <input
                    type="radio"
                    name={`extra-${current.id}`}
                    value={i}
                    checked={selecionada === i}
                    disabled={disabled}
                    onChange={() => handleSelect(i)}
                    className="mt-0.5 accent-accent"
                  />
                  <span className="text-textPrimary text-sm">{opcao}</span>
                </label>
              );
            })}
          </fieldset>

          {isCurrentDone && (
            <div className="mt-5 p-4 rounded-lg border bg-success/10 border-success">
              <p className="font-semibold text-success mb-1">✓ Concluído</p>
              <p className="text-textSecondary text-sm">{current.explanation}</p>
            </div>
          )}

          {!isCurrentDone && respondida && (
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
                  +{reward} concha{reward !== 1 ? 's' : ''}!
                </p>
              ) : reward > 0 ? (
                <p className="text-textSecondary text-xs mt-2 flex items-center gap-1">
                  <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
                  Próxima tentativa: +{reward} concha{reward !== 1 ? 's' : ''}
                </p>
              ) : (
                <p className="text-textSecondary text-xs mt-2">
                  Recompensa esgotada — você ainda pode acertar!
                </p>
              )}
            </div>
          )}

          {!isCurrentDone && (
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
            </div>
          )}
        </section>
      )}

      {renderTierModal()}
    </>
  );
};

export default ExerciciosExtras;
