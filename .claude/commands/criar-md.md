# /criar-md — Criar .md de missão a partir de um .txt

Formata um arquivo `.txt` com rascunho de missão no formato canônico `.md` do projeto.

## Uso

```
/criar-md <caminho-do-txt>
```

Exemplo: `/criar-md docs/rascunhos/nivel_2_missao_3.txt`

O identificador da missão (nível e número) deve estar no nome do arquivo ou será perguntado.

## Fluxo obrigatório

**Passo 1 — Ler o `.txt`**

Ler o arquivo inteiro e identificar:

- Título da missão
- Ícone (emoji) — se não estiver no `.txt`, perguntar à Rebecca antes de continuar
- Número da missão e do nível — inferir do nome do arquivo; se ambíguo, perguntar
- Conteúdo da teoria
- Se há mini-jogo interativo (e qual arquivo `.html`, se houver)
- Pergunta do exercício, opções e qual é a correta
- Explicação da resposta correta

**Passo 2 — Resumir o que será gerado**

Antes de criar o arquivo, apresentar um resumo:

- Missão identificada: `N-M — Título`
- Ícone: `emoji`
- Seções detectadas: teoria ✓ / mini-jogo ✓ ou ✗ / exercício ✓ ou ✗
- Exercício: quantas opções, qual marcada como correta (índice 0-based)
- Visuais `> [svg/img/animação: ...]` encontrados ou ausentes
- Destino do arquivo: `docs/missoes/nivel_<N>/missao_<M>.md`
- Alguma dúvida ou campo ausente que precise de decisão da Rebecca

**Aguardar um "ok" explícito** antes de escrever qualquer arquivo.

**Passo 3 — Escrever o `.md` (somente após ok)**

Gerar o arquivo em `docs/missoes/nivel_<N>/missao_<M>.md` com a estrutura abaixo:

```markdown
# Missão N-M — Título

**Ícone:** emoji
**Pontos:** 15

## Teoria

<conteúdo da teoria>

## Mini-jogo

- [ ] Tem interativo          ← ou [x] se houver, com linha **Arquivo:** abaixo

## Exercício

**Pergunta:** <pergunta>

- [ ] <opção 0>
- [x] <opção correta> ← correta
- [ ] <opção 2>
- [ ] <opção 3>

**Explicação:** <explicação>
```

**Regras de formatação:**

- Linhas `[nota] ...` do `.txt` são instruções da Rebecca — preservar no `.md` como `[nota]`, não transformar em conteúdo
- Visuais descritos no `.txt` viram linhas `> [svg: ...]`, `> [img: ...]` ou `> [animação: ...]` no ponto certo da teoria
- Comentários explicativos nunca ficam dentro de blocos de código Python — colocar antes ou depois, fora do bloco
- Se o `.txt` já tiver seções bem definidas, preservar a estrutura; se for texto corrido, organizar em seções com `##`
- Pontos sempre `15` (padrão do projeto) a menos que o `.txt` especifique outro valor
- Nunca commitar após criar — aguardar instrução da Rebecca
