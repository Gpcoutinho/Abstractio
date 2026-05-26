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
  exercise: {
    question: "Escolha a alternativa que melhor define o que é uma **classe**:",
    options: [
      "Um objeto específico criado em tempo de execução.",
      "Um molde que descreve as propriedades e comportamentos de um tipo de objeto.",
      "Uma biblioteca externa usada para executar a linguagem.",
      "Um erro de sintaxe comum em Python."
    ],
    correct: 1,
    explanation: "Exato! Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos.",
    wrong_explanations: [
      "Isso descreve uma instância (objeto), não uma classe. A classe é o molde; o objeto é o produto concreto criado a partir dela.",
      "",
      "Bibliotecas são coleções de código externo que você importa. Classes são estruturas da própria linguagem para definir tipos de objetos.",
      "`class` é uma palavra reservada válida do Python para declarar uma classe — o oposto de um erro de sintaxe."
    ]
  },
  extra_exercises: [
    {
      id: '1-5-e1',
      question: 'Quantos objetos podemos criar a partir de uma única classe?',
      options: [
        'Apenas um objeto por classe',
        'No máximo 10, por limitação do Python',
        'Apenas o número de atributos que a classe tem',
        'Quantos quisermos — não há limite',
      ],
      correct: 3,
      explanation: 'Uma classe é um molde reutilizável. Assim como uma forma de bolo pode ser usada infinitas vezes, uma classe pode criar ilimitados objetos. Cada objeto tem seus próprios valores de atributos, mas todos seguem a mesma estrutura definida pela classe.',
    },
    {
      id: '1-5-e2',
      question: 'Qual analogia melhor representa a relação entre classe e objeto?',
      options: [
        'A planta arquitetônica (classe) e as casas construídas a partir dela (objetos)',
        'O nome de uma pessoa (classe) e a identidade dela (objeto)',
        'Um arquivo de código (classe) e o programa em execução (objeto)',
        'Um banco de dados (classe) e uma consulta SQL (objeto)',
      ],
      correct: 0,
      explanation: 'A planta arquitetônica define como todas as casas daquele modelo serão. Cada casa construída é um objeto independente com seus próprios detalhes. A planta é a classe; as casas são os objetos.',
    },
    {
      id: '1-5-e3',
      question: 'Qual sintaxe declara corretamente uma classe chamada `Bicicleta` em Python?',
      options: [
        '`def Bicicleta():`',
        '`class Bicicleta:`',
        '`object Bicicleta:`',
        '`new class Bicicleta:`',
      ],
      correct: 1,
      explanation: 'Em Python, classes são declaradas com a palavra-chave `class` seguida do nome (em PascalCase por convenção) e dois-pontos. Não se usa `def` (que é para funções), `object` ou `new class`.',
    },
    {
      id: '1-5-e4',
      question: 'Classes diferentes podem ter atributos com o mesmo nome?',
      options: [
        'Não. Atributos têm nomes globais únicos em Python',
        'Só se forem do mesmo tipo de dado',
        'Sim. Cada classe tem seu próprio espaço — atributos com o mesmo nome em classes diferentes não conflitam',
        'Apenas se uma classe herdar da outra',
      ],
      correct: 2,
      explanation: 'Classes são espaços de nomes independentes. `Cachorro.nome` e `Gato.nome` são atributos completamente separados. Não há conflito. Isso é parte do encapsulamento — cada classe gerencia seus próprios dados sem interferir nas outras.',
    },
    {
      id: '1-5-e5',
      question: 'Uma classe precisa ter objetos criados para existir e ser válida no código?',
      options: [
        'Não. Uma classe pode ser definida sem nunca criar objetos a partir dela',
        'Sim. Uma classe sem objetos causa erro em Python',
        'Sim. Python só reconhece classes que tenham ao menos um objeto',
        'Não, mas uma classe sem objetos ocupa memória desnecessariamente e deve ser evitada',
      ],
      correct: 0,
      explanation: 'A definição da classe (`class Bicicleta:`) é apenas um molde no código. Ela existe independentemente de objetos. Você pode definir uma classe, importá-la em outro módulo e só criar objetos muito mais tarde.',
    },
    {
      id: '1-5-e6',
      question: 'Qual é a principal vantagem de usar classes no lugar de variáveis soltas para modelar cachorros?',
      options: [
        'Classes tornam o programa mais rápido por usar menos memória',
        'Classes eliminam a necessidade de funções no código',
        'Classes permitem usar nomes de variáveis maiores',
        'Classes agrupam dados e comportamentos relacionados, tornando o código organizado e reutilizável',
      ],
      correct: 3,
      explanation: 'Com variáveis soltas, para 100 cachorros você teria `nome_cachorro1`, `nome_cachorro2`... um caos! Com uma classe `Cachorro`, você cria uma lista de objetos. Os dados ficam organizados, e a lógica de como um cachorro funciona está dentro da classe.',
    },
  ],
  has_interativo: false
};

export default missao;
