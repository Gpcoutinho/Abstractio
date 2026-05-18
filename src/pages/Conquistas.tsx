import React from 'react';
import { Link } from 'react-router-dom';
import { niveis } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import Footer from '../components/Footer';
import MissionIcon from '../components/MissionIcon';
import PageWrapper from '../components/PageWrapper';

const Conquistas: React.FC = () => {
  const { completed, conchas, conchas_por_missao } = useProgress();
  const totalMissoes = niveis.reduce((acc, n) => acc + n.missoes.length, 0);

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <PageWrapper className="flex-grow max-w-5xl pb-16">

        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-textPrimary mb-1">Conquistas</h1>
          <p className="text-textSecondary">
            {completed.length} de {totalMissoes} troféus · {conchas} conchas
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
                      to={`/missao/${nivel.id}/${missaoIdx + 1}`}
                      title={missao.title}
                      className={`flex flex-col items-center gap-2 w-24 p-3 rounded-xl border transition-all ${
                        earned
                          ? 'border-secondary bg-gradient-to-b from-primary/60 to-bgSecondary hover:border-accent'
                          : 'border-borderDark bg-bgSecondary opacity-35 grayscale hover:opacity-50'
                      }`}
                    >
                      <MissionIcon iconName={missao.icon} completed={earned} className="w-8 h-8" />
                      <span className="text-xs text-center text-textSecondary leading-tight line-clamp-2">
                        {missao.title}
                      </span>
                      {missao.emblem && (
                        <span className="text-[10px] text-center font-semibold uppercase tracking-wide text-success/70 leading-tight line-clamp-2">
                          {missao.emblem}
                        </span>
                      )}
                      {conchas_por_missao[missao.id] !== undefined && (
                        <span className="text-xs text-accent font-semibold">
                          {conchas_por_missao[missao.id]} conchas
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </PageWrapper>
      <Footer />
    </div>
    </>
  );
};

export default Conquistas;
