import type { Missao } from '../types';

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "🔵",
  theory: `
## O biscoito, não a forma

Imagine uma **forma de cortar biscoitos** em formato de estrela. Com ela você faz quantas estrelas quiser — cada uma com sua própria cobertura e decoração.

A forma é o molde. O biscoito é o **produto real**.

Em POO, o **objeto** é esse produto — algo concreto que existe na memória do computador, com seus próprios dados.

> **Objeto** = uma coisa concreta criada a partir de um molde (a classe). Cada objeto tem seus próprios dados e existe de forma independente.

"Criar um objeto" também é chamado de **instanciar**. O objeto é uma **instância** da classe.

---

## Cada objeto tem seu próprio estado

Esse é o ponto mais importante: **mexer em um objeto não afeta os outros**.

\`\`\`python
class Carro:
    def __init__(self, modelo):
        self.modelo     = modelo
        self.ligado     = False   # começa desligado
        self.velocidade = 0       # começa parado

    def ligar(self):
        self.ligado = True
        return f"{self.modelo} ligado!"

    def acelerar(self, km):
        if self.ligado:
            self.velocidade += km
            return f"{self.modelo} a {self.velocidade} km/h"
        return f"{self.modelo} está desligado!"

# Dois objetos criados do mesmo molde
fusca = Carro("Fusca")
gol   = Carro("Gol")

print(fusca.ligar())       # Fusca ligado!
print(fusca.acelerar(60))  # Fusca a 60 km/h

print(gol.ligado)          # False — Gol continua desligado
print(fusca.velocidade)    # 60
print(gol.velocidade)      # 0
\`\`\`

---

## As três propriedades de todo objeto

| Propriedade | O que é | No exemplo |
|---|---|---|
| **Identidade** | O que diferencia um do outro | \`fusca\` ≠ \`gol\` |
| **Estado** | Os valores atuais dos dados | \`fusca.ligado = True\`, \`gol.ligado = False\` |
| **Comportamento** | O que o objeto sabe fazer | \`.ligar()\`, \`.acelerar()\` |

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 280 258" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;border-radius:12px">
  <style>
    .ii2{animation:oFadeUp .45s .1s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
  </style>
  <rect width="280" height="258" fill="#0e0e1a" rx="12"/>
  <g class="ii2">
    <rect x="46" y="18" width="188" height="222" rx="10" fill="#111a20" stroke="#1a5a8a" stroke-width="1.5"/>
    <rect x="46" y="18" width="188" height="46" rx="10" fill="#152030"/>
    <rect x="46" y="38" width="188" height="26" fill="#152030"/>
    <text x="140" y="50" text-anchor="middle" fill="#5090c0" font-size="16" font-family="monospace" font-weight="bold">Objetos Criados</text>
    <rect x="60" y="74" width="78" height="118" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="99" y="97" text-anchor="middle" fill="#60a8d0" font-size="14" font-family="monospace" font-weight="bold">rex</text>
    <text x="99" y="115" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">nome: Rex</text>
    <text x="99" y="132" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">raça: Lab</text>
    <rect x="148" y="74" width="78" height="118" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="187" y="97" text-anchor="middle" fill="#60a8d0" font-size="14" font-family="monospace" font-weight="bold">bolt</text>
    <text x="187" y="115" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">nome: Bolt</text>
    <text x="187" y="132" text-anchor="middle" fill="#6090b8" font-size="13" font-family="monospace">raça: Husky</text>
    <text x="140" y="218" text-anchor="middle" fill="#6090b0" font-size="13" font-family="monospace">Instâncias independentes</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Cada objeto existe de forma independente na memória</figcaption>
</figure>

---

## Você pode criar quantos objetos quiser

A classe é um molde reutilizável infinitamente:

\`\`\`python
frota = [Carro("Fusca"), Carro("Gol"), Carro("Uno"), Carro("Palio")]

for carro in frota:
    print(carro.ligar())
# Fusca ligado!
# Gol ligado!
# Uno ligado!
# Palio ligado!
\`\`\`

> **Resumindo:** Um objeto é a instância concreta criada a partir de uma classe. Cada objeto tem seu próprio estado independente — mexer em um não afeta os outros.
`,
  exercise: {
    question: "Dado `class Gato`, qual opção cria corretamente **dois objetos distintos**?",
    options: [
      "`gato1 = Gato` e `gato2 = Gato`",
      "`gato1 = Gato()` e `gato2 = Gato()`",
      "`gato1 = new Gato()` e `gato2 = new Gato()`",
      "`Gato.gato1()` e `Gato.gato2()`"
    ],
    correct: 1,
    explanation: "Correto! Em Python, instanciamos objetos chamando a classe como função: `Gato()`. Cada chamada cria uma instância independente."
  },
  has_interativo: false
};

export default missao;
