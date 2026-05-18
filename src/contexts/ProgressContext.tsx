import React, { createContext, useCallback, useEffect, useState } from 'react';
import { niveis } from '../data/curriculum';
import { MOLDURAS } from '../data/molduras';

const STORAGE_KEY = 'abstractio:progress';

export type Genero = 'masculino' | 'feminino' | 'outro' | '';

interface ProgressState {
  completed: string[];
  niveis_concluidos: number[];
  conchas: number;
  conchas_por_missao: Record<string, number>;
  nome: string;
  genero: Genero;
  avatarIdx: number;
  moldurasDesbloqueadas: string[];
  molduraAtiva: string;
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  niveis_concluidos: [],
  conchas: 0,
  conchas_por_missao: {},
  nome: '',
  genero: '',
  avatarIdx: 0,
  moldurasDesbloqueadas: ['none'],
  molduraAtiva: 'none',
};

function loadFromStorage(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) };
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

export interface ProgressContextValue {
  completed: string[];
  niveis_concluidos: number[];
  conchas: number;
  conchas_por_missao: Record<string, number>;
  nome: string;
  genero: Genero;
  avatarIdx: number;
  moldurasDesbloqueadas: string[];
  molduraAtiva: string;
  completarMissao: (missaoId: string, tentativas?: number) => void;
  desmarcarMissao: (missaoId: string) => void;
  setNome: (nome: string) => void;
  setGenero: (genero: Genero) => void;
  setAvatarIdx: (idx: number) => void;
  comprarMoldura: (molduraId: string) => void;
  setMolduraAtiva: (molduraId: string) => void;
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

      const ganhas = tentativas <= 1 ? 15 : tentativas === 2 ? 10 : 5;
      return {
        ...prev,
        completed,
        niveis_concluidos,
        conchas: prev.conchas + ganhas,
        conchas_por_missao: { ...prev.conchas_por_missao, [missaoId]: ganhas },
      };
    });
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

  return (
    <ProgressContext.Provider value={{ ...state, completarMissao, desmarcarMissao, setNome, setGenero, setAvatarIdx, comprarMoldura, setMolduraAtiva }}>
      {children}
    </ProgressContext.Provider>
  );
};
