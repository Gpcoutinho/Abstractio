import React from 'react';
import { Link } from 'react-router-dom';
import curriculum from '../data/curriculum.json';
import type { Nivel } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import Footer from '../components/Footer';

const niveis = curriculum as Nivel[];

const Conquistas: React.FC = () => {
  const { completed, pontuacao } = useProgress();
  const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

  return (
    <>
      <div className="app-wrapper max-w-5xl mx-auto pt-28 pb-16 px-5">

        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">Conquistas</h1>
          <p className="text-textSecondary">
            {completed.length} de {totalMissoes} troféus · {pontuacao} pts
          </p>
        </div>

        {/* Troféus por nível */}
        <div className="space-y-12">
          {niveis.map(nivel => (
            <section key={nivel.id}>
              <h2 className="text-base font-semibold text-textSecondary uppercase tracking-widest mb-5">
                {nivel.title}
              </h2>
              <div className="flex flex-wrap gap-4">
                {nivel.missoes.map((missao, missaoIdx) => {
                  const earned = completed.includes(missao.id);
                  return (
                    <Link
                      key={missao.id}
                      to={`/missao/${nivel.id}/${missaoIdx}`}
                      title={missao.title}
                      className={`flex flex-col items-center gap-2 w-24 p-3 rounded-xl border transition-all ${
                        earned
                          ? 'border-secondary bg-gradient-to-b from-primary/60 to-bgSecondary hover:border-accent'
                          : 'border-borderDark bg-bgSecondary opacity-35 grayscale hover:opacity-50'
                      }`}
                    >
                      <span className="text-3xl leading-none">{missao.icon}</span>
                      <span className="text-xs text-center text-textSecondary leading-tight line-clamp-2">
                        {missao.title}
                      </span>
                      {earned && (
                        <span className="text-xs text-accent font-semibold">15 pts</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Conquistas;
