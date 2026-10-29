import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { useProgress } from '../hooks/useProgress';
import type { TierLevel } from '../hooks/useProgress';
import { calcTier } from '../contexts/ProgressContext';
import ShellIcon from './ShellIcon';
import { ApiError, getApiErrorMessage, getMissionDetail, getMissionProgress, submitAnswer } from '../lib/api';
import type { MissionQuestion } from '../lib/api.types';

interface Props {
  missaoId: string;
  proximaMissao: string | null;
}

const TIER_META: { threshold: number; stars: number; label: string }[] = [
  { threshold: 2, stars: 1, label: 'Bronze' },
  { threshold: 4, stars: 2, label: 'Prata'  },
  { threshold: 6, stars: 3, label: 'Ouro'   },
];

const TIER_BADGE_STYLE: Record<string, React.CSSProperties> = {
  bronze: {
    background: 'linear-gradient(rgba(124,45,18,0.08), rgba(124,45,18,0.08)) padding-box, linear-gradient(135deg, #431407 0%, #7c2d12 30%, #b45309 48%, #b45309 52%, #9a3412 65%, #7c2d12 78%, #3d0a00 100%) border-box',
    border: '1px solid transparent',
  },
  silver: {
    background: 'linear-gradient(rgba(148,163,184,0.07), rgba(148,163,184,0.07)) padding-box, linear-gradient(135deg, #475569 0%, #94a3b8 30%, #f1f5f9 48%, #f1f5f9 52%, #e2e8f0 60%, #64748b 78%, #334155 100%) border-box',
    border: '1px solid transparent',
  },
  gold: {
    background: 'linear-gradient(rgba(202,138,4,0.08), rgba(202,138,4,0.08)) padding-box, linear-gradient(135deg, #713f12 0%, #ca8a04 30%, #fef08a 48%, #fef08a 52%, #facc15 60%, #a16207 78%, #713f12 100%) border-box',
    border: '1px solid transparent',
  },
};

const CUT_STYLE: React.CSSProperties = {
  color: '#0f172a',
  filter: 'drop-shadow(0 1px 0.5px rgba(255,255,255,0.28)) drop-shadow(0 -0.5px 0.5px rgba(0,0,0,0.4))',
};

function tierMeta(tier: Exclude<TierLevel, 'none'>) {
  return TIER_META.find(t => t.label === ({ bronze: 'Bronze', silver: 'Prata', gold: 'Ouro' }[tier]))!;
}

interface SubmitFeedback {
  isCorrect: boolean;
  explanation: string | null;
  earnedShells: number;
}

const Exercicios: React.FC<Props> = ({ missaoId, proximaMissao }) => {
  const { getExerciciosDone, aplicarSubmissao, hydrateMissionProgress } = useProgress();

  const [extraQuestions, setExtraQuestions] = useState<MissionQuestion[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<ApiError | null>(null);
  const [attemptsByQuestion, setAttemptsByQuestion] = useState<Record<string, number>>({});

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selecionadaMap, setSelecionadaMap] = useState<Record<string, number | null>>({});
  const [respondidaMap, setRespondidaMap] = useState<Record<string, boolean>>({});
  const [feedbackMap, setFeedbackMap] = useState<Record<string, SubmitFeedback>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [tierUnlocked, setTierUnlocked] = useState<Exclude<TierLevel, 'none'> | null>(null);

  const idempotencyKeysRef = useRef<Map<string, string>>(new Map());
  function getSubmissionKey(questionSlug: string): string {
    const existing = idempotencyKeysRef.current.get(questionSlug);
    if (existing) return existing;
    const key = crypto.randomUUID();
    idempotencyKeysRef.current.set(questionSlug, key);
    return key;
  }

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    (async () => {
      try {
        const [detail, progress] = await Promise.all([
          getMissionDetail(missaoId),
          getMissionProgress(missaoId),
        ]);
        if (cancelled) return;
        const extras = detail.questions.filter(q => q.kind === 'extra');
        setExtraQuestions(extras);
        hydrateMissionProgress(missaoId, progress);

        const attempts: Record<string, number> = {};
        for (const q of progress.questions) {
          if (q.kind === 'extra') attempts[q.questionSlug] = q.attemptCount;
        }
        setAttemptsByQuestion(attempts);

        const feitos = progress.questions.filter(q => q.kind === 'extra' && q.answeredCorrectly).map(q => q.questionSlug);
        const firstIncomplete = extras.findIndex(ex => !feitos.includes(ex.slug));
        setCurrentIdx(firstIncomplete === -1 ? extras.length : firstIncomplete);
      } catch (err) {
        if (!cancelled) setLoadError(err instanceof ApiError ? err : new ApiError(0, 'internal_error', 'Falha de rede ao carregar os exercícios.'));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [missaoId, hydrateMissionProgress]);

  const feitos = getExerciciosDone(missaoId);
  const doneCount = feitos.length;
  const exercicios = extraQuestions ?? [];

  const COMPLETION_IDX = exercicios.length;
  const allDone = exercicios.length > 0 && doneCount >= exercicios.length;

  const isCompletionPage = currentIdx === COMPLETION_IDX;
  const current = exercicios[currentIdx];

  const isCurrentDone = current ? feitos.includes(current.slug) : false;
  const selecionada = current ? (selecionadaMap[current.slug] ?? null) : null;
  const respondida = current ? (respondidaMap[current.slug] ?? false) : false;
  const feedback = current ? feedbackMap[current.slug] : undefined;
  const acertou = feedback?.isCorrect ?? false;
  const attemptCount = current ? (attemptsByQuestion[current.slug] ?? 0) : 0;
  const reward = current ? Math.max(0, current.maxRewardShells - attemptCount) : 0;

  const handleSelect = (optionId: number) => {
    if (!current || respondida || isCurrentDone) return;
    setSelecionadaMap(prev => ({ ...prev, [current.slug]: optionId }));
  };

  const handleSubmit = async () => {
    if (!current || selecionada === null || isCurrentDone || respondida || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const key = getSubmissionKey(current.slug);
      const result = await submitAnswer(missaoId, current.slug, selecionada, key);
      setRespondidaMap(prev => ({ ...prev, [current.slug]: true }));
      setFeedbackMap(prev => ({
        ...prev,
        [current.slug]: {
          isCorrect: result.isCorrect,
          explanation: result.isCorrect ? result.explanation : result.wrongExplanation,
          earnedShells: result.earnedShells,
        },
      }));
      setAttemptsByQuestion(prev => ({ ...prev, [current.slug]: result.attemptNumber }));
      aplicarSubmissao(missaoId, current.slug, 'extra', result);

      if (result.isCorrect) {
        const prevTier = calcTier(doneCount);
        const newTier = calcTier(doneCount + 1);
        if (newTier !== prevTier && newTier !== 'none') {
          setTierUnlocked(newTier as Exclude<TierLevel, 'none'>);
        }
        if (doneCount + 1 >= exercicios.length) {
          setCurrentIdx(COMPLETION_IDX);
        }
      }
    } catch (err) {
      setSubmitError(getApiErrorMessage(err, 'Exercicios.handleSubmit'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleRetry = () => {
    if (!current) return;
    setRespondidaMap(prev => ({ ...prev, [current.slug]: false }));
    setSelecionadaMap(prev => ({ ...prev, [current.slug]: null }));
    setSubmitError(null);
  };

  const goTo = (idx: number) => {
    if (idx < 0 || idx > COMPLETION_IDX) return;
    if (idx === COMPLETION_IDX && !allDone) return;
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
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: meta.stars }).map((_, i) => (
              <StarSolid key={i} className="w-9 h-9 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-textPrimary mb-1">Conquista evoluída!</h2>
          <p className="text-lg font-semibold text-textSecondary mb-5">{meta.label}</p>
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
        {currentMeta ? (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-semibold text-[11px]"
            style={TIER_BADGE_STYLE[currentTierKey]}
          >
            {Array.from({ length: currentMeta.stars }).map((_, i) => (
              <StarSolid key={i} className="w-3.5 h-3.5 text-yellow-400" style={{ filter: 'drop-shadow(0 0 0.5px rgba(0,0,0,0.9)) drop-shadow(0 0 0.5px rgba(0,0,0,0.9))' }} />
            ))}
            {Array.from({ length: 3 - currentMeta.stars }).map((_, i) => (
              <StarSolid key={i} className="w-3.5 h-3.5" style={CUT_STYLE} />
            ))}
            <span style={{ color: '#0f172a', textShadow: '0 1px 1px rgba(255,255,255,0.28)' }}>
              {currentMeta.label}
            </span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1">
            {[0, 1, 2].map(i => <StarOutline key={i} className="w-3.5 h-3.5 text-borderDark" />)}
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

  const renderNav = () => {
    const isLastExercise = currentIdx === exercicios.length - 1;
    const proximoDisabled = isCompletionPage || (isLastExercise && !allDone);

    return (
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
          {exercicios.map((ex, i) => {
            const isDone = feitos.includes(ex.slug);
            const isCurrent = i === currentIdx;
            return (
              <button
                key={ex.slug}
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
          disabled={proximoDisabled}
          className="text-sm text-accent hover:opacity-80 disabled:opacity-25 transition-colors"
          aria-label="Próximo exercício"
        >
          Próximo →
        </button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-3 animate-pulse" aria-hidden="true">
        <div className="h-4 w-24 rounded bg-bgPrimary" />
        <div className="h-4 w-full rounded bg-bgPrimary" />
        <div className="h-10 w-full rounded bg-bgPrimary" />
        <div className="h-10 w-full rounded bg-bgPrimary" />
      </div>
    );
  }

  if (loadError) {
    return (
      <p className="text-sm text-danger">
        Não foi possível carregar os exercícios. {getApiErrorMessage(loadError, 'Exercicios.load')}
      </p>
    );
  }

  if (!isCompletionPage && !current) return null;

  if (isCompletionPage) {
    return (
      <>
        <div>
          {renderTierBadge()}
          {renderNav()}
          <div className="text-center py-6">
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
        </div>
        {renderTierModal()}
      </>
    );
  }

  return (
    <>
      <section className="bg-bgSecondary border border-borderDark rounded-xl p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
            Exercício {currentIdx + 1} de {exercicios.length}
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

        <p className="text-textPrimary mb-5">{current!.prompt}</p>

        <fieldset className="space-y-3">
          <legend className="sr-only">Opções de resposta</legend>
          {current!.options.map((opcao) => {
            let estilo = 'border-borderDark';
            if (isCurrentDone) {
              estilo = 'border-success bg-success/10 opacity-50';
            } else if (respondida) {
              if (opcao.id === selecionada) {
                estilo = acertou ? 'border-success bg-success/10' : 'border-danger bg-danger/10';
              }
            } else if (opcao.id === selecionada) {
              estilo = 'border-accent bg-accent/10';
            }
            const disabled = respondida || isCurrentDone || submitting;
            return (
              <label
                key={opcao.id}
                className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${estilo} ${disabled ? 'cursor-default' : 'cursor-pointer hover:border-accent/50'}`}
              >
                <input
                  type="radio"
                  name={`extra-${current!.slug}`}
                  value={opcao.id}
                  checked={selecionada === opcao.id}
                  disabled={disabled}
                  onChange={() => handleSelect(opcao.id)}
                  className="mt-0.5 accent-accent"
                />
                <span className="text-textPrimary text-sm">{opcao.label}</span>
              </label>
            );
          })}
        </fieldset>

        {submitError && (
          <p className="mt-4 text-sm text-danger">{submitError} — tente responder de novo.</p>
        )}

        {isCurrentDone && (
          <div className="mt-5 p-4 rounded-lg border bg-success/10 border-success">
            <p className="font-semibold text-success mb-1">✓ Concluído</p>
          </div>
        )}

        {!isCurrentDone && respondida && feedback && (
          <div className={`mt-5 p-4 rounded-lg border ${acertou ? 'bg-success/10 border-success' : 'bg-danger/10 border-danger'}`}>
            <p className={`font-semibold mb-1 ${acertou ? 'text-success' : 'text-danger'}`}>
              {acertou ? '✓ Correto!' : '✗ Não foi dessa vez.'}
            </p>
            {feedback.explanation && (
              <p className="text-textSecondary text-sm">{feedback.explanation}</p>
            )}
            {acertou ? (
              <p className="text-success text-xs font-medium mt-2 flex items-center gap-1">
                <ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} />
                +{feedback.earnedShells} concha{feedback.earnedShells !== 1 ? 's' : ''}!
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
                disabled={selecionada === null || submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? 'Enviando...' : 'Responder'}
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
      {renderTierModal()}
    </>
  );
};

export default Exercicios;
