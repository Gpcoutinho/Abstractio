# Abstractio — Estrutura e Definição do App

Documento de especificação do produto. Define escopo, progressão, regras de conteúdo e padrões visuais. Paralelo ao `CLAUDE.md` (que foca na implementação técnica).

---

## Visão Geral

**Abstractio** é um app educacional gamificado para ensinar **Programação Orientada a Objetos (POO) em Python**.

- **Público-alvo:** iniciantes em programação ou desenvolvedores que nunca estudaram POO formalmente
- **Filosofia:** aprender fazendo, com analogias do mundo real antes de código, e sempre acompanhadas de elementos visuais
- **Mascote:** um polvo (representa o app e a identidade visual)
- **Tema narrativo:** o mundo subaquático — níveis, títulos e missões seguem essa metáfora

---

## Escopo Atual

- **1 trilha:** POO em Python (única trilha por enquanto)
- **4 níveis**, **30 missões** no total
- App 100% client-side — sem backend, sem autenticação
- Progresso salvo em localStorage

---

## Níveis e Missões

### Nível 1 — Fundamentos: O despertar do Polvinho
> Introdução à POO: o que são objetos, classes, atributos e métodos

| # | Missão |
|---|--------|
| 1 | Introdução ao nível |
| 2 | O que é um objeto? |
| 3 | Classes: a planta do objeto |
| 4 | Atributos: o que o objeto sabe |
| 5 | Métodos: o que o objeto faz |
| 6 | Resumo: Criando o primeiro objeto |

### Nível 2 — Pilares: As leis do oceano
> Os 4 pilares da POO: Abstração, Encapsulamento, Herança e Polimorfismo

| # | Missão |
|---|--------|
| 1 | Introdução ao nível |
| 2 | Abstração |
| 3 | Encapsulamento |
| 4 | Herança |
| 5 | Polimorfismo |
| 6 | Resumo: Os 4 pilares juntos |

### Nível 3 — Relações: A sociedade dos objetos
> Como objetos se relacionam: composição, associação, interfaces e mais

| # | Missão |
|---|--------|
| 1 | Introdução ao nível |
| 2 | Associação |
| 3 | Agregação |
| 4 | Composição |
| 5 | Dependência |
| 6 | Interfaces e contratos |
| 7 | Mixins |
| 8 | Métodos especiais (dunder) |
| 9 | Iteradores e geradores |
| 10 | Decoradores |
| 11 | Resumo: Projeto integrador |

### Nível 4 — Arquitetura: A engenharia submarina
> Padrões de projeto, boas práticas e design de sistemas orientados a objetos

| # | Missão |
|---|--------|
| 1 | Introdução ao nível |
| 2 | SOLID — Princípios de design |
| 3 | Padrões criacionais |
| 4 | Padrões estruturais |
| 5 | Padrões comportamentais |
| 6 | Testando objetos |
| 7 | Resumo: Projeto final |

---

## Estrutura de uma Missão

Toda missão tem 3 partes, nesta ordem:

```
1. Teoria       ← conteúdo expositivo em markdown com visuais obrigatórios
2. Interativo   ← mini-jogo ou simulação (opcional por missão)
3. Exercício    ← questão de múltipla escolha com feedback
```

---

## Regras de Conteúdo — Teoria

### Regra visual obrigatória

> **Toda subseção da teoria (`##`) deve ter ao menos um elemento visual que exemplifique o que foi explicado em texto.**

Elementos visuais aceitos (em ordem de preferência):
1. **Animação** — CSS ou JS inline, renderizada no próprio markdown/componente
2. **Interação** — mini-widget clicável (ex: botão que demonstra o conceito)
3. **Diagrama** — SVG ou ASCII art estilizado
4. **Imagem estática** — como último recurso

O visual não é decorativo — deve **reforçar ou demonstrar** o conceito explicado no texto acima dele.

### Modelo de teoria aprovado

Baseado na estrutura da Missão 1 do Nível 2:

1. **Abertura com analogia do mundo real** — antes de qualquer código ou jargão, situar o conceito em algo familiar (ex: cidade de LEGO, controle remoto)
2. **Problema concreto** — mostrar o que acontece quando o conceito é ignorado
3. **Conceito nomeado** — introduzir o termo técnico depois que o problema foi estabelecido
4. **Tabela ou lista visual** — resumo do conceito com analogias side-by-side
5. **Aprofundamento** — o "por quê" por trás do conceito, não só o "o quê"
6. **Chamada para próxima missão** — blockquote de transição (`>`)

Princípios de escrita:
- Analogias antes de código
- Frase curta, ritmo variado
- Markdown rico: tabelas, negrito, `code inline`, blockquotes, `---` separadores
- Nunca iniciar com definição técnica

---

## Interativos (Mini-Jogos)

- Arquivo HTML autossuficiente em `src/assets/interativos/`
- Renderizado via `<iframe srcDoc>` no componente `InterativoFrame.tsx`
- Nomenclatura: `nivel_{n}_missao_{n}.html` (índices 1-based — ex: `nivel_1_missao_1.html`)
- Tipos existentes ou planejados:
  - Drag & drop (ex: associar objeto → classe)
  - Simulação clicável (ex: instanciar um objeto e ver atributos)
  - Preenchimento de código (ex: completar uma classe)
  - Quiz visual (diferente do exercício final — sem pontuação)

Missões sem interativo usam `has_interativo: false`. Não deixar campo vazio.

---

## Exercício Final

- Formato: **múltipla escolha, 4 alternativas, 1 correta**
- A questão deve testar **compreensão conceitual**, não memorização de sintaxe
- O feedback (`explanation`) deve reforçar o raciocínio correto, não só confirmar a resposta
- Pontuação: **+15 pontos** por missão concluída

---

## Progressão do Usuário

### Nível do usuário (rank)

Derivado de `niveis_concluidos.length`. Nunca armazenado diretamente.

| Níveis completos | Título |
|---|---|
| 0 | Nível 1 — Polvinho |
| 1 | Nível 2 — Explorador |
| 2 | Nível 3 — Mestre dos Mares |
| 3 | Nível 4 — Kraken |

### Acesso às missões

Todas as missões estão disponíveis desde o início — sem desbloqueio sequencial. O usuário pode revisitar qualquer missão a qualquer momento.

---

## Emblemas e Troféus

- **1 troféu por missão concluída** — derivado do currículo, sem registro separado
- Exibidos na tela `/conquistas` (estante de troféus)
- Troféus não conquistados aparecem bloqueados (visual diferenciado)

**Categorias de emblemas especiais** — TODO: definir critérios e visuais

---

## Identidade Visual

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `bgPrimary` | `#1A1A1A` | Fundo global |
| `bgSecondary` | `#2A2A2A` | Superfícies / cards |
| `primary` | `#4F33A9` | Roxo base |
| `secondary` | `#8A4FFF` | Roxo claro / destaque |
| `accent` | `#6EEB83` | Verde neon / sucesso |

### Gradientes

- **Hero roxo:** `linear-gradient(135deg, #4c1d95, #6d28d9, #7c3aed)`
- **Hero verde:** `linear-gradient(135deg, #065f46, #059669, #10b981)`

### Ícones

Usar **Heroicons** para status e UI. Emojis apenas em ícones de missão (campo `icon` no currículo).

---

## TODO — Itens ainda não definidos

- [ ] Critérios e visuais dos emblemas especiais
- [ ] Sistema de premiação por pontuação
- [ ] Conteúdo completo dos Níveis 3 e 4 (missões detalhadas)
- [ ] Especificação dos interativos por missão
- [ ] Fluxo de perfil (acesso via avatar circle)
