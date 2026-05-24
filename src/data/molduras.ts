export interface Moldura {
  id: string;
  nome: string;
  descricao: string;
  custo: number;
  background: string;
  backgroundSize?: string;
  animClass?: string;
}

export const MOLDURAS: Moldura[] = [
  {
    id: 'none',
    nome: 'Nenhuma',
    descricao: 'Sem moldura',
    custo: 0,
    background: 'transparent',
  },
  {
    id: 'bolhas',
    nome: 'Bolhas',
    descricao: 'Leve como as bolhas do oceano',
    custo: 50,
    background: 'linear-gradient(135deg, #06B6D4, #38BDF8, #67E8F9, #0EA5E9)',
    animClass: 'animate-frame-shimmer-slow',
  },
  {
    id: 'mare',
    nome: 'Maré Alta',
    descricao: 'Das profundezas às águas rasas',
    custo: 50,
    background: 'linear-gradient(90deg, #1D4ED8, #0EA5E9, #06B6D4, #34D399, #1D4ED8)',
    backgroundSize: '300% 100%',
    animClass: 'animate-frame-wave',
  },
  {
    id: 'kraken',
    nome: 'Kraken',
    descricao: 'Das profundezas do abismo',
    custo: 50,
    background: 'linear-gradient(135deg, #3B0764, #7C3AED, #A78BFA, #6D28D9)',
    animClass: 'animate-frame-pulse',
  },
  {
    id: 'coral',
    nome: 'Coral',
    descricao: 'Cores vibrantes do recife',
    custo: 50,
    background: 'linear-gradient(135deg, #F97316, #FB923C, #EC4899, #F43F5E)',
    animClass: 'animate-frame-shimmer-fast',
  },
  {
    id: 'aurora',
    nome: 'Aurora Boreal',
    descricao: 'Um espetáculo de luz e cor',
    custo: 50,
    background: 'conic-gradient(from 0deg, #A78BFA, #06B6D4, #34D399, #FBBF24, #F87171, #EC4899, #A78BFA)',
    animClass: 'animate-frame-spin',
  },
];
