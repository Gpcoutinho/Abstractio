import type { Missao } from '../types';

const missao: Missao = {
  id: "1-6",
  title: "Construtor",
  icon: "🏗️",
  theory: `
## O momento do nascimento

Quando um bebê nasce, alguém preenche a **certidão de nascimento**: nome, data, local... Sem isso, o bebê existe fisicamente, mas o mundo não sabe nada sobre ele.

Em POO, quando um objeto é criado, o mesmo acontece: alguém precisa definir as informações iniciais. Quem faz isso é o **construtor**.

> **Construtor** = o método chamado automaticamente no momento em que o objeto é criado, para definir seus valores iniciais.

Em Python, o construtor tem um nome especial: \`__init__\` (com dois underscores antes e depois).

---

## Como funciona o \`__init__\`

\`\`\`python
class Personagem:
    #          ↓ self = o personagem sendo criado
    def __init__(self, nome, classe, vida=100):
        #  ↑ nome e classe são obrigatórios
        #                        ↑ vida tem valor padrão: 100

        self.nome   = nome    # define o nome do personagem
        self.classe = classe  # define a classe (guerreiro, mago...)
        self.vida   = vida    # define a vida inicial
        self.nivel  = 1       # todo personagem começa no nível 1

guerreiro = Personagem("Thor",   "Guerreiro")
mago      = Personagem("Merlin", "Mago", vida=80)

print(guerreiro.vida)  # 100  ← usou o padrão
print(mago.vida)       # 80   ← sobrescreveu o padrão
print(mago.nivel)      # 1    ← definido automaticamente
\`\`\`

---

## Parâmetros obrigatórios vs. com padrão

\`\`\`python
class Produto:
    def __init__(self, nome, preco, estoque=0, disponivel=True):
        self.nome       = nome       # obrigatório
        self.preco      = preco      # obrigatório
        self.estoque    = estoque    # opcional — padrão: 0
        self.disponivel = disponivel # opcional — padrão: True

caneta   = Produto("Caneta",   2.50, 100)
caderno  = Produto("Caderno",  15.00)       # estoque = 0
borracha = Produto("Borracha", 1.00, 0, False)

print(caneta.estoque)      # 100
print(caderno.estoque)     # 0
print(borracha.disponivel) # False
\`\`\`

---

## O \`__str__\`: como o objeto se apresenta

Sem definir como o objeto deve ser exibido, \`print()\` mostra algo feio:

\`\`\`python
print(caneta)  # <__main__.Produto object at 0x7f3a...>
\`\`\`

O método \`__str__\` resolve isso:

\`\`\`python
class Produto:
    def __init__(self, nome, preco, estoque=0):
        self.nome    = nome
        self.preco   = preco
        self.estoque = estoque

    def __str__(self):
        return f"{self.nome} — R\${self.preco:.2f} ({self.estoque} em estoque)"

caneta = Produto("Caneta", 2.50, 100)
print(caneta)  # Caneta — R$2.50 (100 em estoque)
\`\`\`

> **Resumindo:** O construtor \`__init__\` é chamado automaticamente ao criar um objeto e define seus valores iniciais. O \`__str__\` define como o objeto é exibido com \`print()\`.
`,
  exercise: {
    question: "O que acontece quando você executa `p = Produto('Caneta', 2.50)`?",
    options: [
      "Nada — é preciso chamar `p.init()` manualmente depois.",
      "O Python chama `__init__` automaticamente, inicializando os atributos do objeto.",
      "Um erro é lançado porque `__init__` não foi chamado explicitamente.",
      "O objeto é criado, mas seus atributos ficam como `None` até serem definidos."
    ],
    correct: 1,
    explanation: "Correto! `__init__` é chamado automaticamente pelo Python no momento da criação do objeto. Você não precisa invocá-lo."
  },
  has_interativo: false
};

export default missao;
