import type { Missao } from '../types';

const missao: Missao = {
  id: "4-4",
  title: "SOLID",
  icon: "PiDiamond",
  emblem: "O Códice S.O.L.I.D.o",
  theory: `
## SOLID

**SOLID** é um acrônimo com 5 princípios de design orientado a objetos, definidos por Robert C. Martin. São guias para código limpo, manutenível e extensível.

| Letra | Princípio | Em uma linha |
|---|---|---|
| **S** | Single Responsibility | Uma classe, uma razão para mudar |
| **O** | Open/Closed | Aberta para extensão, fechada para modificação |
| **L** | Liskov Substitution | Subclasses devem poder substituir a superclasse |
| **I** | Interface Segregation | Interfaces específicas > uma interface genérica |
| **D** | Dependency Inversion | Dependa de abstrações, não de implementações |

### S — Single Responsibility

\`\`\`python
# Ruim: duas responsabilidades
class Relatorio:
    def calcular(self): ...
    def salvar_pdf(self): ...

# Bom: separadas
class CalculadoraRelatorio:
    def calcular(self): ...

class ExportadorPDF:
    def salvar(self, relatorio): ...
\`\`\`

### O — Open/Closed

\`\`\`python
# Extensível sem modificar o código existente
class Desconto(ABC):
    @abstractmethod
    def aplicar(self, preco): pass

class DescontoVIP(Desconto):
    def aplicar(self, preco): return preco * 0.8

class DescontoEstudante(Desconto):
    def aplicar(self, preco): return preco * 0.9
\`\`\`

### L — Liskov Substitution

\`\`\`python
# Subclasse deve funcionar onde a superclasse é esperada
def calcular_area(forma: Forma) -> float:
    return forma.area()  # funciona com Circulo, Retangulo, etc.
\`\`\`

### I — Interface Segregation

\`\`\`python
# Ruim: interface geral demais
class Trabalhador(ABC):
    @abstractmethod
    def trabalhar(self): pass
    @abstractmethod
    def comer(self): pass  # robôs não comem!

# Bom: interfaces específicas
class Trabalhavel(ABC):
    @abstractmethod
    def trabalhar(self): pass

class Alimentavel(ABC):
    @abstractmethod
    def comer(self): pass
\`\`\`

### D — Dependency Inversion

\`\`\`python
# Dependa da abstração (Repositorio), não da implementação (MySQL)
class Servico:
    def __init__(self, repo: Repositorio):  # abstração
        self.repo = repo
\`\`\`
`,
  exercise: {
    question: "O princípio **Open/Closed** diz que classes devem ser:",
    options: [
      "Abertas para modificação e fechadas para extensão.",
      "Abertas apenas para herança múltipla e fechadas para composição.",
      "Fechadas para qualquer tipo de mudança após a primeira versão.",
      "Abertas para extensão (novos comportamentos via subclasses) e fechadas para modificação do código existente.",
    ],
    correct: 3,
    explanation: "Correto! Open/Closed significa que você adiciona funcionalidade criando novas classes (extensão), sem modificar as existentes — protegendo o que já funciona."
  },
  has_interativo: false
};

export default missao;
