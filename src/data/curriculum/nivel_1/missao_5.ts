import type { Missao } from '../types';

const missao: Missao = {
  id: "1-5",
  title: "Construtor",
  icon: "🏗️",
  theory: `
## O momento do nascimento

Quando um bebê nasce, alguém preenche uma **certidão de nascimento**: nome, data, local, pais... Sem isso, o bebê existe fisicamente, mas o mundo não sabe nada sobre ele.

Em POO, quando um objeto é criado, o mesmo acontece: alguém precisa definir as informações iniciais daquele objeto. Quem faz isso é o **construtor**.

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

# Criando personagens — Python chama __init__ automaticamente!
guerreiro = Personagem("Thor",   "Guerreiro")
mago      = Personagem("Merlin", "Mago", vida=80)

print(guerreiro.nome)   # Thor
print(guerreiro.vida)   # 100  ← usou o padrão
print(mago.vida)        # 80   ← sobrescreveu o padrão
print(mago.nivel)       # 1    ← definido automaticamente no __init__
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

caneta   = Produto("Caneta",   2.50, 100)  # estoque = 100, disponivel = True
caderno  = Produto("Caderno",  15.00)      # estoque = 0,   disponivel = True
borracha = Produto("Borracha", 1.00, 0, False)  # esgotada

print(caneta.estoque)      # 100
print(caderno.estoque)     # 0
print(borracha.disponivel) # False
\`\`\`

---

## O método \`__str__\`: como o objeto se apresenta

Se você tentar imprimir um objeto sem definir como ele deve ser exibido, vai ver algo assim:

\`\`\`python
print(caneta)  # <__main__.Produto object at 0x7f3a2b1c4d30>  — feio!
\`\`\`

O método \`__str__\` define como o objeto deve se apresentar ao mundo:

\`\`\`python
class Produto:
    def __init__(self, nome, preco, estoque=0):
        self.nome    = nome
        self.preco   = preco
        self.estoque = estoque

    def __str__(self):
        # Esta string é retornada quando você usa print(objeto)
        return f"{self.nome} — R\${self.preco:.2f} ({self.estoque} em estoque)"

caneta = Produto("Caneta", 2.50, 100)
print(caneta)  # Caneta — R$2.50 (100 em estoque)  — bonito!
\`\`\`

---

## O que o \`__init__\` NÃO deve fazer

O construtor deve apenas **inicializar o estado** — definir os valores dos atributos. Evite colocar lógica complexa, chamadas de API ou operações de banco de dados dentro dele.

\`\`\`python
# Ruim — construtor fazendo demais
def __init__(self, usuario_id):
    dados = buscar_no_banco(usuario_id)  # evitar!
    self.nome = dados["nome"]

# Bom — construtor simples
def __init__(self, nome, email):
    self.nome  = nome
    self.email = email
\`\`\`

> **Resumindo:** O construtor \`__init__\` é chamado automaticamente ao criar um objeto e define seus valores iniciais. Parâmetros com \`=\` têm valores padrão (opcionais). O \`__str__\` define como o objeto é exibido com \`print()\`.
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
