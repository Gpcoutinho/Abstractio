import React from "react";

const DadosGlobais: React.FC = () => (
  <div className="not-prose my-6 flex justify-center">
    <svg viewBox="0 0 480 295" className="w-full max-w-xl" aria-hidden="true">
      <defs>
        <marker
          id="dg-arr"
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <marker
          id="dg-arr-r"
          markerWidth="7"
          markerHeight="7"
          refX="1"
          refY="3.5"
          orient="auto-start-reverse"
        >
          <polygon points="0 0, 7 3.5, 0 7" fill="#f59e0b" />
        </marker>
        <style>{`
          @keyframes dg-dash { to { stroke-dashoffset: -20; } }
          .dg-l1 { stroke-dasharray: 5 5; animation: dg-dash 1.5s linear infinite; }
          .dg-l2 { stroke-dasharray: 5 5; animation: dg-dash 1.5s 0.375s linear infinite; }
          .dg-l3 { stroke-dasharray: 5 5; animation: dg-dash 1.5s 0.75s linear infinite; }
          .dg-l4 { stroke-dasharray: 5 5; animation: dg-dash 1.5s 1.125s linear infinite; }
        `}</style>
      </defs>

      {/* ── Centro: pilha de papéis ── */}
      <rect
        x="178"
        y="110"
        width="124"
        height="80"
        rx="3"
        fill="#fed7aa"
        stroke="#c2410c"
        strokeWidth="1.5"
        transform="rotate(-7, 240, 150)"
      />
      <rect
        x="178"
        y="110"
        width="124"
        height="80"
        rx="3"
        fill="#fdba74"
        stroke="#ea580c"
        strokeWidth="1.5"
        transform="rotate(5, 240, 150)"
      />
      <rect
        x="178"
        y="108"
        width="124"
        height="80"
        rx="3"
        fill="#fffbeb"
        stroke="#b45309"
        strokeWidth="2"
      />
      <text
        x="240"
        y="142"
        textAnchor="middle"
        fill="#7c2d12"
        fontSize="12"
        fontWeight="600"
        fontFamily="'Playwrite GB J', cursive"
      >
        Dados das
      </text>
      <text
        x="240"
        y="162"
        textAnchor="middle"
        fill="#7c2d12"
        fontSize="12"
        fontWeight="600"
        fontFamily="'Playwrite GB J', cursive"
      >
        criaturas
      </text>
      <text
        x="240"
        y="178"
        textAnchor="middle"
        fill="#9a3412"
        fontSize="10"
        fontFamily="'Playwrite GB J', cursive"
      >
        cor? nome? tamanho?
      </text>

      {/* ── Otto (topo esquerda) ── */}
      <rect
        x="10"
        y="14"
        width="118"
        height="76"
        rx="4"
        fill="#fef9c3"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <text
        x="69"
        y="46"
        textAnchor="middle"
        fill="#92400e"
        fontSize="17"
        fontFamily="monospace"
      >
        "cor: rosa"
      </text>
      <text
        x="69"
        y="68"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="'Playwrite GB J', cursive"
      >
        Pesquisador 1: Otto
      </text>

      {/* ── Marta (topo direita) ── */}
      <rect
        x="352"
        y="14"
        width="122"
        height="76"
        rx="4"
        fill="#fef9c3"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <text
        x="411"
        y="46"
        textAnchor="middle"
        fill="#92400e"
        fontSize="17"
        fontFamily="monospace"
      >
        "pink"
      </text>
      <text
        x="411"
        y="68"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="'Playwrite GB J', cursive"
      >
        Pesquisadora 2: Marta
      </text>

      {/* ── Pedro (baixo esquerda) ── */}
      <rect
        x="10"
        y="200"
        width="118"
        height="76"
        rx="4"
        fill="#fef9c3"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <text
        x="69"
        y="232"
        textAnchor="middle"
        fill="#92400e"
        fontSize="17"
        fontFamily="monospace"
      >
        "#FF69B4"
      </text>
      <text
        x="69"
        y="254"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="'Playwrite GB J', cursive"
      >
        Pesquisador 3: Pedro
      </text>

      {/* ── Joana (baixo direita) ── */}
      <rect
        x="352"
        y="200"
        width="118"
        height="76"
        rx="4"
        fill="#fef9c3"
        stroke="#d97706"
        strokeWidth="1.5"
      />
      <text
        x="411"
        y="232"
        textAnchor="middle"
        fill="#92400e"
        fontSize="17"
        fontFamily="monospace"
      >
        rosa = True
      </text>
      <text
        x="411"
        y="254"
        textAnchor="middle"
        fill="#a16207"
        fontSize="10"
        fontFamily="'Playwrite GB J', cursive"
      >
        Pesquisadora 4: Joana
      </text>

      {/* ── Setas bidirecionais ── */}
      {/* Partem dos cantos externos dos cards de pesquisadores e chegam aos cantos externos da pilha */}
      <line
        x1="130"
        y1="91"
        x2="173"
        y2="108"
        stroke="#f59e0b"
        strokeWidth="1.5"
        markerEnd="url(#dg-arr)"
        markerStart="url(#dg-arr-r)"
        className="dg-l1"
      />
      <line
        x1="350"
        y1="91"
        x2="307"
        y2="108"
        stroke="#f59e0b"
        strokeWidth="1.5"
        markerEnd="url(#dg-arr)"
        markerStart="url(#dg-arr-r)"
        className="dg-l2"
      />
      <line
        x1="130"
        y1="199"
        x2="173"
        y2="188"
        stroke="#f59e0b"
        strokeWidth="1.5"
        markerEnd="url(#dg-arr)"
        markerStart="url(#dg-arr-r)"
        className="dg-l3"
      />
      <line
        x1="350"
        y1="199"
        x2="307"
        y2="188"
        stroke="#f59e0b"
        strokeWidth="1.5"
        markerEnd="url(#dg-arr)"
        markerStart="url(#dg-arr-r)"
        className="dg-l4"
      />

      {/* Legenda */}
      <text
        x="240"
        y="295"
        textAnchor="middle"
        fill="#94A3B8"
        fontSize="9"
        fontFamily="Inter, sans-serif"
      >
        Todos acessam os mesmos dados — cada um do seu jeito, sem controle
      </text>
    </svg>
  </div>
);

export default DadosGlobais;
