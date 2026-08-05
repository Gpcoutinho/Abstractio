export interface Cor {
  code: string;
  nome: string;
  cor: string;
}

// Preço, existência e posse vêm da API (shop_items / inventory) — este array é só o visual.
// Não há id fixo aqui: a Loja casa cada item da API por `code`, então basta adicionar
// uma entrada quando um novo code de cor for cadastrado no backend.
export const CORES: Cor[] = [
  { code: 'coral-rosa', nome: 'Coral Rosa', cor: '#F472B6' },
  { code: 'azul-profundo', nome: 'Azul Profundo', cor: '#1D4ED8' },
  { code: 'verde-alga', nome: 'Verde Alga', cor: '#22C55E' },
  { code: 'roxo-abissal', nome: 'Roxo Abissal', cor: '#7C3AED' },
  { code: 'amarelo-sol', nome: 'Amarelo Sol', cor: '#FBBF24' },
];

// Fallback visual para um code que a API traga e o front ainda não conheça.
export const COR_FALLBACK: Omit<Cor, 'code' | 'nome'> = {
  cor: '#94A3B8',
};
