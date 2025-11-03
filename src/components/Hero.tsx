import React from 'react';
import Mascote from './Mascote';

const Hero: React.FC = () => (
  // O pt-20 compensa a altura do Header fixo (h-20)
  <section className="bg-gradient-to-r from-primary to-secondary text-textPrimary text-center py-20 pt-32 md:py-28 px-5 mt-20 relative overflow-hidden">
    <div className="max-w-4xl mx-auto z-10 relative flex flex-col md:flex-row items-center gap-6">
      {/* Left column: title, paragraph, button */}
      <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Bem-vindo ao Abstractio</h1>
        <p className="text-lg md:text-xl text-textPrimary mb-4 max-w-2xl">
          Aprenda os conceitos abstratos da Ciência da Computação na prática, com lições interativas e quizzes para todos os níveis.
        </p>
        <div className="mt-3">
          <button type="button" className="hero-cta">
            Comece Agora
          </button>
        </div>
      </div>

      {/* Right column: mascote centered vertically */}
      <div className="w-full md:flex-1 flex items-center justify-center">
        <Mascote className="hidden md:block md:w-72 md:h-72 lg:w-80 lg:h-80" />
      </div>
    </div>
  {/* Mascote — componente importado (posicionado relative ao container acima) */}
  </section>
);

export default Hero;
