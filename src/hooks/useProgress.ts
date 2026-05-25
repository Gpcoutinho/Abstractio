import { useContext } from 'react';
import { ProgressContext, calcTier } from '../contexts/ProgressContext';
import type { TierLevel } from '../contexts/ProgressContext';
import { niveis } from '../data/curriculum';

const NIVEL_NOMES = ['Polvinho', 'Explorador', 'Mestre dos Mares', 'Kraken'];

const totalMissoes = niveis.reduce(
  (acc, nivel) => acc + nivel.missoes.length,
  0,
);

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress deve ser usado dentro de ProgressProvider');

  const { completed, niveis_concluidos, conchas, conchas_por_missao, extras_concluidos, erros_por_missao, nome, genero, avatarIdx, moldurasDesbloqueadas, molduraAtiva, acessoriosDesbloqueados, acessorioAtivo, completarMissao, desmarcarMissao, registrarErroMissao, completarExtraExercise, penalizarExtraErro, setNome, setGenero, setAvatarIdx, comprarMoldura, setMolduraAtiva, comprarAcessorio, setAcessorioAtivo } = ctx;

  const isMissaoConcluida = (missaoId: string) => completed.includes(missaoId);
  const getConchasValor = (missaoId: string): number => {
    const erros = erros_por_missao[missaoId] ?? 0;
    return erros >= 2 ? 4 : erros === 1 ? 8 : 12;
  };
  const isNivelConcluido = (nivelId: number) => niveis_concluidos.includes(nivelId);
  const jaGanhouConchas = (missaoId: string) => conchas_por_missao[missaoId] !== undefined;
  const getExtrasDone = (missaoId: string): string[] => extras_concluidos[missaoId] ?? [];
  const getTier = (missaoId: string): TierLevel => calcTier(getExtrasDone(missaoId).length);

  const nivelNomeIdx = Math.min(niveis_concluidos.length, NIVEL_NOMES.length - 1);
  const nivelNome = NIVEL_NOMES[nivelNomeIdx];
  const nivelDisplay = `Nível ${nivelNomeIdx + 1} — ${nivelNome}`;

  const progressoGeral = totalMissoes > 0
    ? Math.round((completed.length / totalMissoes) * 100)
    : 0;

  const nomeDisplay = nome.trim() || 'Otto';

  return {
    completed,
    niveis_concluidos,
    conchas,
    conchas_por_missao,
    extras_concluidos,
    nome,
    nomeDisplay,
    genero,
    avatarIdx,
    moldurasDesbloqueadas,
    molduraAtiva,
    acessoriosDesbloqueados,
    acessorioAtivo,
    completarMissao,
    desmarcarMissao,
    registrarErroMissao,
    completarExtraExercise,
    penalizarExtraErro,
    setNome,
    setGenero,
    setAvatarIdx,
    comprarMoldura,
    setMolduraAtiva,
    comprarAcessorio,
    setAcessorioAtivo,
    isMissaoConcluida,
    isNivelConcluido,
    jaGanhouConchas,
    getConchasValor,
    getExtrasDone,
    getTier,
    nivelNome,
    nivelDisplay,
    progressoGeral,
  };
}

export type { TierLevel };
