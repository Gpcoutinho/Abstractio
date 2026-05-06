import type { Missao } from '../types';

const missao: Missao = {
  id: "1-2",
  title: "Objeto",
  icon: "🔵",
  theory: `
## Olhe ao seu redor

Cadeira. Celular. Cachorro. Caneta.

Todo objeto do mundo real tem duas coisas em comum:

- **Características** — como ele *é* (cor, nome, tamanho, peso...)
- **Comportamentos** — o que ele *faz* (latir, carregar, rolar, escrever...)

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <style>
    .oc1{animation:oFadeUp .5s .05s ease both}
    .oc2{animation:oFadeUp .5s .25s ease both}
    .oc3{animation:oFadeUp .5s .45s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
  </style>
  <rect width="680" height="300" fill="#0e0e1a" rx="12"/>
  <text x="340" y="26" text-anchor="middle" fill="#7878a0" font-size="13" font-family="monospace">Objetos do mundo real têm características e comportamentos</text>

  <!-- Card 1 - Cachorro -->
  <g class="oc1">
    <rect x="18" y="38" width="198" height="254" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="18" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="18" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="117" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Cachorro</text>
    <text x="117" y="118" text-anchor="middle" font-size="28">🐕</text>
    <line x1="36" y1="134" x2="198" y2="134" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="154" fill="#9090c0" font-size="15" font-family="monospace">nome: "Rex"</text>
    <text x="36" y="174" fill="#9090c0" font-size="15" font-family="monospace">raça: "Labrador"</text>
    <text x="36" y="194" fill="#9090c0" font-size="15" font-family="monospace">idade: 3</text>
    <line x1="36" y1="208" x2="198" y2="208" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="234" fill="#6EEB83" font-size="15" font-family="monospace">latir()  buscar()</text>
  </g>

  <!-- Card 2 - Celular -->
  <g class="oc2">
    <rect x="241" y="38" width="198" height="254" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="241" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="241" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="340" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Celular</text>
    <text x="340" y="118" text-anchor="middle" font-size="28">📱</text>
    <line x1="259" y1="134" x2="421" y2="134" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="154" fill="#9090c0" font-size="15" font-family="monospace">marca: "Apple"</text>
    <text x="259" y="174" fill="#9090c0" font-size="15" font-family="monospace">bateria: 85</text>
    <text x="259" y="194" fill="#9090c0" font-size="15" font-family="monospace">ligado: True</text>
    <line x1="259" y1="208" x2="421" y2="208" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="234" fill="#6EEB83" font-size="15" font-family="monospace">ligar()  tirarFoto()</text>
  </g>

  <!-- Card 3 - Carro -->
  <g class="oc3">
    <rect x="464" y="38" width="198" height="254" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="464" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="464" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="563" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Carro</text>
    <text x="563" y="118" text-anchor="middle" font-size="28">🚗</text>
    <line x1="482" y1="134" x2="644" y2="134" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="154" fill="#9090c0" font-size="15" font-family="monospace">modelo: "Fusca"</text>
    <text x="482" y="174" fill="#9090c0" font-size="15" font-family="monospace">cor: "azul"</text>
    <text x="482" y="194" fill="#9090c0" font-size="15" font-family="monospace">velocidade: 0</text>
    <line x1="482" y1="208" x2="644" y2="208" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="234" fill="#6EEB83" font-size="15" font-family="monospace">ligar()  acelerar()</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Características em roxo · comportamentos em verde</figcaption>
</figure>

A **Programação Orientada a Objetos (POO)** usa exatamente essa lógica para organizar programas: em vez de uma lista enorme de instruções soltas, você cria **objetos** que imitam coisas do mundo real — cada um com seus próprios dados e ações.

---

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
