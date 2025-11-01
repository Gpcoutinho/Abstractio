import React from 'react';

const Hero: React.FC = () => (
  // O pt-20 compensa a altura do Header fixo (h-20)
  <section className="bg-gradient-to-r from-primary to-secondary text-textPrimary text-center py-24 pt-32 md:py-32 px-5 mt-20 relative overflow-hidden">
    <div className="max-w-4xl mx-auto z-10 relative">
      <h1 className="text-5xl md:text-6xl font-bold mb-5">Bem-vindo ao Abstractio</h1>
      <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
        Aprenda Ciência da Computação de forma abstrata e prática, com lições interativas e quizzes para todos os níveis.
      </p>
      <button type="button" className="bg-accent text-bgPrimary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-all duration-300 hover:shadow-lg hover:shadow-accent/40">
        Comece Agora
      </button>
    </div>
    {/* Se o mascote for colocado aqui, descomente: */}
    {/* <Mascote className="top-10 right-20 w-32 h-32" /> */}
  </section>
);

export default Hero;
