import type { Missao } from '../types';

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "PiPuzzlePiece",
  emblem: "O grande oceano",
  theory: `
<caderno-abertura />

Se você já cursou a disciplina de Introdução à Programação (provavelmente em C ou Python), você aprendeu a programar no paradigma **Procedural** — exatamente como as anotações de Otto: um passo a passo, variáveis soltas espalhadas por aí.

## Mas afinal, o que é a Orientação a Objetos (POO)?

{{slides-poo}}

> "A orientação a objetos é um método de desenvolvimento que organiza o software como uma coleção de objetos — cada um incorporando estrutura de dados e comportamento."
>
> — Grady Booch, *Análise e Projeto Orientado a Objetos com Aplicações*

Em outras palavras: em vez de papéis soltos, Otto vai aprender a criar **fichas** — uma por criatura, com tudo que ela é e tudo que ela sabe fazer. A POO foca nos **atores** que fazem o programa funcionar, não na lista de comandos.

Vamos para a próxima etapa?
`,
  exercise: {
    question: "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas."
    ],
    correct: 1,
    explanation: "POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos).",
    wrong_explanations: [
      "Isso descreve o paradigma procedural, não a POO. Na procedural, o código é uma sequência de passos; na POO, o foco é em objetos que agrupam dados e comportamentos.",
      "",
      "POO é um paradigma de programação, não uma linguagem. Python e Java são linguagens que suportam POO, mas o paradigma existe independente delas.",
      "POO não é exclusiva de interfaces gráficas — ela é usada em qualquer tipo de software: sistemas web, jogos, análise de dados, etc."
    ]
  },
  has_interativo: false
};

export default missao;
