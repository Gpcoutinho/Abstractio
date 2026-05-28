# Missão 3-5 — Interfaces

**Ícone:** 🔌
**Pontos:** 15

## Teoria

## Interface: contrato puro

Na missão anterior você viu a **classe abstrata** — contrato com implementação parcial.

A **interface** vai além: define *o quê* deve ser feito, sem implementar absolutamente nada. É um contrato puro.

Em Python, simulamos interfaces com classes que herdam de `ABC` e possuem apenas métodos abstratos:

```python
from abc import ABC, abstractmethod

class Serializavel(ABC):
    @abstractmethod
    def para_dict(self) -> dict:
        pass

    @abstractmethod
    def para_json(self) -> str:
        pass

class Autenticavel(ABC):
    @abstractmethod
    def autenticar(self, senha: str) -> bool:
        pass
```

---

## Implementando múltiplas interfaces

Python suporta herança múltipla — uma classe pode assinar vários contratos ao mesmo tempo:

```python
import json

class Usuario(Serializavel, Autenticavel):
    def __init__(self, nome, senha_hash):
        self.nome = nome
        self._senha_hash = senha_hash

    def para_dict(self):
        return {"nome": self.nome}

    def para_json(self):
        return json.dumps(self.para_dict())

    def autenticar(self, senha):
        return hash(senha) == self._senha_hash

u = Usuario("Ana", hash("1234"))
print(u.para_json())         # {"nome": "Ana"}
print(u.autenticar("1234"))  # True
```

Se `Usuario` não implementar algum dos métodos abstratos, o Python lança um erro ao tentar instanciar — o contrato é obrigatório.

---

## Interface vs. Classe Abstrata

| | Interface (pura) | Classe Abstrata |
|---|---|---|
| Implementação | Nenhuma | Pode ter parcial |
| Propósito | Definir capacidades | Definir base comum |
| Herança | Múltipla (recomendada) | Geralmente única |

> **Resumindo:** Uma interface é um contrato puro — define apenas o que deve existir, sem implementar nada. Qualquer classe que a implemente pode ser usada de forma intercambiável.

## Mini-jogo

- [ ] Tem mini-jogo

## Exercício

**Pergunta:** O que caracteriza uma interface pura em Python?

- [ ] Uma classe com pelo menos um método implementado e um abstrato.
- [x] Uma classe que herda de `ABC` e contém apenas métodos abstratos, sem nenhuma implementação. ← correta
- [ ] Uma classe que não pode ser herdada por outras classes.
- [ ] Um módulo Python separado que define funções globais.

**Explicação:** Uma interface pura em Python é uma classe ABC com apenas `@abstractmethod` — ela define o contrato sem implementar nada.
