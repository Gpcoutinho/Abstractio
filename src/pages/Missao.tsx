import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BoloFactory from "../components/BoloFactory";
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
import PageWrapper from "../components/PageWrapper";
import CodeBlock from "../components/CodeBlock";
import MissionIcon from "../components/MissionIcon";
import interativoHtml from "../assets/interativos/nivel_1_missao_7.html?raw";
import ProgressBar from '../components/ProgressBar';

const interativos: Record<string, string> = {
  "interativos/nivel_1_missao_7.html": interativoHtml,
};

// Parâmetros de ajuste da animação
const Limite_para_esconder = 200; //px
const Limite_para_mostrar = 50;  //px

const Missao: React.FC = () => {
  const { nivelIdx, missaoIdx } = useParams<{
    nivelIdx: string;
    missaoIdx: string;
  }>();
  const { completarMissao, desmarcarMissao, isMissaoConcluida, completed } = useProgress();

  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  
  // Estado do Header Retrátil
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    setSelecionada(null);
    setRespondida(false);
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

  const handleSubmit = () => {
    if (selecionada === null) return;
    setRespondida(true);
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
                  currentNivel={nivel.id} 
                  currentMissao={missaoIdxNum}
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
                {nivel.title}
              </p>
              <h1 className={`font-bold text-textPrimary flex items-center gap-2 transition-all duration-300 ${showBar ? "text-xl" : "text-sm"}`}>
                <MissionIcon
                  iconName={missao.icon}
                  completed={jaConcluida}
                  className={showBar ? "w-7 h-7 transition-all duration-300" : "w-6 h-6 transition-all duration-300"}
                />
                {missao.title}
              </h1>
            </div>
          </header>
        </div>
      </div>

      {/* Conteúdo da Missão */}
      <div className="max-w-3xl mx-auto pt-8 pb-16 px-5">
        <section className="mb-8 prose prose-invert max-w-none prose-headings:text-textPrimary prose-headings:font-bold prose-p:text-textBody prose-p:leading-relaxed prose-strong:text-textPrimary prose-blockquote:border-l-accent prose-blockquote:text-textSecondary prose-table:text-sm prose-th:text-textPrimary prose-td:text-textSecondary prose-li:text-textBody">
          {missao.theory.split(/(\{\{cards?:[0-9,]+\}\})/).map((part, i) => {
            if (i % 2 === 1) {
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
                        p: ({ children }) => <p className="text-textBody leading-relaxed m-0">{children}</p>,
                        strong: ({ children }) => <strong className="text-textPrimary">{children}</strong>,
                      }}>
                        {s}
                      </ReactMarkdown>
                    ))}
                  />
                );
              };
              if (isRow) {
                return (
                  <div key={i} className="not-prose flex flex-col md:flex-row items-stretch gap-4 my-6">
                    {indices.map((idx, pos) => (
                      <React.Fragment key={idx}>
                        {pos > 0 && (
                          <div className="flex items-center justify-center shrink-0">
                            <span className="text-2xl font-bold text-borderDark select-none">✕</span>
                          </div>
                        )}
                        {renderCard(idx, "flex-1 min-w-0 my-0")}
                      </React.Fragment>
                    ))}
                  </div>
                );
              }
              return renderCard(indices[0]);
            }
            return (
              <ReactMarkdown key={i} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                "bolo-factory": () => <BoloFactory />,
                code: CodeBlock,
                pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
              } as any}>
                {part}
              </ReactMarkdown>
            );
          })}
        </section>

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
              <p className="text-textPrimary mb-5">{missao.exercise.question}</p>
              <fieldset className="space-y-3">
                <legend className="sr-only">Opções de resposta</legend>
                {missao.exercise.options.map((opcao, i) => {
                  let estilo = "border-borderDark";
                  if (respondida) {
                    if (i === missao.exercise!.correct) estilo = "border-success bg-success/10";
                    else if (i === selecionada) estilo = "border-danger bg-danger/10";
                  } else if (i === selecionada) estilo = "border-accent bg-accent/10";
                  return (
                    <label key={i} className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${estilo} ${respondida ? "cursor-default" : "hover:border-accent/50"}`}>
                      <input type="radio" name="exercicio" value={i} checked={selecionada === i} disabled={respondida} onChange={() => setSelecionada(i)} className="mt-0.5 accent-accent" />
                      <span className="text-textPrimary text-sm">{opcao}</span>
                    </label>
                  );
                })}
              </fieldset>
              {respondida && (
                <div className={`mt-5 p-4 rounded-lg border ${acertou ? "bg-success/10 border-success" : "bg-danger/10 border-danger"}`}>
                  <p className={`font-semibold mb-1 ${acertou ? "text-success" : "text-danger"}`}>{acertou ? "✓ Correto!" : "✗ Não foi dessa vez."}</p>
                  <p className="text-textSecondary text-sm">{missao.exercise.explanation}</p>
                </div>
              )}
              <div className="mt-5 flex items-center gap-3">
                {!respondida && (
                  <button onClick={handleSubmit} disabled={selecionada === null} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
                    Responder
                  </button>
                )}
                {respondida && !acertou && (
                  <button onClick={() => { setSelecionada(null); setRespondida(false); }} className="px-5 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent hover:text-textPrimary transition-colors text-sm">
                    Tentar novamente
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
          ) : (
            <button onClick={() => completarMissao(missao.id)} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors">
              <CheckCircleIcon className="w-5 h-5" />
              Marcar como concluída
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Missao;