import type { Missao } from '../types';

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "PiPuzzlePiece",
  emblem: "O grande oceano",
  theory: `
E aí, vamos dar o primeiro passo na nossa trilha?

Se você já cursou a disciplina de Introdução à Programação (provavelmente em C ou Python), você aprendeu a programar no paradigma **Procedural**. Lembre que a programação procedural é como uma **receita de bolo**: o código é um algoritmo linear, um passo a passo. Você cria variáveis soltas e depois cria funções separadas para mexer nelas.

## Mas afinal, o que é a Orientação a Objetos (POO)?

De forma bem direta: é simplesmente **uma maneira diferente de organizar o seu código**, pensando em **entidades vivas** em vez de listas de comandos.

Em vez de focar apenas no passo a passo (o algoritmo), a POO foca nos **atores** que fazem o programa funcionar. A gente para de pensar em variáveis espalhadas e passa a pensar em pacotes chamados **Objetos**.

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
