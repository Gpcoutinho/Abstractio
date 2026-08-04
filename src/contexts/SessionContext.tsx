import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ApiError, getUserBalance, getUserProfile } from '../lib/api';
import type { UserBalance, UserProfile } from '../lib/api.types';
import { useAuth } from '../hooks/useAuth';

interface SessionContextValue {
  profile: UserProfile | null;
  balance: UserBalance | null;
  loading: boolean;
  profileMissing: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
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

  return (
    <SessionContext.Provider value={{ profile, balance, loading, profileMissing, error, refetch: fetchSession }}>
      {children}
    </SessionContext.Provider>
  );
};
