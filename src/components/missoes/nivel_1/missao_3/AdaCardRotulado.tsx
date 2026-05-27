import React from 'react';
import PolvinhoSVG from '../PolvinhoSVG';

const ATTRS = [
  { label: 'nome',       value: '"Ada"'  },
  { label: 'cor',        value: '"rosa"' },
  { label: 'tentaculos', value: '8'      },
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
    <div className="relative w-52" style={{ paddingBottom: '56px' }}>

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
              className="grid font-mono text-xs"
              style={{ gridTemplateColumns: '6rem 1fr' }}
            >
              <span className="text-textSecondary">{label}:</span>
              <span className="text-textPrimary">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/*
        SVG de anotação — irmão do card, pintado por cima.
        y=0  → borda inferior do card
        y<0  → dentro do card (coluna de atributos)
        y>0  → abaixo do card (área de paddingBottom)
      */}
      <svg
        className="absolute bottom-0 left-0 pointer-events-none"
        width="208"
        height="56"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        {/* ── Seta: rótulos (coluna esquerda) ── */}
        {/* começa em ~x=46 (centro da col. rótulo) e desce com leve diagonal para esquerda */}
        <line
          x1="46" y1="-20"
          x2="30" y2="36"
          stroke="#a78bfa" strokeOpacity="0.55" strokeWidth="1.2"
        />
        <polyline
          points="24,30 30,37 36,30"
          fill="none"
          stroke="#a78bfa" strokeOpacity="0.55" strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <text
          x="28" y="50"
          fontSize="9" fontFamily="monospace"
          fill="#a78bfa" fillOpacity="0.65"
          fontStyle="italic" textAnchor="middle"
        >
          rótulos
        </text>

        {/* ── Seta: valores (coluna direita) ── */}
        {/* começa em ~x=148 (centro da col. valor) e desce com leve diagonal para direita */}
        <line
          x1="148" y1="-20"
          x2="166" y2="36"
          stroke="#94a3b8" strokeOpacity="0.45" strokeWidth="1.2"
        />
        <polyline
          points="160,30 166,37 172,30"
          fill="none"
          stroke="#94a3b8" strokeOpacity="0.45" strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <text
          x="168" y="50"
          fontSize="9" fontFamily="monospace"
          fill="#94a3b8" fillOpacity="0.55"
          fontStyle="italic" textAnchor="middle"
        >
          valores
        </text>
      </svg>

    </div>
  </div>
);

export default AdaCardRotulado;
