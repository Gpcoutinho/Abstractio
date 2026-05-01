import React, { createContext, useCallback, useEffect, useState } from 'react';
import curriculum from '../data/curriculum.json';
import type { Nivel } from '../data/curriculum';

const STORAGE_KEY = 'abstractio:progress';

interface ProgressState {
  completed: string[];
  niveis_concluidos: number[];
  pontuacao: number;
}

const DEFAULT_STATE: ProgressState = {
  completed: [],
  niveis_concluidos: [],
  pontuacao: 0,
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
  return (curriculum as Nivel[])
    .filter(nivel => nivel.missoes.every(m => completed.includes(m.id)))
    .map(nivel => nivel.id);
}

export interface ProgressContextValue {
  completed: string[];
  niveis_concluidos: number[];
  pontuacao: number;
  completarMissao: (missaoId: string) => void;
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

  const completarMissao = useCallback((missaoId: string) => {
    setState(prev => {
      if (prev.completed.includes(missaoId)) return prev;
      const completed = [...prev.completed, missaoId];
      return {
        completed,
        niveis_concluidos: calcNiveisConcluidos(completed),
        pontuacao: prev.pontuacao + 15,
      };
    });
  }, []);

  return (
    <ProgressContext.Provider value={{ ...state, completarMissao }}>
      {children}
    </ProgressContext.Provider>
  );
};
