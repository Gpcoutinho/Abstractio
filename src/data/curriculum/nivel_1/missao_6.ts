import type { Missao } from '../types';

const missao: Missao = {
  id: "1-6",
  title: "Resumo",
  icon: "📋",
  theory: `
## Você chegou até aqui — vamos revisar!

Neste nível você aprendeu os tijolos fundamentais da POO. Vamos juntar tudo em uma história só.

---

## A história da biblioteca

Imagine que você está construindo um sistema para uma biblioteca. Como você organizaria os livros usando POO?

**Passo 1 — Criar a Classe (o molde):**

\`\`\`python
# A classe descreve como QUALQUER livro deve ser
class Livro:
    # Construtor: chamado automaticamente quando um livro é criado
    def __init__(self, titulo, autor, paginas):
        self.titulo  = titulo   # atributo: título do livro
        self.autor   = autor    # atributo: quem escreveu
        self.paginas = paginas  # atributo: quantas páginas
        self.lido    = False    # atributo: começa como não lido
\`\`\`

**Passo 2 — Adicionar Métodos (os comportamentos):**

\`\`\`python
class Livro:
    def __init__(self, titulo, autor, paginas):
        self.titulo  = titulo
        self.autor   = autor
        self.paginas = paginas
        self.lido    = False

    # Método: marcar o livro como lido
    def marcar_lido(self):
        self.lido = True
        return f'"{self.titulo}" marcado como lido!'

    # Método: ver o resumo do livro
    def resumo(self):
        status = "lido" if self.lido else "na fila"
        return f"{self.titulo} por {self.autor} ({self.paginas} págs) — {status}"

    # __str__: como o livro se apresenta no print()
    def __str__(self):
        return self.resumo()
\`\`\`

**Passo 3 — Criar Objetos (os livros de verdade):**

\`\`\`python
# Cada livro é um objeto criado a partir do molde
livro1 = Livro("Clean Code",        "Robert Martin",  431)
livro2 = Livro("O Poder do Hábito", "Charles Duhigg", 288)
livro3 = Livro("Sapiens",           "Yuval Harari",   443)

# Usando os métodos
print(livro1.marcar_lido())  # "Clean Code" marcado como lido!
print(livro2.marcar_lido())  # "O Poder do Hábito" marcado como lido!

# Cada objeto tem seu próprio estado
print(livro1)  # Clean Code por Robert Martin (431 págs) — lido
print(livro2)  # O Poder do Hábito por Charles Duhigg (288 págs) — lido
print(livro3)  # Sapiens por Yuval Harari (443 págs) — na fila
\`\`\`

---

## O mapa do que você aprendeu

| Conceito | O que é | No exemplo |
|---|---|---|
| **POO** | Organizar código em objetos com dados e comportamentos | O sistema inteiro |
| **Classe** | O molde que define como um objeto deve ser | \`class Livro:\` |
| **Objeto** | Uma instância concreta criada a partir da classe | \`livro1\`, \`livro2\` |
| **Atributo** | Uma característica do objeto | \`titulo\`, \`autor\`, \`lido\` |
| **Método** | Um comportamento do objeto | \`marcar_lido()\`, \`resumo()\` |
| **Construtor** | O \`__init__\` que define os valores iniciais | \`def __init__(self, ...)\` |
| **\`self\`** | A referência ao objeto que chamou o método | \`self.titulo\`, \`self.lido\` |

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
    explanation: "Exato! A classe define o molde, o construtor (`__init__`) prepara o estado inicial, e o objeto é a instância concreta criada a partir disso."
  },
  has_interativo: false
};

export default missao;
