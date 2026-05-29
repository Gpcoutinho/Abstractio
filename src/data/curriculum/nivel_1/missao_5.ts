import type { Missao } from '../types';
import { moldeBoloAnimation, diagramaClasseObjeto } from '../../visuals/nivel_1';

const missao: Missao = {
  id: "1-5",
  title: "Classe",
  icon: "PiRuler",
  emblem: "Modelador Mágico",
  theory: `
## A forma de assar bolo

Na missão anterior, você conheceu o **objeto** — o bolo. Agora é hora de conhecer o **molde**: a **classe**.

A forma de assar bolos não é um bolo. Ela é a instrução de como criar bolos. Uma classe funciona exatamente assim: define como os objetos daquele tipo devem ser.

> **Classe** = o molde que descreve como os objetos serão criados — quais dados eles têm e o que sabem fazer.

${moldeBoloAnimation}

---

**Cuidado para não confundir os bolos**

Se você já aprendeu que "um algoritmo é como uma receita de bolo", prepare-se — na POO usamos a mesma analogia com um papel diferente, e isso costuma dar um nó. A diferença está no foco:

- **Procedural (Algoritmo = Receita = Ações):** foca em **verbos** — *quebre* os ovos, *misture* a farinha, *asse* por 40 minutos. A receita *é* o programa: executa de cima a baixo uma vez e produz um resultado.
- **POO (Classe = Receita/Forma = Ingredientes):** foca em **substantivos** — não importa *como* (passos) você fez a massa; importa a *estrutura* (ingredientes): "todo bolo que sair daqui seguirá este molde". A classe não executa sozinha — ela existe para criar objetos.

Resumindo: a receita é uma **lista de tarefas**. A classe é uma **fábrica**.

<bolo-factory></bolo-factory>

---

## Criando uma classe

\`\`\`python
# "class" avisa o Python: "estou criando um molde"
class Cachorro:
    def __init__(self, nome, raca):
        self.nome = nome   # dado que todo cachorro tem
        self.raca = raca   # dado que todo cachorro tem

    def apresentar(self):
        return f"Au! Sou {self.nome}, um {self.raca}!"
\`\`\`

Criando cachorros a partir do molde:

\`\`\`python
rex  = Cachorro("Rex",  "Labrador")
bolt = Cachorro("Bolt", "Husky")
mia  = Cachorro("Mia",  "Poodle")

print(rex.apresentar())   # Au! Sou Rex, um Labrador!
print(bolt.apresentar())  # Au! Sou Bolt, um Husky!
print(mia.apresentar())   # Au! Sou Mia, um Poodle!
\`\`\`

**Uma classe, três objetos diferentes** — o molde é o mesmo, cada produto é único.

${diagramaClasseObjeto}

---

## O que uma classe pode ter

| Parte | O que é | Exemplo |
|---|---|---|
| **Atributo** | Uma característica | \`self.nome\`, \`self.raca\` |
| **Método** | Um comportamento | \`def apresentar(self)\` |
| **Construtor** | O setup inicial | \`def __init__(self, ...)\` |

Cada uma dessas partes terá sua própria missão neste nível.

---

## Regra de nomenclatura

Por convenção, nomes de classes em Python usam **PascalCase** — cada palavra começa com maiúscula:

\`\`\`python
class Cachorro:       # correto
class ContaBancaria:  # correto
class cachorro:       # evitar
class conta_bancaria: # evitar
\`\`\`

> **Resumindo:** Uma classe é o molde que define como um tipo de objeto deve ser — com suas características e comportamentos. A partir de uma classe, você cria quantos objetos quiser.
`,
  exercicio: {
    question: "Escolha a alternativa que melhor define o que é uma **classe**:",
    options: [
      "Um molde que descreve as propriedades e comportamentos de um tipo de objeto.",
      "Um objeto específico criado em tempo de execução.",
      "Uma biblioteca externa usada para executar a linguagem.",
      "Um erro de sintaxe comum em Python.",
    ],
    correct: 0,
    explanation: "Exato! Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos.",
    wrong_explanations: [
      "",
      "Isso descreve uma instância (objeto), não uma classe. A classe é o molde; o objeto é o produto concreto criado a partir dela.",
      "Bibliotecas são coleções de código externo que você importa. Classes são estruturas da própria linguagem para definir tipos de objetos.",
      "`class` é uma palavra reservada válida do Python para declarar uma classe — o oposto de um erro de sintaxe.",
    ]
  },
  exercicios: [
    {
      id: '1-5-e1',
      question: 'A partir de uma única classe, quantos objetos podemos criar?',
      options: [
        'Apenas um objeto por classe',
        'Quantos quisermos — não há limite',
        'No máximo 10, por limitação do Python',
        'Apenas o número de atributos que a classe tem',
      ],
      correct: 1,
      explanation: 'Uma classe é um molde reutilizável. Assim como uma forma de bolo pode ser usada infinitas vezes, uma classe pode criar ilimitados objetos. Cada um tem seus próprios valores, mas todos seguem a mesma estrutura.',
    },
    {
      id: '1-5-e2',
      question: 'Na analogia da missão, a classe é a forma de assar bolos e o objeto é o bolo. Que conclusão isso transmite?',
      options: [
        'Cada bolo é idêntico ao molde em todos os aspectos',
        'Uma forma só pode ser usada uma vez',
        'A forma e o bolo são a mesma coisa em momentos diferentes',
        'A partir de uma classe, criamos quantos objetos quisermos — todos seguindo a mesma estrutura',
      ],
      correct: 3,
      explanation: 'A forma não é o bolo — ela é a instrução de como criar bolos. A classe não é o objeto — é o molde que define como os objetos daquele tipo devem ser.',
    },
    {
      id: '1-5-e3',
      question: 'Qual sintaxe declara corretamente uma classe chamada `ContaBancaria` em Python?',
      options: [
        '`class ContaBancaria:`',
        '`def ContaBancaria():`',
        '`object ContaBancaria:`',
        '`new class ContaBancaria:`',
      ],
      correct: 0,
      explanation: 'Classes são declaradas com `class` seguido do nome em PascalCase e dois-pontos. PascalCase: cada palavra começa com maiúscula — `ContaBancaria`, não `conta_bancaria`.',
    },
    {
      id: '1-5-e4',
      question: 'Segundo a tabela da missão, quais são as três partes que uma classe pode ter?',
      options: [
        'Variáveis, funções e imports',
        'Atributos, métodos e construtor',
        'Dados, ações e herança',
        'Tipos, valores e referências',
      ],
      correct: 1,
      explanation: 'A tabela mostra: Atributo (uma característica, como `self.nome`), Método (um comportamento, como `def apresentar(self)`) e Construtor (o setup inicial, `def __init__(self, ...)`).',
    },
    {
      id: '1-5-e5',
      question: 'A missão descreve que o procedural foca em verbos e a POO foca em substantivos. O que isso significa na prática?',
      options: [
        'Na POO, os nomes das variáveis são mais importantes que no procedural',
        'Na POO, não é possível usar verbos como nomes de métodos',
        'No procedural, o foco está nos passos de execução; na POO, na estrutura das entidades',
        'No procedural, os dados ficam organizados em substantivos',
      ],
      correct: 2,
      explanation: 'A receita (procedural) é uma lista de tarefas: faça isso, depois aquilo. A classe (POO) é uma fábrica: define a estrutura de um tipo de objeto, não os passos para executar algo.',
    },
    {
      id: '1-5-e6',
      question: 'Qual é a principal vantagem de usar uma classe para representar cachorros em vez de variáveis soltas?',
      options: [
        'Classes agrupam dados e comportamentos relacionados, tornando o código organizado e reutilizável',
        'Classes tornam o programa mais rápido por usar menos memória',
        'Classes eliminam a necessidade de funções no código',
        'Classes permitem usar nomes de variáveis maiores',
      ],
      correct: 0,
      explanation: 'Com variáveis soltas, para 100 cachorros você teria `nome_cachorro1`, `nome_cachorro2`... um caos. Com uma classe `Cachorro`, você cria quantos objetos precisar — a lógica de como um cachorro funciona fica organizada dentro da classe.',
    },
  ],
  has_minigame: false
};

export default missao;
