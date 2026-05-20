import { useContext } from 'react';
import { ProgressContext } from '../contexts/ProgressContext';
import { niveis } from '../data/curriculum';

const NIVEL_NOMES = ['Polvinho', 'Explorador', 'Mestre dos Mares', 'Kraken'];

const totalMissoes = niveis.reduce(
  (acc, nivel) => acc + nivel.missoes.length,
  0,
);

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress deve ser usado dentro de ProgressProvider');

  const { completed, niveis_concluidos, conchas, conchas_por_missao, nome, genero, avatarIdx, moldurasDesbloqueadas, molduraAtiva, acessoriosDesbloqueados, acessorioAtivo, completarMissao, desmarcarMissao, setNome, setGenero, setAvatarIdx, comprarMoldura, setMolduraAtiva, comprarAcessorio, setAcessorioAtivo } = ctx;

  const isMissaoConcluida = (missaoId: string) => completed.includes(missaoId);
  const isNivelConcluido = (nivelId: number) => niveis_concluidos.includes(nivelId);
  const jaGanhouConchas = (missaoId: string) => conchas_por_missao[missaoId] !== undefined;

  const nivelNomeIdx = Math.min(niveis_concluidos.length, NIVEL_NOMES.length - 1);
  const nivelNome = NIVEL_NOMES[nivelNomeIdx];
  const nivelDisplay = `Nível ${nivelNomeIdx + 1} — ${nivelNome}`;

  const progressoGeral = totalMissoes > 0
    ? Math.round((completed.length / totalMissoes) * 100)
    : 0;

  const nomeDisplay = nome.trim() || 'Sr. Polvonilson';

  return {
    completed,
    niveis_concluidos,
    conchas,
    conchas_por_missao,
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
    nivelNome,
    nivelDisplay,
    progressoGeral,
  };
}
