import React from 'react';
import { diagramRow, oceanPolvo, objectCard, codeCard } from '../../../data/visuals';

const html = diagramRow([
  oceanPolvo('meu_polvo'),
  objectCard('Entidade', 'meu_polvo', { nome: '"Otto"', cor: '"Roxo"' }),
  codeCard('Código Python', `meu_polvo = {\n    "nome": "Otto",\n    "cor": "Roxo"\n}`),
]);

const DiagramaObjeto: React.FC = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default DiagramaObjeto;
