import imgPirata from '../assets/avatares/acessorios/chapeus/pirata.png';
import imgCowboy from '../assets/avatares/acessorios/chapeus/cowboy.png';
import imgNinja from '../assets/avatares/acessorios/chapeus/ninja.png';
import imgNatal from '../assets/avatares/acessorios/chapeus/natal.png';

export interface Acessorio {
  id: number;
  code: string;
  nome: string;
  custo: number;
  src: string;
}

// ids batem com shop_items (itemType: 'accessory') no backend.
export const ACESSORIOS: Acessorio[] = [
  { id: 6, code: 'pirata', nome: 'Chapéu Pirata', custo: 40, src: imgPirata },
  { id: 7, code: 'cowboy', nome: 'Chapéu Cowboy', custo: 40, src: imgCowboy },
  { id: 8, code: 'ninja', nome: 'Chapéu Ninja', custo: 40, src: imgNinja },
  { id: 9, code: 'natal', nome: 'Chapéu de Natal', custo: 40, src: imgNatal },
];
