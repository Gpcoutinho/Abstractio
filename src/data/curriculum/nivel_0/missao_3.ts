import type { Missao } from '../types';

const missao: Missao = {
  id: "0-3",
  title: "Método",
  icon: "⚙️",
  theory: `
## O que um objeto sabe *fazer*

Você já sabe que objetos têm **características** (atributos). Mas objetos também têm **comportamentos** — coisas que eles sabem fazer.

Esses comportamentos são os **métodos**: funções que vivem dentro de uma classe e descrevem as ações dos objetos.

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):                          # método sem parâmetros extras
        return f"{self.nome}: Au au au!"

    def buscar(self, objeto):                 # método com parâmetro
        return f"{self.nome} foi buscar o {objeto}!"

rex = Cachorro("Rex")
print(rex.latir())           # Rex: Au au au!
print(rex.buscar("graveto")) # Rex foi buscar o graveto!
\`\`\`

---

## O mistério do \`self\`

Todo método de uma classe tem \`self\` como **primeiro parâmetro**. Mas quando você chama o método, não passa nada para \`self\`. Por quê?

Pense assim: imagine que você tem **dois cachorros**, Rex e Bolt. Você chama:

\`\`\`python
rex.latir()
bolt.latir()
\`\`\`

Ambos usam o **mesmo método** \`latir\`. Mas como o método sabe se está sendo chamado pelo Rex ou pelo Bolt?

É aí que entra o \`self\` — ele é a referência ao **objeto específico** que chamou o método:

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):
        # "self.nome" acessa o nome DESTE cachorro específico
        return f"{self.nome}: Au au!"

rex  = Cachorro("Rex")
bolt = Cachorro("Bolt")

# Python traduz rex.latir() para Cachorro.latir(rex)
# O self É o rex — por isso imprime o nome certo!
print(rex.latir())   # Rex: Au au!
print(bolt.latir())  # Bolt: Au au!
\`\`\`

> **Resumindo o \`self\`:** é a forma que o método tem de saber "qual objeto me chamou?" e de acessar os dados desse objeto.

---

## Um exemplo completo: conta bancária

Vamos construir uma conta bancária passo a passo:

\`\`\`python
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular   # nome do dono da conta
        self.saldo   = saldo     # saldo começa em 0 por padrão

    def depositar(self, valor):
        # Adiciona valor ao saldo e avisa o resultado
        self.saldo += valor
        return f"Depósito de R\${valor:.2f} realizado. Saldo: R\${self.saldo:.2f}"

    def sacar(self, valor):
        # Só saca se tiver saldo suficiente
        if valor > self.saldo:
            return f"Saldo insuficiente. Você tem apenas R\${self.saldo:.2f}"
        self.saldo -= valor
        return f"Saque de R\${valor:.2f} realizado. Saldo: R\${self.saldo:.2f}"

    def ver_saldo(self):
        return f"Conta de {self.titular}: R\${self.saldo:.2f}"

# Criando duas contas independentes
conta_maria = ContaBancaria("Maria", 100.0)
conta_joao  = ContaBancaria("João")

print(conta_maria.depositar(50))    # Depósito de R$50.00 realizado. Saldo: R$150.00
print(conta_maria.sacar(30))        # Saque de R$30.00 realizado. Saldo: R$120.00
print(conta_joao.ver_saldo())       # Conta de João: R$0.00
print(conta_maria.ver_saldo())      # Conta de Maria: R$120.00
# Mexer na conta da Maria não afeta a conta do João!
\`\`\`

---

## Método vs Função

| | Função comum | Método |
|---|---|---|
| Onde fica | Fora de uma classe | Dentro de uma classe |
| Acessa dados do objeto? | Não | Sim (via \`self\`) |
| Como chamar | \`latir(cachorro)\` | \`cachorro.latir()\` |

> **Resumindo:** Métodos são as ações que um objeto sabe executar. Sempre recebem \`self\` para saber em qual objeto estão operando — mas você não precisa passar \`self\` na hora de chamar.
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
    explanation: "Correto! `self` é uma referência à instância. Sem ele, o método não saberia qual objeto está manipulando."
  },
  has_interativo: false
};

export default missao;
