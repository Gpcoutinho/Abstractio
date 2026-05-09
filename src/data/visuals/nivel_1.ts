export const moldeBoloAnimation = `<figure style="margin:1.5rem auto;display:flex;justify-content:center">
<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" style="width:200px;display:block;border-radius:12px">
  <defs>
    <radialGradient id="mbag" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8A4FFF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#8A4FFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <style>
    .mb-cake{animation:mbRise 4s ease infinite}
    .mb-sp1{animation:mbSpark 4s ease infinite}
    .mb-sp2{animation:mbSpark 4s .18s ease infinite}
    .mb-sp3{animation:mbSpark 4s .32s ease infinite}
    .mb-glow{animation:mbGlow 4s ease infinite}
    @keyframes mbRise{
      0%,100%{transform:translateY(310px)}
      18%{transform:translateY(118px)}
      25%,62%{transform:translateY(126px)}
      78%{transform:translateY(310px)}
    }
    @keyframes mbSpark{
      0%,22%,72%,100%{opacity:0;transform:scale(0)}
      34%,60%{opacity:1;transform:scale(1)}
    }
    @keyframes mbGlow{
      0%,22%,72%,100%{opacity:0}
      34%,60%{opacity:1}
    }
  </style>
  <rect width="200" height="280" fill="#0e0e1a" rx="12"/>
  <ellipse class="mb-glow" cx="100" cy="194" rx="48" ry="10" fill="url(#mbag)"/>
  <!-- Bolo desenhado antes do corpo da forma — o corpo o cobre quando está dentro -->
  <g class="mb-cake">
    <rect x="57" y="24" width="86" height="22" rx="3" fill="#e8c870"/>
    <rect x="57" y="4" width="86" height="22" rx="3" fill="#f5dc80"/>
    <rect x="55" y="-8" width="90" height="16" rx="8" fill="#f9c8d8"/>
    <ellipse cx="75" cy="4" rx="6" ry="5" fill="#f9c8d8"/>
    <ellipse cx="100" cy="6" rx="6" ry="5" fill="#f9c8d8"/>
    <ellipse cx="125" cy="4" rx="6" ry="5" fill="#f9c8d8"/>
    <path d="M100,-8 Q106,-18 102,-24" stroke="#6aaa50" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="102" cy="-24" r="6" fill="#e04060"/>
    <circle cx="100" cy="-26" r="2" fill="#f07090" opacity="0.7"/>
  </g>
  <!-- Corpo da forma desenhado depois do bolo — mascara o bolo quando dentro -->
  <rect x="42" y="210" width="116" height="70" rx="8" fill="#110c26" stroke="#4F33A9" stroke-width="1.5"/>
  <!-- Rim desenhado por último — mascara o bolo na saída -->
  <rect x="30" y="196" width="140" height="14" rx="5" fill="#1e1845" stroke="#8A4FFF" stroke-width="1.5"/>
  <rect x="11" y="200" width="20" height="9" rx="3" fill="#1e1845" stroke="#8A4FFF" stroke-width="1.5"/>
  <rect x="169" y="200" width="20" height="9" rx="3" fill="#1e1845" stroke="#8A4FFF" stroke-width="1.5"/>
  <text x="100" y="240" text-anchor="middle" fill="#5535a8" font-size="10" font-family="monospace" font-weight="700">class Bolo</text>
  <g class="mb-sp1" transform="translate(152,130)">
    <path d="M0,-7 L1.5,-1.5 L7,0 L1.5,1.5 L0,7 L-1.5,1.5 L-7,0 L-1.5,-1.5 Z" fill="#c0a0ff"/>
  </g>
  <g class="mb-sp2" transform="translate(44,142)">
    <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" fill="#d0b0ff"/>
  </g>
  <g class="mb-sp3" transform="translate(158,155)">
    <path d="M0,-4 L1,-1 L4,0 L1,1 L0,4 L-1,1 L-4,0 L-1,-1 Z" fill="#a888e8"/>
  </g>
  <text x="100" y="275" text-anchor="middle" fill="#4a2d98" font-size="11" font-family="monospace">a forma cria o bolo</text>
</svg>
</figure>`;

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
</figure>`;

export const diagramaClasseObjeto = `<figure style="margin:1.5rem 0">
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
</figure>`;

export const diagramaClasseMetodo = `<figure style="margin:1.5rem 0">
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
</figure>`;
