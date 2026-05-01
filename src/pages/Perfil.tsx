import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import curriculum from '../data/curriculum.json';
import type { Nivel } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import type { Genero } from '../contexts/ProgressContext';
import Footer from '../components/Footer';
import imgPolvinho from '../assets/avatares/polvinho.png';
import imgExplorador from '../assets/avatares/explorador.png';
import imgMestreDosMaras from '../assets/avatares/mestredosmares.png';

const AVATARES = [
  { src: imgPolvinho,      label: 'Polvinho',         nivelMin: 0 },
  { src: imgExplorador,    label: 'Explorador',        nivelMin: 1 },
  { src: imgMestreDosMaras, label: 'Mestre dos Mares', nivelMin: 2 },
  { src: null,             label: 'Kraken',            nivelMin: 3 },
];

const niveis = curriculum as Nivel[];
const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

const GENERO_OPTIONS: { value: Genero; label: string }[] = [
  { value: '', label: 'Prefiro não informar' },
  { value: 'feminino', label: 'Feminino' },
  { value: 'masculino', label: 'Masculino' },
  { value: 'outro', label: 'Outro' },
];

const Perfil: React.FC = () => {
  const { nome, genero, pontuacao, completed, nivelDisplay, avatarIdx, setNome, setGenero, setAvatarIdx, niveis_concluidos } = useProgress();
  const [nomeInput, setNomeInput] = useState(nome);
  const [salvo, setSalvo] = useState(false);

  const handleSalvarNome = () => {
    setNome(nomeInput.trim());
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  };

  const trofeusConcluidos = completed.length;

  return (
    <>
      <div className="app-wrapper max-w-2xl mx-auto pt-28 pb-16 px-5">
        <h1 className="text-3xl font-bold text-textPrimary mb-10">Perfil</h1>

        {/* Resumo de progresso */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
            Progresso
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-accent">{pontuacao}</p>
              <p className="text-xs text-textSecondary mt-1">pontos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-textPrimary">{completed.length}</p>
              <p className="text-xs text-textSecondary mt-1">de {totalMissoes} missões</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-textPrimary">{nivelDisplay.split(' — ')[1]}</p>
              <p className="text-xs text-textSecondary mt-1">{nivelDisplay.split(' — ')[0]}</p>
            </div>
          </div>
        </section>

        {/* Troféus */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
              Troféus
            </h2>
            <Link to="/conquistas" className="text-xs text-accent hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <TrophyIcon className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <p className="text-textPrimary font-semibold">
                {trofeusConcluidos} de {totalMissoes} troféus conquistados
              </p>
              <div className="w-full h-1.5 bg-bgPrimary rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.round((trofeusConcluidos / totalMissoes) * 100)}%`,
                    background: 'linear-gradient(90deg, #4F33A9, #8A4FFF)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avatares */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
            Avatar
          </h2>
          <div className="flex gap-4 flex-wrap">
            {AVATARES.map((avatar, i) => {
              const desbloqueado = niveis_concluidos.length >= avatar.nivelMin;
              const selecionado = avatarIdx === i;
              return (
                <button
                  key={i}
                  onClick={() => desbloqueado && setAvatarIdx(i)}
                  disabled={!desbloqueado}
                  title={desbloqueado ? avatar.label : `Conclua o Nível ${avatar.nivelMin} para desbloquear`}
                  className={`relative w-32 h-32 rounded-full border-2 overflow-hidden transition-all focus:outline-none
                    ${selecionado ? 'border-accent scale-105' : 'border-borderDark'}
                    ${desbloqueado ? 'hover:border-accent cursor-pointer' : 'opacity-40 cursor-not-allowed grayscale'}
                  `}
                >
                  {avatar.src ? (
                    <img src={avatar.src} alt={avatar.label} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-bgPrimary flex items-center justify-center">
                      <LockClosedIcon className="w-6 h-6 text-textSecondary" />
                    </div>
                  )}
                  {selecionado && (
                    <div className="absolute inset-0 ring-2 ring-accent ring-inset rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-textSecondary mt-3">
            Novos avatares são desbloqueados ao concluir cada nível.
          </p>
        </section>

        {/* Dados do usuário */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
            Seus dados
          </h2>

          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm text-textPrimary font-medium mb-2">
              Nome de usuário
            </label>
            <div className="flex gap-2">
              <input
                id="nome"
                type="text"
                value={nomeInput}
                onChange={e => { setNomeInput(e.target.value); setSalvo(false); }}
                onKeyDown={e => e.key === 'Enter' && handleSalvarNome()}
                placeholder="Como quer ser chamado?"
                maxLength={30}
                className="flex-1 bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button
                onClick={handleSalvarNome}
                disabled={nomeInput.trim() === nome}
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {salvo ? 'Salvo ✓' : 'Salvar'}
              </button>
            </div>
          </div>

          {/* Gênero */}
          <div>
            <label htmlFor="genero" className="block text-sm text-textPrimary font-medium mb-2">
              Gênero
            </label>
            <select
              id="genero"
              value={genero}
              onChange={e => setGenero(e.target.value as Genero)}
              className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              {GENERO_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <p className="text-xs text-textSecondary mt-1">
              Usado futuramente para personalizar nomenclaturas de conquistas.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Perfil;
