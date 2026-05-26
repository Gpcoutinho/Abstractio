import imgPirata from '../assets/avatares/acessorios/chapeus/pirata.png';
import imgCowboy from '../assets/avatares/acessorios/chapeus/cowboy.png';
import imgNinja from '../assets/avatares/acessorios/chapeus/ninja.png';
import imgNatal from '../assets/avatares/acessorios/chapeus/natal.png';

export interface Acessorio {
  id: string;
  nome: string;
  custo: number;
  src: string;
}

export const ACESSORIOS: Acessorio[] = [
  { id: 'none',   nome: 'Nenhum',         custo: 0,  src: '' },
  { id: 'pirata', nome: 'Chapéu Pirata',  custo: 40, src: imgPirata },
  { id: 'cowboy', nome: 'Chapéu Cowboy',  custo: 40, src: imgCowboy },
  { id: 'ninja',  nome: 'Chapéu Ninja',   custo: 40, src: imgNinja },
  { id: 'natal',  nome: 'Chapéu de Natal', custo: 40, src: imgNatal },
];
