# Abstractio — Frontend React

---

> ## ⛔ REGRAS INVIOLÁVEIS DE COMMIT
>
> **1. NUNCA executar `git commit` sem antes:**
> - mostrar a mensagem proposta e os arquivos que serão incluídos
> - receber "ok" explícito da Rebecca
>
> Isso vale para qualquer commit, sem exceção. Não há situação em que commitar diretamente seja aceitável — nem mudanças pequenas, nem "só formatação".
>
> **2. NUNCA incluir "Co-Authored-By" ou qualquer autoria do Claude nas mensagens de commit.**

---

App educacional gamificado para ensinar **Programação Orientada a Objetos (POO)** em Python.

## Stack

- **Build:** Vite + React 19 + TypeScript
- **Roteamento:** React Router v7
- **Estado:** React Context + localStorage (sem sync com backend)
- **Estilos:** Tailwind CSS com paleta customizada
- **Ícones:** Heroicons
- **Markdown:** react-markdown (para renderizar teoria das missões)
- **Backend:** Nenhum — app 100% client-side

## Estrutura de Pastas

```
src/
  pages/                   ← Telas principais (4)
    Home.tsx              ← Dashboard: hero carousel + mascote + features
    Trilha.tsx            ← Mapa de níveis e missões
    Missao.tsx            ← Conteúdo: teoria + mini-jogo + exercício
    Conquistas.tsx        ← Estante de troféus
  components/
    Sidebar.tsx           ← sidebar lateral: avatar, pontuação, rank e nav (desktop fixo, mobile gaveta)
    HeroCarousel.tsx      ← 2 slides (roxo e verde menta)
    Mascote.tsx           ← Polvo animado (aparece no slide 1 do hero)
    SlideCard.tsx         ← card com slides navegáveis; aceita externalCurrent + hideNav para modo controlado
    AvatarFrame.tsx       ← molduras animadas do avatar (Bolhas, Maré Alta, Kraken, Coral, Aurora Boreal)
    HexBadge.tsx          ← emblema hexagonal SVG (viewBox 87×100)
    MissionIcon.tsx       ← ícone de missão (Phosphor Icons)
    CodeBlock.tsx         ← bloco de código com syntax highlight
    ProgressBar.tsx       ← barra de progresso da trilha
    PageWrapper.tsx       ← wrapper de página com max-width e padding
    BoloFactory.tsx       ← componente interativo da missão de Classe
    Card.tsx              ← card genérico reutilizável
    ConceitoBox.tsx       ← caixa de destaque para definições; renderiza a tag <conceito>
    ReferenciasBlock.tsx  ← bloco bibliográfico colapsável; aparece após a teoria quando references[] existe
  contexts/
    ProgressContext.tsx   ← Estado global de progresso
  hooks/
    useProgress.ts        ← Hook único para consumir o contexto
  data/
    curriculum/
      types.ts            ← Tipos TypeScript: Nivel, Missao, Exercise, Reference
      index.ts            ← Exporta array `niveis` com os 4 níveis
      nivel_1/            ← Missões do Nível 1 (missao_0.ts … missao_7.ts + index.ts)
      nivel_2/            ← Missões do Nível 2
      nivel_3/            ← Missões do Nível 3
      nivel_4/            ← Missões do Nível 4
  assets/
    interativos/
      nivel_1_missao_7.html  ← Mini-jogo (HTML autossuficiente)
```

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | `Home.tsx` | Dashboard |
| `/trilha` | `Trilha.tsx` | Mapa de níveis e missões |
| `/missao/:nivelIdx/:missaoIdx` | `Missao.tsx` | Conteúdo da missão |
| `/conquistas` | `Conquistas.tsx` | Estante de troféus |

Não existe rota `/trilhas` — há apenas uma trilha (POO) por enquanto.

## Navegação (Sidebar)

Componente: `Sidebar.tsx` — largura 200px, fixa à esquerda no desktop, gaveta deslizante da esquerda no mobile.

Estrutura vertical (de cima para baixo):
1. Logo (isotipo + "Abstractio")
2. Avatar circle (link para `/perfil`) + nome + rank + pontuação
3. Nav: **Home → Trilha → Conquistas**

Mobile: topbar fina (h-12) com hamburger + logo; sidebar oculta por padrão.

## Nomenclatura (Importante — manter consistência)

- **Nível** = o que em outras plataformas é "módulo" (4 no Abstractio)
- **Missão** = o que em outras plataformas é "aula/seção" (28 no Abstractio)
- `nivelIdx`, `missaoIdx` = índices 1-based (Nível 1, Missão 1 em diante)
- `missoes` = array de missões dentro de um nível

Usar esses termos em variáveis, componentes, rotas e comentários. Nunca usar "módulo", "aula" ou "lição".

## Estado Global (ProgressContext)

Persistido em **localStorage**. Sem sync com backend.

```typescript
{
  completed: string[],         // IDs das missões concluídas ex: ["1-1", "1-2"]
  niveis_concluidos: number[], // IDs dos níveis 100% completos (1-based)
  pontuacao: number,           // +15 por missão concluída
}
```

**Nível do usuário** — derivado de `niveis_concluidos.length`, nunca de um campo separado. Títulos em `ESTRUTURA.md`.

**Premiação por pontuação:** ainda não definida — não implementar por enquanto.

## Conteúdo das Missões

**Fonte de verdade criativa:** `docs/missoes/nivel_N/missao_N.md` — arquivos markdown editáveis usados para redigir e revisar o conteúdo de cada missão.

**Fonte de verdade do app:** `src/data/curriculum/nivel_N/missao_N.ts` — importados estaticamente, sem fetch.

### Fluxo de edição de conteúdo

1. Rebecca edita o `.md` correspondente
2. Pede para "repassar" para o `.ts`
3. Ler o `.md`, extrair teoria/exercício/metadados e sobrescrever o `.ts` mantendo a estrutura TypeScript intacta
4. Nunca editar o `.ts` diretamente para conteúdo — sempre partir do `.md`

### Mapeamento de campos `.md` → `.ts`

| Campo no `.md` | Campo no `.ts` |
|---|---|
| `# Missão N-N — Título` | `title` |
| `**Ícone:**` | `icon` |
| Seção `## Teoria` | `theory` (template literal) |
| `[x] Tem interativo` | `has_interativo: true` |
| `**Arquivo:**` | `interativo_html` |
| `**Pergunta:**` | `exercise.question` |
| Opção com `[x]` | `exercise.correct` (índice 0-based) |
| Textos das opções | `exercise.options` |
| `**Explicação:**` | `exercise.explanation` |
| Seção `### Fontes bibliográficas` (nas notas) | `references[]` — cada fonte vira um objeto `{ author, year, title, location, note }` |

Fonte: módulos TypeScript em `src/data/curriculum/nivel_N/missao_N.ts` — importados estaticamente, sem fetch.

```typescript
// Exemplo: src/data/curriculum/nivel_1/missao_1.ts
const missao: Missao = {
  id: "1-1",
  title: "...",
  icon: "🧩",
  theory: `...`,
  exercise: {
    question: "...",
    options: ["...", "..."],
    correct: 1,
    explanation: "..."
  },
  has_interativo: true,
  interativo_html: "interativos/nivel_1_missao_1.html"
};
```

## Slides de Conteúdo (SlideCard / LinkedSlideRow)

Dentro da teoria, blocos de slides são declarados com `{{card:N}}` (slide único) ou `{{cards:N,M}}` (dois cards lado a lado, sincronizados).

- `SlideCard` — card com navegação interna; suporta `externalCurrent` + `hideNav` para modo controlado
- `LinkedSlideRow` — renderizado automaticamente para `{{cards:N,M}}`; compartilha um único controle de navegação entre os cards, com dots indicadores e recentramento automático via `scrollIntoView`

Os slides de cada card ficam em `missao.cards[N].slides[]` como strings HTML ou ReactNode.

## Mini-Jogos (Interativos)

Arquivo: `src/assets/interativos/nivel_1_missao_7.html`

HTML/CSS/JS autossuficiente. Renderizar via `<iframe srcDoc={html}>`.
Hoje existe apenas 1 mini-jogo (drag & drop, missão 1).

## Cores e Design

Paleta e gradientes em `ESTRUTURA.md`. Tailwind config em `tailwind.config.cjs`.

## Comentários e Pedidos nos Arquivos de Conteúdo

Linhas que começam com `[nota]` são instruções ou comentários da Rebecca — **não são conteúdo a ser escrito na tela**. Ignorar ao renderizar; processar como pedido/diretriz ao editar.

## Convenção de Pontuação

Usar sempre **travessão médio (`–`)**, nunca travessão longo (`—`) em textos de conteúdo (teoria, exercícios, narrativa). O travessão longo soa como escrita gerada por IA.

## Tag `<destaque>`

Sublinhado ondulado rosa para ênfase narrativa inline. Usar quando uma palavra-chave aparece pela primeira vez no fluxo do texto — não em tabelas, listas ou cabeçalhos.

```html
Isso é um <destaque>objeto</destaque>: uma entidade com características próprias.
```

Renderiza como `<span>` com `underline decoration-wavy decoration-pink-400 decoration-2 underline-offset-4`. O offset evita que o sublinhado colida com descidas de letras (g, j, p, y). O negrito (`**bold**`) continua reservado para uso estrutural (tabelas, listas, labels).

## Tag `<conceito>`

Renderizada pelo componente `ConceitoBox`. Formato obrigatório:

```html
<conceito><strong>Palavra-chave</strong>: definição da palavra-chave.</conceito>
```

- O separador entre termo e definição é sempre `:`, nunca `–` ou `—`
- A palavra-chave fica em `<strong>`
- Usar apenas para definições centrais da missão — não para todo conceito mencionado

## Convenção de Exemplos de Código

### Rótulo de tipo de código

Todo bloco de código deve ser precedido por um rótulo indicando sua natureza. Usar **sempre** um dos três:

| Rótulo | Significado | Quando usar |
|---|---|---|
| `Python` | Código real e executável | Pode ser copiado e rodado sem modificação |
| `Python simplificado` | Python válido, estrutura provisória | Usa proxy (dict, lista) antes da classe estar definida; roda, mas não representa a estrutura final |
| `Pseudocódigo` | Conceitual, não executa | Ilustra lógica sem sintaxe completa |

O rótulo vai **antes** do bloco, como frase curta:

```markdown
Python simplificado — identidade de dois objetos com as mesmas características:

\`\`\`python
ada   = {"cor": "rosa", "tentaculos": 8}
outra = {"cor": "rosa", "tentaculos": 8}
\`\`\`
```

Nunca omitir o rótulo, mesmo quando o tipo parecer óbvio pelo contexto.

### Comentários explicativos

Comentários explicativos **nunca ficam dentro do bloco de código**. A explicação vai antes (como título ou frase introdutória) ou depois (como legenda), fora do bloco:

```markdown
<!-- correto -->
Sem POO — variáveis soltas, impossível de organizar:

\`\`\`python
nome_cachorro1 = "Rex"
idade_cachorro1 = 3
\`\`\`

Para 3 cachorros já confunde. Para 100? Um pesadelo.

<!-- evitar -->
\`\`\`python
# Sem POO — variáveis soltas, impossível de organizar
nome_cachorro1 = "Rex"
idade_cachorro1 = 3
# Para 3 cachorros já confunde. Para 100? Um pesadelo.
\`\`\`
```

Comentários técnicos de código (ex: `# chama Animal.__init__`) podem permanecer dentro do bloco quando explicam a linha específica, não a seção.

### Blocos de código — tamanho e ritmo

Evitar blocos longos. A cada trecho lógico, fechar o bloco, explicar em texto e abrir um novo bloco:

```markdown
<!-- correto -->
Primeiro, definimos os atributos:

\`\`\`python
class Polvo:
    def __init__(self, cor):
        self.cor = cor
\`\`\`

Com isso, cada polvo carrega sua própria cor. Agora adicionamos um método:

\`\`\`python
    def nadar(self):
        print(f"{self.cor} está nadando")
\`\`\`

<!-- evitar -->
\`\`\`python
class Polvo:
    def __init__(self, cor):
        self.cor = cor

    def nadar(self):
        print(f"{self.cor} está nadando")
\`\`\`
```

## Bloco de Dúvida Frequente

Componente: `src/components/missoes/reutilizaveis/DuvidaBlock.tsx`
Props: `pergunta: string`, `resposta: string`

Usado para antecipar dúvidas comuns ao longo da leitura da teoria. Cada dúvida recebe um placeholder descritivo registrado em `Missao.tsx`:

```typescript
// Em Missao.tsx:
if (part === '{{duvida-nome-descritivo}}')
  return <DuvidaBlock key={i} pergunta="..." resposta="..." />;
```

Convenção de nomenclatura do placeholder: `{{duvida-[conceito]-[descritor]}}` — ex: `{{duvida-objeto-unico}}`, `{{duvida-classe-instancia}}`.

Nos arquivos `.md`, inserir o placeholder no ponto exato da teoria onde a dúvida naturalmente surgirá:

```markdown
Um objeto é uma entidade que existe de forma independente na memória.

{{duvida-objeto-unico}}

Cada objeto carrega suas próprias características...
```

## Convenção de Visuais nos `.md`

SVGs, animações, imagens e mini-jogos são documentados nos `.md` com blockquotes prefixados:

```
> [svg: descrição do que aparece — layout, cores, animações, legenda]
> [img: descrição da imagem]
> [animação: descrição]
```

Essas linhas descrevem o visual existente (ou desejado) naquele ponto da teoria. Não são conteúdo textual da missão — são referências de implementação para alinhar o `.md` com o `.ts`.

## Fluxo de Desenvolvimento

> ⚠️ **REGRA INVIOLÁVEL: nunca escrever, editar ou deletar arquivos sem aprovação explícita da Rebecca.**
> Isso inclui qualquer arquivo de código, conteúdo, configuração ou documentação.
> Explicar o que será feito → aguardar "sim" (ou equivalente) → só então executar.
> "Posso implementar?" sem resposta afirmativa = não implementar.

1. Descrever detalhadamente o que pretende fazer e **aguardar "ok" explícito** antes de qualquer alteração
2. Implementar + testar localmente
3. Antes de qualquer commit: mostrar a mensagem proposta e os arquivos que serão incluídos, e **aguardar ok explícito** antes de executar o `git commit`
4. Ao final de mudanças maiores, informar quantas linhas foram adicionadas/excluídas


## ESTRUTURA.md

Quando uma mudança no projeto tornar o `ESTRUTURA.md` desatualizado, avisar o que será alterado e aguardar ok antes de editar — mesma regra que vale para qualquer outro arquivo.

## Deploy

App client-side puro. Build: `npm run build` → pasta `dist/`

Pode ser deployado em Vercel ou Netlify sem configuração extra.
