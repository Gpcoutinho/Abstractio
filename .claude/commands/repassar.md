# /repassar — Sincronizar .md → .ts de uma missão

Sincroniza o conteúdo de um arquivo `.md` de missão para o `.ts` correspondente.

## Uso

```
/repassar <nivel>-<missao>
```

Exemplos: `/repassar 1-2`, `/repassar 2-5`

## Fluxo obrigatório

**Passo 1 — Localizar os arquivos**

- Fonte: `docs/missoes/nivel_<N>/missao_<M>.md`
- Destino: `src/data/curriculum/nivel_<N>/missao_<M>.ts`

**Passo 2 — Ler o `.md` e extrair as mudanças**

Antes de tocar no `.ts`, ler o `.md` e apresentar um resumo das principais mudanças em relação ao `.ts` atual:

- Título mudou?
- Ícone mudou?
- Teoria: o que foi adicionado, removido ou alterado (resumo em tópicos, não a teoria inteira)?
- SVGs/visuais: algum `> [svg: ...]` foi adicionado, removido ou alterado?
- Exercício: pergunta, opções ou resposta correta mudaram?
- Explicação mudou?
- `has_interativo` ou `interativo_html` mudou?

Apresentar esse resumo e **aguardar um "ok" explícito** da Rebecca antes de prosseguir.

**Passo 3 — Repassar para o `.ts` (somente após ok)**

Aplicar o mapeamento abaixo sobrescrevendo o `.ts`. Preservar imports e variáveis de visuais já existentes no `.ts` (ex: `diagrama`, `oceanPolvo`, etc.).

| Campo no `.md` | Campo no `.ts` |
|---|---|
| `# Missão N-N — Título` | `title` |
| `**Ícone:**` | `icon` |
| Seção `## Teoria` | `theory` (template literal) |
| `[x] Tem interativo` | `has_interativo: true` |
| `[ ] Tem interativo` | `has_interativo: false` |
| `**Arquivo:**` | `interativo_html` |
| `**Pergunta:**` | `exercise.question` |
| Opção com `[x]` | `exercise.correct` (índice 0-based) |
| Textos das opções | `exercise.options` |
| `**Explicação:**` | `exercise.explanation` |

**Regras adicionais:**

- Linhas `[nota] ...` no `.md` são instruções da Rebecca — não são conteúdo, não entram no `.ts`
- Linhas `> [svg: ...]`, `> [img: ...]`, `> [animação: ...]` no `.md` indicam visuais já implementados no `.ts` como variáveis — substituir pela referência `${diagrama}` ou equivalente já existente, nunca pelo texto da linha
- Comentários explicativos nunca ficam dentro de blocos de código
- Nunca commitar após repassar — aguardar instrução da Rebecca
