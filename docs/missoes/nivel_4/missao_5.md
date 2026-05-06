# Missão 4-5 — Generics

**Ícone:** 🧪
**Pontos:** 15

## Teoria

## Generics

**Generics** (ou tipos genéricos) permitem criar classes e funções que funcionam com **qualquer tipo**, mantendo segurança de tipos verificável por ferramentas como `mypy`.

Em Python, usamos o módulo `typing`.

### O problema sem generics

```python
class Pilha:
    def __init__(self):
        self._itens = []

    def empilhar(self, item):
        self._itens.append(item)

    def desempilhar(self):
        return self._itens.pop()

p = Pilha()
p.empilhar(42)
p.empilhar("oops")  # mistura de tipos — sem aviso!
```

### Com Generics

```python
from typing import Generic, TypeVar

T = TypeVar("T")  # T representa qualquer tipo

class Pilha(Generic[T]):
    def __init__(self):
        self._itens: list[T] = []

    def empilhar(self, item: T) -> None:
        self._itens.append(item)

    def desempilhar(self) -> T:
        return self._itens.pop()

    def topo(self) -> T:
        return self._itens[-1]

# Pilha de inteiros
p_int: Pilha[int] = Pilha()
p_int.empilhar(1)
p_int.empilhar(2)
print(p_int.desempilhar())  # 2

# Pilha de strings
p_str: Pilha[str] = Pilha()
p_str.empilhar("ola")
p_str.empilhar("mundo")
print(p_str.topo())  # mundo
```

### Funções genéricas

```python
from typing import TypeVar, Sequence

T = TypeVar("T")

def primeiro(sequencia: Sequence[T]) -> T:
    return sequencia[0]

print(primeiro([1, 2, 3]))        # 1
print(primeiro(["a", "b", "c"]))  # a
```

### Benefícios dos Generics

| Benefício | Descrição |
|---|---|
| Reuso | Uma implementação para qualquer tipo |
| Segurança | Erros de tipo detectados antes de rodar |
| Documentação | O tipo comunica a intenção da classe |

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Qual o principal benefício de usar Generics em vez de usar o tipo `object` (ou nenhum tipo)?

- [ ] Generics fazem o código rodar mais rápido em tempo de execução.
- [x] Generics permitem reutilizar a implementação para qualquer tipo com segurança — ferramentas detectam inconsistências antes de rodar o código. ← correta
- [ ] Generics eliminam a necessidade de testes unitários.
- [ ] Generics só funcionam com tipos primitivos como int e str.

**Explicação:** Generics combinam reuso (mesma implementação para qualquer tipo) com segurança (erros detectados estaticamente pelo type checker).
