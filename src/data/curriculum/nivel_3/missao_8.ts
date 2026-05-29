import type { Missao } from '../types';

const missao: Missao = {
  id: "3-8",
  title: "Resumo",
  icon: "PiClipboard",
  emblem: "Mestre dos Mares",
  theory: `
## Resumo — A sociedade dos objetos

Você dominou como objetos se comportam e se relacionam em sistemas reais.

### Quadro geral

| Conceito | Em uma linha |
|---|---|
| **Sobrescrita** | Subclasse redefine método da superclasse |
| **Sobrecarga** | Método aceita diferentes formas de chamada |
| **Classe Abstrata** | Contrato com implementação parcial compartilhada |
| **Interface** | Contrato puro — define o quê, não o como |
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
# 💳 Cartão: R$17.50 aprovado.
\`\`\`

> Próximo nível: **engenharia e qualidade** — como escrever código que dura.
`,
  exercicio: {
    question: "Qual é o principal benefício de usar contratos (interfaces/classes abstratas) em um sistema?",
    options: [
      "Aumentar o desempenho do código em tempo de execução.",
      "Impedir que subclasses adicionem novos métodos além dos definidos no contrato.",
      "Garantir que diferentes classes implementem um conjunto comum de métodos, permitindo intercambialidade.",
      "Substituir completamente a necessidade de herança no sistema.",
    ],
    correct: 2,
    explanation: "Correto! Contratos garantem que qualquer classe que os implemente possa ser usada de forma intercambiável, tornando o sistema extensível e previsível."
  },
  has_minigame: false
};

export default missao;
