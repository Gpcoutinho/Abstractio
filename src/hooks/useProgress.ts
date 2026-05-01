import { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';
import curriculum from '../data/curriculum.json';
import type { Nivel } from '../data/curriculum';

const NIVEL_NOMES = ['Polvinho', 'Explorador', 'Mestre dos Mares', 'Kraken'];

const totalMissoes = (curriculum as Nivel[]).reduce(
  (acc, nivel) => acc + nivel.missoes.length,
  0,
);

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress deve ser usado dentro de ProgressProvider');

  const { completed, niveis_concluidos, pontuacao, completarMissao } = ctx;

  const isMissaoConcluida = (missaoId: string) => completed.includes(missaoId);
  const isNivelConcluido = (nivelId: number) => niveis_concluidos.includes(nivelId);

  const nivelNomeIdx = Math.min(niveis_concluidos.length, NIVEL_NOMES.length - 1);
  const nivelNome = NIVEL_NOMES[nivelNomeIdx];
  const nivelDisplay = `Nível ${nivelNomeIdx + 1} — ${nivelNome}`;

  const progressoGeral = totalMissoes > 0
    ? Math.round((completed.length / totalMissoes) * 100)
    : 0;

  return {
    completed,
    niveis_concluidos,
    pontuacao,
    completarMissao,
    isMissaoConcluida,
    isNivelConcluido,
    nivelNome,
    nivelDisplay,
    progressoGeral,
  };
}
