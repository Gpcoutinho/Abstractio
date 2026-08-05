import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrophyIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { niveis } from '../data/curriculum';
import { MOLDURAS, MOLDURA_FALLBACK } from '../data/molduras';
import { ACESSORIOS, ACESSORIO_FALLBACK } from '../data/acessorios';
import { CORES, COR_FALLBACK } from '../data/cores';
import { useProgress } from '../hooks/useProgress';
import { useSession } from '../hooks/useSession';
import { useLoja } from '../hooks/useLoja';
import type { LojaTab } from '../hooks/useLoja';
import { getApiErrorMessage, updateUserProfile } from '../lib/api';
import type { Gender, ShopItem } from '../lib/api.types';
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
  { src: imgPolvinho, hiddenSrc: imgPolvinho, label: 'Polvinho' },
  { src: imgExplorador, hiddenSrc: imgOcultoExplorador, label: 'Explorador' },
  { src: imgMestreDosMaras, hiddenSrc: imgOcultoMestreDosMaras, label: 'Mestre dos Mares' },
  { src: imgKraken, hiddenSrc: imgOcultoKraken, label: 'Kraken' },
];

const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

const GENERO_OPTIONS: { value: Gender; label: string }[] = [
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'other', label: 'Outro' },
];

const SLOT_LABEL_NENHUM: Record<LojaTab, string> = {
  molduras: 'Nenhuma',
  acessorios: 'Nenhum',
  cores: 'Nenhuma',
};

// Cartão de item da Loja de Conchas: mesma estrutura para molduras, acessórios e cores —
// só o preview visual muda por aba.
const LojaCard: React.FC<{
  label: string;
  preview: React.ReactNode;
  ativo: boolean;
  possuido: boolean;
  preco: number;
  podeComprar: boolean;
  processando: boolean;
  onEquipar: () => void;
  onComprar: () => void;
}> = ({ label, preview, ativo, possuido, preco, podeComprar, processando, onEquipar, onComprar }) => (
  <div className="flex flex-col items-center gap-2">
    {preview}
    <p className="text-xs font-medium text-textPrimary text-center leading-tight">{label}</p>
    {possuido ? (
      <button
        onClick={onEquipar}
        disabled={ativo || processando}
        className={`text-xs px-3 py-1 rounded-full transition-colors ${ativo ? 'bg-accent/20 text-accent font-semibold' : 'text-textSecondary hover:text-textPrimary disabled:opacity-40'}`}
      >
        {ativo ? 'Ativa' : processando ? 'Aguarde...' : 'Equipar'}
      </button>
    ) : (
      <button
        onClick={onComprar}
        disabled={!podeComprar || processando}
        className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full transition-colors ${podeComprar ? 'bg-accent/10 text-accent hover:bg-accent/20' : 'text-textSecondary/40 cursor-not-allowed'}`}
      >
        {processando ? 'Aguarde...' : <>{preco}<ShellIcon className="w-3 h-3" /></>}
      </button>
    )}
  </div>
);

const LojaCardSkeleton: React.FC = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-28 h-28 rounded-full bg-bgPrimary animate-pulse" />
    <div className="h-3 w-16 rounded bg-bgPrimary animate-pulse" />
    <div className="h-5 w-12 rounded-full bg-bgPrimary animate-pulse" />
  </div>
);

const Perfil: React.FC = () => {
  const { completed } = useProgress();
  const { profile, balance, applyProfile, applyBalance, applyActiveAvatar } = useSession();
  const loja = useLoja(applyBalance, applyActiveAvatar);
  const lojaRef = useRef<HTMLElement>(null);

  // Avatar
  const avatarsUnlocked = profile?.avatarsUnlocked ?? 0;
  const avatarIdxAtivo = profile?.avatarIdx ?? 0;
  const avatarSrc = AVATARES[avatarIdxAtivo]?.src ?? AVATARES[0].src;
  const molduraAtivaData = MOLDURAS.find(m => m.id === profile?.activeFrame) ?? null;
  const [avatarSalvando, setAvatarSalvando] = useState<number | null>(null);
  const [avatarErro, setAvatarErro] = useState('');

  const handleSelecionarAvatar = async (idx: number) => {
    if (idx === avatarIdxAtivo || avatarSalvando !== null) return;
    setAvatarErro('');
    setAvatarSalvando(idx);
    try {
      const updated = await updateUserProfile({ avatarIdx: idx });
      applyProfile({ avatarIdx: updated.avatarIdx });
    } catch (err) {
      setAvatarErro(getApiErrorMessage(err, 'perfil'));
    } finally {
      setAvatarSalvando(null);
    }
  };

  // Seus dados
  const [nomeInput, setNomeInput] = useState('');
  const [generoInput, setGeneroInput] = useState<Gender | ''>('');
  const [dadosSalvo, setDadosSalvo] = useState(false);
  const [dadosSalvando, setDadosSalvando] = useState(false);
  const [dadosErro, setDadosErro] = useState('');
  const dadosHidratadosRef = useRef(false);

  useEffect(() => {
    if (profile && !dadosHidratadosRef.current) {
      setNomeInput(profile.name);
      setGeneroInput(profile.gender ?? '');
      dadosHidratadosRef.current = true;
    }
  }, [profile]);

  useEffect(() => {
    if (window.location.hash === '#loja') {
      setTimeout(() => {
        lojaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const nomeAlterado = !!profile && nomeInput.trim().length > 0 && nomeInput.trim() !== profile.name;
  const generoAlterado = !!profile && generoInput !== '' && generoInput !== profile.gender;
  const podeSalvarDados = nomeAlterado || generoAlterado;

  const handleSalvarDados = async () => {
    if (!podeSalvarDados) return;
    setDadosErro('');
    setDadosSalvando(true);
    try {
      const payload: { name?: string; gender?: Gender } = {};
      if (nomeAlterado) payload.name = nomeInput.trim();
      if (generoAlterado && generoInput) payload.gender = generoInput;
      const updated = await updateUserProfile(payload);
      applyProfile({ name: updated.name, gender: updated.gender });
      setDadosSalvo(true);
      setTimeout(() => setDadosSalvo(false), 2000);
    } catch (err) {
      setDadosErro(getApiErrorMessage(err, 'perfil'));
    } finally {
      setDadosSalvando(false);
    }
  };

  const emblemasConcluidos = completed.length;
  const saldo = Number(balance?.raw ?? 0);

  const renderLojaTab = () => {
    if (loja.loading) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <LojaCardSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (loja.tab === 'molduras') {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <LojaCard
            label={SLOT_LABEL_NENHUM.molduras}
            preview={
              <div className="w-28 h-28 rounded-full overflow-hidden bg-bgPrimary border border-dashed border-borderDark flex items-center justify-center">
                <img src={avatarSrc} alt="Sem moldura" className="w-full h-full object-cover" />
              </div>
            }
            ativo={profile ? profile.activeFrame === null : false}
            possuido
            preco={0}
            podeComprar
            processando={loja.acaoEmAndamento === 'nenhuma'}
            onEquipar={() => loja.equipar('frame', null)}
            onComprar={() => {}}
          />
          {loja.items.map((item: ShopItem) => {
            const visual = MOLDURAS.find(m => m.code === item.code) ?? { id: item.id, code: item.code, nome: item.name, ...MOLDURA_FALLBACK };
            const possuido = loja.inventory.some(inv => inv.id === item.id);
            const ativo = profile?.activeFrame === item.id;
            return (
              <LojaCard
                key={item.id}
                label={item.name}
                preview={
                  <AvatarFrame moldura={visual}>
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-bgPrimary">
                      <img src={avatarSrc} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </AvatarFrame>
                }
                ativo={ativo}
                possuido={possuido}
                preco={item.priceShells}
                podeComprar={saldo >= item.priceShells}
                processando={loja.acaoEmAndamento === item.id}
                onEquipar={() => loja.equipar('frame', item.id)}
                onComprar={() => loja.comprar(item)}
              />
            );
          })}
        </div>
      );
    }

    if (loja.tab === 'acessorios') {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <LojaCard
            label={SLOT_LABEL_NENHUM.acessorios}
            preview={
              <div className="w-28 h-28 rounded-full overflow-hidden bg-bgPrimary border border-dashed border-borderDark flex items-center justify-center">
                <img src={avatarSrc} alt="Sem acessório" className="w-full h-full object-cover" />
              </div>
            }
            ativo={profile ? profile.activeAccessory === null : false}
            possuido
            preco={0}
            podeComprar
            processando={loja.acaoEmAndamento === 'nenhuma'}
            onEquipar={() => loja.equipar('accessory', null)}
            onComprar={() => {}}
          />
          {loja.items.map((item: ShopItem) => {
            const visual = ACESSORIOS.find(a => a.code === item.code) ?? { id: item.id, code: item.code, nome: item.name, ...ACESSORIO_FALLBACK };
            const possuido = loja.inventory.some(inv => inv.id === item.id);
            const ativo = profile?.activeAccessory === item.id;
            return (
              <LojaCard
                key={item.id}
                label={item.name}
                preview={
                  <div className="relative w-28 h-28 rounded-full overflow-hidden bg-bgPrimary">
                    <img src={avatarSrc} alt={item.name} className="w-full h-full object-cover" />
                    {visual.src && (
                      <img src={visual.src} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                    )}
                  </div>
                }
                ativo={ativo}
                possuido={possuido}
                preco={item.priceShells}
                podeComprar={saldo >= item.priceShells}
                processando={loja.acaoEmAndamento === item.id}
                onEquipar={() => loja.equipar('accessory', item.id)}
                onComprar={() => loja.comprar(item)}
              />
            );
          })}
        </div>
      );
    }

    // cores
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <LojaCard
          label={SLOT_LABEL_NENHUM.cores}
          preview={
            <div className="w-28 h-28 rounded-full bg-bgPrimary border border-dashed border-borderDark" />
          }
          ativo={profile ? profile.activeColor === null : false}
          possuido
          preco={0}
          podeComprar
          processando={loja.acaoEmAndamento === 'nenhuma'}
          onEquipar={() => loja.equipar('color', null)}
          onComprar={() => {}}
        />
        {loja.items.map((item: ShopItem) => {
          const visual = CORES.find(c => c.code === item.code) ?? { code: item.code, nome: item.name, ...COR_FALLBACK };
          const possuido = loja.inventory.some(inv => inv.id === item.id);
          const ativo = profile?.activeColor === item.id;
          return (
            <LojaCard
              key={item.id}
              label={item.name}
              preview={<div className="w-28 h-28 rounded-full" style={{ backgroundColor: visual.cor }} />}
              ativo={ativo}
              possuido={possuido}
              preco={item.priceShells}
              podeComprar={saldo >= item.priceShells}
              processando={loja.acaoEmAndamento === item.id}
              onEquipar={() => loja.equipar('color', item.id)}
              onComprar={() => loja.comprar(item)}
            />
          );
        })}
      </div>
    );
  };

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
              <p className="text-2xl font-bold text-accent">{balance?.formatted ?? '—'}</p>
              <p className="text-xs text-textSecondary mt-1">conchas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-textPrimary">{profile?.missionsCompleted ?? '—'}</p>
              <p className="text-xs text-textSecondary mt-1">de {profile?.totalMissions ?? '—'} missões</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-textPrimary">{profile?.rank.patent ?? '—'}</p>
              <p className="text-xs text-textSecondary mt-1">
                {profile ? `Nível ${profile.rank.level}` : ''}
              </p>
            </div>
          </div>
        </section>

        {/* Emblemas — TODO: backend ainda não expõe endpoint de emblemas/conquistas; mock em cima do progresso local */}
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
          {avatarErro && <p className="text-xs text-red-400 mb-3">{avatarErro}</p>}
          <div className="flex gap-4 flex-wrap">
            {AVATARES.map((avatar, i) => {
              const desbloqueado = i < avatarsUnlocked;
              const selecionado = avatarIdxAtivo === i;

              return (
                <AvatarFrame key={i} moldura={selecionado ? molduraAtivaData : null}>
                  <button
                    onClick={() => desbloqueado && handleSelecionarAvatar(i)}
                    disabled={!desbloqueado || avatarSalvando !== null}
                    title={desbloqueado ? avatar.label : 'Continue avançando para desbloquear'}
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
                    {avatarSalvando === i && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <span className="text-xs text-white">Salvando...</span>
                      </div>
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
        <section id="loja" ref={lojaRef} className="bg-bgSecondary border border-borderDark rounded-xl mb-6">
          {/* Header */}
          <div className="px-6 pt-6 pb-0">
            <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
              Loja de conchas
            </h2>
            {/* Tabs */}
            <div className="flex gap-1 border-b border-borderDark">
              {(['molduras', 'acessorios', 'cores'] as LojaTab[]).map(tab => {
                const labels: Record<LojaTab, string> = { molduras: 'Molduras', acessorios: 'Acessórios', cores: 'Cores' };
                const ativa = loja.tab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => loja.setTab(tab)}
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
            {loja.erro && <p className="text-xs text-red-400 mb-4">{loja.erro}</p>}
            {renderLojaTab()}
          </div>
        </section>

        {/* Dados do usuário */}
        <section className="bg-bgSecondary border border-borderDark rounded-xl p-6 space-y-5">
          <h2 className="text-sm font-semibold text-textSecondary uppercase tracking-widest">
            Seus dados
          </h2>

          {dadosErro && <p className="text-xs text-red-400">{dadosErro}</p>}

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
                onChange={e => { setNomeInput(e.target.value); setDadosSalvo(false); }}
                placeholder="Como quer ser chamado?"
                maxLength={30}
                className="flex-1 bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary placeholder-textSecondary text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          {/* Gênero */}
          <div>
            <label htmlFor="genero" className="block text-sm text-textPrimary font-medium mb-2">
              Gênero
            </label>
            <select
              id="genero"
              value={generoInput}
              onChange={e => { setGeneroInput(e.target.value as Gender); setDadosSalvo(false); }}
              className="w-full bg-bgPrimary border border-borderDark rounded-lg px-4 py-2 text-textPrimary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              {generoInput === '' && <option value="" disabled>Selecione</option>}
              {GENERO_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <p className="text-xs text-textSecondary mt-1">
              Personaliza os títulos dos emblemas nas conquistas.
            </p>
          </div>

          <button
            onClick={handleSalvarDados}
            disabled={!podeSalvarDados || dadosSalvando}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {dadosSalvando ? 'Salvando...' : dadosSalvo ? 'Salvo ✓' : 'Salvar'}
          </button>
        </section>

      </PageWrapper>
      <Footer />
    </div>
    </>
  );
};

export default Perfil;
