import React from 'react';
import Mascote from '../../../Mascote';

const niveis = [
  { label: 'Fundamentos', desc: 'Classes, Objetos, Atributos, Métodos e Construtores' },
  { label: 'Pilares', desc: 'Abstração, Encapsulamento, Herança e Polimorfismo' },
  { label: 'Mecânicas', desc: 'Contratos (Classes Abstratas e Interfaces) e Relacionamentos (Associação, Agregação e Composição)' },
  { label: 'Engenharias', desc: 'Coesão, Acoplamento, Princípios SOLID e Design Patterns' },
];

const PolvonilsonIntro: React.FC = () => (
  <div className="not-prose my-4 flex flex-col sm:flex-row items-center gap-6">
    <ul className="flex-1 space-y-3">
      {niveis.map(({ label, desc }) => (
        <li key={label} className="flex items-start gap-2 text-textBody">
          <span className="mt-0.5 text-accent font-bold shrink-0">•</span>
          <span>
            <strong className="text-textPrimary">{label}</strong>
            {' — '}{desc}
          </span>
        </li>
      ))}
    </ul>
    <div className="shrink-0 flex items-center justify-center sm:w-80">
      <Mascote className="w-64 sm:w-80" />
    </div>
  </div>
);

export default PolvonilsonIntro;
