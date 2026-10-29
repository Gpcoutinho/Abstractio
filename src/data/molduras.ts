export interface Moldura {
  id: number;
  code: string;
  nome: string;
  descricao: string;
  background: string;
  backgroundSize?: string;
  animClass?: string;
}

// Preço, existência e posse vêm da API (shop_items / inventory) — este array é só o visual.
// ids batem com shop_items (itemType: 'frame') no backend.
export const MOLDURAS: Moldura[] = [
  {
    id: 1,
    code: 'bolhas',
    nome: 'Bolhas',
    descricao: 'Leve como as bolhas do oceano',
    background: 'linear-gradient(135deg, #06B6D4, #38BDF8, #67E8F9, #0EA5E9)',
    animClass: 'animate-frame-shimmer-slow',
  },
  {
    id: 2,
    code: 'mare',
    nome: 'Maré Alta',
    descricao: 'Das profundezas às águas rasas',
    background: 'linear-gradient(90deg, #1D4ED8, #0EA5E9, #06B6D4, #34D399, #1D4ED8)',
    backgroundSize: '300% 100%',
    animClass: 'animate-frame-wave',
  },
  {
    id: 3,
    code: 'kraken',
    nome: 'Kraken',
    descricao: 'Das profundezas do abismo',
    background: 'linear-gradient(135deg, #3B0764, #7C3AED, #A78BFA, #6D28D9)',
    animClass: 'animate-frame-pulse',
  },
  {
    id: 4,
    code: 'coral',
    nome: 'Coral',
    descricao: 'Cores vibrantes do recife',
    background: 'linear-gradient(135deg, #F97316, #FB923C, #EC4899, #F43F5E)',
    animClass: 'animate-frame-shimmer-fast',
  },
  {
    id: 5,
    code: 'aurora',
    nome: 'Aurora Boreal',
    descricao: 'Um espetáculo de luz e cor',
    background: 'conic-gradient(from 0deg, #A78BFA, #06B6D4, #34D399, #FBBF24, #F87171, #EC4899, #A78BFA)',
    animClass: 'animate-frame-spin',
  },
];

// Fallback visual para um code que a API traga e o front ainda não conheça.
export const MOLDURA_FALLBACK: Omit<Moldura, 'id' | 'code' | 'nome'> = {
  descricao: '',
  background: 'linear-gradient(135deg, #64748B, #94A3B8)',
};
