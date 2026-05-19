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
