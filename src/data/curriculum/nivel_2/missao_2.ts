import type { Missao } from '../types';

const missao: Missao = {
  id: "2-2",
  title: "Abstração",
  icon: "PiSpinner",
  emblem: "Rei/Rainha da Abstração",
  theory: `
## Abstração

**Abstração** é o processo de focar nos aspectos essenciais, ignorando detalhes irrelevantes. Em Python, implementamos via **classes abstratas** com o módulo \`abc\`.

Uma classe abstrata define um **contrato**: todas as subclasses *devem* implementar certos métodos.

\`\`\`python
from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass

    def descrever(self):  # método concreto compartilhado
        return f"Área: {self.area():.2f} | Perímetro: {self.perimetro():.2f}"

class Circulo(Forma):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return 3.14159 * self.raio ** 2

    def perimetro(self):
        return 2 * 3.14159 * self.raio

class Retangulo(Forma):
    def __init__(self, w, h):
        self.w, self.h = w, h

    def area(self):
        return self.w * self.h

    def perimetro(self):
        return 2 * (self.w + self.h)

formas = [Circulo(5), Retangulo(4, 6)]
for f in formas:
    print(f.descrever())
\`\`\`

### Vantagens
- Força um contrato entre classes
- Habilita **polimorfismo**: tratar \`Circulo\` e \`Retangulo\` uniformemente como \`Forma\`
- Separa *o quê* fazer do *como* fazer
`,
  exercicio: {
    question: "O que caracteriza uma **classe abstrata** em Python?",
    options: [
      "Uma classe que não pode ter nenhum método implementado.",
      "Uma classe que só pode ser instanciada uma única vez.",
      "Uma classe que herda de `ABC` e define métodos abstratos que as subclasses são obrigadas a implementar.",
      "Uma classe privada que não pode ser importada por outros módulos."
    ],
    correct: 2,
    explanation: "Perfeito! Classes abstratas (ABC) definem contratos. Métodos com @abstractmethod obrigam as subclasses a implementá-los."
  },
  has_interativo: false
};

export default missao;
