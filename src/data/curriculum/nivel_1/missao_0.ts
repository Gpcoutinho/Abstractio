import type { Missao } from "../types";

const missao: Missao = {
  id: "1-0",
  title: "Antes de começar",
  icon: "PiWaveform",
  emblem: "Molhando os tentáculos",
  theory: `
## Mas pra quê estudar isso?

Você está vivendo sua vida plenamente: aprendeu a programar em C ou Python, entendeu que algoritmos são uma lista de instruções sequenciais que resolvem um problema, que operadores condicionais *if/else* auxiliam em tomadas de decisão, e que matrizes surgem quando arrays já não são suficientes. Lindo, completo.

De repente, chega o momento que todos temem: a disciplina de POO. A primeira pergunta que eu me fiz, sendo sincera, foi: "Mas pra quê estudar isso?". Eu já me sentia capaz de resolver todos os problemas do mundo utilizando a programação procedural, linear, organizada… essa história de objetos chegou do nada para bagunçar tudo.

---

## Paradigmas não competem — se complementam

Se você, assim como eu, também compartilha desse sentimento, o Abstractio é pra você. Não me entenda mal: eu ainda amo a programação procedural. No entanto, a orientação a objetos tem um valor especial só dela, que resolve inúmeros problemas que a procedural, sozinha, não daria conta. E essa é a beleza — vamos encontrar um lado positivo — dos diversos paradigmas de programação. Cada um serve a um propósito:

> Na medicina: você não vai ao oftalmologista quando pega uma gripe, e nem marca um cardiologista para tratar um pé quebrado. As especialidades não competem entre si, elas se complementam.

Então qual seria esse propósito tão essencial da POO? Se eu já consigo definir variáveis e utilizá-las na procedural, qual a necessidade de criar um Objeto e administrá-lo? Esse questionamento será o pontapé inicial dos nossos estudos. E a gente promete: vale MUITO a pena entender esse universo fantástico dos Objetos.

---

## Conheça Otto

Para tornar essa jornada mais leve, pedimos que você se coloque no lugar do protagonista lúdico da plataforma, Otto. Ele é um **polvo cientista** cheio de curiosidade sobre o oceano e tudo que existe nele. E é nesse contexto leve que você vai entender todos os conceitos da POO:

{{polvonilson-intro}}

---

## O que você vai encontrar por aqui

{{o-que-vai-encontrar}}

---

Vamos juntos?


> ⚠️ Lembrete: este não é um curso de Java ou Python, mas algumas informações sobre as linguagens serão trazidas conforme a necessidade.
`,
  extra_exercises: [
    {
      id: '1-0-e1',
      question: 'O que é um paradigma de programação?',
      options: [
        'Uma forma de classificar linguagens de programação conforme o estilo de resolver problemas',
        'Um conjunto de regras sintáticas específicas de uma linguagem',
        'Um algoritmo para organizar código em pastas e arquivos',
        'Uma ferramenta de depuração (debug) de código',
      ],
      correct: 0,
      explanation: 'Paradigma de programação é um modelo ou estilo de programar — uma maneira de pensar e estruturar soluções. Ele define como o programador organiza o código e aborda problemas, independentemente da sintaxe da linguagem.',
    },
    {
      id: '1-0-e2',
      question: 'Qual das alternativas melhor descreve o paradigma procedural?',
      options: [
        'Organiza o programa em torno de objetos com estado e comportamento',
        'Constrói o programa combinando funções sem efeitos colaterais',
        'Executa o programa como uma sequência de instruções passo a passo, com funções e dados separados',
        'Usa regras lógicas para deduzir resultados automaticamente',
      ],
      correct: 2,
      explanation: 'No paradigma procedural, o código é uma sequência de comandos executados em ordem. Funções agrupam lógica, mas os dados ficam "soltos" — separados das funções que os manipulam. É o modelo aprendido em Introdução à Programação.',
    },
    {
      id: '1-0-e3',
      question: 'Em qual situação a POO traz maior vantagem em relação ao procedural?',
      options: [
        'Em scripts curtos executados uma única vez',
        'Em cálculos matemáticos simples com poucas variáveis',
        'Quando a performance do programa é o único critério',
        'Ao modelar sistemas com muitas entidades que têm dados e comportamentos próprios',
      ],
      correct: 3,
      explanation: 'A POO brilha em sistemas complexos — onde existem muitas entidades (clientes, produtos, contas) que têm dados e ações próprios. Ela organiza o código de forma que cada entidade "cuida" de si mesma, facilitando manutenção e expansão.',
    },
    {
      id: '1-0-e4',
      question: 'Paradigmas de programação concorrem entre si — apenas um deve ser usado por projeto?',
      options: [
        'Não. Eles se complementam e podem ser combinados conforme a necessidade',
        'Sim. Misturar paradigmas causa erros e dificulta a manutenção',
        'Sim. Cada linguagem suporta somente um paradigma',
        'Não, mas a POO sempre substitui os outros quando disponível',
      ],
      correct: 0,
      explanation: 'Paradigmas se complementam! Python, por exemplo, suporta procedural, orientado a objetos e funcional no mesmo projeto. A escolha depende do problema — um script simples pode ser procedural; um sistema de vendas se beneficia da POO.',
    },
    {
      id: '1-0-e5',
      question: 'Otto programa uma calculadora simples e um sistema de vendas com clientes e produtos. Em qual projeto a POO é mais indicada?',
      options: [
        'Na calculadora, pois operações matemáticas são melhor modeladas com objetos',
        'No sistema de vendas, pois há entidades com dados e comportamentos distintos',
        'Nos dois igualmente, pois a POO é sempre superior ao procedural',
        'Em nenhum, pois ambos são simples demais para justificar POO',
      ],
      correct: 1,
      explanation: 'O sistema de vendas tem entidades ricas — Cliente (nome, e-mail), Produto (preço, estoque), Pedido (itens, total). A POO organiza isso naturalmente. Já a calculadora é uma sequência de operações, ideal para o procedural.',
    },
    {
      id: '1-0-e6',
      question: 'O paradigma funcional trata o programa como:',
      options: [
        'Um conjunto de objetos que se comunicam por mensagens',
        'Um banco de regras lógicas que deduzem conclusões',
        'Uma lista de instruções executadas em sequência',
        'Uma composição de funções matemáticas que evitam estados mutáveis',
      ],
      correct: 3,
      explanation: 'No paradigma funcional, tudo é função. Os dados não mudam (imutabilidade) e funções não têm efeitos colaterais. É diferente da POO, onde objetos têm estado que pode mudar com o tempo.',
    },
  ],
  has_minigame: false,
};

export default missao;
