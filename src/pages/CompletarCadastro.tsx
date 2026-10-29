import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSession } from '../hooks/useSession';
import { ApiError, createUser } from '../lib/api';
import type { CreateUserPayload, Gender } from '../lib/api.types';
import logotipoImg from '../assets/logotipo-removebg.png';

const GENDER_OPTIONS: { value: Gender | ''; label: string }[] = [
  { value: '', label: 'Prefiro não informar' },
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'other', label: 'Outro' },
];

const CompletarCadastro: React.FC = () => {
  const { firebaseUser, loading: authLoading, signOut } = useAuth();
  const { profile, profileMissing, loading: sessionLoading, refetch } = useSession();

  const [nome, setNome] = useState(firebaseUser?.displayName ?? '');
  const [gender, setGender] = useState<Gender | ''>('');
  const [birthDate, setBirthDate] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  if (!authLoading && !firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  // Perfil já existe (ex: usuário chegou aqui por engano, ou já completou em outra aba).
  if (!sessionLoading && profile && !profileMissing) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firebaseUser?.email) {
      setErro('Não foi possível identificar seu e-mail. Faça login novamente.');
      return;
    }
    setErro('');
    setEnviando(true);
    try {
      const payload: CreateUserPayload = { name: nome.trim(), email: firebaseUser.email };
      if (gender) payload.gender = gender;
      if (birthDate) payload.birthDate = birthDate;

      await createUser(payload);
      await refetch();
    } catch (err) {
      // 409: perfil já existe (ex: retry duplicado) — trata como sucesso, só recarrega a sessão.
      if (err instanceof ApiError && err.code === 'conflict') {
        await refetch();
        return;
      }
      setErro(err instanceof ApiError ? err.message : 'Não foi possível salvar seu cadastro. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgPrimary flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src={logotipoImg} alt="Abstractio" className="h-8 object-contain mb-2" />
          <p className="text-textSecondary text-sm text-center">
            Falta pouco! Complete seu cadastro para continuar.
          </p>
        </div>

        <div className="bg-bgSecondary border border-borderDark rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm text-textPrimary font-medium mb-2">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                maxLength={30}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Como quer ser chamado?"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm text-textPrimary font-medium mb-2">
                Gênero <span className="text-textSecondary font-normal">(opcional)</span>
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender | '')}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary text-sm focus:outline-none focus:border-accent transition-colors"
              >
                {GENDER_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="birthDate" className="block text-sm text-textPrimary font-medium mb-2">
                Data de nascimento <span className="text-textSecondary font-normal">(opcional)</span>
              </label>
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {erro && <p className="text-sm text-red-400">{erro}</p>}

            <button
              type="submit"
              disabled={enviando}
              className="w-full px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {enviando ? 'Salvando...' : 'Concluir cadastro'}
            </button>
          </form>
        </div>

        <button
          type="button"
          onClick={() => signOut()}
          className="w-full text-center text-sm text-textSecondary hover:text-textPrimary mt-6 transition-colors"
        >
          Sair e usar outra conta
        </button>
      </div>
    </div>
  );
};

export default CompletarCadastro;
