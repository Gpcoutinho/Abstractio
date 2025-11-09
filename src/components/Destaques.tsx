import React from 'react';
import Card from './Card';

const cards = [
  {
    title: 'Algoritmos Básicos',
    description: 'Domine busca, ordenação e eficiência computacional com exemplos reais.',
    rota: '/algorithms'
  },
  {
    title: 'Estruturas de Dados',
    description: 'De arrays a árvores: entenda como organizar dados de forma otimizada.',
  },
  {
    title: 'Programação OO',
    description: 'Classes, herança e polimorfismo para codar como um pro.',
    rota: '/poo'
  },
];

const Destaques: React.FC = () => (
  <section className="py-16 px-5 bg-bgPrimary">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-textPrimary">Destaques</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card key={c.title} title={c.title} description={c.description} rota={c.rota}/>
        ))}
      </div>
    </div>
  </section>
);

export default Destaques;