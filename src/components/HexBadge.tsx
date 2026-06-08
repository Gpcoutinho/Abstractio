import React from 'react';
import type { TierLevel } from '../contexts/ProgressContext';

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

type TierKey = Exclude<TierLevel, 'none'>;

// Brilho metálico via drop-shadow (contorna o SVG shape)
const TIER_GLOW: Record<TierKey, string> = {
  bronze: 'drop-shadow(0 0 1px #b45309) drop-shadow(0 0 3px #7c2d12)',
  silver: 'drop-shadow(0 0 1px #f1f5f9) drop-shadow(0 0 3px #64748b)',
  gold:   'drop-shadow(0 0 1px #fef08a) drop-shadow(0 0 4px #ca8a04)',
};

// Stops do gradiente diagonal (escuro → brilho → escuro) — textura metálica
const TIER_GRADIENT_STOPS: Record<TierKey, { offset: string; color: string }[]> = {
  bronze: [
    { offset: '0%',   color: '#431407' },
    { offset: '30%',  color: '#7c2d12' },
    { offset: '48%',  color: '#b45309' },
    { offset: '58%',  color: '#9a3412' },
    { offset: '78%',  color: '#7c2d12' },
    { offset: '100%', color: '#3d0a00' },
  ],
  silver: [
    { offset: '0%',   color: '#475569' },
    { offset: '30%',  color: '#94a3b8' },
    { offset: '48%',  color: '#f1f5f9' },
    { offset: '58%',  color: '#e2e8f0' },
    { offset: '78%',  color: '#64748b' },
    { offset: '100%', color: '#334155' },
  ],
  gold: [
    { offset: '0%',   color: '#713f12' },
    { offset: '30%',  color: '#ca8a04' },
    { offset: '48%',  color: '#fef08a' },
    { offset: '58%',  color: '#facc15' },
    { offset: '78%',  color: '#a16207' },
    { offset: '100%', color: '#713f12' },
  ],
};

function emblemFontSize(text: string, large: boolean): string {
  const len = text.length;
  if (large) {
    if (len <= 20) return 'text-[12px]';
    if (len <= 28) return 'text-[10px]';
    return 'text-[9px]';
  }
  if (len <= 20) return 'text-[11px]';
  if (len <= 28) return 'text-[10px]';
  return 'text-[9px]';
}

interface HexBadgeProps {
  earned: boolean;
  emblem?: string;
  interactive?: boolean;
  large?: boolean;
  tier?: TierKey;
  children: React.ReactNode;
  className?: string;
}

const HexBadge: React.FC<HexBadgeProps> = ({ earned, emblem, interactive = true, large = false, tier, children, className }) => {
  const noTierBorderClass = earned
    ? `fill-[#A78BFA] transition-colors ${interactive ? 'group-hover:fill-[#06B6D4]' : ''}`
    : 'fill-[#334155]';

  return (
    <div className={`relative ${interactive ? 'group' : ''} ${className ?? ''}`}>
      <svg
        viewBox="0 0 87 100"
        className="block w-full"
        style={earned && tier ? { filter: TIER_GLOW[tier] } : undefined}
        aria-hidden="true"
      >
        {earned && tier ? (
          <>
            <defs>
              <linearGradient id={`hex-grad-${tier}`} x1="0" y1="0" x2="1" y2="1">
                {TIER_GRADIENT_STOPS[tier].map((s, i) => (
                  <stop key={i} offset={s.offset} stopColor={s.color} />
                ))}
              </linearGradient>
            </defs>
            <path d={PATH} fill={`url(#hex-grad-${tier})`} />
          </>
        ) : (
          <path d={PATH} className={noTierBorderClass} />
        )}
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
          <span className={`font-bold uppercase tracking-wide text-success/80 text-center leading-tight px-3 line-clamp-2 ${emblemFontSize(emblem, large)}`}>
            {emblem}
          </span>
        )}
      </div>
    </div>
  );
};

export default HexBadge;
