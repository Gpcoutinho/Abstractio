import React from 'react';

const Hero: React.FC = () => (
  // O pt-20 compensa a altura do Header fixo (h-20)
  <section className="bg-gradient-to-r from-primary to-secondary text-textPrimary text-center py-20 pt-32 md:py-28 px-5 mt-20 relative overflow-hidden">
    <div className="max-w-4xl mx-auto z-10 relative flex flex-col items-center gap-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Bem-vindo ao Abstractio</h1>
      <p className="text-lg md:text-xl text-textSecondary mb-2 max-w-2xl">
        Aprenda Ciência da Computação de forma abstrata e prática, com lições interativas e quizzes para todos os níveis.
      </p>
      <div className="mt-3">
        <button type="button" className="hero-cta">
          Comece Agora
        </button>
      </div>
    </div>
    {/* Se o mascote for colocado aqui, descomente: */}
    {/* <Mascote className="top-10 right-20 w-32 h-32" /> */}
  </section>
);

export default Hero;
