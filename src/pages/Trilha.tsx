import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';
import { niveis } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';
import ProgressBar from '../components/ProgressBar';
const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

const Trilha: React.FC = () => {
  const { completed, progressoGeral } = useProgress();

  return (
    <>
      <PageWrapper className="max-w-3xl pb-16">

        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">Trilha POO</h1>
          <p className="text-textSecondary">
            Programação Orientada a Objetos em Python — {totalMissoes} missões
          </p>
          <div className="mt-6">
            <ProgressBar curriculum={niveis} completedMissions={completed} />
          </div>
        </div>

        {/* Níveis */}
        <div className="space-y-10">
          {niveis.map(nivel => {
            const concluidas = nivel.missoes.filter(m => completed.includes(m.id)).length;
            const nivelConcluido = concluidas === nivel.missoes.length;

            return (
              <section key={nivel.id}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-textPrimary">{nivel.title}</h2>
                    <p className="text-sm text-textSecondary">
                      {concluidas}/{nivel.missoes.length} missões
                      {nivelConcluido && (
                        <span className="ml-2 text-accent font-medium">· Completo</span>
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
                          {concluida ? (
                            <CheckCircleSolid className="w-5 h-5 text-accent flex-shrink-0" />
                          ) : (
                            <PlayCircleIcon className="w-5 h-5 text-textSecondary group-hover:text-accent flex-shrink-0 transition-colors" />
                          )}
                          <span className={`flex-1 ${concluida ? 'text-textSecondary line-through' : 'text-textPrimary'}`}>
                            {missao.icon} {missao.title}
                          </span>
                          <span className={`text-xs ${concluida ? 'text-accent' : 'text-textSecondary'}`}>
                            {concluida ? '✓ 15 pts' : '+15 pts'}
                          </span>
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
    </>
  );
};

export default Trilha;
