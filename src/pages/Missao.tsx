import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import BoloFactory from "../components/missoes/nivel_1/missao_5/BoloFactory";
import PolvosInterativo from "../components/missoes/nivel_1/missao_2/PolvosInterativo";
import TresPolvosInterativo from "../components/missoes/nivel_1/missao_2/TresPolvosInterativo";
import FichaInterativo from "../components/missoes/nivel_1/missao_3/FichaInterativo";
import FichaAcesso from "../components/missoes/nivel_1/missao_3/FichaAcesso";
import PolvonilsonIntro from "../components/missoes/nivel_1/missao_0/PolvonilsonIntro";
import CadernoAbertura from "../components/missoes/nivel_1/missao_1/CadernoAbertura";
import DadosGlobais from "../components/missoes/nivel_1/missao_1/DadosGlobais";
import CaosAnotacoes from "../components/missoes/nivel_1/missao_1/CaosAnotacoes";
import DuvidaBlock from "../components/missoes/reutilizaveis/DuvidaBlock";
import SlidesPOO from "../components/missoes/nivel_1/missao_1/SlidesPOO";
import SlideCard from "../components/SlideCard";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { niveis } from "../data/curriculum";
import { useProgress } from "../hooks/useProgress";
import { useCelebration } from "../hooks/useCelebration";
import { resolveEmblem } from "../utils/emblem";
import PageWrapper from "../components/PageWrapper";
import CodeBlock from "../components/CodeBlock";
import MissionIcon from "../components/MissionIcon";
import HexBadge from "../components/HexBadge";
import interativoHtml from "../assets/interativos/nivel_1_missao_7.html?raw";
import ProgressBar from '../components/ProgressBar';
import ConceitoBox from '../components/ConceitoBox';
import OQueVaiEncontrar from '../components/missoes/nivel_1/missao_0/OQueVaiEncontrar';
import ReferenciasBlock from '../components/ReferenciasBlock';

const interativos: Record<string, string> = {
  "interativos/nivel_1_missao_7.html": interativoHtml,
};

// Parâmetros de ajuste da animação
const Limite_para_esconder = 200; //px
const Limite_para_mostrar = 50;  //px

interface LinkedSlideRowProps {
  cards: { title?: string; className?: string; slides: React.ReactNode[] }[];
}

const LinkedSlideRow: React.FC<LinkedSlideRowProps> = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const maxSlides = Math.max(...cards.map((c) => c.slides.length));
  const isFirst = current === 0;
  const isLast = current === maxSlides - 1;

  const navigate = (next: number) => {
    setCurrent(next);
    requestAnimationFrame(() => {
      rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  return (
    <div ref={rowRef} className="not-prose my-6">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {cards.map((card, pos) => (
          <React.Fragment key={pos}>
            {pos > 0 && (
              <div className="flex items-center justify-center shrink-0">
                <span className="text-2xl font-bold text-borderDark select-none">✕</span>
              </div>
            )}
            <SlideCard
              title={card.title}
              className="flex-1 min-w-0 my-0"
              slides={card.slides}
              externalCurrent={Math.min(current, card.slides.length - 1)}
              hideNav
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-between px-2 pt-3">
        <div className="flex-1">
          {!isFirst && (
            <button
              onClick={() => navigate(current - 1)}
              className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              ← Anterior
            </button>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxSlides }).map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-accent' : 'bg-borderDark'
              }`}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          {isLast ? (
            <button
              onClick={() => navigate(0)}
              className="text-sm text-accent hover:text-secondary transition-colors"
            >
              Voltar ao início
            </button>
          ) : (
            <button
              onClick={() => navigate(current + 1)}
              className="text-sm text-accent hover:text-secondary transition-colors"
            >
              Próximo →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Missao: React.FC = () => {
  const { nivelIdx, missaoIdx } = useParams<{
    nivelIdx: string;
    missaoIdx: string;
  }>();
  const { completarMissao, desmarcarMissao, isMissaoConcluida, completed, jaGanhouConchas, genero } = useProgress();
  const { celebrate } = useCelebration();

  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [conchasGanhasAgora, setConchasGanhasAgora] = useState<number | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  // Estado do Header Retrátil
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    setSelecionada(null);
    setRespondida(false);
    setTentativas(0);
    setConchasGanhasAgora(null);
    setShowCelebration(false);
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

  if (!nivel || !missao) {
    return (
      <PageWrapper className="max-w-3xl pb-12">
        <p className="text-textSecondary">Missão não encontrada.</p>
        <Link to="/trilha" className="text-accent hover:underline mt-4 inline-block">
          ← Voltar à trilha
        </Link>
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

  const jaConcluida = isMissaoConcluida(missao.id);
  const acertou = missao.exercise ? selecionada === missao.exercise.correct : false;

  const conchasValor = (t: number) => t <= 0 ? 15 : t === 1 ? 10 : 5;

  const handleSubmit = () => {
    if (selecionada === null) return;
    const novasTentativas = tentativas + 1;
    setTentativas(novasTentativas);
    setRespondida(true);
    if (selecionada === missao.exercise!.correct) {
      if (!jaGanhouConchas(missao.id)) {
        setConchasGanhasAgora(conchasValor(tentativas));
      }
      completarMissao(missao.id, novasTentativas);
      setShowCelebration(true);
      celebrate();
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
                />
              </div>
            </div>
          </div>

          <nav className="border-t border-borderDark/5">
            <div className="px-5 h-11 flex items-center gap-4 justify-between">
              <div className="flex items-center gap-4 justify-between">                
                <Link to="/trilha" className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors">
                  <ArrowLeftIcon className="w-4 h-4" />
                  <span className="sm:inline">Trilha</span>
                </Link>
                {missaoAnterior && (
                  <Link to={missaoAnterior} className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors">
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span className="sm:inline">Anterior</span>
                  </Link>
                )}

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

              <Link to={proximaMissao || "/conquistas"} className="inline-flex items-center gap-2 text-sm text-accent font-semibold hover:opacity-80 transition-opacity">
                {proximaMissao ? "Próxima" : "Conquistas"}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
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
        <section className="mb-8 prose prose-invert max-w-none prose-headings:text-textPrimary prose-headings:font-bold prose-p:text-textBody prose-p:leading-relaxed prose-strong:text-textPrimary prose-blockquote:border-l-accent prose-blockquote:text-textSecondary prose-table:text-sm prose-th:text-textPrimary prose-td:text-textSecondary prose-li:text-textBody">
          {missao.theory.split(/(\{\{cards?:[0-9,]+\}\}|\{\{[a-z][a-z-]*\}\})/).map((part, i) => {
            if (i % 2 === 1) {
              if (part === '{{duvida-objeto-unico}}') return <DuvidaBlock key={i} pergunta="O que define quais características e ações farão parte de um objeto?" resposta="Essa decisão cabe ao modelador — a pessoa que está criando aquele objeto. Ela vai decidir o que é importante representar e o que pode ser ignorado. Você verá isso em detalhes nas missões seguintes." />;
              if (part === '{{caderno-abertura}}') return <CadernoAbertura key={i} />;
              if (part === '{{dados-globais}}') return <DadosGlobais key={i} />;
              if (part === '{{caos-anotacoes}}') return <CaosAnotacoes key={i} />;
              if (part === '{{polvonilson-intro}}') return <PolvonilsonIntro key={i} />;
              if (part === '{{slides-poo}}') return <SlidesPOO key={i} />;
              if (part === '{{o-que-vai-encontrar}}') return <OQueVaiEncontrar key={i} />;
              const indices = part.match(/\d+/g)!.map(Number);
              const isRow = part.startsWith("{{cards:");
              const renderCard = (idx: number, className?: string) => {
                const card = missao.cards?.[idx];
                if (!card) return null;
                return (
                  <SlideCard
                    key={`card-${idx}`}
                    title={card.title}
                    className={className}
                    slides={card.slides.map((s, j) => (
                      <ReactMarkdown key={j} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                        p: ({ children }: { children?: React.ReactNode }) => <p className="text-textBody leading-relaxed m-0">{children}</p>,
                        strong: ({ children }: { children?: React.ReactNode }) => <strong className="text-textPrimary">{children}</strong>,
                        table: ({ children }: { children?: React.ReactNode }) => (
                          <div className="overflow-x-auto my-4">
                            <table className="min-w-full">{children}</table>
                          </div>
                        ),
                      }}>
                        {s}
                      </ReactMarkdown>
                    ))}
                  />
                );
              };
              if (isRow) {
                const rowCards = indices.map((idx) => {
                  const card = missao.cards?.[idx];
                  if (!card) return null;
                  return {
                    title: card.title,
                    slides: card.slides.map((s, j) => (
                      <ReactMarkdown key={j} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                        p: ({ children }: { children?: React.ReactNode }) => <p className="text-textBody leading-relaxed m-0">{children}</p>,
                        strong: ({ children }: { children?: React.ReactNode }) => <strong className="text-textPrimary">{children}</strong>,
                        table: ({ children }: { children?: React.ReactNode }) => (
                          <div className="overflow-x-auto my-4">
                            <table className="min-w-full">{children}</table>
                          </div>
                        ),
                      }}>
                        {s}
                      </ReactMarkdown>
                    )),
                  };
                }).filter(Boolean) as { title?: string; slides: React.ReactNode[] }[];
                return <LinkedSlideRow key={i} cards={rowCards} />;
              }
              return renderCard(indices[0]);
            }
            return (
              <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                "polvonilson-intro": () => <PolvonilsonIntro />,
                "caderno-abertura": () => <CadernoAbertura />,
                "conceito": ({ children }: { children?: React.ReactNode }) => <ConceitoBox>{children}</ConceitoBox>,
                "destaque": ({ children }: { children?: React.ReactNode }) => <span className="underline decoration-wavy decoration-pink-400 decoration-2 underline-offset-4">{children}</span>,
                "slides-poo": () => <SlidesPOO />,
                "bolo-factory": () => <BoloFactory />,
                "polvos-interativo": () => <PolvosInterativo />,
                "tres-polvos-interativo": () => <TresPolvosInterativo />,
                "ficha-interativo": () => <FichaInterativo />,
                "ficha-acesso": () => <FichaAcesso />,
                p: ({ node, children, ...props }: any) => {
                  const hasBlock = node?.children?.some(
                    (c: any) => c.type === 'element' && !['a','strong','em','code','span','br','destaque'].includes(c.tagName)
                  );
                  return hasBlock ? <>{children}</> : <p {...props}>{children}</p>;
                },
                code: CodeBlock,
                pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
                table: ({ children }: { children?: React.ReactNode }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full">{children}</table>
                  </div>
                ),
              } as React.ComponentProps<typeof ReactMarkdown>['components']}>
                {part}
              </ReactMarkdown>
            );
          })}
        </section>

        {/* Referências bibliográficas */}
        {missao.references && missao.references.length > 0 && (
          <ReferenciasBlock references={missao.references} />
        )}

        {/* Mini-jogo */}
        {missao.has_interativo && missao.interativo_html && interativos[missao.interativo_html] && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-textPrimary mb-3">Mini-jogo interativo</h2>
            <div className="rounded-lg overflow-hidden border border-borderDark">
              <iframe srcDoc={interativos[missao.interativo_html]} title="Mini-jogo interativo" className="w-full" style={{ height: "480px", border: "none" }} sandbox="allow-scripts" />
            </div>
          </section>
        )}

        {/* Exercício */}
        {missao.exercise && (
          <>
            <hr className="border-borderDark my-10" />
            <section className="bg-bgSecondary border border-borderDark rounded-xl p-6">
              <h2 className="text-2xl font-bold text-textPrimary mb-4">Exercício</h2>
              {jaGanhouConchas(missao.id) && !respondida && (
                <p className="text-xs text-textSecondary bg-bgPrimary border border-borderDark rounded-lg px-3 py-2 mb-4">
                  Você já completou este exercício. Tentar novamente não gera novas conchas.
                </p>
              )}
              <p className="text-textPrimary mb-5">{missao.exercise.question}</p>
              <fieldset className="space-y-3">
                <legend className="sr-only">Opções de resposta</legend>
                {missao.exercise.options.map((opcao, i) => {
                  let estilo = "border-borderDark";
                  if (respondida) {
                    if (i === selecionada)
                      estilo = acertou
                        ? "border-success bg-success/10"
                        : "border-danger bg-danger/10";
                  } else if (i === selecionada) {
                    estilo = "border-accent bg-accent/10";
                  }

                  return (
                    <label key={i} className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${estilo} ${respondida ? "cursor-default" : "hover:border-accent/50"}`}>
                      <input type="radio" name="exercicio" value={i} checked={selecionada === i} disabled={respondida} onChange={() => setSelecionada(i)} className="mt-0.5 accent-accent" />
                      <span className="text-textPrimary text-sm">{opcao}</span>
                    </label>
                  );
                })}
              </fieldset>
              {respondida && (
                <div
                  className={`mt-5 p-4 rounded-lg border ${acertou ? "bg-success/10 border-success" : "bg-danger/10 border-danger"}`}
                >
                  <p
                    className={`font-semibold mb-1 ${acertou ? "text-success" : "text-danger"}`}
                  >
                    {acertou ? "✓ Correto!" : "✗ Não foi dessa vez."}
                  </p>
                  <p className="text-textSecondary text-sm">
                    {acertou
                      ? missao.exercise.explanation
                      : (selecionada !== null && missao.exercise.wrong_explanations?.[selecionada]) || missao.exercise.explanation}
                  </p>
                  {acertou && conchasGanhasAgora !== null && (
                    <p className="text-success text-xs font-medium mt-2">🐚 Você ganhou {conchasGanhasAgora} conchas!</p>
                  )}
                  {!acertou && !jaGanhouConchas(missao.id) && (
                    <p className="text-danger/70 text-xs mt-2">🐚 Próxima tentativa vale {tentativas === 1 ? 10 : 5} conchas</p>
                  )}
                </div>
              )}
              <div className="mt-5 flex items-center gap-3">
                {!respondida && (
                  <button onClick={handleSubmit} disabled={selecionada === null} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    Responder
                  </button>
                )}
                {!respondida && !jaGanhouConchas(missao.id) && (
                  <span className="text-xs text-textSecondary">🐚 Vale {conchasValor(tentativas)} conchas</span>
                )}
                {respondida && !acertou && (
                  <button onClick={() => { setSelecionada(null); setRespondida(false); }} className="px-5 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent hover:text-textPrimary transition-colors text-sm">
                    Tentar novamente
                  </button>
                )}
                {respondida && acertou && (
                  <button onClick={() => { setSelecionada(null); setRespondida(false); setTentativas(0); setConchasGanhasAgora(null); }} className="text-xs text-textSecondary hover:text-textPrimary transition-colors">
                    Refazer
                  </button>
                )}
              </div>
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
              <button onClick={() => desmarcarMissao(missao.id)} className="text-sm text-textSecondary hover:text-danger transition-colors">
                desmarcar
              </button>
            </>
          ) : !missao.exercise ? (
            <button onClick={() => completarMissao(missao.id)} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
              <CheckCircleIcon className="w-5 h-5" />
              Marcar como concluída
            </button>
          ) : null}
        </div>

        {/* Navegação de rodapé */}
        <div className="mt-8 pt-6 border-t border-borderDark flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              to="/trilha"
              className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Voltar à trilha
            </Link>
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
              className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              Próxima missão
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/conquistas"
              className="inline-flex items-center gap-2 text-sm text-textSecondary hover:text-textPrimary transition-colors"
            >
              Ver conquistas
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

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
              <HexBadge earned={true} emblem={resolveEmblem(missao.emblem, genero)} interactive={false} className="w-28">
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
              <p className="text-accent font-semibold text-sm mb-6">
                🐚 +{conchasGanhasAgora} conchas
              </p>
            )}

            <div className="mt-2 flex flex-col gap-3">
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
    </div>
  );
};

export default Missao;