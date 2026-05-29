import type { Missao } from '../types';

const missao: Missao = {
  id: "1-6",
  title: "Construtor",
  icon: "PiBuilding",
  emblem: "O Nascimento",
  theory: `
## O momento do nascimento

Quando um bebê nasce, alguém preenche a **certidão de nascimento**: nome, data, local... Sem isso, o bebê existe fisicamente, mas o mundo não sabe nada sobre ele.

Em POO, quando um objeto é criado, o mesmo acontece: alguém precisa definir as informações iniciais. Quem faz isso é o **construtor**.

> **Construtor** = o método chamado automaticamente no momento em que o objeto é criado, para definir seus valores iniciais.

Em Python, o construtor tem um nome especial: \`__init__\` (com dois underscores antes e depois).

---

## Como funciona o \`__init__\`

\`\`\`python
class Personagem:
    #          ↓ self = o personagem sendo criado
    def __init__(self, nome, classe, vida=100):
        #  ↑ nome e classe são obrigatórios
        #                        ↑ vida tem valor padrão: 100

        self.nome   = nome    # define o nome do personagem
        self.classe = classe  # define a classe (guerreiro, mago...)
        self.vida   = vida    # define a vida inicial
        self.nivel  = 1       # todo personagem começa no nível 1

guerreiro = Personagem("Thor",   "Guerreiro")
mago      = Personagem("Merlin", "Mago", vida=80)

print(guerreiro.vida)  # 100  ← usou o padrão
print(mago.vida)       # 80   ← sobrescreveu o padrão
print(mago.nivel)      # 1    ← definido automaticamente
\`\`\`

---

## Parâmetros obrigatórios vs. com padrão

\`\`\`python
class Produto:
    def __init__(self, nome, preco, estoque=0, disponivel=True):
        self.nome       = nome       # obrigatório
        self.preco      = preco      # obrigatório
        self.estoque    = estoque    # opcional — padrão: 0
        self.disponivel = disponivel # opcional — padrão: True

caneta   = Produto("Caneta",   2.50, 100)
caderno  = Produto("Caderno",  15.00)       # estoque = 0
borracha = Produto("Borracha", 1.00, 0, False)

print(caneta.estoque)      # 100
print(caderno.estoque)     # 0
print(borracha.disponivel) # False
\`\`\`

---

## O \`__str__\`: como o objeto se apresenta

Sem definir como o objeto deve ser exibido, \`print()\` mostra algo feio:

\`\`\`python
print(caneta)  # <__main__.Produto object at 0x7f3a...>
\`\`\`

O método \`__str__\` resolve isso:

\`\`\`python
class Produto:
    def __init__(self, nome, preco, estoque=0):
        self.nome    = nome
        self.preco   = preco
        self.estoque = estoque

    def __str__(self):
        return f"{self.nome} — R\${self.preco:.2f} ({self.estoque} em estoque)"

caneta = Produto("Caneta", 2.50, 100)
print(caneta)  # Caneta — R$2.50 (100 em estoque)
\`\`\`

> **Resumindo:** O construtor \`__init__\` é chamado automaticamente ao criar um objeto e define seus valores iniciais. O \`__str__\` define como o objeto é exibido com \`print()\`.
`,
  exercicio: {
    question: "O que acontece quando você executa `p = Produto('Caneta', 2.50)`?",
    options: [
      "Nada — é preciso chamar `p.init()` manualmente depois.",
      "Um erro é lançado porque `__init__` não foi chamado explicitamente.",
      "O Python chama `__init__` automaticamente, inicializando os atributos do objeto.",
      "O objeto é criado, mas seus atributos ficam como `None` até serem definidos."
    ],
    correct: 2,
    explanation: "Correto! `__init__` é chamado automaticamente pelo Python no momento da criação do objeto. Você não precisa invocá-lo.",
    wrong_explanations: [
      "`__init__` é chamado automaticamente pelo Python ao criar o objeto. Não existe um método `p.init()` — e você nunca precisa invocá-lo manualmente em uso normal.",
      "Não há erro. O Python chama `__init__` implicitamente durante a criação do objeto. A chamada explícita só ocorre em casos especiais, como `super().__init__()` em herança.",
      "",
      "Os atributos são definidos durante a criação, dentro do `__init__`. Eles já existem com os valores corretos no instante em que o objeto fica disponível."
    ]
  },
  exercicios: [
    {
      id: '1-6-e1',
      question: 'Qual é o nome do construtor em Python?',
      options: [
        '`__new__`',
        '`__create__`',
        '`__start__`',
        '`__init__`',
      ],
      correct: 3,
      explanation: 'Em Python, o construtor é sempre o método `__init__` — com dois underscores antes e depois. Ele é chamado automaticamente quando um objeto é criado.',
    },
    {
      id: '1-6-e2',
      question: 'A missão compara o construtor à certidão de nascimento. O que essa analogia transmite?',
      options: [
        'O construtor define os dados iniciais do objeto no momento em que ele é criado',
        'O construtor é obrigatório para que o objeto exista fisicamente',
        'O construtor registra o objeto em um banco de dados central',
        'Sem o construtor, o objeto não pode ser modificado depois',
      ],
      correct: 0,
      explanation: 'Assim como a certidão preenche nome, data e local no momento do nascimento, o construtor define os valores iniciais do objeto no instante em que ele é criado.',
    },
    {
      id: '1-6-e3',
      question: 'Na classe `Produto`, o construtor é `__init__(self, nome, preco, estoque=0, disponivel=True)`. Ao criar `Produto("Caderno", 15.00)`, qual é o valor de `estoque`?',
      options: [
        '`None` — parâmetros não passados ficam indefinidos',
        'Causa erro — `estoque` é obrigatório',
        '`0` — usou o valor padrão',
        '`True` — o Python usa o próximo parâmetro como padrão',
      ],
      correct: 2,
      explanation: 'Parâmetros com valor padrão são opcionais na chamada. `estoque` e `disponivel` usam seus padrões (`0` e `True`) quando não são fornecidos.',
    },
    {
      id: '1-6-e4',
      question: 'Dentro do `__init__`, o que `self` representa?',
      options: [
        'O nome da classe',
        'O primeiro parâmetro passado pelo programador',
        'Uma variável global com as configurações do Python',
        'O objeto que está sendo criado naquele momento',
      ],
      correct: 3,
      explanation: 'O material mostra diretamente: `self` = o objeto sendo criado. Quando `self.nome = nome` é executado, está sendo definido o atributo `nome` deste objeto específico.',
    },
    {
      id: '1-6-e5',
      question: 'Na classe `Personagem`, o construtor faz `self.nivel = 1` sem nenhum parâmetro para isso. Isso significa que:',
      options: [
        'O programador deve sempre passar `nivel=1` ao criar um personagem',
        'O atributo `nivel` não pode ser alterado depois',
        'Todo personagem criado começa automaticamente no nível 1',
        '`nivel` fica como `None` se não for passado como argumento',
      ],
      correct: 2,
      explanation: 'O construtor pode inicializar atributos com valores fixos que não são parâmetros. `self.nivel = 1` garante que todo objeto `Personagem` nasce no nível 1, independentemente dos argumentos fornecidos.',
    },
    {
      id: '1-6-e6',
      question: 'Sem definir `__str__`, o que acontece ao usar `print()` em um objeto?',
      options: [
        'Python lança um erro porque o objeto não pode ser impresso',
        'Python exibe os valores de todos os atributos automaticamente',
        'Python exibe algo como `<__main__.Produto object at 0x7f3a...>` — pouco útil',
        'Python exibe apenas o nome da classe do objeto',
      ],
      correct: 2,
      explanation: 'Sem `__str__`, Python mostra o endereço de memória do objeto — informação técnica, não legível. O `__str__` define uma representação útil, exibida quando você usa `print()` no objeto.',
    },
  ],
  has_interativo: false
};

export default missao;
