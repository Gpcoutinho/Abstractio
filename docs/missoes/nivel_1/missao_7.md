# Missão 1-7 — Resumo

**Ícone:** 📋
**Pontos:** 15

## Teoria

## Você chegou até aqui — vamos revisar!

Neste nível você aprendeu os tijolos fundamentais da POO. Vamos juntar tudo em uma história só.

---

## A história da biblioteca

Imagine que você está construindo um sistema para uma biblioteca:

```python
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
```

---

## O mapa do que você aprendeu

| Conceito | O que é | No exemplo |
|---|---|---|
| **POO** | Organizar código em objetos com dados e comportamentos | O sistema inteiro |
| **Objeto** | Uma instância concreta criada a partir da classe | `livro1`, `livro2` |
| **Classe** | O molde que define como um objeto deve ser | `class Livro:` |
| **Atributo** | Uma característica do objeto | `titulo`, `autor`, `lido` |
| **Método** | Um comportamento do objeto | `marcar_lido()`, `resumo()` |
| **Construtor** | O `__init__` que define os valores iniciais | `def __init__(self, ...)` |

---

## O que vem a seguir

Você dominou o básico — agora é hora de aprender as **leis** que tornam a POO poderosa.

No próximo nível, você vai descobrir os **4 Pilares da POO**:

- **Abstração** — como esconder complexidade
- **Encapsulamento** — como proteger dados
- **Herança** — como reaproveitar código
- **Polimorfismo** — como tratar coisas diferentes da mesma forma

> Esses pilares são o que separa código iniciante de código profissional. Bora?

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Qual sequência representa corretamente a relação entre classe, construtor e objeto?

- [ ] O objeto é criado → o construtor define a classe → a classe armazena atributos.
- [x] A classe é o molde → o construtor inicializa o estado → o objeto é a instância resultante. ← correta
- [ ] O construtor cria a classe → a classe instancia objetos → os objetos chamam métodos.
- [ ] A classe herda do objeto → o construtor é opcional → os métodos definem os atributos.

**Explicação:** A classe define o molde, o construtor (`__init__`) prepara o estado inicial, e o objeto é a instância concreta criada a partir disso.
