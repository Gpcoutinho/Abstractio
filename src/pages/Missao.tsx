import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BoloFactory from '../components/BoloFactory';
import { ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { niveis } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import ButtonCTA from '../components/ButtonCTA';
import PageWrapper from '../components/PageWrapper';
import CodeBlock from '../components/CodeBlock';
import interativoHtml from '../assets/interativos/nivel_1_missao_7.html?raw';

const interativos: Record<string, string> = {
  'interativos/nivel_1_missao_7.html': interativoHtml,
};

const Missao: React.FC = () => {
  const { nivelIdx, missaoIdx } = useParams<{ nivelIdx: string; missaoIdx: string }>();
  const { completarMissao, desmarcarMissao, isMissaoConcluida } = useProgress();

  const [selecionada, setSelecionada] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);

  useEffect(() => {
    setSelecionada(null);
    setRespondida(false);
  }, [nivelIdx, missaoIdx]);

  const nivel = niveis.find(n => n.id === Number(nivelIdx));
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
    if (missaoIdxNum < nivel.missoes.length) {
      return `/missao/${nivel.id}/${missaoIdxNum + 1}`;
    }
    const proximoNivel = niveis.find(n => n.id === nivel.id + 1);
    if (proximoNivel) return `/missao/${proximoNivel.id}/1`;
    return null;
  })();

  const missaoAnterior = (() => {
    if (missaoIdxNum > 1) {
      return `/missao/${nivel.id}/${missaoIdxNum - 1}`;
    }
    const nivelAnterior = niveis.find(n => n.id === nivel.id - 1);
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
    <div className="pt-20">

      {/* Navegação fixa */}
      <nav className="sticky top-20 z-40 bg-bgPrimary border-b border-accent/20">
        <div className="max-w-3xl mx-auto px-5 h-11 flex items-center justify-between">
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
      </nav>

      <div className="max-w-3xl mx-auto pt-8 pb-16 px-5">

      {/* Título */}
      <header className="mb-8">
        <p className="text-textSecondary text-sm mb-1">{nivel.title}</p>
        <h1 className="text-2xl font-bold text-textPrimary">
          {missao.icon} {missao.title}
        </h1>
      </header>

      {/* Teoria */}
      <section className="mb-8 prose prose-invert max-w-none
        prose-headings:text-textPrimary prose-headings:font-bold
        prose-p:text-textBody prose-p:leading-relaxed
        prose-strong:text-textPrimary
        prose-blockquote:border-l-accent prose-blockquote:text-textSecondary
        prose-table:text-sm prose-th:text-textPrimary prose-td:text-textSecondary
        prose-li:text-textBody">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{ 'bolo-factory': () => <BoloFactory />, code: CodeBlock }}
        >
          {missao.theory}
        </ReactMarkdown>
      </section>

      {/* Mini-jogo */}
      {missao.has_interativo && missao.interativo_html && interativos[missao.interativo_html] && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-textPrimary mb-3">Mini-jogo interativo</h2>
          <div className="rounded-lg overflow-hidden border border-borderDark">
            <iframe
              srcDoc={interativos[missao.interativo_html]}
              title="Mini-jogo interativo"
              className="w-full"
              style={{ height: '480px', border: 'none' }}
              sandbox="allow-scripts"
            />
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
                let estilo = 'border-borderDark';
                if (respondida) {
                  if (i === missao.exercise!.correct) estilo = 'border-success bg-success/10';
                  else if (i === selecionada) estilo = 'border-danger bg-danger/10';
                } else if (i === selecionada) {
                  estilo = 'border-accent bg-accent/10';
                }

                return (
                  <label
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${estilo} ${respondida ? 'cursor-default' : 'hover:border-accent/50'}`}
                  >
                    <input
                      type="radio"
                      name="exercicio"
                      value={i}
                      checked={selecionada === i}
                      disabled={respondida}
                      onChange={() => setSelecionada(i)}
                      className="mt-0.5 accent-accent"
                    />
                    <span className="text-textPrimary text-sm">{opcao}</span>
                  </label>
                );
              })}
            </fieldset>

            {/* Feedback */}
            {respondida && (
              <div className={`mt-5 p-4 rounded-lg border ${acertou ? 'bg-success/10 border-success' : 'bg-danger/10 border-danger'}`}>
                <p className={`font-semibold mb-1 ${acertou ? 'text-success' : 'text-danger'}`}>
                  {acertou ? '✓ Correto!' : '✗ Não foi dessa vez.'}
                </p>
                <p className="text-textSecondary text-sm">{missao.exercise.explanation}</p>
              </div>
            )}

            {/* Botões */}
            <div className="mt-5 flex items-center gap-3">
              {!respondida && (
                <ButtonCTA
                  compact
                  onClick={handleSubmit}
                  disabled={selecionada === null}
                  className="disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Responder
                </ButtonCTA>
              )}

              {respondida && !acertou && (
                <button
                  onClick={() => { setSelecionada(null); setRespondida(false); }}
                  className="px-5 py-2 rounded-lg border border-borderDark text-textSecondary hover:border-accent hover:text-textPrimary transition-colors text-sm"
                >
                  Tentar novamente
                </button>
              )}
            </div>
          </section>
        </>
      )}

      {/* Marcar como concluída */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => jaConcluida ? desmarcarMissao(missao.id) : completarMissao(missao.id)}
          className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
            jaConcluida
              ? 'bg-success/15 border border-success text-success hover:bg-danger/10 hover:border-danger/60 hover:text-danger'
              : 'text-white bg-gradient-to-r from-primary to-accent shadow-[0_6px_18px_rgba(76,29,149,0.12)] hover:-translate-y-[3px]'
          }`}
        >
          {jaConcluida ? (
            <span className="relative inline-flex items-center justify-center">
              <span className="inline-flex items-center gap-2 transition-opacity group-hover:opacity-0">
                <CheckCircleIcon className="w-5 h-5" /> Concluída
              </span>
              <span className="absolute inset-0 inline-flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                Desmarcar
              </span>
            </span>
          ) : 'Marcar como concluída'}
        </button>
      </div>

      </div>
    </div>
  );
};

export default Missao;
