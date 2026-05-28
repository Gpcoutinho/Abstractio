import type { Missao } from '../types';
import { diagramaClasseMetodo } from '../../visuals/nivel_1';

const missao: Missao = {
  id: "1-4",
  title: "Métodos",
  icon: "PiGear",
  emblem: "Nadando Rápido",
  theory: `
## O que um objeto sabe *fazer*

Você já sabe que objetos têm **atributos** (o que sabem). Agora veja o que eles sabem **fazer**.

Esses comportamentos são os **métodos**: funções que vivem dentro de uma classe e descrevem as ações dos objetos.

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):                       # método sem parâmetros extras
        return f"{self.nome}: Au au au!"

    def buscar(self, objeto):              # método com parâmetro
        return f"{self.nome} foi buscar o {objeto}!"

rex = Cachorro("Rex")
print(rex.latir())           # Rex: Au au au!
print(rex.buscar("graveto")) # Rex foi buscar o graveto!
\`\`\`

---

## O mistério do \`self\`

Todo método tem \`self\` como primeiro parâmetro — mas quando você chama o método, não passa nada para ele. Por quê?

Se você tem dois cachorros e chama \`rex.latir()\` e \`bolt.latir()\`, os dois usam o **mesmo método**. O \`self\` é o que diz ao método em qual objeto ele está operando:

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):
        # self.nome acessa o nome DESTE cachorro específico
        return f"{self.nome}: Au au!"

rex  = Cachorro("Rex")
bolt = Cachorro("Bolt")

# Python traduz rex.latir() para Cachorro.latir(rex)
print(rex.latir())   # Rex: Au au!
print(bolt.latir())  # Bolt: Au au!
\`\`\`

> **Resumindo o \`self\`:** é a referência ao objeto que chamou o método — sem ele, o método não saberia em qual objeto está operando.

---

## Um exemplo completo

\`\`\`python
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo   = saldo

    def depositar(self, valor):
        self.saldo += valor
        return f"Saldo: R\${self.saldo:.2f}"

    def sacar(self, valor):
        if valor > self.saldo:
            return f"Saldo insuficiente. Você tem R\${self.saldo:.2f}"
        self.saldo -= valor
        return f"Saldo: R\${self.saldo:.2f}"

conta = ContaBancaria("Maria", 100.0)
print(conta.depositar(50))  # Saldo: R$150.00
print(conta.sacar(30))      # Saldo: R$120.00
\`\`\`

---

## Método vs. função comum

| | Função | Método |
|---|---|---|
| Onde fica | Fora de uma classe | Dentro de uma classe |
| Acessa dados do objeto? | Não | Sim (via \`self\`) |
| Como chamar | \`latir(cachorro)\` | \`cachorro.latir()\` |

${diagramaClasseMetodo}

> **Resumindo:** Métodos são as ações que um objeto sabe executar. Sempre têm \`self\` para saber em qual objeto estão operando — mas você não precisa passá-lo na chamada.
`,
  exercise: {
    question: "Por que todo método de instância em Python deve ter `self` como primeiro parâmetro?",
    options: [
      "É uma convenção opcional que melhora apenas a legibilidade.",
      "Para que o método acesse e modifique os atributos do objeto específico que o chamou.",
      "Porque o Python exige que toda função tenha ao menos um parâmetro.",
      "Para indicar que o método é público e acessível externamente."
    ],
    correct: 1,
    explanation: "Correto! `self` é uma referência à instância. Sem ele, o método não saberia qual objeto está manipulando.",
    wrong_explanations: [
      "`self` não é opcional. Sem ele, o Python não passa a instância ao método automaticamente, causando `TypeError` ao tentar acessar qualquer atributo do objeto.",
      "",
      "Funções comuns em Python podem ter zero parâmetros. O `self` é específico de métodos de instância, para que eles saibam em qual objeto estão operando.",
      "Visibilidade em Python é controlada por prefixos de nome (`_` ou `__`), não pelo `self`. O `self` serve para o método referenciar o objeto que o chamou."
    ]
  },
  exercicios: [
    {
      id: '1-4-e1',
      question: 'Qual é a diferença entre uma função comum e um método em Python?',
      options: [
        'Métodos não podem receber parâmetros, ao contrário das funções',
        'Funções sempre retornam valores; métodos nunca retornam',
        'Não há diferença — método é apenas outro nome para função',
        'Um método é definido dentro de uma classe e opera sobre objetos daquela classe',
      ],
      correct: 3,
      explanation: 'A diferença central está no lugar onde o código vive: um método fica dentro de uma classe, tem acesso ao objeto via `self` e pode ler ou modificar seus atributos. Uma função comum não tem esse vínculo.',
    },
    {
      id: '1-4-e2',
      question: 'Como se chama o método `latir()` de um objeto chamado `rex`?',
      options: [
        '`rex.latir()`',
        '`latir(rex)`',
        '`Cachorro.latir()`',
        '`call rex.latir`',
      ],
      correct: 0,
      explanation: 'Métodos são chamados com a notação ponto: `objeto.metodo()`. O `rex.latir()` diz ao objeto `rex` para executar a ação `latir`.',
    },
    {
      id: '1-4-e3',
      question: 'O método `depositar(self, valor)` faz `self.saldo += valor`. Isso significa que:',
      options: [
        'O método retorna o novo saldo sem modificar o objeto',
        'O método modifica o atributo `saldo` do objeto que o chamou',
        'O método cria uma nova conta com saldo maior',
        'O método apaga o atributo `saldo` anterior',
      ],
      correct: 1,
      explanation: '`self.saldo += valor` acessa e modifica diretamente o atributo `saldo` do objeto atual. Essa é uma das principais utilidades dos métodos: alterar o estado do objeto.',
    },
    {
      id: '1-4-e4',
      question: 'O método `buscar(self, objeto)` é chamado com `rex.buscar("graveto")`. Qual é o valor de `objeto` dentro do método?',
      options: [
        '`rex`',
        '`"graveto"`',
        '`self`',
        '`Cachorro`',
      ],
      correct: 1,
      explanation: '`self` é passado automaticamente pelo Python — é `rex`. `"graveto"` é o argumento para o parâmetro `objeto`. Ao executar o método, `objeto` terá o valor `"graveto"`.',
    },
    {
      id: '1-4-e5',
      question: 'No paradigma procedural, a mesma ação de um cachorro latir seria chamada como:',
      options: [
        '`cachorro.latir()`',
        '`latir(cachorro)`',
        '`Cachorro.latir()`',
        '`def latir(cachorro):`',
      ],
      correct: 1,
      explanation: 'A tabela da missão mostra: no procedural, o objeto é passado como argumento para a função — `latir(cachorro)`. Na POO, o objeto chama o método com a notação ponto — `cachorro.latir()`. Mesma ação, organização oposta.',
    },
    {
      id: '1-4-e6',
      question: 'Por que `self` não precisa ser passado explicitamente ao chamar `rex.latir()`?',
      options: [
        '`self` é uma variável global criada automaticamente pelo Python',
        '`self` é ignorado quando não é passado explicitamente',
        'Python automaticamente passa `rex` como `self` ao usar a notação ponto',
        'Python usa o nome da variável `rex` como `self` diretamente',
      ],
      correct: 2,
      explanation: 'Quando você escreve `rex.latir()`, o Python internamente faz `Cachorro.latir(rex)` — passa o objeto à esquerda do ponto como `self`. Por isso você declara `self` na definição, mas não o passa na chamada.',
    },
  ],
  has_interativo: false
};

export default missao;
