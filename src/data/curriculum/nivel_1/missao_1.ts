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
<svg viewBox="0 0 680 188" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <style>
    .oc1{animation:oFadeUp .5s .05s ease both}
    .oc2{animation:oFadeUp .5s .25s ease both}
    .oc3{animation:oFadeUp .5s .45s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(10px)}
      to{opacity:1;transform:translateY(0)}
    }
  </style>
  <rect width="680" height="188" fill="#0e0e1a" rx="12"/>
  <text x="340" y="22" text-anchor="middle" fill="#35355a" font-size="10" font-family="monospace">objetos do mundo real têm características e comportamentos</text>

  <!-- Card 1 -->
  <g class="oc1">
    <rect x="18" y="32" width="198" height="145" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="18" y="32" width="198" height="38" rx="10" fill="#1e1840"/>
    <rect x="18" y="58" width="198" height="12" fill="#1e1840"/>
    <text x="117" y="56" text-anchor="middle" fill="#8A4FFF" font-size="12" font-family="monospace" font-weight="bold">Cachorro</text>
    <text x="117" y="83" text-anchor="middle" font-size="18">🐕</text>
    <line x1="36" y1="97" x2="198" y2="97" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="113" fill="#6060a0" font-size="10" font-family="monospace">nome: "Rex"</text>
    <text x="36" y="129" fill="#6060a0" font-size="10" font-family="monospace">raça: "Labrador"</text>
    <text x="36" y="145" fill="#6060a0" font-size="10" font-family="monospace">idade: 3</text>
    <line x1="36" y1="154" x2="198" y2="154" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="170" fill="#6EEB83" font-size="10" font-family="monospace">latir()  buscar()</text>
  </g>

  <!-- Card 2 -->
  <g class="oc2">
    <rect x="241" y="32" width="198" height="145" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="241" y="32" width="198" height="38" rx="10" fill="#1e1840"/>
    <rect x="241" y="58" width="198" height="12" fill="#1e1840"/>
    <text x="340" y="56" text-anchor="middle" fill="#8A4FFF" font-size="12" font-family="monospace" font-weight="bold">Celular</text>
    <text x="340" y="83" text-anchor="middle" font-size="18">📱</text>
    <line x1="259" y1="97" x2="421" y2="97" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="113" fill="#6060a0" font-size="10" font-family="monospace">marca: "Apple"</text>
    <text x="259" y="129" fill="#6060a0" font-size="10" font-family="monospace">bateria: 85</text>
    <text x="259" y="145" fill="#6060a0" font-size="10" font-family="monospace">ligado: True</text>
    <line x1="259" y1="154" x2="421" y2="154" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="170" fill="#6EEB83" font-size="10" font-family="monospace">ligar()  tirarFoto()</text>
  </g>

  <!-- Card 3 -->
  <g class="oc3">
    <rect x="464" y="32" width="198" height="145" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="464" y="32" width="198" height="38" rx="10" fill="#1e1840"/>
    <rect x="464" y="58" width="198" height="12" fill="#1e1840"/>
    <text x="563" y="56" text-anchor="middle" fill="#8A4FFF" font-size="12" font-family="monospace" font-weight="bold">Carro</text>
    <text x="563" y="83" text-anchor="middle" font-size="18">🚗</text>
    <line x1="482" y1="97" x2="644" y2="97" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="113" fill="#6060a0" font-size="10" font-family="monospace">modelo: "Fusca"</text>
    <text x="482" y="129" fill="#6060a0" font-size="10" font-family="monospace">cor: "azul"</text>
    <text x="482" y="145" fill="#6060a0" font-size="10" font-family="monospace">velocidade: 0</text>
    <line x1="482" y1="154" x2="644" y2="154" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="170" fill="#6EEB83" font-size="10" font-family="monospace">ligar()  acelerar()</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:11px;color:#35355a;margin-top:6px;font-family:monospace">características em roxo · comportamentos em verde</figcaption>
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
# Para 2 cachorros já confunde. Para 100? Um pesadelo.
\`\`\`

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <defs>
    <linearGradient id="gbad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#200e0e"/>
      <stop offset="100%" stop-color="#180a0a"/>
    </linearGradient>
    <linearGradient id="ggood" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0a200e"/>
      <stop offset="100%" stop-color="#081808"/>
    </linearGradient>
  </defs>
  <rect width="680" height="155" fill="#0e0e1a" rx="12"/>

  <!-- Left: chaos -->
  <rect x="10" y="10" width="308" height="135" rx="8" fill="url(#gbad)" stroke="#5a1a1a" stroke-width="1.5"/>
  <text x="164" y="30" text-anchor="middle" fill="#c04040" font-size="11" font-family="monospace" font-weight="bold">❌ sem POO</text>
  <text x="28" y="50" fill="#804040" font-size="10" font-family="monospace">nome_cachorro1 = "Rex"</text>
  <text x="28" y="65" fill="#804040" font-size="10" font-family="monospace">idade_cachorro1 = 3</text>
  <text x="28" y="80" fill="#804040" font-size="10" font-family="monospace">nome_cachorro2 = "Bolt"</text>
  <text x="28" y="95" fill="#804040" font-size="10" font-family="monospace">idade_cachorro2 = 5</text>
  <text x="28" y="110" fill="#804040" font-size="10" font-family="monospace">nome_cachorro3 = "Mia"</text>
  <text x="28" y="125" fill="#804040" font-size="10" font-family="monospace">idade_cachorro3 = 1</text>
  <text x="28" y="140" fill="#503030" font-size="10" font-family="monospace">... (100 cachorros = 200 variáveis)</text>

  <!-- Arrow -->
  <text x="340" y="85" text-anchor="middle" fill="#4F33A9" font-size="24" font-weight="bold">→</text>

  <!-- Right: organized -->
  <rect x="362" y="10" width="308" height="135" rx="8" fill="url(#ggood)" stroke="#1a5a1a" stroke-width="1.5"/>
  <text x="516" y="30" text-anchor="middle" fill="#50c070" font-size="11" font-family="monospace" font-weight="bold">✓ com POO</text>
  <rect x="378" y="38" width="88" height="95" rx="7" fill="#0a1a0a" stroke="#2a5a2a" stroke-width="1.5"/>
  <text x="422" y="56" text-anchor="middle" fill="#6EEB83" font-size="9" font-family="monospace" font-weight="bold">Cachorro</text>
  <line x1="386" y1="62" x2="458" y2="62" stroke="#1a3a1a" stroke-width="1"/>
  <text x="386" y="77" fill="#40804a" font-size="9" font-family="monospace">rex</text>
  <text x="386" y="91" fill="#30603a" font-size="8" font-family="monospace">nome: Rex</text>
  <text x="386" y="104" fill="#30603a" font-size="8" font-family="monospace">idade: 3</text>
  <rect x="478" y="38" width="88" height="95" rx="7" fill="#0a1a0a" stroke="#2a5a2a" stroke-width="1.5"/>
  <text x="522" y="56" text-anchor="middle" fill="#6EEB83" font-size="9" font-family="monospace" font-weight="bold">Cachorro</text>
  <line x1="486" y1="62" x2="558" y2="62" stroke="#1a3a1a" stroke-width="1"/>
  <text x="486" y="77" fill="#40804a" font-size="9" font-family="monospace">bolt</text>
  <text x="486" y="91" fill="#30603a" font-size="8" font-family="monospace">nome: Bolt</text>
  <text x="486" y="104" fill="#30603a" font-size="8" font-family="monospace">idade: 5</text>
  <text x="516" y="140" text-anchor="middle" fill="#1a4a1a" font-size="9" font-family="monospace">100 cachorros = 100 objetos iguais</text>
</svg>
<figcaption style="text-align:center;font-size:11px;color:#35355a;margin-top:6px;font-family:monospace">variáveis soltas vs. objetos organizados</figcaption>
</figure>

Com POO, tudo que pertence a um cachorro fica junto dentro de um **objeto Cachorro**. A estrutura é sempre a mesma — só os dados mudam.

---

## Os três ingredientes da POO

Toda a POO é construída sobre três ideias. Pense em biscoitos:

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <style>
    .ii1{animation:oFadeUp .45s .1s ease both}
    .ii2{animation:oFadeUp .45s .3s ease both}
    .ii3{animation:oFadeUp .45s .5s ease both}
    .iarr1{animation:oFadeIn .3s .25s ease both}
    .iarr2{animation:oFadeIn .3s .45s ease both}
    @keyframes oFadeIn{from{opacity:0}to{opacity:1}}
  </style>
  <rect width="680" height="165" fill="#0e0e1a" rx="12"/>

  <!-- Class -->
  <g class="ii1">
    <rect x="15" y="18" width="188" height="132" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="2"/>
    <rect x="15" y="18" width="188" height="36" rx="10" fill="#1e1845"/>
    <rect x="15" y="42" width="188" height="12" fill="#1e1845"/>
    <text x="109" y="41" text-anchor="middle" fill="#8A4FFF" font-size="12" font-family="monospace" font-weight="bold">class Cachorro</text>
    <text x="109" y="75" text-anchor="middle" font-size="24">📐</text>
    <text x="109" y="102" text-anchor="middle" fill="#9080c0" font-size="11" font-family="monospace">O molde</text>
    <text x="109" y="118" text-anchor="middle" fill="#504870" font-size="10" font-family="monospace">define a estrutura</text>
    <text x="109" y="134" text-anchor="middle" fill="#504870" font-size="10" font-family="monospace">de qualquer cachorro</text>
  </g>

  <!-- Arrow 1 -->
  <g class="iarr1">
    <line x1="208" y1="84" x2="234" y2="84" stroke="#4F33A9" stroke-width="2.5"/>
    <polygon points="234,79 245,84 234,89" fill="#4F33A9"/>
    <text x="226" y="74" text-anchor="middle" fill="#4F33A9" font-size="9" font-family="monospace">cria</text>
  </g>

  <!-- Objects -->
  <g class="ii2">
    <rect x="248" y="18" width="188" height="132" rx="10" fill="#111a20" stroke="#1a5a8a" stroke-width="1.5"/>
    <rect x="248" y="18" width="188" height="30" rx="10" fill="#152030"/>
    <rect x="248" y="36" width="188" height="12" fill="#152030"/>
    <text x="342" y="36" text-anchor="middle" fill="#5090c0" font-size="11" font-family="monospace" font-weight="bold">objetos criados</text>
    <rect x="264" y="54" width="72" height="58" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="300" y="70" text-anchor="middle" fill="#4080a0" font-size="9" font-family="monospace" font-weight="bold">rex</text>
    <text x="300" y="84" text-anchor="middle" fill="#305060" font-size="8" font-family="monospace">nome: Rex</text>
    <text x="300" y="97" text-anchor="middle" fill="#305060" font-size="8" font-family="monospace">raça: Lab</text>
    <rect x="348" y="54" width="72" height="58" rx="7" fill="#0e1a25" stroke="#1a4a6a" stroke-width="1"/>
    <text x="384" y="70" text-anchor="middle" fill="#4080a0" font-size="9" font-family="monospace" font-weight="bold">bolt</text>
    <text x="384" y="84" text-anchor="middle" fill="#305060" font-size="8" font-family="monospace">nome: Bolt</text>
    <text x="384" y="97" text-anchor="middle" fill="#305060" font-size="8" font-family="monospace">raça: Husky</text>
    <text x="342" y="132" text-anchor="middle" fill="#1a3a50" font-size="9" font-family="monospace">instâncias independentes</text>
  </g>

  <!-- Arrow 2 -->
  <g class="iarr2">
    <line x1="441" y1="84" x2="467" y2="84" stroke="#2a6a3a" stroke-width="2.5"/>
    <polygon points="467,79 478,84 467,89" fill="#2a6a3a"/>
    <text x="459" y="74" text-anchor="middle" fill="#2a6a3a" font-size="9" font-family="monospace">chama</text>
  </g>

  <!-- Method -->
  <g class="ii3">
    <rect x="481" y="18" width="185" height="132" rx="10" fill="#0d200e" stroke="#2a6a3a" stroke-width="1.5"/>
    <rect x="481" y="18" width="185" height="30" rx="10" fill="#122018"/>
    <rect x="481" y="36" width="185" height="12" fill="#122018"/>
    <text x="573" y="36" text-anchor="middle" fill="#6EEB83" font-size="11" font-family="monospace" font-weight="bold">método</text>
    <text x="573" y="72" text-anchor="middle" font-size="22">💬</text>
    <text x="573" y="98" text-anchor="middle" fill="#6EEB83" font-size="11" font-family="monospace">rex.latir()</text>
    <text x="573" y="116" text-anchor="middle" fill="#409050" font-size="10" font-family="monospace">"Rex: Au au au!"</text>
    <text x="573" y="134" text-anchor="middle" fill="#245030" font-size="9" font-family="monospace">o que o objeto faz</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:11px;color:#35355a;margin-top:6px;font-family:monospace">classe → objetos → método em ação</figcaption>
</figure>

| Ingrediente | O que é | Analogia do biscoito |
|---|---|---|
| **Classe** | O molde, a receita | A forma de cortar a massa |
| **Objeto** | O produto criado | O biscoito em si |
| **Método** | O que o objeto faz | Comer, decorar, guardar |

Cada missão deste nível explora um desses ingredientes em detalhe.

---

## 🌊 No oceano do Polvinho

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
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
  <rect width="680" height="210" fill="url(#gocean)" rx="12"/>
  <rect x="5" y="5" width="670" height="200" fill="url(#glow)" rx="10"/>

  <!-- Bubbles -->
  <circle cx="48" cy="48" r="3" fill="#0a3a5a" opacity="0.7">
    <animate attributeName="cy" values="48;15;48" dur="3.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0;0.7" dur="3.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="110" cy="90" r="2" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="90;45;90" dur="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="30" cy="140" r="4" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="140;80;140" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="55" r="3" fill="#0a3a5a" opacity="0.5">
    <animate attributeName="cy" values="55;18;55" dur="3.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0;0.5" dur="3.8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="630" cy="110" r="2" fill="#0a3a5a" opacity="0.4">
    <animate attributeName="cy" values="110;65;110" dur="2.9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.9s" repeatCount="indefinite"/>
  </circle>

  <!-- Polvinho -->
  <g transform="translate(88,112)">
    <!-- Body glow -->
    <ellipse cx="0" cy="-10" rx="36" ry="36" fill="#4F33A9" opacity="0.12"/>
    <!-- Mantle (head dome) -->
    <ellipse cx="0" cy="-42" rx="24" ry="20" fill="#7c5cbf"/>
    <!-- Body -->
    <ellipse cx="0" cy="-18" rx="28" ry="26" fill="#6b4aaa"/>
    <!-- Mantle highlight -->
    <ellipse cx="-6" cy="-50" rx="8" ry="5" fill="#a080d8" opacity="0.5"/>
    <!-- Eyes -->
    <circle cx="-10" cy="-38" r="6" fill="white"/>
    <circle cx="10" cy="-38" r="6" fill="white"/>
    <circle cx="-10" cy="-37" r="3.5" fill="#1a0a30"/>
    <circle cx="10" cy="-37" r="3.5" fill="#1a0a30"/>
    <circle cx="-8" cy="-39" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="12" cy="-39" r="1.2" fill="white" opacity="0.9"/>
    <!-- Smile -->
    <path d="M-7,-26 Q0,-20 7,-26" stroke="#c0a0e0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <!-- Tentacles with wave animation -->
    <path d="M-22,4 Q-34,22 -28,40" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-6,-22,4;6,-22,4;-6,-22,4" dur="2.1s" repeatCount="indefinite"/>
    </path>
    <path d="M-13,8 Q-20,28 -14,44" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="4,-13,8;-4,-13,8;4,-13,8" dur="2.6s" repeatCount="indefinite"/>
    </path>
    <path d="M-4,10 Q-5,32 -2,46" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-3,-4,10;3,-4,10;-3,-4,10" dur="1.9s" repeatCount="indefinite"/>
    </path>
    <path d="M5,10 Q7,32 5,46" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="3,5,10;-3,5,10;3,5,10" dur="2.3s" repeatCount="indefinite"/>
    </path>
    <path d="M14,8 Q22,28 17,44" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="-5,14,8;5,14,8;-5,14,8" dur="2s" repeatCount="indefinite"/>
    </path>
    <path d="M22,4 Q34,22 29,40" stroke="#6b4aaa" stroke-width="5.5" fill="none" stroke-linecap="round">
      <animateTransform attributeName="transform" type="rotate" values="6,22,4;-6,22,4;6,22,4" dur="2.4s" repeatCount="indefinite"/>
    </path>
  </g>

  <!-- Text -->
  <text x="172" y="38" fill="#6EEB83" font-size="13" font-family="monospace" font-weight="bold">🌊 No oceano do Polvinho</text>
  <text x="172" y="60" fill="#5060a0" font-size="10" font-family="sans-serif">Polvinho vive num oceano cheio de criaturas. Cada uma</text>
  <text x="172" y="76" fill="#5060a0" font-size="10" font-family="sans-serif">tem características únicas e comportamentos próprios.</text>
  <text x="172" y="92" fill="#5060a0" font-size="10" font-family="sans-serif">Para explorar tudo sem se perder, ele criou um sistema</text>
  <text x="172" y="108" fill="#5060a0" font-size="10" font-family="sans-serif">de registro — e esse sistema é a POO.</text>

  <!-- Code block -->
  <rect x="172" y="124" width="490" height="76" rx="8" fill="#080e18" stroke="#0f2035" stroke-width="1.5"/>
  <text x="190" y="143" fill="#2a4a6a" font-size="9" font-family="monospace"># cada criatura é um objeto com dados e ações</text>
  <text x="190" y="159" fill="#6080c0" font-size="9" font-family="monospace">polvo  = CriaturaMarina("Polvinho", tentaculos=8)</text>
  <text x="190" y="174" fill="#6080c0" font-size="9" font-family="monospace">baleia = CriaturaMarina("Baleia",   barbatanas=2)</text>
  <text x="190" y="190" fill="#6080c0" font-size="9" font-family="monospace">polvo.explorar()  <tspan fill="#2a5a3a"># Polvinho mergulha!</tspan></text>
</svg>
<figcaption style="text-align:center;font-size:11px;color:#35355a;margin-top:6px;font-family:monospace">Polvinho e o início da jornada POO</figcaption>
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
