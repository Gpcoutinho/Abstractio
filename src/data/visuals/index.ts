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
