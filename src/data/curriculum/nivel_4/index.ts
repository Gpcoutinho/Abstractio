import type { Nivel } from '../types';
import missao_1 from './missao_1';
import missao_2 from './missao_2';
import missao_3 from './missao_3';
import missao_4 from './missao_4';
import missao_5 from './missao_5';
import missao_6 from './missao_6';
import missao_7 from './missao_7';

const nivel_4: Nivel = {
  id: 4,
  title: "Nível 4 — Arquitetura: a engenharia submarina",
  short: "Arquitetura",
  missoes: [missao_1, missao_2, missao_3, missao_4, missao_5, missao_6, missao_7],
};

export default nivel_4;
