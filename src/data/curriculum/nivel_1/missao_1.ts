import type { Missao } from '../types';

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "🧩",
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

## O problema que a POO resolve

Antes da POO, programar um sistema com vários animais ficava assim:

\`\`\`python
# Sem POO — variáveis soltas, impossível de organizar
nome_cachorro1 = "Rex"
idade_cachorro1 = 3
nome_cachorro2 = "Bolt"
idade_cachorro2 = 5
nome_cachorro3 = "Mia"
idade_cachorro3 = 2
# Para 3 cachorros já confunde. Para 100? Um pesadelo.
\`\`\`

Com POO, tudo que pertence a um cachorro fica junto dentro de um **objeto Cachorro**. A estrutura é sempre a mesma — só os dados mudam.

---

## Os três ingredientes da POO

Toda a POO é construída sobre três ideias. Pense em biscoitos:

| Ingrediente | O que é | Analogia do biscoito |
|---|---|---|
| **Classe** | O molde, a receita | A forma de cortar a massa |
| **Objeto** | O produto criado | O biscoito em si |
| **Método** | O que o objeto faz | Comer, decorar, guardar |

Cada missão deste nível explora um desses ingredientes em detalhe.

---

## 🌊 No oceano do Polvinho

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <defs>
    <linearGradient id="gocean" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#07111e"/>
      <stop offset="100%" stop-color="#040c16"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4F33A9" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#4F33A9" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="680" height="270" fill="url(#gocean)" rx="12"/>
  <rect x="5" y="5" width="670" height="260" fill="url(#glow)" rx="10"/>

  <!-- Bubbles -->
  <circle cx="48" cy="48" r="4" fill="#0a3a5a" opacity="0.7">
    <animate attributeName="cy" values="48;15;48" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0;0.7" dur="3.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="110" cy="100" r="3" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="100;55;100" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="30" cy="160" r="5" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="160;90;160" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="60" r="4" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="60;20;60" dur="3.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="3.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="630" cy="130" r="3" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="130;75;130" dur="2.9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.9s" repeatCount="indefinite"/>
  </circle>

  <!-- Polvinho -->
  <g transform="translate(90,148)">
    <ellipse cx="0" cy="-10" rx="42" ry="42" fill="#4F33A9" opacity="0.12"/>
    <ellipse cx="0" cy="-48" rx="28" ry="24" fill="#7c5cbf"/>
    <ellipse cx="0" cy="-20" rx="32" ry="30" fill="#6b4aaa"/>
    <ellipse cx="-7" cy="-58" rx="10" ry="6" fill="#a080d8" opacity="0.5"/>
    <circle cx="-12" cy="-44" r="7" fill="white"/>
    <circle cx="12" cy="-44" r="7" fill="white"/>
    <circle cx="-12" cy="-43" r="4" fill="#1a0a30"/>
    <circle cx="12" cy="-43" r="4" fill="#1a0a30"/>
    <circle cx="-10" cy="-45" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="14" cy="-45" r="1.5" fill="white" opacity="0.9"/>
    <path d="M-8,-30 Q0,-22 8,-30" stroke="#c0a0e0" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M-26,4 Q-40,26 -32,48" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-6,-26,4;6,-26,4;-6,-26,4" dur="2.1s" repeatCount="indefinite"/>
    </path>
    <path d="M-15,8 Q-24,32 -16,52" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="4,-15,8;-4,-15,8;4,-15,8" dur="2.6s" repeatCount="indefinite"/>
    </path>
    <path d="M-4,12 Q-6,38 -2,56" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-3,-4,12;3,-4,12;-3,-4,12" dur="1.9s" repeatCount="indefinite"/>
    </path>
    <path d="M6,12 Q8,38 6,56" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="3,6,12;-3,6,12;3,6,12" dur="2.3s" repeatCount="indefinite"/>
    </path>
    <path d="M16,8 Q26,32 20,52" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-5,16,8;5,16,8;-5,16,8" dur="2s" repeatCount="indefinite"/>
    </path>
    <path d="M26,4 Q40,26 34,48" stroke="#6b4aaa" stroke-width="6.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="6,26,4;-6,26,4;6,26,4" dur="2.4s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- Text -->
  <text x="180" y="48" fill="#6EEB83" font-size="18" font-family="monospace" font-weight="bold">🌊 No oceano do Polvinho</text>
  <text x="180" y="76" fill="#8898c8" font-size="14" font-family="sans-serif">Polvinho vive num oceano cheio de criaturas. Cada uma</text>
  <text x="180" y="98" fill="#8898c8" font-size="14" font-family="sans-serif">tem características únicas e comportamentos próprios.</text>
  <text x="180" y="120" fill="#8898c8" font-size="14" font-family="sans-serif">Para explorar tudo sem se perder, ele criou um sistema</text>
  <text x="180" y="142" fill="#8898c8" font-size="14" font-family="sans-serif">de registro — e esse sistema é a POO.</text>

  <!-- Code block -->
  <rect x="180" y="162" width="482" height="96" rx="8" fill="#080e18" stroke="#0f2035" stroke-width="1.5"/>
  <text x="198" y="184" fill="#6090b0" font-size="12" font-family="monospace"># cada criatura é um objeto com dados e ações</text>
  <text x="198" y="204" fill="#6080c0" font-size="12" font-family="monospace">polvo  = CriaturaMarina("Polvinho", tentaculos=8)</text>
  <text x="198" y="224" fill="#6080c0" font-size="12" font-family="monospace">baleia = CriaturaMarina("Baleia",   barbatanas=2)</text>
  <text x="198" y="244" fill="#6080c0" font-size="12" font-family="monospace">polvo.explorar()  <tspan fill="#5aaa70"># Polvinho mergulha!</tspan></text>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Polvinho e o início da jornada POO</figcaption>
</figure>

Polvinho vive num oceano repleto de criaturas — polvos, baleias, peixes, corais. Cada ser tem características únicas e comportamentos próprios. Para explorar e entender tudo isso sem se perder, ele criou um **sistema de registro**: um jeito de organizar cada criatura com seus dados e ações.

Esse sistema é exatamente a **Programação Orientada a Objetos** — e ao longo desta trilha, você vai construí-lo do zero junto com Polvinho.
`,
  exercise: {
    question: "Qual das alternativas melhor define a Programação Orientada a Objetos?",
    options: [
      "Uma sequência linear de instruções que o computador executa.",
      "Um paradigma que organiza o software em torno de objetos com atributos e métodos.",
      "Uma linguagem de programação específica como Python ou Java.",
      "Um método exclusivo para criar interfaces gráficas."
    ],
    correct: 1,
    explanation: "Correto! POO é um paradigma que organiza o código em objetos com atributos (dados) e métodos (comportamentos)."
  },
  has_interativo: true,
  interativo_html: "interativos/nivel_1_missao_1.html"
};

export default missao;
