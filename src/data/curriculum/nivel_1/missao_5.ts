import type { Missao } from '../types';
import { diagramaClasseMetodo } from '../../visuals/nivel_1';

const missao: Missao = {
  id: "1-5",
  title: "Métodos",
  icon: "PiGear",
  emblem: "Nadando Rápido",
  theory: `
## O que um objeto sabe *fazer*

Você já sabe que objetos têm **atributos** (o que sabem). Agora veja o que eles sabem **fazer**.

Esses comportamentos são os **métodos**: funções que vivem dentro de uma classe e descrevem as ações dos objetos.

\`\`\`python
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
\`\`\`

---

## O mistério do \`self\`

Todo método tem \`self\` como primeiro parâmetro — mas quando você chama o método, não passa nada para ele. Por quê?

Se você tem dois cachorros e chama \`rex.latir()\` e \`bolt.latir()\`, os dois usam o **mesmo método**. O \`self\` é o que diz ao método em qual objeto ele está operando:

\`\`\`python
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
\`\`\`

> **Resumindo o \`self\`:** é a referência ao objeto que chamou o método — sem ele, o método não saberia em qual objeto está operando.

---

## Um exemplo completo

\`\`\`python
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo   = saldo

    def depositar(self, valor):
        self.saldo += valor
        return f"Saldo: R\${self.saldo:.2f}"

    def sacar(self, valor):
        if valor > self.saldo:
            return f"Saldo insuficiente. Você tem R\${self.saldo:.2f}"
        self.saldo -= valor
        return f"Saldo: R\${self.saldo:.2f}"

conta = ContaBancaria("Maria", 100.0)
print(conta.depositar(50))  # Saldo: R$150.00
print(conta.sacar(30))      # Saldo: R$120.00
\`\`\`

---

## Método vs. função comum

| | Função | Método |
|---|---|---|
| Onde fica | Fora de uma classe | Dentro de uma classe |
| Acessa dados do objeto? | Não | Sim (via \`self\`) |
| Como chamar | \`latir(cachorro)\` | \`cachorro.latir()\` |

${diagramaClasseMetodo}

> **Resumindo:** Métodos são as ações que um objeto sabe executar. Sempre têm \`self\` para saber em qual objeto estão operando — mas você não precisa passá-lo na chamada.
`,
  exercise: {
    question: "Por que todo método de instância em Python deve ter `self` como primeiro parâmetro?",
    options: [
      "É uma convenção opcional que melhora apenas a legibilidade.",
      "Para que o método acesse e modifique os atributos do objeto específico que o chamou.",
      "Porque o Python exige que toda função tenha ao menos um parâmetro.",
      "Para indicar que o método é público e acessível externamente."
    ],
    correct: 1,
    explanation: "Correto! `self` é uma referência à instância. Sem ele, o método não saberia qual objeto está manipulando.",
    wrong_explanations: [
      "`self` não é opcional. Sem ele, o Python não passa a instância ao método automaticamente, causando `TypeError` ao tentar acessar qualquer atributo do objeto.",
      "",
      "Funções comuns em Python podem ter zero parâmetros. O `self` é específico de métodos de instância, para que eles saibam em qual objeto estão operando.",
      "Visibilidade em Python é controlada por prefixos de nome (`_` ou `__`), não pelo `self`. O `self` serve para o método referenciar o objeto que o chamou."
    ]
  },
  has_interativo: false
};

export default missao;
