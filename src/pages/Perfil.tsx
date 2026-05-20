import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { niveis } from '../data/curriculum';
import { MOLDURAS } from '../data/molduras';
import { ACESSORIOS } from '../data/acessorios';
import { useProgress } from '../hooks/useProgress';
import type { Genero } from '../contexts/ProgressContext';
import ShellIcon from '../components/ShellIcon';
import AvatarFrame from '../components/AvatarFrame';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import imgPolvinho from '../assets/avatares/avatar-polvinho.png';
import imgExplorador from '../assets/avatares/avatar-explorador.png';
import imgMestreDosMaras from '../assets/avatares/avatar-mestredosmares.png';
import imgKraken from '../assets/avatares/avatar-kraken.png';
import imgOcultoExplorador from '../assets/avatares/avataroculto-explorador.png';
import imgOcultoMestreDosMaras from '../assets/avatares/avataroculto-mestredosmares.png';
import imgOcultoKraken from '../assets/avatares/avataroculto-kraken.png';

const AVATARES = [
  { src: imgPolvinho,      hiddenSrc: imgPolvinho,          label: 'Polvinho',         nivelMin: 0 },
  { src: imgExplorador,    hiddenSrc: imgOcultoExplorador,  label: 'Explorador',        nivelMin: 1 },
  { src: imgMestreDosMaras, hiddenSrc: imgOcultoMestreDosMaras, label: 'Mestre dos Mares', nivelMin: 2 },
  { src: imgKraken,        hiddenSrc: imgOcultoKraken,      label: 'Kraken',            nivelMin: 3 },
];

const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

const GENERO_OPTIONS: { value: Genero; label: string }[] = [
  { value: '', label: 'Prefiro não informar' },
  { value: 'feminino', label: 'Feminino' },
  { value: 'masculino', label: 'Masculino' },
  { value: 'outro', label: 'Outro' },
];

type LojaTab = 'molduras' | 'acessorios' | 'cores';

const Perfil: React.FC = () => {
  const { nome, genero, conchas, completed, nivelDisplay, avatarIdx, setNome, setGenero, setAvatarIdx, niveis_concluidos, moldurasDesbloqueadas, molduraAtiva, comprarMoldura, setMolduraAtiva, acessoriosDesbloqueados, acessorioAtivo, comprarAcessorio, setAcessorioAtivo } = useProgress();
  const molduraAtivaData = MOLDURAS.find(m => m.id === molduraAtiva) ?? MOLDURAS[0];
  const [nomeInput, setNomeInput] = useState(nome);
  const [salvo, setSalvo] = useState(false);
  const [lojaTab, setLojaTab] = useState<LojaTab>('molduras');

  const handleSalvarNome = () => {
    setNome(nomeInput.trim());
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  };

  const emblemasConcluidos = completed.length;

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <PageWrapper className="flex-grow max-w-2xl pb-16">
        <h1 className="text-3xl font-bold text-textPrimary mb-10">Perfil</h1>

        {/* Resumo de progresso */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 mb-6">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
            Progresso
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-accent">{conchas}</p>
              <p className="text-xs text-textSecondary mt-1">conchas</p>
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

        {/* Emblemas */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
              Emblemas
            </h2>
            <Link to="/conquistas" className="text-xs text-accent hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <TrophyIcon className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <p className="text-textPrimary font-semibold">
                {emblemasConcluidos} de {totalMissoes} emblemas conquistados
              </p>
              <div className="w-full h-1.5 bg-bgPrimary rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.round((emblemasConcluidos / totalMissoes) * 100)}%`,
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
                <AvatarFrame key={i} moldura={selecionado ? molduraAtivaData : MOLDURAS[0]}>
                  <button
                    onClick={() => desbloqueado && setAvatarIdx(i)}
                    disabled={!desbloqueado}
                    title={desbloqueado ? avatar.label : `Conclua o Nível ${avatar.nivelMin} para desbloquear`}
                    className={`relative w-32 h-32 rounded-full border-2 overflow-hidden transition-all focus:outline-none bg-bgPrimary flex items-center justify-center
                      ${selecionado ? 'border-accent scale-105' : 'border-borderDark'}
                      ${desbloqueado ? 'hover:border-accent cursor-pointer' : 'cursor-not-allowed'}
                    `}
                  >
                    <img
                      src={desbloqueado ? avatar.src : avatar.hiddenSrc ?? avatar.src}
                      alt={avatar.label}
                      className={`w-full h-full object-cover transition-all ${!desbloqueado ? 'opacity-30 grayscale brightness-50' : ''}`}
                    />
                    {!desbloqueado && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <LockClosedIcon className="w-8 h-8 text-textSecondary" />
                      </div>
                    )}
                    {selecionado && desbloqueado && (
                      <div className="absolute inset-0 ring-4 ring-accent ring-inset rounded-full pointer-events-none" />
                    )}
                  </button>
                </AvatarFrame>
              );
            })}
          </div>
          <p className="text-xs text-textSecondary mt-3">
            Novos avatares são desbloqueados ao concluir cada nível.
          </p>
        </section>

        {/* Loja de conchas — card unificado com tabs */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl mb-6">
          {/* Header */}
          <div className="px-6 pt-6 pb-0">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
              Loja de conchas
            </h2>
            {/* Tabs */}
            <div className="flex gap-1 border-b border-borderDark">
              {(['molduras', 'acessorios', 'cores'] as LojaTab[]).map(tab => {
                const labels: Record<LojaTab, string> = { molduras: 'Molduras', acessorios: 'Acessórios', cores: 'Cores' };
                const ativa = lojaTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setLojaTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                      ativa
                        ? 'border-accent text-accent'
                        : 'border-transparent text-textSecondary hover:text-textPrimary'
                    }`}
                  >
                    {labels[tab]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conteúdo da tab */}
          <div className="p-6">
            {lojaTab === 'molduras' && (
              <div className="grid grid-cols-3 gap-4">
                {MOLDURAS.map(moldura => {
                  const owned = moldurasDesbloqueadas.includes(moldura.id);
                  const ativa = molduraAtiva === moldura.id;
                  const podaComprar = !owned && conchas >= moldura.custo;
                  const avatarSrc = AVATARES[avatarIdx]?.src ?? AVATARES[0].src;
                  return (
                    <div key={moldura.id} className="flex flex-col items-center gap-2">
                      <AvatarFrame moldura={moldura}>
                        <div className="w-28 h-28 rounded-full overflow-hidden bg-bgPrimary">
                          <img src={avatarSrc} alt={moldura.nome} className="w-full h-full object-cover" />
                        </div>
                      </AvatarFrame>
                      <p className="text-xs font-medium text-textPrimary text-center leading-tight">{moldura.nome}</p>
                      {moldura.custo === 0 || owned ? (
                        <button
                          onClick={() => setMolduraAtiva(moldura.id)}
                          className={`text-xs px-3 py-1 rounded-full transition-colors ${ativa ? 'bg-accent/20 text-accent font-semibold' : 'text-textSecondary hover:text-textPrimary'}`}
                        >
                          {ativa ? 'Ativa' : 'Usar'}
                        </button>
                      ) : (
                        <button
                          onClick={() => comprarMoldura(moldura.id)}
                          disabled={!podaComprar}
                          className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-colors ${podaComprar ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'text-textSecondary/40 cursor-not-allowed'}`}
                        >
                          {moldura.custo}
                          <ShellIcon className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {lojaTab === 'acessorios' && (
              <div className="grid grid-cols-3 gap-4">
                {ACESSORIOS.map(acessorio => {
                  const owned = acessoriosDesbloqueados.includes(acessorio.id);
                  const ativo = acessorioAtivo === acessorio.id;
                  const podeComprar = !owned && conchas >= acessorio.custo;
                  const avatarSrc = AVATARES[avatarIdx]?.src ?? AVATARES[0].src;
                  return (
                    <div key={acessorio.id} className="flex flex-col items-center gap-2">
                      <div className="relative w-28 h-28 rounded-full overflow-hidden bg-bgPrimary">
                        <img src={avatarSrc} alt={acessorio.nome} className="w-full h-full object-cover" />
                        {acessorio.src && (
                          <img src={acessorio.src} alt={acessorio.nome} className="absolute inset-0 w-full h-full object-cover" />
                        )}
                      </div>
                      <p className="text-xs font-medium text-textPrimary text-center leading-tight">{acessorio.nome}</p>
                      {acessorio.custo === 0 || owned ? (
                        <button
                          onClick={() => setAcessorioAtivo(acessorio.id)}
                          className={`text-xs px-3 py-1 rounded-full transition-colors ${ativo ? 'bg-accent/20 text-accent font-semibold' : 'text-textSecondary hover:text-textPrimary'}`}
                        >
                          {ativo ? 'Ativo' : 'Usar'}
                        </button>
                      ) : (
                        <button
                          onClick={() => comprarAcessorio(acessorio.id)}
                          disabled={!podeComprar}
                          className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-colors ${podeComprar ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'text-textSecondary/40 cursor-not-allowed'}`}
                        >
                          {acessorio.custo}
                          <ShellIcon className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {lojaTab === 'cores' && (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <p className="text-3xl">🎨</p>
                <p className="text-sm font-medium text-textPrimary">Em breve</p>
                <p className="text-xs text-textSecondary">Cores de avatar chegam em uma próxima atualização.</p>
              </div>
            )}
          </div>
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
              Personaliza os títulos dos emblemas nas conquistas.
            </p>
          </div>
        </section>

      </PageWrapper>
      <Footer />
    </div>
    </>
  );
};

export default Perfil;
