import type { Missao } from '../types';

const missao: Missao = {
  id: "3-5",
  title: "Contratos — Interfaces",
  icon: "🔌",
  theory: `
## Interfaces

Uma **interface** é um contrato puro — define *o quê* deve ser feito, sem implementar *como*. Em Python, simulamos interfaces com classes que herdam de \`ABC\` e possuem apenas métodos abstratos.

\`\`\`python
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
\`\`\`

### Implementando múltiplas interfaces

Python suporta herança múltipla — uma classe pode assinar vários contratos:

\`\`\`python
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
print(u.para_json())           # {"nome": "Ana"}
print(u.autenticar("1234"))    # True
print(u.autenticar("errada"))  # False
\`\`\`

### Interface vs Classe Abstrata

| | Interface (pura) | Classe Abstrata |
|---|---|---|
| Implementação | Nenhuma | Pode ter parcial |
| Propósito | Definir capacidades | Definir base comum |
| Herança | Múltipla (recomendada) | Geralmente única |
`,
  exercise: {
    question: "O que caracteriza uma interface pura em Python?",
    options: [
      "Uma classe com pelo menos um método implementado e um abstrato.",
      "Uma classe que herda de `ABC` e contém apenas métodos abstratos, sem nenhuma implementação.",
      "Uma classe que não pode ser herdada por outras classes.",
      "Um módulo Python separado que define funções globais."
    ],
    correct: 1,
    explanation: "Correto! Uma interface pura em Python é uma classe ABC com apenas @abstractmethod — ela define o contrato sem implementar nada."
  },
  has_interativo: false
};

export default missao;
