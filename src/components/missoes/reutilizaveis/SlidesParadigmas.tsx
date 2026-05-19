import React, { useState, useRef } from 'react';
import SlideCard from '../../../SlideCard';

type PolvoData = {
  tag: string;
  varName: string;
  body: string;
  light: string;
  nome: string;
  cor: string;
};

const POLVOS: PolvoData[] = [
  { tag: 'polvo 1', varName: 'polvo1', body: '#7c5cbf', light: '#9b7dd4', nome: 'Polvonilson', cor: 'Roxo'  },
  { tag: 'polvo 2', varName: 'polvo2', body: '#3a7aba', light: '#5a9ad4', nome: 'Azulão',      cor: 'Azul'  },
  { tag: 'polvo 3', varName: 'polvo3', body: '#2a9a6a', light: '#4ab884', nome: 'Marinho',     cor: 'Verde' },
];

const TENTACULOS = [
  { d: 'M32,65 Q24,80 28,94', pivot: '32,65', dur: '2.1s', start: -5 },
  { d: 'M40,70 Q34,84 38,96', pivot: '40,70', dur: '2.6s', start:  4 },
  { d: 'M50,72 Q48,86 50,98', pivot: '50,72', dur: '1.9s', start: -3 },
  { d: 'M60,70 Q64,84 62,96', pivot: '60,70', dur: '2.3s', start:  3 },
  { d: 'M68,65 Q76,80 72,94', pivot: '68,65', dur: '2s',   start: -4 },
];

const PolvoSVG: React.FC<{ p: PolvoData; uid: string }> = ({ p, uid }) => (
  <svg viewBox="0 0 100 124" xmlns="http://www.w3.org/2000/svg" style={{ width: 72, borderRadius: 8 }}>
    <defs>
      <linearGradient id={uid} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#07111e" />
        <stop offset="100%" stopColor="#040c16" />
      </linearGradient>
    </defs>
    <rect width="100" height="124" fill={`url(#${uid})`} rx="8" />
    <ellipse cx="50" cy="44" rx="20" ry="18" fill={p.light} />
    <ellipse cx="50" cy="54" rx="22" ry="20" fill={p.body} />
    <circle cx="43" cy="44" r="4" fill="white" />
    <circle cx="57" cy="44" r="4" fill="white" />
    <circle cx="43" cy="45" r="2.2" fill="#1a0a30" />
    <circle cx="57" cy="45" r="2.2" fill="#1a0a30" />
    <path d="M46,53 Q50,58 54,53" stroke="#c0a0e0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {TENTACULOS.map((t, i) => (
      <path key={i} d={t.d} stroke={p.body} strokeWidth="3.5" fill="none" strokeLinecap="round">
        <animateTransform
          attributeName="transform" type="rotate"
          values={`${t.start},${t.pivot};${-t.start},${t.pivot};${t.start},${t.pivot}`}
          dur={t.dur} repeatCount="indefinite"
        />
      </path>
    ))}
    <rect x="22" y="104" width="56" height="14" rx="3" fill="#1a0a30" opacity="0.9" />
    <text x="50" y="115" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="9" fontWeight="700" fill="#8A4FFF">
      {p.tag}
    </text>
  </svg>
);

const codePre: React.CSSProperties = {
  margin: 0,
  background: '#1E293B',
  border: '1px solid #334155',
  borderRadius: 8,
  padding: '0.75rem 1rem',
  fontFamily: "'Fira Code', ui-monospace, SFMono-Regular, monospace",
  fontSize: '0.875rem',
  color: '#CBD5E1',
  overflowX: 'auto',
  lineHeight: 1.8,
};

const VarLine: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <div>
    <span style={{ color: '#CBD5E1' }}>{name}</span>
    <span style={{ color: '#94A3B8' }}> = </span>
    <span style={{ color: '#60A5FA' }}>"{value}"</span>
  </div>
);

const DictBlock: React.FC<{ p: PolvoData }> = ({ p }) => (
  <>
    <div>
      <span style={{ color: '#CBD5E1' }}>{p.varName}</span>
      <span style={{ color: '#94A3B8' }}> = {'{'}</span>
    </div>
    <div style={{ paddingLeft: '1rem' }}>
      <span style={{ color: '#60A5FA' }}>"nome"</span>
      <span style={{ color: '#94A3B8' }}>: </span>
      <span style={{ color: '#60A5FA' }}>"{p.nome}"</span>
    </div>
    <div style={{ paddingLeft: '1rem' }}>
      <span style={{ color: '#60A5FA' }}>"cor"</span>
      <span style={{ color: '#94A3B8' }}>{'  '}: </span>
      <span style={{ color: '#60A5FA' }}>"{p.cor}"</span>
    </div>
    <div><span style={{ color: '#94A3B8' }}>{'}'}</span></div>
  </>
);

const CAPTIONS_PROC = [
  '2 variáveis utilizadas para definir 1 polvo.',
  '4 variáveis utilizadas para definir 2 polvos.',
  'E para 100 polvos?',
];

const CAPTIONS_OO = [
  '1 objeto agrupa tudo sobre 1 polvo.',
  'Outro polvo? Mesma estrutura.',
  '100 polvos? Mesma estrutura, 100 vezes.',
];

const procSlides = POLVOS.map((_, n) => (
  <div key={n} className="flex flex-col gap-4">
    <div className="flex justify-center gap-3">
      {POLVOS.slice(0, n + 1).map((p, i) => <PolvoSVG key={i} p={p} uid={`proc-${n}-${i}`} />)}
    </div>
    <pre style={codePre}>
      {POLVOS.slice(0, n + 1).map(p => (
        <React.Fragment key={p.varName}>
          <VarLine name={`${p.varName}_nome`} value={p.nome} />
          <VarLine name={`${p.varName}_cor `} value={p.cor} />
        </React.Fragment>
      ))}
    </pre>
    <p className="text-center text-xs text-textSecondary m-0">{CAPTIONS_PROC[n]}</p>
  </div>
));

const ooSlides = POLVOS.map((_, n) => (
  <div key={n} className="flex flex-col gap-4">
    <div className="flex justify-center gap-3">
      {POLVOS.slice(0, n + 1).map((p, i) => <PolvoSVG key={i} p={p} uid={`oo-${n}-${i}`} />)}
    </div>
    <pre style={codePre}>
      {POLVOS.slice(0, n + 1).map((p, i) => (
        <React.Fragment key={p.varName}>
          {i > 0 && <div>&nbsp;</div>}
          <DictBlock p={p} />
        </React.Fragment>
      ))}
    </pre>
    <p className="text-center text-xs text-textSecondary m-0">{CAPTIONS_OO[n]}</p>
  </div>
));

const TOTAL = 3;

const SlidesParadigmas: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const navigate = (next: number) => {
    setCurrent(next);
    requestAnimationFrame(() => {
      rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  return (
    <div ref={rowRef} className="not-prose my-6">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <SlideCard
          title="Pensamento Procedural"
          className="flex-1 min-w-0 my-0"
          slides={procSlides}
          externalCurrent={current}
          hideNav
        />
        <div className="flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold text-borderDark select-none">✕</span>
        </div>
        <SlideCard
          title="Pensamento Orientado a Objetos"
          className="flex-1 min-w-0 my-0"
          slides={ooSlides}
          externalCurrent={current}
          hideNav
        />
      </div>
      <div className="flex items-center justify-between px-2 pt-3">
        <div>
          {current > 0 && (
            <button onClick={() => navigate(current - 1)} className="text-sm text-textSecondary hover:text-textPrimary transition-colors">
              ← Anterior
            </button>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span key={i} className={`block w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-accent' : 'bg-borderDark'}`} />
          ))}
        </div>
        <div>
          {current < TOTAL - 1 ? (
            <button onClick={() => navigate(current + 1)} className="text-sm text-accent hover:text-secondary transition-colors">
              Próximo →
            </button>
          ) : (
            <button onClick={() => navigate(0)} className="text-sm text-accent hover:text-secondary transition-colors">
              Voltar ao início
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlidesParadigmas;
