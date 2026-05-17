import type { Missao } from '../types';
import { moldeBoloAnimation, diagramaClasseObjeto } from '../../visuals/nivel_1';

const missao: Missao = {
  id: "1-3",
  title: "Classe",
  icon: "📐",
  theory: `
## A forma de assar bolo

Na missão anterior, você conheceu o **objeto** — o bolo. Agora é hora de conhecer o **molde**: a **classe**.

A forma de assar bolos não é um bolo. Ela é a instrução de como criar bolos. Uma classe funciona exatamente assim: define como os objetos daquele tipo devem ser.

> **Classe** = o molde que descreve como os objetos serão criados — quais dados eles têm e o que sabem fazer.

${moldeBoloAnimation}

---

**Cuidado para não confundir os bolos**

Se você já aprendeu que "um algoritmo é como uma receita de bolo", prepare-se — na POO usamos a mesma analogia com um papel diferente, e isso costuma dar um nó. A diferença está no foco:

- **Procedural (Algoritmo = Receita = Ações):** foca em **verbos** — *quebre* os ovos, *misture* a farinha, *asse* por 40 minutos. A receita *é* o programa: executa de cima a baixo uma vez e produz um resultado.
- **POO (Classe = Receita/Forma = Ingredientes):** foca em **substantivos** — não importa *como* (passos) você fez a massa; importa a *estrutura* (ingredientes): "todo bolo que sair daqui seguirá este molde". A classe não executa sozinha — ela existe para criar objetos.

Resumindo: a receita é uma **lista de tarefas**. A classe é uma **fábrica**.

<bolo-factory></bolo-factory>

---

## Criando uma classe

\`\`\`python
# "class" avisa o Python: "estou criando um molde"
class Cachorro:
    def __init__(self, nome, raca):
        self.nome = nome   # dado que todo cachorro tem
        self.raca = raca   # dado que todo cachorro tem

    def apresentar(self):
        return f"Au! Sou {self.nome}, um {self.raca}!"
\`\`\`

Criando cachorros a partir do molde:

\`\`\`python
rex  = Cachorro("Rex",  "Labrador")
bolt = Cachorro("Bolt", "Husky")
mia  = Cachorro("Mia",  "Poodle")

print(rex.apresentar())   # Au! Sou Rex, um Labrador!
print(bolt.apresentar())  # Au! Sou Bolt, um Husky!
print(mia.apresentar())   # Au! Sou Mia, um Poodle!
\`\`\`

**Uma classe, três objetos diferentes** — o molde é o mesmo, cada produto é único.

${diagramaClasseObjeto}

---

## O que uma classe pode ter

| Parte | O que é | Exemplo |
|---|---|---|
| **Atributo** | Uma característica | \`self.nome\`, \`self.raca\` |
| **Método** | Um comportamento | \`def apresentar(self)\` |
| **Construtor** | O setup inicial | \`def __init__(self, ...)\` |

Cada uma dessas partes terá sua própria missão neste nível.

---

## Regra de nomenclatura

Por convenção, nomes de classes em Python usam **PascalCase** — cada palavra começa com maiúscula:

\`\`\`python
class Cachorro:       # correto
class ContaBancaria:  # correto
class cachorro:       # evitar
class conta_bancaria: # evitar
\`\`\`

> **Resumindo:** Uma classe é o molde que define como um tipo de objeto deve ser — com suas características e comportamentos. A partir de uma classe, você cria quantos objetos quiser.
`,
  exercise: {
    question: "Escolha a alternativa que melhor define o que é uma **classe**:",
    options: [
      "Um objeto específico criado em tempo de execução.",
      "Um molde que descreve as propriedades e comportamentos de um tipo de objeto.",
      "Uma biblioteca externa usada para executar a linguagem.",
      "Um erro de sintaxe comum em Python."
    ],
    correct: 1,
    explanation: "Exato! Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos.",
    wrong_explanations: [
      "Isso descreve uma instância (objeto), não uma classe. A classe é o molde; o objeto é o produto concreto criado a partir dela.",
      "",
      "Bibliotecas são coleções de código externo que você importa. Classes são estruturas da própria linguagem para definir tipos de objetos.",
      "`class` é uma palavra reservada válida do Python para declarar uma classe — o oposto de um erro de sintaxe."
    ]
  },
  has_interativo: false
};

export default missao;
