import type { Missao } from '../types';

const missao: Missao = {
  id: "2-5",
  title: "Contratos — Classes Abstratas",
  icon: "🏛️",
  theory: `
## Classes Abstratas

Diferente de uma interface pura, uma **classe abstrata** pode combinar métodos abstratos (sem implementação) com métodos concretos (com implementação compartilhada).

Ela define uma base comum para uma família de classes.

\`\`\`python
from abc import ABC, abstractmethod

class Relatorio(ABC):
    def __init__(self, titulo):
        self.titulo = titulo

    # Métodos abstratos — cada subclasse implementa do seu jeito
    @abstractmethod
    def gerar_cabecalho(self) -> str:
        pass

    @abstractmethod
    def gerar_corpo(self, dados: list) -> str:
        pass

    # Método concreto — comportamento compartilhado por todas
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

pdf = RelatorioPDF("Relatório de Vendas")
csv = RelatorioCSV("Vendas")

print(pdf.exportar(vendas))
print(csv.exportar(vendas))
\`\`\`

### Quando usar cada um?

| Situação | Use |
|---|---|
| Só precisa definir o que deve existir | Interface pura |
| Precisa de comportamento compartilhado + contrato | Classe abstrata |
| Quer combinar múltiplos contratos | Múltiplas interfaces |
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
