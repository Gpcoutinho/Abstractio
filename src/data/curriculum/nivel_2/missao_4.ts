import type { Missao } from '../types';

const missao: Missao = {
  id: "2-4",
  title: "Herança",
  icon: "PiDna",
  emblem: "Lorde dos Cefalópodes",
  theory: `
## Herança

**Herança** permite que uma classe filha (subclasse) herde atributos e métodos de uma classe pai (superclasse), promovendo reuso e especialização.

\`\`\`python
class Animal:
    def __init__(self, nome):
        self.nome = nome

    def respirar(self):
        return f"{self.nome} está respirando."

    def fazer_som(self):
        return "..."

class Cachorro(Animal):    # herda de Animal
    def fazer_som(self):   # sobrescreve (override)
        return f"{self.nome} diz: Au au!"

class Gato(Animal):
    def fazer_som(self):
        return f"{self.nome} diz: Miau!"

rex = Cachorro("Rex")
print(rex.respirar())   # Rex está respirando. ← herdado
print(rex.fazer_som())  # Rex diz: Au au!     ← sobrescrito
\`\`\`

### \`super()\` — acessando a classe pai

\`\`\`python
class AnimalDomestico(Animal):
    def __init__(self, nome, dono):
        super().__init__(nome)  # chama Animal.__init__
        self.dono = dono
\`\`\`

Python também suporta **herança múltipla**: \`class Anfibio(Terrestre, Aquatico): pass\`
`,
  exercise: {
    question: "O que acontece quando uma subclasse define um método com o mesmo nome que a superclasse?",
    options: [
      "O método da subclasse sobrescreve (override) o da superclasse para aquela instância.",
      "Ocorre um erro de execução.",
      "Ambos os métodos são executados simultaneamente.",
      "O método da superclasse sempre tem prioridade."
    ],
    correct: 0,
    explanation: "Correto! Isso se chama override (sobrescrita). A subclasse redefine o comportamento para suas próprias instâncias."
  },
  has_interativo: false
};

export default missao;
