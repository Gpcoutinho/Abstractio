import React from 'react';
import { ShieldCheckIcon, CheckCircleIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline';

const PorQue: React.FC = () => (
  <section className="py-16 px-5 bg-bgSecondary border-t border-b border-borderDark">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-textPrimary">Por Que Escolher Abstractio?</h2>
      <div className="grid md:grid-cols-4 gap-8">
        
        {/* Benefício 1 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <ShieldCheckIcon aria-hidden="true" className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Lições Interativas</h3>
          <p className="text-textSecondary text-sm">Teoria + prática com editores de código ao vivo.</p>
        </div>
        
        {/* Benefício 2 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <CheckCircleIcon aria-hidden="true" className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Quizzes Gratuitos</h3>
          <p className="text-textSecondary text-sm">Teste seu conhecimento e ganhe badges.</p>
        </div>
        
        {/* Benefício 3 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <ChartBarIcon aria-hidden="true" className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Progresso Visual</h3>
          <p className="text-textSecondary text-sm">Acompanhe seu avanço com gráficos e metas.</p>
        </div>
        
        {/* Benefício 4 */}
        <div className="text-center p-4 border border-borderDark rounded-lg hover:border-accent transition-colors">
          <UsersIcon aria-hidden="true" className="w-12 h-12 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-3 text-textPrimary">Comunidade</h3>
          <p className="text-textSecondary text-sm">Conecte-se com outros aprendizes e experts.</p>
        </div>
        
      </div>
    </div>
  </section>
);

export default PorQue;
