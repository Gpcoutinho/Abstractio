import type { Missao } from "../types";

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "PiPuzzlePiece",
  emblem: "O grande oceano",
  theory: `


Se você já cursou a disciplina de Introdução à Programação (provavelmente em C ou Python), você aprendeu a programar no paradigma **Procedural**: um passo a passo, variáveis soltas espalhadas por aí. Veja abaixo a primeir folha do caderno de anotações de Otto.

{{caderno-abertura}}

Para piorar: Marta, do laboratório vizinho, também estava usando as mesmas folhas para anotar as dela. E Pedro. E Joana. Ninguém sabia mais o que era de quem.

Você pode estar pensando: *"basta cada um usar os seus próprios papéis"*. Certo — isso resolve o problema de espaço. Mas agora Otto anota "cor: rosa", Marta escreve "pink", Pedro registra um código hexadecimal. Na hora de comparar 100 criaturas coletadas por 4 pesquisadores diferentes, o caos volta — com outro nome.

O problema não é só onde os dados ficam. É que os dados e as regras de como usá-los vivem separados — e qualquer um pode inventar as suas.

A POO propõe juntar os dois: a ficha de Ada não é só um papel com dados. É um pacote completo — os dados e as regras de como registrá-los andam juntos, inseparáveis.

## Mas afinal, o que é a Orientação a Objetos (POO)?

{{slides-poo}}

<conceito>Programação Orientada a Objetos é um paradigma que organiza o software em torno de <strong>objetos</strong> — entidades que possuem um <strong>estado</strong> (o que sabem sobre si mesmas) e um <strong>comportamento</strong> (o que sabem fazer).</conceito>

Em vez de uma lista interminável de comandos, a POO organiza o software em torno de **objetos** — entidades que *sabem coisas* (seu estado) e *sabem fazer coisas* (seu comportamento).

Otto não vai mais anotar tudo em papéis soltos. Ele vai criar uma **ficha para Ada**: o que ela é, o que ela sabe fazer. Uma ficha por criatura — organizada, completa, reutilizável.

Vamos para a próxima etapa?`,
  exercise: {
    question:
      "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas.",
    ],
    correct: 1,
    explanation:
      "POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos).",
    wrong_explanations: [
      "Isso descreve o paradigma procedural, não a POO. Na procedural, o código é uma sequência de passos; na POO, o foco é em objetos que agrupam dados e comportamentos.",
      "",
      "POO é um paradigma de programação, não uma linguagem. Python e Java são linguagens que suportam POO, mas o paradigma existe independente delas.",
      "POO não é exclusiva de interfaces gráficas — ela é usada em qualquer tipo de software: sistemas web, jogos, análise de dados, etc.",
    ],
  },
  has_interativo: false,
};

export default missao;
