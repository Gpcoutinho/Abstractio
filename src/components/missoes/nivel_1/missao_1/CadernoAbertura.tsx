import React from 'react';

const CadernoAbertura: React.FC = () => (
  <div className="not-prose my-6 flex justify-center">
    <div
      className="relative w-full max-w-sm rounded-sm shadow-xl px-8 py-7"
      style={{
        background: '#fdf6e3',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #d4c9a0 31px, #d4c9a0 32px)',
        backgroundPositionY: '40px',
        fontFamily: "'Courier New', monospace",
      }}
    >
      <div className="border-l-4 border-amber-300 pl-3 mb-4">
        <p className="text-xs font-bold text-amber-800 leading-relaxed">Caderno de Campo — Vol. 1</p>
        <p className="text-xs text-amber-700 leading-relaxed">Pesquisador: Sr. Polvonilson</p>
        <p className="text-xs text-amber-700 leading-relaxed">Dia 1 — Oceano Atlântico Sul</p>
      </div>

      <div className="space-y-3 text-sm text-stone-700 leading-loose">
        <p>Encontrei hoje minha primeira criatura de estudo.</p>
        <p>Um polvo. Roxo. Oito tentáculos. Tamanho médio.</p>
        <p>
          Anotei o nome numa folha. A cor em outra.<br />
          O tamanho num pedacinho de papel que já não encontro.
        </p>
        <p>
          Se eu encontrar cem criaturas assim...<br />
          como vou organizar tudo isso?
        </p>
        <p className="italic font-semibold text-stone-800 pt-1">
          Preciso de um método melhor.
        </p>
      </div>
    </div>
  </div>
);

export default CadernoAbertura;
