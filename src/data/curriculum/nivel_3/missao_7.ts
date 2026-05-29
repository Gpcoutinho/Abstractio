import type { Missao } from '../types';

const missao: Missao = {
  id: "3-7",
  title: "Agregação e Composição",
  icon: "PiFactory",
  emblem: "Arquiteto(a) do Ecossistema",
  theory: `
## Dois tipos de "tem um"

Na missão anterior você viu a **associação**: objetos que se usam mas vivem independentes.

Agora veja dois relacionamentos mais fortes, onde um objeto **contém** o outro:

| | Agregação | Composição |
|---|---|---|
| Relação | "tem um" (fraco) | "é composto de" (forte) |
| As partes existem sem o todo? | ✓ Sim | ✗ Não |
| Quem cria as partes? | Externo | O próprio todo |
| Destruição do todo | Partes continuam | Partes são destruídas |

---

## Agregação — partes independentes

\`\`\`python
class Jogador:
    def __init__(self, nome, posicao):
        self.nome    = nome
        self.posicao = posicao

    def __str__(self):
        return f"{self.nome} ({self.posicao})"

class Time:
    def __init__(self, nome):
        self.nome      = nome
        self.jogadores = []

    def adicionar(self, jogador):
        self.jogadores.append(jogador)

# Jogadores existem ANTES e FORA do time
ana    = Jogador("Ana",    "Atacante")
carlos = Jogador("Carlos", "Goleiro")

flamengo = Time("Flamengo")
flamengo.adicionar(ana)
flamengo.adicionar(carlos)

# Se o time acabar, os jogadores continuam existindo
del flamengo
print(ana)  # Ana (Atacante) — ainda existe!
\`\`\`

**Dica:** se as partes são criadas fora do todo e passadas para ele, é agregação.

---

## Composição — partes inseparáveis

\`\`\`python
class Comodo:
    def __init__(self, nome, area_m2):
        self.nome    = nome
        self.area_m2 = area_m2

    def __str__(self):
        return f"{self.nome} ({self.area_m2}m²)"

class Casa:
    def __init__(self, endereco):
        self.endereco = endereco
        # Cômodos criados DENTRO da Casa — composição
        self.comodos = [
            Comodo("Sala",    30),
            Comodo("Quarto",  20),
            Comodo("Cozinha", 15),
        ]

    def area_total(self):
        return sum(c.area_m2 for c in self.comodos)

    def __str__(self):
        lista = ", ".join(str(c) for c in self.comodos)
        return f"Casa em {self.endereco}: {lista} — Total: {self.area_total()}m²"

minha_casa = Casa("Rua das Flores, 42")
print(minha_casa)
# Casa em Rua das Flores, 42: Sala (30m²), Quarto (20m²), Cozinha (15m²) — Total: 65m²
\`\`\`

Cômodos não fazem sentido fora de uma casa — quando a casa vai, eles vão junto.

---

## Como escolher?

Faça a pergunta: **"a parte faz sentido existir sem o todo?"**

- **Sim** → Agregação (jogadores sem time, livros sem biblioteca)
- **Não** → Composição (cômodos sem casa, órgãos sem corpo)

> **Resumindo:** Agregação e composição são graus de pertencimento. Na agregação, as partes são independentes. Na composição, as partes só existem dentro do todo.
`,
  exercicio: {
    question: "Em um sistema de biblioteca, livros existem antes e independente de uma coleção, e podem pertencer a várias coleções. Qual relacionamento modela isso?",
    options: [
      "Agregação, porque os livros existem independentemente e podem pertencer a mais de uma coleção.",
      "Composição, porque os livros fazem parte da coleção.",
      "Associação, porque livros e coleções não têm nenhuma relação.",
      "Herança, porque Livro herda comportamentos de Coleção.",
    ],
    correct: 0,
    explanation: "Correto! Livros existem independentemente e podem ser parte de múltiplas coleções — isso é agregação: relação 'tem um' sem controle do ciclo de vida."
  },
  has_minigame: false
};

export default missao;
