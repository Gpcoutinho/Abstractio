import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSession } from '../hooks/useSession';

const FullScreenLoading: React.FC = () => (
  <div className="min-h-screen bg-bgPrimary flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-borderDark border-t-accent rounded-full animate-spin" />
  </div>
);

const SessionErrorScreen: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <div className="min-h-screen bg-bgPrimary flex items-center justify-center px-5">
    <div className="text-center max-w-sm">
      <p className="text-textPrimary font-medium mb-2">Não foi possível carregar seu perfil.</p>
      <p className="text-textSecondary text-sm mb-6">Verifique sua conexão e tente novamente.</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors"
      >
        Tentar de novo
      </button>
    </div>
  </div>
);

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { firebaseUser, loading: authLoading } = useAuth();
  const location = useLocation();
  const { loading: sessionLoading, profileMissing, error, refetch } = useSession();

  if (authLoading) return <FullScreenLoading />;

  if (!firebaseUser) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (sessionLoading) return <FullScreenLoading />;

  if (profileMissing) {
    return <Navigate to="/completar-cadastro" replace />;
  }

  if (error) {
    return <SessionErrorScreen onRetry={refetch} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
