import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';
import { niveis } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import Footer from '../components/Footer';
import MissionIcon from '../components/MissionIcon';
import PageWrapper from '../components/PageWrapper';
import ShellIcon from '../components/ShellIcon';
import ProgressBar from '../components/ProgressBar';
const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

const Trilha: React.FC = () => {
  const { completed, conchas_por_missao } = useProgress();

  return (
    <>
    <div className="min-h-screen flex flex-col bg-bgPrimary overflow-x-hidden">
      <PageWrapper className="flex-grow w-full max-w-3xl mx-auto px-5 pb-16">
        <div className="mb-6">
          <ProgressBar curriculum={niveis} completedMissions={completed} />
        </div>
        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">
            Trilha POO
          </h1>
          <p className="text-textSecondary">
            Programação Orientada a Objetos em Python — {totalMissoes} missões
          </p>
        </div>

        {/* Níveis */}
        <div className="space-y-10">
          {niveis.map((nivel) => {
            const concluidas = nivel.missoes.filter((m) =>
              completed.includes(m.id),
            ).length;
            const nivelConcluido = concluidas === nivel.missoes.length;

            return (
              <section key={nivel.id}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-textPrimary">
                      {nivel.title}
                    </h2>
                    <p className="text-sm text-textSecondary">
                      {concluidas}/{nivel.missoes.length} missões
                      {nivelConcluido && (
                        <span className="ml-2 text-accent font-medium">
                          · Completo
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {nivel.missoes.map((missao, missaoIdx) => {
                    const concluida = completed.includes(missao.id);

                    return (
                      <li key={missao.id}>
                        <Link
                          to={`/missao/${nivel.id}/${missaoIdx + 1}`}
                          className="flex items-center gap-4 p-4 rounded-lg border border-borderDark bg-bgSecondary hover:border-accent transition-colors group"
                        >
                          <span
                            className={`flex-1 min-w-0 ${concluida ? "text-textSecondary line-through" : "text-textPrimary"}`}
                          >
                            <MissionIcon iconName={missao.icon} completed={concluida} className="mr-2 w-5 h-5" />
                            Missão{" "}
                            {nivel.id === 1 ? missaoIdx : missaoIdx + 1} —{" "}
                            {missao.title}
                          </span>
                          <span className={`text-xs flex items-center gap-1 ${concluida ? "text-success" : "text-textSecondary"}`}>
                            {concluida ? `✓ ${conchas_por_missao[missao.id] ?? 15}` : "+15"}
                            <ShellIcon className="w-3.5 h-3.5" />
                          </span>
                          {concluida ? (
                            <CheckCircleSolid className="w-5 h-5 text-success flex-shrink-0" />
                          ) : (
                            <CheckCircleSolid className="w-5 h-5 text-textSecondary group-hover:text-accent flex-shrink-0 transition-colors" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </PageWrapper>

      <Footer />
    </div>
    </>
  );
};

export default Trilha;
