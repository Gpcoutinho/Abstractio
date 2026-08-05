import { useContext } from 'react';
import { ProgressContext, calcTier } from '../contexts/ProgressContext';
import type { TierLevel } from '../contexts/ProgressContext';
import { niveis } from '../data/curriculum';

const totalMissoes = niveis.reduce(
  (acc, nivel) => acc + nivel.missoes.length,
  0,
);

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress deve ser usado dentro de ProgressProvider');

  const { completed, niveis_concluidos, conchas, conchas_por_missao, exercicios_concluidos, erros_por_missao, completarMissao, desmarcarMissao, registrarErroMissao, completarExercicio } = ctx;

  const isMissaoConcluida = (missaoId: string) => completed.includes(missaoId);
  const getConchasValor = (missaoId: string): number => {
    const erros = erros_por_missao[missaoId] ?? 0;
    return erros >= 2 ? 4 : erros === 1 ? 8 : 12;
  };
  const isNivelConcluido = (nivelId: number) => niveis_concluidos.includes(nivelId);
  const jaGanhouConchas = (missaoId: string) => conchas_por_missao[missaoId] !== undefined;
  const getExerciciosDone = (missaoId: string): string[] => exercicios_concluidos[missaoId] ?? [];
  const getTier = (missaoId: string): TierLevel => calcTier(getExerciciosDone(missaoId).length);

  const progressoGeral = totalMissoes > 0
    ? Math.round((completed.length / totalMissoes) * 100)
    : 0;

  return {
    completed,
    niveis_concluidos,
    conchas,
    conchas_por_missao,
    exercicios_concluidos,
    completarMissao,
    desmarcarMissao,
    registrarErroMissao,
    completarExercicio,
    isMissaoConcluida,
    isNivelConcluido,
    jaGanhouConchas,
    getConchasValor,
    getExerciciosDone,
    getTier,
    progressoGeral,
  };
}

export type { TierLevel };
