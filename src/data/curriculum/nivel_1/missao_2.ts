import type { Missao } from '../types';

const missao: Missao = {
  id: "1-2",
  title: "Classe",
  icon: "📐",
  theory: `
## A forma de fazer biscoito

Imagine que você tem uma **forma de cortar biscoitos** em formato de estrela. Com ela, você pode fazer quantas estrelas quiser — todas no mesmo formato, mas cada uma com sua própria cobertura, seu próprio tamanho, sua própria decoração.

A **forma** não é o biscoito. Ela é o **molde** que ensina como criar biscoitos.

Em programação, a **classe** é esse molde.

> **Classe** = o molde que descreve como os objetos serão criados.

---

## Criando sua primeira classe

Vamos criar uma classe \`Cachorro\` passo a passo:

\`\`\`python
# A palavra "class" avisa o Python: "estou criando um molde!"
class Cachorro:
    pass  # por enquanto vazio — só para ver a estrutura
\`\`\`

Mas um molde vazio não serve para muito. Vamos adicionar **características** (atributos) e **comportamentos** (métodos):

\`\`\`python
class Cachorro:
    # O "def __init__" é executado quando um cachorro é criado
    # (você vai aprender mais sobre ele na missão "Construtor"!)
    def __init__(self, nome, raca):
        self.nome = nome   # guarda o nome deste cachorro específico
        self.raca = raca   # guarda a raça deste cachorro específico

    # Um comportamento: o cachorro pode se apresentar
    def apresentar(self):
        return f"Au! Sou {self.nome}, um {self.raca}!"
\`\`\`

Agora temos um **molde completo** que descreve como qualquer cachorro deve ser.

---

## Usando o molde para criar cachorros

\`\`\`python
# Criando cachorros a partir do molde
rex  = Cachorro("Rex",  "Labrador")
bolt = Cachorro("Bolt", "Husky")
mia  = Cachorro("Mia",  "Poodle")

# Cada um tem seus próprios dados
print(rex.apresentar())   # Au! Sou Rex, um Labrador!
print(bolt.apresentar())  # Au! Sou Bolt, um Husky!
print(mia.apresentar())   # Au! Sou Mia, um Poodle!

# Acessando atributos diretamente
print(rex.nome)   # Rex
print(bolt.raca)  # Husky
\`\`\`

Perceba: **uma classe, três cachorros diferentes**. O molde é o mesmo, mas cada produto é único.

---

## O que uma classe pode ter?

| Parte | O que é | Exemplo |
|---|---|---|
| **Atributo** | Uma característica | \`self.nome\`, \`self.raca\` |
| **Método** | Um comportamento | \`def apresentar(self)\` |
| **Construtor** | O "setup" inicial | \`def __init__(self, ...)\` |

---

## Uma regra importante: nomes de classes

Por convenção, nomes de classes em Python começam com **letra maiúscula** e usam **PascalCase** (cada palavra começa com maiúscula):

\`\`\`python
class Cachorro:       # correto
class ContaBancaria:  # correto
class cachorro:       # evitar
class conta_bancaria: # evitar
\`\`\`

> **Resumindo:** Uma classe é o molde que descreve como um tipo de objeto deve ser — com suas características e comportamentos. A partir de uma classe, você pode criar quantos objetos quiser.
`,
  exercise: {
    question: "Escolha a alternativa que melhor define o que é uma **classe**:",
    options: [
      "Um objeto específico criado em tempo de execução.",
      "Um molde que descreve as propriedades e comportamentos de um tipo de objeto.",
      "Uma biblioteca externa usada para executar a linguagem.",
      "Um erro de sintaxe comum em Python."
    ],
    correct: 1,
    explanation: "Exato! Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos."
  },
  has_interativo: false
};

export default missao;
