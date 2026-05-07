const ARROW = `<span style="font-size:22px;color:#4F33A9;opacity:0.8;flex-shrink:0">→</span>`;

const ANNOTATION_ARROW = `<svg viewBox="0 0 10 26" style="width:10px;height:26px"><line x1="5" y1="0" x2="5" y2="18" stroke="#4F33A9" stroke-width="1.5" stroke-dasharray="3,2" opacity="0.7"/><polygon points="1,16 5,22 9,16" fill="#4F33A9" opacity="0.7"/></svg>`;

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function annotationLabel(text: string): string {
  return `<span style="font-family:sans-serif;font-size:11px;font-weight:700;color:#8A4FFF;letter-spacing:0.05em">${text}</span>`;
}

function annotated(label: string, content: string): string {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px">${annotationLabel(label)}${ANNOTATION_ARROW}${content}</div>`;
}

export function diagramRow(items: string[]): string {
  return `<div style="margin:1.5rem -2rem;overflow-x:auto"><div style="display:flex;justify-content:center;gap:1.5rem;align-items:center;flex-wrap:nowrap;padding:0 2rem">${items.join(ARROW)}</div></div>`;
}

export function oceanPolvo(tag: string): string {
  return `<figure style="flex:0 0 auto;margin:0">
<svg viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg" style="width:170px;display:block;border-radius:12px">
  <defs>
    <linearGradient id="gbg-ocean" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#07111e"/>
      <stop offset="100%" stop-color="#040c16"/>
    </linearGradient>
  </defs>
  <rect width="170" height="210" fill="url(#gbg-ocean)" rx="12"/>
  <circle cx="35" cy="45" r="3" fill="#0a3a5a" opacity="0.6">
    <animate attributeName="cy" values="45;12;45" dur="3.1s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0;0.6" dur="3.1s" repeatCount="indefinite"/>
  </circle>
  <circle cx="140" cy="90" r="2" fill="#0a3a5a" opacity="0.35">
    <animate attributeName="cy" values="90;55;90" dur="2.4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="20" cy="140" r="4" fill="#0a3a5a" opacity="0.3">
    <animate attributeName="cy" values="140;80;140" dur="3.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.3;0;0.3" dur="3.8s" repeatCount="indefinite"/>
  </circle>
  <ellipse cx="88" cy="98" rx="38" ry="38" fill="#4F33A9" opacity="0.08"/>
  <ellipse cx="88" cy="76" rx="26" ry="22" fill="#7c5cbf"/>
  <ellipse cx="88" cy="92" rx="30" ry="28" fill="#6b4aaa"/>
  <ellipse cx="81" cy="67" rx="9" ry="5" fill="#a080d8" opacity="0.4"/>
  <circle cx="79" cy="76" r="5.5" fill="white"/>
  <circle cx="97" cy="76" r="5.5" fill="white"/>
  <circle cx="79" cy="77" r="3" fill="#1a0a30"/>
  <circle cx="97" cy="77" r="3" fill="#1a0a30"/>
  <circle cx="77" cy="75" r="1.1" fill="white" opacity="0.9"/>
  <circle cx="95" cy="75" r="1.1" fill="white" opacity="0.9"/>
  <path d="M82,88 Q88,94 94,88" stroke="#c0a0e0" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M62,110 Q50,132 56,152" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="-5,62,110;5,62,110;-5,62,110" dur="2.1s" repeatCount="indefinite"/>
  </path>
  <path d="M72,116 Q62,138 66,156" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="4,72,116;-4,72,116;4,72,116" dur="2.6s" repeatCount="indefinite"/>
  </path>
  <path d="M82,120 Q78,142 82,160" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="-3,82,120;3,82,120;-3,82,120" dur="1.9s" repeatCount="indefinite"/>
  </path>
  <path d="M94,120 Q96,142 94,160" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="3,94,120;-3,94,120;3,94,120" dur="2.3s" repeatCount="indefinite"/>
  </path>
  <path d="M104,116 Q114,138 110,156" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="-4,104,116;4,104,116;-4,104,116" dur="2s" repeatCount="indefinite"/>
  </path>
  <path d="M114,110 Q124,132 120,152" stroke="#6b4aaa" stroke-width="5" fill="none" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="5,114,110;-5,114,110;5,114,110" dur="2.4s" repeatCount="indefinite"/>
  </path>
  <rect x="56" y="168" width="66" height="18" rx="4" fill="#1a0a30" opacity="0.9"/>
  <text x="89" y="181" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#8A4FFF">${tag}</text>
</svg>

</figure>`;
}

export function objectCard(label: string, title: string, attrs: Record<string, string>): string {
  const rows = Object.entries(attrs)
    .map(([k, v]) => `<span style="font-family:'Courier New',monospace;font-size:12px"><span style="color:#7dd3fc">${k}</span><span style="color:#94a3b8"> = </span><span style="color:#34d399">${v}</span></span>`)
    .join('');
  const card = `<div style="background:#08111f;border:1px solid #2d3a8c;border-radius:8px;overflow:hidden;min-width:190px"><div style="background:#130d2a;padding:6px 12px;border-bottom:1px solid #2d3a8c;font-family:'Courier New',monospace;font-size:12px;font-weight:700;color:#c4b5fd;text-align:center">${title}</div><div style="padding:10px 12px 10px 15px;display:flex;flex-direction:column;gap:8px;border-left:3px solid rgba(79,51,169,0.5)">${rows}</div></div>`;
  return annotated(label, card);
}

export function codeCard(label: string, code: string): string {
  const pre = `<pre style="margin:0;background:#1e1e35;border:1px solid #3d3d5e;border-radius:8px;padding:1rem 1.25rem;font-family:'Courier New',monospace;font-size:13px;color:#e2e8f0;overflow-x:auto;min-width:190px"><code style="color:inherit;background:transparent">${escapeHtml(code)}</code></pre>`;
  return annotated(label, pre);
}

export function moldeBoloAnimation(): string {
  return `<figure style="margin:1.5rem auto;display:flex;justify-content:center">
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
}
