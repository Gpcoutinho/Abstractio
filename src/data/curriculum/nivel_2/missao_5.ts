import type { Missao } from '../types';

const missao: Missao = {
  id: "2-5",
  title: "Polimorfismo",
  icon: "PiMaskHappy",
  emblem: "Metamorfo(a) das Marés",
  theory: `
## Polimorfismo

**Polimorfismo** significa "muitas formas". É a capacidade de tratar objetos de tipos diferentes de forma uniforme, desde que compartilhem uma interface comum.

\`\`\`python
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def fazer_som(self):
        raise NotImplementedError

class Cachorro(Animal):
    def fazer_som(self):
        return f"{self.nome}: Au au!"

class Gato(Animal):
    def fazer_som(self):
        return f"{self.nome}: Miau!"

class Pato(Animal):
    def fazer_som(self):
        return f"{self.nome}: Quack!"

# Polimorfismo em ação — mesmo código, comportamentos diferentes
animais = [Cachorro("Rex"), Gato("Mia"), Pato("Donald")]

for animal in animais:
    print(animal.fazer_som())
# Rex: Au au!
# Mia: Miau!
# Donald: Quack!
\`\`\`

### Duck Typing — polimorfismo sem herança

Python é flexível: se o objeto tem o método esperado, funciona — independente da hierarquia.

\`\`\`python
class Robo:
    def fazer_som(self):
        return "Robo: Bip bip!"

# Robo não herda de Animal, mas funciona na mesma lista
todos = [Cachorro("Rex"), Robo()]
for x in todos:
    print(x.fazer_som())
\`\`\`

> "Se anda como pato e grasna como pato, é um pato." — Duck Typing

### Por que polimorfismo importa?

- Código genérico que funciona com tipos futuros sem modificação
- Reduz condicionais (\`if isinstance(...)\`)
- Facilita extensão do sistema
`,
  exercise: {
    question: "O que é Duck Typing em Python?",
    options: [
      "Uma forma de herança múltipla exclusiva do Python.",
      "A capacidade de usar um objeto em qualquer contexto desde que ele possua os métodos esperados, independente de sua hierarquia de classes.",
      "Um padrão de projeto para criar objetos do tipo 'pato'.",
      "Uma verificação estrita de tipos feita em tempo de compilação."
    ],
    correct: 1,
    explanation: "Correto! Duck Typing permite que qualquer objeto seja usado polimorficamente desde que implemente a interface esperada, sem precisar herdar de uma classe específica."
  },
  has_interativo: false
};

export default missao;
