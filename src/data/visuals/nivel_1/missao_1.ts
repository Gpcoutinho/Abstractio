function slidePolvo(tag: string, id: string, bodyColor: string, lightColor: string): string {
  return `<figure style="flex:0 0 auto;margin:0"><svg viewBox="0 0 100 124" xmlns="http://www.w3.org/2000/svg" style="width:72px;display:block;border-radius:8px"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#07111e"/><stop offset="100%" stop-color="#040c16"/></linearGradient></defs><rect width="100" height="124" fill="url(#${id})" rx="8"/><ellipse cx="50" cy="44" rx="20" ry="18" fill="${lightColor}"/><ellipse cx="50" cy="54" rx="22" ry="20" fill="${bodyColor}"/><circle cx="43" cy="44" r="4" fill="white"/><circle cx="57" cy="44" r="4" fill="white"/><circle cx="43" cy="45" r="2.2" fill="#1a0a30"/><circle cx="57" cy="45" r="2.2" fill="#1a0a30"/><path d="M46,53 Q50,58 54,53" stroke="#c0a0e0" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M32,65 Q24,80 28,94" stroke="${bodyColor}" stroke-width="3.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-5,32,65;5,32,65;-5,32,65" dur="2.1s" repeatCount="indefinite"/></path><path d="M40,70 Q34,84 38,96" stroke="${bodyColor}" stroke-width="3.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="4,40,70;-4,40,70;4,40,70" dur="2.6s" repeatCount="indefinite"/></path><path d="M50,72 Q48,86 50,98" stroke="${bodyColor}" stroke-width="3.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-3,50,72;3,50,72;-3,50,72" dur="1.9s" repeatCount="indefinite"/></path><path d="M60,70 Q64,84 62,96" stroke="${bodyColor}" stroke-width="3.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="3,60,70;-3,60,70;3,60,70" dur="2.3s" repeatCount="indefinite"/></path><path d="M68,65 Q76,80 72,94" stroke="${bodyColor}" stroke-width="3.5" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="-4,68,65;4,68,65;-4,68,65" dur="2s" repeatCount="indefinite"/></path><rect x="22" y="104" width="56" height="14" rx="3" fill="#1a0a30" opacity="0.9"/><text x="50" y="115" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#8A4FFF">${tag}</text></svg></figure>`;
}

function codeVar(name: string, value: string): string {
  return `<span style="color:#CBD5E1">${name}</span><span style="color:#94A3B8"> = </span><span style="color:#60A5FA">"${value}"</span>`;
}

function slidePre(lines: string[]): string {
  return `<pre style="margin:0;background:#1E293B;border:1px solid #334155;border-radius:8px;padding:0.75rem 1rem;font-family:'Fira Code',ui-monospace,SFMono-Regular,monospace;font-size:0.875rem;color:#CBD5E1;overflow-x:auto;line-height:1.8">${lines.join('\n')}</pre>`;
}

function slideHtml(polvosHtml: string, codeHtml: string, caption: string): string {
  return `<div style="display:flex;flex-direction:column;gap:1rem"><div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:nowrap">${polvosHtml}</div>${codeHtml}<p style="text-align:center;font-size:12px;color:#64748b;margin:0">${caption}</p></div>`;
}

function codeDicts(entries: [string, [string, string][]][]) {
  const lines: string[] = [];
  entries.forEach(([varName, fields], idx) => {
    if (idx > 0) lines.push(' ');
    lines.push(`<span style="color:#CBD5E1">${varName}</span><span style="color:#94A3B8"> = </span><span style="color:#94A3B8">{</span>`);
    fields.forEach(([k, v]) => lines.push(`    <span style="color:#60A5FA">"${k}"</span><span style="color:#94A3B8">: </span><span style="color:#60A5FA">"${v}"</span>`));
    lines.push(`<span style="color:#94A3B8">}</span>`);
  });
  return slidePre(lines);
}

const p1 = slidePolvo('polvo 1', 'sbg-p1', '#7c5cbf', '#9b7dd4');
const p2 = slidePolvo('polvo 2', 'sbg-p2', '#3a7aba', '#5a9ad4');
const p3 = slidePolvo('polvo 3', 'sbg-p3', '#2a9a6a', '#4ab884');

const slide1 = slideHtml(
  p1,
  slidePre([
    codeVar('polvo1_nome', 'Polvonilson'),
    codeVar('polvo1_cor ', 'Roxo'),
  ]),
  '2 variáveis utilizadas para definir 1 polvo.'
);

const slide2 = slideHtml(
  `${p1}${p2}`,
  slidePre([
    codeVar('polvo1_nome', 'Polvonilson'),
    codeVar('polvo1_cor ', 'Roxo'),
    codeVar('polvo2_nome', 'Azulão'),
    codeVar('polvo2_cor ', 'Azul'),
  ]),
  '4 variáveis utilizadas para definir 2 polvos.'
);

const slide3 = slideHtml(
  `${p1}${p2}${p3}`,
  slidePre([
    codeVar('polvo1_nome', 'Polvonilson'),
    codeVar('polvo1_cor ', 'Roxo'),
    codeVar('polvo2_nome', 'Azulão'),
    codeVar('polvo2_cor ', 'Azul'),
    codeVar('polvo3_nome', 'Marinho'),
    codeVar('polvo3_cor ', 'Verde'),
  ]),
  'E para 100 polvos?'
);

const ooFields: [string, [string, string][]][] = [
  ['polvo1', [['nome', 'Polvonilson'], ['cor', 'Roxo']]],
  ['polvo2', [['nome', 'Azulão'],      ['cor', 'Azul']]],
  ['polvo3', [['nome', 'Marinho'],     ['cor', 'Verde']]],
];

const slideOO1 = slideHtml(p1,             codeDicts(ooFields.slice(0, 1)), '1 objeto agrupa tudo sobre 1 polvo.');
const slideOO2 = slideHtml(`${p1}${p2}`,   codeDicts(ooFields.slice(0, 2)), 'Outro polvo? Mesma estrutura.');
const slideOO3 = slideHtml(`${p1}${p2}${p3}`, codeDicts(ooFields.slice(0, 3)), '100 polvos? Mesma estrutura, 100 vezes.');

export const slidesProcedural = [slide1, slide2, slide3];
export const slidesOO = [slideOO1, slideOO2, slideOO3];
