import type { Missao } from '../types';

const missao: Missao = {
  id: "1-5",
  title: "Métodos",
  icon: "⚙️",
  theory: `
## O que um objeto sabe *fazer*

Você já sabe que objetos têm **atributos** (o que sabem). Agora veja o que eles sabem **fazer**.

Esses comportamentos são os **métodos**: funções que vivem dentro de uma classe e descrevem as ações dos objetos.

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):                       # método sem parâmetros extras
        return f"{self.nome}: Au au au!"

    def buscar(self, objeto):              # método com parâmetro
        return f"{self.nome} foi buscar o {objeto}!"

rex = Cachorro("Rex")
print(rex.latir())           # Rex: Au au au!
print(rex.buscar("graveto")) # Rex foi buscar o graveto!
\`\`\`

---

## O mistério do \`self\`

Todo método tem \`self\` como primeiro parâmetro — mas quando você chama o método, não passa nada para ele. Por quê?

Se você tem dois cachorros e chama \`rex.latir()\` e \`bolt.latir()\`, os dois usam o **mesmo método**. O \`self\` é o que diz ao método em qual objeto ele está operando:

\`\`\`python
class Cachorro:
    def __init__(self, nome):
        self.nome = nome

    def latir(self):
        # self.nome acessa o nome DESTE cachorro específico
        return f"{self.nome}: Au au!"

rex  = Cachorro("Rex")
bolt = Cachorro("Bolt")

# Python traduz rex.latir() para Cachorro.latir(rex)
print(rex.latir())   # Rex: Au au!
print(bolt.latir())  # Bolt: Au au!
\`\`\`

> **Resumindo o \`self\`:** é a referência ao objeto que chamou o método — sem ele, o método não saberia em qual objeto está operando.

---

## Um exemplo completo

\`\`\`python
class ContaBancaria:
    def __init__(self, titular, saldo=0):
        self.titular = titular
        self.saldo   = saldo

    def depositar(self, valor):
        self.saldo += valor
        return f"Saldo: R\${self.saldo:.2f}"

    def sacar(self, valor):
        if valor > self.saldo:
            return f"Saldo insuficiente. Você tem R\${self.saldo:.2f}"
        self.saldo -= valor
        return f"Saldo: R\${self.saldo:.2f}"

conta = ContaBancaria("Maria", 100.0)
print(conta.depositar(50))  # Saldo: R$150.00
print(conta.sacar(30))      # Saldo: R$120.00
\`\`\`

---

## Método vs. função comum

| | Função | Método |
|---|---|---|
| Onde fica | Fora de uma classe | Dentro de uma classe |
| Acessa dados do objeto? | Não | Sim (via \`self\`) |
| Como chamar | \`latir(cachorro)\` | \`cachorro.latir()\` |

<figure style="margin:1.5rem 0">
<svg viewBox="0 0 680 255" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;border-radius:12px">
  <style>
    .ii1{animation:oFadeUp .45s .1s ease both}
    .ii2{animation:oFadeUp .45s .3s ease both}
    .ii3{animation:oFadeUp .45s .5s ease both}
    .iarr1{animation:oFadeIn .3s .25s ease both}
    .iarr2{animation:oFadeIn .3s .45s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
    @keyframes oFadeIn{from{opacity:0}to{opacity:1}}
  </style>
  <rect width="680" height="255" fill="#0e0e1a" rx="12"/>

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

  <!-- Arrow 1 -->
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

  <!-- Arrow 2 -->
  <g class="iarr2">
    <line x1="441" y1="129" x2="467" y2="129" stroke="#2a6a3a" stroke-width="2.5"/>
    <polygon points="467,124 478,129 467,134" fill="#2a6a3a"/>
    <text x="459" y="118" text-anchor="middle" fill="#4aaa60" font-size="13" font-family="monospace">Chama</text>
  </g>

  <!-- Method panel -->
  <g class="ii3">
    <rect x="481" y="18" width="185" height="222" rx="10" fill="#0d200e" stroke="#2a6a3a" stroke-width="1.5"/>
    <rect x="481" y="18" width="185" height="46" rx="10" fill="#122018"/>
    <rect x="481" y="38" width="185" height="26" fill="#122018"/>
    <text x="573" y="50" text-anchor="middle" fill="#6EEB83" font-size="16" font-family="monospace" font-weight="bold">Método</text>
    <text x="573" y="106" text-anchor="middle" font-size="28">💬</text>
    <text x="573" y="144" text-anchor="middle" fill="#6EEB83" font-size="16" font-family="monospace">rex.latir()</text>
    <text x="573" y="168" text-anchor="middle" fill="#60b878" font-size="14" font-family="monospace">"Rex: Au au au!"</text>
    <text x="573" y="200" text-anchor="middle" fill="#5aaa70" font-size="14" font-family="monospace">O que o objeto faz</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Classe → objetos → método em ação</figcaption>
</figure>

> **Resumindo:** Métodos são as ações que um objeto sabe executar. Sempre têm \`self\` para saber em qual objeto estão operando — mas você não precisa passá-lo na chamada.
`,
  exercise: {
    question: "Por que todo método de instância em Python deve ter `self` como primeiro parâmetro?",
    options: [
      "É uma convenção opcional que melhora apenas a legibilidade.",
      "Para que o método acesse e modifique os atributos do objeto específico que o chamou.",
      "Porque o Python exige que toda função tenha ao menos um parâmetro.",
      "Para indicar que o método é público e acessível externamente."
    ],
    correct: 1,
    explanation: "Correto! `self` é uma referência à instância. Sem ele, o método não saberia qual objeto está manipulando."
  },
  has_interativo: false
};

export default missao;
