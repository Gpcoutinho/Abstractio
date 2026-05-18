import React from 'react';

// Hexágono regular pontudo pra cima — proporções naturais: largura:altura = √3:2
// viewBox 87×100 preserva lados iguais (circunraio R=50, centro 43.5,50)
// Cantos arredondados r=6 com curvas de Bézier quadráticas
const PATH =
  "M38.3,3 Q43.5,0 48.7,3 " +
  "L81.8,22 Q87,25 87,31 " +
  "L87,69 Q87,75 81.8,78 " +
  "L48.7,97 Q43.5,100 38.3,97 " +
  "L5.2,78 Q0,75 0,69 " +
  "L0,31 Q0,25 5.2,22 Z";

interface HexBadgeProps {
  earned: boolean;
  children: React.ReactNode;
  className?: string;
}

const HexBadge: React.FC<HexBadgeProps> = ({ earned, children, className }) => (
  <div className={`relative group ${className ?? ''}`}>
    {/* SVG mantém proporção natural do hex regular (87:100) sem distorção */}
    <svg viewBox="0 0 87 100" className="block w-full" aria-hidden="true">
      {/* Borda externa */}
      <path
        d={PATH}
        className={`transition-colors ${
          earned
            ? 'fill-[#A78BFA] group-hover:fill-[#06B6D4]'
            : 'fill-[#334155]'
        }`}
      />
      {/* Preenchimento interno — escala 91% a partir do centro (43.5, 50) */}
      <path
        d={PATH}
        transform="translate(43.5,50) scale(0.91) translate(-43.5,-50)"
        className="fill-[#1E293B]"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
      {children}
    </div>
  </div>
);

export default HexBadge;
