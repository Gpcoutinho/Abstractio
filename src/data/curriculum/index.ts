export type { Nivel, Missao, Exercicio } from './types';

import type { Nivel } from './types';
import nivel_1 from './nivel_1';
import nivel_2 from './nivel_2';
import nivel_3 from './nivel_3';
import nivel_4 from './nivel_4';

export const niveis: Nivel[] = [nivel_1, nivel_2, nivel_3, nivel_4];
