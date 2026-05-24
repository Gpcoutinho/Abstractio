# Guardados

Trechos removidos temporariamente das missÃµes para uso futuro.

---

<!-- missao_1.ts â€” seÃ§Ã£o "O problema que a POO resolve" â€” removida para realocaÃ§Ã£o futura -->

## O problema que a POO resolve

**"Mas como assim? Por que eu deveria trocar a procedural pela POO?"**

Vamos entender isso no contexto da nossa prÃ³pria trilha. Imagine que precisamos colocar o nosso mascote, o Polvo, flutuando aqui na sua tela.

Na abordagem Procedural, nÃ³s criarÃ­amos variÃ¡veis totalmente separadas:

```python
polvo1_nome = "Otto"
polvo1_cor = "Roxo"

polvo2_nome = "AzulÃ£o"
polvo2_cor = "Azul"
```

E assim por diante para cada polvo â€” muitas variÃ¡veis soltas!

AtÃ© aqui, tudo bem, certo? Mas e se precisarmos de 100 polvos no nosso oceano? Na programaÃ§Ã£o procedural, isso viraria um caos. VocÃª teria que criar listas gigantescas e garantir que os dados nÃ£o se misturassem.

Ã‰ exatamente aqui que a POO entra para salvar o dia. Na POO, nÃ³s paramos de lidar com variÃ¡veis soltas e criamos um pacote auto-suficiente chamado **Objeto** que guarda toda a informaÃ§Ã£o necessÃ¡ria sobre aquela entidade.

A mÃ¡gica da POO acontece porque o cÃ³digo te permite materializar o seu modelo mental. Olha como fica fÃ¡cil definir a estrutura do nosso mascote.

> [diagrama-objeto: DiagramaObjeto.tsx â€” polvo â†’ card objeto â†’ bloco de cÃ³digo Python]

Todas as caracterÃ­sticas ficam unidas num Ãºnico pacote.

Percebe como a POO ajuda muito mais? Se quisermos 100 polvos agora, Ã© sÃ³ usar essa mesma estrutura 100 vezes. O cÃ³digo fica limpo, organizado e faz sentido para a mente humana.


---

<!-- data/visuals/nivel_1/missao_2.ts — diagramaObjetos — removido da missão 2 para uso futuro -->

## diagramaObjetos (missão 2 — Objeto)

SVG com três cards (Cachorro, Celular, Carro) mostrando características e ações de objetos do mundo real.

```ts
export const diagramaObjetos = `<figure style="margin:1.5rem 0">
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
  <text x="340" y="26" text-anchor="middle" fill="#7878a0" font-size="13" font-family="monospace">Objetos do mundo real têm características e ações</text>

  <!-- Cachorro -->
  <g class="oc1">
    <rect x="18" y="38" width="198" height="243" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="18" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="18" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="117" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Cachorro</text>
    <text x="117" y="110" text-anchor="middle" font-size="26">🐕</text>
    <line x1="36" y1="124" x2="198" y2="124" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="138" fill="#5a5a8a" font-size="12" font-family="monospace">características</text>
    <text x="36" y="155" fill="#9090c0" font-size="14" font-family="monospace">nome: "Rex"</text>
    <text x="36" y="172" fill="#9090c0" font-size="14" font-family="monospace">raça: "Labrador"</text>
    <text x="36" y="189" fill="#9090c0" font-size="14" font-family="monospace">idade: 3</text>
    <line x1="36" y1="202" x2="198" y2="202" stroke="#25253d" stroke-width="1"/>
    <text x="36" y="216" fill="#3a6a4a" font-size="12" font-family="monospace">ações</text>
    <text x="36" y="233" fill="#6EEB83" font-size="14" font-family="monospace">latir</text>
    <text x="36" y="250" fill="#6EEB83" font-size="14" font-family="monospace">buscar bolinha</text>
    <text x="36" y="267" fill="#6EEB83" font-size="14" font-family="monospace">dar a pata</text>
  </g>

  <!-- Celular -->
  <g class="oc2">
    <rect x="241" y="38" width="198" height="243" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="241" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="241" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="340" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Celular</text>
    <text x="340" y="110" text-anchor="middle" font-size="26">📱</text>
    <line x1="259" y1="124" x2="421" y2="124" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="138" fill="#5a5a8a" font-size="12" font-family="monospace">características</text>
    <text x="259" y="155" fill="#9090c0" font-size="14" font-family="monospace">marca: "Apple"</text>
    <text x="259" y="172" fill="#9090c0" font-size="14" font-family="monospace">bateria: 85</text>
    <text x="259" y="189" fill="#9090c0" font-size="14" font-family="monospace">ligado: True</text>
    <line x1="259" y1="202" x2="421" y2="202" stroke="#25253d" stroke-width="1"/>
    <text x="259" y="216" fill="#3a6a4a" font-size="12" font-family="monospace">ações</text>
    <text x="259" y="233" fill="#6EEB83" font-size="14" font-family="monospace">ligar</text>
    <text x="259" y="250" fill="#6EEB83" font-size="14" font-family="monospace">tirar foto</text>
    <text x="259" y="267" fill="#6EEB83" font-size="14" font-family="monospace">tocar música</text>
  </g>

  <!-- Carro -->
  <g class="oc3">
    <rect x="464" y="38" width="198" height="243" rx="10" fill="#15152a" stroke="#4F33A9" stroke-width="1.5"/>
    <rect x="464" y="38" width="198" height="54" rx="10" fill="#1e1840"/>
    <rect x="464" y="64" width="198" height="28" fill="#1e1840"/>
    <text x="563" y="72" text-anchor="middle" fill="#8A4FFF" font-size="18" font-family="monospace" font-weight="bold">Carro</text>
    <text x="563" y="110" text-anchor="middle" font-size="26">🚗</text>
    <line x1="482" y1="124" x2="644" y2="124" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="138" fill="#5a5a8a" font-size="12" font-family="monospace">características</text>
    <text x="482" y="155" fill="#9090c0" font-size="14" font-family="monospace">modelo: "Fusca"</text>
    <text x="482" y="172" fill="#9090c0" font-size="14" font-family="monospace">cor: "azul"</text>
    <text x="482" y="189" fill="#9090c0" font-size="14" font-family="monospace">velocidade: 0</text>
    <line x1="482" y1="202" x2="644" y2="202" stroke="#25253d" stroke-width="1"/>
    <text x="482" y="216" fill="#3a6a4a" font-size="12" font-family="monospace">ações</text>
    <text x="482" y="233" fill="#6EEB83" font-size="14" font-family="monospace">ligar</text>
    <text x="482" y="250" fill="#6EEB83" font-size="14" font-family="monospace">acelerar</text>
    <text x="482" y="267" fill="#6EEB83" font-size="14" font-family="monospace">frear</text>
  </g>
</svg>
<figcaption style="text-align:center;font-size:12px;color:#7878a0;margin-top:6px;font-family:monospace">Características em cinza · ações em verde</figcaption>
</figure>`;
```
