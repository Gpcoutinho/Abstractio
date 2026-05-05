import type { Missao } from '../types';

const missao: Missao = {
  id: "2-6",
  title: "Resumo",
  icon: "📋",
  theory: `
## Resumo — Os 4 Pilares

Você dominou as leis que governam objetos bem projetados. Veja o quadro completo:

| Pilar | Mecanismo em Python | Para que serve |
|---|---|---|
| **Abstração** | \`ABC\`, \`@abstractmethod\` | Define contratos, esconde complexidade |
| **Encapsulamento** | \`__attr\`, \`@property\` | Protege dados, controla acesso |
| **Herança** | \`class Filho(Pai)\`, \`super()\` | Reusa e especializa comportamentos |
| **Polimorfismo** | Override, Duck Typing | Trata objetos distintos uniformemente |

### Os 4 pilares juntos

\`\`\`python
from abc import ABC, abstractmethod

class Veiculo(ABC):            # Abstração
    def __init__(self, marca):
        self.__marca = marca   # Encapsulamento

    @property
    def marca(self):
        return self.__marca

    @abstractmethod
    def mover(self):           # contrato
        pass

class Carro(Veiculo):          # Herança
    def mover(self):
        return f"{self.marca} rodando na estrada."

class Barco(Veiculo):          # Herança
    def mover(self):
        return f"{self.marca} navegando no mar."

frota = [Carro("Toyota"), Barco("Yamaha")]
for v in frota:
    print(v.mover())           # Polimorfismo
\`\`\`

> Próximo nível: como objetos se **relacionam** entre si — sobrescrita, contratos e associações.
`,
  exercise: {
    question: "Qual pilar garante que código genérico possa operar sobre diferentes tipos de objeto sem precisar conhecê-los individualmente?",
    options: [
      "Encapsulamento, porque protege os dados de cada objeto.",
      "Herança, porque todos os objetos descendem de uma mesma classe.",
      "Polimorfismo, porque permite tratar objetos distintos de forma uniforme.",
      "Abstração, porque define quais métodos cada classe deve ter."
    ],
    correct: 2,
    explanation: "Correto! O polimorfismo é o pilar que permite escrever código genérico que funciona com diferentes tipos — sem precisar de condicionais para cada um."
  },
  has_interativo: false
};

export default missao;
