import type { Missao } from '../types';

const missao: Missao = {
  id: "3-1",
  title: "Introdução ao nível",
  icon: "PiCity",
  theory: `
## A sociedade dos objetos — Mecânica e Relações

Nos níveis anteriores você aprendeu a criar objetos e a aplicar os 4 pilares. Agora vamos explorar como objetos **interagem entre si**.

Em sistemas reais, objetos raramente vivem isolados. Eles se comunicam, dependem uns dos outros e formam estruturas complexas — como uma sociedade.

### O que você vai aprender

| Conceito | O que é |
|---|---|
| **Sobrescrita** | Redefinir o comportamento de um método herdado |
| **Sobrecarga** | Adaptar um método para diferentes formas de chamada |
| **Contratos** | Interfaces e classes abstratas como acordos entre objetos |
| **Associação** | Um objeto *usa* outro |
| **Agregação** | Um objeto *tem* outro (relação fraca) |
| **Composição** | Um objeto *é composto de* outro (relação forte) |

### A analogia da sociedade

Pense em objetos como pessoas em uma cidade:
- Uma pessoa pode **sobrescrever** um hábito herdado da família
- Assinar um **contrato** a obriga a cumprir certas responsabilidades
- Ela pode **usar** um táxi (associação), **ter** um carro (agregação) ou **ter** um coração (composição)

> Entender relações é o que separa código amador de código profissional.
`,
  exercise: {
    question: "Por que é importante entender como objetos se relacionam em POO?",
    options: [
      "Porque objetos isolados são mais eficientes computacionalmente.",
      "Porque sistemas reais são formados por objetos que colaboram — entender relações é essencial para modelar o mundo real.",
      "Porque o Python exige que todos os objetos estejam conectados entre si.",
      "Porque relações entre objetos substituem a necessidade de herança."
    ],
    correct: 1,
    explanation: "Exato! Sistemas reais são redes de objetos colaborando. Modelar essas relações corretamente é o que torna um design robusto e manutenível."
  },
  has_interativo: false
};

export default missao;
