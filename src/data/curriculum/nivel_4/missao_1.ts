import type { Missao } from '../types';

const missao: Missao = {
  id: "4-1",
  title: "Introdução ao nível",
  icon: "PiBank",
  theory: `
## O arquiteto mestre — Engenharia e Qualidade

Você sabe criar objetos, aplicar os pilares e modelar relações. Agora é hora de pensar como um **arquiteto de software** — alguém que projeta sistemas que resistem ao tempo.

Código que funciona hoje, mas que ninguém consegue manter amanhã, não é bom código. Este nível trata de princípios e ferramentas que tornam sistemas **sustentáveis**.

### O que você vai aprender

| Conceito | O que resolve |
|---|---|
| **Coesão** | Cada classe faz uma coisa só — e bem |
| **Acoplamento** | Reduzir dependências entre partes do sistema |
| **SOLID** | 5 princípios para design orientado a objetos de qualidade |
| **Generics** | Código que funciona com qualquer tipo com segurança |
| **Design Patterns** | Soluções consagradas para problemas recorrentes |

### A metáfora do arquiteto

Um bom arquiteto não apenas empilha tijolos — ele projeta estruturas que:
- São fáceis de **modificar** sem derrubar tudo
- Podem **crescer** sem se tornarem caóticas
- São **compreensíveis** por qualquer pessoa da equipe

> Esses princípios são o que diferencia desenvolvedores juniores de sêniores.
`,
  exercise: {
    question: "O que caracteriza um sistema com boa qualidade de design em POO?",
    options: [
      "Ter o maior número possível de classes e métodos.",
      "Ser fácil de modificar, crescer e entender sem quebrar partes não relacionadas.",
      "Usar sempre todos os 4 pilares da POO em cada classe.",
      "Evitar o uso de herança e composição para reduzir complexidade."
    ],
    correct: 1,
    explanation: "Correto! Um bom design é aquele que permite evolução sem colapso — modificável, extensível e compreensível."
  },
  has_interativo: false
};

export default missao;
