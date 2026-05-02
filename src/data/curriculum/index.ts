export type { Nivel, Missao, Exercise } from './types';

import type { Nivel } from './types';
import nivel_0 from './nivel_0';
import nivel_1 from './nivel_1';
import nivel_2 from './nivel_2';
import nivel_3 from './nivel_3';

export const niveis: Nivel[] = [nivel_0, nivel_1, nivel_2, nivel_3];
