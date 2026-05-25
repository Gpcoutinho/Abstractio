import type { Missao } from '../types';

const missao: Missao = {
  id: "1-7",
  title: "Resumo",
  icon: "PiClipboard",
  emblem: "Polvo Graduado",
  theory: `
## Você chegou até aqui — vamos revisar!

Neste nível você aprendeu os tijolos fundamentais da POO. Vamos juntar tudo em uma história só.

---

## A história da biblioteca

Imagine que você está construindo um sistema para uma biblioteca:

\`\`\`python
class Livro:
    # Construtor: chamado automaticamente quando um livro é criado
    def __init__(self, titulo, autor, paginas):
        self.titulo  = titulo    # atributo
        self.autor   = autor     # atributo
        self.paginas = paginas   # atributo
        self.lido    = False     # atributo — começa como não lido

    # Métodos: comportamentos do livro
    def marcar_lido(self):
        self.lido = True
        return f'"{self.titulo}" marcado como lido!'

    def resumo(self):
        status = "lido" if self.lido else "na fila"
        return f"{self.titulo} por {self.autor} ({self.paginas} págs) — {status}"

    def __str__(self):
        return self.resumo()

# Objetos: instâncias concretas criadas a partir da classe
livro1 = Livro("Clean Code",        "Robert Martin",  431)
livro2 = Livro("O Poder do Hábito", "Charles Duhigg", 288)
livro3 = Livro("Sapiens",           "Yuval Harari",   443)

print(livro1.marcar_lido())  # "Clean Code" marcado como lido!
print(livro1)  # Clean Code por Robert Martin (431 págs) — lido
print(livro3)  # Sapiens por Yuval Harari (443 págs) — na fila
\`\`\`

---

## O mapa do que você aprendeu

| Conceito | O que é | No exemplo |
|---|---|---|
| **POO** | Organizar código em objetos com dados e comportamentos | O sistema inteiro |
| **Objeto** | Uma instância concreta criada a partir da classe | \`livro1\`, \`livro2\` |
| **Classe** | O molde que define como um objeto deve ser | \`class Livro:\` |
| **Atributo** | Uma característica do objeto | \`titulo\`, \`autor\`, \`lido\` |
| **Método** | Um comportamento do objeto | \`marcar_lido()\`, \`resumo()\` |
| **Construtor** | O \`__init__\` que define os valores iniciais | \`def __init__(self, ...)\` |

---

## O que vem a seguir

Você dominou o básico — agora é hora de aprender as **leis** que tornam a POO poderosa.

No próximo nível, você vai descobrir os **4 Pilares da POO**:

- **Abstração** — como esconder complexidade
- **Encapsulamento** — como proteger dados
- **Herança** — como reaproveitar código
- **Polimorfismo** — como tratar coisas diferentes da mesma forma

> Esses pilares são o que separa código iniciante de código profissional. Bora?
`,
  exercise: {
    question: "Qual sequência representa corretamente a relação entre classe, construtor e objeto?",
    options: [
      "O objeto é criado → o construtor define a classe → a classe armazena atributos.",
      "A classe é o molde → o construtor inicializa o estado → o objeto é a instância resultante.",
      "O construtor cria a classe → a classe instancia objetos → os objetos chamam métodos.",
      "A classe herda do objeto → o construtor é opcional → os métodos definem os atributos."
    ],
    correct: 1,
    explanation: "Exato! A classe define o molde, o construtor (`__init__`) prepara o estado inicial, e o objeto é a instância concreta criada a partir disso.",
    wrong_explanations: [
      "A sequência está invertida. A classe já existe antes do objeto — é ela o molde. O construtor não define a classe; ele inicializa o objeto criado a partir dela.",
      "",
      "O construtor não cria a classe — a classe já existe na declaração `class`. O `__init__` inicializa o objeto recém-criado. A ordem correta é: classe define o molde → objeto é criado → construtor inicializa o estado.",
      "Em Python, o objeto herda da classe (toda classe herda de `object` por padrão), não o contrário. Além disso, são os atributos que guardam dados — os métodos os utilizam."
    ]
  },
  extra_exercises: [
    {
      id: '1-7-e1',
      question: 'Um livro de uma biblioteca tem título, autor e número de páginas. Em POO, esses dados são:',
      options: [
        'Métodos — ações que o objeto sabe executar',
        'Construtores — parâmetros passados na criação',
        'Atributos — informações que pertencem ao objeto',
        'Classes — modelos para outros objetos',
      ],
      correct: 2,
      explanation: 'Título, autor e páginas são dados que descrevem o objeto — são seus **atributos**. Já ações como `emprestar()` ou `devolver()` seriam **métodos**. O construtor receberia esses dados ao criar o livro, e a classe seria o molde que define toda essa estrutura.',
    },
    {
      id: '1-7-e2',
      question: 'Num sistema de biblioteca, `livro.emprestar(usuario)` é chamado. Onde esse comportamento foi definido?',
      options: [
        'Dentro da classe `Livro`, como um método',
        'Como uma função global no arquivo principal',
        'Automaticamente pelo Python ao importar a classe',
        'Dentro do objeto `usuario`, não de `livro`',
      ],
      correct: 0,
      explanation: '`emprestar` é um método definido dentro da classe `Livro`. Quando chamamos `livro.emprestar(usuario)`, o Python executa o código de `def emprestar(self, usuario):` dentro da classe, passando o objeto `livro` como `self`.',
    },
    {
      id: '1-7-e3',
      question: 'Qual das opções cria corretamente um `Livro` com título e autor?',
      options: [
        '`new Livro("Python Fluente", "Ramalho")`',
        '`l = Livro("Python Fluente", "Ramalho")`',
        '`Livro.create("Python Fluente", "Ramalho")`',
        '`object l = Livro("Python Fluente", "Ramalho")`',
      ],
      correct: 1,
      explanation: 'Em Python, criamos objetos chamando a classe como função: `variavel = Classe(argumentos)`. Não usamos `new` (Java), `.create()` nem `object`. Os argumentos são passados diretamente para o `__init__`.',
    },
    {
      id: '1-7-e4',
      question: 'Qual elemento da POO une todos os outros — definindo atributos, construtor e métodos de um tipo de objeto?',
      options: [
        'A classe — o molde que descreve a estrutura completa do objeto',
        'O objeto — que contém todos os outros elementos dentro de si',
        'O atributo — pois guarda as referências aos métodos',
        'O `self` — pois conecta todos os elementos em tempo de execução',
      ],
      correct: 0,
      explanation: 'A **classe** é o elemento central que organiza tudo: define quais atributos os objetos terão, o construtor (`__init__`) que os inicializa, e os métodos que descrevem seu comportamento. Os objetos são criados a partir da classe e carregam esses elementos.',
    },
    {
      id: '1-7-e5',
      question: 'O que a linha `self.titulo = titulo` faz dentro do `__init__` de `Livro`?',
      options: [
        'Cria uma cópia da classe `Livro` chamada `titulo`',
        'Define `titulo` como um método que retorna o título',
        'Atribui um valor padrão de `None` ao título do livro',
        'Armazena o valor do parâmetro `titulo` no atributo `titulo` do objeto sendo criado',
      ],
      correct: 3,
      explanation: '`self.titulo = titulo` pega o valor passado no parâmetro `titulo` (ex: `"Python Fluente"`) e salva no atributo `titulo` do objeto atual (`self`). A partir daí, podemos acessar esse valor com `livro.titulo`.',
    },
    {
      id: '1-7-e6',
      question: 'Dado:\n```python\nclass Livro:\n    def __init__(self, titulo, autor):\n        self.titulo = titulo\n        self.autor = autor\n    def resumo(self):\n        return f"{self.titulo} por {self.autor}"\n```\nO que `print(Livro("1984", "Orwell").resumo())` exibe?',
      options: [
        '`titulo por autor`',
        '`1984 por Orwell`',
        '`Livro("1984", "Orwell")`',
        'Erro — `resumo()` não recebe `self` automaticamente',
      ],
      correct: 1,
      explanation: '`Livro("1984", "Orwell")` cria o objeto com `self.titulo = "1984"` e `self.autor = "Orwell"`. Ao chamar `.resumo()`, Python executa o método passando o objeto como `self`. O f-string retorna `"1984 por Orwell"`.',
    },
  ],
  has_interativo: true,
  interativo_html: "interativos/nivel_1_missao_7.html"
};

export default missao;
