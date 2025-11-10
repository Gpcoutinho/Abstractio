import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import modules from '../data/modules';
import { useProgress } from '../contexts/progressStore';

const LessonPage: React.FC = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const { modules: progressModules, toggleLesson } = useProgress();

  const module = useMemo(() => modules.find((m) => m.id === moduleId), [moduleId]);
  const lesson = useMemo(() => module?.lessons.find((l) => l.id === lessonId), [module, lessonId]);

  useEffect(() => {
    if (lesson) document.title = `${lesson.title} — ${module?.title ?? 'Curso'}`;
    return () => {
      document.title = 'Abstractio';
    };
  }, [lesson, module]);

  if (!module || !lesson) {
    return (
      <div className="app-wrapper max-w-3xl mx-auto pt-28 pb-12">
        <section className="bg-bgPrimary rounded-lg p-8 shadow-md border border-borderDark">
          <h2 className="text-xl font-semibold text-textPrimary">Lição não encontrada</h2>
          <p className="text-textSecondary mt-2">A lição que você tentou acessar não existe. <Link to="/poo" className="text-accent hover:underline">Voltar ao curso POO</Link></p>
        </section>
      </div>
    );
  }

  // find completion state from progress context
  const progModule = progressModules.find((m) => m.id === module.id as any);
  const progLesson = progModule?.lessons.find((l) => l.id === lesson.id as any);
  const completed = !!progLesson?.completed;

  const idx = module.lessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? module.lessons[idx - 1] : null;
  const next = idx < module.lessons.length - 1 ? module.lessons[idx + 1] : null;
  const moduleIndex = modules.findIndex((m) => m.id === module.id);
  const nextModule = moduleIndex >= 0 && moduleIndex < modules.length - 1 ? modules[moduleIndex + 1] : null;

  // ExerciseBlock: small self-contained MCQ used when a lesson-specific exercise isn't provided
  const ExerciseBlock: React.FC = () => {
    const [selected, setSelected] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const correct = 'b';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitted(true);
    };

    const handleReset = () => {
      setSelected('');
      setSubmitted(false);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset>
          <legend className="sr-only">Opções</legend>

          <label className={`block p-3 rounded border ${selected === 'a' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
            <input
              type="radio"
              name="option"
              value="a"
              checked={selected === 'a'}
              onChange={() => setSelected('a')}
              className="mr-3"
            />
            (A) Uma instância específica ou exemplo concreto.
          </label>

          <label className={`block p-3 rounded border ${selected === 'b' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
            <input
              type="radio"
              name="option"
              value="b"
              checked={selected === 'b'}
              onChange={() => setSelected('b')}
              className="mr-3"
            />
            (B) Uma definição que descreve propriedades e comportamentos — descrição conceitual.
          </label>

          <label className={`block p-3 rounded border ${selected === 'c' ? 'border-accent/70 bg-accent/10' : 'border-borderDark'} cursor-pointer`}>
            <input
              type="radio"
              name="option"
              value="c"
              checked={selected === 'c'}
              onChange={() => setSelected('c')}
              className="mr-3"
            />
            (C) Uma ferramenta ou biblioteca externa usada para estender a linguagem.
          </label>
        </fieldset>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!selected}
            className="hero-cta inline-flex items-center justify-center px-4 py-2 rounded-md disabled:opacity-50"
          >
            Enviar
          </button>

          <button type="button" onClick={handleReset} className="px-4 py-2 rounded-md border border-borderDark">
            Reiniciar
          </button>
        </div>

        {submitted && (
          <div className={`mt-4 p-4 rounded-md border ${selected === correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            {selected === correct ? (
              <p className="text-green-800 font-semibold">Correto! Bom trabalho.</p>
            ) : (
              <p className="text-red-800 font-semibold">Resposta incorreta. Tente novamente ou leia a teoria acima.</p>
            )}

            <details className="mt-3 text-textPrimary">
              <summary className="cursor-pointer">Ver explicação</summary>
              <p className="mt-2">Uma breve explicação ou dica pode ser colocada aqui para complementar o feedback.</p>
            </details>
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="app-wrapper max-w-3xl mx-auto pt-28 pb-12">
      <section className="bg-bgPrimary rounded-lg p-8 shadow-md border border-borderDark">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-textPrimary">{lesson.title}</h1>
            <p className="text-textSecondary mt-1">{module.title}</p>
          </div>

          <div className="flex flex-col items-end ml-auto text-right">
            <Link to="/poo" className="inline-flex items-center px-3 py-1 rounded-md border border-borderDark text-textPrimary hover:bg-bgPrimary mb-3">
              <ArrowLeftIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Voltar ao curso
            </Link>

            <button
              onClick={() => toggleLesson(module.id as any, lesson.id as any)}
              className={`px-3 py-1 rounded-md border ${completed ? 'bg-green-50 border-green-300 text-green-800' : 'border-borderDark'}`}
            >
              {completed ? 'Concluída' : 'Marcar como concluída'}
            </button>
          </div>
        </div>

        <article className="prose max-w-none text-textPrimary" dangerouslySetInnerHTML={{ __html: lesson.content }} />

        {/* Exercise block (same scheme as LessonClasses) */}
        <section className="bg-bgSecondary p-6 rounded-lg shadow-sm mt-6">
          <h2 className="text-2xl font-semibold mb-3 text-textPrimary">Exercício prático</h2>
          <p className="text-textPrimary mb-4">Escolha a alternativa que melhor descreve <strong>{lesson.title}</strong>:</p>

          <ExerciseBlock />
        </section>

        <div className="mt-6 flex items-start justify-between">
          <div>
            {prev ? (
              <Link to={`/modules/${module.id}/lessons/${prev.id}`} className="text-accent hover:underline">← {prev.title}</Link>
            ) : (
              <span className="text-textSecondary">Primeira lição</span>
            )}
          </div>

          <div className="flex flex-col items-end">
            {next ? (
              <Link to={`/modules/${module.id}/lessons/${next.id}`} className="text-accent hover:underline">{next.title} →</Link>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-accent font-semibold">Módulo Completo!</span>
                {nextModule && nextModule.lessons && nextModule.lessons.length > 0 && (
                  <Link
                    to={`/modules/${nextModule.id}/lessons/${nextModule.lessons[0].id}`}
                    className="hero-cta inline-flex items-center px-3 py-1 rounded-md"
                  >
                    Próximo Módulo
                  </Link>
                )}
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
};

export default LessonPage;
