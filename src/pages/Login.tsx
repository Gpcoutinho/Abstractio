import React, { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getAuthErrorMessage } from '../lib/authErrors';
import logotipoImg from '../assets/logotipo-removebg.png';

const Login: React.FC = () => {
  const { firebaseUser, loading: authLoading, signIn, signInWithGoogle } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  if (!authLoading && firebaseUser) {
    const from = (location.state as { from?: string } | null)?.from ?? '/';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setEnviando(true);
    try {
      await signIn(email, senha);
    } catch (err) {
      setErro(getAuthErrorMessage(err));
    } finally {
      setEnviando(false);
    }
  };

  const handleGoogle = async () => {
    setErro('');
    setEnviando(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setErro(getAuthErrorMessage(err));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgPrimary flex items-center justify-center px-5">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src={logotipoImg} alt="Abstractio" className="h-8 object-contain mb-2" />
          <p className="text-textSecondary text-sm">Entre para continuar sua trilha</p>
        </div>

        <div className="bg-bgSecondary border border-borderDark rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-textPrimary font-medium mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="voce@email.com"
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm text-textPrimary font-medium mb-2">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                required
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="••••••••"
              />
            </div>

            {erro && <p className="text-sm text-red-400">{erro}</p>}

            <button
              type="submit"
              disabled={enviando}
              className="w-full px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {enviando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-borderDark" />
            <span className="text-xs text-textSecondary">ou</span>
            <div className="flex-1 h-px bg-borderDark" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={enviando}
            className="w-full px-4 py-2 rounded-lg border border-borderDark text-textPrimary text-sm font-medium hover:bg-bgPrimary/50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            Entrar com Google
          </button>
        </div>

        <p className="text-center text-sm text-textSecondary mt-6">
          Ainda não tem conta?{' '}
          <Link to="/cadastro" className="text-accent hover:underline">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
