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

// Mapeamento de linguagem → { lang para o highlighter, label para o badge }
const LANG_MAP: Record<string, { lang: string; label: string }> = {
  'python':              { lang: 'python', label: 'Python'              },
  'python-simplificado': { lang: 'python', label: 'Python simplificado' },
  'pseudocodigo':        { lang: 'python', label: 'Pseudocódigo'        },
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
  const { lang, label } = LANG_MAP[key] ?? { lang: key, label: key };

  return (
    <div className="not-prose my-4 rounded-lg overflow-hidden border border-slate-700">
      <div className="flex justify-end px-3 py-1.5 bg-[#1E293B] border-b border-slate-700">
        <span className="text-xs font-mono text-slate-400">{label}</span>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={oceanTheme}
        customStyle={{ margin: 0, borderRadius: 0, border: 'none' }}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
