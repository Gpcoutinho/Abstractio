# Missão 1-5 — Métodos

**Ícone:** ⚙️
**Pontos:** 15

## Teoria

## O que um objeto sabe *fazer*

Você já sabe que objetos têm **atributos** (o que sabem). Agora veja o que eles sabem **fazer**.

Esses comportamentos são os **métodos**: funções que vivem dentro de uma classe e descrevem as ações dos objetos.

```python
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
```

---

## O mistério do `self`

Todo método tem `self` como primeiro parâmetro — mas quando você chama o método, não passa nada para ele. Por quê?

Se você tem dois cachorros e chama `rex.latir()` e `bolt.latir()`, os dois usam o **mesmo método**. O `self` é o que diz ao método em qual objeto ele está operando:

```python
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
```

> **Resumindo o `self`:** é a referência ao objeto que chamou o método — sem ele, o método não saberia em qual objeto está operando.

---

## Um exemplo completo

```python
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo   = saldo

    def depositar(self, valor):
        self.saldo += valor
        return f"Saldo: R${self.saldo:.2f}"

    def sacar(self, valor):
        if valor > self.saldo:
            return f"Saldo insuficiente. Você tem R${self.saldo:.2f}"
        self.saldo -= valor
        return f"Saldo: R${self.saldo:.2f}"

conta = ContaBancaria("Maria", 100.0)
print(conta.depositar(50))  # Saldo: R$150.00
print(conta.sacar(30))      # Saldo: R$120.00
```

---

## Método vs. função comum

| | Função | Método |
|---|---|---|
| Onde fica | Fora de uma classe | Dentro de uma classe |
| Acessa dados do objeto? | Não | Sim (via `self`) |
| Como chamar | `latir(cachorro)` | `cachorro.latir()` |

> [svg: três painéis completos — "class Cachorro" (roxo) → seta "Cria" → "Objetos Criados" com rex e bolt (azul) → seta "Chama" → "Método" com rex.latir() retornando "Rex: Au au au!" (verde). Animação de fade em sequência. Legenda: "Classe → objetos → método em ação". SVG idêntico ao da missão 1, agora com o quadro completo após o aluno ter aprendido os três conceitos.]

> **Resumindo:** Métodos são as ações que um objeto sabe executar. Sempre têm `self` para saber em qual objeto estão operando — mas você não precisa passá-lo na chamada.

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** Por que todo método de instância em Python deve ter `self` como primeiro parâmetro?

- [ ] É uma convenção opcional que melhora apenas a legibilidade.
- [x] Para que o método acesse e modifique os atributos do objeto específico que o chamou. ← correta
- [ ] Porque o Python exige que toda função tenha ao menos um parâmetro.
- [ ] Para indicar que o método é público e acessível externamente.

**Explicação:** `self` é uma referência à instância. Sem ele, o método não saberia qual objeto está manipulando.
