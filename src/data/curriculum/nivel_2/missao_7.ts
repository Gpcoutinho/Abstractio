import type { Missao } from '../types';

const missao: Missao = {
  id: "2-7",
  title: "Relacionamentos — Associação",
  icon: "↔️",
  theory: `
## Associação

**Associação** é a relação mais fraca — um objeto *usa* outro, mas nenhum depende do ciclo de vida do outro.

Os objetos existem de forma independente e a relação é temporária ou opcional.

\`\`\`python
class Motorista:
    def __init__(self, nome):
        self.nome = nome

    def dirigir(self, carro):  # recebe o carro — não é dono dele
        return f"{self.nome} está dirigindo {carro.modelo}."

class Carro:
    def __init__(self, modelo):
        self.modelo = modelo

fusca = Carro("Fusca")
gol   = Carro("Gol")
ana   = Motorista("Ana")

print(ana.dirigir(fusca))  # Ana está dirigindo Fusca.
print(ana.dirigir(gol))    # Ana está dirigindo Gol.
# fusca e gol continuam existindo independente de ana
\`\`\`

### Associação bidirecional

\`\`\`python
class Professor:
    def __init__(self, nome):
        self.nome   = nome
        self.alunos = []

    def adicionar_aluno(self, aluno):
        self.alunos.append(aluno)
        aluno.professor = self  # bidirecional

class Aluno:
    def __init__(self, nome):
        self.nome      = nome
        self.professor = None

prof  = Professor("Dr. Silva")
aluno = Aluno("Bia")
prof.adicionar_aluno(aluno)

print(aluno.professor.nome)   # Dr. Silva
print(prof.alunos[0].nome)    # Bia
\`\`\`

### Características da Associação

- Objetos **independentes** — um pode existir sem o outro
- Relação **temporária** ou **opcional**
- Implementada passando objetos como **parâmetros** ou referências
`,
  exercise: {
    question: "Qual característica define uma relação de **Associação** entre objetos?",
    options: [
      "Um objeto cria e destrói o outro durante seu ciclo de vida.",
      "Os objetos se conhecem e interagem, mas existem de forma independente.",
      "Um objeto é parte estrutural do outro e não pode existir sozinho.",
      "Um objeto herda atributos e métodos do outro."
    ],
    correct: 1,
    explanation: "Correto! Na associação, os objetos interagem mas são independentes — nenhum controla o ciclo de vida do outro."
  },
  has_interativo: false
};

export default missao;
