import React from 'react';
import { Link } from 'react-router-dom';
import { MapIcon, TrophyIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import { useProgress } from '../hooks/useProgress';
import { useSession } from '../hooks/useSession';

const FEATURE_CARDS = [
  {
    title: 'Trilha POO',
    description: 'Programação Orientada a Objetos em Python — do básico à arquitetura.',
    to: '/trilha',
    Icon: MapIcon,
    locked: false,
  },
  {
    title: 'Conquistas',
    description: 'Veja os emblemas que você conquistou ao longo da trilha.',
    to: '/conquistas',
    Icon: TrophyIcon,
    locked: false,
  },
  {
    title: 'Estruturas de Dados',
    description: 'Em breve — arrays, listas ligadas, árvores e grafos.',
    to: null,
    Icon: LockClosedIcon,
    locked: true,
  },
  {
    title: 'Algoritmos',
    description: 'Em breve — ordenação, busca e complexidade computacional.',
    to: null,
    Icon: LockClosedIcon,
    locked: true,
  },
];

const Home: React.FC = () => {
  const { progressoGeral } = useProgress();
  const { balance } = useSession();

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <HeroCarousel />
        {/* Feature cards */}
          <section className="py-16 px-5 bg-bgPrimary">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-textPrimary mb-2">Minha trilha</h2>
              <p className="text-textSecondary mb-10">
                {progressoGeral > 0
                  ? `${progressoGeral}% concluído · ${balance?.formatted ?? '—'} conchas`
                  : 'Escolha por onde começar.'}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {FEATURE_CARDS.map(card => {
                  const sharedClasses = `border border-borderDark rounded-xl p-6 bg-bgSecondary flex flex-col gap-3 transition-colors ${
                    card.locked
                      ? 'opacity-45 pointer-events-none'
                      : 'hover:border-accent cursor-pointer'
                  }`;

                  const cardContent = (
                    <>
                      <card.Icon className={`w-8 h-8 ${card.locked ? 'text-textSecondary' : 'text-accent'}`} />
                      <h3 className="text-textPrimary font-semibold text-lg">{card.title}</h3>
                      <p className="text-textSecondary text-sm flex-1">{card.description}</p>
                      {!card.locked && card.to ? (
                        <span className="mt-2 text-sm text-accent font-medium">Acessar →</span>
                      ) : (
                        <span className="mt-2 text-xs text-textSecondary">Em breve</span>
                      )}
                    </>
                  );

                  return card.to && !card.locked ? (
                    <Link key={card.title} to={card.to} className={sharedClasses}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div key={card.title} className={sharedClasses}>
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      <Footer />
    </div>
    </>
  );
};

export default Home;
