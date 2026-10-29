import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ApiError, getTrailDetail, getTrails } from '../lib/api';
import type { TrailDetail } from '../lib/api.types';
import { useAuth } from '../hooks/useAuth';

// Única trilha do produto por enquanto (POO). Buscamos por slug em vez de
// hardcodar o id — o id é decisão do backend, não algo que o front deve fixar.
const TRAIL_SLUG = 'poo';

interface TrilhaContextValue {
  trail: TrailDetail | null;
  loading: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
}

export const TrilhaContext = createContext<TrilhaContextValue | undefined>(undefined);

export const TrilhaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { firebaseUser } = useAuth();
  const [trail, setTrail] = useState<TrailDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchTrail = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const trails = await getTrails();
      const summary = trails.find(t => t.slug === TRAIL_SLUG);
      if (!summary) {
        throw new ApiError(0, 'not_found', `Trilha "${TRAIL_SLUG}" não encontrada.`);
      }
      const detail = await getTrailDetail(summary.id);
      setTrail(detail);
    } catch (err) {
      setError(err instanceof ApiError ? err : new ApiError(0, 'internal_error', 'Falha de rede ao carregar a trilha.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (firebaseUser) {
      fetchTrail();
    } else {
      setTrail(null);
      setError(null);
    }
  }, [firebaseUser, fetchTrail]);

  return (
    <TrilhaContext.Provider value={{ trail, loading, error, refetch: fetchTrail }}>
      {children}
    </TrilhaContext.Provider>
  );
};
