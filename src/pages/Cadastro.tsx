import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSession } from '../hooks/useSession';
import { createUser } from '../lib/api';
import type { CreateUserPayload, Gender } from '../lib/api.types';
import { getAuthErrorMessage } from '../lib/authErrors';
import logotipoImg from '../assets/logotipo-removebg.png';

const GENDER_OPTIONS: { value: Gender | ''; label: string }[] = [
  { value: '', label: 'Prefiro não informar' },
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'other', label: 'Outro' },
];

const Cadastro: React.FC = () => {
  const { firebaseUser, loading: authLoading, signUp } = useAuth();
  const { refetch } = useSession();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [gender, setGender] = useState<Gender | ''>('');
  const [birthDate, setBirthDate] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  if (!authLoading && firebaseUser) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setEnviando(true);

    let contaFirebaseCriada = false;
    try {
      await signUp(email, senha);
      contaFirebaseCriada = true;

      const payload: CreateUserPayload = { name: nome.trim(), email };
      if (gender) payload.gender = gender;
      if (birthDate) payload.birthDate = birthDate;

      await createUser(payload);
      await refetch();
      navigate('/', { replace: true });
    } catch (err) {
      if (contaFirebaseCriada) {
        // Conta no Firebase já existe, mas o perfil no banco não foi criado.
        // Não recriar a conta — levar para a tela dedicada a completar o cadastro.
        navigate('/completar-cadastro', { replace: true });
        return;
      }
      setErro(getAuthErrorMessage(err));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgPrimary flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src={logotipoImg} alt="Abstractio" className="h-8 object-contain mb-2" />
          <p className="text-textSecondary text-sm">Crie sua conta para começar</p>
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
                minLength={6}
                autoComplete="new-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="mínimo 6 caracteres"
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
              {enviando ? 'Criando conta...' : 'Criar conta'}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-textSecondary mt-6">
          Já tem conta?{' '}
          <Link to="/login" className="text-accent hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;
