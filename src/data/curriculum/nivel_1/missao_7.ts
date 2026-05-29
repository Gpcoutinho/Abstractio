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
  exercicio: {
    question: "Qual sequência representa corretamente a relação entre classe, construtor e objeto?",
    options: [
      "O objeto é criado → o construtor define a classe → a classe armazena atributos.",
      "O construtor cria a classe → a classe instancia objetos → os objetos chamam métodos.",
      "A classe herda do objeto → o construtor é opcional → os métodos definem os atributos.",
      "A classe é o molde → o construtor inicializa o estado → o objeto é a instância resultante.",
    ],
    correct: 3,
    explanation: "Exato! A classe define o molde, o construtor (`__init__`) prepara o estado inicial, e o objeto é a instância concreta criada a partir disso.",
    wrong_explanations: [
      "A sequência está invertida. A classe já existe antes do objeto — é ela o molde. O construtor não define a classe; ele inicializa o objeto criado a partir dela.",
      "O construtor não cria a classe — a classe já existe na declaração `class`. O `__init__` inicializa o objeto recém-criado. A ordem correta é: classe define o molde → objeto é criado → construtor inicializa o estado.",
      "Em Python, o objeto herda da classe (toda classe herda de `object` por padrão), não o contrário. Além disso, são os atributos que guardam dados — os métodos os utilizam.",
      "",
    ]
  },
  exercicios: [
    {
      id: '1-7-e1',
      question: 'Um livro no código da missão tem `titulo`, `autor`, `paginas` e `lido`. Em POO, esses dados são:',
      options: [
        'Atributos — informações que pertencem ao objeto',
        'Métodos — ações que o objeto sabe executar',
        'Construtores — parâmetros passados na criação',
        'Classes — modelos para outros objetos',
      ],
      correct: 0,
      explanation: 'Título, autor, páginas e lido são dados que descrevem o objeto — são seus atributos. Ações como `marcar_lido()` e `resumo()` são métodos. A classe `Livro` é o molde que define toda essa estrutura.',
    },
    {
      id: '1-7-e2',
      question: 'No código da missão, `livro1.marcar_lido()` é chamado. Qual o efeito no objeto?',
      options: [
        'Todos os livros são marcados como lidos ao mesmo tempo',
        'Um novo objeto `livro1` é criado com `lido=True`',
        'O atributo `lido` de `livro1` passa de `False` para `True`',
        'O atributo `lido` é removido de `livro1`',
      ],
      correct: 2,
      explanation: '`marcar_lido()` faz `self.lido = True` — modifica apenas o atributo `lido` de `livro1`. `livro2` e `livro3` continuam com `lido = False`.',
    },
    {
      id: '1-7-e3',
      question: 'Qual das opções cria corretamente o `livro1` do código da missão?',
      options: [
        '`new Livro("Clean Code", "Robert Martin", 431)`',
        '`Livro.create("Clean Code", "Robert Martin", 431)`',
        '`object livro1 = Livro("Clean Code", "Robert Martin", 431)`',
        '`livro1 = Livro("Clean Code", "Robert Martin", 431)`',
      ],
      correct: 3,
      explanation: 'Em Python, criamos objetos chamando a classe como função: `variavel = Classe(argumentos)`. Não usamos `new`, `.create()` nem `object`.',
    },
    {
      id: '1-7-e4',
      question: 'Qual elemento da POO une todos os outros — definindo atributos, construtor e métodos de um tipo de objeto?',
      options: [
        'O objeto — que contém todos os outros elementos dentro de si',
        'O atributo — pois guarda as referências aos métodos',
        'A classe — o molde que descreve a estrutura completa do objeto',
        'O `self` — pois conecta todos os elementos em tempo de execução',
      ],
      correct: 2,
      explanation: 'A classe é o elemento central: define quais atributos os objetos terão, o construtor que os inicializa e os métodos que descrevem seu comportamento. Os objetos são criados a partir dela.',
    },
    {
      id: '1-7-e5',
      question: 'O que a linha `self.titulo = titulo` faz dentro do `__init__` de `Livro`?',
      options: [
        'Cria uma cópia da classe `Livro` chamada `titulo`',
        'Define `titulo` como um método que retorna o título',
        'Armazena o valor do parâmetro `titulo` no atributo `titulo` do objeto sendo criado',
        'Atribui um valor padrão de `None` ao título do livro',
      ],
      correct: 2,
      explanation: '`self.titulo = titulo` pega o valor passado como argumento (ex: `"Clean Code"`) e salva no atributo `titulo` do objeto atual. A partir daí, pode-se acessar esse valor com `livro.titulo`.',
    },
    {
      id: '1-7-e6',
      question: 'O código mostra `print(livro3)` exibindo `"Sapiens por Yuval Harari (443 págs) — na fila"`. Por que o status é "na fila" e não "lido"?',
      options: [
        'Porque `livro3` foi criado depois dos outros',
        'Porque `Sapiens` tem mais páginas que `Clean Code`',
        'Porque `__str__` sempre exibe "na fila" por padrão',
        'Porque `livro3.lido` ainda é `False` — `marcar_lido()` não foi chamado para ele',
      ],
      correct: 3,
      explanation: '`lido` é inicializado como `False` no construtor para todos os livros. `livro1` teve `marcar_lido()` chamado, mudando para `True`. `livro3` não — então `resumo()` retorna "na fila".',
    },
  ],
  has_minigame: true,
  minigame_html: "interativos/nivel_1_missao_7.html"
};

export default missao;
