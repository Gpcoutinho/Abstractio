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
  exercise: {
    question: "O que acontece quando você executa `p = Produto('Caneta', 2.50)`?",
    options: [
      "Nada — é preciso chamar `p.init()` manualmente depois.",
      "O Python chama `__init__` automaticamente, inicializando os atributos do objeto.",
      "Um erro é lançado porque `__init__` não foi chamado explicitamente.",
      "O objeto é criado, mas seus atributos ficam como `None` até serem definidos."
    ],
    correct: 1,
    explanation: "Correto! `__init__` é chamado automaticamente pelo Python no momento da criação do objeto. Você não precisa invocá-lo.",
    wrong_explanations: [
      "`__init__` é chamado automaticamente pelo Python ao criar o objeto. Não existe um método `p.init()` — e você nunca precisa invocá-lo manualmente em uso normal.",
      "",
      "Não há erro. O Python chama `__init__` implicitamente durante a criação do objeto. A chamada explícita só ocorre em casos especiais, como `super().__init__()` em herança.",
      "Os atributos são definidos durante a criação, dentro do `__init__`. Eles já existem com os valores corretos no instante em que o objeto fica disponível."
    ]
  },
  extra_exercises: [
    {
      id: '1-6-e1',
      question: 'Qual é o nome do construtor em Python?',
      options: [
        '`__init__`',
        '`__new__`',
        '`__create__`',
        '`__start__`',
      ],
      correct: 0,
      explanation: 'Em Python, o construtor é sempre o método `__init__` (com dois underscores antes e depois — chamado de "dunder init"). Ele é chamado automaticamente quando um objeto é criado com `objeto = Classe(...)`.',
    },
    {
      id: '1-6-e2',
      question: 'É obrigatório definir `__init__` em todas as classes Python?',
      options: [
        'Sim. Toda classe deve ter um `__init__`, ou ocorre erro',
        'Não. Sem `__init__`, Python usa um construtor padrão que cria o objeto sem atributos inicializados',
        'Só é obrigatório quando a classe tem mais de dois atributos',
        'Só é obrigatório quando a classe herda de outra',
      ],
      correct: 1,
      explanation: 'O `__init__` é opcional. Se você não definir, Python usa um construtor herdado de `object` que simplesmente cria o objeto vazio. Você ainda pode adicionar atributos depois, mas sem `__init__` eles não são criados automaticamente.',
    },
    {
      id: '1-6-e3',
      question: 'O que `def __init__(self, nome, idade):` declara numa classe?',
      options: [
        'Cria automaticamente os atributos `nome` e `idade` sem precisar de `self.nome = nome`',
        'Inicializa a classe inteira antes de qualquer objeto ser criado',
        'Define o construtor — o método chamado ao criar um novo objeto, recebendo `nome` e `idade` como dados iniciais',
        'Define um método comum chamado `init` que precisa ser chamado manualmente',
      ],
      correct: 2,
      explanation: '`__init__` é o construtor. Ao escrever `p = Pessoa("Ana", 30)`, Python chama automaticamente `__init__(p, "Ana", 30)`. Porém, para salvar esses dados no objeto, ainda é necessário `self.nome = nome` e `self.idade = idade`.',
    },
    {
      id: '1-6-e4',
      question: 'Por que usar `__init__` em vez de definir atributos fora da classe após criar o objeto?',
      options: [
        'Porque Python não permite atribuir atributos fora da classe',
        'Para garantir que todo objeto nasça com os dados necessários, evitando objetos incompletos',
        'Para economizar linhas de código',
        'Porque `__init__` é o único lugar onde `self` funciona',
      ],
      correct: 1,
      explanation: 'O `__init__` garante que todo objeto criado começa num estado válido. Sem ele, você precisaria lembrar de inicializar cada atributo manualmente toda vez. Se esquecer um, o programa pode quebrar ao tentar acessar um atributo que não existe.',
    },
    {
      id: '1-6-e5',
      question: 'Dado `class Produto:\n    def __init__(self, nome):\n        self.nome = nome\n        self.estoque = 0`. Qual é `p.estoque` após `p = Produto("Caneta")`?',
      options: [
        '`None`',
        '`"Caneta"`',
        '`0`',
        'Causa erro — `estoque` não foi passado como argumento',
      ],
      correct: 2,
      explanation: 'O construtor pode inicializar atributos com valores padrão sem precisar recebê-los como parâmetro. `self.estoque = 0` sempre define `estoque` como `0` para qualquer novo produto. Não é preciso passar `estoque` ao criar o objeto.',
    },
    {
      id: '1-6-e6',
      question: 'Um construtor pode chamar outros métodos da própria classe?',
      options: [
        'Não. O `__init__` só pode executar atribuições de atributos',
        'Sim. O `__init__` pode chamar outros métodos usando `self.metodo()`',
        'Só se os outros métodos também forem construtores',
        'Não. Outros métodos só existem depois que o `__init__` terminar',
      ],
      correct: 1,
      explanation: 'O `__init__` é um método como qualquer outro e pode chamar outros métodos da classe com `self.metodo()`. Isso é útil para validar dados ou configurar o objeto de forma mais complexa durante a criação.',
    },
  ],
  has_interativo: false
};

export default missao;
