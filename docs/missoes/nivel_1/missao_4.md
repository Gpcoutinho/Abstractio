# Missão 1-4 — Atributos

**Ícone:** 🏷️
**Pontos:** 15

## Teoria

## O que um objeto *sabe*

Pessoas têm nome, idade, altura. Carros têm modelo, cor, velocidade. Contas têm saldo, titular, número.

Essas características — os **dados** que descrevem um objeto — são chamadas de **atributos**.

> **Atributo** = uma informação que pertence a um objeto específico. Cada objeto guarda seus próprios valores.

---

## Atributos na prática

```python
class Pessoa:
    def __init__(self, nome, idade):
        self.nome  = nome   # atributo: nome da pessoa
        self.idade = idade  # atributo: idade da pessoa

ana   = Pessoa("Ana",   28)
pedro = Pessoa("Pedro", 35)

# Cada objeto tem seus próprios valores
print(ana.nome)    # Ana
print(pedro.nome)  # Pedro
print(ana.idade)   # 28
print(pedro.idade) # 35
```

O ponto (`.`) é a forma de acessar um atributo: `objeto.atributo`.

---

## Atributos podem mudar

O estado de um objeto pode evoluir ao longo do tempo:

```python
class ContaBancaria:
    def __init__(self, titular):
        self.titular = titular
        self.saldo   = 0.0      # começa zerado

conta = ContaBancaria("Maria")
print(conta.saldo)   # 0.0

conta.saldo += 100   # depósito
print(conta.saldo)   # 100.0

conta.saldo -= 30    # saque
print(conta.saldo)   # 70.0
```

---

## Atributos de instância vs. atributos de classe

| Tipo | Onde fica | Compartilhado? | Exemplo |
|---|---|---|---|
| **De instância** | Dentro do `__init__` com `self` | Não — cada objeto tem o seu | `self.nome` |
| **De classe** | Fora do `__init__`, direto na classe | Sim — todos os objetos compartilham | `especie = "Canis"` |

```python
class Cachorro:
    especie = "Canis lupus familiaris"  # atributo de classe — igual para todos

    def __init__(self, nome):
        self.nome = nome  # atributo de instância — único por objeto

rex  = Cachorro("Rex")
bolt = Cachorro("Bolt")

print(rex.nome)     # Rex    — único do rex
print(bolt.nome)    # Bolt   — único do bolt
print(rex.especie)  # Canis lupus familiaris — compartilhado
print(bolt.especie) # Canis lupus familiaris — o mesmo valor
```

Na maioria dos casos você usará **atributos de instância** — cada objeto com seus próprios dados.

> **Resumindo:** Atributos são os dados que descrevem um objeto. Cada instância guarda seus próprios valores. Você acessa um atributo com `objeto.atributo`.

## Mini-jogo

- [ ] Tem interativo

## Exercício

**Pergunta:** O que são **atributos de instância** em uma classe Python?

- [ ] Variáveis globais compartilhadas por todos os objetos da classe.
- [x] Dados definidos com `self` no `__init__` que pertencem a cada objeto individualmente. ← correta
- [ ] Métodos que retornam informações sobre o objeto.
- [ ] Parâmetros obrigatórios passados na criação da classe.

**Explicação:** Atributos de instância são definidos com `self.nome = valor` dentro do `__init__`. Cada objeto tem os seus próprios — mudar um não afeta os outros.
