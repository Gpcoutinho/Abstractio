import React from 'react';
import PolvinhoSVG from '../PolvinhoSVG';

const ATTRS = [
  { label: 'nome',       value: '"Ada"'  },
  { label: 'cor',        value: '"rosa"' },
  { label: 'num_tentaculos', value: '8'      },
  { label: 'tamanho_cm',    value: '25'     },
] as const;

/*
  Layout: card com overflow-hidden para os cantos arredondados.
  O SVG de anotação é irmão do card (não filho), posicionado
  absolutamente no rodapé do wrapper. Com overflow: visible,
  os y negativos extravasam para dentro do card — criando o efeito
  de seta desenhada por cima, como uma anotação de caderno.

  Wrapper (relative, pb-14)
  ├── card (overflow-hidden)
  │   └── atributos section
  └── SVG (absolute bottom-0, height=56, overflow=visible)
       ├── linha + seta → "rótulos"   (coluna esquerda, y parte de -20)
       └── linha + seta → "valores"   (coluna direita,  y parte de -20)
*/

const AdaCardRotulado: React.FC = () => (
  <div className="not-prose my-6 flex flex-col items-center">
    <div className="relative w-52">

      {/* Card */}
      <div className="w-52 rounded-xl border border-borderDark bg-bgSecondary overflow-hidden">

        {/* Header */}
        <div className="px-4 py-2.5 border-b border-borderDark text-center">
          <span className="text-xs font-bold text-textPrimary tracking-wide">Ada</span>
        </div>

        {/* Polvo */}
        <div className="flex justify-center py-6">
          <PolvinhoSVG cor="Rosa" tentaculos={8} femea width={100} />
        </div>

        {/* Atributos em grid alinhado */}
        <div className="px-4 pt-3 pb-4 border-t border-borderDark space-y-1">
          {ATTRS.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-2 font-mono text-xs"
              style={{ gridTemplateColumns: 'auto 1fr' }}
            >
              <span className="text-textSecondary">{label}:</span>
              <span className="text-textPrimary">{value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default AdaCardRotulado;
