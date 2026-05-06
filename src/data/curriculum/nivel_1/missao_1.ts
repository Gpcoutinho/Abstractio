import type { Missao } from '../types';

const missao: Missao = {
  id: "1-1",
  title: "O que é POO?",
  icon: "🧩",
  theory: `

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


## No oceano do Polvinho

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:0 auto;border-radius:12px">
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
  <rect width="300" height="230" fill="url(#gocean)" rx="12"/>
  <rect x="5" y="5" width="290" height="220" fill="url(#glow)" rx="10"/>

  <!-- Bubbles -->
  <circle cx="40" cy="50" r="4" fill="#0a3a5a" opacity="0.7">
    <animate attributeName="cy" values="50;15;50" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0;0.7" dur="3.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="90" cy="100" r="3" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="100;55;100" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="25" cy="160" r="5" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="160;90;160" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="260" cy="60" r="4" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="60;20;60" dur="3.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="3.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="240" cy="130" r="3" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="130;75;130" dur="2.9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.9s" repeatCount="indefinite"/>
  </circle>

  <!-- Polvinho -->
  <g transform="translate(150,148)">
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
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Polvinho e o início da jornada POO</figcaption>
</figure>

Polvinho vive num oceano repleto de criaturas — polvos, baleias, peixes, corais. Cada ser tem características únicas e comportamentos próprios. Para explorar e entender tudo isso sem se perder, ele criou um **sistema de registro**: um jeito de organizar cada criatura com seus dados e ações.

Cada criatura é um objeto com dados e ações:

\`\`\`python
polvo  = CriaturaMarina("Polvinho", tentaculos=8)
baleia = CriaturaMarina("Baleia",   barbatanas=2)
polvo.explorar()  # Polvinho mergulha!
\`\`\`

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
  has_interativo: false
};

export default missao;
