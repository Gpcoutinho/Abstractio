import type { Missao } from '../types';

const missao: Missao = {
  id: "1-3",
  title: "Classe",
  icon: "📐",
  theory: `
## A forma de assar bolo

Na missão anterior, você conheceu o **objeto** — o bolo. Agora é hora de conhecer o **molde**: a **classe**.

A forma de assar bolos não é um bolo. Ela é a instrução de como criar bolos. Uma classe funciona exatamente assim: define como os objetos daquele tipo devem ser.

> **Classe** = o molde que descreve como os objetos serão criados — quais dados eles têm e o que sabem fazer.

---

**Cuidado para não confundir os bolos**

Se você já aprendeu que "um algoritmo é como uma receita de bolo", prepare-se — na POO usamos a mesma analogia com um papel diferente, e isso costuma dar um nó. A diferença está no foco:

- **Procedural (Algoritmo = Receita = Ações):** foca em **verbos** — *quebre* os ovos, *misture* a farinha, *asse* por 40 minutos. A receita *é* o programa: executa de cima a baixo uma vez e produz um resultado.
- **POO (Classe = Receita/Forma = Ingredientes):** foca em **substantivos** — não importa como você fez a massa; importa a *estrutura*: "todo bolo que sair daqui seguirá este molde". A classe não executa sozinha — ela existe para criar objetos.

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

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <style>
    .ii1{animation:oFadeUp .45s .1s ease both}
    .ii2{animation:oFadeUp .45s .3s ease both}
    .iarr1{animation:oFadeIn .3s .25s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
    @keyframes oFadeIn{from{opacity:0}to{opacity:1}}
  </style>
  <rect width="460" height="258" fill="#0e0e1a" rx="12"/>

  <!-- Class panel -->
  <g class="ii1">
    <rect x="15" y="18" width="188" height="222" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="2"/>
    <rect x="15" y="18" width="188" height="52" rx="10" fill="#1e1845"/>
    <rect x="15" y="42" width="188" height="28" fill="#1e1845"/>
    <text x="109" y="52" text-anchor="middle" fill="#8A4FFF" font-size="16" font-family="monospace" font-weight="bold">class Cachorro</text>
    <text x="109" y="108" text-anchor="middle" font-size="28">📐</text>
    <text x="109" y="142" text-anchor="middle" fill="#b0a0d8" font-size="16" font-family="monospace">O Molde</text>
    <text x="109" y="164" text-anchor="middle" fill="#8878a8" font-size="14" font-family="monospace">Define a estrutura</text>
    <text x="109" y="184" text-anchor="middle" fill="#8878a8" font-size="14" font-family="monospace">de qualquer cachorro</text>
  </g>

  <!-- Arrow -->
  <g class="iarr1">
    <line x1="208" y1="129" x2="234" y2="129" stroke="#4F33A9" stroke-width="2.5"/>
    <polygon points="234,124 245,129 234,134" fill="#4F33A9"/>
    <text x="226" y="118" text-anchor="middle" fill="#8A5FFF" font-size="13" font-family="monospace">Cria</text>
  </g>

  <!-- Objects panel -->
  <g class="ii2">
    <rect x="248" y="18" width="188" height="222" rx="10" fill="#111a20" stroke="#1a5a8a" stroke-width="1.5"/>
    <rect x="248" y="18" width="188" height="46" rx="10" fill="#152030"/>
    <rect x="248" y="38" width="188" height="26" fill="#152030"/>
    <text x="342" y="50" text-anchor="middle" fill="#5090c0" font-size="16" font-family="monospace" font-weight="bold">Objetos Criados</text>
    <rect x="262" y="74" width="78" height="118" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="301" y="97" text-anchor="middle" fill="#60a8d0" font-size="14" font-family="monospace" font-weight="bold">rex</text>
    <text x="301" y="115" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">nome: Rex</text>
    <text x="301" y="132" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">raça: Lab</text>
    <rect x="350" y="74" width="78" height="118" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="389" y="97" text-anchor="middle" fill="#60a8d0" font-size="14" font-family="monospace" font-weight="bold">bolt</text>
    <text x="389" y="115" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">nome: Bolt</text>
    <text x="389" y="132" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">raça: Husky</text>
    <text x="342" y="218" text-anchor="middle" fill="#6090b0" font-size="13" font-family="monospace">Instâncias independentes</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">A classe é o molde — os objetos são os produtos criados a partir dela</figcaption>
</figure>

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
    explanation: "Exato! Uma classe é um molde. A partir dela criamos quantos objetos (instâncias) quisermos."
  },
  has_interativo: false
};

export default missao;
