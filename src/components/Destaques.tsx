import React from 'react';

const Destaques: React.FC = () => (
  <section className="py-16 px-5 bg-bgPrimary">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Tópicos em Destaque</h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Cartão 1 */}
        <div className="bg-bgSecondary border border-borderDark rounded-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purpleAccent/30 hover:scale-[1.02] transform">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Algoritmos Básicos</h3>
          <p className="text-textSecondary mb-6 min-h-16">Domine busca, ordenação e eficiência computacional com exemplos reais.</p>
          <button type="button" className="bg-purpleAccent text-textPrimary px-6 py-3 rounded-md font-medium hover:bg-purpleAccent/80 transition-colors">
            Explorar
          </button>
        </div>
        
        {/* Cartão 2 */}
        <div className="bg-bgSecondary border border-borderDark rounded-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purpleAccent/30 hover:scale-[1.02] transform">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Estruturas de Dados</h3>
          <p className="text-textSecondary mb-6 min-h-16">De arrays a árvores: entenda como organizar dados de forma otimizada.</p>
          <button type="button" className="bg-purpleAccent text-textPrimary px-6 py-3 rounded-md font-medium hover:bg-purpleAccent/80 transition-colors">
            Explorar
          </button>
        </div>
        
        {/* Cartão 3 */}
        <div className="bg-bgSecondary border border-borderDark rounded-xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purpleAccent/30 hover:scale-[1.02] transform">
          <h3 className="text-2xl font-semibold mb-4 text-secondary">Programação OO</h3>
          <p className="text-textSecondary mb-6 min-h-16">Classes, herança e polimorfismo para codar como um pro.</p>
          <button type="button" className="bg-purpleAccent text-textPrimary px-6 py-3 rounded-md font-medium hover:bg-purpleAccent/80 transition-colors">
            Explorar
          </button>
        </div>
        
      </div>
    </div>
  </section>
);

export default Destaques;
