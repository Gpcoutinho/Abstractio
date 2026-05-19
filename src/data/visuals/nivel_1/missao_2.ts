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
</figure>`;

export const diagramaInstancias = `<figure style="margin:1.5rem 0">
<svg viewBox="0 0 280 258" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;display:block;margin:0 auto;border-radius:12px">
  <style>
    .ii2{animation:oFadeUp .45s .1s ease both}
    @keyframes oFadeUp{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
  </style>
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
</figure>`;
