import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ApiError, getUserBalance, getUserProfile } from '../lib/api';
import type { ActiveAvatarState, UserBalance, UserProfile } from '../lib/api.types';
import { useAuth } from '../hooks/useAuth';

interface SessionContextValue {
  profile: UserProfile | null;
  balance: UserBalance | null;
  loading: boolean;
  profileMissing: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
  applyProfile: (patch: Partial<UserProfile>) => void;
  applyBalance: (raw: number) => void;
  applyActiveAvatar: (state: ActiveAvatarState) => void;
}

export const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { firebaseUser } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [balance, setBalance] = useState<UserBalance | null>(null);
  const [loading, setLoading] = useState(false);
  const [profileMissing, setProfileMissing] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchSession = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [profileResult, balanceResult] = await Promise.all([getUserProfile(), getUserBalance()]);
      setProfile(profileResult);
      setBalance(balanceResult);
      setProfileMissing(false);
    } catch (err) {
      if (err instanceof ApiError && err.code === 'not_found') {
        setProfile(null);
        setBalance(null);
        setProfileMissing(true);
      } else if (err instanceof ApiError) {
        setError(err);
      } else {
        setError(new ApiError(0, 'internal_error', 'Falha de rede ao carregar a sessão.'));
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Único fetch da sessão no boot, disparado quando o usuário Firebase aparece.
  // Sem refetch por rota — telas que mutam dados chamam refetch() explicitamente.
  useEffect(() => {
    if (firebaseUser) {
      fetchSession();
    } else {
      setProfile(null);
      setBalance(null);
      setProfileMissing(false);
      setError(null);
    }
  }, [firebaseUser, fetchSession]);

  // Rede de segurança para multi-aba: revalida ao voltar para a aba.
  // Nada de polling — o saldo só muda por ação do próprio usuário.
  useEffect(() => {
    if (!firebaseUser) return;
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') fetchSession();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [firebaseUser, fetchSession]);

  // Mutadores locais: os endpoints de PATCH/POST já devolvem o estado novo,
  // então aplicamos direto em vez de refazer GET /user + GET /user/balance.
  const applyProfile = useCallback((patch: Partial<UserProfile>) => {
    setProfile(prev => (prev ? { ...prev, ...patch } : prev));
  }, []);

  // Reproduz o formato que o backend já devolve em GET /user/balance — "N conchas"
  // (singular "1 concha") — pra não divergir do que aparece logo após o boot.
  const applyBalance = useCallback((raw: number) => {
    setBalance(prev => ({
      raw: String(raw),
      formatted: `${raw.toLocaleString('pt-BR')} ${raw === 1 ? 'concha' : 'conchas'}`,
      currency: prev?.currency ?? 'conchas',
    }));
  }, []);

  const applyActiveAvatar = useCallback((state: ActiveAvatarState) => {
    setProfile(prev =>
      prev
        ? {
            ...prev,
            avatarIdx: state.avatarIdx,
            activeFrame: state.activeFrame,
            activeAccessory: state.activeAccessory,
            activeColor: state.activeColor,
          }
        : prev,
    );
  }, []);

  return (
    <SessionContext.Provider
      value={{ profile, balance, loading, profileMissing, error, refetch: fetchSession, applyProfile, applyBalance, applyActiveAvatar }}
    >
      {children}
    </SessionContext.Provider>
  );
};
