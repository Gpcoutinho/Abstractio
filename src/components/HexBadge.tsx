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

function emblemFontSize(text: string): string {
  const len = text.length;
  if (len <= 20) return 'text-[8px]';
  if (len <= 28) return 'text-[7px]';
  return 'text-[6px]';
}

interface HexBadgeProps {
  earned: boolean;
  emblem?: string;
  interactive?: boolean;
  children: React.ReactNode;
  className?: string;
}

const HexBadge: React.FC<HexBadgeProps> = ({ earned, emblem, interactive = true, children, className }) => (
  <div className={`relative ${interactive ? 'group' : ''} ${className ?? ''}`}>
    {/* SVG mantém proporção natural do hex regular (87:100) sem distorção */}
    <svg viewBox="0 0 87 100" className="block w-full" aria-hidden="true">
      {/* Borda externa */}
      <path
        d={PATH}
        className={`transition-colors ${
          earned
            ? `fill-[#A78BFA] ${interactive ? 'group-hover:fill-[#06B6D4]' : ''}`
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
      {emblem && (
        <span className={`font-bold uppercase tracking-wide text-success/80 text-center leading-tight px-3 line-clamp-2 ${emblemFontSize(emblem)}`}>
          {emblem}
        </span>
      )}
    </div>
  </div>
);

export default HexBadge;
