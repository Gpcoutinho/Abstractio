import React from 'react';
import ModuleCard from './ModuleCard';
import { useProgress } from '../contexts/progressStore';

type CoursePageProps = {
  title: string;
  overview: string;
};

const CoursePage: React.FC<CoursePageProps> = ({ title, overview }) => {
  const { modules, toggleLesson, syncing } = useProgress();

  return (
    <div className="app-wrapper max-w-4xl mx-auto pt-28 pb-12">
      <section className="bg-bgPrimary rounded-lg p-8 shadow-md border border-borderDark">
        <div className="flex flex-col items-center text-center gap-6">
          <div
            className="w-20 h-20 rounded-md flex items-center justify-center"
            aria-hidden="true"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5H6a12.083 12.083 0 01-0.16-9.922L12 14z" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary">{title}</h1>

          <div className="max-w-2xl text-left">
            <h2 className="text-lg font-semibold text-textPrimary">Visão Geral</h2>
            <p className="mt-2 text-textSecondary">{overview}</p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {modules.map((mod) => (
            <ModuleCard key={mod.id} id={mod.id} title={mod.title} lessons={mod.lessons} onToggleLesson={toggleLesson} />
          ))}

          <div className="bg-bgSecondary border border-borderDark rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-textPrimary">Pré-requisitos</h3>
              <span className="text-sm text-textSecondary">Leitura recomendada</span>
            </div>
            <p className="text-textSecondary">Nenhum pré-requisito obrigatório. Ter noções básicas de lógica de programação ajuda.</p>
            {syncing && <p className="text-xs text-textSecondary mt-2">Sincronizando progresso…</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursePage;
