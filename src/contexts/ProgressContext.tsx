import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { TrilhaContext } from './TrilhaContext';
import { SessionContext } from './SessionContext';
import { ApiError, completeMission, deleteMissionCompletion, getTrailProgress } from '../lib/api';
import type { MissionProgress, QuestionKind, SubmissionResult, TrailProgress } from '../lib/api.types';

export type TierLevel = 'none' | 'bronze' | 'silver' | 'gold';

export function calcTier(extrasDone: number): TierLevel {
  if (extrasDone >= 6) return 'gold';
  if (extrasDone >= 4) return 'silver';
  if (extrasDone >= 2) return 'bronze';
  return 'none';
}

interface ProgressState {
  completed: string[]; // slugs
  niveis_concluidos: number[]; // levelIds 100% completos
  progressoGeral: number; // percent, direto da API
  totalMissoes: number;
  conchas_por_missao: Record<string, number>; // slug -> shellsEarned
  exercicios_concluidos: Record<string, string[]>; // slug -> questionSlugs de extras acertados (só populado após visitar a missão)
  extras_done_count: Record<string, number>; // slug -> extrasCompleted (disponível pras 29 missões via trail progress)
  extras_total: Record<string, number>; // slug -> totalExtras
  main_attempts: Record<string, number>; // slug -> tentativas na principal (só populado após visitar a missão)
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  niveis_concluidos: [],
  progressoGeral: 0,
  totalMissoes: 0,
  conchas_por_missao: {},
  exercicios_concluidos: {},
  extras_done_count: {},
  extras_total: {},
  main_attempts: {},
};

function stateFromTrailProgress(progress: TrailProgress): ProgressState {
  const completed: string[] = [];
  const niveis_concluidos: number[] = [];
  const conchas_por_missao: Record<string, number> = {};
  const extras_done_count: Record<string, number> = {};
  const extras_total: Record<string, number> = {};

  for (const level of progress.levels) {
    if (level.totalMissions > 0 && level.missionsCompleted === level.totalMissions) {
      niveis_concluidos.push(level.levelId);
    }
    for (const mission of level.missions) {
      if (mission.completed) completed.push(mission.missionSlug);
      conchas_por_missao[mission.missionSlug] = mission.shellsEarned;
      extras_done_count[mission.missionSlug] = mission.extrasCompleted;
      extras_total[mission.missionSlug] = mission.totalExtras;
    }
  }

  return {
    completed,
    niveis_concluidos,
    progressoGeral: progress.percent,
    totalMissoes: progress.totalMissions,
    conchas_por_missao,
    exercicios_concluidos: {},
    extras_done_count,
    extras_total,
    main_attempts: {},
  };
}

export interface ProgressContextValue extends ProgressState {
  loading: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
  completarMissao: (missaoId: string) => Promise<void>;
  desmarcarMissao: (missaoId: string) => Promise<void>;
  aplicarSubmissao: (missaoId: string, questionSlug: string, kind: QuestionKind, result: SubmissionResult) => void;
  hydrateMissionProgress: (missaoId: string, progress: MissionProgress) => void;
}

export const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trilhaCtx = useContext(TrilhaContext);
  const sessionCtx = useContext(SessionContext);
  if (!trilhaCtx) throw new Error('ProgressProvider deve ser usado dentro de TrilhaProvider');

  const { trail } = trilhaCtx;
  const [state, setState] = useState<ProgressState>(DEFAULT_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchProgress = useCallback(async () => {
    if (!trail) return;
    setLoading(true);
    setError(null);
    try {
      const progress = await getTrailProgress(trail.id);
      setState(stateFromTrailProgress(progress));
    } catch (err) {
      setError(err instanceof ApiError ? err : new ApiError(0, 'internal_error', 'Falha de rede ao carregar o progresso.'));
    } finally {
      setLoading(false);
    }
  }, [trail]);

  useEffect(() => {
    if (trail) {
      fetchProgress();
    } else {
      setState(DEFAULT_STATE);
      setError(null);
    }
  }, [trail, fetchProgress]);

  const completarMissao = useCallback(async (missaoId: string) => {
    await completeMission(missaoId);
    setState(prev =>
      prev.completed.includes(missaoId)
        ? prev
        : { ...prev, completed: [...prev.completed, missaoId] },
    );
  }, []);

  const desmarcarMissao = useCallback(async (missaoId: string) => {
    await deleteMissionCompletion(missaoId);
    // Conchas e conchas_por_missao são preservados — o backend não estorna.
    setState(prev => ({ ...prev, completed: prev.completed.filter(id => id !== missaoId) }));
  }, []);

  const aplicarSubmissao = useCallback(
    (missaoId: string, questionSlug: string, kind: QuestionKind, result: SubmissionResult) => {
      setState(prev => {
        const next: ProgressState = { ...prev };

        if (kind === 'main') {
          next.main_attempts = { ...prev.main_attempts, [missaoId]: result.attemptNumber };
        } else if (result.isCorrect) {
          const jaFeitos = prev.exercicios_concluidos[missaoId] ?? [];
          if (!jaFeitos.includes(questionSlug)) {
            next.exercicios_concluidos = {
              ...prev.exercicios_concluidos,
              [missaoId]: [...jaFeitos, questionSlug],
            };
            next.extras_done_count = {
              ...prev.extras_done_count,
              [missaoId]: (prev.extras_done_count[missaoId] ?? jaFeitos.length) + 1,
            };
          }
        }

        if (result.isCorrect) {
          next.conchas_por_missao = {
            ...prev.conchas_por_missao,
            [missaoId]: (prev.conchas_por_missao[missaoId] ?? 0) + result.earnedShells,
          };
        }

        return next;
      });

      if (sessionCtx) sessionCtx.applyBalance(result.shellBalance);
    },
    [sessionCtx],
  );

  const hydrateMissionProgress = useCallback((missaoId: string, progress: MissionProgress) => {
    const mainQuestion = progress.questions.find(q => q.kind === 'main');
    const extrasDone = progress.questions.filter(q => q.kind === 'extra' && q.answeredCorrectly).map(q => q.questionSlug);

    setState(prev => ({
      ...prev,
      conchas_por_missao: { ...prev.conchas_por_missao, [missaoId]: progress.shellsEarned },
      exercicios_concluidos: { ...prev.exercicios_concluidos, [missaoId]: extrasDone },
      extras_done_count: { ...prev.extras_done_count, [missaoId]: extrasDone.length },
      main_attempts: mainQuestion
        ? { ...prev.main_attempts, [missaoId]: mainQuestion.attemptCount }
        : prev.main_attempts,
    }));
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        ...state,
        loading,
        error,
        refetch: fetchProgress,
        completarMissao,
        desmarcarMissao,
        aplicarSubmissao,
        hydrateMissionProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
