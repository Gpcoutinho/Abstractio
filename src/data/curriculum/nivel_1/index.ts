import type { Nivel } from '../types';
import missao_0 from './missao_0';
import missao_1 from './missao_1';
import missao_2 from './missao_2';
import missao_3 from './missao_3';
import missao_4 from './missao_4';
import missao_5 from './missao_5';

const nivel_1: Nivel = {
  id: 1,
  title: "Nível 2 — Pilares: As leis do oceano",
  short: "Pilares",
  missoes: [missao_0, missao_1, missao_2, missao_3, missao_4, missao_5],
};

export default nivel_1;
