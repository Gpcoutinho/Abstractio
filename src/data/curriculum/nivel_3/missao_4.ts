import type { Missao } from '../types';

const missao: Missao = {
  id: "3-4",
  title: "Classes Abstratas",
  icon: "🏛️",
  theory: `
## O problema sem contratos

Imagine um sistema de pagamentos com Pix, cartão e boleto. Sem um acordo comum:

\`\`\`python
class PagamentoPix:
    def pagar_pix(self, valor): ...

class PagamentoCartao:
    def processar_cartao(self, valor): ...

class PagamentoBoleto:
    def emitir_boleto(self, valor): ...
\`\`\`

Cada classe tem um método diferente — impossível tratá-las de forma uniforme. Em POO, a solução é um **contrato**: um acordo formal que define o que toda classe *deve* fazer, sem ditar *como*.

---

## Classe abstrata: contrato com base comum

Uma **classe abstrata** combina duas coisas:
- **Métodos abstratos** — que as subclasses são obrigadas a implementar
- **Métodos concretos** — comportamento compartilhado por todas

\`\`\`python
from abc import ABC, abstractmethod

class Relatorio(ABC):
    def __init__(self, titulo):
        self.titulo = titulo

    # Abstratos — cada subclasse implementa do seu jeito
    @abstractmethod
    def gerar_cabecalho(self) -> str:
        pass

    @abstractmethod
    def gerar_corpo(self, dados: list) -> str:
        pass

    # Concreto — compartilhado por todas as subclasses
    def exportar(self, dados: list) -> str:
        cab  = self.gerar_cabecalho()
        corp = self.gerar_corpo(dados)
        return f"{cab}\\n{corp}\\n--- fim do relatório ---"


class RelatorioPDF(Relatorio):
    def gerar_cabecalho(self):
        return f"[PDF] === {self.titulo} ==="

    def gerar_corpo(self, dados):
        return "\\n".join(f"• {item}" for item in dados)


class RelatorioCSV(Relatorio):
    def gerar_cabecalho(self):
        return self.titulo

    def gerar_corpo(self, dados):
        return ",".join(str(d) for d in dados)


vendas = ["Janeiro: R$10k", "Fevereiro: R$12k"]
pdf = RelatorioPDF("Vendas")
csv = RelatorioCSV("Vendas")

print(pdf.exportar(vendas))
print(csv.exportar(vendas))
\`\`\`

---

## Por que usar classe abstrata?

| Situação | Use |
|---|---|
| Há comportamento **compartilhado** entre as subclasses | Classe abstrata |
| Só precisa definir **o que** deve existir, sem implementar nada | Interface (próxima missão) |

> **Resumindo:** Uma classe abstrata define um contrato parcial — impõe métodos que as subclasses devem implementar, mas também pode oferecer comportamentos prontos e compartilhados.
`,
  exercise: {
    question: "Qual a principal diferença entre uma interface pura e uma classe abstrata?",
    options: [
      "Interfaces só existem em Java; Python só tem classes abstratas.",
      "Interfaces definem apenas o contrato; classes abstratas podem ter métodos concretos compartilhados além dos abstratos.",
      "Classes abstratas não podem ser herdadas, apenas instanciadas.",
      "Interfaces permitem instanciação direta; classes abstratas não."
    ],
    correct: 1,
    explanation: "Correto! Classes abstratas combinam contrato com implementação parcial compartilhada — ideal quando há comportamento comum entre as subclasses."
  },
  has_interativo: false
};

export default missao;
