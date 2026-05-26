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
  exercise: {
    question:
      "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com características e ações.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas.",
    ],
    correct: 1,
    explanation:
      "POO é um paradigma que organiza o código em objetos com características (dados) e ações (comportamentos).",
    wrong_explanations: [
      "Isso descreve o paradigma procedural, não a POO. Na procedural, o código é uma sequência de passos; na POO, o foco é em objetos que agrupam dados e comportamentos.",
      "",
      "POO é um paradigma de programação, não uma linguagem. Python e Java são linguagens que suportam POO, mas o paradigma existe independente delas.",
      "POO não é exclusiva de interfaces gráficas – ela é usada em qualquer tipo de software: sistemas web, jogos, análise de dados, etc.",
    ],
  },
  extra_exercises: [
    {
      id: '1-1-e1',
      question: 'Em POO, o "estado" de um objeto se refere a:',
      options: [
        'O conjunto de informações que o objeto armazena sobre si mesmo',
        'O conjunto de ações que o objeto sabe executar',
        'O nome da classe que originou o objeto',
        'A posição do objeto na memória do computador',
      ],
      correct: 0,
      explanation: 'O estado de um objeto é o conjunto de dados que ele guarda. O saldo de uma conta bancária, a cor de um carro, o nome de um cachorro — esses são dados que descrevem como o objeto está num determinado momento.',
    },
    {
      id: '1-1-e2',
      question: 'Um objeto `Cachorro` tem o método `latir()`. Esse método representa:',
      options: [
        'O estado do objeto',
        'O comportamento — o que o objeto sabe fazer',
        'A identidade única do objeto',
        'O tipo de dado do objeto',
      ],
      correct: 1,
      explanation: 'Comportamento é o conjunto de ações que um objeto sabe realizar. Métodos como `latir()`, `correr()` ou `comer()` definem o que um `Cachorro` sabe fazer — esse é o comportamento do objeto.',
    },
    {
      id: '1-1-e3',
      question: 'Na POO, dados e as funções que operam sobre eles ficam:',
      options: [
        'Separados — dados em variáveis globais, funções em módulos distintos',
        'Todos armazenados em dicionários Python',
        'Agrupados dentro da mesma classe, tornando o código mais organizado',
        'Espalhados pelo código, acessados por qualquer função',
      ],
      correct: 2,
      explanation: 'Uma das grandes vantagens da POO é a encapsulação: dados (atributos) e as funções que os manipulam (métodos) vivem juntos dentro da classe. Isso evita o problema do código procedural, onde variáveis soltas são acessadas de qualquer lugar.',
    },
    {
      id: '1-1-e4',
      question: 'Por que a POO facilita a manutenção de sistemas grandes?',
      options: [
        'Porque elimina completamente a necessidade de funções no código',
        'Porque POO gera código automaticamente sem intervenção do programador',
        'Porque objetos consomem menos memória do que variáveis simples',
        'Porque cada classe é responsável pelos seus próprios dados e comportamentos, localizando alterações',
      ],
      correct: 3,
      explanation: 'Na POO, cada classe é responsável por uma parte do sistema. Para alterar como um `Cliente` funciona, você mexe apenas na classe `Cliente`. No código procedural, uma mudança pode exigir alterações espalhadas por todo o programa.',
    },
    {
      id: '1-1-e5',
      question: 'O trecho `nome = "Rex"` / `idade = 3` / `print(nome, idade)` usa qual paradigma?',
      options: [
        'POO — porque usa variáveis para guardar informações',
        'Paradigma funcional — porque não usa classes',
        'Procedural — os dados são variáveis soltas, sem organização em objetos',
        'POO — porque usa `print`, que é um método',
      ],
      correct: 2,
      explanation: 'Variáveis soltas (`nome`, `idade`) sem uma classe que as agrupe são características do paradigma procedural. Na POO, esses dados estariam dentro de um objeto `Cachorro`, acessados como `rex.nome` e `rex.idade`.',
    },
    {
      id: '1-1-e6',
      question: 'Qual das opções NÃO é um bom exemplo de objeto em POO?',
      options: [
        'Uma conta bancária com saldo e titular',
        'A operação `2 + 3` em um cálculo isolado',
        'Um cachorro com nome, raça e idade',
        'Um produto com nome, preço e estoque',
      ],
      correct: 1,
      explanation: 'A operação `2 + 3` é apenas uma expressão matemática, sem estado próprio nem comportamento. Conta, cachorro e produto, por outro lado, têm dados que os descrevem e ações que sabem executar — são bons candidatos a objetos.',
    },
  ],
  has_interativo: false
};

export default missao;
