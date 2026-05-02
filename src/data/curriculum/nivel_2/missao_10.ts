import type { Missao } from '../types';

const missao: Missao = {
  id: "2-10",
  title: "Resumo",
  icon: "📋",
  theory: `
## Resumo — A sociedade dos objetos

Você dominou como objetos se comportam e se relacionam em sistemas reais.

### Quadro geral

| Conceito | Em uma linha |
|---|---|
| **Sobrescrita** | Subclasse redefine método da superclasse |
| **Sobrecarga** | Método aceita diferentes formas de chamada |
| **Interface** | Contrato puro — define o quê, não o como |
| **Classe abstrata** | Contrato com implementação parcial compartilhada |
| **Associação** | Objetos se usam, mas vivem de forma independente |
| **Agregação** | "Tem um" — partes independentes do todo |
| **Composição** | "É composto de" — partes não existem sem o todo |

### Tudo junto em um sistema de e-commerce

\`\`\`python
from abc import ABC, abstractmethod

class Pagamento(ABC):         # interface/contrato
    @abstractmethod
    def processar(self, valor): pass

class CartaoCredito(Pagamento):
    def processar(self, valor):
        return f"💳 Cartão: R\${valor:.2f} aprovado."

class Endereco:               # composição com Pedido
    def __init__(self, rua, cidade):
        self.rua    = rua
        self.cidade = cidade

class Produto:                # agregação com Pedido
    def __init__(self, nome, preco):
        self.nome  = nome
        self.preco = preco

class Pedido:
    def __init__(self, rua, cidade):
        self.endereco = Endereco(rua, cidade)  # composição
        self.itens    = []                     # agregação

    def adicionar(self, produto):
        self.itens.append(produto)

    def total(self):
        return sum(p.preco for p in self.itens)

    def finalizar(self, pagamento: Pagamento):  # associação
        return pagamento.processar(self.total())

caneta  = Produto("Caneta",  2.50)
caderno = Produto("Caderno", 15.00)

pedido = Pedido("Rua A", "SP")
pedido.adicionar(caneta)
pedido.adicionar(caderno)

print(pedido.finalizar(CartaoCredito()))
\`\`\`

> Próximo nível: **engenharia e qualidade** — como escrever código que dura.
`,
  exercise: {
    question: "Em um sistema de biblioteca, livros existem antes e independente de uma coleção, e podem pertencer a várias coleções. Qual relacionamento modela isso?",
    options: [
      "Composição, porque os livros fazem parte da coleção.",
      "Associação, porque livros e coleções não têm nenhuma relação.",
      "Agregação, porque os livros existem independentemente e podem pertencer a mais de uma coleção.",
      "Herança, porque Livro herda comportamentos de Coleção."
    ],
    correct: 2,
    explanation: "Correto! Livros existem independentemente e podem ser parte de múltiplas coleções — isso é agregação: relação 'tem um' sem controle do ciclo de vida."
  },
  has_interativo: false
};

export default missao;
