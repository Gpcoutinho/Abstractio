import React from 'react';
import Card from './Card';

const cards = [
  
  {
    title: 'Estruturas de Dados ',
    description: 'De arrays a árvores: entenda como organizar dados de forma otimizada.',
  },
  {
    title: 'Orientação a Objetos',
    description: 'Classes, herança e polimorfismo para codar como um pro.',
    rota: '/poo'
  },{
    title: 'Ponteiros',
    description: 'Domine busca, ordenação e eficiência computacional com exemplos reais.',
    rota: '/ponteiros'
  }
];

const Destaques: React.FC = () => (
  <section className="py-16 px-5 bg-bgPrimary">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-textPrimary">Destaques</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            description={c.description}
            rota={c.rota}
            icon={
              c.title.includes('Estruturas') ? (
                // circle stack icon (three stacked circles)
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-accent" aria-hidden="true">
                  <circle cx="12" cy="7" r="3" />
                  <ellipse cx="12" cy="12" rx="5" ry="2.5" />
                  <ellipse cx="12" cy="16.5" rx="7" ry="2" />
                </svg>
              ) : c.title.includes('Orientação') ? (
                // swatch icon (rounded rectangle with a small hole)
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-accent" aria-hidden="true">
                  <rect x="3" y="3" width="14" height="14" rx="2" />
                  <circle cx="9" cy="9" r="1.2" />
                  <path d="M17 7l4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                // puzzle piece icon
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-accent" aria-hidden="true">
                  <path d="M21 13v6a1 1 0 0 1-1 1h-6v-2a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H3V7a1 1 0 0 1 1-1h6v2a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            }
          />
        ))}
      </div>
    </div>
  </section>
);

export default Destaques;