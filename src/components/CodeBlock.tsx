import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const oceanTheme = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: '#1E293B',
    margin: '0',
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    color: '#CBD5E1',
    background: 'none',
    fontFamily: 'Fira Code, ui-monospace, SFMono-Regular, monospace',
    fontSize: '0.875rem',
    fontVariantLigatures: 'none',
  },

  // Comentários
  'comment': { color: '#93C5FD', fontStyle: 'italic' },
  'prolog':  { color: '#93C5FD', fontStyle: 'italic' },
  'cdata':   { color: '#93C5FD' },
  'doctype': { color: '#93C5FD' },

  // Palavras-chave e controle de fluxo
  'keyword':   { color: '#86EFAC' },
  'boolean':   { color: '#86EFAC' },
  'constant':  { color: '#86EFAC' },
  'atrule':    { color: '#86EFAC' },
  'important': { color: '#86EFAC' },

  // Strings e valores
  'string':     { color: '#60A5FA' },
  'char':       { color: '#60A5FA' },
  'attr-value': { color: '#60A5FA' },
  'regex':      { color: '#60A5FA' },
  'selector':   { color: '#60A5FA' },
  'inserted':   { color: '#60A5FA' },

  // Funções e builtins
  'function': { color: '#F472B6' },
  'builtin':  { color: '#F472B6' },
  'property': { color: '#F472B6' },
  'url':      { color: '#F472B6' },

  // Nomes de classe
  'class-name': { color: '#FACC15' },

  // Números — herda texto padrão
  'number': { color: '#CBD5E1' },
  'symbol': { color: '#CBD5E1' },

  // Deletado
  'deleted': { color: '#94A3B8' },

  // Mudo / neutro
  'operator':   { color: '#94A3B8' },
  'punctuation':{ color: '#94A3B8' },
  'tag':        { color: '#94A3B8' },
  'attr-name':  { color: '#94A3B8' },
  'entity':     { color: '#94A3B8' },

  // Variáveis — herda texto padrão
  'variable': { color: '#CBD5E1' },
};

// Mapeamento de linguagem → { lang para o highlighter, label para o badge, tooltip }
const LANG_MAP: Record<string, { lang: string; label: string; tooltip: string }> = {
  'python':              { lang: 'python', label: 'Python',              tooltip: 'Código real e executável — pode ser copiado e rodado diretamente.'                                                              },
  'python-simplificado': { lang: 'python', label: 'Python simplificado', tooltip: 'Usa atalhos antes da sintaxe completa ser apresentada. Facilita a leitura, mas ainda não é código válido.'                    },
  'pseudocodigo':        { lang: 'python', label: 'Pseudocódigo',        tooltip: 'Representa a lógica sem seguir a sintaxe Python exata. Serve para entender a estrutura antes do código real.' },
};

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock: React.FC<Props> = ({ className, children }) => {
  const match = /language-([\w-]+)/.exec(className ?? '');

  if (!match) {
    return (
      <code className="text-accent font-mono text-sm font-normal [font-variant-ligatures:none]">
        {children}
      </code>
    );
  }

  const key = match[1];
  const { lang, label, tooltip } = LANG_MAP[key] ?? { lang: key, label: key, tooltip: '' };

  return (
    <div className="not-prose my-4 rounded-lg border border-slate-700">
      <div className="flex justify-end items-center px-3 py-1.5 bg-[#1E293B] border-b border-slate-700 gap-1.5 rounded-t-lg">
        <span className="text-xs font-mono text-slate-400">{label}</span>
        {tooltip && (
          <div className="relative group">
            <span className="flex items-center justify-center w-3.5 h-3.5 rounded-full border border-slate-500 text-[9px] text-slate-400 cursor-default select-none leading-none">?</span>
            <div className="absolute bottom-full right-0 mb-2 w-56 px-2.5 py-2 rounded-lg bg-slate-900 border border-slate-600 text-[11px] text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10 shadow-lg">
              {tooltip}
            </div>
          </div>
        )}
      </div>
      <div className="rounded-b-lg overflow-hidden">
        <SyntaxHighlighter
          language={lang}
          style={oceanTheme}
          customStyle={{ margin: 0, borderRadius: 0, border: 'none' }}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
