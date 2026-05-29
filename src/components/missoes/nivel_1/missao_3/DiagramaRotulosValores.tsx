import React from 'react';

/*
  Diagrama de anotação: ada = {"cor": "rosa", "tentaculos": 8}
  Três labels coloridos com setas apontando para as partes do código:
    · objeto   (coral  #FB7185) → aponta para `ada`
    · valores  (azul   #38BDF8) → aponta para "rosa" e 8
    · rótulos  (rosa   #F472B6) → aponta para "cor" e "tentaculos"

  Posições calculadas com char-width ≈ 7.8px em Fira Code 13px,
  partindo de x=20. Centros relevantes:
    ada          → x ≈ 32
    "cor"        → x ≈ 94
    "rosa"       → x ≈ 153
    "tentaculos" → x ≈ 238
    8            → x ≈ 305

  Labels:
    objeto  → x=14,  y=17  (acima à esquerda de `ada`)
    valores → x=229, y=17  (centro entre "rosa" e 8)
    rótulos → x=166, y=112 (centro entre "cor" e "tentaculos")

  Setas partem de um único ponto por label e divergem até os elementos.
*/

const DiagramaRotulosValores: React.FC = () => (
  <div className="not-prose my-6 flex justify-center">
    <svg
      viewBox="0 0 350 120"
      width="350"
      style={{ overflow: 'visible', maxWidth: '100%' }}
      aria-label="ada identificado como objeto; cor e tentaculos como rótulos; rosa e 8 como valores"
    >
      <defs>
        <marker id="drv-coral" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#FB7185" fillOpacity="0.75" />
        </marker>
        <marker id="drv-blue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#38BDF8" fillOpacity="0.75" />
        </marker>
        <marker id="drv-pink" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M0,0 L0,7 L7,3.5 z" fill="#F472B6" fillOpacity="0.75" />
        </marker>
      </defs>

      {/* ── Expressão de código ── */}
      <text y="63" fontFamily="'Fira Code', monospace" fontSize="13">
        <tspan x="20"  fill="#FB7185">ada</tspan>
        <tspan         fill="#94A3B8"> = &#123;</tspan>
        <tspan         fill="#F472B6">&quot;cor&quot;</tspan>
        <tspan         fill="#94A3B8">: </tspan>
        <tspan         fill="#38BDF8">&quot;rosa&quot;</tspan>
        <tspan         fill="#94A3B8">, </tspan>
        <tspan         fill="#F472B6">&quot;tentaculos&quot;</tspan>
        <tspan         fill="#94A3B8">: </tspan>
        <tspan         fill="#38BDF8">8</tspan>
        <tspan         fill="#94A3B8">&#125;</tspan>
      </text>

      {/* ── Label: objeto ── */}
      <text
        x="14" y="17"
        fontFamily="Inter, sans-serif" fontSize="10"
        fill="#FB7185" fillOpacity="0.85" fontStyle="italic"
        textAnchor="start"
      >objeto</text>

      {/* ── Seta: objeto → ada ── */}
      <line
        x1="32" y1="22" x2="32" y2="55"
        stroke="#FB7185" strokeWidth="1.2" strokeOpacity="0.6"
        markerEnd="url(#drv-coral)"
      />

      {/* ── Label: valores ── */}
      <text
        x="229" y="17"
        fontFamily="Inter, sans-serif" fontSize="10"
        fill="#38BDF8" fillOpacity="0.85" fontStyle="italic"
        textAnchor="middle"
      >valores</text>

      {/* ── Setas: valores → "rosa" e 8 (ambas partem do centro do label) ── */}
      <line
        x1="229" y1="23" x2="155" y2="55"
        stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.55"
        markerEnd="url(#drv-blue)"
      />
      <line
        x1="229" y1="23" x2="305" y2="55"
        stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.55"
        markerEnd="url(#drv-blue)"
      />

      {/* ── Label: rótulos ── */}
      <text
        x="166" y="112"
        fontFamily="Inter, sans-serif" fontSize="10"
        fill="#F472B6" fillOpacity="0.85" fontStyle="italic"
        textAnchor="middle"
      >rótulos</text>

      {/* ── Setas: rótulos → "cor" e "tentaculos" (ambas partem do centro do label) ── */}
      <line
        x1="166" y1="104" x2="94" y2="70"
        stroke="#F472B6" strokeWidth="1.2" strokeOpacity="0.55"
        markerEnd="url(#drv-pink)"
      />
      <line
        x1="166" y1="104" x2="238" y2="70"
        stroke="#F472B6" strokeWidth="1.2" strokeOpacity="0.55"
        markerEnd="url(#drv-pink)"
      />
    </svg>
  </div>
);

export default DiagramaRotulosValores;
