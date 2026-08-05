import imgPirata from '../assets/avatares/acessorios/chapeus/pirata.png';
import imgCowboy from '../assets/avatares/acessorios/chapeus/cowboy.png';
import imgNinja from '../assets/avatares/acessorios/chapeus/ninja.png';
import imgNatal from '../assets/avatares/acessorios/chapeus/natal.png';

export interface Acessorio {
  id: number;
  code: string;
  nome: string;
  src: string;
}

// Preço, existência e posse vêm da API (shop_items / inventory) — este array é só o visual.
// ids batem com shop_items (itemType: 'accessory') no backend.
export const ACESSORIOS: Acessorio[] = [
  { id: 6, code: 'pirata', nome: 'Chapéu Pirata', src: imgPirata },
  { id: 7, code: 'cowboy', nome: 'Chapéu Cowboy', src: imgCowboy },
  { id: 8, code: 'ninja', nome: 'Chapéu Ninja', src: imgNinja },
  { id: 9, code: 'natal', nome: 'Chapéu de Natal', src: imgNatal },
];

// Fallback visual para um code que a API traga e o front ainda não conheça.
export const ACESSORIO_FALLBACK: Omit<Acessorio, 'id' | 'code' | 'nome'> = {
  src: '',
};
