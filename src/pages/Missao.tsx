import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import BoloFactory from "../components/missoes/nivel_1/missao_5/BoloFactory";
import PolvosInterativo from "../components/missoes/nivel_1/missao_2/PolvosInterativo";
import TresPolvosInterativo from "../components/missoes/nivel_1/missao_2/TresPolvosInterativo";
import FichaInterativo from "../components/missoes/nivel_1/missao_3/FichaInterativo";
import FichaAcesso from "../components/missoes/nivel_1/missao_3/FichaAcesso";
import TresPolvosAcesso from "../components/missoes/nivel_1/missao_3/TresPolvosAcesso";
import AnimacaoCamuflagem from "../components/missoes/nivel_1/missao_3/AnimacaoCamuflagem";
import AdaCardRotulado from "../components/missoes/nivel_1/missao_3/AdaCardRotulado";
import DiagramaRotulosValores from "../components/missoes/nivel_1/missao_3/DiagramaRotulosValores";
import PolvonilsonIntro from "../components/missoes/nivel_1/missao_0/PolvonilsonIntro";
import CadernoAbertura from "../components/missoes/nivel_1/missao_1/CadernoAbertura";
import DadosGlobais from "../components/missoes/nivel_1/missao_1/DadosGlobais";
import CaosAnotacoes from "../components/missoes/nivel_1/missao_1/CaosAnotacoes";
import DuvidaBlock from "../components/missoes/reutilizaveis/DuvidaBlock";
import SlidesPOO from "../components/missoes/nivel_1/missao_1/SlidesPOO";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useTrilha } from "../hooks/useTrilha";
import { useProgress } from "../hooks/useProgress";
import { useSession } from "../hooks/useSession";
import { useCelebration } from "../hooks/useCelebration";
import { resolveEmblem } from "../utils/emblem";
import PageWrapper from "../components/PageWrapper";
import CodeBlock from "../components/CodeBlock";
import MissionIcon from "../components/MissionIcon";
import HexBadge from "../components/HexBadge";
import ShellIcon from "../components/ShellIcon";
import interativoHtml from "../assets/interativos/nivel_1_missao_7.html?raw";
import ProgressBar from '../components/ProgressBar';
import ConceitoBox from '../components/ConceitoBox';
import OQueVaiEncontrar from '../components/missoes/nivel_1/missao_0/OQueVaiEncontrar';
import Exercicios from '../components/Exercicios';
import { ListChecks, BookmarkSimple } from '@phosphor-icons/react';
import ReferenciasBlock from '../components/ReferenciasBlock';
import AdaCard from '../components/missoes/nivel_1/AdaCard';
import { ApiError, getApiErrorMessage, getBookmark, getMissionDetail, getMissionProgress, putBookmark, deleteBookmark, submitAnswer } from '../lib/api';
import type { MissionDetail, MissionProgress } from '../lib/api.types';

const interativos: Record<string, string> = {
  "interativos/nivel_1_missao_7.html": interativoHtml,
};

// Parâmetros de ajuste da animação
const Limite_para_esconder = 200; //px
const Limite_para_mostrar = 50;  //px

const TheorySkeleton: React.FC = () => (
  <div className="space-y-3 animate-pulse" aria-hidden="true">
    <div className="h-6 w-1/2 rounded bg-bgSecondary" />
    <div className="h-4 w-full rounded bg-bgSecondary" />
    <div className="h-4 w-full rounded bg-bgSecondary" />
    <div className="h-4 w-2/3 rounded bg-bgSecondary" />
    <div className="h-4 w-full rounded bg-bgSecondary mt-6" />
    <div className="h-4 w-5/6 rounded bg-bgSecondary" />
  </div>
);

const Missao: React.FC = () => {
  const { nivelIdx, missaoIdx } = useParams<{
    nivelIdx: string;
    missaoIdx: string;
  }>();
  const { niveis, loading: trilhaLoading } = useTrilha();
  const {
    completarMissao,
    desmarcarMissao,
    aplicarSubmissao,
    hydrateMissionProgress,
    isMissaoConcluida,
    completed,
    getConchasValor,
    getExtrasTotal,
  } = useProgress();
  const { profile } = useSession();
  const genero = profile?.gender ?? null;
  const { celebrate } = useCelebration();

  // Conteúdo da missão (teoria, perguntas) — vem de GET /missions/:slug, sem gabarito.
  const [missionDetail, setMissionDetail] = useState<MissionDetail | null>(null);
  const [missionProgress, setMissionProgress] = useState<MissionProgress | null>(null);
  const [contentLoading, setContentLoading] = useState(true);
  const [contentError, setContentError] = useState<ApiError | null>(null);

  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [conchasGanhasAgora, setConchasGanhasAgora] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showBau, setShowBau] = useState(false);
  const [bookmarkData, setBookmarkData] = useState<{ scrollY: number; sectionTitle: string } | null>(null);
  const [showBookmarkBanner, setShowBookmarkBanner] = useState(false);
  const [desmarcando, setDesmarcando] = useState(false);
  const [completando, setCompletando] = useState(false);

  // Estado do Header Retrátil
  const [showBar, setShowBar] = useState(true);

  const theoryRef = useRef<HTMLElement>(null);
  const idempotencyKeysRef = useRef<Map<string, string>>(new Map());

  function getSubmissionKey(questionSlug: string): string {
    const existing = idempotencyKeysRef.current.get(questionSlug);
    if (existing) return existing;
    const key = crypto.randomUUID();
    idempotencyKeysRef.current.set(questionSlug, key);
    return key;
  }

  useEffect(() => {
    setSelectedOptionId(null);
    setRespondida(false);
    setSubmitError(null);
    setIsCorrect(false);
    setExplanation(null);
    setConchasGanhasAgora(null);
    setShowCelebration(false);
    setShowBau(false);
    setShowBookmarkBanner(false);
    setBookmarkData(null);
    idempotencyKeysRef.current.clear();
  }, [nivelIdx, missaoIdx]);

  // Lógica de Scroll com Histerese (Zona Morta)
  // Isso evita que a mudança de altura da página dispare o scroll de volta
  useEffect(() => {
    const handleScroll = () => {
      const scrollAtual = window.scrollY;

      if (scrollAtual > Limite_para_esconder) {
        setShowBar(false);
      } else if (scrollAtual < Limite_para_mostrar) {
        setShowBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nivel = niveis.find((n) => n.id === Number(nivelIdx));
  const missao = nivel?.missoes[Number(missaoIdx) - 1];
  const missaoId = missao?.id;

  // Carrega teoria + perguntas + progresso da missão da API.
  useEffect(() => {
    if (!missaoId) return;
    let cancelled = false;
    setContentLoading(true);
    setContentError(null);
    (async () => {
      try {
        const [detail, progress] = await Promise.all([
          getMissionDetail(missaoId),
          getMissionProgress(missaoId),
        ]);
        if (cancelled) return;
        setMissionDetail(detail);
        setMissionProgress(progress);
        hydrateMissionProgress(missaoId, progress);
      } catch (err) {
        if (!cancelled) {
          setContentError(err instanceof ApiError ? err : new ApiError(0, 'internal_error', 'Falha de rede ao carregar a missão.'));
        }
      } finally {
        if (!cancelled) setContentLoading(false);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missaoId]);

  // Carrega bookmark salvo ao entrar na missão
  useEffect(() => {
    if (!missaoId) return;
    let cancelled = false;
    (async () => {
      try {
        const bookmark = await getBookmark(missaoId);
        if (cancelled || !bookmark) return;
        if (bookmark.scrollY > 300) {
          setBookmarkData(bookmark);
          setShowBookmarkBanner(true);
        }
      } catch {
        // bookmark é cosmético — falha silenciosa
      }
    })();
    return () => { cancelled = true; };
  }, [missaoId]);

  // Salva bookmark enquanto o aluno lê (debounce 800ms)
  useEffect(() => {
    if (!missaoId) return;
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!theoryRef.current) return;
        const h2s = theoryRef.current.querySelectorAll('h2');
        let sectionTitle = '';
        h2s.forEach(h2 => {
          if (h2.getBoundingClientRect().top < 150) sectionTitle = h2.textContent || '';
        });
        if (window.scrollY > 300) {
          putBookmark(missaoId, { scrollY: Math.round(window.scrollY), sectionTitle }).catch(() => {});
        }
      }, 800);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timeout); };
  }, [missaoId]);

  if (!trilhaLoading && (!nivel || !missao)) {
    return (
      <PageWrapper className="max-w-3xl pb-12">
        <p className="text-textSecondary">Missão não encontrada.</p>
        <Link to="/trilha" className="text-accent hover:underline mt-4 inline-block">
          ← Voltar à trilha
        </Link>
      </PageWrapper>
    );
  }

  if (!nivel || !missao) {
    return (
      <PageWrapper className="max-w-3xl pb-12">
        <TheorySkeleton />
      </PageWrapper>
    );
  }

  const missaoIdxNum = Number(missaoIdx);
  const proximaMissao = (() => {
    if (missaoIdxNum < nivel.missoes.length) return `/missao/${nivel.id}/${missaoIdxNum + 1}`;
    const proximoNivel = niveis.find((n) => n.id === nivel.id + 1);
    if (proximoNivel) return `/missao/${proximoNivel.id}/1`;
    return null;
  })();

  const missaoAnterior = (() => {
    if (missaoIdxNum > 1) return `/missao/${nivel.id}/${missaoIdxNum - 1}`;
    const nivelAnterior = niveis.find((n) => n.id === nivel.id - 1);
    if (nivelAnterior) return `/missao/${nivelAnterior.id}/${nivelAnterior.missoes.length}`;
    return null;
  })();

  const isNextLevel = proximaMissao !== null && missaoIdxNum >= nivel.missoes.length;
  const nextNivel = isNextLevel ? niveis.find((n) => n.id === nivel.id + 1) : null;
  const proximaLabel = nextNivel ? `Próximo nível – ${nextNivel.short}` : 'Próxima missão';

  const jaConcluida = isMissaoConcluida(missao.id);
  const hasExtras = getExtrasTotal(missao.id) > 0;
  const mainQuestion = missionDetail?.questions.find(q => q.kind === 'main') ?? null;
  const mainProgress = missionProgress?.questions.find(q => q.kind === 'main') ?? null;
  const jaRespondidaCorreta = mainProgress?.answeredCorrectly ?? false;

  const handleSubmit = async () => {
    if (selectedOptionId === null || !mainQuestion || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const key = getSubmissionKey(mainQuestion.slug);
      const result = await submitAnswer(missao.id, mainQuestion.slug, selectedOptionId, key);
      setRespondida(true);
      setIsCorrect(result.isCorrect);
      setExplanation(result.isCorrect ? result.explanation : result.wrongExplanation);
      aplicarSubmissao(missao.id, mainQuestion.slug, 'main', result);

      if (result.isCorrect) {
        setConchasGanhasAgora(result.earnedShells);
        await completarMissao(missao.id);
        setShowCelebration(true);
        celebrate();
        deleteBookmark(missao.id).catch(() => {});
        setShowBookmarkBanner(false);
      }
    } catch (err) {
      if (err instanceof ApiError && err.code === 'conflict') {
        // Já respondida corretamente antes (ex: reenvio depois de reload) — refaz o
        // fetch de progresso pra refletir o estado real em vez de tentar adivinhar.
        try {
          const progress = await getMissionProgress(missao.id);
          setMissionProgress(progress);
          hydrateMissionProgress(missao.id, progress);
          if (!jaConcluida) await completarMissao(missao.id);
        } catch {
          // se nem isso funcionar, deixa a mensagem de erro genérica abaixo
        }
      } else {
        setSubmitError(getApiErrorMessage(err, 'Missao.handleSubmit'));
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDesmarcar = async () => {
    setDesmarcando(true);
    try {
      await desmarcarMissao(missao.id);
    } finally {
      setDesmarcando(false);
    }
  };

  const handleCompletarSemPergunta = async () => {
    setCompletando(true);
    try {
      await completarMissao(missao.id);
    } finally {
      setCompletando(false);
    }
  };

  return (
    <div>
      {/* Navegação fixa */}
      <div className="sticky top-0 z-40 bg-bgPrimary shadow-sm border-b border-borderDark/10">
        <div className="max-w-3xl mx-auto">

          {/* Progress Bar: Animação via CSS Grid (Não treme o layout) */}
          <div className={`grid transition-all duration-500 ease-in-out ${
            showBar ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}>
            <div className="overflow-hidden">
              <div className="px-5 py-4">
                <ProgressBar
                  curriculum={niveis}
                  completedMissions={completed}
                  currentMissionId={missao.id}
                />
              </div>
            </div>
          </div>

          <nav className="border-t border-borderDark/5">
            <div className="px-5 h-11 flex items-center justify-between">
              <div className="flex-1">
                {missaoAnterior && (
                  <Link to={missaoAnterior} className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors">
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span className="sm:inline">Missão anterior</span>
                  </Link>
                )}
              </div>

              <div className="flex-1 flex justify-center">
                {!showBar && (
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2 px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-bold text-accent uppercase animate-in fade-in slide-in-from-top-1"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    Progresso
                  </button>
                )}
              </div>

              <div className="flex-1 flex justify-end">
                {proximaMissao ? (
                  <Link to={proximaMissao} className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80 transition-opacity">
                    {proximaLabel}
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link to="/conquistas" className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80 transition-opacity">
                    Ver conquistas
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </nav>

          <header className={`border-t border-borderDark/5 transition-all duration-500 ease-in-out ${showBar ? "py-4" : "py-2"}`}>
            <div className="px-5">
              <p className={`text-textSecondary text-[10px] uppercase tracking-wider transition-all duration-300 ${showBar ? "opacity-100 mb-1" : "opacity-0 h-0"}`}>
                {nivel.title} · Missão {missao.id.split('-')[1]}
              </p>
              <h1 className={`font-bold text-textPrimary flex items-center gap-2 transition-all duration-300 ${showBar ? "text-xl" : "text-sm"}`}>
                <MissionIcon
                  iconName={missao.icon}
                  completed={jaConcluida}
                  className={showBar ? "w-7 h-7 transition-all duration-300" : "w-6 h-6 transition-all duration-300"}
                />
                <span>
                  {!showBar && <span className="text-textSecondary font-normal">Missão {missao.id.split('-')[1]} — </span>}
                  {missao.title}
                </span>
              </h1>
            </div>
          </header>
        </div>
      </div>

      {/* Conteúdo da Missão */}
      <div className="max-w-3xl mx-auto pt-8 pb-16 px-5">
        {contentError && (
          <div className="mb-8 p-4 rounded-lg border border-danger bg-danger/10 text-sm text-danger">
            Não foi possível carregar esta missão. {getApiErrorMessage(contentError, 'Missao.content')}
          </div>
        )}

        {contentLoading && !contentError && (
          <section className="mb-8">
            <TheorySkeleton />
          </section>
        )}

        {missionDetail && (
          <section ref={theoryRef} className="mb-8 prose prose-invert max-w-none prose-headings:text-textPrimary prose-headings:font-bold prose-p:text-textBody prose-p:leading-relaxed prose-strong:text-textPrimary prose-blockquote:border-l-accent prose-blockquote:text-textSecondary prose-table:text-sm prose-th:text-textPrimary prose-td:text-textSecondary prose-li:text-textBody [&_h2]:border-l-2 [&_h2]:border-accent/50 [&_h2]:pl-3">
            {missionDetail.theory.split(/(\{\{cards?:[0-9,]+\}\}|\{\{[a-z][a-z-]*\}\})/).map((part, i) => {
              if (i % 2 === 1) {
                if (part.startsWith('{{duvida-')) { const d = missionDetail.faqs?.[part.slice(2, -2)]; if (d) return <DuvidaBlock key={i} pergunta={d.pergunta} resposta={d.resposta} />; }
                if (part === '{{ada-card-objeto}}') return <AdaCard key={i} nivel="objeto" />;
                if (part === '{{ada-card-rotulado}}') return <AdaCardRotulado key={i} />;
                if (part === '{{ada-card-metodos}}') return <AdaCard key={i} nivel="metodos" />;
                if (part === '{{diagrama-rotulos-valores}}') return <DiagramaRotulosValores key={i} />;
                if (part === '{{caderno-abertura}}') return <CadernoAbertura key={i} />;
                if (part === '{{dados-globais}}') return <DadosGlobais key={i} />;
                if (part === '{{caos-anotacoes}}') return <CaosAnotacoes key={i} />;
                if (part === '{{polvonilson-intro}}') return <PolvonilsonIntro key={i} />;
                if (part === '{{slides-poo}}') return <SlidesPOO key={i} />;
                if (part === '{{o-que-vai-encontrar}}') return <OQueVaiEncontrar key={i} />;
                if (part === '{{tres-polvos-acesso}}') return <TresPolvosAcesso key={i} />;
                if (part === '{{animacao-camuflagem}}') return <AnimacaoCamuflagem key={i} />;
                // Placeholders {{cards:N,M}} / {{card:N}} — não usados hoje em nenhuma missão
                // (a API não expõe `cards`, é apresentação pura), mas o resolvedor fica pronto.
                return null;
              }
              return (
                <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                  "polvonilson-intro": () => <PolvonilsonIntro />,
                  "caderno-abertura": () => <CadernoAbertura />,
                  "conceito": ({ children, note }: { children?: React.ReactNode; note?: string }) => <ConceitoBox note={note}>{children}</ConceitoBox>,
                  "destaque": ({ children }: { children?: React.ReactNode }) => <span className="underline decoration-wavy decoration-pink-400 decoration-2 underline-offset-4">{children}</span>,
                  "destaque-reto": ({ children }: { children?: React.ReactNode }) => <span className="underline decoration-[#c4b5fd] decoration-2 underline-offset-4">{children}</span>,
                  "destaque-marker": ({ children }: { children?: React.ReactNode }) => <span className="bg-yellow-200 text-gray-900 px-0.5 rounded-sm">{children}</span>,
                  "slides-poo": () => <SlidesPOO />,
                  "bolo-factory": () => <BoloFactory />,
                  "polvos-interativo": () => <PolvosInterativo />,
                  "tres-polvos-interativo": () => <TresPolvosInterativo />,
                  "ficha-interativo": () => <FichaInterativo />,
                  "ficha-acesso": () => <FichaAcesso />,
                  p: ({ node, children, ...props }: any) => {
                    const hasBlock = node?.children?.some(
                      (c: any) => c.type === 'element' && !['a','strong','em','code','span','br','destaque','destaque-reto','destaque-marker'].includes(c.tagName)
                    );
                    return hasBlock ? <>{children}</> : <p {...props}>{children}</p>;
                  },
                  code: CodeBlock,
                  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
                  table: ({ children }: { children?: React.ReactNode }) => (
                    <div className="overflow-x-auto my-4">
                      <table className="min-w-full border-collapse border border-slate-700 rounded-lg overflow-hidden">{children}</table>
                    </div>
                  ),
                  th: ({ children }: { children?: React.ReactNode }) => (
                    <th className="bg-slate-800 text-textPrimary font-semibold text-left px-4 py-2.5 border-b-2 border-slate-600 text-sm">
                      {children}
                    </th>
                  ),
                  td: ({ children }: { children?: React.ReactNode }) => (
                    <td className="text-textSecondary px-4 py-2.5 border-b border-slate-700/60 text-sm">
                      {children}
                    </td>
                  ),
                } as React.ComponentProps<typeof ReactMarkdown>['components']}>
                  {part}
                </ReactMarkdown>
              );
            })}
          </section>
        )}

        {/* Mini-jogo */}
        {missao.hasMinigame && missao.minigame_html && interativos[missao.minigame_html] && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-textPrimary mb-3">Mini-jogo interativo</h2>
            <div className="rounded-lg overflow-hidden border border-borderDark">
              <iframe srcDoc={interativos[missao.minigame_html]} title="Mini-jogo interativo" className="w-full" style={{ height: "480px", border: "none" }} sandbox="allow-scripts" />
            </div>
          </section>
        )}

        {/* Resumo */}
        {missionDetail?.summary && missionDetail.summary.length > 0 && (
          <hr className="border-borderDark my-10" />
        )}
        {missionDetail?.summary && missionDetail.summary.length > 0 && (
          <section className="mb-8 bg-bgSecondary border border-borderDark/60 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-textPrimary mb-4">Resumo</h2>
            <ul className="space-y-2">
              {missionDetail.summary.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-textBody">
                  <span className="text-accent mt-0.5 shrink-0">·</span>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                    p: ({ children }: { children?: React.ReactNode }) => <span>{children}</span>,
                    strong: ({ children }: { children?: React.ReactNode }) => <strong className="text-textPrimary">{children}</strong>,
                  }}>
                    {item}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Exercício */}
        {mainQuestion && (
          <>
            <hr className="border-borderDark my-10" />
            <section className="bg-bgSecondary border border-borderDark rounded-xl p-6">
              <h2 className="text-2xl font-bold text-textPrimary mb-4">Exercício</h2>

              {jaRespondidaCorreta && !respondida ? (
                <p className="text-success text-sm flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 shrink-0" /> Você já acertou esta pergunta.
                </p>
              ) : (
                <>
                  <p className="text-textPrimary mb-5">{mainQuestion.prompt}</p>
                  <fieldset className="space-y-3">
                    <legend className="sr-only">Opções de resposta</legend>
                    {mainQuestion.options.map((opcao) => {
                      let estilo = "border-borderDark";
                      if (respondida) {
                        if (opcao.id === selectedOptionId)
                          estilo = isCorrect
                            ? "border-success bg-success/10"
                            : "border-danger bg-danger/10";
                      } else if (opcao.id === selectedOptionId) {
                        estilo = "border-accent bg-accent/10";
                      }

                      return (
                        <label key={opcao.id} className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${estilo} ${respondida ? "cursor-default" : "hover:border-accent/50"}`}>
                          <input type="radio" name="exercicio" value={opcao.id} checked={selectedOptionId === opcao.id} disabled={respondida || submitting} onChange={() => setSelectedOptionId(opcao.id)} className="mt-0.5 accent-accent" />
                          <span className="text-textPrimary text-sm">{opcao.label}</span>
                        </label>
                      );
                    })}
                  </fieldset>

                  {submitError && (
                    <p className="mt-4 text-sm text-danger">{submitError} — tente responder de novo.</p>
                  )}

                  {respondida && (
                    <div
                      className={`mt-5 p-4 rounded-lg border ${isCorrect ? "bg-success/10 border-success" : "bg-danger/10 border-danger"}`}
                    >
                      <p
                        className={`font-semibold mb-1 ${isCorrect ? "text-success" : "text-danger"}`}
                      >
                        {isCorrect ? "✓ Correto!" : "✗ Não foi dessa vez."}
                      </p>
                      <p className="text-textSecondary text-sm">
                        {explanation ?? ''}
                      </p>
                      {isCorrect && conchasGanhasAgora !== null && (
                        <p className="text-success text-xs font-medium mt-2 flex items-center gap-1"><ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} /> Você ganhou {conchasGanhasAgora} conchas!</p>
                      )}
                      {!isCorrect && (
                        <p className="text-danger/70 text-xs mt-2 flex items-center gap-1"><ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} /> Próxima tentativa vale {getConchasValor(missao.id)} conchas</p>
                      )}
                    </div>
                  )}

                  <div className="mt-5 flex items-center gap-3">
                    {!respondida && (
                      <button onClick={handleSubmit} disabled={selectedOptionId === null || submitting} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                        {submitting ? 'Enviando...' : 'Responder'}
                      </button>
                    )}
                    {!respondida && (
                      <span className="text-xs text-textSecondary inline-flex items-center gap-1"><ShellIcon className="w-3.5 h-3.5 shrink-0" style={{ color: '#06B6D4' }} /> Vale {getConchasValor(missao.id)} conchas</span>
                    )}
                    {respondida && !isCorrect && (
                      <button onClick={() => { setSelectedOptionId(null); setRespondida(false); setSubmitError(null); }} className="px-5 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent hover:text-textPrimary transition-colors text-sm">
                        Tentar novamente
                      </button>
                    )}
                  </div>
                </>
              )}
            </section>
          </>
        )}

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center gap-2">
          {jaConcluida ? (
            <>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-success/15 border border-success text-success font-semibold">
                <CheckCircleIcon className="w-5 h-5" /> Concluída
              </div>
              <button onClick={handleDesmarcar} disabled={desmarcando} className="text-sm text-textSecondary hover:text-danger transition-colors disabled:opacity-40">
                desmarcar
              </button>
            </>
          ) : !mainQuestion && !contentLoading ? (
            <button onClick={handleCompletarSemPergunta} disabled={completando} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40">
              <CheckCircleIcon className="w-5 h-5" />
              {completando ? 'Marcando...' : 'Marcar como concluída'}
            </button>
          ) : null}
        </div>

        {/* Exercícios */}
        {hasExtras && (
          <div className="mt-8 bg-bgSecondary border border-borderDark rounded-xl p-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-textPrimary">Exercícios</p>
              <p className="text-xs text-textSecondary mt-0.5">
                Responda mais exercícios · ganhe mais conchas · evolua suas conquistas
              </p>
            </div>
            <button
              onClick={() => setShowBau(true)}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
            >
              <ListChecks className="w-4 h-4 shrink-0" weight="bold" />
              Exercícios
            </button>
          </div>
        )}

        {/* Referências bibliográficas */}
        {missionDetail?.bibliography && missionDetail.bibliography.length > 0 && (
          <ReferenciasBlock references={missionDetail.bibliography} />
        )}

        {/* Navegação de rodapé */}
        <div className="mt-8 pt-6 border-t border-borderDark flex items-center justify-between">
          <div className="flex items-center gap-5">
            {missaoAnterior && (
              <Link
                to={missaoAnterior}
                className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Missão anterior
              </Link>
            )}
          </div>
          {proximaMissao ? (
            <Link
              to={proximaMissao}
              className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80 transition-opacity"
            >
              {proximaLabel}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/conquistas"
              className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80 transition-opacity"
            >
              Ver conquistas
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Banner de marcador de página */}
      {showBookmarkBanner && bookmarkData && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4 pointer-events-none">
          <div className="pointer-events-auto bg-bgSecondary border border-borderDark rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
            <BookmarkSimple className="w-4 h-4 text-accent shrink-0" weight="fill" />
            <span className="text-sm text-textSecondary flex-1 min-w-0 truncate">
              {bookmarkData.sectionTitle
                ? <><span className="text-textPrimary font-medium">"{bookmarkData.sectionTitle}"</span></>
                : 'Continuar de onde parou'}
            </span>
            <button
              onClick={() => {
                window.scrollTo({ top: bookmarkData.scrollY, behavior: 'smooth' });
                setShowBookmarkBanner(false);
              }}
              className="text-accent text-xs font-semibold hover:opacity-80 transition-opacity shrink-0"
            >
              Continuar →
            </button>
            <button
              onClick={() => setShowBookmarkBanner(false)}
              className="text-textSecondary hover:text-textPrimary transition-colors shrink-0"
              aria-label="Fechar"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modal comemorativo */}
      {showCelebration && missao && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bgPrimary/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowCelebration(false)}
        >
          <div
            className="bg-bgSecondary border border-borderDark rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-pop-in"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-textPrimary mb-1">Missão Concluída!</h2>
            <p className="text-textSecondary text-sm mb-5">{missao.title}</p>

            <div className="flex justify-center mb-5">
              <HexBadge earned={true} emblem={resolveEmblem(missao.emblem ?? undefined, genero)} interactive={false} className="w-28">
                <MissionIcon iconName={missao.icon} completed={true} className="w-10 h-10" />
              </HexBadge>
            </div>

            <Link
              to="/conquistas"
              onClick={() => setShowCelebration(false)}
              className="inline-flex items-center gap-1 text-sm text-textSecondary hover:text-textPrimary transition-colors mb-5"
            >
              Ver conquistas
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>

            {conchasGanhasAgora !== null && (
              <p className="text-accent font-semibold text-sm mb-6 flex items-center justify-center gap-1">
                <ShellIcon className="w-4 h-4 shrink-0" style={{ color: '#06B6D4' }} /> +{conchasGanhasAgora} conchas
              </p>
            )}

            <div className="mt-2 flex flex-col gap-3">
              {hasExtras && (
                <button
                  onClick={() => {
                    setShowCelebration(false);
                    setShowBau(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
                >
                  <ListChecks className="w-4 h-4 shrink-0" weight="bold" />
                  Exercícios
                </button>
              )}
              {proximaMissao ? (
                <Link
                  to={proximaMissao}
                  onClick={() => setShowCelebration(false)}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-accent text-bgPrimary font-bold hover:opacity-90 transition-opacity"
                >
                  Seguir para a próxima missão
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              ) : null}
              <button
                onClick={() => setShowCelebration(false)}
                className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
              >
                Ficar nesta missão
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Exercícios */}
      {showBau && hasExtras && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 bg-bgPrimary/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowBau(false)}
        >
          <div
            className="bg-bgPrimary border border-borderDark rounded-2xl w-full max-w-xl shadow-2xl animate-pop-in max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-borderDark/30 shrink-0">
              <div>
                <h2 className="text-lg font-bold text-textPrimary">Exercícios</h2>
                <p className="text-xs text-textSecondary">{missao.title}</p>
              </div>
              <button
                onClick={() => setShowBau(false)}
                className="text-textSecondary hover:text-textPrimary transition-colors"
                aria-label="Fechar"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5">
              <Exercicios
                missaoId={missao.id}
                proximaMissao={proximaMissao}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Missao;
