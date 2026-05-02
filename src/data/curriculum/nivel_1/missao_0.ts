import type { Missao } from '../types';

const missao: Missao = {
  id: "1-0",
  title: "Introdução ao nível",
  icon: "🌍",
  theory: `
## As leis do mundo — Os 4 Pilares da POO

Se o Nível 1 te ensinou a **criar** objetos, este nível te ensina as **leis** que governam como bons objetos se comportam.

Os 4 pilares não são recursos isolados — são princípios que trabalham juntos para tornar o código:

- **Organizado** — cada coisa no seu lugar
- **Reutilizável** — escreva uma vez, use muitas vezes
- **Seguro** — proteja dados sensíveis
- **Flexível** — troque partes sem quebrar o todo

### Os 4 Pilares

| Pilar | Palavra-chave | Pergunta que responde |
|---|---|---|
| **Abstração** | Simplificar | O que este objeto *precisa* expor? |
| **Encapsulamento** | Proteger | Quem pode acessar os dados internos? |
| **Herança** | Reutilizar | Como reaproveitar comportamentos existentes? |
| **Polimorfismo** | Uniformizar | Como tratar objetos diferentes da mesma forma? |

> Cada missão a seguir explora um pilar com exemplos práticos. Ao final, você verá como eles se complementam.
`,
  exercise: {
    question: "Qual é o principal objetivo dos 4 pilares da POO?",
    options: [
      "Aumentar o número de linhas de código para tornar o sistema mais robusto.",
      "Tornar o código organizado, reutilizável, seguro e flexível.",
      "Substituir completamente a programação procedural em todos os casos.",
      "Garantir que todas as classes herdem de uma única superclasse."
    ],
    correct: 1,
    explanation: "Correto! Os pilares são princípios que, juntos, produzem código de qualidade: organizado, reutilizável, seguro e flexível."
  },
  has_interativo: false
};

export default missao;
