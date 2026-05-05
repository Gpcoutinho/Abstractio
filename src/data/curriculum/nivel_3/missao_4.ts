import type { Missao } from '../types';

const missao: Missao = {
  id: "3-4",
  title: "Os Contratos",
  icon: "📜",
  theory: `
## Os Contratos

Em POO, um **contrato** é um acordo formal que define o que uma classe *deve* fazer — sem ditar *como* ela faz.

Quando uma classe assina um contrato, ela se compromete a implementar um conjunto de métodos. Isso garante que qualquer objeto que respeite o contrato possa ser usado de forma intercambiável.

### Por que contratos existem?

Imagine que você está construindo um sistema de pagamentos. Você quer aceitar Pix, cartão de crédito e boleto. Sem um contrato:

\`\`\`python
# Sem contrato — caótico
class PagamentoPix:
    def pagar_pix(self, valor): ...

class PagamentoCartao:
    def processar_cartao(self, valor): ...

class PagamentoBoleto:
    def emitir_boleto(self, valor): ...
\`\`\`

Cada classe tem um método diferente — impossível tratá-las uniformemente.

### Com um contrato

\`\`\`python
from abc import ABC, abstractmethod

class MetodoPagamento(ABC):  # o contrato
    @abstractmethod
    def pagar(self, valor: float) -> str:
        pass

class Pix(MetodoPagamento):
    def pagar(self, valor):
        return f"✅ Pix de R\${valor:.2f} enviado."

class Cartao(MetodoPagamento):
    def pagar(self, valor):
        return f"💳 Cartão cobrado: R\${valor:.2f}."

class Boleto(MetodoPagamento):
    def pagar(self, valor):
        return f"📄 Boleto de R\${valor:.2f} gerado."

def processar_pedido(metodo: MetodoPagamento, valor: float):
    return metodo.pagar(valor)  # funciona com qualquer método

print(processar_pedido(Pix(), 150.00))
print(processar_pedido(Cartao(), 89.90))
\`\`\`

Em Python, contratos são implementados com **interfaces** (via ABC sem implementação) e **classes abstratas** (via ABC com implementação parcial).
`,
  exercise: {
    question: "Qual é o principal benefício de usar contratos (interfaces/classes abstratas) em um sistema?",
    options: [
      "Aumentar o desempenho do código em tempo de execução.",
      "Garantir que diferentes classes implementem um conjunto comum de métodos, permitindo intercambialidade.",
      "Impedir que subclasses adicionem novos métodos além dos definidos no contrato.",
      "Substituir completamente a necessidade de herança no sistema."
    ],
    correct: 1,
    explanation: "Correto! Contratos garantem que qualquer classe que os implemente possa ser usada de forma intercambiável, tornando o sistema extensível e previsível."
  },
  has_interativo: false
};

export default missao;
