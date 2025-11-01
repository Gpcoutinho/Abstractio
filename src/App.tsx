// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destaques from './components/Destaques';
import { ShieldCheckIcon, CheckCircleIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';
// Importa o componente do mascote (se você optar por usá-lo na Hero Section)
// import Mascote from './components/Mascote'; 


// Hero moved to `src/components/Hero.tsx`

// Destaques moved to `src/components/Destaques.tsx`

const PorQue: React.FC = () => (
  <section className="py-16 px-5 bg-bgSecondary border-t border-b border-borderDark">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-textPrimary">Por Que Escolher Abstractio?</h2>
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Benefício 1 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <ShieldCheckIcon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Lições Interativas</h3>
          <p className="text-textSecondary text-sm">Teoria + prática com editores de código ao vivo.</p>
        </div>
        
        {/* Benefício 2 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <CheckCircleIcon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Quizzes Gratuitos</h3>
          <p className="text-textSecondary text-sm">Teste seu conhecimento e ganhe badges.</p>
        </div>
        
        {/* Benefício 3 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <ChartBarIcon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Progresso Visual</h3>
          <p className="text-textSecondary text-sm">Acompanhe seu avanço com gráficos e metas.</p>
        </div>
        
        {/* Benefício 4 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <UsersIcon className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Comunidade</h3>
          <p className="text-textSecondary text-sm">Conecte-se com outros aprendizes e experts.</p>
        </div>
        
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-bgSecondary text-textSecondary text-center py-8 px-5 border-t border-borderDark">
    <div className="max-w-6xl mx-auto">
      <ul className="flex justify-center space-x-8 mb-5 list-none text-sm">
        <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
        <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
        <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
      </ul>
      <p className="text-xs">&copy; 2023 Abstractio. Todos os direitos reservados.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bgPrimary">
      <Header />
      <Hero />
      <Destaques />
      <PorQue />
      <Footer />
    </div>
  );
}

export default App;