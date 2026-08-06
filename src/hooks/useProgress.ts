import { useContext } from 'react';
import { ProgressContext, calcTier } from '../contexts/ProgressContext';
import type { TierLevel } from '../contexts/ProgressContext';

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress deve ser usado dentro de ProgressProvider');

  const {
    completed,
    niveis_concluidos,
    progressoGeral,
    totalMissoes,
    conchas_por_missao,
    exercicios_concluidos,
    extras_done_count,
    extras_total,
    main_attempts,
    loading,
    error,
    refetch,
    completarMissao,
    desmarcarMissao,
    aplicarSubmissao,
    hydrateMissionProgress,
  } = ctx;

  const isMissaoConcluida = (missaoId: string) => completed.includes(missaoId);
  const isNivelConcluido = (nivelId: number) => niveis_concluidos.includes(nivelId);
  const jaGanhouConchas = (missaoId: string) => conchas_por_missao[missaoId] !== undefined && conchas_por_missao[missaoId] > 0;

  // Preview da recompensa da pergunta principal (+12/+8/+4), derivado das tentativas
  // já feitas — o valor final que conta é sempre o que a submissão devolve. Fora da
  // missão (main_attempts ainda não hidratado) mostramos o valor máximo.
  const getConchasValor = (missaoId: string): number => {
    const tentativas = main_attempts[missaoId] ?? 0;
    return tentativas >= 2 ? 4 : tentativas === 1 ? 8 : 12;
  };

  // Slugs reais dos extras já acertados — só populado depois que a missão foi
  // visitada (hydrateMissionProgress). Usar dentro da missão, não em listagens.
  const getExerciciosDone = (missaoId: string): string[] => exercicios_concluidos[missaoId] ?? [];

  // Contagem de extras concluídos, disponível para as 29 missões desde o boot
  // (vem do trail progress); prefere a lista exata quando a missão já foi hidratada.
  const getExtrasDoneCount = (missaoId: string): number =>
    exercicios_concluidos[missaoId]?.length ?? extras_done_count[missaoId] ?? 0;

  const getExtrasTotal = (missaoId: string): number => extras_total[missaoId] ?? 0;

  const getTier = (missaoId: string): TierLevel => calcTier(getExtrasDoneCount(missaoId));

  return {
    completed,
    niveis_concluidos,
    conchas_por_missao,
    exercicios_concluidos,
    loading,
    error,
    refetch,
    completarMissao,
    desmarcarMissao,
    aplicarSubmissao,
    hydrateMissionProgress,
    isMissaoConcluida,
    isNivelConcluido,
    jaGanhouConchas,
    getConchasValor,
    getExerciciosDone,
    getExtrasDoneCount,
    getExtrasTotal,
    getTier,
    progressoGeral,
    totalMissoes,
  };
}

export type { TierLevel };
