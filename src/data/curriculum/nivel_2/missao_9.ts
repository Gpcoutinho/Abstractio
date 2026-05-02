import type { Missao } from '../types';

const missao: Missao = {
  id: "2-9",
  title: "Relacionamentos — Composição",
  icon: "🧱",
  theory: `
## Composição

**Composição** é a relação mais forte — o objeto todo **cria suas partes** e elas **não existem sem ele**. Quando o todo é destruído, as partes vão junto.

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
        lista = "\\n  ".join(str(c) for c in self.comodos)
        return f"Casa em {self.endereco}:\\n  {lista}\\n  Total: {self.area_total()}m²"

minha_casa = Casa("Rua das Flores, 42")
print(minha_casa)
\`\`\`

### Composição com lógica de negócio

\`\`\`python
class Motor:
    def __init__(self, cilindradas):
        self.cilindradas = cilindradas
        self.ligado = False

    def ligar(self):
        self.ligado = True

class Carro:
    def __init__(self, modelo, cilindradas):
        self.modelo = modelo
        self.motor  = Motor(cilindradas)  # Motor criado dentro do Carro

    def ligar(self):
        self.motor.ligar()
        return f"{self.modelo} ligado com motor de {self.motor.cilindradas}cc."
\`\`\`

### Resumo dos relacionamentos

| | Associação | Agregação | Composição |
|---|---|---|---|
| Força | Fraca | Média | Forte |
| "Parte" independente? | ✓ | ✓ | ✗ |
| Quem cria a "parte"? | Externo | Externo | O próprio todo |
| Destruição | Independente | Independente | Junto com o todo |
`,
  exercise: {
    question: "Em qual situação a Composição é o relacionamento mais adequado?",
    options: [
      "Quando dois objetos se referenciam mas existem de forma totalmente independente.",
      "Quando as partes de um objeto não fazem sentido fora dele e são criadas e destruídas junto com o todo.",
      "Quando um objeto pode pertencer a múltiplos objetos 'todo' simultaneamente.",
      "Quando a relação entre objetos é temporária e baseada em parâmetros de método."
    ],
    correct: 1,
    explanation: "Correto! Composição é para partes que só existem no contexto do todo — como cômodos de uma casa ou órgãos de um corpo."
  },
  has_interativo: false
};

export default missao;
