# Abstractio — Frontend React

App educacional gamificado para ensinar **Programação Orientada a Objetos (POO)** em Python, migrado de Streamlit para React + TypeScript.

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
    Trilha.tsx            ← Mapa de níveis e missões (refatorado de POO.tsx)
    Missao.tsx            ← Conteúdo: teoria + mini-jogo + exercício (refatorado de LessonPage.tsx)
    Conquistas.tsx        ← Estante de troféus (novo)
  components/
    Header.tsx            ← Logo + nav + pontuação + rank + avatar circle
    HeroCarousel.tsx      ← 2 slides (roxo e verde menta)
    Mascote.tsx           ← Polvo animado (aparece no slide 1 do hero)
    MissaoCard.tsx        ← Linha de missão com status (Heroicons), nome e pts
    ExerciseQuestion.tsx  ← Múltipla escolha com feedback
    InterativoFrame.tsx   ← <iframe srcDoc> para mini-jogos HTML
    TrophyCard.tsx        ← Card de troféu (earned / unearned)
  contexts/
    ProgressContext.tsx   ← Estado global de progresso
  hooks/
    useProgress.ts        ← Hook único para consumir o contexto
  data/
    curriculum.json       ← 4 níveis, 30 missões (importado via TypeScript)
    curriculum.ts         ← Tipos TypeScript: Nivel, Missao, Exercise
  assets/
    interativos/
      nivel_1_missao_1.html  ← Mini-jogo drag & drop (HTML autossuficiente)
```

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | `Home.tsx` | Dashboard |
| `/trilha` | `Trilha.tsx` | Mapa de níveis e missões |
| `/missao/:nivelIdx/:missaoIdx` | `Missao.tsx` | Conteúdo da missão |
| `/conquistas` | `Conquistas.tsx` | Estante de troféus |

Não existe rota `/trilhas` — há apenas uma trilha (POO) por enquanto.

## Navegação (Header)

Ordem dos itens: **Home → Trilha → Conquistas**

Canto direito: **[pontuação] [rank] [avatar circle]**

- Perfil não está no menu — será acessado via clique no avatar circle (implementação futura)

## Nomenclatura (Importante — manter consistência)

- **Nível** = o que em outras plataformas é "módulo" (4 no Abstractio)
- **Missão** = o que em outras plataformas é "aula/seção" (30 no Abstractio)
- `nivelIdx`, `missaoIdx` = índices 0-based
- `missoes` = array de missões dentro de um nível

Usar esses termos em variáveis, componentes, rotas e comentários. Nunca usar "módulo", "aula" ou "lição".

## Estado Global (ProgressContext)

Persistido em **localStorage**. Sem sync com backend.

```typescript
{
  completed: string[],         // IDs das missões concluídas ex: ["0-0", "0-1"]
  niveis_concluidos: number[], // índices dos níveis 100% completos
  pontuacao: number,           // +15 por missão concluída
}
```

**Nível do usuário** — derivado de `niveis_concluidos.length`, não armazenado:
- 0 níveis completos → "Nível 1 — Polvinho"
- 1 nível completo  → "Nível 2 — Explorador"
- 2 níveis completos → "Nível 3 — Mestre dos Mares"
- 3 níveis completos → "Nível 4 — Kraken"

O título exibido no Header vem sempre do cálculo acima, nunca de um campo separado.

**Troféus:** 1 por missão concluída — exibidos na tela `/conquistas`. Derivados do `curriculum.json`, sem registro separado.

**Premiação por pontuação:** ainda não definida — não implementar por enquanto.

## Conteúdo das Missões

Fonte: `src/data/curriculum.json` — importado diretamente (não via fetch).

```json
[
  {
    "id": 0,
    "title": "Nível 1 — Fundamentos: O despertar do Polvinho",
    "short": "Fundamentos",
    "missoes": [
      {
        "id": "0-0",
        "title": "...",
        "icon": "🧩",
        "theory": "...",
        "exercise": {
          "question": "...",
          "options": ["...", "..."],
          "correct": 1,
          "explanation": "..."
        },
        "has_interativo": true,
        "interativo_html": "interativos/nivel_1_missao_1.html"
      }
    ]
  }
]
```

## Mini-Jogos (Interativos)

Arquivo: `src/assets/interativos/nivel_1_missao_1.html`

HTML/CSS/JS autossuficiente. Renderizar via `<iframe srcDoc={html}>`.
Hoje existe apenas 1 mini-jogo (drag & drop, missão 1).

## Hero Carousel

Dois slides no Dashboard:

- **Slide 1 (roxo):** mascote (Mascote.tsx) + texto de boas-vindas + botão "Continuar trilha"
- **Slide 2 (verde menta):** "Como funciona" com 3 passos

## Ícones de Status de Missão

Usar **Heroicons** (já instalado). Não usar emojis para status.

## Cores e Design

Tailwind com paleta customizada definida em `tailwind.config.cjs`:

```
bgPrimary:    #1A1A1A   fundo global
bgSecondary:  #2A2A2A   superfície
primary:      #4F33A9   roxo base
secondary:    #8A4FFF   roxo claro
accent:       #6EEB83   verde neon
```

Hero roxo: `linear-gradient(135deg, #4c1d95, #6d28d9, #7c3aed)`
Hero verde: `linear-gradient(135deg, #065f46, #059669, #10b981)`

## Arquivos a Deletar (refatoração em andamento)

Os seguintes arquivos existem mas devem ser removidos:
- `src/pages/Login.tsx`
- `src/pages/Profile.tsx`
- `src/pages/Exercicios.tsx`
- `src/pages/Ponteiros.tsx`
- `src/pages/LessonClasses.tsx`
- `src/contexts/progressStore.tsx`
- `src/contexts/useProgress.tsx`
- `src/data/modules.tsx`
- `src/services/progress.ts`

## Fluxo de Desenvolvimento

1. Propor a implementação e aguardar aprovação antes de executar
2. Implementar + testar localmente
3. Perguntar à Rebecca se deseja commitar antes de qualquer commit

## Commits

Conventional Commits em **pt-BR**: `tipo: descrição curta`

Tipos: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`

## Deploy

App client-side puro. Build: `npm run build` → pasta `dist/`

Pode ser deployado em Vercel ou Netlify sem configuração extra.
