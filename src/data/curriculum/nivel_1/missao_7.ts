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
  has_interativo: true,
  interativo_html: "interativos/nivel_1_missao_7.html"
};

export default missao;
