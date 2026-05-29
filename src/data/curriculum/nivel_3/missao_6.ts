import type { Missao } from '../types';

const missao: Missao = {
  id: "3-6",
  title: "Associação",
  icon: "PiArrowsHorizontal",
  emblem: "O Elo Marinho",
  theory: `
## Objetos que se conhecem

Em sistemas reais, objetos raramente existem sozinhos — eles se relacionam. Uma das formas mais simples de relacionamento é a **associação**: um objeto *usa* outro, mas nenhum depende da existência do outro.

> **Associação** = objetos que interagem mas existem de forma completamente independente.

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

---

## Associação bidirecional

A relação pode funcionar nos dois sentidos:

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

print(aluno.professor.nome)  # Dr. Silva
print(prof.alunos[0].nome)   # Bia
\`\`\`

---

## Características da Associação

- Objetos **independentes** — um pode existir sem o outro
- Relação **temporária** ou **opcional**
- Implementada passando objetos como **parâmetros** ou referências

> **Resumindo:** Na associação, os objetos interagem mas são independentes — nenhum controla o ciclo de vida do outro. É o relacionamento mais fraco e mais comum.
`,
  exercicio: {
    question: "Qual característica define uma relação de **Associação** entre objetos?",
    options: [
      "Um objeto cria e destrói o outro durante seu ciclo de vida.",
      "Um objeto é parte estrutural do outro e não pode existir sozinho.",
      "Um objeto herda atributos e métodos do outro.",
      "Os objetos se conhecem e interagem, mas existem de forma independente.",
    ],
    correct: 3,
    explanation: "Correto! Na associação, os objetos interagem mas são independentes — nenhum controla o ciclo de vida do outro."
  },
  has_minigame: false
};

export default missao;
