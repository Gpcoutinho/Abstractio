import type { Missao } from '../types';

const missao: Missao = {
  id: "2-8",
  title: "Relacionamentos — Agregação",
  icon: "🧺",
  theory: `
## Agregação

**Agregação** é uma relação "tem um" — o objeto todo **contém** partes, mas as partes **podem existir independentemente** do todo.

É uma associação com maior grau de pertencimento, mas sem controle total do ciclo de vida.

\`\`\`python
class Jogador:
    def __init__(self, nome, posicao):
        self.nome    = nome
        self.posicao = posicao

    def __str__(self):
        return f"{self.nome} ({self.posicao})"

class Time:
    def __init__(self, nome):
        self.nome     = nome
        self.jogadores = []  # agrega jogadores

    def adicionar(self, jogador):
        self.jogadores.append(jogador)

    def listar(self):
        for j in self.jogadores:
            print(f"  {j}")

# Jogadores existem antes e independente do time
ana    = Jogador("Ana",    "Atacante")
carlos = Jogador("Carlos", "Goleiro")

flamengo = Time("Flamengo")
flamengo.adicionar(ana)
flamengo.adicionar(carlos)

# Se o time for dissolvido, os jogadores continuam existindo
del flamengo
print(ana)  # Ana (Atacante) — ainda existe!
\`\`\`

### Características da Agregação

| Característica | Valor |
|---|---|
| Relação | "tem um" |
| Ciclo de vida | Partes independentes do todo |
| Criação das partes | Fora do objeto todo |
| Destruição | Todo destruído ≠ partes destruídas |

> **Dica:** se os objetos "parte" são criados fora do "todo" e passados para ele, provavelmente é agregação.
`,
  exercise: {
    question: "O que diferencia Agregação de Composição?",
    options: [
      "Na agregação, as partes são criadas dentro do todo e destruídas junto com ele.",
      "Na agregação, as partes existem independentemente do todo e podem ser reutilizadas por outros objetos.",
      "Agregação usa herança, enquanto composição usa interfaces.",
      "Não há diferença prática — são apenas nomes diferentes para o mesmo conceito."
    ],
    correct: 1,
    explanation: "Correto! Na agregação, as partes têm vida própria — podem existir sem o todo e até pertencer a outros objetos ao mesmo tempo."
  },
  has_interativo: false
};

export default missao;
