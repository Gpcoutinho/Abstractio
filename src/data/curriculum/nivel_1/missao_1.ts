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

{{caos-anotacoes}}

Você pode estar pensando: *"basta cada um usar os seus próprios papéis"*. Certo – isso resolve o problema de espaço. Mas agora Otto anota "cor: rosa", Marta escreve "pink", Pedro registra um código hexadecimal. Na hora de comparar 100 criaturas coletadas por 4 pesquisadores diferentes, o caos volta – com outro nome.

{{dados-globais}}

O problema não é só onde os dados ficam. É que os dados e as regras de como usá-los vivem separados – e qualquer um pode inventar as suas.

A POO propõe juntar os dois: a ficha de Ada não é só um papel com dados. É um pacote completo – os dados e as regras de como registrá-los andam juntos, inseparáveis.

## Mas afinal, o que é a Orientação a Objetos (POO)?

{{slides-poo}}

<conceito>Programação Orientada a Objetos é um paradigma que organiza o software em torno de <strong>objetos</strong> – entidades que possuem um <strong>estado</strong> (o que sabem sobre si mesmas) e um <strong>comportamento</strong> (o que sabem fazer).</conceito>

Em vez de uma lista interminável de comandos, a POO organiza o software em torno de **objetos** – entidades que *sabem coisas* (seu estado) e *sabem fazer coisas* (seu comportamento).

Otto não vai mais anotar tudo em papéis soltos. Ele vai criar uma **ficha para Ada**: o que ela é, o que ela sabe fazer. Uma ficha por criatura – organizada, completa, reutilizável.

Vamos para a próxima etapa?`,
  exercicio: {
    question:
      "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma sequência linear de instruções que o computador executa.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas.",
    ],
    correct: 0,
    explanation:
      "POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos).",
    wrong_explanations: [
      "",
      "Isso descreve o paradigma procedural, não a POO. Na procedural, o código é uma sequência de passos; na POO, o foco é em objetos que agrupam dados e comportamentos.",
      "POO é um paradigma de programação, não uma linguagem. Python e Java são linguagens que suportam POO, mas o paradigma existe independente delas.",
      "POO não é exclusiva de interfaces gráficas – ela é usada em qualquer tipo de software: sistemas web, jogos, análise de dados, etc.",
    ],
  },
  exercicios: [
    {
      id: '1-1-e1',
      question: 'Na computação, um paradigma de programação pode ser entendido como:',
      options: [
        'Uma linguagem específica como Python ou Java',
        'Um conjunto de bibliotecas para construir programas',
        'Uma lente através da qual o programador enxerga a arquitetura do sistema',
        'Um método de depuração de código',
      ],
      correct: 2,
      explanation: '"Orientada" significa "focada em" ou "guiada por". Na computação isso é chamado de paradigma — uma lente que define como o programador organiza e enxerga a arquitetura do sistema.',
    },
    {
      id: '1-1-e2',
      question: 'Na POO, o foco do programador deixa de ser:',
      options: [
        'Usar variáveis para armazenar informações',
        'Criar funções que executam tarefas',
        'Escolher a linguagem de programação mais adequada',
        'Escrever uma lista de comandos sequenciais para o computador executar',
      ],
      correct: 3,
      explanation: 'Na POO, você para de pensar em "lista de passos" e passa a modelar atores — objetos que conversam e interagem entre si para fazer o sistema funcionar.',
    },
    {
      id: '1-1-e3',
      question: 'Qual é o problema central que a POO resolve em relação ao paradigma procedural?',
      options: [
        'O código procedural é mais lento que o orientado a objetos',
        'Dados e as regras de como usá-los vivem separados — qualquer um pode inventar as suas',
        'No procedural, não é possível criar funções para manipular dados',
        'No procedural, não é possível usar mais de uma variável com o mesmo nome',
      ],
      correct: 1,
      explanation: 'No procedural, variáveis ficam soltas e as regras de como manipulá-las são funções separadas. Qualquer parte do código pode acessar e modificar esses dados do seu próprio jeito, gerando inconsistência.',
    },
    {
      id: '1-1-e4',
      question: 'Na POO, a solução para dados soltos e regras separadas é:',
      options: [
        'Criar um pacote completo onde dados e regras ficam juntos, inseparáveis',
        'Guardar todos os dados em um único arquivo de configuração',
        'Proibir o uso de variáveis globais no programa',
        'Dividir o código em módulos independentes',
      ],
      correct: 0,
      explanation: 'O objeto é esse pacote completo — os dados e as regras de como registrá-los e manipulá-los andam sempre juntos. Não há mais "qualquer um pode inventar as suas".',
    },
    {
      id: '1-1-e5',
      question: 'Na POO, os Objetos são:',
      options: [
        'Funções especiais que retornam múltiplos valores',
        'Variáveis do tipo lista ou dicionário',
        'Módulos externos importados no programa',
        'Blocos de código que representam entidades — físicas ou abstratas',
      ],
      correct: 3,
      explanation: 'Objetos representam entidades do mundo real ou abstrato — uma conta bancária, um produto, uma criatura. Cada objeto agrupa os dados dessa entidade e as ações que ela sabe realizar.',
    },
    {
      id: '1-1-e6',
      question: 'Em POO, todo objeto possui estado e comportamento. O comportamento se refere a:',
      options: [
        'Os dados que o objeto armazena sobre si mesmo',
        'O que o objeto sabe fazer — suas ações',
        'O nome do bloco de código que originou o objeto',
        'O valor atual de cada um dos dados do objeto',
      ],
      correct: 1,
      explanation: 'Estado é o que o objeto sabe sobre si mesmo. Comportamento é o que ele sabe fazer. Juntos, esses dois aspectos formam um objeto completo na POO.',
    },
  ],
  has_interativo: false
};

export default missao;
