import React, { createContext, useCallback, useEffect, useState } from 'react';
import { niveis } from '../data/curriculum';
import { MOLDURAS } from '../data/molduras';
import { ACESSORIOS } from '../data/acessorios';

const STORAGE_KEY = 'abstractio:progress';

export type Genero = 'masculino' | 'feminino' | 'outro' | '';

interface ProgressState {
  completed: string[];
  niveis_concluidos: number[];
  conchas: number;
  conchas_por_missao: Record<string, number>;
  exercicios_concluidos: Record<string, string[]>;
  erros_por_missao: Record<string, number>;
  nome: string;
  genero: Genero;
  avatarIdx: number;
  moldurasDesbloqueadas: string[];
  molduraAtiva: string;
  acessoriosDesbloqueados: string[];
  acessorioAtivo: string;
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  niveis_concluidos: [],
  conchas: 0,
  conchas_por_missao: {},
  exercicios_concluidos: {},
  erros_por_missao: {},
  nome: '',
  genero: '',
  avatarIdx: 0,
  moldurasDesbloqueadas: ['none'],
  molduraAtiva: 'none',
  acessoriosDesbloqueados: ['none'],
  acessorioAtivo: 'none',
};

function loadFromStorage(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.extras_concluidos && !parsed.exercicios_concluidos) {
        parsed.exercicios_concluidos = parsed.extras_concluidos;
        delete parsed.extras_concluidos;
      }
      return { ...DEFAULT_STATE, ...parsed };
    }
  } catch {
    // ignore parse errors
  }
  return DEFAULT_STATE;
}

function calcNiveisConcluidos(completed: string[]): number[] {
  return niveis
    .filter(nivel => nivel.missoes.every(m => completed.includes(m.id)))
    .map(nivel => nivel.id);
}

export type TierLevel = 'none' | 'bronze' | 'silver' | 'gold';

export function calcTier(extrasDone: number): TierLevel {
  if (extrasDone >= 6) return 'gold';
  if (extrasDone >= 4) return 'silver';
  if (extrasDone >= 2) return 'bronze';
  return 'none';
}

export interface ProgressContextValue {
  completed: string[];
  niveis_concluidos: number[];
  conchas: number;
  conchas_por_missao: Record<string, number>;
  exercicios_concluidos: Record<string, string[]>;
  erros_por_missao: Record<string, number>;
  nome: string;
  genero: Genero;
  avatarIdx: number;
  moldurasDesbloqueadas: string[];
  molduraAtiva: string;
  acessoriosDesbloqueados: string[];
  acessorioAtivo: string;
  completarMissao: (missaoId: string, tentativas?: number) => void;
  desmarcarMissao: (missaoId: string) => void;
  registrarErroMissao: (missaoId: string) => void;
  completarExercicio: (missaoId: string, exercicioId: string, reward: number) => void;
  setNome: (nome: string) => void;
  setGenero: (genero: Genero) => void;
  setAvatarIdx: (idx: number) => void;
  comprarMoldura: (molduraId: string) => void;
  setMolduraAtiva: (molduraId: string) => void;
  comprarAcessorio: (acessorioId: string) => void;
  setAcessorioAtivo: (acessorioId: string) => void;
}

export const ProgressContext = createContext<ProgressContextValue | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProgressState>(loadFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }, [state]);

  const completarMissao = useCallback((missaoId: string, tentativas: number = 1) => {
    setState(prev => {
      if (prev.completed.includes(missaoId)) return prev;
      const completed = [...prev.completed, missaoId];
      const niveis_concluidos = calcNiveisConcluidos(completed);

      // Já ganhou conchas nessa missão antes (desmarcou e refez) — não ganha de novo
      if (prev.conchas_por_missao[missaoId] !== undefined) {
        return { ...prev, completed, niveis_concluidos };
      }

      const ganhas = tentativas <= 1 ? 12 : tentativas === 2 ? 8 : 4;
      return {
        ...prev,
        completed,
        niveis_concluidos,
        conchas: prev.conchas + ganhas,
        conchas_por_missao: { ...prev.conchas_por_missao, [missaoId]: ganhas },
      };
    });
  }, []);

  const registrarErroMissao = useCallback((missaoId: string) => {
    setState(prev => ({
      ...prev,
      erros_por_missao: {
        ...prev.erros_por_missao,
        [missaoId]: (prev.erros_por_missao[missaoId] ?? 0) + 1,
      },
    }));
  }, []);

  const desmarcarMissao = useCallback((missaoId: string) => {
    setState(prev => {
      if (!prev.completed.includes(missaoId)) return prev;
      const completed = prev.completed.filter(id => id !== missaoId);
      return {
        ...prev,
        completed,
        niveis_concluidos: calcNiveisConcluidos(completed),
        // conchas e conchas_por_missao são preservados
      };
    });
  }, []);

  const completarExercicio = useCallback((missaoId: string, exercicioId: string, reward: number) => {
    setState(prev => {
      const jaFeitos = prev.exercicios_concluidos[missaoId] ?? [];
      if (jaFeitos.includes(exercicioId)) return prev;
      const novos = [...jaFeitos, exercicioId];
      return {
        ...prev,
        conchas: prev.conchas + reward,
        exercicios_concluidos: { ...prev.exercicios_concluidos, [missaoId]: novos },
      };
    });
  }, []);

  const setNome = useCallback((nome: string) => {
    setState(prev => ({ ...prev, nome }));
  }, []);

  const setGenero = useCallback((genero: Genero) => {
    setState(prev => ({ ...prev, genero }));
  }, []);

  const setAvatarIdx = useCallback((avatarIdx: number) => {
    setState(prev => ({ ...prev, avatarIdx }));
  }, []);

  const comprarMoldura = useCallback((molduraId: string) => {
    setState(prev => {
      if (prev.moldurasDesbloqueadas.includes(molduraId)) return prev;
      const moldura = MOLDURAS.find(m => m.id === molduraId);
      if (!moldura || prev.conchas < moldura.custo) return prev;
      return {
        ...prev,
        conchas: prev.conchas - moldura.custo,
        moldurasDesbloqueadas: [...prev.moldurasDesbloqueadas, molduraId],
      };
    });
  }, []);

  const setMolduraAtiva = useCallback((molduraId: string) => {
    setState(prev => ({ ...prev, molduraAtiva: molduraId }));
  }, []);

  const comprarAcessorio = useCallback((acessorioId: string) => {
    setState(prev => {
      if (prev.acessoriosDesbloqueados.includes(acessorioId)) return prev;
      const acessorio = ACESSORIOS.find(a => a.id === acessorioId);
      if (!acessorio || prev.conchas < acessorio.custo) return prev;
      return {
        ...prev,
        conchas: prev.conchas - acessorio.custo,
        acessoriosDesbloqueados: [...prev.acessoriosDesbloqueados, acessorioId],
      };
    });
  }, []);

  const setAcessorioAtivo = useCallback((acessorioId: string) => {
    setState(prev => ({ ...prev, acessorioAtivo: acessorioId }));
  }, []);

  return (
    <ProgressContext.Provider value={{ ...state, completarMissao, desmarcarMissao, registrarErroMissao, completarExercicio, setNome, setGenero, setAvatarIdx, comprarMoldura, setMolduraAtiva, comprarAcessorio, setAcessorioAtivo }}>
      {children}
    </ProgressContext.Provider>
  );
};
